---
description: Extrai aprendizados e anti-patterns de uma sessão de código e os consolida nos arquivos de referência mestre (docs/rules), blindando contra poluição de contexto.
---

# Workflow: Consolidar Aprendizados e Regras
**Descrição:** Extrai aprendizados, boas práticas e anti-patterns descobertos durante uma sessão de código e os injeta de forma enxuta nos arquivos de referência mestre do projeto.

## Gatilho
Sempre que o usuário digitar `/consolidar-aprendizados` (ou solicitar a atualização de regras com base no que foi feito), você deve atuar como um Arquiteto de Sistemas rigoroso e seguir os passos abaixo.

## Passo 1: Análise e Diagnóstico
- Revise as últimas refatorações ou criações de código realizadas na sessão.
- Identifique os "Lições Aprendidas" focando em 3 pilares:
  1. **Anti-pattern (O que não fazer):** Qual foi a gambiarra ou erro encontrado?
  2. **Padrão Oficial (O que fazer):** Qual foi a solução elegante e performática implementada?
  3. **Contexto:** Em qual camada isso se aplica (CSS, React, DOM, Assets)?

## Passo 2: Otimização Direcionada para IA (Uso Obrigatório: skills/prompt-optimizer)
- Regras prolixas confundem agentes. Leia o conceito da skill `skills/prompt-optimizer`.
- Redija a nova regra de forma **ditatorial, objetiva e ultracomprimida**.
- Exemplo Ruim: *"Quando for fazer o layout de duas colunas, é melhor não usar JavaScript para medir a altura porque..."*
- Exemplo Excelente: *"🔴 PROIBIDO: Usar `document.querySelector` ou eventos de redimensionamento (`ResizeObserver`) para pareamento visual de alturas em React. 🟢 OBRIGATÓRIO: Utilizar CSS nativo (Flex/Grid com `align-items: stretch`)."*

## Passo 3: Triagem pelo Indexador Mestre (Uso Obrigatório: skills/blueprint)
- Leia o arquivo mestre `global_cannabreed.md` para visualizar a arquitetura de regras atual.
- Determine o arquivo exato da pasta `docs/rules/` que deve receber a nova instrução (ex: `02-css-and-styling.md` ou `04-react-components.md`).
- **CRÍTICO:** O agente precisa determinar ativamente se é necessário criar um novo arquivo de referência dentro da pasta `docs/rules/` caso o assunto não se encaixe nos existentes. Se for necessário, o agente **vai criar o novo arquivo** (ex: `07-novo-assunto.md`) e linká-lo no `global_cannabreed.md`.
- Utilize os preceitos da skill `skills/blueprint` para garantir que a regra será inserida no lugar estruturalmente mais coeso.

## Passo 4: Atualização Cirúrgica (Anti-Poluição)
- Use a tool de visualizar arquivo para ler o arquivo de destino escolhido.
- **Regra Extra (Anti-Poluição):** Cada item adicionado deve ser **objetivo e eficaz**. É expressamente proibido ser muito longo. O objetivo central deste workflow é **NUNCA poluir** os arquivos de referência.
- Verifique se o assunto já está documentado. Se estiver, apenas adicione a nova nuance. Não crie listas infinitas e redundantes.
- Use a tool de edição (`replace_file_content` ou `multi_replace_file_content`) para injetar a regra na seção correspondente.

## Passo 5: Relatório ao Usuário
- Informe ao usuário exatamente qual regra foi consolidada e em qual arquivo de documentação ela foi salva.
