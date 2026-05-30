# Relatório de UX & Acessibilidade — ResearchAndDevelopment (P&D)

Este relatório apresenta as diretrizes de usabilidade, psicologia cognitiva e acessibilidade (WCAG) aplicadas ao desenvolvimento da seção **ResearchAndDevelopment** (Pesquisa & Desenvolvimento).

---

## 1. Acessibilidade e Semântica HTML5 (WCAG)

### Elementos de Cabeçalho (Headings)
- O título da seção "Pesquisa, Desenvolvimento e Melhoramento Genético (P&D)" é estruturado como `<h2>` com ID de âncora `#pd`.
- O Eyebrow "P&D" é exibido visualmente, mas não polui a árvore lógica do leitor de tela (sendo tratado como um rótulo auxiliar `<span className="rd-eyebrow">`).

### Foco Acessível (:focus-visible)
- Os cards foram codificados como elementos `<button type="button">`. Isso garante navegabilidade nativa via teclado (`Tab`), foco sequencial e ativação pela tecla `Enter` ou `Espaço`.
- Foi implementado um contorno acessível sutil com `outline-color: var(--color-primary-green)` e deslocamento de foco (`outline-offset: 4px`) que só aparece ao navegar via teclado (`:focus-visible`), evitando ruído visual para usuários de mouse.

### Ocultação de Ícones Decorativos
- Todos os SVGs dos cards de serviço e os painéis decorativos de fundo receberam o atributo `aria-hidden="true"`. Desta forma, os leitores de tela ignoram o ruído de vetores geométricos complexos e leem apenas os títulos dos cards correspondentes (ex: "Sementes", "Proteção").

---

## 2. Contraste e Legibilidade Visual

- **Fundo Escuro com Texto Claro:** A combinação de texto branco (`var(--color-white)`) sobre o fundo azul marinho profundo (`var(--color-primary-navy)`) fornece contraste de **21:1**, muito acima do exigido (7:1) pela WCAG AAA.
- **Tipografia:** Foi utilizada a fonte `Titillium Web` para os títulos e `Lato` para a descrição e detalhes dos cards. Os tamanhos de fonte mantêm um bom contraste de peso e tamanho, definindo uma hierarquia clara.

---

## 3. Diretrizes de Responsividade (Deep Responsiveness)

- **Desktop (Breakpoint > 1200px):**
  - Layout dividido em duas colunas (conteúdo + cards à esquerda, imagem destacada à direita).
  - A grade de cards acomoda 5 elementos na primeira linha e 3 elementos na segunda linha de forma fluida.
- **Tablet (768px a 1200px):**
  - A imagem da direita passa a se posicionar centralizada abaixo do contêiner esquerdo.
  - A grade de cards se reorganiza automaticamente em linhas de 3 elementos (`calc(33.333% - 14px)`), adaptando-se de forma flexível e evitando cortes ou scrollbar lateral.
- **Mobile (menor que 480px):**
  - A grade é ajustada para 2 colunas (`calc(50% - 10px)`), garantindo área de toque adequada e legibilidade do texto de cada card em telas extremamente estreitas.

---

## 4. Micro-animações e Psicologia Cognitiva

- **Efeito Hover e Feedback:** Ao passar o mouse sobre cada card, o fundo branco muda para verde neon e os ícones e títulos modificam localmente suas cores (através das propriedades de variáveis customizadas como `--icon-color-primary` e `--icon-color-secondary`). Isso reduz a carga cognitiva do usuário, confirmando visualmente a interatividade do card.
- **Acessibilidade de Movimento:** As animações de transição utilizam curvas suaves (`cubic-bezier`), evitando tonturas ou desconforto visual.
