---
description: Workflow para extração e geração de código JSX+CSS diretamente via MCP do Figma, com correção estrutural inteligente baseada no Guia Manual.
---

# Comando: /gerar-codigo-mcp

> [!IMPORTANT]
> **DIRETRIZ DE DESENVOLVIMENTO DE FRONTEND & INTEGRAÇÃO MCP:**
> Durante este workflow, você atuará de forma coordenada com os agentes **explorer-agent**, **frontend-specialist** e **test-engineer**.
> 
> Diferente de processos manuais, aqui leremos diretamente do Figma usando o **figma-dev-mode-mcp-server**. Sabemos que a construção no Figma pode estar imperfeita (falta de Auto Layout, agrupamentos errados, textos não componentizados). Seu dever é **interpretar a intenção visual** e gerar um código React/CSS impecável, seguindo o `guia_manual_figma_5abr.md` e as best practices do projeto (ex: nada de Tailwind, inline styles, etc).

---

## Objetivo

Gerar o código JSX + CSS de uma seção ou tela usando diretamente as ferramentas do MCP (`get_design_context`, `get_variable_defs`, `get_screenshot`), superando erros de estrutura do arquivo Figma original e entregando um código limpo, semântico, acessível e responsivo, conforme os tokens de `globals.css`.

---

## 🗺️ Como usar este Workflow e o Prompt (Passo a Passo)

O seu prompt mestre (que ativa agentes e skills) é o coração da etapa de execução. Veja em que momento usar cada ferramenta e diretriz:

### Etapa 1 — Conexão, Coleta e Planejamento (Ação do Usuário: Prompt Inicial)
**O que você (usuário) deve fazer:** 
Envie apenas: *"Vamos gerar a seção [Nome] usando o link/Node do Figma XYZ. Execute o /gerar-codigo-mcp."*

**O que o agente fará:**
1. Conecta no `figma-dev-mode-mcp-server` (`get_design_context`, `get_variable_defs`, `get_screenshot`).
2. Cruza as informações cruas do Figma com o `guia_manual_figma_5abr.md` para entender a intenção real do design (ignorando `position: absolute` desnecessários, avaliando auto-layouts mal feitos e mapeando cores para variáveis do `globals.css`).
3. **Pausa e Planejamento:** O agente NÃO vai gerar o código ainda. Ele criará um **Implementation Plan** (plano de ação) detalhando a estrutura DOM (HTML) que pretende criar, as variáveis CSS que encontrou e quais ícones serão isolados, pedindo sua aprovação.

### Etapa 2 — Análise do Plano (Pausa)
Neste momento, você (usuário) revisa o plano gerado pelo agente. Se a estrutura semântica proposta fizer sentido e estiver livre dos "vícios" do arquivo Figma, você aprova.

### Etapa 3 — Geração do Código & Relatório (Ação do Usuário: O Prompt Mestre)
**O que você (usuário) deve fazer:**
Aprove o plano e envie o seu **Prompt Mestre** (Ativando `explorer-agent`, `frontend-specialist`, `test-engineer` e as skills locais).

**O que o agente fará (Guiado pelo seu prompt):**
1. **`explorer-agent`:** Valida a integridade da pasta de destino e assets.
2. **`frontend-specialist`:**
   - Gera o `[NomeSecao].jsx` e `[NomeSecao].css` com fidelidade e clean code.
   - Componentiza ícones dinâmicos (`src/components/icons/`).
   - Usa `mobile-design` + `react-components` para aplicar responsividade profunda.
3. **`test-engineer`:**
   - Gera o relatório de UX usando `frontend-design/ux-psychology`.
   - Aplica regras de `web-design-guidelines` (Focus-visible, Aria).
   - Garante tags para `seo-fundamentals`.

### Etapa 4 — Revisão Final e Entrega
**O que fazer:** Revisar tudo antes de entregar ao usuário.
1. O código tem Tailwind ou inline styles? Se sim, **reflatore e mova para o `.css` local**.
2. Os textos estão usando os tokens como `var(--font-headline-h2-size)`? 
3. Entregue o código JSX, o CSS e o Relatório de Usabilidade/Acessibilidade.

---

## 🛠 Resumo: Quando usar o quê?

1. **MCP (Figma):** No começo de tudo, para ler os dados crus.
2. **Guia Manual (`guia_manual_figma_5abr.md`):** Durante a leitura dos dados do MCP, para saber ignorar as marcações ruins do Figma (ex: backgrounds mal feitos, falta de auto-layout) e estruturar mentalmente o DOM correto.
3. **O seu Prompt (Skills + Agentes):** Na hora de gerar os arquivos finais. Ele garante que o código saia limpo, semântico, acessível (Focus-visible, Aria), com ícones reutilizáveis e responsivo, e que o relatório de UX seja gerado.
