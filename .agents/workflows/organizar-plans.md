---
description: Analisa profundamente um arquivo de plano/blueprint da pasta plans/, categoriza dinamicamente as diferentes frentes de trabalho implementadas e atualiza/sobrescreve de forma consolidada os arquivos de referência centralizados na pasta docs_config/.
---

# Papel e Objetivo do Agente
Você atua como o **Arquiteto de Documentação e Conhecimento Sênior**. Sua missão é analisar um plano de ação (ou blueprint) na pasta `plans/`, decompor suas implementações em categorias técnicas distintas (como Banco de Dados, APIs, Componentes UI, Segurança, etc.) e registrar essas informações de forma centralizada e organizada na pasta `docs_config/`. 

Cada arquivo na pasta `docs_config/` representa uma **frente de trabalho centralizada**. Quando novas alterações ocorrem, você deve ler o arquivo correspondente existente (se houver), unificar o conhecimento antigo com a nova implementação de forma a manter um documento "Living Reference" atualizado e robusto, e reescrever o arquivo consolidado na pasta.

> [!NOTE]
> **Filtro de Relevância Visual:**
> Pequenas atualizações de design ou ajustes visuais pontuais (como ajustes milimétricos de margens/paddings, pequenas alterações de cores locais, correções de alinhamento simples ou alteração de rótulos de botões) **NÃO** devem ser documentados na pasta `docs_config/`. A documentação de UI/UX deve focar exclusivamente em componentes estruturais complexos, fluxos de interação, integrações de estado e tokens de estilo globais/reutilizáveis.

---

## 🚀 Roteiro de Execução do Workflow

### Estágio 1: Análise e Classificação (Silenciosa)
1. **Leitura do Plano de Origem:** Leia o arquivo de plano ativo ou referenciado na pasta `plans/` (ex: `plans/sprint_duplicidade_leads_plan.md`).
2. **Decomposição Dinâmica:** Identifique todas as frentes de trabalho citadas no documento. Classifique-as dinamicamente em categorias claras. Exemplos de categorias comuns:
   - `database_crm` (Tabelas, RPCs, Migrações do Supabase)
   - `api_endpoints` (Rotas de API Next.js, Payloads, Integrações de e-mail/Resend)
   - `ui_components` (Componentes React, Modais, Layouts)
   - `styling_tokens` (Design tokens, CSS Modules, variáveis de design)
   - `testing_qa` (Suítes de teste Vitest, estratégias de validação)
   - `security_policies` (Políticas de RLS, autenticação de rotas)

---

### Estágio 2: Consolidação de Conhecimento (Leitura e Mesclagem)
Para cada categoria identificada:
1. **Verificação de Existência:** Verifique se o arquivo correspondente já existe em `docs_config/` (ex: `docs_config/database_crm.md`).
2. **Consulta ao Código Real (MANDATÓRIO):** O agente NÃO deve apenas copiar o texto teórico ou planejamentos descritos no plano de ação. Ele **deve abrir e ler o código-fonte atual dos arquivos afetados** (conforme mapeado no plano) para extrair e documentar a implementação exata, real e atualizada que está ativa no projeto.
3. **Fusão de Informações (Living Document):**
   - **Se o arquivo já existir:** Leia o conteúdo atual. Crie uma versão atualizada que preserve os dados antigos ainda válidos, atualize o que foi alterado e adicione as novas regras/códigos do plano analisado. O objetivo é manter um arquivo único, completo e sem perdas de especificações anteriores.
   - **Se o arquivo não existir:** Inicialize o arquivo novo utilizando a estrutura padrão detalhada no Estágio 3.
4. **Escrita:** Salve o arquivo consolidado de volta na pasta `docs_config/`.

---

### Estágio 3: Estrutura do Documento Centralizado em `docs_config/`
Todo arquivo gerado ou atualizado na pasta `docs_config/` deve seguir rigorosamente a estrutura abaixo:

```markdown
# 📂 Referência de Arquitetura: [Nome Semântico da Categoria]

**Última Atualização:** [Data Atual no formato YYYY-MM-DD]
**Origem do Conhecimento:** [Lista de sprints/planos de origem, ex: `sprint_duplicidade_leads_plan.md`]

---

## 🎯 1. Escopo e Regras de Negócio
- [Descreva claramente o propósito desta frente de trabalho]
- [Regras de negócio cruciais a serem lembradas em desenvolvimentos futuros]
- [Limitações técnicas conhecidas ou restrições impostas]

---

## ⚙️ 2. Especificação Técnica e Códigos-Chave
[Apresente aqui os códigos exatos, assinaturas de métodos, tabelas SQL, RPCs, ou classes de estilo de forma limpa e estruturada.]

### Exemplo de Estrutura Técnica:
- **Assinatura/Modelo:** [ex: Definição da RPC, Assinatura de Função React/API, ou Tabela de Variáveis CSS]
- **Código Exato:**
```[linguagem]
[Código Limpo e Documentado]
```

---

## 🔗 3. Arquivos Ativos e Referências no Projeto
Mapeie os arquivos reais que contêm a implementação deste escopo no projeto atual para facilitar a localização:
- [Arquivo de Origem](file:///absolute/path/to/file) - *Breve descrição de qual parte do código está implementada neste arquivo*

---

## 🧠 4. Lições Aprendidas, Erros Comuns & Gotchas (Essencial)
> [!IMPORTANT]
> **Gotchas e Erros Evitados:**
> - Documente aqui erros clássicos que foram descobertos e resolvidos (ex: "Erros de RLS ao tentar retornar IDs em inserts de anon no Supabase exigem o uso de RPC SECURITY DEFINER").
> - Dicas de performance, boas práticas recomendadas para futuros agentes que trabalharem nessa mesma frente de trabalho.
```

---

### Estágio 4: Finalização e Feedback
Apresente ao usuário uma lista clara dos arquivos gerados/atualizados na pasta `docs_config/` e um resumo executivo rápido de quais novos conhecimentos foram consolidados para consulta futura.
