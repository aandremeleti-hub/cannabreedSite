# Core Architecture & Routing (Cannabreed)

Este projeto usa Next.js (App Router) sem TypeScript, com estilização em CSS Puro.
**OBRIGATÓRIO:** Siga as regras arquiteturais abaixo de forma incondicional.

## 1. Identidade e Framework
- **Framework:** Next.js (App Router)
- **Linguagem:** JavaScript (sem TypeScript)
- **Roteamento:** Pasta `src/app/`
- **PROIBIDO:** Tailwind CSS, styled-components, CSS Modules, Inline Styles.

## 2. Estrutura de Pastas
O projeto segue uma hierarquia estrita para separar componentes por responsabilidade:

- `src/app/`: Roteamento e páginas globais.
- `src/components/`: Componentes genéricos puros (Card, SectionTitle).
- `src/components/client/`: Componentes que EXIGEM interatividade e `"use client"` (Formulários, Modais, Menus).
- `src/components/layout/`: Seções grandes de servidor (HeroSection, FeaturesSection).

✅ **REGRA DE OURO DO CSS:** Cada componente tem seu próprio `.jsx` e `.css` na **mesma pasta**.
```jsx
// Importação obrigatória no topo do componente
import './HeroSection.css';
```

## 3. Nomenclatura React e Next.js
**MANDATÓRIO** seguir estes padrões de escrita:

- **PascalCase:** Para componentes visuais e seus arquivos (ex: `HeroSection.jsx`).
- **camelCase:** Para funções, estados e hooks (ex: `handleClick`, `isMenuOpen`).
- **kebab-case:** Para classes CSS nos arquivos de estilização (ex: `hero-headline`).
- **Prefixo "use":** Para hooks customizados (ex: `useScrollToTop`).
- **Booleanos descritivos:** Prefixos como `is...`, `has...`, `should...` (ex: `isLoading`).

## 4. Exceções de Roteamento (App Router)
Os arquivos nativos do Next.js dentro de `src/app/` devem estar **sempre em letras minúsculas (lowercase)**:
- `page.jsx` (Mas internamente `export default function Page()`)
- `layout.jsx`
- `loading.jsx`
- `not-found.jsx`
- `error.jsx` (OBRIGATÓRIO ser Client Component e receber `{ error, reset }`).
