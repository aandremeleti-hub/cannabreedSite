# Relatório de UX & Acessibilidade: StructuredProjectsSection

Este relatório analisa o design importado do Figma para a seção **StructuredProjectsSection** e propõe melhorias alinhadas aos princípios de [ux-psychology.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/frontend-design/ux-psychology.md) e [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md).

---

## 1. Adaptabilidade Responsiva (Mobile & Ultra-Wide)

- **Figma (Design Estático):** O design define larguras fixas de `1512px` e alturas rígidas.
- **Problema de UX:** Se carregado de forma fixa, cria overflow horizontal no mobile e deixa faixas vazias nas laterais em telas ultra-wide.
- **Melhoria Técnica Implementada:**
  - Tornamos o container principal completamente fluido (`width: 100%`, `min-height: auto`).
  - Em telas médias e menores, reorganizamos o conteúdo em coluna única (`flex-direction: column`) para facilitar a leitura.
  - Para o background gradient superior, alteramos o ângulo de `90deg` para `180deg` (vertical) no mobile para dar legibilidade ao texto que passa a ser empilhado sobre a imagem de fundo.

---

## 2. Acessibilidade de Imagens e Recursos Visuais (Leitores de Tela)

- **Problema de UX:** Imagens decorativas ou com texto embutido podem confundir leitores de tela se não tratadas.
- **Melhoria Técnica Implementada:**
  - O logotipo (`StructuredProjectsSection-logoMark.svg`) recebeu o atributo descritivo `alt="Marca da Cannabreed"`.
  - As imagens de fundo (`titleBg` e `bottomBg`) e os ícones das cartas (`whoActingIcon` e `modelIcon`) receberam `alt=""` ou estão ocultados do fluxo de leitura sonora (`aria-hidden="true"`) para que leitores de tela os considerem apenas decorativos, evitando poluição sonora.

---

## 3. Semântica HTML e SEO

- **Melhoria Técnica Implementada:**
  - Estruturação semântica usando a tag `<section>` para delimitar a área.
  - O título principal usa a tag `<h2>` e os cartões utilizam `<article>` com tags `<h3>`, gerando um fluxo de hierarquia de cabeçalho coerente para motores de busca e leitores de tela.

---

## 4. Teclabilidade e Foco Acessível

- **Melhoria Técnica Recomendada:**
  - Atualmente, os cartões ("Para quem atuamos" e "Modelo de atuação") são informativos. Caso eles ganhem interatividade no futuro (ex: abrir modais ou levar a outras páginas), eles deverão ser convertidos em botões (`<button>`) ou links (`<a>`) semânticos, possuindo estados de `:focus-visible` explícitos (ex: outline de `2px` com a cor primária verde neon `#80DB42`).
