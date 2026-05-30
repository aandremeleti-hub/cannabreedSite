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

## 4. Caminhos de Imagens do Figma MCP
**CRÍTICO:** **NUNCA** faça commits ou deixe no código de produção URLs temporárias do MCP (ex: `http://localhost:3845/...`).
Sempre faça download do asset e referencie localmente.
