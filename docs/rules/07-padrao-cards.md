# Padrão Arquitetural de Cards (Cannabreed)

Este documento estabelece as regras obrigatórias para a componentização e uso de Cards de interface ao longo de todas as seções do projeto.

## 1. Estrutura do Componente
- Todo card deve ser concebido como um **Dumb Component** (Componente Burro), significando que ele não possui lógica de estado ou arrays de dados declarados internamente.
- O componente final deve obrigatoriamente residir em `src/components/cards/[NomeDoCard]/`.
- O nome do componente, do arquivo `.jsx` e da pasta deve seguir a notação **PascalCase** (ex: `CardWhatCannabreedDoes`).
- O CSS deve ser encapsulado estritamente no arquivo local `[NomeDoCard].css`. TODO o CSS visual (relativo unicamente àquele card) deve ser migrado da seção mãe para este arquivo isolado.

## 2. Passagem de Dados (Props)
- Todos os textos, ícones e imagens dinâmicas devem ser recebidos via `props`.
- Propriedades padrão esperadas (adaptáveis conforme a estrutura original do card):
  - `title` (Título principal)
  - `description` (Texto de descrição)
  - `imageSrc` (Background ou Imagem de Capa)
  - `iconSrc` (Ícone de destaque ou detalhe)
  - `onClick` (Ação do botão de Saiba Mais)
- **Importação de Assets:** As imagens rasterizadas (`.png`, `.jpeg`) e ícones (`.svg`) devem ser sempre importados no topo do arquivo da **seção mãe** e repassados ao card via props. O card nunca deve importar assets estáticos rigidamente por conta própria.

## 3. Renderização Dinâmica com .map() e a "Regra de Ouro"
**CRÍTICO:** A renderização de componentes repetitivos obedece a regras estritas de não-repetição (DRY) e preservação arquitetural.

- 🔴 **PROIBIDO:** Declarar componentes semelhantes repetidamente e de forma manual no JSX quando existirem **2 ou mais** instâncias (ex: 2 cards).
- 🟢 **OBRIGATÓRIO:** A partir de 2 componentes semelhantes, adote iteracão limpa com `.map()`. Extraia os conteúdos para um array (`const`) na seção mãe.

**Metodologia de Componentização Limpa no Map (Anti-Quebra e Anti-Poluição):**
- 🔴 **PROIBIDO:** Escrever elementos HTML crus (como `<div>`, `<p>`, `<img>`, ícones) diretamente dentro do retorno do `.map()`. Isso cria código espaguete na seção mãe, dificulta a leitura e impede a reutilização da estrutura do card em outras telas.
- 🔴 **PROIBIDO:** Alterar classes ou remover tags dos containers pais que envolvem os loops. O CSS de responsividade (Grid/Flex) DEVE ficar na seção mãe.
- 🔴 **PROIBIDO:** Adicionar wrappers/tags extras ao redor do retorno do map (ex: `<div>` ou `<>`).
- 🟢 **OBRIGATÓRIO:** O retorno do `.map()` deve ser **única e exclusivamente** a chamada de um componente isolado (`<CardX key={index} {...dados} />`).
- 🟢 **OBRIGATÓRIO:** O componente Dumb (`CardX.jsx`) deve conter internamente todo o HTML extraído da seção mãe e espelhar as classes originais perfeitamente. Migre apenas o CSS interno local (cores, fontes, hover) para o arquivo `.css` do card.

## 4. Preservação Total e Gestão de Assets Sem Quebra
- **Nenhuma alteração visual:** A refatoração visa exclusivamente a arquitetura do código. A interface visual e a responsividade devem permanecer idênticas após a refatoração.
- **Prevenção de links quebrados:** Ao transferir estruturas para componentes em novas pastas, caminhos relativos de imagens tendem a quebrar. Para evitar isso, todas as importações de imagens (`.png`/`.jpeg`) e SVGs devem ser mantidas/centralizadas no arquivo da **seção mãe**. Referencie os assets importados dentro do array de dados do `.map()` e repasse-os via `props`.
