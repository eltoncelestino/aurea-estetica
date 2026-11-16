import Image from "next/image";
import { negocio, servicos, pacotes, depoimentos, faq } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

const btn =
  "inline-flex items-center justify-center rounded-full bg-graphite px-7 py-3.5 font-semibold text-offwhite shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-graphite hover:shadow-md";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border border-graphite/40 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-graphite hover:bg-graphite/5";
const link = "font-semibold underline decoration-gold underline-offset-4 transition-colors hover:text-gold";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-graphite/10 bg-offwhite/90 px-5 py-3.5 backdrop-blur-md transition-colors md:px-12">
        <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-gold transition-opacity hover:opacity-80">
          Aurea
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex" aria-label="Principal">
          <a href="#tratamentos" className="relative py-1 transition-colors hover:text-gold">Tratamentos</a>
          <a href="#espaco" className="relative py-1 transition-colors hover:text-gold">O Espaço</a>
          <a href="#pacotes" className="relative py-1 transition-colors hover:text-gold">Pacotes</a>
          <a href="#faq" className="relative py-1 transition-colors hover:text-gold">Dúvidas</a>
          <a href="#contato" className="relative py-1 transition-colors hover:text-gold">Contato</a>
        </nav>
        <a href={whatsappLink("Olá! Quero agendar uma avaliação.", "header")} className={`text-sm ${link}`}>
          Agendar
        </a>
      </header>

      <section className="relative grid gap-12 bg-gradient-to-br from-rose/45 via-rose/25 to-offwhite px-5 py-16 md:grid-cols-2 md:items-center md:px-12 md:py-24">
        <div className="max-w-xl">
          <span className="animate-fade-up inline-block rounded-full border border-gold/40 bg-offwhite/70 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-graphite/80">
            Aldeota · Fortaleza, CE
          </span>
          <h1
            className="animate-fade-up mt-5 font-serif text-5xl leading-[1.03] md:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            {negocio.slogan}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-md text-lg leading-relaxed text-graphite/85"
            style={{ animationDelay: "180ms" }}
          >
            Cuidados de pele e corpo pensados para o clima de Fortaleza, com resultado natural e avaliação gratuita na Aldeota.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "270ms" }}>
            <a href={whatsappLink("Olá! Quero agendar uma avaliação gratuita.", "hero")} className={btn}>
              Agendar pelo WhatsApp
            </a>
            <a href="#contato" className={btnOutline}>
              Receber contato
            </a>
          </div>
          <p className="animate-fade-up mt-8 flex items-center gap-2 text-sm text-graphite/75" style={{ animationDelay: "360ms" }}>
            <span className="inline-block h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            Mais de 4.000 atendimentos em Fortaleza desde 2018
          </p>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-md" style={{ animationDelay: "180ms" }}>
          <div className="relative">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-t-full border border-gold/35 bg-rose/20 shadow-xl">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Paciente relaxando em sala iluminada da clínica Aurea Estética Avançada"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/25 via-transparent to-transparent" />
            </div>
            <div className="animate-float-slow absolute bottom-4 left-4 right-4 rounded-2xl border border-gold/30 bg-offwhite/90 px-5 py-3.5 shadow-lg backdrop-blur-md sm:left-6 sm:right-auto sm:w-64">
              <p className="font-serif text-lg font-medium text-graphite">Avaliação gratuita</p>
              <p className="text-xs text-graphite/75">Protocolo individualizado para o sol e a umidade do Ceará.</p>
            </div>
          </div>
          <p className="mt-3 text-right text-[11px] uppercase tracking-wider text-graphite/55">Imagem ilustrativa</p>
        </div>
      </section>

      <section id="tratamentos" className="px-5 py-20 md:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Menu de cuidados</p>
              <h2 className="mt-2 font-serif text-4xl md:text-5xl">Tratamentos</h2>
            </div>
            <p className="max-w-md text-sm text-graphite/75">
              Procedimentos faciais e corporais realizados com ativos selecionados e acompanhamento da Dra. Helena Marques.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
          <Reveal delay={100} className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-graphite/10 bg-white shadow-sm">
              <div className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/facial-treatment.jpg"
                  alt="Aplicação suave de sérum facial em procedimento estético"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-serif text-2xl">Beleza sem exageros</p>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite/75">
                  Cada protocolo começa com uma escuta atenta e análise da sua pele para respeitar seus traços naturais.
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-graphite/50">Imagem ilustrativa</p>
              </div>
            </div>
          </Reveal>

          <ul className="divide-y divide-graphite/15 border-y border-graphite/15">
            {servicos.map((s, idx) => (
              <li key={s.nome}>
                <Reveal delay={Math.min(idx * 45, 250)}>
                  <div className="group grid gap-3 rounded-lg px-3 py-6 transition-colors duration-300 hover:bg-rose/20 md:grid-cols-[2fr_3fr_auto] md:items-center md:gap-8">
                    <div>
                      <h3 className="font-serif text-2xl transition-colors group-hover:text-graphite">{s.nome}</h3>
                      <p className="mt-0.5 text-sm text-graphite/70">
                        {s.duracao} · <span className="font-semibold text-graphite">a partir de {s.preco}</span>
                      </p>
                    </div>
                    <p className="text-graphite/85">{s.desc}</p>
                    <a
                      href={whatsappLink(`Olá! Quero saber mais sobre: ${s.nome}.`, "servico")}
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap ${link}`}
                    >
                      Quero este tratamento
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-graphite/70">Valores ilustrativos. Resultados variam de pessoa para pessoa.</p>
      </section>

      <section id="espaco" className="bg-offwhite px-5 py-16 md:px-12">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-gold/25 bg-rose/20 p-6 md:grid-cols-2 md:p-10">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/clinic-space.jpg"
                alt="Recepção e ambiente interno sereno da clínica Aurea Estética Avançada"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-offwhite/85 px-3 py-1 text-[10px] uppercase tracking-wider text-graphite/70 backdrop-blur-sm">
                Imagem ilustrativa
              </span>
            </div>
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Nosso espaço na Aldeota</p>
              <h2 className="mt-2 font-serif text-4xl">Um refúgio de calma no ritmo de Fortaleza</h2>
              <p className="mt-4 leading-relaxed text-graphite/85">
                Salas climatizadas, iluminação suave e atendimento com hora marcada para você desacelerar desde a recepção.
              </p>
              <div className="mt-6 grid gap-2 text-sm text-graphite/80 sm:grid-cols-2">
                <p className="rounded-xl bg-offwhite/80 px-4 py-3">Estacionamento fácil na rua</p>
                <p className="rounded-xl bg-offwhite/80 px-4 py-3">Atendimento pontual e reservado</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="pacotes" className="bg-sage/25 px-5 py-20 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-graphite/70">Combinações especiais</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Pacotes</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {pacotes.map((p, idx) => {
            const destaque = idx === 1;
            return (
              <Reveal key={p.nome} delay={idx * 100}>
                <article
                  className={`relative flex h-full flex-col justify-between rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                    destaque
                      ? "border-gold bg-offwhite shadow-md"
                      : "border-gold/30 bg-offwhite/85 shadow-sm hover:border-gold"
                  }`}
                >
                  <div>
                    {destaque && (
                      <span className="mb-3 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-graphite">
                        Mais procurado
                      </span>
                    )}
                    <h3 className="font-serif text-2xl">{p.nome}</h3>
                    <p className="mt-2 font-serif text-3xl font-semibold text-graphite">{p.preco}</p>
                    <p className="mt-3 leading-relaxed text-graphite/80">{p.desc}</p>
                  </div>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse no pacote: ${p.nome}.`, "pacote")}
                    className={`mt-6 inline-block text-sm ${link}`}
                  >
                    Reservar pacote
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-offwhite/80 px-5 py-2 text-sm font-medium shadow-sm">
            <span className="text-gold" aria-hidden="true">✦</span>
            Primeira visita: 15% de desconto na limpeza de pele.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-20 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Depoimentos</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Quem já passou por aqui</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {depoimentos.map((d, idx) => (
            <Reveal key={d.nome} delay={idx * 100}>
              <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-graphite/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <p className="text-sm tracking-widest text-gold" aria-label={`Nota ${d.nota} de 5`}>★★★★★</p>
                  <p className="mt-4 font-serif text-xl leading-snug text-graphite">“{d.texto}”</p>
                </div>
                <footer className="mt-6 border-t border-graphite/10 pt-3 text-sm text-graphite/75">
                  <strong className="font-semibold text-graphite">{d.nome}</strong> · {d.info} · nota {d.nota}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-rose/30 px-5 py-20 md:px-12">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-graphite/70">Tire suas dúvidas</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">Dúvidas frequentes</h2>
        </Reveal>
        <div className="mt-8 grid max-w-3xl gap-3">
          {faq.map((f, idx) => (
            <Reveal key={f.p} delay={idx * 60}>
              <details className="group rounded-xl border border-graphite/10 bg-offwhite/80 px-5 py-4 transition-colors hover:bg-offwhite">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{f.p}</span>
                  <span className="text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-graphite/80">{f.r}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contato" className="grid gap-12 px-5 py-20 md:grid-cols-2 md:items-start md:px-12">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Atendimento personalizado</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Agende sua avaliação gratuita</h2>
            <div className="mt-6 space-y-2 text-graphite/85">
              <p>{negocio.endereco}</p>
              <p>{negocio.horarios}</p>
              <p className="pt-2">Instagram: <span className="font-semibold">{negocio.instagram}</span></p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm md:p-8">
            <LeadForm />
          </div>
        </Reveal>
      </section>

      <footer className="bg-graphite px-5 py-10 text-sm text-offwhite md:px-12">
        <p>Projeto fictício desenvolvido para fins de portfólio. Nenhum serviço é real.</p>
        <p className="mt-2 text-offwhite/75">Aurea Estética Avançada · CNPJ 00.000.000/0001-00 (fictício)</p>
      </footer>
      <WhatsAppButton />
    </main>
  );
}
