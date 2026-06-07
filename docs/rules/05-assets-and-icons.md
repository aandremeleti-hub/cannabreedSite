# Imagens, SVGs e Assets (Cannabreed)

O gerenciamento de mídia deve seguir as regras estritas do Next.js e otimização visual.

## 1. Organização Física de Arquivos
- **Imagens Dinâmicas:** `src/assets/images/` (Importadas via objeto estático JS).
- **Ícones SVG:** `src/assets/icons/` (Ou diretamente como Componentes React).
- **Logos/Favicons:** `public/` (Acessadas via string `/logo.png`).

## 2. Next.js Image Component
**OBRIGATÓRIO:** O uso da tag nativa `<img>` é estritamente **PROIBIDO**. Use `<Image />` (`next/image`).

✅ **FAÇA ISSO:**
```jsx
import Image from 'next/image';
import heroBanner from '@/assets/images/hero-banner.png';

<div className="banner">
  <Image src={heroBanner} alt="Banner" fill objectFit="cover" />
</div>
```

## 3. Ícones SVG Dinâmicos
**MANDATÓRIO:** Ícones com interatividade (hover, temas) devem ser transformados em Componentes React na pasta `src/components/icons/`.

✅ **FAÇA ISSO (SVG Dinâmico):**
```jsx
export default function IconArrow({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" viewBox="0 0 24 24">
      {/* fill="currentColor" permite herdar a cor do CSS do pai */}
      <path fill="currentColor" d="..." />
    </svg>
  );
}
```

❌ **NUNCA FAÇA ISSO:**
- Deixar `<path fill="#FF0000" />` chumbado no JSX.
- Esquecer o `xmlns="http://www.w3.org/2000/svg"`.

## 4. Fundos Dinâmicos e Anti-Poluição de DOM
**CRÍTICO:** SVGs usados estritamente como *background shapes* de componentes não devem existir no HTML.
- 🔴 **PROIBIDO:** Importar um componente `<IconFundoBg />` no JSX apenas para ser uma forma de fundo colorida. Isso polui o DOM desnecessariamente.
- 🟢 **OBRIGATÓRIO:** Transfira a diretiva de renderização do SVG para o CSS do componente utilizando `mask-image` (com url encoding) atrelado a um pseudo-elemento (`::before`/`::after`). Utilize `background-color: var(--color-variavel)` para que a cor da máscara continue responsiva às variáveis dinâmicas do CSS no hover.

## 5. Caminhos de Imagens do Figma MCP
**CRÍTICO:** **NUNCA** faça commits ou deixe no código de produção URLs temporárias do MCP (ex: `http://localhost:3845/...`).
Sempre faça download do asset e referencie localmente.

## 6. Padronização, Contraste e Segurança em Ícones
- 🔴 **PROIBIDO:** Deixar componentes de ícones React com tamanhos internos variáveis (ex: misturando defaults de `size={24}` e `size={48}`) sem normalização.
- 🟢 **OBRIGATÓRIO:** Forçar explicitamente a prop `size` ao clonar (`React.cloneElement(iconNode, { size: 48 })`) ou instanciar ícones, limitando as dimensões físicas no container CSS (`max-width: 38px; max-height: 38px`) para manter escala perfeitamente uniforme de 1:1.
- 🔴 **PROIBIDO:** Clonar elementos lendo propriedades diretamente sem tratamento (ex: `iconNode.props.className`), gerando quebras de runtime TypeError.
- 🟢 **OBRIGATÓRIO:** Usar optional chaining (`iconNode.props?.className || ''`) ao mesclar classes do elemento clonado.
- 🔴 **PROIBIDO:** Chubar cores absolutas e estáticas em SVGs dinâmicos de ícones estruturais.
- 🟢 **OBRIGATÓRIO:** Projetar e estender ícones para aceitarem duas cores configuráveis via variáveis locais (`var(--icon-color-primary)` e `var(--icon-color-secondary)`), permitindo inversão de contraste imediata no hover ou modal de acordo com o fundo.

