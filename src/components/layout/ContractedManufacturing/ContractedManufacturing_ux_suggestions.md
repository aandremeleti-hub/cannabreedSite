# Auditoria de UX e Acessibilidade: ContractedManufacturing

Esta seção detalha as sugestões de melhoria visual e técnica baseadas nas diretrizes de [ux-psychology.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/frontend-design/ux-psychology.md) e [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md).

## 🚀 1. Acessibilidade (WCAG 2.1)

- **Legibilidade Textual:** O texto da descrição principal possui `font-size: 24px` e usa fonte do corpo (Lato). Recomenda-se garantir que o peso da fonte no desktop mantenha contraste adequado em qualquer mudança de tema.
- **Acessibilidade dos Ícones:** Todos os ícones foram definidos com `aria-hidden="true"`, pois os cartões contêm o rótulo descritivo textual em formato de texto real (`h3`). Isso evita redundância em leitores de tela.
- **Lista Semântica:** A grade de cartões foi estruturada com `<ul>` e `<li>` semânticos, possuindo um `aria-label` descritivo ("Etapas modulares da manufatura contratada"), garantindo clareza estrutural para agentes de assistência por voz.

## 🎨 2. Usabilidade e Psicologia Cognitiva

- **Efeito de Estética-Usabilidade (Aesthetic-Usability Effect):** Os cartões possuem transições suaves (`transform` e `box-shadow`) no estado `:hover`, criando um efeito de profundidade ("card elevation") que sinaliza interatividade e eleva a percepção de qualidade do site.
- **Lei da Proximidade:** O alinhamento dos cartões em duas linhas (5 e 3) cria uma separação visual limpa das fases de processo. A transição responsiva junta todos de forma harmoniosa no mobile sem quebrar o entendimento visual da jornada modular.

## 📱 3. Otimizações de Performance e Responsiveness

- **Responsividade Adaptativa:** Em dispositivos móveis muito estreitos (menos de 480px), os cartões encolhem ligeiramente para `110px` e reduzem o tamanho da fonte para evitar transbordamento horizontal.
- **Carregamento Otimizado:** A imagem lateral utiliza o componente `<Image>` do Next.js com `placeholder="blur"` e otimização automática de formato (WebP) e densidade de pixels.
