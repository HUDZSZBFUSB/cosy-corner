"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cosy-cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        // Ne pas restaurer la garantie étendue — elle ne doit jamais être pré-cochée
        setItems(parsed.filter((i) => i.handle !== "garantie-etendue"));
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("cosy-cart", JSON.stringify(items));
  }, [items, mounted]);

  function addItem(item) {
    setItems((prev) => {
      const key = (i) => `${i.handle}::${i.variant || ""}`;
      const existing = prev.find((i) => key(i) === key(item));
      if (existing) {
        return prev.map((i) => key(i) === key(item) ? { ...i, qty: i.qty + (item.qty || 1) } : i);
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
    setOpen(true);
  }

  function removeItem(handle, variant) {
    setItems((prev) => prev.filter((i) => !(i.handle === handle && i.variant === variant)));
  }

  function updateQty(handle, variant, qty) {
    setItems((prev) =>
      prev
        .map((i) => (i.handle === handle && i.variant === variant ? { ...i, qty } : i))
        .filter((i) => i.qty > 0)
    );
  }

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, open, setOpen, addItem, removeItem, updateQty, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
