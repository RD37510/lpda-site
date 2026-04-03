"use client";

import { FormEvent, useState } from "react";

const sanitizeInput = (value: string) => value.replace(/[<>]/g, "").trim();

const initialFormState = {
  name: "",
  email: "",
  message: "",
  vehicle: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const message = sanitizeInput(formData.message);
    const vehicle = sanitizeInput(formData.vehicle);

    if (!name || !email || !message || !vehicle) {
      setErrorMessage("Merci de compléter tous les champs avec des valeurs valides.");
      setStatus("error");
      return;
    }

    setStatus("success");
    setErrorMessage("");
    setFormData(initialFormState);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-live="polite">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs uppercase tracking-[0.4em] text-white/60">
          Nom complet
        </label>
        <input
          id="name"
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
          placeholder="Ex. Julie Martin"
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-[0.4em] text-white/60">
          Email professionnel
        </label>
        <input
          id="email"
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
          placeholder="Ex. contact@entreprise.com"
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.4em] text-white/60">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
          className="min-h-[140px] rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
          placeholder="Expliquez vos besoins (défauts, objectif, date souhaitée)."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="vehicle" className="text-xs uppercase tracking-[0.4em] text-white/60">
          Véhicule
        </label>
        <input
          id="vehicle"
          value={formData.vehicle}
          onChange={(event) => setFormData((prev) => ({ ...prev, vehicle: event.target.value }))}
          className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-red-500 focus:outline-none"
          placeholder="Ex. Audi A3 • AB-123-CD"
        />
      </div>

      <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.4em] text-white/70">
        <span className="text-green-400">Status : {status === "success" ? "Message prêt" : status === "error" ? "Erreur" : "À soumettre"}</span>
        {status === "error" && <span className="text-red-500">{errorMessage}</span>}
        {status === "success" && (
          <span className="text-green-300">Votre demande est prête. Nous vous rappelons sous 24h.</span>
        )}
      </div>

      <button
        className="w-full rounded-full border border-white/40 bg-white/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-red-500 hover:text-white"
        type="submit"
      >
        Envoyer la demande
      </button>
    </form>
  );
}