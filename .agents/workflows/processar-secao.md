# Comando: /processar-secao

## Objetivo

Processar uma seção específica do Figma exportada manualmente na pasta `figma_imports/[nome-secao]`, validando sua integridade, organizando seus assets nos caminhos corretos do projeto, planejando a estrutura semântica e gerando o código JSX + CSS com fidelidade e semântica premium, seguindo as diretrizes de `global_cannabreed.md` e as decisões arquiteturais do projeto.

---

## Etapa 1 — Verificação de Integridade dos Assets (Pré-requisitos)

Antes de gerar qualquer linha de código, o agente deve auditar o conteúdo da pasta `figma_imports/[nome-secao]/` para verificar se todos os elementos necessários estão presentes:

1. **Screenshot de Layout Geral / SVG de Referência:**
   - Deve existir um arquivo SVG (`Main.svg` ou `[nome-secao]-layout.svg`) que represente o layout visual completo da seção.
   - **MANDATÓRIO:** O SVG deve conter tags `<text>` legíveis para os títulos e descrições. Se o arquivo contiver apenas caminhos `<path>` para os textos, significa que foi exportado com a opção **"Outline Text"** ativada no Figma. O agente deve interromper o processo e solicitar a re-exportação com "Outline Text" desmarcado.

2. **Arquivos Visuais Individuais (Assets):**
   - As imagens de conteúdo (PNG, JPG, WebP) e ícones/gradientes de suporte (SVGs como o gradiente `Rectangle 96`) devem estar contidos na pasta da seção.
   - O gradiente de overlay e a imagem de fundo devem ser validados quanto à sobreposição visual informada no layout.

3. **Validação de Faltas:**
   - Se os arquivos não puderem ser lidos ou se o texto estiver em curvas, exibir a seguinte mensagem de erro:
     `"Erro: A pasta figma_imports/[nome-secao]/ está incompleta ou os textos estão em curvas. Certifique-se de exportar com 'Outline Text' DESMARCADO."`

---

## Etapa 2 — Análise e Planejamento Estrutural

1. **Estudo de Layout:**
   - Analisar as tags `<text>` e as dimensões do SVG para inferir a hierarquia HTML semântica (`<section>`, `<main>`, `<h1>`, `<p>`, `<a>`, `<button>`).
   - Mapear as variáveis globais de cores e tipografia declaradas em `src/app/globals.css`. **É terminantemente proibido hardcodar hexadecimais, rgb ou px em fontes.**

2. **Design Responsivo (Desktop-First):**
   - Planejar como o layout Desktop se adaptará para Tablet (max-width: 1024px) e Mobile (max-width: 480px).
   - Identificar elementos de alinhamento por Flexbox/Grid e elementos de posicionamento absoluto (`position: absolute`).

---

## Etapa 3 — Organização e Movimentação de Assets

Mover e tratar os assets de `figma_imports/[nome-secao]/` seguindo a arquitetura do projeto:

1. **Imagens de Conteúdo/Fundo:**
   - Mover arquivos de imagem (PNG, JPG, WebP, SVGs complexos com PNGs embutidos) para `src/assets/images/`.
   - Renomear os arquivos para kebab-case representativo (ex: `hero-illustration.svg`).

2. **Ícones Estáticos e Elementos de Interface:**
   - Mover arquivos `.svg` de gradiente e decorativos (ex: gradientes como `Rectangle 96`) para `src/assets/icons/` com nomes descritivos em kebab-case (ex: `rectangle-decor.svg`).

3. **Ícones Dinâmicos (Com variação de cor / hover):**
   - Criar um componente React funcional em `src/components/icons/[NomeIcone].jsx` injetando `fill="currentColor"`.

---

## Etapa 4 — Desenvolvimento da Seção (JSX + CSS)

### 1. Nomenclatura e Estrutura:
- Criar a pasta da seção em `src/components/layout/[NomeSecao]/`.
- Criar os arquivos `[NomeSecao].jsx` e `[NomeSecao].css` dentro da pasta (ex: `MainTeste.jsx` e `MainTeste.css`).
- Importar o CSS localmente na primeira linha do JSX: `import './[NomeSecao].css';`.

### 2. Regras de CSS Críticas (Responsividade Máxima e Alinhamento):
- **Largura Fluida (Sem Faixas Brancas):**
  - O container da seção (`.nome-secao`) e o container de background (`.nome-secao-background-container`) devem ter sempre `width: 100%;` e **NUNCA** herdar a largura fixa de design (ex: `1512px`) do Figma. Isso evita barras brancas nas laterais em monitores gigantes.
  - A cor padrão de fundo (`background-color`) da seção deve ser mapeada para a cor da marca (ex: `var(--color-primary-navy)`) ao invés do fallback branco genérico.
- **Evitar o "Double Crop" em Backgrounds SVGs:**
  - As imagens exportadas como SVG do Figma já vêm pré-cropadas e pré-posicionadas por sua matriz interna de escala e translação no XML.
  - **NÃO** declare propriedades de background-position e background-size de crop estrito do DevMode (como `-90px -110px / 163% 208%`) em cima do arquivo SVG pré-cropado, pois isso duplicará o efeito de corte. Em vez disso, use `background-position: center; background-size: cover;`.
- **Limitação de Grid Interno:**
  - Apenas o wrapper de conteúdo (`.nome-secao-content-wrapper`) deve ter largura máxima restringida (`max-width: 1200px` ou `1280px` etc.) e ser centralizado com `margin: 0 auto;`.
- **Fluidez dos Textos:**
  - Containers de texto (`.nome-secao-text-container-description`) devem ter `max-width` com `width: 100%` em vez de larguras fixas.

---

## Etapa 5 — Atualização do Plano Mestre e Teste

1. Atualizar o arquivo `plans/figma_to_code_plan.md` alterando o status da etapa correspondente da Categoria 3 de `[ ]` para `[x]`.
2. Registrar uma breve nota no diário de bordo/as-built indicando a data, a seção gerada e as decisões tomadas.
