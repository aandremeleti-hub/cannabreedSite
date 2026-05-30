# Plano Mestre e As-Built: Estratégia de Migração Figma -> Código Premium

**Objetivo Geral:** Estabelecer a estratégia definitiva para consumir um layout de Figma desestruturado (sem auto layout, sem nomenclatura semântica) e gerar um código Next.js em Javascript (JSX) + CSS Puro impecavelmente estruturado, usando o `guia_manual_figma_5abr.md` como o manual de arquitetura mental para a IA.
**Status:** 🟡 Em Progresso (As-Built)

---

## 🎯 Estratégia: A Utilidade do `guia_manual_figma_5abr.md`

Como o Figma atual está desorganizado, o guia é **invertido**: em vez de você arrumar o Figma, ele é o meu manual de arquitetura mental. Quando o MCP retornar "Frame 427318", eu aplico as regras de **Fase 2 (Análise de Estrutura)** e **Fase 5 (Componentização)** do guia para deduzir a estrutura ideal. O caos fica no Figma; a ordem chega pura no VSCode.

Para a leitura do Figma: **Rota Híbrida** — estrutura via screenshot (minha visão computacional), dados precisos (cores, textos, SVGs) via exportação manual para `src/assets/` e `public/`.

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)

- [26/05/2026 11:56]: Planejamento da estratégia Figma-to-Code iniciado.
- [26/05/2026 12:39]: `globals.css` gerado a partir do Manual da Marca (PDF). Cores e tipografia mapeadas manualmente.
- [26/05/2026 12:42]: Categoria 1 executada. Base convertida para JS/CSS puro. Dev server rodando sem erros in 1080ms.
- [26/05/2026 12:56]: `tsconfig.json` deletado (havia sido esquecido). Plano atualizado como As-Built.
- [26/05/2026 13:25]: Categoria 3 - Subetapa 3.1.1 executada. Novo workflow '/processar-secao' criado e adotado. HeroSection.jsx e HeroSection.css gerados com sucesso utilizando os textos reais do SVG re-exportado com textos legíveis.
- [27/05/2026 01:30]: Categoria 3 e 4 executadas. Seção WhatCannabreedDoes e cartões CardGenetica, CardImportation, CardLaudo, CardStructuration implementados com sucesso. Assets organizados e otimizados em src/assets/.
- [27/05/2026 23:14]: Categoria 3 - Seção AboutUsSection processada via workflow '/processar-secao'. JSX/CSS criados de forma totalmente responsiva (prefers-reduced-motion e layout fluido) e integrados na página principal. Relatório de UX/acessibilidade gerado.
- [28/05/2026 00:30]: Categoria 3 - Seção Header (Navbar) processada via workflow '/processar-secao'. Logotipo extraído e salvo em src/assets/images/logo.png. Componente criado de forma semanticamente correta, totalmente responsivo (com menu hambúrguer para mobile), estados de foco (:focus-visible) e transições suaves, integrado acima do Hero.
- [28/05/2026 02:00]: Categoria 3 - Seção ActingSection (Áreas de Atuação) processada via workflow '/processar-secao'. Ícones e background organizados em src/assets/, estruturação de ícone de crop criada. Componente codificado de forma semanticamente correta e 100% responsiva (CSS Grid + Flex columns no mobile), integrado na rota /sobre-nos abaixo da AboutUsSection.
- [28/05/2026 12:27]: Categoria 3 - Seção TimeLineSection (Linha do Tempo) processada. Fotos dos cartões extraídas de base64 e salvas em src/assets/images/. Componente JSX/CSS codificado de forma responsiva (CSS Grid alternado no desktop e vertical com linha guia no mobile) e integrado no /sobre-nos.

---

## 🚀 Roteiro de Execução por Categoria

> *Legenda: `[x]` concluído | `[/]` em progresso | `[ ]` pendente*

---

### Categoria 1: Limpeza da Fundação do Next.js
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `next-best-practices`, `clean-code`
- **Arquivos Afetados:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/page.module.css`, `tsconfig.json`

#### Etapa 1.1: Limpeza do Boilerplate e Instalação do JSX
> **🔗 Motivação:** O projeto possuía TypeScript e CSS Modules. O `global_cannabreed.md` proíbe ambos (Regras 1 e 2.2).
  - [x] **Subetapa 1.1.1:** Deletar `tsconfig.json`, remover dependências TS do `package.json`, deletar `layout.tsx` e `page.tsx`, criar `layout.jsx` e `page.jsx`. | 🔒 **Dificuldade: 2**
  - [x] **Subetapa 1.1.2:** Deletar `page.module.css`. Configurar `layout.jsx` com `next/font/google` (Titillium Web + Lato), injetando `--font-title` e `--font-body` no `<body>`. | 🔒 **Dificuldade: 2**

---

### Categoria 2: Geração do Design System (globals.css)
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `theme-factory`, `color-palette`
- **Arquivos Afetados:** `src/app/globals.css`

#### Etapa 2.1: Mapeamento Global de Cores e Tipografia
> **🔗 Motivação:** Garantir que o `globals.css` contenha todas as variáveis base do Manual da Marca antes de codar qualquer componente.
  - [x] **Subetapa 2.1.1:** Gerar `globals.css` completo (reset CSS moderno + `:root` com tokens de cor e tipografia extraídos do `Manual da marca.pdf`). | 🟡 **Dificuldade: 3**
  - **As-Built:** 16 tokens de cor gerados (`--color-primary-navy`, `--color-primary-green` e variações). 8 estilos tipográficos mapeados (T1–T4, Parágrafo, Eyebrow, Citação, Atribuição).

---

### Categoria 3: Extração do Layout e Geração de Componentes
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `react-components`
- **Arquivos Afetados:** `src/app/page.jsx`, `src/components/layout/...`, `src/components/...`
- **Rota Definida:** Híbrida — Screenshot para estrutura + exportação manual de assets para dados.

#### Etapa 3.1: Seção por Seção (a partir do Figma)
> **🔗 Motivação:** Ler visualmente cada seção do layout aprovado e gerar o JSX/CSS semanticamente correto, ignorando a desorganização do Figma.
  - [x] **Subetapa 3.1.1:** Receber screenshot da primeira seção (Navbar/Hero). Inferir hierarquia e gerar `HeroSection.jsx` + `HeroSection.css` com classes kebab-case. | 🟠 **Dificuldade: 4** | 🤖 **Modelo: Claude Sonnet (Thinking)**
  - [x] **Subetapa 3.1.2:** Identificar elementos repetidos (Cards, Botões) e abstraí-los em `src/components/`. | 🟠 **Dificuldade: 4** | 🤖 **Modelo: Claude Sonnet (Thinking)**
  - [x] **Subetapa 3.1.3:** Reiterar para cada seção restante do layout (WhatCannabreedDoes e RenatoSection implementadas). | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Claude Sonnet**

---

### Categoria 4: Implementação de Imagens e Assets Visuais
- **Agente Responsável:** `frontend-specialist`
- **Arquivos Afetados:** `public/`, `src/assets/images/`, `src/assets/icons/`

#### Etapa 4.1: Organização e Referência de Assets
> **🔗 Motivação:** Imagens e ícones precisam estar nos caminhos corretos antes de serem referenciados no código.
  - [x] **Subetapa 4.1.1:** Você exporta imagens do Figma → `src/assets/images/` e ícones SVG → `src/assets/icons/`. Logo → `public/`. | 🔒 **Dificuldade: 2**
  - [x] **Subetapa 4.1.2:** Criar componentes SVG reutilizáveis em `src/components/icons/` para ícones dinâmicos (com `fill="currentColor"`). | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)

- [26/05/2026 11:56]: Planejamento da estratégia Figma-to-Code iniciado.
- [26/05/2026 12:39]: `globals.css` gerado a partir do Manual da Marca (PDF). Cores e tipografia mapeadas manualmente.
- [26/05/2026 12:42]: Categoria 1 executada. Base convertida para JS/CSS puro. Dev server rodando sem erros in 1080ms.
- [26/05/2026 12:56]: `tsconfig.json` deletado (havia sido esquecido). Plano atualizado como As-Built.
- [26/05/2026 13:25]: Categoria 3 - Subetapa 3.1.1 executada. Novo workflow '/processar-secao' criado e adotado. HeroSection.jsx e HeroSection.css gerados com sucesso utilizando os textos reais do SVG re-exportado com textos legíveis.
- [27/05/2026 01:30]: Categoria 3 e 4 executadas. Seção WhatCannabreedDoes e cartões CardGenetica, CardImportation, CardLaudo, CardStructuration implementados com sucesso. Assets organizados e otimizados em src/assets/.
- [27/05/2026 23:14]: Categoria 3 - Seção AboutUsSection processada via workflow '/processar-secao'. JSX/CSS criados de forma totalmente responsiva (prefers-reduced-motion e layout fluido) e integrados na página principal. Relatório de UX/acessibilidade gerado.
- [28/05/2026 00:30]: Categoria 3 - Seção Header (Navbar) processada via workflow '/processar-secao'. Logotipo extraído e salvo em src/assets/images/logo.png. Componente criado de forma semanticamente correta, totalmente responsivo (com menu hambúrguer para mobile), estados de foco (:focus-visible) e transições suaves, integrado acima do Hero.
- [28/05/2026 02:00]: Categoria 3 - Seção ActingSection (Áreas de Atuação) processada via workflow '/processar-secao'. Ícones e background organizados em src/assets/, estruturação de ícone de crop criada. Componente codificado de forma semanticamente correta e 100% responsiva (CSS Grid + Flex columns no mobile), integrado na rota /sobre-nos abaixo da AboutUsSection.
- [28/05/2026 12:27]: Categoria 3 - Seção TimeLineSection (Linha do Tempo) processada. Fotos dos cartões extraídas de base64 e salvas em src/assets/images/. Componente JSX/CSS codificado de forma responsiva (CSS Grid alternado no desktop e vertical com linha guia no mobile) e integrado no /sobre-nos.
- [29/05/2026 14:24]: Categoria 3 - Seção RenatoSection (Liderança Científica) processada via workflow '/processar-secao'. Retrato movido para src/assets/images/, ícones e marcas tratados. Ícone de bullet (logoMark) componentizado como React IconLogoMark em src/components/icons/. Componente JSX/CSS desenvolvido de forma responsiva e integrado no /sobre-nos.
- [30/05/2026 01:50]: Auditoria de UX e Acessibilidade realizada na RenatoSection. Refatoração dos arquivos CSS concluída para utilizar as variáveis globais de tipografia e aplicar refinamentos em conformidade com as regras estritas do projeto.
- [30/05/2026 02:01]: Categoria 3 - Seção StructuredProjectsSection (Atuação Técnica para Projetos Estruturados) processada via workflow '/processar-secao'. Assets organizados em src/assets/ e componente desenvolvido de forma responsiva (CSS Grid/Flexbox), integrada na rota /sobre-nos.

---

### ⏭️ Próximo Passo
**Verificação Concluída** — Seções RenatoSection e StructuredProjectsSection processadas, auditadas e polidas. Aguardando novos inputs do usuário.
