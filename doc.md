# Guia Manual: Fluxo Figma-to-Code Cannabreed

Este documento serve como guia prático e repositório de decisões técnicas tomadas para a traduzir layouts do Figma em código Next.js + CSS Puro de forma ágil, fiel e sem retrabalhos.

---

## 🚀 Passo a Passo para Novas Seções (Sua Rotina)

Siga este fluxo exato para cada nova seção que desejar que a Inteligência Artificial desenvolva:

### Passo 1 — Exportar do Figma
Ao exportar os elementos visuais do Figma para a pasta local, configure os seguintes parâmetros:
1. **O Layout Geral (`Main.svg`):**
   * Selecione o Frame completo da seção (ex: `Features`, `Footer`, etc.).
   * Clique em **Export** e escolha o formato **SVG**.
   * **CRÍTICO:** Clique no menu de três pontos ao lado da exportação e certifique-se de que a opção **"Outline Text"** está **DESMARCADA**. Isso exporta os textos reais em vez de curvas geométricas, permitindo que a IA extraia os títulos e copys de forma 100% automática.
2. **Assets Individuais (Imagens, ícones, overlays):**
   * Exporte as fotos como PNG, JPG ou WebP.
   * Exporte os ícones ou gradientes vetoriais de suporte (como os gradientes de legibilidade) como SVG.

### Passo 2 — Criar a Pasta de Importação
Na raiz do projeto, navegue até a pasta `figma_imports/` e crie uma subpasta com o nome da seção em kebab-case:
```text
cannabreed/
└── figma_imports/
    ├── hero/             <-- (Já processado)
    ├── features/         <-- (Exemplo para a próxima seção)
    └── contato/
```

### Passo 3 — Inserir os Arquivos
Coloque todos os assets exportados daquela seção dentro da pasta correspondente (ex: `figma_imports/features/`):
* O arquivo do layout completo renomeado como `Main.svg`.
* Todos os outros SVGs, PNGs e imagens auxiliares daquela seção específica.

### Passo 4 — Chamar a IA no Chat
Com os arquivos no lugar, envie uma mensagem para o assistente de IA solicitando o início da geração:
> *"Criei a pasta figma_imports/[nome-secao] com os assets e o layout sem Outline Text. Utilize o workflow `/processar-secao` para gerar o código."*

---

## 🧠 Decisões Técnicas e Aprendizados Estabelecidos

Abaixo estão listadas as soluções arquiteturais que definimos para resolver problemas comuns de fidelidade visual e compilação:

### 1. Desmarcar "Outline Text" no Figma
* **O Problema:** Inicialmente, os textos vinham como dados geométricos de curva (`<path>`). Era impossível copiar as palavras do XML.
* **A Solução:** Desmarcar "Outline Text" na exportação do Figma faz as frases virem como texto legível no XML (tags `<text>`), permitindo extração automatizada sem erros de digitação e sem atrito.

### 2. O Problema do "Double Crop" em Backgrounds SVGs
* **O Problema:** Copiar as propriedades de crop/size do Figma DevMode (`background-position: -90px -110px` e `background-size: 163% 208%`) e aplicá-las ao SVG de fundo deixava a imagem totalmente desalinhada.
* **A Causa:** O SVG exportado já contém o crop e o posicionamento final embutidos nativamente em sua matriz interna de escala e translação no XML.
* **A Solução:** No CSS, o SVG de fundo deve ser renderizado de forma fluida e natural, usando apenas:
  ```css
  background-position: center;
  background-size: cover;
  ```

### 3. Responsividade de Largura (Evitando Faixas Brancas)
* **O Problema:** Telas maiores que 1512px (largura padrão do layout de design) exibiam faixas brancas nas laterais do site.
* **A Solução:** 
  * O container da seção (`.main`) e o container de background (`.main-background-container`) devem ter sempre `width: 100%` para se estenderem de ponta a ponta na tela.
  * O fallback de `background-color` da seção deve ser a cor primária escura da marca (`var(--color-primary-navy)`) em vez de branco `#FFF`.
  * Apenas o wrapper de conteúdo interno (`.main-content-wrapper`) limita-se a uma largura segura (`max-width: 1200px`) e é centralizado com `margin: 0 auto;`.

### 4. Configuração de Alias de Importação (`jsconfig.json`)
* **O Problema:** O Next.js Turbopack falhava em compilar imports que utilizavam o alias `@/` após a remoção do `tsconfig.json` (TypeScript).
* **A Solução:** Criamos o arquivo `jsconfig.json` na raiz do projeto mapeando `@/*` para `./src/*`. O Next.js resolveu o alias imediatamente e recompilou com sucesso (`✓ Compiled in 335ms`).
