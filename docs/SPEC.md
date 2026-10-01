# ORIZON Website Spec

## Objetivo

Apresentar a ORIZON como uma parceira de estratégia, design e tecnologia para negócios que precisam construir uma presença digital mais clara e desejável. O ORIZON Loyalty aparece como produto proprietário para restaurantes, sem substituir o posicionamento principal da empresa.

## Direção visual

- Paleta centralizada em `src/index.css`: `--ink`, `--gold`, `--paper` e derivados.
- Contraste preto/dourado, superfícies neutras e bordas de 1px.
- Tipografia: Manrope para títulos e DM Sans para leitura, carregadas via Google Fonts.
- Layout mobile-first, com respiro amplo, grid editorial e microanimações CSS discretas.
- Iconografia exclusivamente Phosphor Icons. Lottie fica instalado para futuros estados de produto que precisem de animação vetorial controlada.

## Arquitetura atual

- `src/App.jsx`: página única, dados de serviços/FAQ e interações locais.
- `src/App.css`: componentes visuais e breakpoints.
- `src/index.css`: tokens globais e reset.
- `index.html`: metadados SEO básicos e Open Graph.

## Integrações futuras

1. Conectar o formulário a Resend, Formspree ou endpoint próprio. Atualmente o formulário confirma o envio localmente para permitir validar o fluxo visual.
2. Substituir links de Instagram e WhatsApp pelos canais oficiais definitivos.
3. Adicionar imagem OG, favicon e sitemap/robots quando o domínio for definido.
4. Medir eventos de CTA, formulário e WhatsApp com uma ferramenta de analytics com consentimento.
