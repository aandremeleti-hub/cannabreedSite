# Relatório de UX & Acessibilidade: Header

Este relatório analisa o design do Header proposto no Figma frente aos princípios de usabilidade, psicologia do design (UX Psychology) e acessibilidade (Web Design Guidelines).

---

## 1. Análise de Acessibilidade (Web Design Guidelines)

### A. Estados de Foco Visíveis
* **Problema:** O design original do Figma não especifica estados de foco para os links de navegação.
* **Recomendação:** Implementar um indicador de foco visível e acessível usando `:focus-visible`. Como o fundo é escuro (`#02172B`), utilizaremos uma borda/outline ou underline estilizado na cor verde neon (`var(--color-primary-green)`) com `outline-offset`.
  ```css
  .header-nav-link:focus-visible {
    outline: 2px solid var(--color-primary-green);
    outline-offset: 4px;
    border-radius: 4px;
  }
  ```

### B. Semântica HTML
* **Recomendação:** Utilizar a tag `<header>` para a seção principal, um contêiner `<div className="header-container">` para centralização, e a tag `<nav aria-label="Navegação principal">` envolvendo os links.

### C. Acessibilidade do Logotipo e Imagens
* **Recomendação:** O logotipo deve ser um elemento interativo que leva o usuário de volta ao topo/home (`/`). Deve conter a tag `alt="Logotipo Cannabreed"` clara para leitores de tela.

---

## 2. Usabilidade & Psicologia de UX (UX Psychology)

### A. Lei de Fitts (Fitts's Law)
* **Princípio:** O tempo para atingir um alvo é em função da distância e do tamanho do alvo.
* **Recomendação:** Aumentar a área clicável de cada link de navegação (`padding` interno nos links), de modo que o usuário não precise clicar exatamente sobre o texto fino de 22px.

### B. Carga Cognitiva e Hierarquia Visual
* **Recomendação:** A fonte Lato com peso 900 (`font-weight: 900`) e tamanho 22px cria forte contraste e legibilidade. Para melhorar o conforto visual, adicionaremos um micro-efeito de hover com transição suave na cor (`color`) de branco para verde neon.

---

## 3. Responsividade e Adaptação Móvel

### A. Dimensões Fixas (Fase Crítica)
* **Problema:** A altura fixa de `145px` e padding fixo de `100px` nas laterais quebram o layout em telas de smartphones e tablets. A largura do contêiner de `1312px` também estoura em telas menores que isso.
* **Recomendação:**
  - Tornar o contêiner principal totalmente responsivo (`width: 100%`, `max-width: 1312px`).
  - Utilizar paddings fluidos com `clamp()` ou porcentagens: `padding: 0 clamp(20px, 5vw, 100px)`.
  - Reduzir a altura do Header em telas menores usando Media Queries (ex: `height: 80px` em telas abaixo de 768px).
  - Implementar um menu hambúrguer móvel para evitar o enfileiramento vertical desordenado dos links.

### B. Respeito ao Movimento Reduzido
* **Recomendação:** Garantir que quaisquer transições ou efeitos de hover respeitem a diretiva `@media (prefers-reduced-motion: reduce)`.
