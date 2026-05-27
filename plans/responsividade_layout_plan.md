# Plano de Ação Mestre e As-Built: Responsividade Premium do Layout

**Objetivo Geral:** Aplicar responsividade de ponta com tipografia fluida calibrada e adaptações de layout em todos os quatro componentes de layout (`Hero`, `MarketProblem`, `WhatCannabreedDoes`, `AuthoritySection`) sob a pasta `src/components/layout/`.
**Status:** 🟡 Em Progresso (As-Planned)

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)
> *Nota para o Agente Executor: Durante a codificação, registre aqui qualquer mudança ou desvio de rota que ocorrer na prática.*
- [27/05/2026 12:25]: Planejamento de responsividade iniciado e checkpoint socrático concluído com o usuário.

---

## 🚀 Roteiro de Execução por Categoria

> *Nota: Progrida sequencialmente. Ao concluir cada subetapa, marque com `[x]`.*
> *Cada subetapa é **autocontida** e pode ser enviada isoladamente a um agente. Inclua sempre: arquivo(s) afetado(s), skill a usar, dificuldade e modelo recomendado.*

### Categoria 1: Ajustes da Seção Hero
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `clean-code`
- **Arquivos Afetados:** `src/components/layout/Hero/Hero.css`

#### Etapa 1.1: Calibração Tipográfica e Centralização no Mobile
> **🔗 Motivação / Relação com a Demanda:** O usuário solicitou tipografia fluida com calibração fina e centralização do conteúdo no celular (opção B de P2).
  - [x] **Subetapa 1.1.1:** Substituir tamanhos de fonte fixos de `.hero-title` e `.hero-description` por fórmulas fluidas com `clamp()` (ex: `clamp(32px, 1.875vw + 26px, 50px)` e `clamp(16px, 0.833vw + 13.33px, 24px)`). | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 1.1.2:** Ajustar `@media (max-width: 480px)` para centralizar todo o conteúdo textual e alinhar o botão `.hero-cta` ao centro. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 2: Ajustes da Seção MarketProblem
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `clean-code`
- **Arquivos Afetados:** `src/components/layout/MarketProblem/MarketProblem.css`

#### Etapa 2.1: Tipografia Fluida e Ocultação da Planta
> **🔗 Motivação / Relação com a Demanda:** O usuário escolheu a ocultação completa da planta decorativa em dispositivos móveis/tablets (opção B de P1) para melhorar a legibilidade e o scroll.
  - [x] **Subetapa 2.1.1:** Aplicar a fórmula de tipografia fluida para `.market-problem-title` (`clamp(32px, 1.25vw + 28px, 44px)`). | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 2.1.2:** Na query `@media (max-width: 1024px)`, ocultar completamente a planta (`.market-problem-plant { display: none; }`). | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 2.1.3:** Ajustar margens e espaçamento do container de cartões adaptados na mesma query de `1024px` para compensar a ausência da planta. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 3: Ajustes da Seção WhatCannabreedDoes
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `clean-code`
- **Arquivos Afetados:** `src/components/layout/WhatCannabreedDoes/WhatCannabreedDoes.css`

#### Etapa 3.1: Tipografia Fluida e Verificação de Grid
> **🔗 Motivação / Relação com a Demanda:** Aplicar a regra global de tipografia fluida calibrada e garantir fluidez no grid de 4 colunas para manter a estética premium.
  - [x] **Subetapa 3.1.1:** Substituir tamanhos estáticos de `.what-cannabreed-does-title` e `.what-cannabreed-does-subtitle` por tipografia fluida via `clamp()`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 3.1.2:** Validar paddings laterais e gaps do grid adaptativo em tablets (`1472px`) e celulares (`640px`). | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 4: Ajustes da Seção AuthoritySection
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `clean-code`
- **Arquivos Afetados:** `src/components/layout/AuthoritySection/AuthoritySection.css`

#### Etapa 4.1: Tipografia Fluida e Escala Proporcional de Imagens
> **🔗 Motivação / Relação com a Demanda:** O usuário solicitou escala proporcional fluida para a colagem das 3 imagens absolutas e sobrepostas no mobile (opção A de P0).
  - [ ] **Subetapa 4.1.1:** Aplicar tipografia fluida para o título principal, títulos de cartões (`.authority-item-title`) e textos de descrições (`.authority-item-text`) usando as fórmulas de `clamp()` calibradas. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 4.1.2:** Ajustar o container `.authority-images-container` e as caixas de imagens absolutas (`.authority-image-box-1`, `.authority-image-box-2`, `.authority-image-box-3`) na query `@media (max-width: 640px)` para reduzir de forma perfeitamente fluida e proporcional (via largura em `%` ou `transform: scale()`), prevenindo qualquer overflow horizontal. | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**

---

### Categoria 5: Garantia de Qualidade e Build
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `clean-code`
- **Arquivos Afetados:** Nenhum (apenas comandos de teste)

#### Etapa 5.1: Testes de Build e UX Audit Manual
> **🔗 Motivação / Relação com a Demanda:** Garantir que o código compila corretamente e que a experiência responsiva flui livre de quebras em todas as viewports.
  - [ ] **Subetapa 5.1.1:** Executar build completo da aplicação (`npm run build`) para verificar a integridade da compilação e ausência de avisos/erros. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 5.1.2:** Realizar verificação manual de usabilidade no Device Mode do navegador de `320px` a `1440px`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

---

## 🧠 Configuração de Modelos Recomendada para esta Sprint

Para otimizar o consumo de tokens mantendo a qualidade máxima do código, alterne os modelos na barra de seleção do editor conforme as diretrizes abaixo:

- **Fase de Planejamento (Criação do Blueprint):** Ative `Claude Sonnet (Thinking)` ou `Gemini Pro (High)` para garantir assertividade analítica absoluta.

### Tabela de Referência: Dificuldade × Modelo Recomendado por Subetapa

| Dificuldade | Tipo de Tarefa Típica | Modelo Recomendado |
|---|---|---|
| 🟢 **1 — Trivial** | Correção de texto, ajuste de cor, renomeação | `Gemini Flash` / `Claude Haiku` |
| 🔒 **2 — Baixo** | Novo campo em form, estilo simples, rota CRUD básica | `Gemini Flash` |
| 🟡 **3 — Médio** | Novo endpoint com validação, componente de UI interativo | `Gemini Pro (Low)` / `Claude Sonnet` |
| 🟠 **4 — Alto** | Integração externa, lógica de negócio multi-camada | `Gemini Pro (High)` / `Claude Sonnet (Thinking)` |
| 🔴 **5 — Crítico** | Migração de schema, RLS, autenticação, refactor global | `Claude Sonnet (Thinking)` / `Gemini Pro (High)` |

---

### Tarefa Final: Atualização Direta dos Documentos de Consulta (OBRIGATÓRIO)
- **Ações de Fechamento:**
  - [ ] Mudar o status no topo deste arquivo de sprint para `🟢 Concluído (As-Built)`.
