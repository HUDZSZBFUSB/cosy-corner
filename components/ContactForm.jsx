"use client";

import { useState } from "react";

const SUBJECTS = [
  "Question avant commande",
  "Suivi de commande",
  "Problème de livraison",
  "Retour / remboursement",
  "Autre",
];

export default function ContactForm() {
  const [state, setState] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderId: "",
    subject: SUBJECTS[0],
    message: "",
  });

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  function submit(e) {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    // Fake submit — UX functional without a backend.
    setTimeout(() => setState("sent"), 900);
  }

  if (state === "sent") {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold">Message envoyé !</h3>
        <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
          Merci {form.name?.split(" ")[0] || ""}, nous vous répondons à{" "}
          <strong>{form.email}</strong> sous 24h ouvrées.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-neutral-500">
          <span>Référence</span>
          <code className="bg-neutral-100 px-2 py-1 rounded">
            CC-{Math.random().toString(36).slice(2, 9).toUpperCase()}
          </code>
        </div>
        <button
          onClick={() => { setState("idle"); setForm({ name: "", email: "", orderId: "", subject: SUBJECTS[0], message: "" }); }}
          className="mt-6 text-sm font-medium text-neutral-900 underline hover:opacity-70"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nom complet" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jean Dupont"
            className="field"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="vous@exemple.com"
            className="field"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="N° de commande (optionnel)">
          <input
            type="text"
            value={form.orderId}
            onChange={(e) => set("orderId", e.target.value)}
            placeholder="CC-123456"
            className="field"
          />
        </Field>
        <Field label="Sujet" required>
          <select
            value={form.subject}
            onChange={(e) => set("subject", e.target.value)}
            className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23666%22 stroke-width=%222.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_12px_center] pr-9"
          >
            {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Votre message" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Décrivez votre demande…"
          className="field resize-none leading-relaxed"
        />
      </Field>

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-black text-white rounded-full py-4 font-bold tracking-wider uppercase text-[14px] hover:bg-neutral-800 transition disabled:opacity-60"
      >
        {state === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
        En envoyant ce formulaire, vous acceptez notre{" "}
        <a href="#" className="underline">politique de confidentialité</a>.
      </p>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-neutral-700 mb-1.5">
        {label} {required && <span className="text-neutral-400">*</span>}
      </span>
      {children}
    </label>
  );
}
