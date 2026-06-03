# Blueprint: Efeito Hover Padrão do Site (Cannabreed)

Este documento documenta e padroniza o efeito de hover interativo premium aplicado aos cards de seções-chave do site. O objetivo é garantir consistência visual e comportamento fluido em todo o ecossistema.

---

## 1. Comportamento e Movimento (CSS Transitions)

Para atingir uma sensação premium e responsiva, todos os cards que utilizam o efeito hover padrão devem usar a seguinte função de transição cúbica:

- **Transition:** `all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)`
- **Deslocamento Y:** `transform: translateY(-8px)`
- **Sombra Fluida (Sombra de Elevação):** `box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18)`

---

## 2. Paleta de Cores e Transições no Hover

Ao passar o mouse sobre o card, as cores devem inverter mantendo a acessibilidade e o contraste:

1. **Card Background:** Muda para o verde neon/marca: `var(--color-primary-green)`
2. **Textos Internos (Títulos):** Mudam para o azul escuro: `var(--color-primary-navy)` com transição suave `transition: color 0.3s ease;`

---

## 3. Gestão e Comportamento Bicolor dos Ícones (Dynamic SVGs)

Para evitar que partes do ícone sumam quando o fundo do card muda para a cor do próprio ícone, é **obrigatório** usar componentes React para renderizar ícones dinâmicos com variáveis de cores customizáveis no CSS.

### Tokens de Cores nos Componentes de Ícones (SVG)
Dentro do arquivo JSX do ícone, substitua cores hardcoded por variáveis CSS com fallbacks:
- Cores que devem mudar para o azul contrastante: `fill="var(--icon-color-primary, var(--color-primary-green))"`
- Cores secundárias ou de fundo: `fill="var(--icon-color-secondary, var(--color-primary-navy))"`
- Se o ícone possuir um fundo redondo ou quadrado integrado: `fill="var(--icon-bg, var(--color-white))"`

### Comportamento das Variáveis no CSS

#### Estado Inicial do Card:
```css
.card-container {
  background-color: var(--color-primary-navy);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  /* Cores padrão do ícone */
  --icon-bg: var(--color-white);
  --icon-color-primary: var(--color-primary-green);
  --icon-color-secondary: var(--color-primary-navy);
}

.card-container-icon {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
```

#### Estado Hover do Card:
```css
.card-container:hover {
  transform: translateY(-8px);
  background-color: var(--color-primary-green);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);

  /* Overrides para manter contraste bicolor no fundo verde */
  --icon-bg: var(--color-primary-navy);
  --icon-color-primary: var(--color-primary-green);
  --icon-color-secondary: var(--color-white);
}

.card-container:hover .card-container-icon {
  transform: scale(1.1); /* Zoom sutil do ícone */
}

.card-container:hover .card-title {
  color: var(--color-primary-navy);
}
```

---

## 4. Componentes Implementados com este Padrão

O efeito hover padrão já está mapeado e implementado nas seguintes estruturas:
- [x] **RegulatoryCompliance**: Grid de cards `.regulatory-compliance-card`
- [x] **ActingSection**: Lista de cards `.acting-card-container`
- [x] **RenatoSection**: Grid de cards técnicos `.renato-technical-card`
- [x] **StructuredProjectsSection**: Cards de atuação `.structured-projects-card`
