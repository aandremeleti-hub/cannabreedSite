# Comando: /auditar-secao

## Objetivo

Auditar uma seção selecionada no Figma em busca de valores hardcoded e divergências em relação ao `src/index.css`, atualizar automaticamente o `index.css` com anomalias críticas, e registrar candidatos de zona cinza como variáveis comentadas.

---

## Pré-requisitos

- Seção selecionada no Figma Desktop antes de rodar o comando;
- MCP do Figma conectado ao Claude Code (`/mcp` → `figma · ✔ connected`);
- Arquivo `src/index.css` já existente com o `:root` gerado pelo `/extrair-variaveis`.
Se `src/index.css` não existir ou não tiver `:root`, interromper e exibir no terminal:
"index.css não encontrado ou sem :root. Rode /extrair-variaveis antes de auditar."
Não prosseguir.
- Arquivo `src/relatorio-variaveis.md` já existente (gerado pelo `/extrair-variaveis`)

---

## Etapa 1 — Leitura da seção

1. Usar `Figma:get_design_context` no Figma MCP para ler o layout da seção **atualmente selecionada** no Figma.
2. Identificar todos os valores encontrados: cores, tipografia, espaçamentos, border-radius, box-shadow.
3. Comparar cada valor encontrado com as custom properties existentes no `:root` do `src/index.css`.

---

## Etapa 2 — Classificação dos valores encontrados

Para cada valor encontrado, classificar em uma das três categorias:

### Anomalia crítica — atualizar o `index.css` automaticamente

**Comportamento** — Cores: adicionar antes de qualquer ação:
1. Verificar se o valor hex já existe no :root com qualquer nome
2. Se existir: não criar variável. Registrar no relatório qual nome já cobre esse valor
3. Se não existir: criar nova custom property

**Comportamento** — Tipografia: adicionar antes de qualquer ação:
1. Se o texto tiver Text Style aplicado (ex: Headline/H0), verificar se --headline-h0-font-size já existe no :root
2. Se existir: não criar. O /extrair-variaveis já cuidou disso
3. Se não existir: criar seguindo o padrão --[text-style]-[propriedade]


- Qualquer cor em hex, rgb ou hsl
- `font-size`, `font-weight`, `font-family`
- `line-height`, `gap`, `padding`, `margin` que se repetem em dois ou mais elementos da seção

**Comportamento:** criar a custom property no `:root` do `index.css`, dentro da categoria correspondente, seguindo as seguintes regras:

**Regra de nomenclatura para variáveis novas:**
1. Verificar por valor — se já existe no :root com outro nome, reutilizar esse nome
2. Se não existe, nomear como [elemento-pai]-[propriedade] em kebab-case
3. Nunca usar nomes genéricos como --color-1, --font-size-1

---

### Zona cinza — incluir comentado no `index.css`

São valores que podem ser exceção legítima ou candidato a variável — exigem decisão:

- Espaçamentos que aparecem **apenas uma vez** na seção
- Valores de `z-index`
- `max-width` de containers
- `border-radius`
- `box-shadow`

**Comportamento:** adicionar ao final do `:root`, dentro do bloco `/* Zona cinza — aguardando decisão */`, como variável **comentada**. Não aplicar no código. Não remover sem instrução explícita.

```css
/* Zona cinza — aguardando decisão */
/* --spacing-unique-hero: 72px; */
/* --z-index-modal: 200; */
/* --container-max-width: 1280px; */
```

---

### Ignorar — não reportar, não criar

Valores que não devem virar variáveis:

- `0`, `100%`, `auto`, `none`
- `1px` ou `2px` em borders
- Valores de transição (`0.3s ease`, `all 0.2s`)
- `position: relative / absolute`

---

## Etapa 3 — Atualizar o `index.css`

1. Abrir `src/index.css`.
2. Para cada **anomalia crítica** encontrada:
   - Inserir a nova custom property dentro da categoria correta no `:root` (Cores, Tipografia, Espaçamento, etc.)
   - Não duplicar se a variável já existir
3. Adicionar o bloco `/* Zona cinza — aguardando decisão */` ao final do `:root` com os candidatos comentados.
4. **Não modificar** o reset CSS.
5. **Não alterar** variáveis já existentes.
6. Salvar o arquivo.

---

## Etapa 4 — Atualizar o relatório

Abrir `src/relatorio-variaveis.md` e **acrescentar** uma nova entrada no seguinte formato:

```markdown
---

## Auditoria — [Nome da seção] — [Data]

### Anomalias críticas corrigidas
- `--nome-da-variavel: valor` — origem: [elemento no Figma]
- `--nome-da-variavel: valor` — origem: [elemento no Figma]

## Valores já cobertos pelo index.css
- `#02172B` → já existe como `--primary-blue1` — nenhuma ação necessária

### Zona cinza (aguardando decisão)
- `--nome-da-variavel: valor` — motivo: aparece 1 vez / z-index / max-width
- Descomente no `index.css` para ativar.

### Nenhuma anomalia
> Se não houver nenhum valor hardcoded classificável, registrar: "Seção auditada sem anomalias."
```

**Não substituir** o conteúdo existente do relatório. Apenas acrescentar.

---

## Saídas do comando

Ao final da execução, o comando deve ter produzido exatamente:

| Arquivo | O que muda |
|---|---|
| `src/index.css` | Novas custom properties críticas inseridas + bloco zona cinza comentado |
| `src/relatorio-variaveis.md` | Nova entrada de auditoria acrescentada ao final |

---

## Regras invioláveis

- **Não ler o arquivo inteiro do Figma** — usar apenas o `Figma:get_design_context` da seção selecionada.
- **Não inventar variáveis** — só criar o que foi encontrado no layout da seção.
- **Não renomear** variáveis do Figma.
- **Não modificar** o reset CSS.
- **Não sobrescrever** variáveis já existentes no `:root`.
- **Não apagar** o bloco de zona cinza sem instrução explícita.
- **Não substituir** o relatório existente — sempre acrescentar.
- **Usar** `Figma:get_design_context` para leitura de layout. Nunca `get_variable_defs` neste comando.
- **Não criar variável duplicada** — verificar por valor hex e por nome antes de criar qualquer custom property.
- **Não usar nomes genéricos** — nomenclatura sempre baseada em elemento e propriedade.