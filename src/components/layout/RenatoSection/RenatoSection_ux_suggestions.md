# Relatório de UX & Acessibilidade: RenatoSection

Este relatório analisa o design importado do Figma para a seção **RenatoSection** e propõe melhorias alinhadas aos princípios de [ux-psychology.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/frontend-design/ux-psychology.md) e [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md).

---

## 1. Adaptabilidade Responsiva (Mobile & Ultra-Wide)

- **Figma (Design Estático):** Definido com largura fixa de `1512px` e altura fixa de `1040px`.
- **Problema de UX:** Em telas mobile ou tablets, um layout fixo causa overflow horizontal. Em telas muito grandes (Ultra-wide), a seção fica alinhada de forma estranha com faixas brancas/pretas.
- **Melhoria Técnica:**
  - Tornar o container principal fluido (`width: 100%`, `min-height: auto`).
  - Utilizar um wrapper centralizador com `max-width: var(--grid-max-width, 1200px)` e `margin: 0 auto`.
  - Reorganizar o layout em coluna única (`flex-direction: column`) para dispositivos móveis, garantindo que o texto e a imagem caibam perfeitamente na tela.

---

## 2. Acessibilidade de Imagens e Recursos Visuais (Leitores de Tela)

- **Figma:** Contém apenas a imagem do cientista e ícones decorativos.
- **Melhoria Técnica:**
  - Adicionar um atributo `alt` altamente descritivo à imagem do cientista: `alt="Retrato fotográfico de Renato de Traglia Tonini, cientista líder da Cannabreed"`.
  - Os ícones decorativos (como o logo da Cannabreed servindo de marcador de lista e os ícones dos cartões) devem conter `aria-hidden="true"` para evitar poluição auditiva em leitores de tela.

---

## 3. Semântica HTML e SEO

- **Melhoria Técnica:**
  - Estruturar os títulos acadêmicos usando uma lista não ordenada (`<ul>` e `<li>`) em vez de containers genéricos `<div>`, garantindo que o leitor de tela anuncie os itens como parte de uma lista estruturada.
  - Utilizar tags semânticas: `<section>` para a área, `<h2>` para o nome do cientista e `<h3>` para o título de atuação técnica.

---

## 4. Teclabilidade e Foco Acessível

- **Melhoria Técnica:**
  - Se os cartões de atuação ("Interface", "Trajetória", "Integração") forem interativos no futuro, eles deverão usar elementos `<button>` ou `<a>` semânticos com estados `:focus-visible` bem destacados (ex: outline de 2px na cor primária verde neon).
  - Caso sejam apenas informativos, devem ser estilizados com ótimos contrastes de leitura.
