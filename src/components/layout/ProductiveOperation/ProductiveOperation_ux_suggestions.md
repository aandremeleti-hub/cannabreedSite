# Relatório de UX & Acessibilidade — ProductiveOperation (Operação Produtiva)

Este relatório apresenta as diretrizes de usabilidade, psicologia cognitiva e acessibilidade (WCAG) aplicadas ao desenvolvimento da seção **ProductiveOperation** (Operação Produtiva).

---

## 1. Acessibilidade e Semântica HTML5 (WCAG)

### Elementos de Cabeçalho (Headings)
- O título da seção "Operação Produtiva" é estruturado como `<h2>` com ID de âncora `#operacao-produtiva`.
- A legenda "Cultivo, Pós-colheita e Padronização" é renderizada como `<p className="po-description-subtitle">` para manter a lógica de cabeçalhos linear do leitor de tela sem criar uma subseção indesejada na leitura rápida.

### Foco Acessível (:focus-visible)
- Os cards foram construídos utilizando elementos `<button type="button">`. Isso garante suporte nativo a eventos de teclado (`Tab` e ativação via `Enter` / `Space`).
- Foi implementado um contorno acessível sutil com `outline-color: var(--color-primary-green)` e espaçamento de foco de `4px` (`outline-offset: 4px`), mantendo a harmonia visual em navegação por teclado.

### Ocultação de Ícones Decorativos
- Todos os ícones SVG e fundos decorativos receberam `aria-hidden="true"`, permitindo que os leitores de tela filtrem ruído visual e leiam apenas o texto descritivo de cada card.

---

## 2. Contraste e Legibilidade Visual

- **Fundo Claro com Texto Escuro (Inversão de Ritmo):** Para dar dinamismo visual ao site (quebrando a sequência de seções inteiramente escuras), a seção utiliza fundo branco (`var(--color-white)`) e texto azul marinho profundo (`var(--color-primary-navy)`), mantendo o contraste máximo de **21:1** exigido pela WCAG AAA.
- **Cards com Fundo Escuro:** Os botões/cards usam fundo escuro (`var(--color-primary-navy)`) com textos em branco, criando blocos de alta legibilidade.
- **Feedback de Hover:** Ao passar o mouse, o card se ilumina com a cor primária verde neon (`var(--color-primary-green)`). Para garantir que a legibilidade do ícone e do texto permaneça alta, as variáveis de cor internas do SVG e o título do card mudam para azul marinho, mantendo contraste seguro.

---

## 3. Diretrizes de Responsividade (Deep Responsiveness)

- **Desktop (Breakpoint > 1200px):** Layout dividido em duas colunas (cards e textos à esquerda, imagem à direita).
- **Tablet (768px a 1200px):** Layout colapsa para uma única coluna, centralizando a imagem abaixo do bloco esquerdo. Os cards são organizados em linhas de 3 ou 4 elementos, de forma flexível.
- **Mobile (menor que 480px):** A grade se adapta a 2 colunas para garantir que a área de toque física respeite o mínimo de 48px recomendado para touchscreens.
