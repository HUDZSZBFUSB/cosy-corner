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

/* Géolocalisation par IP — silencieuse, aucune popup */
async function getGeo() {
  const cached = sessionStorage.getItem("cosy_geo");
  if (cached) return JSON.parse(cached);

  try {
    const res  = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    const data = await res.json();
    const geo  = {
      lat:     data.latitude     || null,
      lng:     data.longitude    || null,
      city:    data.city         || "",
      country: data.country_name || "",
    };
    sessionStorage.setItem("cosy_geo", JSON.stringify(geo));
    return geo;
  } catch {
    return { lat: null, lng: null, city: "", country: "" };
  }
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
