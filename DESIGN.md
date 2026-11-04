---
name: Laboratório Exames
description: Site institucional de laboratório de análises clínicas em Xique-Xique (BA). Fundo branco, azul como cor da marca, visual sóbrio de clínica.
colors:
  navy: "#0A2E57"
  blue: "#0A5BA8"
  blue-dark: "#084A8A"
  blue-tint: "#F2F6FB"
  blue-soft: "#E3EDF8"
  whatsapp-green: "#0D8243"
  whatsapp-green-dark: "#0B7139"
  ink: "#1F2A37"
  muted: "#5A6878"
  line: "#DCE3EB"
  white: "#FFFFFF"
  topbar-text: "#D6E2F0"
  footer-text: "#C9D7E8"
  placeholder-bg: "#FFF6E0"
  placeholder-line: "#C98A00"
  placeholder-ink: "#5C4300"
  topbar-icon: "#8FB6E0"
  dot-idle: "#B8C7D8"
  footer-muted: "#A9BDD6"
  footer-placeholder-ink: "#FFE7A8"
  footer-placeholder-line: "#E5B84C"
typography:
  section-title:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 34px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  card-title:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 26px)"
    fontWeight: 800
    lineHeight: 1.2
  item-title:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
  footer-brand:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  brand:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 19px)"
    fontWeight: 600
    lineHeight: 1.65
  body:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  nav:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "15.8px"
    fontWeight: 600
  button:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
  small:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  topbar:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: "Nunito Sans, Nunito Fallback, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  hairline: "1px"
  bar: "2px"
  xs: "3px"
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  section: "clamp(56px, 7vw, 96px)"
  container: "1200px"
  card: "22px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
    height: "44px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-green-dark}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
  topbar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.topbar-text}"
    typography: "{typography.topbar}"
    height: "40px"
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "76px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
  exam-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "46px"
  exam-option-selected:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.footer-text}"
    typography: "{typography.small}"
---

# Design System: Laboratório Exames

## Overview

**Creative North Star: "Recepção Institucional"**

O site se comporta como a recepção de uma clínica séria: limpo, claro, organizado, com as informações no lugar onde a pessoa espera encontrá-las. Ele segue a gramática dos sites de clínica e laboratório que o público já conhece (faixa de contatos, menu branco, banner de campanha, atalhos, seções em blocos, rodapé azul escuro), executada com cuidado em vez de reinventada. A referência confirmada é o site da Clínica Médica Ribeirão; o da Clínica da Cidade foi citado, mas não pôde ser aberto.

O fundo é branco, alternando com um azul muito claro para separar seções. O azul é a única cor de marca; o verde aparece só nas ações de WhatsApp. Não há degradês, brilhos, sombras decorativas nem animações chamativas: o único movimento da página é o carrossel de campanhas, que troca a cada 7 segundos e para quando a pessoa interage.

As fotos são reais (fachada, recepção, sala de coleta, equipe) e retas, com cantos discretos. Os ícones são de traço fino, em azul, dentro de quadrados azul-claro. Uma única família tipográfica (Nunito Sans) faz títulos, texto e botões.

**Key Characteristics:**
- Branco como fundo, azul como marca, azul-marinho na faixa superior e no rodapé.
- Estrutura de clínica: faixa de contatos, menu branco, carrossel de campanhas, atalhos, seções, rodapé completo.
- Uma só fonte, em três pesos (400, 600-700, 800).
- Bordas finas de 1px e cantos de 6 a 8px; sombra só no menu ao rolar e no botão flutuante.
- Fotos reais em vez de ilustrações; banners de campanha trocáveis.
- Dados não confirmados aparecem com tarja tracejada "a confirmar".

## Colors

Azul institucional sobre branco, com azul-marinho para as faixas de moldura e verde reservado ao WhatsApp.

### Primary
- **Azul Marca** (blue): links, ícones, botão de exame selecionado, filete abaixo dos títulos, bolinha ativa do carrossel, números dos passos.
- **Azul Escuro** (blue-dark): hover de links.
- **Azul-Marinho** (navy): faixa superior, rodapé e títulos.

### Secondary
- **Verde WhatsApp** (whatsapp-green): somente botões e links que abrem o WhatsApp (menu, preparo, botão flutuante). Hover: whatsapp-green-dark.

### Neutral
- **Branco** (white): fundo principal, cards, menu.
- **Azul Gelo** (blue-tint): fundo das seções alternadas (preparo, estrutura, dúvidas).
- **Azul Suave** (blue-soft): fundo dos ícones dos atalhos e marcas de seleção.
- **Texto** (ink), **Texto Suave** (muted), **Linha** (line).
- **Texto da faixa** (topbar-text) e **Texto do rodapé** (footer-text) sobre o azul-marinho.
- **Placeholder** (placeholder-bg, placeholder-line, placeholder-ink): tarja amarela tracejada para dados a confirmar; no rodapé escuro usa footer-placeholder-ink e footer-placeholder-line.
- **Detalhes de moldura:** topbar-icon (ícones da faixa superior), dot-idle (bolinhas inativas do carrossel), footer-muted (barra inferior do rodapé).

### Named Rules
**The One Brand Colour Rule.** O azul é a cor da marca e aparece em todo lugar onde algo é clicável ou ativo. Nenhuma outra cor compete com ele; o verde existe só para o WhatsApp.

**The Plain Surface Rule.** Superfícies são cores chapadas. Nada de degradê, brilho, vidro ou textura.

## Typography

**Família única:** Nunito Sans (auto-hospedada, pesos 400 a 800), com fallback métrico em Arial.

**Character:** sans-serif humanista, legível e amigável sem ser informal, adequada a público de todas as idades.

### Hierarchy
- **Section title** (section-title): títulos de seção, em azul-marinho, com um filete azul de 48×3px abaixo.
- **Card title** (card-title): nome do exame no card de preparo.
- **Item title** (item-title): passos do atendimento.
- **Brand** (brand): nome no menu, com "Análises clínicas" embaixo em 13px.
- **Lead** (lead): primeiro parágrafo de "Quem somos".
- **Body** (body): texto corrido, 17px, entrelinha 1,65.
- **Nav** (nav), **Button** (button), **Small** (small), **Topbar** (topbar), **Label** (label, caixa alta só em "Responsável técnica").

### Named Rules
**The One Family Rule.** Uma só família tipográfica. A hierarquia vem de tamanho, peso e cor, não de fontes diferentes.

## Layout

Contêiner de 1200px com margem lateral fluida. Ordem da página: faixa superior → menu fixo → carrossel de campanhas → atalhos → Quem somos → Preparo de exames → Como funciona → Estrutura e equipe → Depoimentos → Dúvidas → Como chegar (com mapa) → rodapé. Seções alternam branco e azul gelo.

- **Faixa superior:** telefone, WhatsApp, endereço e horário de coleta. Abaixo de 1024px some o endereço; abaixo de 640px fica só telefone e WhatsApp, centralizados.
- **Menu:** fixo no topo ao rolar, branco com borda inferior. Abaixo de 1024px os links viram um menu de três linhas; abaixo de 560px o botão de WhatsApp vira só o ícone.
- **Carrossel:** largura total, proporção 3:1 no computador e 1:1 no celular, controles (setas, bolinhas, pausa) numa faixa branca logo abaixo da imagem, nunca sobre a arte.
- **Atalhos:** 4 colunas acima de 900px, 2 abaixo.
- **Rodapé:** 4 colunas acima de 1024px (marca, contato, horários, institucional), 2 entre 640 e 1023px, 1 abaixo; barra inferior com direitos e aviso.

## Elevation & Depth

Sistema plano. Separação por borda de 1px e por fundo alternado. Sombras são resposta, nunca enfeite:
- **Menu fixo ao rolar:** `0 2px 8px rgba(10,46,87,.08)`; menu aberto no celular `0 8px 16px rgba(10,46,87,.08)`.
- **Hover de cards** (atalhos, passos, depoimentos): `0 8px 20px rgba(10,46,87,.08)`; atalhos também sobem 2px.
- **Hover de botões:** sobem 1px com `0 4px 12px rgba(10,46,87,.12)`; ao clicar voltam ao lugar.
- **Botão flutuante:** `0 4px 12px rgba(10,46,87,.25)`.

### Movimento
Curto, consistente e ligado a uma resposta; uma só curva (`cubic-bezier(.22,.61,.36,1)`). Tudo desliga com `prefers-reduced-motion`.
- Hover/press de botões e cards: 0,2s.
- Seções surgem uma vez ao rolar (0,5s, 14px, 70ms entre itens vizinhos), só o que está abaixo da primeira tela.
- Carrossel: troca a cada 7s; a bolinha ativa vira uma pílula que se preenche durante o tempo do banner e para quando o carrossel pausa.
- FAQ abre suave (0,25s); menu do celular desce 6px ao abrir; sublinhado do menu cresce do centro e marca a seção visível.
- Velocímetro: ponteiro e arco em 0,6s, sem passar do ponto; rótulos de hora até a leitura ficam azul-marinho.
- Botão do WhatsApp: um anel discreto pulsa duas vezes, 4s depois de abrir a página, uma vez por visita; etiqueta "Fale conosco" no hover.

## Shapes

Cantos discretos: 6px em botões e opções, 8px em cards, fotos e mapa, 3px na tarja de placeholder. Círculos só nos números dos passos, nos botões do carrossel e no botão flutuante.

## Components

### Banner carousel (Signature Component)
- Cada banner é um bloco `<li class="slide">` em `index.html`, com uma imagem de computador (1920×640) e uma de celular (1080×1080) e um link.
- Troca a cada 7 segundos para todos; para em hover, foco e quando a aba fica oculta; botão de pausa sempre visível.
- Com movimento reduzido a troca é instantânea, sem deslizar.
- Banners ocultos ficam fora do Tab e dos leitores de tela; setas do teclado e deslize no celular funcionam.

### Buttons
- **WhatsApp:** verde, texto branco, ícone de balão, 44px de altura (52px no preparo).
- **Outline:** borda e texto azul, vira azul cheio no hover ("Abrir no Google Maps").

### Cards
Branco, borda 1px, cantos 8px, padding de 22px, sem sombra: atalhos, passos, depoimentos, card de preparo, responsável técnica.

### Preparo de exames com velocímetro de jejum
- **Dados:** todos em `assets/js/exames.js` (nome, jejum em horas, observação, preparo, resultado). Os botões são gerados a partir dessa lista.
- **Exames:** grade de 2 colunas de botões simples (borda cinza, azul cheio quando selecionado), grupo de rádio com uma parada de Tab e setas.
- **Card:** branco, borda 1px cinza-clara, cantos de 8px.
- **Velocímetro:** meio arco de 0 a 12h, traço de 6px; trilho em line (#DCE3EB), preenchimento em azul marca; marcas finas em 0h, 4h, 8h e 12h com rótulos de 11px; ponteiro azul-marinho de 2,5px com eixo circular. Movimento de 0,6s em cubic-bezier(.22,.61,.36,1), sem passar do ponto; instantâneo com movimento reduzido.
- **Leitura:** número em 44px peso 800 com "horas", legenda "de jejum" abaixo. Sem jejum: ponteiro no zero, preenchimento oculto e o texto "Sem necessidade de jejum".
- **Orientações:** lista com ícones de linha finos em azul (gota = jejum, prancheta = preparo, relógio = resultado), título em azul-marinho e texto limpo.
- **Ação:** botão de WhatsApp centralizado (largura total abaixo de 420px) com o nome do exame na mensagem.

### FAQ
Lista dentro de um card, perguntas em 17px peso 700, ícone de mais/menos desenhado em CSS.

### Placeholder de conteúdo
Tarja amarela tracejada para todo dado não confirmado (CNPJ, responsável técnica, convênios, depoimentos, preparo).

## Do's and Don'ts

### Do:
- **Do** manter o fundo branco e o azul como única cor de marca.
- **Do** usar fotos reais do laboratório e da equipe nos espaços reservados (1200×900, 4:3).
- **Do** trocar banners mantendo os tamanhos 1920×640 e 1080×1080, com textos dentro da área segura central.
- **Do** manter todos os botões e links com pelo menos 44px de área de toque.
- **Do** marcar dados não confirmados com a tarja "a confirmar".

### Don't:
- **Don't** usar degradês, brilhos ou sombras decorativas; a entrada das seções é a única animação de rolagem e acontece uma vez.
- **Don't** fazer o ponteiro do velocímetro balançar ou passar do ponto; o movimento é curto, suave e direto.
- **Don't** usar o verde fora do WhatsApp.
- **Don't** colocar controles do carrossel sobre a arte do banner.
- **Don't** usar ilustrações no lugar de fotos reais.
- **Don't** adicionar uma segunda família tipográfica.
