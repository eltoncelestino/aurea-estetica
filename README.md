# Aurea Estética Avançada (projeto fictício de portfólio)
Landing page + captura de leads + automação de WhatsApp para uma clínica de estética em Fortaleza/CE.

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

## Antes de publicar
Troque os placeholders por imagens livres (Unsplash/Pexels) com legenda "imagem ilustrativa" e mantenha o aviso de projeto fictício no rodapé.
