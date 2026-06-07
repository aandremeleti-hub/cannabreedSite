# React, Semântica e Componentes (Cannabreed)

O projeto exige semântica HTML impecável e estruturação correta de componentes React (Next.js App Router).

## 1. Semântica HTML
**MANDATÓRIO:** Toda página deve ser estruturada com as tags corretas.
- `<main>` para o conteúdo principal.
- `<section>` para agrupar blocos lógicos.
- `<header>` e `<footer>`.
- `<nav>` para navegação.
- `<button>` SEMPRE para cliques (nunca `<div>` com onClick).

## 2. Hierarquia de Títulos (SEO e Acessibilidade)
**CRÍTICO:** `<h1>` deve ser usado apenas UMA vez por página.
- Modais e Cards **NUNCA** devem ter título com `<p>`. Use `<h2>`, `<h3>` ou `<h4>`.

## 3. Diretiva `"use client"` (Hidratação e Interatividade)
**PROIBIDO:** Usar `"use client"` no `layout.jsx` global ou em botões burros (estáticos).
O estado deve ser gerido sempre pelo componente pai que precisa dele. Para evitar *Hydration Mismatch* com dados globais dinâmicos (data, localStorage), use `useEffect`.

✅ **FAÇA ISSO:**
```jsx
// src/components/Button.jsx (Componente Estático - Correto)
export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

❌ **NUNCA FAÇA ISSO:**
```jsx
// Errado: Tornar um botão genérico num Client Component atoa
"use client";
export default function Button({ onClick }) { ... }
```

## 4. Variantes de Componentes
Variantes visuais (ex: botões primários/secundários) são controladas via props que injetam classes CSS condicionais.
**NUNCA** use inline styles para isso.

✅ **FAÇA ISSO:**
```jsx
export default function Button({ variant, children }) {
  const cssClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return <button className={`btn ${cssClass}`}>{children}</button>;
}
```

## 5. Tipografia nativa do Next.js
**PROIBIDO:** Usar tags `<link>` ou `@import` no CSS para puxar fontes do Google.
Use o módulo `next/font/google` no `src/app/layout.jsx` e injete via CSS Variable no `<body>`.

✅ **FAÇA ISSO:**
```jsx
// src/app/layout.jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
```

## 6. Arquitetura de Modais Reutilizáveis (Princípio DRY)
- 🔴 **PROIBIDO:** Criar componentes de modais específicos duplicados para cada variação de conteúdo estruturalmente similar (ex: `ModalGenetica.jsx`, `ModalRegulatorio.jsx`).
- 🟢 **OBRIGATÓRIO:** Isolar o **Envelope Genérico (`Modal.jsx`)** para lidar puramente com comportamento (controle de `isOpen`, bloqueio de scroll de fundo, fechamento via clique fora/Escape e efeitos visuais) recebendo conteúdos dinâmicos através de `children`.
- 🟢 **OBRIGATÓRIO:** Utilizar um **Renderizador Dinâmico de Conteúdo (`ProblemDetailSection.jsx`)** que recebe um identificador (`problemId`) e mapeia dinamicamente textos e ícones a partir de uma fonte de dados centralizada (`problemsDetailData.js`).
- 🟢 **OBRIGATÓRIO:** Controlar a renderização no componente pai através de estado numérico ou nulo (ex: `const [activeProblemId, setActiveProblemId] = useState(null)`) e injetar condicionalmente o conteúdo para evitar montagem prematura do DOM:
```jsx
<Modal isOpen={activeProblemId !== null} onClose={() => setActiveProblemId(null)}>
  {activeProblemId && <ProblemDetailSection problemId={activeProblemId} />}
</Modal>
```

