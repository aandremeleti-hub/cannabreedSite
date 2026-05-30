# UX/UI & Accessibility Report — AboutUsSection

Este relatório analisa o design da seção **AboutUsSection** do Figma à luz dos princípios de **UX Psychology** e **Web Accessibility Guidelines (WCAG)**, propondo melhorias que serão implementadas de forma responsiva no código de produção.

---

## 1. Análise de Acessibilidade (WCAG)

### Semântica HTML
- **Situação Original:** O Figma trata a lista de marcos/blocos como retângulos isolados (`AboutUsSection-container-foundation`, etc.) com textos soltos.
- **Melhoria Proposta:** Estruturar a lista de blocos usando uma lista semântica (`<ul>` e `<li>`). O título principal "SOBRE NÓS" será renderizado como um `<h2>` para manter a hierarquia correta do cabeçalho da página.
- **Imagens de Conteúdo:** Cada bloco possui uma imagem específica (Fundação, Renato Tonini, tecnoPARQ, Atuação). Adicionaremos tags `alt` descritivas e explícitas para leitores de tela em vez de deixá-las vazias, pois elas trazem contexto histórico e institucional sobre a empresa.
- **Logotipos e Decorações:** O logotipo da Cannabreed (`AboutUsSection-logo`) será tratado com `aria-hidden="true"` ou receberá `alt="Logotipo Cannabreed"` dependendo do seu uso no fluxo de leitura (se for puramente decorativo nesta seção, `aria-hidden="true"` é a melhor prática).

### Contraste de Cores
- **Texto:** Azul escuro (`#02172B`) sobre fundo branco (`#FFF`). O contraste é de **15.8:1**, superando com folga o limite WCAG AAA (7:1).
- **Título de Seção:** Texto branco (`#FFF`) sobre fundo azul escuro (`#02172B`). Contraste de **15.8:1**, também em conformidade AAA.

---

## 2. Psicologia de UX & Usabilidade

### Lei da Proximidade (Gestalt)
- A alternância visual entre o container de imagem e o container de texto nos blocos deve ser consistente. 
- O espaçamento vertical (gap) entre os cards deve ser suficiente para que o usuário entenda a sequência temporal ou temática (fundação -> liderança -> estruturação -> atuação).

### Prevenção de Fadiga Cognitiva (Leitura em F/Z)
- Blocos alternados (imagem à esquerda, texto à direita / imagem à direita, texto à esquerda) criam um fluxo dinâmico de leitura (layout zig-zag) que quebra a monotonia visual de listas longas e mantém o engajamento do usuário.

---

## 3. Diretrizes de Responsividade (Deep Responsiveness)

O layout do Figma apresenta restrições rígidas que quebrariam em dispositivos menores. Adotaremos as seguintes correções fluidas no CSS de produção:

1. **Largura Máxima Flexível:**
   - O container geral (`.about-us`) e os cards (`.about-us-card`) não terão larguras e alturas estáticas como `1300px` ou `176px`. 
   - Utilizaremos `width: 100%`, `max-width: 1300px` e `min-height: 176px` para permitir que o card cresça verticalmente se o texto precisar de mais espaço em telas pequenas.
2. **Layout Multicolunas Flexível (Wrap):**
   - Em telas menores (tablets e celulares), o layout interno do card mudará de horizontal (`flex-direction: row`) para vertical (`flex-direction: column`).
   - Os contêineres de imagem ocupam `100%` da largura disponível em telas pequenas, mantendo a proporcionalidade e o crop inteligente via `object-fit: cover`.
3. **Escalonamento de Fontes e Espaçamento:**
   - Usaremos a função `clamp()` para fazer a transição suave de fontes de `20px` para `16px` em celulares, e os paddings/gaps se adaptarão de forma fluida.
