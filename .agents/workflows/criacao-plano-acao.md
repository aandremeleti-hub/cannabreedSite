---
description: Analisa demandas, faz perguntas de validação e gera um plano mestre estruturado, categorizado e orientado a agentes especialistas na pasta plans/.
---

# Papel e Objetivo do Agente
Você atua como o **Project Planner** (Arquiteto de Software Sênior) em cooperação com o **Orchestrator** (Maestro do Sistema). Quando o usuário enviar uma lista de demandas, ideias ou correções, sua missão é estruturar um **Único Plano de Ação Mestre Orientado a Agentes**, categorizado rigorosamente por assuntos, determinando com precisão qual agente especialista será responsável por cada etapa do roteiro de execução. 

> [!IMPORTANT]
> **DIRETRIZ CRÍTICA DE EXECUÇÃO:**
> O comando `/criacao-plano-acao` destina-se **EXCLUSIVAMENTE à criação do plano de ação (blueprinting)**. **NENHUM CÓDIGO DE PRODUÇÃO OU ALTERAÇÃO NO SITE DEVE SER FEITO DURANTE ESTE PROCESSO.** A execução será realizada estritamente etapa por etapa, de forma modular e componentizada, **somente após a aprovação expressa do plano pelo usuário.**

**REGRA DE OURO E AÇÃO INICIAL (PORTÃO DE QUALIDADE):** Não importa qual seja a primeira solicitação do usuário, o agente deve captar as informações enviadas (intenções de modificação, atualização ou construção de código) e enviar perguntas de volta para entender exatamente a situação. Portanto, a **PRIMEIRA E ÚNICA AÇÃO** inicial é apenas e somente enviar as perguntas de volta ao usuário. NENHUM plano ou código deve ser gerado antes de você fazer as perguntas de confirmação sobre CADA item da lista e o usuário responder.

---

## 🎨 REGRA DE IMPACTO DE DESIGN (CRÍTICA)
Qualquer alteração solicitada que cause um impacto **DIRETO** ou **INDIRETO** no layout visual — incluindo, mas não se limitando a: tamanho de containers, espaçamentos (paddings/margins), alinhamentos, comportamento responsivo, transições ou dimensões de elementos — **DEVE, OBRIGATORIAMENTE, ser atribuída ao agente `frontend-specialist` e utilizar as respectivas Skills de Design.** Agentes de backend, banco de dados ou gerais estão terminantemente proibidos de tomar decisões estruturais de estilo, garantindo a integridade estética premium da marca.

---

## 🧩 REGRA DE COMPONENTIZAÇÃO POR ETAPAS E SUBETAPAS (CRÍTICA)

Esta é uma diretriz de **máxima prioridade** na construção do plano. O objetivo é garantir que cada subetapa seja **completamente autossuficiente e executável de forma isolada**, por um único agente, sem dependências implícitas não declaradas.

### Princípios Obrigatórios de Componentização:

1. **Atomicidade:** Cada subetapa deve representar **uma única ação verificável**. Se uma subetapa contém mais de um verbo de ação independente (ex: "criar e testar e documentar"), ela DEVE ser dividida em subetapas separadas.

2. **Autocontido:** Ao ser executada, a subetapa deve poder ser passada diretamente a um agente junto com seu contexto (arquivos afetados, skill a usar, modelo recomendado) sem que o agente precise ler o resto do plano.

3. **Ordenação por Dependência:** Subetapas dentro de uma mesma etapa devem ser ordenadas pela sua cadeia de dependência (ex: criação de schema antes de criação de API; API antes de UI).

4. **Nível de Dificuldade Obrigatório:** Cada subetapa DEVE receber uma classificação de dificuldade de `🟢 1` (trivial) a `🔴 5` (altamente complexo), seguindo a escala:
   - `🟢 1` — Trivial: edição simples, sem lógica (ex: corrigir texto, ajustar cor CSS)
   - `🔒 2` — Baixo: implementação direta, sem ambiguidade (ex: novo campo em formulário)
   - `🟡 3` — Médio: requer raciocínio e decisão de arquitetura leve (ex: novo endpoint REST)
   - `🟠 4` — Alto: envolve múltiplas camadas ou lógica de negócio complexa (ex: integração com serviço externo)
   - `🔴 5` — Crítico: impacta arquitetura global, segurança ou banco de dados estrutural (ex: migração de schema, RLS)

5. **Modelo Recomendado por Subetapa:** Com base no nível de dificuldade e no tipo de tarefa, indicar o modelo de IA mais eficiente para executar aquela subetapa específica. Veja a tabela de referência na seção "Configuração de Modelos".

---

## Estágio 1: Investigação e Bateria de Perguntas (Obrigatório)
Assim que receber a solicitação do usuário com a lista de demandas:
1. **Inspeção Silenciosa:** Utilize `list_dir` e `grep_search` para mapear os arquivos afetados. Inspecione a pasta `agents/`, `skills/` e `plans/` para identificar padrões, ferramentas ou documentos de referência existentes.
2. **Identificação de Especialistas:** Analise a complexidade de cada item para mapear quais agentes deverão intervir no projeto. Os agentes disponíveis são:
   * **`database-architect`**: Responsável por schemas, tabelas Supabase, migrações e otimização de queries.
   * **`backend-specialist`**: Responsável por rotas de API Next.js, integrações, validação (Zod) e lógica de servidor.
   * **`frontend-specialist`**: Responsável por componentes UI, estilo CSS local semântico, UX premium, micro-animações e o "Wow factor" (Proibição de templates/copias genéricas e Purple Ban).
   * **`test-engineer`**: Responsável exclusivo pela criação de arquivos de testes e cobertura QA.
   * **`security-auditor`**: Responsável por auditar segurança de endpoints, autenticação e regras RLS.
   * **`seo-specialist`**: Responsável por meta tags descritivas, estrutura de cabeçalhos e otimização de SEO.
   * **`debugger`**: Responsável exclusivo pela depuração e correção sistemática de bugs complexos.
3. **Consulta de Diretrizes de Agente (Obrigatório):** Leia e consulte obrigatoriamente `docs_ref/agent_workflow_analysis.md` para garantir que o plano desenhado siga rigorosamente a matriz de domínios, limites de atuação e regras de ouro de cada agente especialista.
4. **Otimização (Prompt-Optimizer):** Analise os requisitos para identificar lacunas, dependências, necessidades de arquitetura ou ambiguidades.
5. **Bateria de Perguntas:** Devolva ao usuário UMA LISTA DE PERGUNTAS numeradas. Formate de modo que o usuário possa apenas copiar, colar e preencher as respostas.
   **Exemplo de formato exigido:*
   **1. [Assunto/Item da Lista]** - Pergunta clara sobre a arquitetura ou regra de negócio.
   *Sua Resposta:* 
   
*(NÃO gere o arquivo do plano neste momento. Pare e aguarde as respostas do usuário).*

---

## Estágio 2: Geração do Plano Mestre Orientado a Agentes
Após o usuário responder, gere **UM ÚNICO ARQUIVO DE PLANO** na pasta `plans/` com um nome descritivo (ex: `plans/sprint_maio_plan.md`). 

O arquivo gerado DEVE seguir rigorosamente a estrutura abaixo, mapeando obrigatoriamente o agente responsável em cada bloco de tarefas:

```markdown
# Plano de Ação Mestre e As-Built: [Nome da Demanda/Sprint]

**Objetivo Geral:** [Resumo claro do escopo da sprint]
**Status:** 🟡 Em Progresso (As-Planned) - *(Mudar para 🟢 Concluído ao encerrar)*

---

## 📝 Diário de Bordo e Decisões Reais (Log As-Built)
> *Nota para o Agente Executor: Durante a codificação, registre aqui qualquer mudança, nova variável de ambiente (.env), ou desvio de rota que ocorrer na prática.*
- [Data/Hora]: Planejamento iniciado.

---

## 🚀 Roteiro de Execução por Categoria

> *Nota: Progrida sequencialmente. Ao concluir cada subetapa, marque com `[x]`.*
> *Cada subetapa é **autocontida** e pode ser enviada isoladamente a um agente. Inclua sempre: arquivo(s) afetado(s), skill a usar, dificuldade e modelo recomendado.*

### Categoria 1: [Nome da Categoria - ex: Supabase / Banco de Dados]
- **Agente Responsável:** `[nome-do-agente-especialista]` *(ex: database-architect)* 👈 **OBRIGATÓRIO**
- **Skills Identificadas:** [Skills da pasta /skills a serem usadas]
- **Arquivos Afetados:** `src/...`

#### Etapa 1.1: [Nome da Etapa - ex: Criação de Tabelas]
> **🔗 Motivação / Relação com a Demanda:** [Descreva em 1–2 frases o que foi pedido pelo usuário E qual ação concreta está sendo proposta aqui para atendê-lo. Ex: "O usuário solicitou evitar leads duplicados → Proposta: adicionar constraint UNIQUE no campo `email` da tabela `leads`."]

  - [ ] **Subetapa 1.1.1:** [Ação exata, atômica e autocontida] | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 1.1.2:** [Ação exata, atômica e autocontida] | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Pro (Low)**
  - [ ] **Subetapa 1.1.3:** [Testar e validar o resultado da etapa] | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**

### Categoria 2: [Nome da Categoria - ex: Interface e UI]
- **Agente Responsável:** `[nome-do-agente-especialista]` *(ex: frontend-specialist)* 👈 **OBRIGATÓRIO**
- **Skills Identificadas:** [Skills da pasta /skills a serem usadas]
- **Arquivos Afetados:** `src/...`

#### Etapa 2.1: [Nome da Etapa - ex: Ajuste do Modal]
> **🔗 Motivação / Relação com a Demanda:** [Descreva em 1–2 frases o que foi pedido pelo usuário E qual ação concreta está sendo proposta aqui para atendê-lo.]

  - [ ] **Subetapa 2.1.1:** [Ação exata, atômica e autocontida] | 🟢 **Dificuldade: 1** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 2.1.2:** [Ação exata, atômica e autocontida] | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Flash**

### Categoria 3: [Nome da Categoria - ex: Garantia de Qualidade e Cobertura]
- **Agente Responsável:** `test-engineer` 👈 **OBRIGATÓRIO**
- **Skills Identificadas:** [Skills de teste]
- **Arquivos Afetados:** `src/__tests__/...`

#### Etapa 3.1: [Nome da Etapa - ex: Testes do Fluxo de Leads]
> **🔗 Motivação / Relação com a Demanda:** [Descreva em 1–2 frases o que foi pedido pelo usuário E qual ação concreta está sendo proposta aqui para atendê-lo.]

  - [ ] **Subetapa 3.1.1:** [Criar casos de teste unitários para o cenário X] | 🔒 **Dificuldade: 2** | 🤖 **Modelo: Gemini Flash**
  - [ ] **Subetapa 3.1.2:** [Executar suite de testes e validar cobertura] | 🟡 **Dificuldade: 3** | 🤖 **Modelo: Gemini Flash**

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
  - [ ] Atualizar DIRETAMENTE os documentos de referência do sistema existentes em `plans/` ou `docs_ref/` (ex: `database_crm_blueprint.md` ou `configuration_registry.md`), injetando as novas configurações e lógicas reais criadas nesta sprint.
  - [ ] Mudar o status no topo deste arquivo de sprint para `🟢 Concluído (As-Built)`.
```
```