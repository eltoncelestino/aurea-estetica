import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de agendar uma avaliação na Aurea.", "botao-flutuante")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-graphite px-5 py-3 text-sm font-semibold text-offwhite shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-graphite hover:shadow-xl"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75 group-hover:bg-graphite" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold group-hover:bg-graphite" />
      </span>
      Agendar pelo WhatsApp
    </a>
  );
}
