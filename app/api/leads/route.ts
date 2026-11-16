import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const schema = z.object({
  nome: z.string().min(2).max(80),
  whatsapp: z.string().regex(/^[\d\s()+-]{10,20}$/, "WhatsApp inválido"),
  interesse: z.string().max(80),
  horario: z.string().max(20),
  consentimento: z.string().optional(),
  site: z.string().max(0).optional(), // honeypot
  utm: z.record(z.string()).optional(),
});

// Limite simples em memória (em produção, use Upstash/Redis)
const hits = new Map<string, number[]>();

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  const agora = Date.now();
  const recentes = (hits.get(ip) ?? []).filter((t) => agora - t < 60_000);
  if (recentes.length >= 5) return NextResponse.json({ erro: "Muitas tentativas. Aguarde um minuto." }, { status: 429 });
  hits.set(ip, [...recentes, agora]);

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ erro: "Confira os dados informados." }, { status: 400 });
  const d = parsed.data;
  if (!d.consentimento) return NextResponse.json({ erro: "É necessário aceitar o consentimento." }, { status: 400 });

  const telefone = "55" + d.whatsapp.replace(/\D/g, "").replace(/^55/, "");
  const lead = { nome: d.nome, whatsapp: telefone, interesse: d.interesse, melhor_horario: d.horario, origem: d.utm?.utm_source ?? "site", utm: d.utm ?? {}, consentimento_whatsapp: true };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const { error } = await createClient(url, key).from("leads").insert(lead);
    if (error) return NextResponse.json({ erro: "Falha ao salvar. Tente novamente." }, { status: 500 });
  } else {
    console.log("[DEMO] Supabase não configurado. Lead:", lead);
  }
  if (process.env.N8N_WEBHOOK_URL) {
    fetch(process.env.N8N_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }).catch(() => {});
  }
  return NextResponse.json({ ok: true });
}
