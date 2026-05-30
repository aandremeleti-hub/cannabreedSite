# CSS & Estilização (Cannabreed)

O projeto foca no uso estrito de **CSS Puro**, sem dependência de bibliotecas de terceiros como Tailwind ou styled-components. O escopo local de componentes deve ser gerido de forma semântica.

## 1. Importação e Escopo
**OBRIGATÓRIO:** Todo componente deve ter seu CSS isolado na mesma pasta e importado.
Como não há CSS Modules, o isolamento ocorre por nomenclatura (prefixo com nome da seção).

✅ **FAÇA ISSO:**
```jsx
// src/components/layout/HeroSection/HeroSection.jsx
import './HeroSection.css';
export default function HeroSection() {
  return <section className="hero-container">...</section>
}
```

❌ **NUNCA FAÇA ISSO:**
```jsx
// Proibido estilos inline para design fixo
<section style={{ backgroundColor: '#fff' }}>...</section>
```

## 2. Nomenclatura Semântica (BEM Adaptado)
**OBRIGATÓRIO:** Usar `kebab-case` descritivo. Para evitar colisão global, a classe SEMPRE deve ter o prefixo do seu contexto.

✅ **FAÇA ISSO:**
```css
.hero-headline { ... }
.features-card-icon { ... }
```

❌ **NUNCA FAÇA ISSO:**
```css
.title { ... } /* Genérico, vai quebrar o site inteiro */
.div1 { ... }
```

## 3. Uso de Variáveis e Cores (Custom Properties)
**CRÍTICO:** É estritamente **PROIBIDO** o uso de cores hexadecimais, RGB ou tamanhos hardcoded (ex: `font-size: 50px;`) nos arquivos CSS locais dos componentes.
Todas as propriedades de design devem puxar do `:root` localizado no `src/app/globals.css`.

✅ **FAÇA ISSO:**
```css
.hero-headline {
  color: var(--color-primary-green);
  font-size: var(--font-headline-h1-size);
}
```

❌ **NUNCA FAÇA ISSO:**
```css
.hero-headline {
  color: #80DB42;
  font-size: 50px;
}
```
*Se uma variável faltar no `globals.css`, solicite autorização para criá-la.*

## 4. O Arquivo Global (`globals.css`)
- **Geração:** É gerado pelo Agente via MCP (Comando `/extrair-variaveis`).
- **Edição:** **NÃO MODIFIQUE** o reset do navegador que está lá, nem reescreva variáveis sem que o desenvolvedor autorize. Se encontrar variáveis novas, acrescente no `:root`.
