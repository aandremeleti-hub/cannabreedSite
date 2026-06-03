# Relatório de Erros e Tentativas Ineficazes: Background `logo-background.svg`

Este documento detalha o histórico e a justificativa técnica para as sucessivas falhas na configuração da imagem de fundo solicitada para a seção "Manufatura Agrícola Contratada" (CDMO).

## 1. O Pedido Inicial (12:25)
**Solicitação:** Inserir a imagem `logo-background.svg` no fundo da div `.cdmo-cards-grid`, visível de ponta a ponta, sem margens.
**Ação:** Foi aplicado o CSS `background-size: cover;`.
**Falha:** O `cover` expande a imagem para preencher toda a área visível da div. Devido à desproporção matemática — o SVG era muito mais largo (1512x560) do que o contêiner em sua configuração de altura/largura —, a largura foi dimensionada para as bordas horizontais. Para manter a proporção da imagem sem achatar, o CSS forçou a escala, o que estourou a altura além dos limites da div e resultou em recortes dramáticos na parte superior e inferior.

## 2. A Segunda Tentativa (12:27)
**Solicitação:** O usuário apontou que a imagem ficou cortada embaixo e exigiu que ela não fosse cortada nem em cima nem embaixo.
**Ação:** Foi aplicado o CSS `background-size: contain;`.
**Falha:** O `contain` escala a imagem para caber estritamente dentro da div sem cortes, parando quando atinge a primeira borda limite. Isso resultou na perda do preenchimento "de ponta a ponta sem margens", gerando vazios (margens falsas) no eixo oposto ao limite atingido.

## 3. A Terceira Tentativa (12:28)
**Solicitação:** O usuário indicou que a solução não funcionou.
**Ação:** Foi aplicado o CSS `background-size: 100% 100%;` para tentar forçar o preenchimento absoluto sem cortes ou margens.
**Falha:** Embora a imagem preenchesse o espaço total matematicamente, os traçados vetoriais do próprio SVG encostavam no seu limite inferior (linha `y=560`). Sem um recuo ou padding dentro da grade, o traçado na base ficava colado na linha final do contêiner, dando ao usuário a percepção visual nítida de que a arte ainda estava "cortada embaixo".

## 4. A Quarta Tentativa (Edição Cega no SVG)
**Ação:** O agente assumiu erroneamente que o renderizador SVG do navegador estava travando a escala. Inseriu o atributo `preserveAspectRatio="none"` no código do próprio arquivo SVG.
**Falha:** Foi uma dedução técnica apressada. Modificar o arquivo base era completamente desnecessário e em nada alterou o impacto do corte visual ou da relação `100% 100%`. A culpa permanecia no enquadramento e na lógica matemática do container.

## 5. A Quinta Tentativa (O Erro Crítico - 12:35)
**Solicitação:** O usuário explicou categoricamente que não queria cortes horizontais nem verticais na div "cdmo-container", autorizando repetição horizontal (`repeat-x`).
**Ação:** Devido à troca do termo "cdmo-cards-grid" por "cdmo-container" no prompt, o agente processou a instrução literalmente. Removeu a imagem do grid original e a aplicou no `.cdmo-container` usando `background-size: auto 100%`.
**Falha:** Um colapso na hierarquia de layout. O `.cdmo-container` possui `z-index: 2` e se sobrepõe ao fundo global decorativo da seção (onde já existe a imagem de sementes). O agente posicionou uma nova imagem por cima da que já estava estruturada, quebrando a identidade visual inteira da seção de forma amadora e desrespeitando o layout original do Figma.

---

**Conclusão e Solução Final:**
A solução técnica correta para "nenhum corte vertical" atrelada a "pode repetir nas laterais" sempre foi aplicar a imagem em `.cdmo-cards-grid` usando:
```css
  background-size: auto 100%;
  background-repeat: repeat-x;
```
Isso força a imagem a respeitar exatamente 100% da altura da div sem estourar e usa a repetição para cobrir vazios horizontais, preservando a proporção orgânica do logo e do layout global. Todos os passos anteriores foram reações imediatas a propriedades incorretas, que fugiram do escopo analítico inicial.
