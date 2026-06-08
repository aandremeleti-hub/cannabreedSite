# Plano de Ação Mestre e As-Built: Inclusão Estratégica de CTAs

**Objetivo Geral:** Realizar uma varredura completa nas páginas do site (Home, Sobre Nós, Serviços, P&D) para incluir botões de chamada para ação (CTAs) em seções estratégicas e rodapés de modais, otimizando a conversão de leads para a página de contato com preenchimento inteligente de assuntos.
**Status:** 🟡 Em Progresso (As-Planned)

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)
> *Nota para o Agente Executor: Durante a codificação, registre aqui qualquer mudança, nova variável de ambiente (.env), ou desvio de rota que ocorrer na prática.*
- 2026-06-08 12:45: Planejamento iniciado. Alinhado com o usuário que:
  1. O CTA do modal do Renato Tonini será **"Agendar Reunião Técnica"**.
  2. Implementaremos a lógica de Query String (`/contato?assunto=...`) para preencher automaticamente o campo "Assunto" no formulário de contato.
  3. Utilizaremos tanto botões verdes neon sólidos (`var(--color-primary-green)`) para CTAs primários de conversão, quanto botões outlined com borda verde para CTAs secundários/de navegação.
  4. Os cards da página `/servicos` (como a seção de P&D) não contêm botões e permanecerão intocados, sem nenhuma alteração.

---

## 🚀 Roteiro de Execução por Categoria

### Categoria 1: Conversão da Hero e Componente WhatCannabreedDoes (Home)
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `react-components`, `web-design-guidelines`, `clean-code`
- **Arquivos Afetados:**
  - `src/components/layout/Hero/Hero.jsx`
  - `src/components/layout/Hero/Hero.css`
  - `src/components/layout/WhatCannabreedDoes/WhatCannabreedDoes.jsx`
  - `src/components/layout/WhatCannabreedDoes/WhatCannabreedDoes.css`

#### Etapa 1.1: Modificar CTA da Hero
> **🔗 Motivação / Relação com a Demanda:** O usuário quer redirecionar o fluxo de leads da Hero diretamente para a página de contato ao invés de usar uma âncora inexistente.
  - [ ] **Subetapa 1.1.1:** Modificar o arquivo `Hero.jsx` importando `Link` de `next/link` e alterando o botão estático `Saiba mais` para um link real para `/contato` com o texto `"Falar com Especialista"` (sólido verde neon). | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 1.1.2:** Validar regras de hover e transições no `Hero.css` aplicando as classes de design tokens. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

#### Etapa 1.2: Botão Geral de Serviços na Home
> **🔗 Motivação / Relação com a Demanda:** Inserir um botão de navegação secundário para direcionar o usuário à página completa de serviços.
  - [ ] **Subetapa 1.2.1:** Modificar o arquivo `WhatCannabreedDoes.jsx` adicionando o container do CTA abaixo o container de cards com o link direcionando para `/servicos` com o texto `"Conhecer Nossos Serviços"` (outlined com borda). | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 1.2.2:** Adicionar as regras de estilos para `.what-cannabreed-does-cta-wrapper` e `.what-cannabreed-does-cta-btn` no `WhatCannabreedDoes.css`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 2: Integração de Conversão nos Modais
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design/ux-psychology`, `react-components`, `web-design-guidelines`, `clean-code`
- **Arquivos Afetados:**
  - `src/components/layout/WhatCannabreedDoesModalContent/WhatCannabreedDoesModalContent.jsx`
  - `src/components/layout/WhatCannabreedDoesModalContent/WhatCannabreedDoesModalContent.css`
  - `src/components/layout/RenatoTechnicalActingModalContent/RenatoTechnicalActingModalContent.jsx`
  - `src/components/layout/RenatoTechnicalActingModalContent/RenatoTechnicalActingModalContent.css`
  - `src/components/layout/BaseCientificaModalContent/BaseCientificaModalContent.jsx`
  - `src/components/layout/BaseCientificaModalContent/BaseCientificaModalContent.css`

#### Etapa 2.1: Modificar Modal do Componente "O Que a Cannabreed Faz"
> **🔗 Motivação / Relação com a Demanda:** Oferecer um ponto de conversão rápida e personalizada logo após a leitura do serviço.
  - [ ] **Subetapa 2.1.1:** Adicionar o botão de CTA no rodapé de `WhatCannabreedDoesModalContent.jsx` contendo o link `/contato?assunto=Interesse em [Nome do Serviço]` para fins de rastreabilidade. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 2.1.2:** Ajustar o `WhatCannabreedDoesModalContent.css` para estilizar o botão com o padrão verde neon e manter o overflow do modal funcional. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

#### Etapa 2.2: Modificar Modal de Atuação Técnica do Renato Tonini
> **🔗 Motivação / Relação com a Demanda:** Inserir o botão de CTA específico e aprovado de Liderança Científica.
  - [ ] **Subetapa 2.2.1:** Modificar o arquivo `RenatoTechnicalActingModalContent.jsx` para adicionar o botão de contato apontando para `/contato?assunto=Reunião Técnica com Renato Tonini` com o texto `"Agendar Reunião Técnica"`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 2.2.2:** Estilizar o botão no `RenatoTechnicalActingModalContent.css`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

#### Etapa 2.3: Modificar Modal de Base Científica
> **🔗 Motivação / Relação com a Demanda:** Permitir que pesquisadores e parceiros iniciem contato técnico diretamente do modal de ciência.
  - [ ] **Subetapa 2.3.1:** Modificar o arquivo `BaseCientificaModalContent.jsx` inserindo o botão CTA para `/contato?assunto=Contato Técnico / Base Científica` com o texto `"Falar com Pesquisador"`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 2.3.2:** Estilizar o CTA em `BaseCientificaModalContent.css`. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 3: Inclusão de CTAs nas Seções do Site
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `frontend-design`, `web-design-guidelines`, `clean-code`
- **Arquivos Afetados:**
  - `src/components/layout/AuthoritySection/AuthoritySection.jsx`
  - `src/components/layout/AuthoritySection/AuthoritySection.css`
  - `src/components/layout/StructuredProjectsSection/StructuredProjectsSection.jsx`
  - `src/components/layout/StructuredProjectsSection/StructuredProjectsSection.css`
  - `src/components/layout/RegulatoryCompliance/RegulatoryCompliance.jsx`
  - `src/components/layout/RegulatoryCompliance/RegulatoryCompliance.css`
  - `src/components/layout/ProductiveOperation/ProductiveOperation.jsx`
  - `src/components/layout/ProductiveOperation/ProductiveOperation.css`
  - `src/components/layout/ResearchAndDevelopment/ResearchAndDevelopment.jsx`
  - `src/components/layout/ResearchAndDevelopment/ResearchAndDevelopment.css`
  - `src/components/layout/ContractedManufacturing/ContractedManufacturing.jsx`
  - `src/components/layout/ContractedManufacturing/ContractedManufacturing.css`
  - `src/components/layout/DiferencialTecnico/DiferencialTecnico.jsx`
  - `src/components/layout/DiferencialTecnico/DiferencialTecnico.css`

#### Etapa 3.1: CTA da Seção "Autoridade em Destaque" (Home)
> **🔗 Motivação / Relação com a Demanda:** Adicionar conversão abaixo do bloco textual da seção.
  - [ ] **Subetapa 3.1.1:** Inserir o container de CTA no final do bloco de texto de `AuthoritySection.jsx` apontando para `/contato?assunto=Reunião Técnica` com o texto `"Agendar Reunião Técnica"`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 3.1.2:** Ajustar o `AuthoritySection.css` para alinhar o botão ao grid textual. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

#### Etapa 3.2: CTA da Seção de Projetos Estruturados (Sobre Nós)
> **🔗 Motivação / Relação com a Demanda:** Converter leads corporativos que buscam projetos de base tecnológica e científica.
  - [ ] **Subetapa 3.2.1:** Modificar o rodapé de `StructuredProjectsSection.jsx` para inserir um bloco final de CTA apontando para `/contato?assunto=Projetos Estruturados` com o texto `"Iniciar Projeto Estruturado"`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 3.2.2:** Ajustar o `StructuredProjectsSection.css` para manter o layout e flexibilidade responsiva. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

#### Etapa 3.3: CTAs das Seções de Serviços
> **🔗 Motivação / Relação com a Demanda:** Inserir botões de conversão específicos para cada uma das grandes áreas de serviço da Cannabreed.
  - [x] **Subetapa 3.3.1:** Em `RegulatoryCompliance.jsx`, adicionar o botão de CTA `"Adequar Minha Operação"` apontando para `/contato?assunto=Regulatório e Conformidade`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 3.3.2:** Em `ProductiveOperation.jsx`, adicionar o botão de CTA `"Implementar Padronização de Cultivo"` apontando para `/contato?assunto=Operação Produtiva`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 3.3.3:** Em `ResearchAndDevelopment.jsx` (sem tocar nos cards explicativos de P&D), adicionar no rodapé da seção um botão de CTA `"Iniciar Projeto de P&D"` apontando para `/contato?assunto=Pesquisa e Desenvolvimento`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 3.3.4:** Em `ContractedManufacturing.jsx`, adicionar o botão de CTA `"Consultar Capacidade de Manufatura"` apontando para `/contato?assunto=Manufatura Contratada`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [x] **Subetapa 3.3.5:** Ajustar os arquivos CSS das seções correspondentes (`RegulatoryCompliance.css`, `ProductiveOperation.css`, `ResearchAndDevelopment.css`, `ContractedManufacturing.css`) para estilizar os novos CTAs verdes de destaque de acordo com o design system do projeto. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

#### Etapa 3.4: CTA da Seção de Diferencial Técnico (P&D)
> **🔗 Motivação / Relação com a Demanda:** Converter leads focados em viabilidade técnica no setor de Cannabis.
  - [ ] **Subetapa 3.4.1:** Adicionar um banner/bloco de CTA no rodapé da seção `DiferencialTecnico.jsx` apontando para `/contato?assunto=Diferencial Técnico e Viabilidade` com o texto `"Agendar Consultoria de Viabilidade"`. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 3.4.2:** Estilizar em `DiferencialTecnico.css` usando bordas e backgrounds alinhados com o layout existente. | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 4: Preenchimento Automático do Formulário de Contato (Query Strings)
- **Agente Responsável:** `frontend-specialist`
- **Skills Identificadas:** `nextjs-react-expert`, `clean-code`
- **Arquivos Afetados:**
  - `src/components/layout/ContactSection/ContactSection.jsx`

#### Etapa 4.1: Capturar parâmetros de URL no Formulário de Contato
> **🔗 Motivação / Relação com a Demanda:** Ler o parâmetro `assunto` vindo da URL dos botões de CTA e preencher automaticamente o input do formulário.
  - [ ] **Subetapa 4.1.1:** Modificar `ContactSection.jsx` para utilizar o hook `useSearchParams` do Next.js (no escopo cliente) e definir o estado padrão do campo de assunto com o valor capturado da query string `assunto`. | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**
  - [ ] **Subetapa 4.1.2:** Validar a compatibilidade do componente e garantir que o formulário continue funcionando normalmente caso nenhum parâmetro seja enviado na URL. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

---

### Categoria 5: Garantia de Qualidade e Homologação
- **Agente Responsável:** `test-engineer`
- **Skills Identificadas:** `lint-and-validate`, `clean-code`

#### Etapa 5.1: Auditoria Acessibilidade e Estilo
> **🔗 Motivação / Relação com a Demanda:** Garantir acessibilidade (:focus-visible, teclabilidade) e ausência de estilos inline ou Tailwind.
  - [ ] **Subetapa 5.1.1:** Realizar o build de produção (`npm run build`) para verificar a integridade da aplicação. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 5.1.2:** Auditar todos os CTAs adicionados garantindo conformidade estrita com o indexador mestre `global_cannabreed.md` e regras locais. | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

---

## 🧠 Configuração de Modelos Recomendada para esta Sprint

| Dificuldade | Tipo de Tarefa Típica | Modelo Recomendado |
|---|---|---|
| 🟢 **1 — Trivial** | Modificações simples de texto, ajustes de estilo locais | `Gemini Flash` |
| 🔒 **2 — Baixo** | Criação de botões de CTA, links Next.js, inclusão de classes CSS | `Gemini Flash` |
| 🟡 **3 — Médio** | Lógica de query parameters React, controle de estados de formulário | `Gemini Pro (Low)` |
| 🟠 **4 — Alto** | Lógicas multi-componentes complexas | `Gemini Pro (High)` |
| 🔴 **5 — Crítico** | Refatorações arquiteturais estruturais | `Gemini Pro (High)` |
