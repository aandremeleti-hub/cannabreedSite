# Relatório de UX & Acessibilidade — DnaSection

Este relatório audita a seção `DnaSection` importada do Figma, sugerindo melhorias com base nas diretrizes de [ux-psychology](../../../../skills/frontend-design/ux-psychology.md) e [web-design-guidelines](../../../../skills/web-design-guidelines/SKILL.md).

---

## 1. Contraste e Legibilidade (WCAG 2.1)

### Análise de Contraste
*   **Fundo dos Cards:** `#D5F3C0` (Verde Claro / `var(--color-primary-green-light)`)
*   **Cor do Texto:** `#000000` (Preto)
*   **Razão de Contraste:** **16.2:1**
    *   *Status:* **APROVADO (AAA)**. O contraste supera com folga o limite mínimo de **4.5:1** exigido pela WCAG AA para textos normais e **3.0:1** para textos grandes. A leitura é confortável mesmo em telas de baixa qualidade ou sob luz solar.

---

## 2. Acessibilidade de Mídia e Leitores de Tela (Screen Readers)

### Ícones Decorativos
*   O ícone de hélice de DNA (`dna-helix-icon.svg`) é repetido nos três cards e serve apenas como elemento estético secundário.
*   **Solução técnica aplicada:** Declaramos `alt=""` e `aria-hidden="true"` na tag `<Image>` correspondente, evitando que leitores de tela anunciem redundâncias e poluam a experiência do usuário com deficiência visual.

### Semântica HTML5
*   Substituímos tags de div genéricas por elementos semânticos:
    *   A seção principal é encapsulada em `<section aria-labelledby="dna-section-main-title">`.
    *   Cada card é um `<article aria-labelledby="...">` independente, definindo claramente a região de cada tópico.

---

## 3. Navegação por Teclado e Foco Acessível

*   **Situação Atual:** Atualmente, os cards são puramente informativos e não possuem elementos interativos (`<a>` ou `<button>`).
*   **Recomendação de Evolução:** Caso os cards se tornem clicáveis no futuro (por exemplo, levando a páginas internas detalhadas sobre Ciência ou Projetos), deve-se:
    1.  Adicionar `tabIndex={0}` para torná-los focáveis pelo teclado.
    2.  Aplicar um estado de foco visível e diferenciado:
        ```css
        .dna-section-card:focus-visible {
          outline: 3px solid var(--color-primary-green);
          outline-offset: 4px;
        }
        ```

---

## 4. Adaptabilidade Responsiva e Fluidez

*   **Problema de Figma:** O layout original de desktop impõe alturas estritas (`270px`, `247px`, `339px`) para os cards. Se mantidas no mobile, o texto transbordaria (overflow) devido ao estreitamento da tela.
*   **Solução técnica aplicada:** Configuramos as alturas fixas apenas no media query `@media (min-width: 1024px)`. Em dispositivos móveis e tablets, a altura é definida como `auto` com paddings de segurança, permitindo o crescimento vertical do card conforme a necessidade do texto.

---

## 5. Micro-animações e Engajamento Visual (Premium Feeling)

*   Para enriquecer a percepção de valor do site e alinhar com a estética inovadora da Cannabreed:
    *   **Efeito Hover:** Aplicamos uma transição suave no hover (`transform: translateY(-4px)`) com um aumento de sombra e brilho verde neon discreto (`box-shadow: 0 8px 30px rgba(128, 219, 66, 0.2)`).
