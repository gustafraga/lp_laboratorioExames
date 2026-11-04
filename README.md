# Laboratório Exames: site

Site institucional do Laboratório Exames (Xique-Xique, BA), no estilo de site de clínica: fundo branco, azul como cor da marca, faixa de contatos, menu, carrossel de campanhas e rodapé completo.

## Onde está cada coisa

| Caminho | O que é |
|---|---|
| `index.html` | **A página:** textos, seções e a lista de banners. |
| `assets/css/styles.css` | Cores, fonte, tamanhos e layout. |
| `assets/js/exames.js` | **Lista de exames e preparo** (nome, horas de jejum, observação, preparo, prazo do resultado). É o único lugar para editar esses dados. |
| `assets/js/main.js` | Menu do celular, carrossel, velocímetro de jejum e dúvidas. Não precisa editar. |
| `assets/banners/` | Imagens dos banners de campanha. |
| `assets/fotos/` | Fotos da recepção, da sala de coleta e da equipe. |
| `assets/img/` | Logo e foto da fachada. |
| `assets/fonts/` | Fonte Nunito Sans, hospedada junto com o site. |
| `PRODUCT.md` | Fatos do produto e o que falta confirmar com o cliente. |
| `DESIGN.md` | Sistema visual: cores, fonte, componentes e regras. |
| `robots.txt`, `.nojekyll` | Liberam a indexação no Google e fazem o GitHub Pages servir os arquivos como estão. |
| `backup/` | Versões antigas, só neste computador (fora do Git). |
| `.impeccable/`, `.agents/` | Arquivos de trabalho da skill Impeccable, só neste computador (fora do Git). |

## Publicação (GitHub Pages)

O site está no ar em **https://gustafraga.github.io/lp_laboratorioExames/**, publicado a partir da raiz da branch `main/site` do repositório [gustafraga/lp_laboratorioExames](https://github.com/gustafraga/lp_laboratorioExames).

Para atualizar o site, salve as mudanças e rode:
```
git add .
git commit -m "Descreva a mudança"
git push origin main:main/site
```
O GitHub publica a nova versão em 1 ou 2 minutos.

O `index.html` precisa ficar na raiz do repositório: o GitHub Pages só publica a raiz (`/`) ou a pasta `/docs`, nunca outra pasta.

## Ver o site no computador

Abra `index.html` no navegador.

## Trocar ou criar um banner de campanha

1. Prepare **duas imagens** da mesma campanha:
   - **Computador:** 1920 × 640 px. Deixe textos e logos dentro da área central de 1200 × 560 px, porque as bordas podem ser cortadas em telas menores.
   - **Celular:** 1080 × 1080 px (quadrada). Deixe textos dentro da área central de 900 × 900 px.
   - Formato JPG ou WebP. Tente ficar abaixo de 250 KB (computador) e 150 KB (celular), para o site abrir rápido no celular.
2. Salve as duas em `assets/banners/`, por exemplo `outubro-rosa-computador.jpg` e `outubro-rosa-celular.jpg`.
3. Em `index.html`, procure `BANNERS DE CAMPANHA`. Cada banner é um bloco `<li class="slide">`. Copie um bloco e troque:
   - os dois caminhos de imagem (`srcset` = celular, `src` = computador);
   - o texto do `alt` (o que está escrito no banner);
   - o link (`href`), por exemplo uma mensagem pronta no WhatsApp.
4. Para tirar um banner, apague o bloco `<li>` inteiro. As bolinhas do carrossel se ajustam sozinhas.

Os banners atuais são **exemplos** (têm a etiqueta "Banner de exemplo") e devem ser trocados pelas artes reais.

## Editar exames e preparo

Abra `assets/js/exames.js`. Cada exame é uma linha com `nome`, `jejum` (horas de 0 a 12; use 0 quando não precisa), `observacao`, `preparo` e `resultado`. Para incluir um exame, copie uma linha e troque os textos; para tirar, apague a linha. O botão, o velocímetro e a mensagem do WhatsApp se atualizam sozinhos. No fim do arquivo, `EXAME_INICIAL` define qual exame aparece selecionado ao abrir a página.

## Trocar as fotos

Salve as fotos reais em `assets/fotos/` no tamanho **1200 × 900 px** (proporção 4:3, JPG ou WebP até ~200 KB). Em `index.html`, procure `ESTRUTURA E EQUIPE` e troque o caminho de cada `<img>` e o texto do `alt`.

## Mapa

O mapa em "Como chegar" busca pelo endereço. Para mostrar o ponto exato do laboratório: no Google Maps, abra o perfil do laboratório, clique em **Compartilhar > Incorporar um mapa**, copie o endereço que está dentro de `src="..."` e cole no lugar do `src` do `<iframe>` em `index.html`.

## Antes de publicar

- Substituir todos os trechos com tarja amarela tracejada ("a confirmar") pelos dados reais: CNPJ, responsável técnica e CRBM, convênios, formas de pagamento, depoimentos e preparo dos exames.
- Trocar os banners de exemplo e os espaços de foto pelas imagens reais.
- No `<head>` de `index.html`, trocar o endereço da imagem de prévia (`og:image`) pelo endereço completo do site publicado e, no bloco de dados para buscadores (`application/ld+json`), acrescentar `"url"` e `"image"` com esse endereço.
