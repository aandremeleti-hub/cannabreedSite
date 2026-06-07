# PROMPT-responsividade-profunda

Use o agente frontend-specialist para aplicar o workflow [aplicar-responsividade-profunda](recipe;file:///c%3A/Users/Andre/Documents/Andr%C3%A9/Antigravity/cannabreed/.agents/workflows/aplicar-responsividade-profunda.md)  no componente [C:\Users\Andre\Documents\André\Antigravity\cannabreed\src\components\layout\AuthoritySection]. Leia e aplique as diretrizes das skills frontend-design, mobile-design e web-design-guidelines durante a execução


# PROMPT-processar-secao

/processar-secao [NOME_DA_SECAO]

Ative os agentes frontend-specialist (para codificação do JSX/CSS e organização de assets) e test-engineer (para auditoria final).

Utilize as seguintes skills locais para orientar o desenvolvimento:
1. frontend-design: Guiar a criação garantindo qualidade visual.
2. frontend-design/ux-psychology: Gerar o relatório de usabilidade de forma embasada.
3. nextjs-react-expert: Otimizar o render e estrutura dos componentes Next.js.
4. react-components: Componentizar corretamente ícones dinâmicos de forma reutilizável.
5. web-design-guidelines: Garantir semântica, foco acessível (:focus-visible), alt e aria-hidden nos ícones.
6. mobile-design, frontend-design, react-components: Garantir responsividade em todos os principais viewports mobile e tablet.
7. clean-code: Garantir um código limpo.
8. seo-fundamentals: Garantir que a seção esteja otimizada para SEO.

Lembre-se de respeitar os design tokens de globals.css e não utilizar Tailwind ou inline styles.


# PROMPT-gerar-código-mcp

/gerar-codigo-mcp [NOME_DA_SECAO]

Plano aprovado. Ative os agentes frontend-specialist (para codificação fiel do JSX/CSS e organização de assets) e test-engineer (para auditoria final).

Utilize as seguintes prioridades e skills locais para orientar o desenvolvimento:
1. FIDELIDADE PIXEL-PERFECT (PRIORIDADE MÁXIMA): O código gerado DEVE ser uma transcrição idêntica ao Figma. Copie dimensões, line-heights, fontes, gaps e paddings EXATAMENTE como lidos.
2. GESTÃO DE TOKENS E VALORES LITERAIS: Tente mapear para tokens do `globals.css`. Se o valor exato do Figma (ex: gap 18px, cor #1A1A1A) NÃO existir no globals.css, É ESTRITAMENTE PROIBIDO ARREDONDAR. Crie variáveis CSS locais no topo do arquivo `.css` do componente (ex: `--local-bg: #1A1A1A; --local-gap: 18px;`) e use-as.
3. frontend-design: Guiar a criação garantindo qualidade visual.
4. frontend-design/ux-psychology: Gerar o relatório de usabilidade de forma embasada.
5. nextjs-react-expert: Otimizar o render e estrutura dos componentes Next.js.
6. react-components: Componentizar corretamente ícones dinâmicos de forma reutilizável.
7. web-design-guidelines: Garantir semântica, foco acessível (:focus-visible), alt e aria-hidden nos ícones.
8. mobile-design, frontend-design, react-components: Garantir responsividade em todos os principais viewports mobile e tablet.
9. clean-code: Garantir um código limpo.
10. seo-fundamentals: Garantir que a seção esteja otimizada para SEO.

Lembre-se de não utilizar Tailwind ou inline styles. As customizações que escapam ao globals.css devem obrigatoriamente usar variáveis CSS locais no próprio componente.

