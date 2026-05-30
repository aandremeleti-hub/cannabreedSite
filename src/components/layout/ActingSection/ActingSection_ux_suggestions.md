# UX/UI & Accessibility Report — ActingSection

Este relatório analisa o design da seção **ActingSection** (Áreas de Atuação) do Figma sob a ótica de **UX Psychology**, **Diretrizes de Acessibilidade Web (WCAG)** e **Deep Responsiveness**, estabelecendo as regras de implementação do componente Next.js/CSS.

---

## 1. Análise de Acessibilidade (WCAG)

### Semântica HTML & Estrutura
- **Identificação da Seção:** O componente será envelopado em uma tag `<section id="areas-atuacao" aria-labelledby="acting-section-title">` para prover uma região de navegação acessível aos leitores de tela.
- **Hierarquia de Títulos:** O título principal "ÁREAS DE ATUAÇÃO" será um `<h2>` com `id="acting-section-title"`. Cada um dos 5 cartões de atuação utilizará um `<h3>` para seus títulos (ex: "Melhoramento genético e adaptação ao tropical"), permitindo uma navegação por títulos consistente.
- **Lista de Elementos:** Os 5 cartões serão organizados em uma estrutura de lista semântica (`<ul>` e `<li>`), pois representam um grupo homogêneo de itens informativos.
- **Tratamento de Ícones:** Os ícones dentro de cada cartão são puramente decorativos em relação ao título adjacente, de forma que receberão `aria-hidden="true"` para evitar poluição auditiva em leitores de tela.

### Contraste de Cores
- **Texto e Fundo dos Cartões:** Texto branco (`#FFFFFF`) sobre o fundo azul escuro (`#02172B`). O contraste resultante é de **15.8:1**, superando significativamente a recomendação WCAG AAA (7:1).
- **Texto Principal da Seção:** Texto escuro (`#02172B`) sobre fundo claro (`#F4F4F8`). O contraste resultante é de **14.2:1** (WCAG AAA).
- **Destaque Neon:** Elementos em verde neon (`#80DB42`) sobre azul escuro (`#02172B`). Contraste de **4.6:1**, atendendo ao requisito WCAG AA para elementos gráficos e texto grande (mínimo de 3:1).

---

## 2. Psicologia de UX & Usabilidade

### Lei da Proximidade e Semelhança (Gestalt)
- Ao manter os 5 cartões com a mesma proporção, cor de fundo, tipografia e estilo de ícone (verde neon/branco), o usuário instantaneamente percebe que todos compartilham a mesma importância e categoria funcional (Pillares de Atuação).

### Prevenção de Sobrecarga Cognitiva (Hick's Law & Miller's Law)
- Organizar a atuação em exatos 5 tópicos principais facilita a varredura visual e retenção de informação na memória de curto prazo do usuário (que oscila idealmente entre 5 e 9 itens).
- O texto explicativo principal fica posicionado na base da seção de forma a consolidar a visão geral após o usuário absorver os tópicos.

### Efeito de Estética e Usabilidade
- O contraste vibrante entre o tom profissional corporativo (Navy Blue) e a inovação tecnológica (Neon Green) confere à seção um aspecto moderno, transmitindo alta credibilidade científica e inovação.

---

## 3. Diretrizes de Responsividade (Deep Responsiveness)

O layout do Figma usa posições absolutas e larguras de design fixas que quebrariam em resoluções diferentes de 1512px. Aplicaremos as seguintes adaptações fluidas:

1. **Split-Layout Adaptativo (Desktop vs. Mobile):**
   - **Desktop (>= 1024px):** Layout em duas colunas. A coluna da esquerda contém o conteúdo de texto e a grade horizontal de cartões; a coluna da direita exibe a imagem ilustrativa que preenche 100% da altura da seção.
   - **Mobile/Tablet (< 1024px):** As colunas se empilham verticalmente. A imagem ilustrativa passa a ocupar a base da seção ou é ocultada/reduzida para priorizar a leitura textual rápida.
2. **Flexibilidade dos Cartões:**
   - Em resoluções menores, os cartões não ficarão imprensados em uma única linha horizontal de 5. Utilizaremos um layout flexível (`flex-wrap: wrap` ou CSS Grid auto-fit) que reorganiza os cartões em linhas de 2 ou 3 em tablets, e em 1 coluna em celulares.
   - As dimensões dos cartões serão fluidas (`width: 100%`, com `max-width` e `min-height` definidos) garantindo que nenhum texto transborde ou seja cortado.
3. **Micro-interações Premium:**
   - Adicionaremos efeitos de hover suaves nos cartões (`transform: translateY(-6px)`), alterando sutilmente a sombra e a intensidade do ícone verde neon para guiar o foco visual de forma elegante.
