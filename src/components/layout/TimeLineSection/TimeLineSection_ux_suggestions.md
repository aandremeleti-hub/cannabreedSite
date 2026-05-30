# Relatório de UX & Acessibilidade — TimeLineSection

Este relatório apresenta as diretrizes de usabilidade, psicologia cognitiva e acessibilidade (WCAG) aplicadas ao desenvolvimento da seção **TimeLineSection** (Linha do Tempo).

---

## 1. Acessibilidade e Semântica HTML5 (WCAG)

### Hierarquia de Títulos (Headings)
* O título principal da seção "LINHA DO TEMPO" será renderizado como um `<h2>` com ID para navegação por âncoras. Isso obedece à hierarquia lógica da página `/sobre-nos` (que já possui o título principal "SOBRE NÓS" como `<h2>`).
* Cada marco/ano na linha do tempo será envolvido por uma tag `<h3>` (ex: `<h3>2021</h3>`), garantindo que leitores de tela identifiquem cada evento como uma subseção de conteúdo.

### Uso de Listas Semânticas
* A linha do tempo é estruturalmente uma sequência ordenada de eventos históricos. Portanto, será estruturada usando as tags `<ul>` e `<li>`, o que permite que leitores de tela anunciem o número total de eventos e a posição atual do usuário na lista.

### Textos Alternativos (Alt Text) para Fotos
* As imagens de cada evento receberão atributos `alt` descritivos e contextuais, em vez de vazios ou genéricos:
  * 2021 (UFV): `alt="Prédio histórico da Universidade Federal de Viçosa (UFV)"`
  * 2022 (Pivo): `alt="Processo de cultivo e seleção genética de Cannabis"`
  * 2023 (BAGC): `alt="Ambiente controlado de germoplasma e sementes de Cannabis na UFV"`
  * 2024 (Regulação): `alt="Estufa de cultivo de Cannabis em conformidade regulatória"`
  * 2025 (BAGC/UFRPE): `alt="Segundo banco de germoplasma implantado na UFRPE no Nordeste"`
  * 2026 (Programa): `alt="Estufa de melhoramento de cânhamo industrial e Cannabis medicinal"`
  * DNA: `alt="Diagrama científico de dupla hélice de DNA representando melhoramento genético"` (Esta imagem é decorativa no fundo, podendo ter `aria-hidden="true"` ou ser carregada via CSS background, mas como tem valor científico estético, usaremos um alt descritivo).

---

## 2. Contraste e Legibilidade Visual

* **Texto:** O texto em azul marinho (`var(--color-primary-navy)` ou `#02172B`) sobre o fundo cinza claro/névoa (`#F4F4F8`) oferece um contraste superior a **15.8:1**, o que supera as exigências AAA da WCAG (mínimo de 7:1) para qualquer tamanho de fonte.
* **Tipografia:** Uso da fonte de cabeçalho `Titillium Web` em tamanho de `20px` com `line-height` de `1.2` (`24px`) para o corpo de texto da linha do tempo, garantindo espaçamento vertical confortável para leitura em telas de qualquer tamanho.

---

## 3. Diretrizes de Responsividade (Deep Responsiveness)

### Desktop vs. Mobile
* **Layout Desktop (Telas > 1024px):**
  * Layout horizontal fluido. Uma linha guia horizontal passa pelo centro da seção.
  * Os anos ímpares (2021, 2023, 2025) sobem para a parte superior (acima da linha).
  * Os anos pares (2022, 2024, 2026) descem para a parte inferior (abaixo da linha).
  * Isso cria um ritmo visual equilibrado que quebra a fadiga de leitura horizontal.
* **Layout Mobile/Tablet (Telas <= 1024px):**
  * O scroll horizontal é evitado, pois quebra a usabilidade em touchscreens.
  * O layout alterna automaticamente para vertical: a linha horizontal se transforma em uma linha guia vertical posicionada no lado esquerdo do conteúdo.
  * Todos os eventos (anos, imagens e descrições) se alinham de cima para baixo, garantindo leitura linear fluida.

---

## 4. Micro-animações e Feedback Visual

* **Hover nos Cards:** Os círculos com as imagens terão um efeito de zoom sutil (`transform: scale(1.05); transition: transform 0.4s ease;`) ao passar o mouse.
* **Acessibilidade de Movimento:** Toda animação e transição respeitará a diretiva `@media (prefers-reduced-motion: reduce)`, desativando efeitos de translação e zoom para usuários com sensibilidade vestibular.
