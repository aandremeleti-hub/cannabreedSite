# Relatório de UX & Acessibilidade — AuthoritySection

Este relatório audita o design da seção **AuthoritySection** com base em boas práticas de usabilidade, psicologia cognitiva de UX (como a Lei da Proximidade e Carga Cognitiva) e diretrizes de acessibilidade (WCAG).

---

## 1. Contraste e Legibilidade Visual
- **Análise:** O texto principal em Azul Marinho (`#02172b`) sobre o fundo Cinza Claro/Névoa (`#F4F4F8`) oferece uma razão de contraste excelente (superior a 7:1), excedendo as exigências de nível AAA da WCAG para qualquer tamanho de texto.
- **Melhoria Técnica:** Assegurar que as cores sejam mapeadas para os tokens globais `--color-primary-navy` e `--color-secondary-mist-light` no CSS local do componente, sem invenções de valores hexadecimais avulsos.

## 2. Hierarquia Semântica e Estrutura HTML5
- **Estrutura de Títulos:**
  - O título geral "AUTORIDADE EM DESTAQUE" será renderizado como um `<h2>` para obedecer à hierarquia correta da página (que já contém um `<h1>` principal na `HeroSection`).
  - Os títulos de cada cartão de autoridade (ex: "Parceria com Universidade Federal") serão marcados com `<h3>` semântico para delimitar blocos secundários de conteúdo.
- **Uso de Elementos Semânticos:**
  - O bloco geral será uma `<section aria-labelledby="authority-section-title">`.
  - Cada item de destaque será envolto em uma tag `<article className="authority-item">` ou `<div className="authority-item">` com as devidas tags de texto.

## 3. Otimização de Imagens e Acessibilidade Leitora de Tela
- **O Problema:** A composição visual da esquerda contém três imagens que trazem profundidade científica, porém não possuem valor textual nativo.
- **Diretriz WCAG:** Todas as imagens devem ter atributos `alt` preenchidos com descrições semânticas e ricas:
  - Imagem 1: `alt="Close-up microscópico de tricomas de Cannabis em laboratório de P&D"`
  - Imagem 2: `alt="Cultivo científico de mudas selecionadas de Cannabis em ambiente controlado"`
  - Imagem 3: `alt="Profissional com jaleco manuseando material genético de Cannabis na universidade"`
- **Rastreamento de Imagem:** Para as imagens estáticas importadas via Next.js `<Image>`, usar `sizes="(max-width: 1024px) 100vw, 50vw"` para evitar o download de resoluções excessivas em dispositivos móveis.

## 4. Adaptabilidade Responsiva (Tablet e Mobile)
- **Tablet (max-width: 1024px):**
  - O layout original em duas colunas (imagens à esquerda, texto à direita) deve mudar para uma única coluna. A composição de imagens ficará centralizada no topo, seguida pela lista de itens de texto abaixo.
  - Espaçamentos exagerados (ex: gap de 54px) devem ser reduzidos para `32px` para otimizar o viewport vertical.
- **Mobile (max-width: 480px):**
  - Empilhar verticalmente a composição de imagens se necessário, reduzindo o tamanho proporcional da grade de imagens (`max-width: 100%`) para evitar transbordamento horizontal.
  - O tamanho da fonte dos títulos dos itens (`32px`) é excessivo para telas de celular. Propomos reduzir para `24px` e o título principal de `44px` para `32px` de forma adaptativa via media queries.

## 5. Micro-animações e Interações Propostas
- **Scroll Reveal:** Os cartões podem surgir de forma sutil através de um efeito fade-in/slide-up à medida que o usuário rola a página, criando uma experiência premium.
- **Hover nos Ícones:** Adicionar uma leve transição de escala (`transform: scale(1.05); transition: transform 0.2s ease;`) nos círculos dos ícones estáticos para incentivar a leitura focada de cada seção.
