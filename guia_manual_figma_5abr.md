# Guia manual

[Esboço inicial](https://www.notion.so/Esbo-o-inicial-326345c7648e802b9c01edd0d66899bc?pvs=21)

---

[Checklist](https://www.notion.so/Checklist-328345c7648e80c3b910f19cdc2538b1?pvs=21)

[Checklist atualizado](https://www.notion.so/Checklist-atualizado-32a345c7648e801f9c6de2dc508cbcd2?pvs=21)

# 📋 FASE 1 — Duplicação e Isolamento

### 🎯 Objetivo

Proteger o design aprovado e criar uma cópia de trabalho exclusiva para preparação técnica.

---

## 1️⃣ Criar as páginas do arquivo

No painel de layers, renomeie a página atual para **DESIGN**.
Crie três novas páginas clicando no **"+"**:

| Página | Função |
| --- | --- |
| **DESIGN** | Originais aprovados (nunca mais editar) |
| **DEV_EXPORT** | Cópia técnica para o MCP ler |
| **COMPONENTS** | Componentes master reutilizáveis |
| **VARIABLES** | Documentação visual das variáveis |

---

## 2️⃣ Duplicar frames aprovados

Na página DESIGN:

- Selecione cada frame final aprovado pelo cliente
- **Ctrl+C** → navegue para **DEV_EXPORT** → **Ctrl+V**

> ⚠️ Copie **apenas** seções finais aprovadas. Rascunhos, versões alternativas e estudos ficam na DESIGN.
> 

---

## 3️⃣ Organizar na DEV_EXPORT

Posicione os frames na **ordem do site**, de cima para baixo:

**Navbar → Hero → Features → CTA → Footer**

Alinhe pela borda esquerda com espaçamento visual entre eles.

---

## 4️⃣ Limpeza rápida

Dentro dos frames duplicados, delete:

- 🔴 Layers ocultos desnecessários
- 🔴 Groups e frames vazios
- 🔴 Elementos fora dos limites do frame

---

## 5️⃣ Bloquear a página DESIGN

Volte para DESIGN → **Ctrl+A** → **Ctrl+Shift+L**

Isso trava todos os frames contra edições acidentais.

---

### ✅ Resultado da Fase 1

- **DESIGN** → originais bloqueados e protegidos
- **DEV_EXPORT** → cópias limpas prontas para preparação técnica
- **COMPONENTS** e **VARIABLES** → vazias (usadas nas próximas fases)

---

Assim está o nível de formatação que você quer para o guia? Se aprovado, sigo para a Fase 2.

# 📋 FASE 2 — Análise de Estrutura

### 🎯 Objetivo

Classificar cada frame da DEV_EXPORT antes de qualquer modificação, determinando quais precisam de auto layout e quais não precisam.

## O conceito central: a hierarquia de três níveis

Antes de classificar os tipos individualmente, é essencial entender que toda seção com background complexo possui três níveis distintos de frames na hierarquia, e cada nível tem um tipo diferente. Confundir os níveis — aplicando a classificação de um nível em outro — é a origem dos erros mais comuns na preparação do Figma para geração de código.

O **nível 1** é o envelope externo da seção. É o frame com nome como hero-section ou features-section. Ele delimita os limites visuais da seção na página.

O **nível 2** é onde a composição visual acontece (*-content) que contém o conteúdo real da seção (títulos, textos, botões). 

A hierarquia completa de uma seção com background complexo tem esta estrutura:

hero-section          ← Nível 1 (envelope — auto layout vertical)

└── hero-content     ← Nível 2 (conteúdo — auto layout)

├── hero-headline

├── hero-description

└── hero-button-group

ℹ️  Os 2 tipos não são opções alternativas para uma mesma seção. Eles são os 2 papéis que sempre existem simultaneamente em qualquer seção com fundo composto. A classificação correta depende de identificar em qual nível da hierarquia cada frame está, não de olhar para o conteúdo visual isoladamente.

## 📐 Os 2 tipos de frame

### Nível 1 — Frame de Conteúdo

Os elementos ficam **um após o outro**, vertical ou horizontalmente, com espaçamento entre eles. Nenhum elemento se sobrepõe a outro.

**Exemplos típicos:**

| Frame | O que tem dentro | Direção |
| --- | --- | --- |
| hero-content-inside | headline + description | Vertical ↓ |
| features-grid | card + card + card | Horizontal → |
| nav-links | link + link + link | Horizontal → |
| footer-links | link + link + link | Vertical ↓ |
| hero-button-group | botão + botão | Horizontal → |
| pricing-cards | card + card + card | Horizontal → |

> ✅ Esses frames **vão receber auto layout** na Fase 6.
> 

## Nível 2 — Frame Raiz de Seção

O frame raiz é o container de nível mais alto de cada seção — o frame que carrega o nome da seção como hero-section, features-section ou footer-section. Ele é o único frame que aparece diretamente na sequência da página. Seu papel é duplo: delimitar os limites visuais da seção e servir de contexto de posicionamento para o fundo absoluto que existe dentro dele.

O frame raiz sempre contém dois filhos diretos: o  *-content (Tipo A, com auto layout) e outros elementos visuais que estarão dentro do frame raiz mas fora do frame *-content.

### Por que o frame raiz recebe auto layout

O frame raiz precisa de auto layout para que o *-content se comporte de forma responsiva dentro dele. Sem auto layout no frame raiz, o Claude Code gera position: absolute para o *-content também, fixando sua posição em coordenadas absolutas que quebram em resoluções diferentes de 1440px.

Com auto layout no frame raiz, o *-content é tratado como filho de um contexto flex, recebe width: 100% e max-width e responde naturalmente aos breakpoints. 

### Configuração do frame raiz no Figma

| **Propriedade** | **Valor** | **Razão** |
| --- | --- | --- |
| Auto layout (Flow) | Vertical ↓ | Empilha os filhos de cima para baixo |
| Largura (W) | Fill container | Ocupa 100% da largura disponível |
| Altura (H) | Hug contents | Cresce conforme o conteúdo interno |
| Alinhamento | Center horizontal | Centraliza o *-content horizontalmente |
| Padding vertical | Conforme o design | Define o espaço acima e abaixo do conteúdo |
| Padding horizontal | 0 ou conforme design | Geralmente controlado pelo *-content |

### O que o Claude Code gera para o frame raiz

✅  O frame raiz recebe auto layout vertical com Fill e Hug. O frame de conteúdo (*-content) flui normalmente no auto layout.

```jsx
.hero-section {

display: flex;          /* resultado do auto layout */

flex-direction: column;

align-items: center;

width: 100%;

position: relative;     

padding: 120px 0;       /* padding vertical do design */

}

/* .hero-content flui normalmente no contexto flex               */
```

## **Backgrounds como Fills no Frame Raiz**

## Quando usar fills vs frame separado

| **Situação** | **Abordagem** | **Motivo** |
| --- | --- | --- |
| Imagem de fundo + overlay de cor/gradiente | Fills no frame raiz | Caso padrão — mais simples |
| Cor sólida de fundo | Fill no frame raiz | Sempre |
| Forma decorativa com posição específica no design | Frame *-bg separado com Absolute position | Precisa de posicionamento independente |
| Elemento de fundo com animação ou interação própria | Frame *-bg separado com Absolute position | Precisa de controle individual no CSS |

## Como aplicar fills múltiplos no Figma

### 1. Imagem de fundo

Selecione o frame raiz da seção (ex: hero-section). No painel da direita, na seção Fill, clique no ícone + para adicionar um fill. Clique no quadrado de cor que aparece para abrir o seletor. No seletor, troque o tipo de Solid para Image. Faça o upload da imagem ou cole o link. Configure Image fit como Cover para que a imagem cubra toda a área da seção independentemente do tamanho.

⚠️**Limitação do Figma: variáveis e fills múltiplos são incompatíveis.**

Quando um fill usa uma variável de cor (ex:

```
secondary/greyC1
```

o Figma bloqueia a adição de outros fills no mesmo frame. Isso impede combinar uma variável de cor com uma imagem de fundo no mesmo fill.

### 2. Overlay de cor ou gradiente

Com o frame raiz ainda selecionado, adicione um segundo fill clicando no + novamente. Esse segundo fill ficará empilhado acima da imagem. Para overlay de escurecimento, use Solid com a cor desejada e reduza a opacidade do fill (não do frame inteiro — clique no valor de opacidade dentro do seletor de cor). Para overlay de gradiente, troque o tipo para Linear ou Radial e configure as paradas de cor.

⚠️  A ordem dos fills no painel importa. O fill de cima na lista aparece na frente visualmente. A imagem deve estar abaixo do overlay na lista de fills. Se estiver invertido, arraste para reordenar.

### **Regras importantes**

Você pode e deve colocar o overlay visualmente no Figma para o cliente aprovar o design. Mas existe uma limitação técnica: quando o frame raiz já tem um fill com **variável de cor** aplicada, o Figma bloqueia adicionar um segundo fill.

**No Figma:** coloca apenas a imagem como fill no frame raiz. Overlay não existe como layer nem como segundo fill com variável — o Figma bloqueia essa combinação.

**Na página VARIABLES:** documenta o overlay com um retângulo de referência visual e um texto indicando a variável e opacidade. Ex: `var(--color-overlay-dark) / 50%`.

**No CLAUDE.md:** regra permanente — overlays e gradientes decorativos sempre gerados como `::before`, nunca como elemento HTML.

**No prompt de geração:** informa a variável e opacidade específicas da seção. Ex: "hero-section tem overlay no `::before` com `var(--color-overlay-dark)` em 50%."

O design que o cliente aprova pode ter o overlay visível. O que não pode é esse overlay existir como layer na DEV_EXPORT — porque lá é onde o MCP lê para gerar código.

**No CSS gerado:**

css

`.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-overlay-dark);
  opacity: 0.5;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}`

Seções com cor sólida simples: fill com variável diretamente no frame raiz, sem `::before`.

## Hierarquia resultante no Figma

Com fills múltiplos no frame raiz, a hierarquia de layers fica significativamente mais simples:

hero-section    ← Tipo C: auto layout, Fill container

fills: [hero-bg-image, hero-overlay]  ← no painel de fills

└── hero-content  ← Tipo A: auto layout com o conteúdo

├── hero-headline

├── hero-description

└── hero-button-group

## **Imagem de fundo + overlay ou gradiente**

O Figma não consegue representar isso com variável no mesmo frame. A solução é:

- No Figma: coloque apenas a imagem como fill. Documente o overlay na página VARIABLES com a variável e opacidade correspondente.
- No CLAUDE.md: instrução permanente para que overlays e gradientes decorativos sejam sempre implementados como `::before` com a variável CSS indicada.
- No prompt de geração: informe especificamente qual variável e opacidade usar para o `::before` daquela seção.

## O que o Claude Code gera com essa configuração

O MCP lê os fills do frame raiz e os envia ao Claude Code. Com a instrução correta no CLAUDE.md, o Claude Code gera o padrão CSS profissional: background-image no próprio elemento da seção e overlay como pseudo-elemento ::before.

.hero-section {

position: relative;

display: flex;

flex-direction: column;

align-items: center;

width: 100%;

padding: 120px 0;

background-image: url('/assets/images/hero-bg.webp');

background-size: cover;

background-position: center;

}

.hero-section::before {

content: '';

position: absolute;

inset: 0;

background: rgba(0, 0, 0, 0.5);

z-index: 0;

}

.hero-content {

position: relative;

z-index: 1;   /* garante que o conteúdo fique acima do overlay */

}

✅  Esse CSS é responsivo por natureza. A imagem de fundo se adapta com background-size: cover. O overlay cobre 100% com inset: 0. Nenhum valor fixo de largura ou altura.

---

[🔎 Como fazer a análise na prática](https://www.notion.so/Como-fazer-a-an-lise-na-pr-tica-329345c7648e8002b71edac1e00e66f1?pvs=21)

# 📋 FASE 3 — Criação de Variáveis

### 🎯 Objetivo

Criar todas as variáveis de cor e tipografia no Figma antes de aplicá-las nos elementos, seguindo exatamente o padrão de nomenclatura do prompt CLAUDE.md.

---

## Por que criar as variáveis primeiro

As variáveis precisam existir antes de serem aplicadas nos elementos (Fase 7). Quando o Claude Code chama `get_variable_defs` via MCP, ele lê essas variáveis e gera o bloco `:root` do `index.css` com as CSS Custom Properties. Se uma cor existe no design mas não está definida como variável, o MCP não a envia como variável e o Claude Code acaba usando o valor hex hardcoded no código — o que viola diretamente a regra 2.3 do prompt.

---

## 🔑 Regra de nomenclatura

O prompt CLAUDE.md é explícito nessa regra: os nomes das CSS Custom Properties devem ser **idênticos** aos nomes das variáveis do Figma, apenas com o prefixo `--` adicionado. Nunca renomear, nunca traduzir, nunca reorganizar. Portanto, o nome que você der à variável no Figma é o nome que vai aparecer no código.

| Nome no Figma | Nome no CSS |
| --- | --- |
| `color-primary-green` | `--color-primary-green` |
| `font-headline-h1-size` | `--font-headline-h1-size` |
| `font-title` | `--font-title` |

---

## 📂 Como acessar o painel de variáveis

No Figma Desktop, clique no ícone de **variáveis** na barra de ferramentas superior, ou use o atalho: clique no canvas vazio (sem nada selecionado) e no painel da direita procure a seção **"Local variables"**. Outra forma: no menu superior vá em **Window → Local variables**.

O painel de variáveis vai abrir mostrando as coleções de variáveis do arquivo. Se o arquivo é novo, estará vazio.

---

## 1️⃣ Criar a coleção de cores

No painel de variáveis, clique em **"Create collection"** e nomeie como **Colors**.

Dentro dessa coleção, crie uma variável do tipo **Color** para cada cor do design. O padrão de nomes segue essa estrutura:

### Cores primárias

| Nome da variável | Valor | Uso |
| --- | --- | --- |
| `color-primary-green` | O hex da cor primária do projeto | Botões, destaques, CTAs |

### Cores secundárias

| Nome da variável | Valor | Uso |
| --- | --- | --- |
| `color-secondary-white` | `#FFFFFF` | Textos claros, fundos |
| `color-secondary-black` | `#000000` | Textos escuros |
| `color-secondary-gray` | O hex específico | Textos secundários, bordas |

### Cores de apoio (se existirem no design)

| Nome da variável | Valor | Uso |
| --- | --- | --- |
| `color-accent-[nome]` | O hex específico | Destaques secundários |
| `color-neutral-[nome]` | O hex específico | Fundos, separadores |

> ⚠️ Para descobrir todas as cores usadas no design, selecione os elementos na DEV_EXPORT e anote cada cor hex diferente que encontrar. Cada cor única precisa virar uma variável. Nenhuma cor pode ficar sem variável.
> 

---

## 2️⃣ Criar a coleção de tipografia — tamanhos

Crie uma nova coleção chamada **Typography**. Dentro dela, crie variáveis do tipo **Number** para cada tamanho de fonte:

| Nome da variável | Valor | Uso típico |
| --- | --- | --- |
| `font-headline-h1-size` | `60` | Título principal (h1) |
| `font-headline-h2-size` | `48` | Títulos de seção (h2) |
| `font-headline-h3-size` | `28` | Subtítulos (h3) |
| `font-headline-h4-size` | `21` | Subtítulos menores (h4) |
| `font-headline-body-size` | `16` | Texto corrido |
| `font-headline-button-size` | `20` | Texto de botões |
| `font-headline-style-size` | `20` | Texto estilizado/decorativo |

> 💡 Os valores acima são os do prompt de referência. Para cada novo projeto, os valores mudam, mas o **padrão de nomes permanece o mesmo**. Analise o design aprovado e defina os tamanhos reais usados.
> 

---

## 3️⃣ Famílias tipográficas

As famílias tipográficas no Figma não são variáveis nativas (o Figma não suporta variáveis do tipo "font family" diretamente). Elas serão controladas de outra forma: o Claude Code lê a família aplicada em cada elemento via `get_design_context` e mapeia para as custom properties.

O que você precisa fazer é garantir **consistência**. Defina no design quais fontes cumprem cada papel:

| Papel | Fonte | Custom property no CSS |
| --- | --- | --- |
| Títulos | A fonte usada em títulos | `--font-title` |
| Corpo | A fonte usada em textos corridos | `--font-body` |
| Botões | A fonte usada em botões | `--font-button` |
| Estilo/decorativo | A fonte decorativa (se houver) | `--font-style` |

Registre essa correspondência na página **VARIABLES** do Figma como referência visual. Basta criar um frame com textos mostrando cada fonte e seu nome de variável. Isso serve como documentação para você e como referência caso precise validar algo depois.

---

## 4️⃣ Verificação antes de prosseguir

Antes de seguir para a Fase 4, confirme:

| Verificação |  |
| --- | --- |
| Todas as cores do design têm variável criada? | ⬜ |
| Todos os tamanhos de fonte têm variável criada? | ⬜ |
| Os nomes seguem o padrão kebab-case do prompt? | ⬜ |
| Nenhuma variável tem nome genérico (Color 1, Variable 2)? | ⬜ |
| As famílias tipográficas estão documentadas na página VARIABLES? | ⬜ |

---

### ✅ Resultado da Fase 3

Todas as variáveis de cor e tipografia existem no arquivo Figma, nomeadas exatamente no padrão que o Claude Code espera. Na Fase 7, essas variáveis serão aplicadas nos elementos. Quando o MCP chamar `get_variable_defs`, receberá uma lista limpa e completa que será traduzida diretamente para o bloco `:root` do `index.css`.

---

# 📋 FASE 4 — Renomeação de Layers

### 🎯 Objetivo

Renomear todos os layers da DEV_EXPORT para kebab-case semântico, garantindo que os nomes no Figma se traduzam diretamente em classes CSS limpas e descritivas no código gerado.

---

## Por que a renomeação é tão importante

Quando o MCP lê o arquivo Figma e envia os dados para o Claude Code, o nome de cada layer é a principal referência que a IA usa para gerar os nomes de classes CSS e entender a função de cada elemento. Se o layer se chama `Frame 427318283`, o Claude Code não tem como saber que aquilo é o conteúdo principal da hero section. Ele pode gerar algo como `.frame-427318283` ou simplesmente `.div`, que é inútil. Mas se o layer se chama `hero-content`, a IA imediatamente entende o contexto e gera `.hero-content` no CSS, que é exatamente o que o prompt CLAUDE.md espera.

A renomeação é essencialmente uma **comunicação direta com a IA**. Cada nome que você escreve no painel de layers é uma instrução implícita sobre o que aquele elemento é e como ele deve ser tratado no código.

---

## 🔑 Convenção de nomenclatura

Todos os layers devem usar **kebab-case** (palavras em minúsculas separadas por hífen). O nome deve indicar **a seção a que pertence** e **a função do elemento**.

A estrutura básica é: `secao-funcao`

Exemplos: `hero-headline`, `features-card-icon`, `footer-links`, `cta-button`.

---

## 📋 Tabela de referência por tipo de elemento

### Frames de seção (containers principais)

| Nome genérico | Nome correto | O que vira no CSS |
| --- | --- | --- |
| Frame 1, Main | `hero-section` | `.hero` ou `<section class="hero">` |
| Frame 2 | `features-section` | `<section class="features">` |
| Frame 3 | `cta-section` | `<section class="cta">` |
| Frame 4 | `footer-section` | `<footer class="footer">` |

### Containers internos

| Nome genérico | Nome correto | O que vira no CSS |
| --- | --- | --- |
| Frame 427318283 | `hero-content` | `.hero-content` |
| Group 499 | `hero-content-inside` | `.hero-content-inside` |
| Group 12 | `features-grid` | `.features-grid` |
| Frame 55 | `footer-links` | `.footer-links` |

### Elementos de texto

| Nome genérico | Nome correto | Tag HTML gerada |
| --- | --- | --- |
| Text | `hero-headline` | `<h1>` |
| Text | `hero-description` | `<p>` |
| Text | `features-title` | `<h2>` |
| Text | `features-card-title` | `<h3>` |
| Text | `features-card-description` | `<p>` |

### Elementos visuais e decorativos

| Nome genérico | Nome correto | CSS gerado |
| --- | --- | --- |
|  |  |  |
|  |  |  |
| Rectangle 12 | `cta-bg` | Background da seção |
| Vector | `icon-arrow` | `<svg>` ou `<img>` |

### Componentes

| Nome genérico | Nome correto | Componente React |
| --- | --- | --- |
| Component 1 | `btn-primary` | `<Button variant="primary">` |
| Instance | `features-card` | `<Card>` |
| Group 88 | `nav-links` | `<nav>` |

---

## 🔄 Como renomear na prática

O processo é simples mas repetitivo. Na página DEV_EXPORT, abra a hierarquia completa de cada frame no painel de layers clicando nas setas de expansão. Clique duas vezes sobre o nome do layer que deseja renomear. O nome se torna editável. Digite o novo nome em kebab-case e pressione **Enter**.

> 💡 A ordem recomendada é **de fora para dentro**: comece renomeando o frame principal da seção, depois os containers internos, depois os elementos individuais. Isso ajuda a manter o padrão do prefixo de seção consistente conforme você avança na hierarquia.
> 

---

## ⚠️ Nomes que o prompt proíbe

Esses tipos de nomes **nunca devem existir** na DEV_EXPORT quando a renomeação estiver concluída:

| Tipo | Exemplos proibidos | Por quê |
| --- | --- | --- |
| Nomes automáticos do Figma | `Frame 1`, `Group 499`, `Rectangle 96` | Geram classes CSS sem significado |
| Nomes genéricos | `div1`, `container2`, `text-block` | Não indicam seção nem função |
| Nomes com números do Figma | `Frame 427318283` | Impossível de manter no código |
| CamelCase ou PascalCase | `HeroSection`, `featureCard` | O padrão CSS é kebab-case |
| Nomes em inglês inconsistente | `secao-titulo`, misturando pt/en | Manter consistência em um idioma |

---

## ✅ Verificação antes de prosseguir

| Verificação |  |
| --- | --- |
| Nenhum layer com nome automático do Figma na DEV_EXPORT? | ⬜ |
| Todos os nomes estão em kebab-case? | ⬜ |
| Cada nome indica a seção e a função do elemento? | ⬜ |
| Elementos decorativos nomeados como tal (overlay, bg, icon)? | ⬜ |
| Consistência de idioma em todos os nomes? | ⬜ |

---

### ✅ Resultado da Fase 4

Todos os layers da DEV_EXPORT possuem nomes semânticos em kebab-case que comunicam claramente à IA o que cada elemento é e qual sua função no design. Quando o MCP enviar a hierarquia para o Claude Code, cada nome será traduzido diretamente para uma classe CSS descritiva e um elemento HTML semântico, sem adivinhação.

---

# 🧩 FASE 5 — Componentização

### 🎯 Objetivo

Converter elementos repetidos em componentes master com variantes na página COMPONENTS, e usar instâncias na DEV_EXPORT, garantindo que o Claude Code gere componentes React reutilizáveis com props e classes CSS condicionais.

---

- **Conceitos fundamentais**
    
    Antes de criar qualquer coisa, estes três conceitos precisam estar absolutamente claros.
    
    ### ◆ Componente Master (o molde)
    
    É o elemento original, a fonte de verdade. Ele é criado **uma vez** na página COMPONENTS e nunca é usado diretamente no design final. No painel de layers aparece com o ícone de **losango preenchido (◆)**. Quando você altera o componente master, todas as instâncias vinculadas a ele se atualizam automaticamente. No código React, o componente master equivale ao arquivo do componente (`Card.jsx`, `Button.jsx`).
    
    ### ◇ Instância (a peça fabricada)
    
    É uma cópia vinculada ao componente master. Ela herda toda a estrutura e estilo do master, mas permite que você altere o **conteúdo** (texto, ícone) sem desvincular do original. Essa alteração de conteúdo se chama **override**. No painel de layers aparece com o ícone de **losango vazado (◇)**. Na DEV_EXPORT, você usa **apenas instâncias**, nunca componentes master diretamente. No código React, cada instância equivale a um uso do componente com props diferentes: `<Card title="Genética" icon="dna" />`.
    
    ### 🔀 Variante (as configurações do molde)
    
    É uma versão pré-definida do componente master que muda propriedades visuais como cor, tamanho, direção ou estado. As variantes são criadas **dentro do componente master** e formam o que o Figma chama de **Component Set** (a caixa roxa que agrupa todas as versões). A instância não "pertence" a uma variante — ela tem **acesso a todas** as variantes e você escolhe qual está ativa via dropdown no painel da direita. No código React, cada variante equivale a uma prop que muda a classe CSS: `<Card variant="default" />` ou `<Card variant="hover" />`.
    
    ---
    
    ## Relação entre os três conceitos
    
    O componente master contém as variantes. A instância é conectada ao componente master inteiro, não a uma variante específica. Quando a variante muda (por exemplo, de `default` para `hover`), o Figma troca apenas as propriedades que são **diferentes entre as variantes** (cor de fundo, borda, opacidade). Os **overrides** de conteúdo que você editou na instância (texto, ícone) permanecem intactos, porque são uma camada independente. Variante controla **estilo**. Override controla **conteúdo**. São camadas separadas que não interferem uma na outra.
    
    ---
    

## Quando criar um componente vs variante vs componente separado

A decisão depende de uma única pergunta:

**"Esses elementos têm a mesma estrutura interna (mesmos tipos de elementos na mesma disposição)?"**

| Resposta | O que fazer |
| --- | --- |
| Sim, mesma estrutura, só muda conteúdo (texto/ícone) | **1 componente**, cada uso é uma **instância** com override de conteúdo |
| Sim, mesma estrutura, mas muda cor/estado/tamanho | **1 componente** com **variantes** para cada diferença visual |
| Não, estrutura interna diferente | **Componentes separados** |

---

## 📋 Exemplo prático:

Uma seção tem 5 cards com estrutura idêntica (ícone + texto), cada um com conteúdo diferente. Todos têm **dois níveis de interação**:

#### 🎯 Nível 1: Card pequeno (problema)

- **Estrutura**: ícone + título + descrição breve
- **Variante default (State=default)**: fundo branco, texto escuro
- **Variante hover (State=hover)**: fundo verde, texto escuro (apenas a cor de fundo muda)
- **Ação ao clicar**: abre um modal overlay (componente separado) com o conteúdo expandido

#### 📱 Nível 2: Modal azul grande (overlay)

- **Estrutura**: card grande com título expandido + descrição longa + citação + minicards
- **Por que é componente separado**: estrutura interna completamente diferente do card pequeno
- **Ação de fechamento**: fechar o modal volta para a seção com o card pequeno
- **Número de instâncias**: 5 modais (um para cada card pequeno)

![image.png](image.png)

**Decisão:**

- **1 componente para o card pequeno** com 2 variantes (default e hover)
- **1 componente separado para o modal** (sem variantes, apenas 1 estado)
- **5 instâncias do card** (cada uma vinculada ao seu modal correspondente)
- **5 instâncias do modal** (cada uma com conteúdo específico via override)

## Passo a passo na ordem correta

---

### Antes de tudo: por que ícones precisam de tratamento especial

Texto e ícone funcionam de formas diferentes no Figma quando você quer personalizá-los em cada instância.

**Texto** é simples: você clica duplo na instância, seleciona o texto, e digita o novo conteúdo. O Figma entende nativamente que texto é editável e permite o override sem nenhuma complicação. Quando a variante muda de `default` para `hover`, o texto que você editou permanece.

**Ícone** é diferente: um ícone é composto de vários vetores agrupados. Se você simplesmente tentar arrastar um ícone diferente para dentro da instância, o Figma não faz a "leitura" correta — ele coloca o ícone por cima do elemento inteiro sem respeitar o auto layout nem carregar as configurações da instância. É como tentar encaixar uma peça de outro brinquedo no LEGO — visualmente cabe, mas não se conecta.

### 1️⃣ Criar os componentes de ícone

Essa etapa é feita **antes** de criar as instâncias do card na DEV_EXPORT. Todos os ícones que serão usados nos cards precisam existir como componentes na página COMPONENTS.

Como estruturar cada componente de ícone:

Cada ícone deve ser um **Grupo** (não Frame) transformado em componente. Grupo porque o ícone é apenas um agrupamento de vetores sem necessidade de espaço definido com limites próprios.

![image.png](image%201.png)

![image.png](image%202.png)

![image.png](image%203.png)

A estrutura é esta:

`icon-dna (Componente Master — Grupo)
├── Vector 1
├── Vector 2
└── Vector 3`

### Como nomear os ícones

![image.png](image%204.png)

Use o nome baseado no **que o ícone representa visualmente**, não no contexto de uso. Isso permite reutilizar o mesmo ícone em diferentes seções do site. O padrão é `icon-[nome-descritivo]` em kebab-case.

![image.png](image%205.png)

> 💡 Quando o Claude Code lê esses componentes, ele gera imports como `import IconMicroscope from '@/assets/icons/IconMicroscope'`. Se o nome for contextual (como `icon-problema-pesquisa`), o código gerado fica confuso e não reutilizável.
> 

[Passo a passo para criar cada componente de ícone](https://www.notion.so/Passo-a-passo-para-criar-cada-componente-de-cone-325345c7648e8014b29fe571428fbc8f?pvs=21)

### Como criar o componente de caixa de ícones

Primeiro, você cria o frame do tamanho desejado e coloca a instância do componente de ícone criado previamente dentro dele (arrastando do painel Assets). Esse frame com o ícone dentro é o `problem-card-icon`.

![image.png](image%206.png)

![image.png](image%207.png)

![image.png](image%208.png)

**REGRA IMPORTANTE:** **aplique auto layout mesmo quando tiver um único elemento dentro**, especificamente nos casos onde o elemento precisa ser centralizado e você quer que o código use `display: flex`.

Use **Position (sem auto layout)** somente quando o frame contém elementos em **camadas sobrepostas** (um em cima do outro, como imagem + overlay + conteúdo). Nesses casos, o Claude Code deve gerar `position: absolute/relative`.

Use **auto layout** quando o frame contém elementos que precisam ser **organizados ou centralizados**, mesmo que seja um único elemento. Nesses casos, o Claude Code deve gerar `display: flex` com as propriedades de alinhamento.

![image.png](image%209.png)

![image.png](image%2010.png)

Na primeira imagem, quando você aplicou auto layout no frame `problem-card-icon`, o Figma mudou o comportamento de dimensionamento do frame para **"Hug contents"** (58.22 Hug × 59.46 Hug). Isso significa que o frame encolheu para abraçar o conteúdo — ele ficou do tamanho exato do ícone em vez de manter o tamanho original. O frame "abraçou" o ícone e perdeu o espaço ao redor que existia antes.

Agora você precisa corrigir isso. No painel da direita, na seção de auto layout onde aparecem as dimensões, você vai ver que tanto o **W** (largura) quanto o **H** (altura) estão com a opção **"Hug"** selecionada. Clique no dropdown ao lado do valor de **W** e mude de **"Hug"** para **"Fixed"**. Digite o valor original (67). Faça o mesmo para o **H** — mude de **"Hug"** para **"Fixed"** e digite 67. 
Agora configure o alinhamento. Na seção de auto layout do painel da direita, selecione alinhamento **center horizontal** e **center vertical**. O ícone vai se centralizar dentro do frame de 67x67

![image.png](image%2011.png)

![image.png](image%2012.png)

![image.png](image%2013.png)

- **PASSO A PASSO PARA VERIFICAÇÃO DO ÍCONE**
    
    **PASSO 1 — Verifique o que está dentro do problem-card-icon.**
    
    Clique no `problem-card-icon` no painel de layers. Depois clique duplo para entrar dentro dele e selecionar o que está dentro. Olhe no painel de layers: se aparecer um **losango vazado (◇)** com o nome de um componente (como `icon-microscope`), já é uma instância e você pode pular para o PASSO 4. Se aparecer **Group**, **Vector**, ou qualquer outra coisa sem o losango, continue no PASSO 2.
    
    ---
    
    **PASSO 2 — Limpe o conteúdo atual do problem-card-icon.**
    
    Selecione tudo que está dentro do `problem-card-icon` (os vetores, grupos, o que tiver). Delete tudo. O frame `problem-card-icon` vai ficar vazio — apenas o frame de 67x67 com o fundo circular azul escuro, sem nada dentro.
    
    ---
    
    **PASSO 3 — Coloque uma instância do componente de ícone dentro.**
    
    Abra o painel **Assets** (atalho **Alt+I**). Na barra de busca do painel Assets, digite o nome do componente de ícone que você quer como padrão (por exemplo, `icon-microscope` ou `icon-dna` — o que você criou na etapa 1). O componente vai aparecer na lista. Arraste ele do painel Assets para dentro do frame `problem-card-icon` no canvas.
    
    Quando você soltar, uma **instância** do componente de ícone aparece dentro do frame. No painel de layers, você vai ver o losango vazado (◇) com o nome do componente. Isso confirma que é uma instância, não vetores soltos.
    
    Se o ícone não ficou centralizado, verifique que o auto layout do `problem-card-icon` está configurado com center/center e dimensões Fixed 67x67 (como fizemos antes).
    

**PASSO 4 — Confirme a estrutura antes de seguir:**

![image.png](image%2014.png)

**PASSO 5 — Selecionar o** `problem-card-icon`e o `problem-card-text`e dar auto layout (SHIFT+A). Nomear como `problem-card-content.`

![image.png](image%2015.png)

![image.png](image%2016.png)

**PASSO 6 — Criar o** `problem-card`e com as dimensões e característica visuais do card.

![image.png](image%2017.png)

**PASSO 7 — Inserir o** `problem-card-content` dentro do `problem-card` . 

**Detalhe:** o `problem-card` será transformado em componente master, com o ícone sendo uma instância de componente dentro do `problem-card-content`, pronto para receber variantes e depois ser replicado como instâncias na DEV_EXPORT.

![image.png](image%2018.png)

**PASSO 7 — Anotar as medidas originais do** `problem-card` e aplicar auto-layout no `problem-card` . Novamente observamos o comportamento que aconteceu com a criação do ícone (**Hug contents). Aplicar manualmente as medidas originais.**

![image.png](image%2019.png)

![image.png](image%2020.png)

![image.png](image%2021.png)

**PASSO 8 — Selecionar** `problem-card` e aplicar o alinhamento no auto-layout para centralizar o `problem-card-content` .

![image.png](image%2022.png)

**PASSO 8 —** Com o `problem-card`selecionado, pressione **Ctrl+Alt+K** (ou clique com botão direito → **Create component**).

Recorte o componente para a página **COMPONENTS**. 

**Por que a ordem importa:** se você transformar o card em componente master antes de ter o ícone como instância de um outro componente, o Instance swap (que é a forma de trocar o ícone em cada instância) não vai funcionar, porque o Instance swap só funciona quando existe uma instância de componente para ser trocada. É como tentar trocar o quadro na moldura — a moldura precisa ter um quadro pendurado nela, não uma pintura colada na parede.

Antes de transformar o card em componente, confira que a hierarquia no painel de layers está exatamente assim:

```jsx
problem-card (Frame — cor de fundo branca, borda)
│
└── problem-card-content (Frame — auto layout vertical)
    │
    ├── problem-card-icon (Frame 67x67 — fundo circular azul)
    │   └── ◇ icon-microscope (ou icon-dna — instância de componente)
    │
    └── problem-card-text (Text)
        └── "Base genética inadequada"
```

Os pontos críticos para verificar são: o ícone dentro do `problem-card-icon` **deve ter o losango vazado (◇)**, confirmando que é uma instância de componente. Se tiver qualquer outro ícone (frame, group, vector), o Instance swap não vai funcionar depois.

![image.png](image%2023.png)

O ícone no painel de layers muda para ◆ (losango preenchido). O card agora é um componente master.

---

### 2️⃣ Adicionar a propriedade de variante

Com o componente master selecionado, olhe no painel da direita na seção **Properties**. Clique em **"+ Add new property"** e selecione **"Variant"**.

![image.png](image%2024.png)

O Figma cria a caixa roxa ao redor do card, mas **neste momento você ainda tem apenas 1 variante** (a padrão). A caixa roxa é só o container que agrupa variantes — não duplica automaticamente.

![image.png](image%2025.png)

Para criar a **segunda variante**, clique no botão **"+ Add variant"** (aquele botão com o ícone de mais embaixo da caixa roxa, como aparece na sua imagem).

![image.png](image%2026.png)

Agora sim o Figma duplica o card. Você terá 2 cards dentro da caixa roxa.

---

### 3️⃣ Renomear a propriedade e os valores

Selecione o card original e no painel da direita, o Figma criou uma propriedade com nome genérico (como "Property 1"). Clique duplo no nome e renomeie para **State**. O valor da propriedade renomeie para Default. Esse será o estado padrão.

![image.png](image%2027.png)

![image.png](image%2028.png)

Selecione a variante criada e no painel da direita, encontre o valor da propriedade e renomeie para Default. Esse será o estado variante.

Os dois cards dentro da caixa roxa agora representam dois valores dessa propriedade, ou seja, estados diferentes. Para renomeá-los:

| Card | propriedade | Valor da propriedade |
| --- | --- | --- |
| O primeiro card (original, fundo branco) | State | `default` |
| O segundo card (duplicado, será modificado) | State | `hover` |

![image.png](image%2029.png)

![image.png](image%2030.png)

**Como renomear:**

1. Selecione o **primeiro card** (de cima)
2. No painel da direita, na seção **"Current variant"**, você verá o dropdown **"State"** com o valor atual
3. Clique no valor e mude para **`default`** (se ainda não estiver assim)
4. Selecione o **segundo card** (de baixo)
5. No mesmo dropdown, mude o valor para **`hover`**

Pronto. Agora cada card tem seu valor identificado na propriedade State.

---

### 4️⃣ Customizar a variante hover

Selecione o **segundo card** dentro da caixa roxa (o `State=hover`). Altere as propriedades visuais que mudam no hover: mude a cor de fundo para verde e faça qualquer outro ajuste visual (cor do texto, cor do ícone, borda, efeito) que o hover deve ter.

> 💡 Mude **apenas o estilo visual**, não altere a estrutura (não remova nem adicione elementos). A estrutura deve ser idêntica entre as variantes. Se você remover um elemento em uma variante, ele desaparece da outra também.
> 

---

![image.png](image%2031.png)

![image.png](image%2032.png)

#### O problema

Quando o card hover tem +10px de largura e +10px de altura, existem duas formas de isso acontecer visualmente. A primeira é o card realmente aumentar de tamanho no layout, o que empurra os cards vizinhos para os lados e para baixo, reorganizando a seção inteira. A segunda é o card crescer visualmente por cima dos vizinhos, como um zoom, sem afetar a posição de nenhum outro elemento. Vamos fazer a segunda opção.

Na variante `State=hover`, você **não deve** aumentar o W e H do frame `problem-card` de 293x180 para 303x190. Se fizer isso, o Figma vai entender que o card é fisicamente maior, e o Claude Code vai gerar um width/height maior no CSS, o que empurraria os vizinhos.

Em vez disso, mantenha as **mesmas dimensões** (293x180) na variante hover. As mudanças visuais que você aplica na variante hover devem ser apenas a cor de fundo verde, a sombra aumentada, e a opacidade da sombra de 25% para 50%.

O efeito de "crescer por cima" será especificado **no prompt do Claude Code**, não no Figma, porque o Figma não tem como representar `transform: scale()` visualmente de forma que o MCP leia corretamente.

[instrução completa para adicionar ao [CLAUDE.md](http://claude.md/)](https://www.notion.so/instru-o-completa-para-adicionar-ao-CLAUDE-md-328345c7648e80e2a01cf45b563c0335?pvs=21)

Criamos a **seção 15 do CLAUDE.md** com regras de hover e interação que cobrem:

- **15.1** — Variantes do Figma (`State=hover`, `active`, `disabled`) devem virar pseudo-classes CSS (`:hover`, `:active`, `:disabled`), não classes controladas por JavaScript
- **15.2** — Crescimento no hover usa `transform: scale()` + `z-index`, nunca width/height
- **15.3** — Toda mudança de estado precisa de `transition` suave, definida no estado base
- **15.4** — Sombras do hover são lidas do Figma e traduzidas para `box-shadow`
- **15.5** — Cor de fundo no hover sempre usa variável CSS, nunca hex
- **15.6** — Referência do que o MCP envia (cor, sombra, opacidade) vs o que precisa estar no prompt (transform, z-index, transition, mapeamento State→:hover)
- 

### 5️⃣ Puxar instâncias para a DEV_EXPORT

Navegue para a página **DEV_EXPORT**. Abra o painel de **Assets** (atalho: **Alt+I** ou menu Window → Assets). Procure o componente `problem-card`. Arraste-o para a seção correspondente na DEV_EXPORT. Repita quantas **vezes for necessário**, uma para cada card da seção.

Todas as instâncias nascem idênticas, mostrando a variante `State=default`.

![image.png](image%2033.png)

![image.png](image%2034.png)

---

**IMPORTANTE:**

**No Figma:** um componente master do card com um ícone componentizado dentro. 

Na DEV_EXPORT, 5 instâncias desse card todas com o **mesmo ícone** (o padrão do master). 

A função delas é mostrar ao Claude Code a estrutura do container e o layout do grid, não o conteúdo individual.

**No código:** você troca os ícones e textos manualmente no array de dados, importando os SVGs da pasta de assets. O Instance swap era necessário quando queríamos que o Claude Code lesse o conteúdo diferente de cada card direto do Figma. Como agora você vai preencher esses dados no código, essa etapa no Figma deixa de existir.

Isso simplifica bastante o processo no Figma — elimina a necessidade de componentizar todos os ícones e fazer Instance swap em cada instância. O único ícone que precisa ser componente é o que está dentro do card master para manter a hierarquia correta com o losango (◇).

Caso queira usar instance swap siga os passos seguintes:

[Configuração de instance swap](https://www.notion.so/Configura-o-de-instance-swap-32a345c7648e8015b919d91ee9122559?pvs=21)

## 🖱️Configurar hover no Prototype

A prototipação (interações, transições, overlays) é uma camada separada no Figma e o MCP tem **capacidade limitada** de ler essas configurações — duração, easing, triggers de clique e lógica de overlay não são acessíveis via `get_design_context`.

Por isso, **não configure as interações no Prototype do Figma**. Em vez disso, documente-as no `interactions.md` antes de gerar o código. O Claude Code lê esse arquivo e gera a implementação correta sem depender da prototipagem do Figma.

O fluxo correto é:

1. No Figma: crie as variantes visuais (`State=default`, `State=hover`) — o que o MCP consegue ler
2. No `interactions.md`: especifique o comportamento técnico de cada interação
3. No Claude Code: a skill `/skill-interactions-md` cruza os dois e gera o código completo


[Passo-a-passo](https://www.notion.so/Passo-a-passo-329345c7648e808392e4fd240c67d411?pvs=21)

## 💻O que o Claude Code consegue gerar sozinho

A partir da estrutura que você montou, o Claude Code vai gerar sem problemas o componente React do card com props, o componente React do modal com props, o CSS com `:hover` para a mudança visual do card, e a estrutura HTML/JSX de ambos.

O que ele **não vai gerar automaticamente** é a lógica de abrir/fechar o modal (state management com useState), a animação de entrada/saída do modal (transição, overlay escuro, fade), o comportamento de fechar ao clicar fora, e efeitos de transição específicos (duração, easing, transform scale).

## 🖊️ A solução: documentar no [interactions.md](http://interactions.md/)

Todas as especificações de comportamento interativo — abertura e fechamento de modal,
animações de entrada e saída, overlay, duração, easing, e lógica de estado React —
são documentadas no arquivo `interactions.md` do projeto antes da geração do código.

Esse arquivo é a fonte única de verdade para interações. O Claude Code lê o
`interactions.md` no momento de gerar cada componente e já recebe todas as
especificações necessárias sem depender de instruções no prompt ou de regras
genéricas no `claude.md`.

O `interactions.md` é construído antes da geração de código, usando a
skill `/skill-interactions-md` para seções complexas ou documentação direta
por voz para interações simples como hover e mudança de cor.

## 6️⃣ Componente do Modal

O processo de componentização do modal segue a mesma lógica do `problem-card`:

### O que deve ser feito

**1. Componentes de ícone dos minicards** — Cada ícone dos minicards internos do modal foi agrupado, transformado em componente e nomeado em kebab-case na página COMPONENTS. Mesma lógica dos ícones do problem-card.

**2. Componente `modal-minicard`** — Estrutura: instância de ícone (◇) + texto, dentro de um `modal-minicard-content` com auto layout vertical e gap **Auto** (para texto ficar no topo e ícone na base, independente da quantidade de linhas). Componentizado com Ctrl+Alt+K.

**3. Estrutura do modal** — O `problem-modal` tem duas camadas no nível raiz (sem auto layout): linha decorativa + `problem-modal-content`. O content é dividido em duas colunas (auto layout horizontal): coluna esquerda (título + descrição) e coluna direita (5 instâncias do `modal-minicard` + citação).

```
problem-modal (Frame — fundo azul escuro, SEM auto layout)
│
├── modal-decoration-line (elemento decorativo)
│
└── problem-modal-content (Frame — auto layout horizontal)
    │
    ├── problem-modal-box-left (Frame — auto layout vertical)
    │   ├── problem-modal-title (Text)
    │   └── problem-modal-description (Text)
    │
    └── problem-modal-box-right (Frame — auto layout vertical)
        ├── problem-modal-minicards (Frame — auto layout horizontal)
        │   └── 5× ◇ modal-minicard (instâncias com ícones e textos únicos)
        │
        └── problem-modal-quote (Text)
```

**4. Componentização e instâncias** — O modal foi componentizado (Ctrl+Alt+K) e movido para COMPONENTS. 5 instâncias foram criadas na DEV_EXPORT, cada uma personalizada com textos via override e ícones dos minicards via Instance swap.

**5. Interações** — Documentadas no arquivo `interactions.md` (não no Prototype do Figma). O `interactions.md` é a fonte única de verdade para comportamento técnico de interações neste projeto: duração, easing, lógica de estado React, animações de entrada e saída. Para este componente, as especificações incluem hover do card (0.5s ease), abertura do modal correspondente ao clicar (slide de cima, centralizado, backdrop leve) e fechamento com clique fora ou ESC. Esse arquivo é construído antes da geração de código — usando o comando `/documentar-interacao` durante o design ou a skill `/skill-interactions-md` antes de gerar o código.

# 📋FASE 6 — Assets e Imagens

## 🎯 Objetivo

Garantir que todos os assets do projeto — fotos, imagens de fundo e ícones SVG — estejam nomeados e organizados no Figma seguindo as convenções do pipeline, para que o MCP baixe os arquivos corretamente e o Claude Code gere os imports sem erros.

## Por que esta fase é crítica

O MCP usa o nome do layer como nome do arquivo físico que ele baixa para o projeto. Isso significa que o nome que você dá ao layer no Figma é literalmente o nome do arquivo no código. Se o layer de uma imagem de fundo se chama hero-bg-image, o arquivo que chega na pasta do projeto se chamará hero-bg-image.png e o código gerado importará de assets/images/hero-bg-image.webp. Não existe separação entre esses dois momentos — a nomenclatura do Figma e a nomenclatura do código são a mesma coisa.

Isso conecta diretamente esta fase à Fase 4 (Renomeação de Layers). Os nomes definidos lá não são apenas organização visual — eles determinam os nomes dos arquivos que existirão no projeto.

## Como o MCP lida com assets

O servidor desktop do Figma MCP oferece três modos de lidar com imagens. O modo correto para este pipeline é o Download.

| **Modo** | **O que faz** | **Quando usar** |
| --- | --- | --- |
| Download | Baixa o arquivo físico diretamente na pasta do projeto | Este pipeline — sempre |
| Local server | Referencia a imagem pelo endereço localhost do Figma desktop | Apenas para testes rápidos |
| Placeholder | Substitui a imagem por um placeholder genérico | Quando os assets já existem no projeto |

⚠️  A opção Download deve estar ativada nas configurações do MCP antes de iniciar qualquer geração de código. Sem ela, o Claude Code receberá endereços localhost no lugar de arquivos reais e o projeto não funcionará fora da máquina local.

## Formato dos arquivos

O MCP baixa as imagens em PNG. Ele não converte formatos. A conversão para webP é uma etapa separada, realizada pelo Claude Code via script no terminal após o download, antes de você abrir o projeto no navegador. O código gerado já referenciará os arquivos com extensão .webp, pois o CLAUDE.md instrui o Claude Code a usar webP como formato padrão para imagens.

| **Tipo de asset** | **Sai do Figma como** | **Formato final no projeto** | **Destino no projeto** |
| --- | --- | --- | --- |
| Fotos e imagens de fundo | PNG | webP | src/assets/images/ |
| Ícones | SVG | SVG (sem conversão) | src/assets/icons/ |
| Logos | SVG | SVG (sem conversão) | public/ |
| Favicon | PNG | webP ou .ico | public/ |

💡  SVGs não precisam de conversão de formato. Eles já são o formato ideal para ícones e logos. A única otimização recomendada para SVGs é a limpeza de paths desnecessários via SVGO, que também pode ser executada pelo Claude Code no terminal.

## 🔑 Regra de nomenclatura

Todos os layers de imagem e ícone seguem o mesmo padrão kebab-case já estabelecido na Fase 4. Não existe uma convenção separada para assets — o nome do layer é o nome do arquivo.

| **Nome do layer no Figma** | **Arquivo gerado no projeto** | **Import no código** |
| --- | --- | --- |
| hero-bg-image | hero-bg-image.webp | assets/images/hero-bg-image.webp |
| features-photo | features-photo.webp | assets/images/features-photo.webp |
| icon-microscope | icon-microscope.svg | assets/icons/IconMicroscope |
| icon-syringe | icon-syringe.svg | assets/icons/IconSyringe |
| logo-primary | logo-primary.svg | public/logo-primary.svg |

💡  O Claude Code converte automaticamente o nome do arquivo SVG de kebab-case para PascalCase quando cria o componente React. Portanto icon-microscope.svg vira o componente IconMicroscope no JSX. Isso é comportamento padrão do React e não requer nenhuma ação sua.

## Ícones na página COMPONENTS

Os ícones estão organizados como componentes master na página COMPONENTS, seguindo a estrutura definida na Fase 5. Quando o MCP lê um ícone componentizado, ele o exporta como SVG mantendo o nome do componente master como nome do arquivo. Por isso a nomenclatura dos componentes de ícone precisa seguir exatamente o padrão icon-[nome-descritivo] em kebab-case, conforme já definido na Fase 5.

Os vetores internos do ícone (os paths SVG) não precisam de nomes especiais — apenas o componente master precisa ter o nome correto. O MCP agrupa os vetores internos e exporta o conjunto como um único arquivo SVG.

## Imagens de fundo e fotos na DEV_EXPORT

As imagens de fundo e fotos estão dentro dos frames da DEV_EXPORT como layers nomeados em kebab-case, seguindo a hierarquia definida na Fase 4. O MCP lê o nome desse layer, baixa o conteúdo da imagem e cria o arquivo PNG na pasta correspondente do projeto.

O layer precisa estar diretamente dentro do frame da seção, no nível correto da hierarquia, para que o MCP o identifique como asset a ser baixado. Imagens enterradas em grupos aninhados sem nome podem não ser identificadas corretamente.

⚠️  Layers de imagem com nomes automáticos do Figma (como Image, Rectangle 96 ou Frame 427318283) serão baixados com esses nomes no projeto, gerando arquivos como rectangle-96.png que o código não consegue referenciar de forma consistente. Todos os layers de imagem devem estar renomeados antes de qualquer geração de código.

## Conversão para webP

Após o MCP baixar as imagens em PNG para a pasta src/assets/images/, a conversão para webP é feita pelo Claude Code no terminal. Você solicita a conversão em linguagem natural e ele executa o script automaticamente, sem nenhuma ação manual sua.

A instrução ao Claude Code pode ser:

*"Converta todos os arquivos PNG da pasta src/assets/images/ para webP e delete os originais."*

O Claude Code usa a biblioteca sharp (Node.js) para fazer a conversão. O CLAUDE.md já instrui que imagens devem usar o formato webP, portanto o código gerado já referenciará os arquivos com extensão .webp desde o início.

## Otimização de SVGs

SVGs exportados do Figma frequentemente contêm metadados, IDs automáticos e paths redundantes que aumentam o tamanho do arquivo sem benefício visual. A otimização é feita via SVGO, também executada pelo Claude Code no terminal.

A instrução ao Claude Code pode ser:

*"Otimize todos os arquivos SVG da pasta src/assets/icons/ usando SVGO."*

## ✅ Verificação antes de prosseguir

| **Verificação** |  |
| --- | --- |
| Todos os layers de imagem na DEV_EXPORT têm nomes em kebab-case? | ⬜ |
| Nenhum layer de imagem tem nome automático do Figma (Image, Rectangle, Frame + número)? | ⬜ |
| Todos os componentes de ícone na página COMPONENTS seguem o padrão icon-[nome]? | ⬜ |
| A opção Download está ativada nas configurações do MCP desktop? | ⬜ |
| O CLAUDE.md instrui o uso de webP para imagens? | ⬜ |

## ✅ Resultado da Fase 6

Todos os assets do projeto estão nomeados corretamente no Figma e prontos para serem baixados pelo MCP. Quando o Claude Code iniciar a geração de código, o MCP fará o download automático dos arquivos para as pastas corretas do projeto. Uma instrução posterior ao Claude Code converte as imagens para webP e otimiza os SVGs. O resultado é um projeto com todos os assets no formato correto, nas pastas corretas, com imports funcionais no código gerado.