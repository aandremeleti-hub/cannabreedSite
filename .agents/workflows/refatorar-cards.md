---
description: Workflow para componentizar cards de uma seção específica, extraindo layouts e lógicas legadas.
---

# Workflow: Refatoração Arquitetural de Cards

**Descrição:** 
Acione este workflow para componentizar os cards de uma seção específica, extraindo layouts e lógicas legadas, e aplicando as rigorosas regras de arquitetura e isolamento de CSS do projeto Cannabreed.

---

## 🚀 Gatilho de Execução (Slash Command)
Para utilizar este fluxo automatizado, informe a seção alvo na conversa. 
**Exemplo de Prompt para o Usuário:** 
`/refatorar-cards Seção alvo: WhatCannabreedDoes`

---

## 🛠 Instruções de Execução para o Agente (Agent Instructions)

Sempre que o usuário invocar este workflow passando o nome de uma seção, o **Agente Orchestrator** deverá assumir a tarefa e delegar IMEDIATAMENTE a execução ao `frontend-specialist`, acionando ativamente as skills locais: `react-components`, `clean-code`, `frontend-design` e `nextjs-react-expert`.

A sequência cirúrgica de ações é:

### 1. Leitura e Alinhamento de Regras (Mandatório)
Antes de escrever qualquer código, o agente deve ler o arquivo base de padronização arquitetural:
**Ler:** `docs/rules/08-padrao-cards.md`

### 2. Auditoria Silenciosa da Seção Mãe
- Localize a seção alvo indicada pelo usuário na pasta `src/components/layout/`.
- Inspecione minuciosamente os arquivos `.jsx` e `.css` dessa seção. 
- Mapeie mentalmente o bloco de código HTML correspondente ao card interno (tags como `<article className="*card*">` ou similares).
- Identifique todas as classes CSS vinculadas a essa estrutura de card.

### 3. Criação do Componente "Dumb"
- Crie o novo diretório de destino padronizado: `src/components/cards/[NomeDoCard]` (ex: `CardMarketProblem`).
- Crie o componente React (`.jsx`), adotando a estrutura *Dumb Component* (recebendo propriedades baseadas no design auditado: `title`, `description`, `iconSrc`, `imageSrc`, etc.).
- **ATENÇÃO CRÍTICA:** É terminantemente proibido realizar qualquer refatoração estética ou alterar a responsividade. O HTML e as lógicas de estilo (`className`) transferidos devem gerar um layout final visualmente idêntico ao original.

### 4. Isolamento Térmico do CSS
- Crie o respectivo arquivo de folha de estilos (ex: `CardMarketProblem.css`).
- Recorte TODAS as regras CSS pertencentes exclusivamente a este card que estavam misturadas no CSS da seção mãe.
- Cole-as neste novo arquivo local do card, limpando e "desacoplando" o arquivo de estilo da seção original.

### 5. Refatoração Dinâmica com .map() e a "Regra de Ouro" (A Metodologia Segura)
Na seção mãe (ex: `MarketProblem.jsx` ou `WhatCannabreedDoes.jsx`), para garantir que **absolutamente nada** além da refatoração das props (e do uso do array + `.map()`) seja alterado, o agente deve impor a seguinte metodologia estrita durante a execução:

- **Containers Intocáveis:** O agente está terminantemente proibido de alterar ou remover qualquer classe, tag HTML ou regra de CSS que pertença aos containers pais (as divs que envolvem os loops). O CSS que controla a responsividade da grade ficará no arquivo original.
- **Extração Cirúrgica:** O novo componente Dumb (`CardX.jsx`) irá conter **exatamente** o mesmo HTML e as mesmas classes que o item do card original possuía. Em caso de classes utilitárias ou regras responsivas vinculadas à raiz do card, elas devem ser rigorosamente preservadas.
- **Iteração Limpa:** A estrutura `.map()` será inserida diretamente dentro do container pai existente, e o retorno será apenas a chamada do novo componente `<CardX key={index} {...dados} />`. **Nenhuma tag extra (como `<div>` ou `<>`) será criada ao redor do retorno do map.** A prop `key` é obrigatória e vai direto no componente.
- **Isolamento de CSS:** Somente o CSS interno específico do card (fontes, cores de fundo, paddings locais, hover do card) será extraído para o `.css` do componente. As diretrizes de estrutura/layout externo permanecem no pai.
- **Gestão de Assets Sem Quebra:** Todas as importações de imagens (`.png`/`.jpeg`) e SVGs dinâmicos devem ser centralizadas no arquivo da seção mãe. Elas devem ser referenciadas dentro do array de dados (a constante base do `.map()`) e repassadas via `props` (`imageSrc`, `iconSrc`). Isso previne erros 404 e quebra de caminhos relativos.
- **Limpeza de Obsoletos:** Se a seção possuía pastas avulsas (como os cards não-padronizados anteriores), apague as pastas velhas após a validação.

### 6. Relatório e Validação Final
- Valide que o CSS da seção mãe não contém mais detritos da UI do card.
- Informe ao usuário que a tarefa foi concluída, detalhando de forma breve os arquivos deletados, os arquivos criados e garantindo que as diretrizes visuais foram protegidas.