# Comando: /extrair-variaveis

## Objetivo

Extrair cores e tipografia dos frames de style guide do Figma via `Figma:get_design_context` e gerar as CSS Custom Properties no `:root` do `src/index.css`.

---

## Pré-requisitos

- Figma Desktop aberto com o arquivo do projeto
- Frame de cores e frame de tipografia existentes no arquivo Figma — cada um contendo apenas elementos com estilos/variáveis aplicados (sem conteúdo hardcoded)
- MCP do Figma conectado ao Claude Code (`/mcp` → `figma · ✔ connected`)
- Arquivo `src/index.css` já existente no projeto com reset CSS.
  Se o arquivo não existir, interromper a execução e exibir no terminal:
  `"src/index.css não encontrado. Crie o arquivo com o reset CSS antes de rodar este comando."`
  Não criar o arquivo automaticamente.

Se qualquer outro pré-requisito não estiver atendido, interromper e informar o que está faltando. Não prosseguir.

---

## Etapa 1 — Leitura do frame de cores

1. Solicitar ao usuário que selecione o **frame de cores** no Figma Desktop.
2. Usar `Figma:get_design_context` para ler o frame selecionado.
3. Extrair todos os tokens de cor retornados — nome do token e valor hex.
4. Se o retorno estiver vazio ou sem tokens de cor, interromper e informar. Não prosseguir.

---

## Etapa 2 — Leitura do frame de tipografia

1. Solicitar ao usuário que selecione o **frame de tipografia** no Figma Desktop.
2. Usar `Figma:get_design_context` para ler o frame selecionado.
3. Extrair todos os Text Styles retornados com suas propriedades completas:
   - Nome do Text Style (ex: `Headline/H0`)
   - Font family
   - Font size (valor em px)
   - Font weight
   - Line height (valor em px)
   - Letter spacing (se presente)
4. Se o retorno estiver vazio ou sem Text Styles nomeados, interromper e informar. Não prosseguir.

---

## Etapa 3 — Conversão para CSS Custom Properties

### Regra de nomenclatura — Cores

Usar o nome do token de cor do Figma como base, substituindo `/` por `-` e adicionando prefixo `--`.

- Figma: `primary/blue1` → CSS: `--primary-blue1`
- Figma: `secondary/grey1` → CSS: `--secondary-grey1`

### Regra de nomenclatura — Tipografia

Usar o nome do **Text Style** como base, substituindo `/` por `-`, convertendo para kebab-case e adicionando prefixo `--` com sufixo da propriedade.

- Text Style `Headline/H0`, font-size → `--headline-h0-font-size`
- Text Style `Headline/H0`, font-weight → `--headline-h0-font-weight`
- Text Style `Headline/H0`, line-height → `--headline-h0-line-height`
- Text Style `Headline/H0`, font-family → `--headline-h0-font-family`
- Text Style `Headline/H2-semibold`, font-weight → `--headline-h2-semibold-font-weight`

**O Figma é a fonte de verdade para nomes. Não renomear. Não traduzir. Não reorganizar.**

### Regra de organização no `:root`

```css
:root {
  /* Cores — primary */
  --primary-blue1: #02172B;
  --primary-green1: #80DB42;

  /* Cores — secondary */
  --secondary-grey1: #707582;

  /* Tipografia — Headline */
  --headline-h0-font-family: "Titillium Web";
  --headline-h0-font-size: 50px;
  --headline-h0-font-weight: 700;
  --headline-h0-line-height: 52px;

  --headline-h1-font-family: "Titillium Web";
  --headline-h1-font-size: 44px;
  --headline-h1-font-weight: 700;
  --headline-h1-line-height: 49px;

  /* Tipografia — [outros grupos se existirem] */
}
```

Grupos de cor e tipografia devem seguir a estrutura retornada pelo Figma — não reorganizar nem reordenar.

---

## Etapa 4 — Aplicar no `src/index.css`

1. Abrir o arquivo `src/index.css` existente.
2. Localizar o bloco `:root {}`.
   - Se já existir: substituir apenas o conteúdo interno do `:root`.
   - Se não existir: adicionar após o reset CSS.
3. Antes de substituir, verificar se há variáveis não originadas do Figma. Se existirem, preservá-las ao final do `:root` sob o comentário `/* Variáveis manuais — não sobrescrever */` e listá-las no relatório.
4. **Não modificar o reset CSS existente.**
5. Salvar o arquivo.

---

## Etapa 5 — Gerar relatório

Salvar em `src/relatorio-variaveis.md`:

```markdown
# Relatório de extração de variáveis

**Data:** [data]
**Arquivo Figma:** [nome do arquivo]

## Resumo

- Cores extraídas: [número]
- Text Styles extraídos: [número]
- Custom properties geradas: [número]
- Anomalias encontradas: [número]

## Pendências

### Estilos sem nome (hardcoded ignorados)
- Node [id] — valor [x] ignorado por não ter Text Style aplicado

### Variáveis manuais preservadas
- `--nome: valor` — não originada do Figma, preservada do `:root` anterior

## Nenhuma pendência
- Se não houver anomalias: "Nenhuma pendência encontrada. Figma e CSS estão sincronizados."
```

---

## Saídas do comando

| Arquivo | Conteúdo |
|---------|----------|
| `src/index.css` | Reset intocado + `:root` com cores e tipografia completas |
| `src/relatorio-variaveis.md` | Relatório de extração |

---

## Regras invioláveis

- **Usar** `Figma:get_design_context` para leitura dos frames. Nunca `get_variable_defs` neste comando.
- **Dois `Figma:get_design_context` obrigatórios** — um para o frame de cores, um para o frame de tipografia. Nunca tentar ler os dois no mesmo frame se estiverem separados.
- **Não inventar variáveis** — só criar o que foi retornado pelo MCP com nome de estilo ou token identificado.
- **Ignorar silenciosamente** qualquer valor hardcoded sem nome de estilo aplicado — registrar no relatório mas não criar variável.
- **Não modificar** o reset CSS existente.
- **Não sobrescrever** variáveis manuais existentes — preservar e registrar.
- **Não usar** URLs temporárias do MCP (`http://localhost:3845/...`) no código.
- Se `Figma:get_design_context` retornar erro ou resultado vazio em qualquer etapa, interromper imediatamente e informar. Não improvisar fonte alternativa.
