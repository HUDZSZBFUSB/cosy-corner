"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageview } from "@/lib/track";

const ADMIN_URL = "https://cosy-saas.vercel.app";
const PING_INTERVAL = 20000;

function getSessionId() {
  if (typeof window === "undefined") return null;
  let id = sessionStorage.getItem("cosy_sess");
  if (!id) {
    id = "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    sessionStorage.setItem("cosy_sess", id);
  }
  return id;
}

/* GPS du navigateur — précis à quelques mètres */
function getGpsGeo() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      ()    => resolve(null),
      { timeout: 5000, maximumAge: 300000 }
    );
  });
}

/* Reverse geocode avec nominatim (gratuit, no key) */
async function reverseGeocode(lat, lng) {
  try {
    const res  = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      { headers: { "Accept-Language": "fr" } }
    );
    const data = await res.json();
    return {
      city:    data.address?.city || data.address?.town || data.address?.village || "",
      country: data.address?.country || "",
    };
  } catch {
    return { city: "", country: "" };
  }
}

/* Fallback IP — ipapi.co */
async function getIpGeo() {
  try {
    const res  = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    const data = await res.json();
    return {
      lat:     data.latitude    || null,
      lng:     data.longitude   || null,
      city:    data.city        || "",
      country: data.country_name || "",
    };
  } catch {
    return { lat: null, lng: null, city: "", country: "" };
  }
}

async function getGeo() {
  /* 1. Check cache */
  const cached = sessionStorage.getItem("cosy_geo");
  if (cached) return JSON.parse(cached);

  /* 2. Try GPS first (exact position) */
  const gps = await getGpsGeo();
  if (gps) {
    const place = await reverseGeocode(gps.lat, gps.lng);
    const geo   = { lat: gps.lat, lng: gps.lng, ...place };
    sessionStorage.setItem("cosy_geo", JSON.stringify(geo));
    return geo;
  }

  /* 3. Fallback: IP geolocation */
  const geo = await getIpGeo();
  sessionStorage.setItem("cosy_geo", JSON.stringify(geo));
  return geo;
}

async function ping(session_id, page, geo) {
  try {
    await fetch(`${ADMIN_URL}/api/webhook/ping`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id, page, ...geo }),
    });
  } catch { /* admin not running */ }
}

export default function Analytics() {
  const pathname = usePathname();
  const geoRef   = useRef(null);

  useEffect(() => {
    const id = getSessionId();
    if (!id) return;

    let interval;

    async function start() {
      if (!geoRef.current) {
        geoRef.current = await getGeo();
      }
      ping(id, pathname, geoRef.current);
      trackPageview({ page: pathname, ref: document.referrer });
      interval = setInterval(() => ping(id, pathname, geoRef.current), PING_INTERVAL);
    }

    start();
    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
