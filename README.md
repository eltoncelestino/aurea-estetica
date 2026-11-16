# Aurea Estética Avançada

> Projeto fictício de portfólio: landing page editorial, captura de leads com LGPD e automação de WhatsApp para uma clínica de estética avançada na Aldeota, Fortaleza/CE.

---

## Prévia Visual do Sistema

| Hero & Identidade Visual | Menu de Tratamentos | O Espaço na Aldeota |
| :---: | :---: | :---: |
| ![Hero da clínica Aurea Estética Avançada](public/images/hero-clinic.jpg) | ![Tratamento facial com sérum](public/images/facial-treatment.jpg) | ![Ambiente interno da clínica](public/images/clinic-space.jpg) |
| *Seção principal em arco com card flutuante de avaliação gratuita* | *Destaque lateral fixo ao lado da lista de procedimentos* | *Apresentação do espaço climatizado e recepção* |

- **Favicon personalizado:** [`app/icon.svg`](app/icon.svg) — monograma `"A"` em dourado (`#C9A66B`) sobre fundo grafite (`#2B2B2B`) com detalhe rosé (`#E8C9C0`).

---

## Funcionalidades

- **Landing page editorial responsiva:** construída com paleta rosé (`#E8C9C0`), off-white (`#FAF6F2`), dourado (`#C9A66B`), sálvia (`#A8B5A0`) e grafite (`#2B2B2B`), combinando as fontes *Cormorant Garamond* e *Nunito Sans*.
- **Animações e microinterações:**
  - Entrada escalonada no Hero (`fadeUp`) e flutuação suave (`floatSlow`) definidas em [`app/globals.css`](app/globals.css).
  - Revelação ao rolar a página via `IntersectionObserver` no componente [`components/Reveal.tsx`](components/Reveal.tsx).
  - Respeito automático a `prefers-reduced-motion: reduce`.
- **Captura de leads (`POST /api/leads`):**
  - Formulário em [`components/LeadForm.tsx`](components/LeadForm.tsx) com consentimento LGPD e captura de parâmetros UTM.
  - Validação com `zod`, campo *honeypot* anti-spam e limite de requisições em memória em [`app/api/leads/route.ts`](app/api/leads/route.ts).
  - Modo demonstração automático quando o Supabase não está configurado (registra o lead no terminal).
- **Conversão direta pelo WhatsApp:** links pré-preenchidos por seção e botão flutuante em [`components/WhatsAppButton.tsx`](components/WhatsAppButton.tsx) via [`lib/whatsapp.ts`](lib/whatsapp.ts).
- **SEO & Dados Estruturados:** `Schema.org` (`BeautySalon`) e OpenGraph configurados em [`app/layout.tsx`](app/layout.tsx).

---

## Stack Tecnológica

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Estilização:** Tailwind CSS
- **Validação:** Zod
- **Banco de Dados:** Supabase (`@supabase/supabase-js`)
- **Automação:** n8n + WhatsApp Cloud API

---

## Estrutura do Projeto

```text
app/
  api/leads/route.ts   # Endpoint de captura e validação de leads
  globals.css          # Estilos globais e keyframes de animação
  icon.svg             # Favicon SVG da marca
  layout.tsx           # Fontes, metadata e JSON-LD Schema.org
  page.tsx             # Landing page completa
components/
  LeadForm.tsx         # Formulário de avaliação gratuita
  Reveal.tsx           # Wrapper de animação ao rolar (IntersectionObserver)
  WhatsAppButton.tsx   # Botão flutuante com indicador pulsante
lib/
  data.ts              # Conteúdo de serviços, pacotes, depoimentos e FAQ
  whatsapp.ts          # Gerador de links wa.me com rastreio de origem
public/images/         # Imagens ilustrativas otimizadas com next/image
supabase/schema.sql    # Estrutura de tabelas para o Supabase
automations/           # Fluxo n8n e modelos de mensagens WhatsApp
```

---

## Rodar localmente

1. `npm install`
2. Copie `.env.example` para `.env.local` e preencha (use seu número de teste em `NEXT_PUBLIC_WHATSAPP_NUMBER`).
3. `npm run dev` e abra http://localhost:3000

Sem Supabase configurado, o formulário funciona em modo demonstração (o lead aparece no terminal).

## Banco de dados

Crie um projeto no Supabase e execute `supabase/schema.sql` no SQL Editor.

## Automação

Importe `automations/n8n-novo-lead.json` no n8n, ajuste `SEU_PHONE_NUMBER_ID` e `SEU_TOKEN` (WhatsApp Cloud API) e coloque a URL do webhook em `N8N_WEBHOOK_URL`. Os textos estão em `automations/mensagens-whatsapp.md`.

## Deploy

Suba para o GitHub, importe na Vercel e cadastre as variáveis de ambiente.

## Não incluído nesta versão

Agendamento online completo (o banco já impede dupla reserva), painel administrativo, páginas por serviço e bairro, galeria antes e depois, GA4 e Meta Pixel, e os fluxos n8n de lembretes e pós-atendimento (textos prontos no arquivo de mensagens).

## Aviso

Projeto fictício desenvolvido para fins de portfólio. Imagens meramente ilustrativas.
