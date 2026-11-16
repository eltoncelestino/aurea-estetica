import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Aurea Estética Avançada | Clínica de Estética em Fortaleza, CE",
  description: "Limpeza de pele, microagulhamento, cílios, drenagem e laser na Aldeota, Fortaleza. Avaliação gratuita e agendamento pelo WhatsApp.",
  openGraph: { title: "Aurea Estética Avançada", description: "Realce o que já é seu.", locale: "pt_BR", type: "website" },
};

const schema = {
  "@context": "https://schema.org", "@type": "BeautySalon", name: "Aurea Estética Avançada",
  address: { "@type": "PostalAddress", streetAddress: "Rua das Acácias, 245, sala 12", addressLocality: "Fortaleza", addressRegion: "CE", addressCountry: "BR" },
  areaServed: ["Aldeota", "Meireles", "Cocó", "Dionísio Torres"],
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
