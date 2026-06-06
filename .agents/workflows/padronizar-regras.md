---
description: Padroniza os arquivos de regras (docs/rules) para o formato ditatorial (🔴 PROIBIDO / 🟢 OBRIGATÓRIO), processando item a item para garantir zero perda de informação técnica.
---

# Workflow: Padronizar Regras do Projeto
**Descrição:** Executa a conversão estrutural de todos os documentos de referência na pasta `docs/rules/` para o formato objetivo e ditatorial exigido pela arquitetura do Cannabreed. O foco absoluto deste workflow é **precisão e fidelidade técnica**, convertendo as regras de forma compassada (item por item).

## Gatilho
Sempre que o usuário digitar `/padronizar-regras`, o Agente atuará como um Editor Técnico rigoroso e iniciará a execução deste script passo a passo.

## Regras de Formatação (O Padrão Ouro)
**Integração de Skills:** O Agente DEVE OBRIGATORIAMENTE utilizar a skill `skills/prompt-optimizer` para comprimir as redações longas sem perder informação técnica, garantindo a eficácia do contexto da IA. A skill `skills/blueprint` também deve guiar o rigor arquitetural.

O Agente deve converter redações explicativas, bullet points soltos e formatos antigos (ex: `✅ FAÇA ISSO`, `❌ NUNCA FAÇA ISSO`) estritamente para o seguinte modelo:

- 🔴 **PROIBIDO:** [Ação que não deve ser feita, focada no anti-pattern. Curto e direto.]
- 🟢 **OBRIGATÓRIO:** [A solução técnica ou padrão de arquitetura exigido. Curto e direto.]

> **Veredito Arquitetural sobre Códigos de Exemplo:** O Agente deve agir com extrema restrição. 
> - **Remover:** Todo e qualquer exemplo de código genérico (React puro, HTML básico, CSS flex/grid, uso de `.map()`). Nós dominamos essas linguagens. Eles apenas gastam tokens.
> - **Preservar (Exceção):** Apenas snippets minúsculos (1 a 3 linhas) que demonstrem sintaxes altamente específicas de bibliotecas (ex: configuração nativa do `next/font` ou importação global específica). Mesmo esses devem ser o mais compactos possível.

## Passo a Passo da Execução (Compassada)
Este workflow **NÃO** deve formatar arquivos inteiros de uma só vez sem confirmação. Ele deve seguir uma cadência estrita para permitir a validação humana.

### Passo 1: Seleção do Arquivo
- Liste ao usuário os arquivos presentes em `docs/rules/`.
- Peça para o usuário selecionar qual arquivo será trabalhado primeiro (ex: `01-core-architecture.md` ou `07-padrao-cards.md`).

### Passo 2: Leitura e Análise do Item
- Leia o arquivo selecionado.
- Separe mentalmente o arquivo pelas suas seções (ex: "1. Estrutura do Componente", "2. Passagem de Dados (Props)", etc).
- Apresente ao usuário **apenas a primeira seção/item** que precisa de reescrita. Mostre como ela é e como ficará no novo formato.

### Passo 3: Aprovação e Aplicação
- Peça autorização: "Posso aplicar esta alteração no Item X e seguir para o Item Y?".
- Somente após o "Sim" do usuário, use a ferramenta de substituição (`multi_replace_file_content` ou `replace_file_content`) para injetar a mudança cirúrgica naquele item.

### Passo 4: Loop de Continuidade
- Avance para o próximo item do mesmo arquivo e repita o Passo 2 e 3.
- Quando o arquivo atual estiver 100% no padrão ditatorial, avise o usuário e volte ao Passo 1 para selecionar o próximo documento.