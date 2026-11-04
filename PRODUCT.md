# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated, now decided: static HTML/CSS with a little vanilla JS, no framework, at the repository root (`index.html`, `assets/css/styles.css`, `assets/js/main.js`, self-hosted fonts and images). It is a one-page site whose only conversion is a WhatsApp link, and static files are the easiest for a small client to host. The old exported bundle is kept only as a backup of the previous version, in `backup/Laboratorio Exames - Site.html`. Revisit if the client asks for a CMS or online results.

## Users

- **Client:** Laboratório Exames, a clinical analysis lab in Xique-Xique, Bahia. The site is built by an outside designer for this client.
- **Site visitors (inferred from the site copy, to confirm with the client):** local residents of Xique-Xique and nearby towns who need lab tests for themselves or family members (babies, children, adults, elderly people). They usually arrive on a phone, often with a medical order in hand, and want to know price, preparation (fasting), schedule, location, payment and when the result will be ready before leaving home.

## Product Purpose

A landing page that moves the visitor into a WhatsApp conversation with the lab team, where price, preparation and scheduling are settled before the visit. Success is a visitor tapping "Agendar pelo WhatsApp" and the visit arriving prepared.

## Positioning

Service starts on WhatsApp, answered by people (not bots or menus), before the collection. The visitor knows cost, prep and time before leaving home. The site's preparation lookup ("Consulte o preparo do seu exame") opens a WhatsApp message with the exam name already filled in.

## Operating Context

- Primary channel: WhatsApp, link `https://wa.me/5574999103138` with pre-filled message text.
- Visitors can send a photo of their medical order in the chat.
- The site has a per-exam preparation lookup (10 common exams with fasting, prep and turnaround text), an FAQ, a "how it works" 3-step section, a location block with Google Maps link, and a floating WhatsApp button.
- Three headline variants exist in the code (A, B, C) for testing.

## Capabilities and Constraints

Confirmed by the user:
- Name: Laboratório Exames.
- Address: Rua Coronel Albino, 210, Centro, Xique-Xique, Bahia.
- WhatsApp: (74) 99910-3138.
- Hours as shown on the site: WhatsApp Mon–Fri 7h–17h; collection Mon–Fri 6h30–11h, Sat 7h–10h. (User confirmed the contact block; double-check hours with the client before launch.)

Not confirmed, treat as placeholders until the client provides them:
- Technical lead name and registration (site shows "Dra. Ana Paula Ribeiro, CRBM-3 12.345").
- CNPJ (site shows 12.345.678/0001-90, a placeholder pattern).
- PNCQ quality program participation.
- Accepted insurance plans (Planserv, Cassi, Unimed), payment methods (Pix, cash, card up to 3x), "results in 24 hours", free recollection policy.
- Exam prep and turnaround text in the lookup: needs review by the lab's technical lead before launch, since it is health guidance.

Required by Brazilian health context: the footer must keep the technical lead and their council registration, and the note that results must be interpreted by a health professional.

## Brand Commitments

- Name: "Laboratório Exames".
- Voice in the current copy: plain Brazilian Portuguese, warm and direct, second person ("você"), no jargon, stresses human service. Not yet confirmed by the client as binding.
- **Binding (user, 2026-11-03):** the site must look like a real, professional, institutional clinic site, not "AI-looking". Predominantly white ground with blue as the brand colour; clean and sober, no gradients, glows or showy animations. Reference: Clínica Médica Ribeirão (clinicamedicaribeirao.com.br); Clínica da Cidade (clinicadacidade.com.br) also named but could not be opened (Cloudflare block), prints pending.
- **Binding layout parts:** top bar with phone, WhatsApp, address and hours; white menu with logo, links and a WhatsApp booking button; a campaign banner carousel right below the menu (Outubro Rosa, Novembro Azul, promotions) that the owner swaps easily; slots for real photos of the lab and team; full footer in dark blue with contacts, hours, CNPJ and technical lead; floating WhatsApp button.

## Evidence on Hand

- Two embedded photos in the bundle (one JPEG, one WebP); origin and usage rights unknown.
- **No confirmed social proof.** The Google rating (4.9 · 180 reviews), "15 anos cuidando de Xique-Xique", and the four testimonials (Maria das Graças S., José Carlos A., Ana Beatriz R., Luciana M.) are placeholders. Do not present them as real, and do not invent replacements. Ask the client for real reviews, years in operation and permission to quote patients.

## Product Principles

1. Remove uncertainty before the visit: price, prep, time and place should be one message away.
2. Every path ends in WhatsApp; the site does not try to replace the conversation.
3. Human service is the promise, so the copy should sound like the team, not like a system.
4. Health facts and credentials are shown only when the lab has confirmed them.

## Accessibility & Inclusion

Inferred from the audience, to confirm with the client: elderly visitors and caregivers, mostly on phones, possibly on slow connections. Favor readable text sizes, large tap targets for the WhatsApp actions, and light pages. Target WCAG 2.1 AA.
