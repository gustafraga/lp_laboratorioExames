# Laboratório Exames: site

Site institucional do Laboratório Exames (Xique-Xique, BA), no estilo de site de clínica: fundo branco, azul como cor da marca, faixa de contatos, menu, carrossel de campanhas e rodapé completo.

## Onde está cada coisa

| Caminho | O que é |
|---|---|
| `site/` | **O site.** É esta pasta que vai para a hospedagem. |
| `site/index.html` | A página: textos, seções e a lista de banners. |
| `site/assets/css/styles.css` | Cores, fonte, tamanhos e layout. |
| `site/assets/js/exames.js` | **Lista de exames e preparo** (nome, horas de jejum, observação, preparo, prazo do resultado). É o único lugar para editar esses dados. |
| `site/assets/js/main.js` | Menu do celular, carrossel, velocímetro de jejum e dúvidas. Não precisa editar. |
| `site/assets/banners/` | Imagens dos banners de campanha. |
| `site/assets/fotos/` | Fotos da recepção, da sala de coleta e da equipe. |
| `site/assets/img/` | Logo e foto da fachada. |
| `site/assets/fonts/` | Fonte Nunito Sans, hospedada junto com o site. |
| `PRODUCT.md` | Fatos do produto e o que falta confirmar com o cliente. |
| `DESIGN.md` | Sistema visual: cores, fonte, componentes e regras. |
| `.github/workflows/deploy-pages.yml` | Publicação automática da pasta `site/` no GitHub Pages. |
| `backup/` | Versões antigas, só neste computador (fora do Git). |
| `.impeccable/`, `.agents/` | Arquivos de trabalho da skill Impeccable, só neste computador (fora do Git). |

## Publicar no GitHub

O projeto já é um repositório Git com o primeiro commit feito. Para publicar:

1. No GitHub, crie um repositório novo e vazio (sem README), por exemplo `laboratorio-exames`.
2. Na pasta do projeto, rode:
   ```
   git remote add origin https://github.com/SEU-USUARIO/laboratorio-exames.git
   git push -u origin main
   ```
3. No repositório, abra **Settings > Pages** e, em **Build and deployment > Source**, escolha **GitHub Actions**.
4. Em **Actions**, acompanhe o fluxo "Publicar site no GitHub Pages". Ao terminar, o site fica em `https://SEU-USUARIO.github.io/laboratorio-exames/`.

Depois disso, cada `git push` na branch `main` publica o site de novo automaticamente.

## Ver o site no computador

Abra `site/index.html` no navegador.

## Trocar ou criar um banner de campanha

1. Prepare **duas imagens** da mesma campanha:
   - **Computador:** 1920 × 640 px. Deixe textos e logos dentro da área central de 1200 × 560 px, porque as bordas podem ser cortadas em telas menores.
   - **Celular:** 1080 × 1080 px (quadrada). Deixe textos dentro da área central de 900 × 900 px.
   - Formato JPG ou WebP. Tente ficar abaixo de 250 KB (computador) e 150 KB (celular), para o site abrir rápido no celular.
2. Salve as duas em `site/assets/banners/`, por exemplo `outubro-rosa-computador.jpg` e `outubro-rosa-celular.jpg`.
3. Em `site/index.html`, procure `BANNERS DE CAMPANHA`. Cada banner é um bloco `<li class="slide">`. Copie um bloco e troque:
   - os dois caminhos de imagem (`srcset` = celular, `src` = computador);
   - o texto do `alt` (o que está escrito no banner);
   - o link (`href`), por exemplo uma mensagem pronta no WhatsApp.
4. Para tirar um banner, apague o bloco `<li>` inteiro. As bolinhas do carrossel se ajustam sozinhas.

Os banners atuais são **exemplos** (têm a etiqueta "Banner de exemplo") e devem ser trocados pelas artes reais.

## Editar exames e preparo

Abra `site/assets/js/exames.js`. Cada exame é uma linha com `nome`, `jejum` (horas de 0 a 12; use 0 quando não precisa), `observacao`, `preparo` e `resultado`. Para incluir um exame, copie uma linha e troque os textos; para tirar, apague a linha. O botão, o velocímetro e a mensagem do WhatsApp se atualizam sozinhos. No fim do arquivo, `EXAME_INICIAL` define qual exame aparece selecionado ao abrir a página.

## Trocar as fotos

Salve as fotos reais em `site/assets/fotos/` no tamanho **1200 × 900 px** (proporção 4:3, JPG ou WebP até ~200 KB). Em `site/index.html`, procure `ESTRUTURA E EQUIPE` e troque o caminho de cada `<img>` e o texto do `alt`.

## Mapa

O mapa em "Como chegar" busca pelo endereço. Para mostrar o ponto exato do laboratório: no Google Maps, abra o perfil do laboratório, clique em **Compartilhar > Incorporar um mapa**, copie o endereço que está dentro de `src="..."` e cole no lugar do `src` do `<iframe>` em `site/index.html`.

## Antes de publicar

- Substituir todos os trechos com tarja amarela tracejada ("a confirmar") pelos dados reais: CNPJ, responsável técnica e CRBM, convênios, formas de pagamento, depoimentos e preparo dos exames.
- Trocar os banners de exemplo e os espaços de foto pelas imagens reais.
- No `<head>` de `site/index.html`, trocar o endereço da imagem de prévia (`og:image`) pelo endereço completo do site publicado e, no bloco de dados para buscadores (`application/ld+json`), acrescentar `"url"` e `"image"` com esse endereço.
