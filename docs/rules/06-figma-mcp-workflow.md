# Integração Figma MCP (Cannabreed)

Ao gerar código através de leituras do Figma via MCP, siga rigorosamente o fluxo de trabalho abaixo para garantir consistência visual e código limpo.

## 1. Fluxo de Geração de Código do Figma
**OBRIGATÓRIO:** Todo agente de IA deve seguir estes 5 passos exatos ao criar uma seção:

1. **Leitura:** Usar `get_design_context` no frame desejado.
2. **Mapeamento:** Comparar cores, gaps e fontes com as CSS Custom Properties no `src/app/globals.css`.
3. **Validação:** Se uma variável do Figma NÃO existir no `:root` do `globals.css`, INTERROMPA o fluxo, sugira o nome da variável ao desenvolvedor e peça autorização para incluí-la.
4. **Estrutura:** Gerar o JSX com tags semânticas (ver regra de `React, Semântica e Componentes`).
5. **Estilização:** Criar o CSS puro local importado no topo do componente, usando APENAS as variáveis validadas.

## 2. Geração do Arquivo `globals.css`
**CRÍTICO:** O Agente não deve manipular o arquivo global de variáveis livremente.
- O preenchimento do `globals.css` se dá **exclusivamente** pelo comando de fluxo automatizado `/extrair-variaveis` (que extrai as paletas e tipografia mestres do Figma).
- **PROIBIDO:** Usar `get_variable_defs` para tentar recriar ou documentar o `globals.css` fora desse fluxo automatizado específico.
