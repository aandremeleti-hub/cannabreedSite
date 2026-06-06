# Plano de Ação Mestre e As-Built: Refatoração de Arquitetura UI (DOM e Grafismos)

**Objetivo Geral:** Eliminar anti-patterns de React e otimizar grafismos de fundo para CSS puro, mantendo a integridade visual premium do projeto. (Nota: A componentização dos cards será realizada separadamente via workflow `/refatorar-cards` pelo usuário).
**Status:** 🟢 Concluído (As-Built)

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)
> *Nota para o Agente Executor: Durante a codificação, registre aqui qualquer mudança, nova variável de ambiente (.env), ou desvio de rota que ocorrer na prática.*
- [Data/Hora]: Planejamento revisado. A componentização dos cards foi removida para ser feita via workflow independente.

---

## 🚀 Roteiro de Execução por Categoria

> *Nota: Progrida sequencialmente. Ao concluir cada subetapa, marque com `[x]`.*
> *Cada subetapa é **autocontida** e pode ser enviada isoladamente a um agente. Inclua sempre: arquivo(s) afetado(s), skill a usar, dificuldade e modelo recomendado.*

### Categoria 1: Remoção de Anti-Pattern de DOM e CSS de Altura
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** Refatoração React, CSS Moderno (Flexbox/Grid)
- **Arquivos Afetados:** `src/components/layout/ExpertReportsSection/ExpertReportsSection.jsx`, `src/components/layout/ExpertReportsSection/ExpertReportsSection.css`, `src/components/layout/RegulatoryCompliance/RegulatoryCompliance.css`

#### Etapa 1.1: Refatorar Sincronização de Altura (Expert Reports e Regulatory Compliance)
> **🔗 Motivação / Relação com a Demanda:** O usuário relatou uso incorreto de `document.querySelector` no React para parear a altura de duas seções. Proposta: Remover o JS e utilizar CSS.

  - [x] **Subetapa 1.1.1:** Remover o `useEffect`, `ResizeObserver` e os event listeners de `window.addEventListener('resize')` do arquivo `ExpertReportsSection.jsx`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 1.1.2:** Ajustar `ExpertReportsSection.css` e `RegulatoryCompliance.css` implementando `display: flex` (ou `grid`) com `align-items: stretch` no container pai comum ou garantindo as alturas responsivas corretas via CSS puro, validando visualmente se o layout se manteve intacto. | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**

### Categoria 2: Otimização de Grafismos de Fundo (Performance)
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** Otimização de Assets, CSS Moderno
- **Arquivos Afetados:** `src/components/layout/DnaSection/*`, `src/components/layout/ContractedManufacturing/*`

#### Etapa 2.1: Otimizar Background em DnaSection
> **🔗 Motivação / Relação com a Demanda:** Remover a div `<div className="dna-section-bg-pattern-container">` que está poluindo o DOM.

  - [x] **Subetapa 2.1.1:** Remover o nó HTML do container de background do arquivo `DnaSection.jsx`. Exportar o arquivo SVG do pattern (se não estiver em pasta genérica) e aplicá-lo em `DnaSection.css` via `background-image` e `background-size: cover` na classe `.dna-section` ou num pseudo-elemento `::before`. | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**

#### Etapa 2.2: Otimizar Background em ContractedManufacturing
> **🔗 Motivação / Relação com a Demanda:** Remover o `<IconEscopoBg />` diretamente injetado no DOM e migrar para background CSS.

  - [x] **Subetapa 2.2.1:** Remover a renderização em linha de `<IconEscopoBg />` do arquivo JSX. Mover as diretivas visuais desse SVG para o arquivo `.css` da respectiva div onde ele residia, ou aplicá-lo como um pseudo-elemento garantindo o posicionamento original. | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**

---

### Tarefa Final: Atualização Direta dos Documentos de Consulta (OBRIGATÓRIO)
- **Ações de Fechamento:**
  - [x] Mudar o status no topo deste arquivo de sprint para `🟢 Concluído (As-Built)`.
