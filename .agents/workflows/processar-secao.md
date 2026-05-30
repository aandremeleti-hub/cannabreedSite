---
description: Processa uma seção do Figma exportada manualmente, organizando assets e gerando código JSX + CSS.
---

# Comando: /processar-secao

> [!IMPORTANT]
> **DIRETRIZ DE DESENVOLVIMENTO DE FRONTEND & RELATÓRIO DE UX/ACESSIBILIDADE:**
> Durante este workflow, você atuará como o **frontend-specialist** (detalhado em [frontend-specialist.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/agents/frontend-specialist.md)).
> 
> **Fidelidade ao Figma + Relatório de Melhorias:**
> 1. **Fidelidade Estrita no Código:** Você **deve** reproduzir o design visual, cores, tipografia e layout aprovados no Figma com máxima precisão no código JSX/CSS de produção.
> 2. **Auditoria de Conformidade:** Em paralelo, utilize os conceitos de [ux-psychology.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/frontend-design/ux-psychology.md) e [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md) para analisar o design do Figma.
> 3. **Geração de Relatório Paralelo:** Documente suas observações e sugestões de melhoria (ex: acessibilidade, estados de foco, adaptabilidade responsiva) em um arquivo de relatório separado. Não implemente estas melhorias diretamente no código de produção sem a aprovação do usuário.

---

## Objetivo

Processar uma seção específica do Figma exportada manualmente [nome-secao]`, validando sua integridade, organizando seus assets nos caminhos corretos do projeto, planejando a estrutura semântica e gerando o código JSX + CSS com fidelidade, seguindo as diretrizes de `global_cannabreed.md` e as decisões arquiteturais do projeto.

---

## Etapa 1 — Verificação de Integridade dos Assets (Pré-requisitos)

**Agente Responsável:** `explorer-agent` (conforme [explorer-agent.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/agents/explorer-agent.md))

Antes de gerar qualquer linha de código, o agente deve auditar o conteúdo da pasta `[nome-secao]/` para verificar se todos os elementos necessários estão presentes:

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

**Agente Responsável:** `frontend-specialist`

1. **Estudo de Layout Semântico:**
   - Analisar as tags `<text>` e as dimensões do SVG para inferir a hierarquia HTML semântica (`<section>`, `<main>`, `<h1>`, `<p>`, `<a>`, `<button>`).
   - Mapear as variáveis globais de cores e tipografia declaradas em `src/app/globals.css`. **É proibido hardcodar hexadecimais, rgb ou px em fontes.**

2. **Geração do Relatório de UX & Acessibilidade (Obrigatório):**
   - Audite o design do Figma com base nos princípios de acessibilidade do [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md) e de usabilidade do [ux-psychology.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/frontend-design/ux-psychology.md).
   - **Criação do Relatório:** Crie o arquivo Markdown `src/components/layout/[NomeSecao]/[NomeSecao]_ux_suggestions.md`.
   - **Conteúdo do Relatório:** Detalhe sugestões de melhoria técnica ou visual (como ausência de foco acessível, contrastes ruins, ideias de micro-animações, layout fluido em telas pequenas), justificando com as diretrizes das skills.
   - **Regra de Implementação:** Prossiga com o código de produção seguindo estritamente o layout do Figma. As melhorias do relatório servirão para futura tomada de decisão pelo usuário.

---

## Etapa 3 — Organização e Movimentação de Assets

**Agente Responsável:** `frontend-specialist`

Mover e tratar os assets de `figma_imports/[nome-secao]/` seguindo a arquitetura de assets do projeto:

1. **Imagens de Conteúdo/Fundo:**
   - Mover arquivos de imagem (PNG, JPG, WebP) para `src/assets/images/` em kebab-case.

2. **Ícones Estáticos e Elementos Visuais Fixos:**
   - Ícones decorativos que **não sofrem alteração de cor** (ex: logotipos, ilustrações coloridas estáticas) devem ser movidos como arquivo `.svg` para `src/assets/icons/` ou `src/assets/images/`.

3. **Ícones Dinâmicos (Hover / Troca de Cor - Regra Global):**
   - **É proibido colar grandes strings de `<path d="...">` diretamente nos componentes de layout.**
   - Qualquer ícone que precise mudar de cor dinamicamente deve ser criado como componente React na pasta `src/components/icons/` (ex: `src/components/icons/IconCheck.jsx`) com `fill="currentColor"`.

---

## Etapa 4 — Desenvolvimento da Seção (JSX + CSS)

**Agente Responsável:** `frontend-specialist`

### 1. Nomenclatura e Estrutura:
- Criar a pasta da seção em `src/components/layout/[NomeSecao]/`.
- Criar os arquivos `[NomeSecao].jsx` e `[NomeSecao].css` dentro da pasta (ex: `MainTeste.jsx` e `MainTeste.css`).
- Importar o CSS localmente na primeira linha do JSX: `import './[NomeSecao].css';`.

### 2. Proibições de Estilização Estritas (Regra Global):
- **Sem Tailwind CSS:** Não utilize nenhuma classe ou diretiva utilitária do Tailwind.
- **Sem CSS-in-JS:** Não utilize Styled Components, Emotion ou CSS Modules.
- **Sem Inline Styles:** O uso do atributo `style={...}` é estritamente proibido, exceto para valores puramente dinâmicos ou real-time.
- **Sem Poluição Global:** Todo estilo específico da seção deve estar em seu `[NomeSecao].css` local.

### 3. Design Tokens (Regra Global):
- **Sem Valores Hardcoded:** É proibido usar códigos hexadecimais de cor (`#fff`), RGB ou tamanhos arbitrários (`px`, `rem`) diretamente no CSS local.
- **Uso de Variáveis Globais:** Utilize as variáveis semânticas declaradas no arquivo de tokens globais (`src/app/globals.css`), tais como `var(--color-primary-navy)` ou `var(--font-headline-h1-size)`.

### 4. Regras de CSS Críticas (Responsividade Máxima e Alinhamento):
- **Largura Fluida (Sem Faixas Brancas):**
  - O container da seção (`.nome-secao`) e o container de background (`.nome-secao-background-container`) devem ter sempre `width: 100%;` e **NUNCA** herdar a largura fixa de design (ex: `1512px`) do Figma. Isso evita barras brancas nas laterais em monitores gigantes.
  - A cor padrão de fundo (`background-color`) da seção deve ser mapeada para a cor da marca (ex: `var(--color-primary-navy)`) ao invés do fallback branco genérico.
- **Evitar o "Double Crop" em Backgrounds SVGs:**
  - As imagens exportadas como SVG do Figma já vêm pré-cropadas e pré-posicionadas por sua matriz interna de escala e translação no XML.
  - **NÃO** declare propriedades de background-position e background-size de crop estrito do DevMode (como `-90px -110px / 163% 208%`) em cima do arquivo SVG pré-cropado, pois isso duplicará o efeito de corte. Em vez disso, use `background-position: center; background-size: cover;`.
- **Limitação de Grid Interno:**
  - O wrapper de conteúdo (`.nome-secao-content-wrapper`) deve ter sua largura e alinhamento adaptados ao design do Figma. Se o layout exigir alinhamento centralizado padrão, restrinja a largura máxima (ex: `max-width: 1200px` ou `1280px` etc.) e centralize com `margin: 0 auto;`. Se o design exigir que os elementos toquem ou se alinhem perto dos limites laterais da tela (como desalinhamentos em zig-zag ou grids nas extremidades), o wrapper deve permanecer fluido (`width: 100%; max-width: 100%;`) usando margens ou paddings mínimos de segurança.
- **Fluidez dos Textos:**
  - Containers de texto (`.nome-secao-text-container-description`) devem ter `max-width` com `width: 100%` em vez de larguras fixas.

---

## Etapa 5 — Auditoria, Teste e Atualização de Status

**Agente Responsável:** `frontend-specialist` em cooperação com o `test-engineer` (conforme [test-engineer.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/agents/test-engineer.md))

Para garantir que a seção implementada obedece às diretrizes de acessibilidade e desempenho do projeto:

1. **Auditoria de Semântica e Acessibilidade:**
   - Leia as diretrizes contidas em [web-design-guidelines/SKILL.md](file:///C:/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/skills/web-design-guidelines/SKILL.md).
   - Garanta que todos os elementos interativos possuam estados de `:focus-visible` explícitos e semântica HTML adequada.
   - Verifique se as tags `alt` de imagens e `aria-hidden` de ícones decorativos foram declaradas corretamente.

2. **Execução do Script de Auditoria:**
   - Execute o script de análise de UX na raiz do projeto:
     ```bash
     python .agent/skills/frontend-design/scripts/ux_audit.py .
     ```
   - Corrija qualquer inconformidade apontada pelo script de auditoria antes de atualizar o status da tarefa.

3. **Atualização do Plano Ativo:**
   - Localize o plano de ação ativo em execução na pasta `plans/`.
   - Atualize o status da etapa correspondente de `[ ]` para `[x]` e registre no diário de bordo do plano ativo quaisquer decisões ou desvios de rota tomados.