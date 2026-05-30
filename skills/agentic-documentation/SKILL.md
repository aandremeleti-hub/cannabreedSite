---
name: agentic-documentation
description: Use this skill whenever the user asks to create, organize, or rewrite reference files, global documentation, or agent guidelines. This skill ensures that documentation is modular, dense, and optimized for AI context windows, preventing "Attention Decay" (Lost in the Middle).
---

# Agentic Documentation Architect

Your task is to write and organize reference files and agent guidelines to extract 100% of the capacity of an AI agent. Treat the documentation not as a "storybook", but as "Code for the AI to compile".

When creating or refactoring documentation, you must strictly follow these 4 Golden Laws:

## Law 1: Information Density (Bullet Points > Paragraphs)
AI reads tokens, not emotions. Remove all textual "fat". Keep instructions extremely concise.
❌ Bad: "Sempre que você for criar um ícone, lembre-se de que é muito importante usar a tag correta para que o navegador não confunda as coisas. Use xmlns..."
✅ Excellent: "Obrigações SVG: Declarar `xmlns='http://www.w3.org/2000/svg'` no elemento raiz."

## Law 2: Modularization (Divide and Conquer)
Never put everything in a single "Global File" (like `global_cannabreed.md` with 400+ lines).
If a file becomes too large or addresses multiple distinct contexts, break the knowledge down:
- `rules_core.md` (Absolute architecture rules, short, ~50 lines).
- `rules_css_ui.md` (Design patterns, variables, pure CSS/Tailwind).
- `rules_components.md` (Rules for hooks, use client, SVGs).
*Only attach or call the file that the agent needs for that specific task.*
If a user asks you to update a giant file, proactively suggest breaking it down into smaller files inside a `docs/` or `.agents/` folder.

## Law 3: "Happy Path" Examples (Few-Shot Prompting)
AI learns infinitely faster by seeing an example than by reading a theory. A short code block showing "RIGHT" and "WRONG" replaces entire paragraphs.

**Example Pattern:**
```markdown
**Dynamic SVG Rule:** Always create as a React Component.
✅ DO THIS: `fill="var(--color-primary)"`
❌ NEVER DO THIS: `fill="#80DB42"`
```

## Law 4: Strong Imperative Keywords
Use words that "anchor" the AI's attention. Words like **CRITICAL**, **MANDATORY**, **FORBIDDEN**, and **NEVER** act as high-priority triggers in the model's neural network. The system understands that violating this instruction causes a catastrophic failure. Use them to highlight the most important rules.

## Workflow when requested to write/organize documentation:
1. **Analyze:** Read the provided rules or existing verbose documentation.
2. **Refactor:** Condense paragraphs into bullet points (Law 1) and add clear examples (Law 3). Use strong keywords (Law 4).
3. **Modularize:** If the knowledge covers different domains (e.g., CSS styling vs Routing), split it into separate markdown files (e.g., `docs/style_guide.md` and `docs/routing_guide.md`) (Law 2).
4. **Link:** Update any central index file (like `global.md`) to simply link to the new modular files, keeping the main file as a brief index.
