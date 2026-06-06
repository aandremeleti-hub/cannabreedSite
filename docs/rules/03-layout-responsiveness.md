# Layout & Responsividade (Cannabreed)

O design estrutural obedece as configurações de exportação do Figma, com atenção especial à fluidez dos componentes na Web.

## 1. Auto Layout = Flexbox ou Grid
**MANDATÓRIO:** O posicionamento de blocos depende de como foram construídos no Figma.
- Se o elemento no Figma POSSUI Auto Layout (direction, gap, padding): Use Flexbox ou CSS Grid.
- Se o elemento no Figma NÃO POSSUI Auto Layout: Use `position: absolute` ou `relative` (posicionamento manual intencional do designer).

✅ **FAÇA ISSO (Para Elementos com Auto Layout no Figma):**
```css
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
```

❌ **NUNCA FAÇA ISSO:**
```css
/* Errado! Coordenadas fixas X/Y matam o Flexbox */
.hero-content {
  position: absolute;
  top: 200px;
  left: 165px;
}
```

## 2. Abordagem Desktop-First
Como os layouts de origem no Figma são para Desktop, o CSS base (fora das `@media` queries) **OBRIGATORIAMENTE** espelha o Figma (Desktop). A responsividade é **subtrativa/adaptativa** para telas menores.

✅ **FAÇA ISSO:**
```css
/* Base Desktop (Extraída do Figma) */
.features-grid {
  display: flex;
  flex-direction: row; 
  padding: 80px 0;
}

/* Tablet / Telas Médias */
@media (max-width: 1024px) {
  .features-grid { padding: 40px 16px; }
}

/* Mobile / Telas Pequenas */
@media (max-width: 480px) {
  .features-grid { flex-direction: column; }
}
```

## 3. Larguras Fluidas (`max-width`)
**PROIBIDO:** Usar `width` com pixel fixo para containers de texto e conteúdo principal. 
Sempre use `max-width` combinado com `width: 100%`.

✅ **FAÇA ISSO:**
```css
.hero-content {
  max-width: 845px;
  width: 100%;
}
```

## 4. Pareamento Visual de Alturas (Equal Heights)
**CRÍTICO:** É estritamente proibido utilizar JavaScript para resolver problemas de layout que podem ser resolvidos nativamente.
- 🔴 **PROIBIDO:** Usar `document.querySelector`, `getBoundingClientRect()`, `ResizeObserver` ou `useEffect` para forçar componentes a terem a mesma altura dinamicamente.
- 🟢 **OBRIGATÓRIO:** Utilizar CSS nativo: aplique `display: flex` ou `display: grid` no container pai com `align-items: stretch` e declare `height: 100%` nos filhos flexíveis. Isso garante performance e pureza de renderização.
