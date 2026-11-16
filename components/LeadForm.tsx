"use client";
import { useState } from "react";
import { servicos } from "@/lib/data";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "erro">("idle");
  const [msg, setMsg] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const body = Object.fromEntries(new FormData(e.currentTarget).entries());
    const utm = Object.fromEntries(new URLSearchParams(window.location.search));
    try {
      const r = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, utm }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.erro || "Não foi possível enviar.");
      setStatus("ok");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Erro ao enviar.");
      setStatus("erro");
    }
  }

  if (status === "ok")
    return <p className="rounded bg-sage/30 p-6 text-lg">Recebemos seu pedido. Em instantes você recebe uma mensagem no WhatsApp para combinar o melhor horário.</p>;

  const campo = "w-full rounded border border-graphite/20 bg-white px-4 py-3";
  return (
    <form onSubmit={enviar} className="grid gap-4">
      <label className="grid gap-1">Seu nome<input name="nome" required minLength={2} className={campo} autoComplete="name" /></label>
      <label className="grid gap-1">WhatsApp com DDD<input name="whatsapp" required inputMode="tel" placeholder="(85) 90000-0000" className={campo} autoComplete="tel" /></label>
      <label className="grid gap-1">Tratamento de interesse
        <select name="interesse" className={campo}>{servicos.map((s) => <option key={s.nome}>{s.nome}</option>)}</select>
      </label>
      <label className="grid gap-1">Melhor horário
        <select name="horario" className={campo}><option>Manhã</option><option>Tarde</option><option>Noite</option></select>
      </label>
      <input name="site" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="consentimento" required className="mt-1" />
        Aceito receber mensagens da Aurea no WhatsApp e concordo com a política de privacidade (LGPD). Posso sair a qualquer momento respondendo SAIR.
      </label>
      <button disabled={status === "loading"} className="rounded bg-graphite px-6 py-3 font-semibold text-offwhite transition hover:bg-gold hover:text-graphite disabled:opacity-60">
        {status === "loading" ? "Enviando..." : "Quero minha avaliação gratuita"}
      </button>
      {status === "erro" && <p role="alert" className="text-red-700">{msg}</p>}
    </form>
  );
}
