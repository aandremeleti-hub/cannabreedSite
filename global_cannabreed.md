# global_cannabreed.md — Regras do Projeto

> Este arquivo define as regras obrigatórias que o Agente deve seguir ao gerar código neste projeto. Todas as regras são invioláveis, a menos que o desenvolvedor instrua explicitamente o contrário em um prompt específico.

## 1. Identidade do Projeto

Projetos de landing page ou site institucional para clientes freelancer. Cada cliente tem repositório separado.

- **Framework:** Next.js (App Router)
- **Linguagem:** JavaScript (sem TypeScript)
- **Estilização:** CSS puro. Arquivo CSS separado e importado diretamente no seu respectivo componente JSX.
- **Roteamento:** App Router nativo do Next.js (Pasta `src/app/`)
- **Responsividade:** Desktop-first (CSS base focado no Figma Desktop; media queries `max-width` para redução adaptativa).
- **Proibido:** Tailwind CSS, styled-components, CSS Modules, inline styles.

## 2. Regras de Estilização

### 2.2 — Escopo e Importação de CSS Puro

Cada componente ou seção JSX possui um arquivo CSS correspondente na mesma pasta para manter a organização idêntica ao Figma. No Next.js, a importação do arquivo `.css` deve ser feita diretamente no topo do arquivo `.jsx` do próprio componente correspondente.

Como o projeto utiliza CSS Puro (sem CSS Modules), todos os estilos importados entram no escopo global da página. Para evitar conflitos de estilo e vazamento de escopo entre seções diferentes, é obrigatório seguir estritamente a regra 2.5, criando classes altamente específicas e prefixadas com o nome da seção.

```jsx
/* ✅ CORRETO (Importação isolada no próprio componente) */
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-container">
      <h1 className="hero-headline">Título</h1>
    </section>
  );
}
```

### 2.3 — SEMPRE usar CSS Custom Properties

Todas as cores e valores tipográficos devem referenciar CSS Custom Properties definidas no `:root` do `globals.css`. NUNCA usar valores hexadecimais, RGB ou tamanhos de fonte hardcoded nos arquivos CSS dos componentes.

```css
/* ❌ PROIBIDO em qualquer arquivo CSS de componente */
color: #02172B;
font-size: 50px;
background-color: #80DB42;
font-family: 'Titillium Web', sans-serif;

/* ✅ CORRETO */
color: var(--color-secondary-black);
font-size: var(--font-headline-h1-size);
background-color: var(--color-primary-green);
font-family: var(--font-title);
```

Se uma cor, fonte ou valor do Figma não existir como custom property no `globals.css`, NÃO inventar o valor hardcoded. Em vez disso, informar que é necessário adicionar a variável ao `:root` e sugerir o nome IDÊNTICO ao que está definido no Figma.

### 2.4 — Nomenclatura das Custom Properties

Seguir o Figma de forma estrita. 

Exceção: Se o Figma vier bagunçado ou misturando idiomas, reorganizar obrigatoriamente em variáveis semânticas padronizadas (ex: `--color-primary-green`, `--font-body-small`).

Se no Figma a variável se chama `color-primary-green`, no CSS fica `--color-primary-green`.

O Figma é a fonte de verdade para nomenclatura.

### 2.5 — Nomenclatura de classes CSS

Usar kebab-case descritivo. O nome deve obrigatoriamente indicar a seção e o elemento para evitar conflitos no escopo global da página do Next.js.

```css
/* ✅ CORRETO */
.hero { }
.hero-headline { }
.features-card-icon { }

/* ❌ PROIBIDO */
.div1 { }
.text-block { }
.Frame1268 { }
```

### 2.6 — Animações e Interações

Animações visuais padrão (transitions, hovers e keyframes) devem ser feitas diretamente no arquivo CSS do próprio componente. 

Para animações complexas que exijam o uso de bibliotecas de terceiros baseadas em JavaScript, o componente JSX correspondente deve receber obrigatoriamente a diretiva `"use client"` no topo do arquivo para funcionar corretamente no Next.js. Os comportamentos específicos devem seguir o arquivo `interactions.md` do projeto.

```jsx
/* ✅ CORRETO (Diretiva obrigatória para animações via JS no Next.js) */
"use client";

// Import da biblioteca de animação definida para o projeto aqui
```

## 3. Layout e Posicionamento

### 3.1 — Auto Layout do Figma = Flexbox ou CSS Grid

Elemento com auto layout no Figma (direction, gap, padding, alignment) → sempre Flexbox ou Grid. NUNCA usar coordenadas x/y para elementos com auto layout.

```css
/* ❌ PROIBIDO para elementos com auto layout no Figma */
.hero-content {
  position: absolute;
  left: 165px;
  top: 200px;
  width: 845px;
}

/* ✅ CORRETO */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 800px;
  width: 100%;
}
```

### 3.2 — Sem auto layout no Figma = position é permitido

Quando o elemento no Figma NÃO possui auto layout, o posicionamento manual é intencional. Nesse caso, usar `position: absolute` ou `position: relative` conforme as coordenadas fornecidas pelo MCP. Isso é válido para overlays, elementos decorativos, badges, ícones posicionados e qualquer situação onde o designer intencionalmente não usou auto layout.

### 3.3 — Larguras nunca fixas para containers de conteúdo

Containers de conteúdo principal devem usar `max-width` com `width: 100%` em vez de larguras fixas em pixel, para que se adaptem a diferentes tamanhos de tela e evitem quebras de layout em dispositivos móveis.

```css
/* ❌ PROIBIDO */
.hero-content {
  width: 845px;
}

/* ✅ CORRETO */
.hero-content {
  max-width: 845px;
  width: 100%;
}
```

## 4. Responsividade

### 4.1 — Abordagem Desktop-First (Baseada no Figma)

Como os layouts de origem no Figma são criados prioritariamente em formato Desktop, o CSS base (fora de media queries) deve ser escrito focado na experiência de telas grandes, mapeando diretamente os valores do design. A responsividade para telas menores deve ser aplicada de forma subtrativa ou adaptativa através de media queries `max-width`.

```css
/* ✅ CORRETO (Desktop-First baseado no Figma) */
.features-grid {
  display: flex;
  flex-direction: row; /* Desktop base do Figma: em linha (lado a lado) */
  gap: 32px;
  padding: 80px 0;
}

@media (max-width: 1024px) {
  .features-grid {
    flex-direction: column; /* Adaptação para telas menores: empilha */
    gap: 16px;
    padding: 24px 16px;
  }
}
```

### 4.2 — Breakpoints obrigatórios (Lógica de redução)
Todo arquivo de estilização de seção deve conter a estrutura de media queries utilizando a lógica de max-width para reduzir e adaptar o layout Desktop para dispositivos menores. Os pontos de quebra obrigatórios são:

```css
/* CSS Base: Desktop nativo conforme o Figma (Telas acima de 1024px) */

/* Tablet e Telas Médias (Telas até 1024px) */
@media (max-width: 1024px) {
  /* Ajustes de conversão do grid e redução de paddings exagerados */
}

/* Mobile e Telas Pequenas (Telas até 480px) */
@media (max-width: 480px) {
  /* Forçar empilhamento de colunas (flex-direction: column) e redução de fontes */
}
```

### 4.3 — Imagens Otimizadas e Responsivas (Next.js)

É proibido o uso da tag HTML comum <img> para imagens de conteúdo. Deve-se usar obrigatoriamente o componente <Image /> nativo do Next.js (importado de 'next/image'). 

Para imagens que acompanham o fluxo do texto, defina as propriedades width e height baseadas no tamanho do Figma. Para imagens de fundo (backgrounds) ou elementos fluidos, utilize a propriedade fill combinada com object-fit: cover no CSS do componente, garantindo que o container pai tenha position: relative.

```jsx
import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg.png';

export default function HeroSection() {
  return (
    <div className="hero-image-container">
      <Image 
        src={heroBg} 
        alt="Descrição clara do conteúdo da imagem"
        fill
        priority
      />
    </div>
  );
}
```

## 5. Semântica HTML

Uso obrigatório de elementos HTML semânticos:

- `<section>` para cada seção da landing page ou site
- `<header>` para o cabeçalho/navbar
- `<footer>` para o rodapé
- `<nav>` para navegação
- `<main>` para conteúdo principal
- `<h1>` a `<h6>` para títulos — `<h1>` apenas UMA vez por página
- `<button>` para ações clicáveis (nunca `<div>` ou `<span>` como botão)
- `<a>` para links de navegação
- Componente `<Image />` do Next.js SEMPRE com atributo alt descritivo

### 5.1 — Títulos em modais e cards

Títulos dentro de modais devem usar `<h2>` ou `<h3>`, nunca `<p>`. 
Títulos dentro de cards devem usar `<h3>` ou `<h4>`, nunca `<p>`.
O Agente deve identificar o contexto visual (tamanho da fonte, peso, 
hierarquia) para escolher a tag correta.

## 6. Componentes Reutilizáveis

### 6.1 — Componentes genéricos recebem props

Elementos que aparecem mais de uma vez no projeto (Button, Card, SectionTitle) devem ser componentes genéricos e puramente visíveis que recebem dados e interações via props. 

Para manter o plano de engenharia máxima, componentes base como o `Button.jsx` NUNCA devem receber a diretiva `"use client"` diretamente em seu arquivo, devendo apenas repassar o evento recebido (ex: `<button onClick={props.onClick}>`). A interatividade e a diretiva `"use client"` devem ser isoladas e restritas exclusivamente ao componente pai ou formulário que gerencia o estado daquela ação.

- Para evitar erros de incompatibilidade de hidratação (Hydration Mismatch), componentes isolados de cliente que renderizem dados dinâmicos baseados no sistema do usuário (como datas, horas ou manipulações diretas de elementos globais do navegador) devem obrigatoriamente garantir que o estado seja atualizado apenas após a montagem do componente no navegador via `useEffect`.

### 6.2 — Variantes via className condicional

Variantes de componentes são controladas por classes CSS condicionais, nunca por inline styles.

```jsx
//* ✅ CORRETO (Componente de servidor estático controlando variantes por classe) */
export default function Button({ children, variant, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
    >
      {children}
    </button>
  );
}
```

## 7. Estrutura de Pastas — Regras Next.js

- A estrutura de roteamento e páginas fica inteiramente dentro da pasta `src/app/`. O arquivo principal da rota raiz deve ser `src/app/page.jsx`.
- Componentes reutilizáveis genéricos globais e estáticos (Card, SectionTitle) ficam diretamente em `src/components/`.
- Componentes interativos isolados de cliente que possuem a diretiva `"use client"` (Formulários, Toggles de Menu, Modais) devem ser armazenados em `src/components/client/`.
- Seções de página específicas estruturais de servidor (HeroSection, FeaturesSection, etc.) ficam em `src/components/layout/`.
- Cada componente ou seção tem sua própria pasta contendo o arquivo `.jsx` e o `.css` juntos.
- Os arquivos `.css` de cada seção devem ser importados DIRETAMENTE no topo de seu respectivo arquivo `.jsx` de componente.
- Imagens de conteúdo ficam em `src/assets/images/`. Ícones SVG ficam em `src/assets/icons/`. Logos e favicons ficam na pasta raiz `public/`.
- O `globals.css` na raiz de `src/app/` contém o reset global e as custom properties, sendo importado obrigatoriamente no `src/app/layout.jsx` principal.

## 8. Regras do arquivo globals.css

- Na criação do projeto, o Agente gera o `globals.css` completo (reset + custom properties) dentro de `src/app/` a partir das variáveis extraídas do Figma via MCP.
- Depois que o arquivo existe, NÃO modificar o reset nem reorganizar as custom properties sem solicitação explícita do desenvolvedor.
- Para adicionar novas variáveis identificadas em novos frames do Figma, o Agente deve adicioná-las ao `:root` existente e informar claramente no terminal quais propriedades foram anexadas.

## 9. Imagens e Assets

### 9.1 — Estrutura de Pastas e Caminhos no Next.js

A organização física dos arquivos de mídia deve seguir a estrutura abaixo:
- Imagens de conteúdo/dinâmicas: `src/assets/images/` (Devem ser importadas como objetos JavaScript no topo do arquivo via import estático `@/assets/...`).
- Ícones SVG de interface: `src/assets/icons/` (Devem ser importados como componentes ou via objetos JavaScript).
- Logos fixas institucionais e favicons: Pasta raiz `public/` (Acessadas diretamente por string através do caminho absoluto `/nome-do-arquivo.ext`).

### 9.2 — Proibição de URLs locais do MCP

- É terminantemente proibido deixar URLs temporárias geradas pelo servidor local do Figma MCP (ex: `http://localhost:3845/...`) no código dos componentes.
- Caso o asset final do Figma ainda não tenha sido exportado para as pastas locais, o Agente deve obrigatoriamente utilizar caminhos relativos locais apontando para arquivos existentes ou placeholders locais estruturados.

```jsx
/* ✅ CORRETO (Uso de caminhos compatíveis com a arquitetura do Next.js) */
import Image from 'next/image';
import heroBanner from '@/assets/images/hero-banner.png'; // Import estático correto para src/assets

export default function Logo() {
  return (
    <>
      {/* Puxando direto da pasta public/ via string */}
      <Image src="/logo.svg" alt="Logo Cliente" width={150} height={40} />
      
      {/* Puxando da pasta src/assets/ usando o objeto importado para aceitar o fill */}
      <div className="banner-container">
        <Image src={heroBanner} alt="Banner Principal" fill />
      </div>
    </>
  );
}
```

## 10. Fontes e Tipografia (Next.js)

É proibido o uso de tags `<link>` externas para fontes ou diretivas `@import` dentro do CSS. O gerenciamento de tipografia deve ser feito obrigatoriamente através do módulo nativo `next/font/google` dentro do arquivo raiz `src/app/layout.jsx`.

Para garantir que a fonte seja aplicada nativamente a todos os elementos do site e que a variável CSS fique disponível para customizações pontuais, configure o método injetando a classe nativa da fonte e a propriedade `variable` diretamente na tag `<body>`.

```jsx
/* ✅ CORRETO (Configuração e aplicação de fontes nativa no src/app/layout.jsx) */
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Disponibiliza a variável para o CSS
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

- É terminantemente proibido inserir a diretiva `"use client"` no arquivo raiz `src/app/layout.jsx`. Caso componentes globais do esqueleto (como a Navbar) necessitem de estados ou interações de clique, a lógica cliente deve ser isolada em um componente separado dentro de `src/components/client/` e importada no layout.

## 11. Nomenclatura React e Next.js

Seguir estritamente as regras de padronização de escrita para arquivos, funções e variáveis do ecossistema React, respeitando as exceções de roteamento do Next.js:

- **PascalCase** para nomes de componentes customizados e seus respectivos arquivos (ex: `HeroSection.jsx`, `Button.jsx`, `FeaturesSection.jsx`).
- **camelCase** para funções, variáveis, estados e hooks (ex: `handleClick`, `isMenuOpen`, `useScrollPosition`).
- **kebab-case** para classes CSS nos arquivos de estilização (ex: `hero-headline`, `features-card`).
- **Prefixo "use"** para hooks customizados (ex: `useScrollToTop`, `useWindowSize`).
- **Booleanos com prefixo descritivo:** Variáveis que guardam estados de verdadeiro ou falso devem obrigatoriamente usar prefixos como `isOpen`, `hasError`, `shouldAnimate`, `isLoading`.

### 11.1 — Exceção para Arquivos Especiais do Next.js

Os arquivos de convenção de rota do App Router dentro da pasta `src/app/` devem ser escritos inteiramente em letras minúsculas (lowercase), conforme exigido pelo framework:
- `page.jsx` (Componente interno declarado em PascalCase: `export default function Page()`)
- `layout.jsx` (Componente interno declarado em PascalCase: `export default function RootLayout()`)
- `loading.jsx`, `not-found.jsx`
- `error.jsx` (**Obrigatoriamente** Client Component. Deve capturar falhas dinâmicas recebendo as props nativas: `Error({ error, reset })`, onde `error` carrega a propriedade `.digest` e `reset` é a função de re-renderização).

## 12. Integração com Figma MCP

### 12.1 — Fluxo obrigatório ao gerar código a partir do Figma

Ao iniciar a criação de qualquer componente ou seção, o Agente deve seguir rigorosamente estes passos:
1. Ler a estrutura, o posicionamento e o layout do frame correspondente via `get_design_context`.
2. Mapear os valores de design (cores, espaçamentos, raios de borda) para as custom properties existentes em `src/app/globals.css`.
3. Se uma variável identificada no Figma não estiver declarada no `:root` do `src/app/globals.css`, o Agente deve interromper a geração do componente, informar o desenvolvedor e sugerir a nomenclatura semântica correta antes de prosseguir.
4. Gerar o componente JSX estruturado estritamente com HTML semântico.
5. Gerar a folha de estilo CSS separada da seção utilizando exclusivamente as custom properties validadas.

### 12.2 — Gerar o globals.css a partir do Figma

O arquivo global de estilos `src/app/globals.css` é gerado e alimentado exclusivamente através do comando automatizado `/extrair-variaveis`.
- Este comando executa a função `get_design_context` nos frames específicos de Style Guide do Figma (como frames dedicados a paletas de cores e tabelas de tipografia) para minerar cores, famílias de fontes e Text Styles com suas respectivas propriedades.
- É proibido o uso de `get_variable_defs` para a construção ou manutenção do `globals.css`. O Agente não deve descrever, documentar ou replicar o comportamento interno do comando `/extrair-variaveis` fora de seu próprio script de execução.



