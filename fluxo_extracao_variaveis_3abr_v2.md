## Momento 1 — Início do projeto

O projeto foi criado. O `src/index.css` existe mas o `:root` está vazio.

Selecione o **frame de cores** no Figma antes de rodar o comando — o `/extrair-variaveis` vai pedir para ler esse frame primeiro.

**Comando: `/extrair-variaveis` — roda uma única vez**

O comando usa `get_design_context` para ler o frame de cores selecionado no Figma, depois pede para selecionar o frame de tipografia e lê ele com a mesma ferramenta. **Nunca usa `get_variable_defs`** — essa ferramenta foi abandonada porque só lê Local Variables, não Text Styles.

 O resultado:

```jsx
css

:root {
  /* Cores */
  --primary-blue1: #02172B;
  --primary-green1: #80DB42;
  --secondary-grey1: #707582;

  /* Tipografia */
  --headline-h0-font-family: "Titillium Web";
  --headline-h0-font-size: 50px;
  --headline-h0-font-weight: 700;
  --headline-h0-line-height: 52px;
}
```

Esse comando roda **uma única vez por projeto**. 
Ele constrói a base. Depois disso, nunca mais.

---
```

**Atenção:** tipografia vem de **Text Styles** aplicados nos elementos do frame — não de Local Variables. O `/extrair-variaveis` usa `get_design_context`, que lê as propriedades completas do estilo (font-family, font-size, font-weight, line-height) junto com o nome do estilo (`Headline/H0`). Variables de tipografia foram testadas e descartadas — o plugin gerava nomes sem semântica (`50`, `44`, `32`).

## Momento 2 — Durante o desenvolvimento (se for necessário)

- Critérios para decidir se usamos ou não **Comando: `/auditar-secao` :**
    - Diferenças na pratica entre `/extrair-variaveis`e **`/auditar-secao:`**
        
        Pense assim: o `/extrair-variaveis` é o momento em que você monta o dicionário do projeto. Ele lê os frames de style guide — que são frames "puros", criados especificamente para guardar cores e tipografia — e transforma tudo aquilo em variáveis CSS no `:root`. Depois disso, o dicionário está pronto e esse comando não roda mais.
        
        O `/auditar-secao` é diferente porque agora você está no mundo real, lendo um frame de verdade — a seção Hero, por exemplo, com título, botão, imagem, fundo. Esse frame não foi criado para listar estilos, foi criado para mostrar um layout. E dentro desse layout existem valores aplicados nos elementos.
        
        O que o `/auditar-secao` faz é pegar cada valor que encontra nesse frame e fazer uma pergunta: **esse valor já existe no meu dicionário?**
        
        Se o fundo do Hero tem `#02172B`, o comando abre o `:root`, procura esse hex, encontra `--primary-blue1` e anota no relatório: "já coberto, nenhuma ação necessária." Nada muda no `index.css`.
        
        Se ele encontra `padding: 80px` repetido em três elementos e esse valor não existe no `:root`, ele entende que deveria ser uma variável e cria `--hero-padding: 80px` automaticamente.
        
        Se ele encontra `max-width: 1280px` usado uma única vez, ele não tem certeza se é um padrão do projeto ou uma exceção daquela seção. Então ele não cria a variável, mas deixa ela comentada no `:root` para você decidir depois.
        
        A diferença central é essa: o `/extrair-variaveis` **constrói** o dicionário, e o `/auditar-secao` **protege** o dicionário — garantindo que nenhum valor solto entre no código sem passar por ele primeiro.
        
    - Quais valores ele lê? E os tokens?
        
        Essa é uma pergunta importante e a resposta tem duas partes.
        
        **Sim, ele lê tudo — mas com inteligência.** O `get_design_context` não lê pixel por pixel. Ele lê a estrutura do frame: elementos, propriedades aplicadas, estilos vinculados. Quanto maior e mais complexo o frame, mais dados ele retorna.
        
        **Sobre tokens:** sim, frames grandes e com muitos elementos vão consumir mais tokens do que frames simples. Mas existe uma lógica que protege isso. O comando foi escrito para ler **apenas a seção selecionada** — não o arquivo inteiro do Figma. Então o custo é proporcional ao tamanho daquela seção específica, não do projeto todo.
        
        A pergunta real aqui é: vale o custo? E a resposta é sim, porque você roda o `/auditar-secao` **uma vez por seção** antes de gerar o código. Esse gasto de tokens na auditoria evita um problema muito mais caro: gerar um componente inteiro com valores hardcoded e ter que refatorar depois.
        
        Pensa assim — é melhor gastar tokens lendo o frame agora do que gastar tokens corrigindo código errado depois.
        
    - Quando vale a pena?
        
        Você tocou num ponto real e vale pensar com cuidado.
        
        O `/extrair-variaveis` leu frames limpos e controlados — criados especificamente para guardar cores e tipografia. Poucos elementos, todos com estilos aplicados intencionalmente. O retorno foi enxuto e preciso.
        
        O `/auditar-secao` vai ler um frame de layout real. E aí o volume muda de natureza. Um frame de Hero, por exemplo, pode ter: fundo com cor, container com padding, título com tipografia, subtítulo com tipografia diferente, botão com border-radius e padding interno, imagem com dimensões, gap entre elementos, max-width do container. Isso sem contar elementos decorativos, ícones, overlays. O `get_design_context` vai retornar tudo isso.
        
        A questão prática é: **boa parte desse retorno vai ser descartada.** Padding de um elemento específico que aparece uma única vez, width de uma imagem, gap de um componente isolado — tudo isso vai cair na categoria "ignorar" ou "zona cinza comentada". O comando vai processar muito para agir em pouco.
        
        Então a pergunta real é: **vale a pena pagar esse custo a cada seção?**
        
        A minha avaliação honesta é que depende do momento. No início do projeto, quando o `:root` ainda está sendo consolidado e você genuinamente não sabe quais espaçamentos vão se repetir, a auditoria tem valor alto — ela protege a consistência. Mas numa seção simples, onde você já conhece bem o design system e sabe que tudo está coberto, o custo pode ser maior do que o benefício.
        
        Uma alternativa que vale considerar: usar o `/auditar-secao` apenas nas **primeiras seções** do projeto, quando o dicionário ainda está sendo estabilizado, e depois confiar no seu julgamento para as seções seguintes — rodando o comando apenas quando encontrar um valor que genuinamente não sabe se já existe no `:root`.
        
    - Diferenças na geração do código
        
        Vamos pensar com clareza no que você realmente tem depois do `/extrair-variaveis`.
        
        Você tem cores e tipografia. Isso cobre uma parte importante do design system, mas não cobre layout. E layout é onde está a maior parte do código de uma seção: padding, gap, max-width, border-radius, box-shadow, grid, flex. Esses valores não vêm do style guide — eles estão espalhados pelo design de cada seção.
        
        Então a pergunta real é: **o Claude Code consegue gerar código consistente sem saber esses valores com antecedência?**
        
        A resposta honesta é sim — mas com uma condição. Ele vai buscar esses valores direto no Figma via `get_design_context` no momento em que for gerar o componente. Ele lê o frame, pega padding, gap, max-width, e gera o CSS na hora. O problema não é a qualidade do código gerado numa seção isolada. O problema é a **consistência entre seções**.
        
        Imagine que o Hero tem `gap: 80px` entre elementos e a seção de Features também tem `gap: 80px`. Sem o `/auditar-secao`, o Claude vai gerar `gap: 80px` hardcoded nas duas seções separadamente, sem perceber que é o mesmo valor. Se um dia o cliente pedir para ajustar esse espaçamento, você vai ter que caçar esse valor em múltiplos arquivos CSS.
        
        Esse é o insight real sobre o `/auditar-secao`: ele não existe para gerar código melhor numa seção. Ele existe para **criar variáveis de espaçamento e layout que se repetem entre seções**, transformando valores acidentalmente repetidos em decisões explícitas de design system.
        
        Para o seu objetivo de máxima eficiência, a avaliação prática é essa: se você está construindo um site de cliente único, com 6 a 8 seções, onde velocidade é mais importante que manutenibilidade perfeita, o `/auditar-secao` tem valor baixo. Você gera as seções direto, aceita algum hardcode nos espaçamentos, e entrega rápido.
        
        Mas se você está construindo um template que vai ser reutilizado em múltiplos clientes, ou um projeto que o cliente vai querer alterar com frequência, o `/auditar-secao` paga o custo de tokens porque cria um `index.css` que funciona como fonte única de verdade para todo o layout — não só para cores e tipografia.
        
        A decisão é sua, mas minha leitura do seu objetivo é que o fluxo mais eficiente seria: **`/extrair-variaveis` sempre, `/auditar-secao` apenas em projetos de maior duração ou com previsão de manutenção**. Para sites de cliente rápido, você vai direto para a geração do componente.
        
    - Consequências de usar e não usar
        
        Consequências reais, uma a uma.
        
        **O que funciona perfeitamente com apenas cores e tipografia no `:root`**
        
        O Claude vai gerar código absolutamente fiel ao design. Ele lê o frame via `get_design_context`, pega `padding: 80px`, `gap: 32px`, `max-width: 1280px` e coloca esses valores diretamente no CSS do componente. O resultado visual vai ser idêntico ao Figma. Isso é o que importa para entregar o projeto.
        
        **O que você perde — e se realmente importa para o seu objetivo**
        
        A única consequência real é que espaçamentos e dimensões vivem dentro de cada arquivo CSS de componente, não no `index.css`. Isso significa que não existe um lugar central para alterar um espaçamento global. Mas você já disse que fidelidade ao design é o critério, não manutenibilidade de espaçamentos. Então essa consequência é irrelevante para o seu fluxo.
        
        **O risco que vale considerar**
        
        Existe um cenário onde isso pode gerar retrabalho: quando o Claude gera duas seções em sessões diferentes, sem memória do que gerou antes. Ele pode interpretar um mesmo elemento de forma ligeiramente diferente — não nos valores, porque eles vêm do Figma, mas na estrutura CSS. Por exemplo, numa sessão ele nomeia `.hero-container` e noutra `.features-wrapper` para containers com comportamento idêntico. Isso não quebra nada, mas gera inconsistência de nomenclatura ao longo do projeto.
        
        **A conclusão objetiva**
        
        Para o seu objetivo — máxima velocidade, fidelidade ao design, projetos de cliente — manter apenas cores e tipografia como variáveis é a decisão correta. O `/auditar-secao` resolve um problema que você não tem. O fluxo ideal para você é exatamente esse: `/extrair-variaveis` uma vez para montar a base, depois gerar cada seção direto a partir do Figma com o Claude Code lendo o frame e produzindo o componente. Simples, rápido e fiel.
        
        O `/auditar-secao` continua fazendo sentido existir no seu arsenal, mas como ferramenta opcional para projetos específicos — não como etapa obrigatória do fluxo padrão.
        
    
    Usar projeto de **Integração Figma MCP com IA de código** https://claude.ai/project/019ce4a9-a60e-76ae-a2b5-6e3cbe1647f3
    
    - **instrucao_usar_ou_nao_auditoria_secao.txt**
        
        [instrucao_usar_ou_nao_auditoria_secao.txt](attachment:e9210443-bd9a-40ff-b174-fa3ac8332a76:instrucao_usar_ou_nao_auditoria_secao.txt)
        

**Comando: `/auditar-secao` — roda uma vez por seção**

Você vai construir a seção Hero. Seleciona o frame Hero no Figma e roda `/auditar-secao`. O comando lê o design e compara tudo com o `index.css` existente. Três situações possíveis:

**Situação A — valor já tem variável**
Encontra `#02172B` no fundo do hero. Verifica o `:root`, vê que já existe como `--primary-blue1`. Não cria nada. Registra no relatório: "valor já coberto."

**Situação B — valor novo que deveria ser variável**
Encontra `padding: 80px` repetido em três elementos. Não existe no `:root`. Cria `--hero-padding: 80px` automaticamente.

**Situação C — valor incerto**
Encontra `max-width: 1280px` usado uma vez. Não sabe se é padrão ou exceção. Adiciona comentado no `:root` para você decidir depois.

## Momento 3 — Geração do componente

Com o `index.css` completo e auditado, o Claude Code gera o JSX e o CSS usando apenas variáveis — sem nenhum valor hardcoded.

---

## Resumo do fluxo

Início do projeto → /extrair-variaveis → index.css nasce com cores e tipografia completas

Para cada seção → seleciona frame no Figma → /auditar-secao → index.css complementado

index.css completo → Claude gera o componente usando apenas variáveis

---

## Divisão de responsabilidades

| Comando | Quando | Ferramenta MCP | Função |
| --- | --- | --- | --- |
| `/extrair-variaveis` | Uma vez, no início | `get_design_context` | Constrói a fundação — lê frames de cores e tipografia |
| `/auditar-secao` | A cada seção se houver necessidade | `get_design_context` | Garante que nenhum valor solto entra no código |

> **Regras invioláveis dos comandos**
> 
> - `get_variable_defs` está **proibido** em ambos os comandos
> - Tipografia sempre via **Text Styles** — nunca via Variables
> - Antes de criar qualquer variável nova, verificar se o valor hex ou o nome do Text Style já existe no `:root`
> - Elementos soltos no canvas (fora de frames) **não são lidos** pelo `get_design_context` — todo conteúdo do style guide deve estar dentro de frames