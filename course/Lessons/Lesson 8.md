# Lesson 8 — Vibe Coding (Academic Context):

## <mark style="color:blue;">Generating Applications from Requirements (Without Tests)</mark>

This lesson introduces **Vibe Coding** as an academic technique to explore how far you can go by using requirements as the primary input for building an application — **without focusing on automated tests yet**.

The goal is not to replace Requirements Engineering or Testing.\
The goal is to understand what **changes** when you rely heavily on AI-assisted generation and “prompt-to-code” workflows.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what “Vibe Coding” means in an academic/software engineering context
- Identify what requirements must contain to be usable as input for generation
- Recognize typical risks: ambiguity, missing constraints, hidden assumptions, hallucinated features
- Define guardrails for using AI-assisted coding responsibly
- Produce prompts and constraints that preserve scope and traceability

---

### <mark style="color:blue;">What is Vibe Coding (in this course)?</mark>

In this course, **Vibe Coding** means:

> Using requirements (and related artefacts like use cases and acceptance criteria drafts) as the main driver to generate application code with AI assistance, focusing on rapid iteration and exploration — before formal test automation is introduced.

Key characteristics:

- Fast iteration: generate → run → observe → refine requirements/prompts → regenerate
- Requirements-driven prompts: requirements become “spec”
- Human responsibility: students remain accountable for scope, correctness, and ethics

---

### <mark style="color:blue;">Why are we doing this (academically)?</mark>

#### <mark style="color:$primary;">1) To stress-test requirement quality</mark>

If your requirements are ambiguous, the generated solution will be:

- inconsistent
- incomplete
- wrong in subtle ways

Vibe Coding makes requirement problems visible quickly.

#### <mark style="color:$primary;">2) To learn “specification as product”</mark>

In modern engineering, writing a good spec is a major skill. This lesson reinforces that requirements are not paperwork — they shape outcomes.

#### <mark style="color:$primary;">3) To observe tradeoffs in AI-assisted development</mark>

You will observe:

- what AI does well (boilerplate, scaffolding, repetitive patterns)
- what AI does poorly (domain assumptions, edge cases, constraints, security defaults)

---

### <mark style="color:blue;">What you will generate (and what you will NOT do yet)</mark>

#### <mark style="color:green;">You will generate:</mark>

- a minimal application slice aligned with your scope
- screens / flows / API stubs / data models (depending on your stack)
- a runnable demo version (as a learning artifact)

#### <mark style="color:orange;">You will NOT focus on (yet):</mark>

- automated tests (unit/integration/UI)
- performance optimization
- production-grade security hardening
- full coverage of the backlog

> The lab will be step-by-step. This lesson is just the context and rules.

---

### <mark style="color:blue;">Preconditions: what requirements must include to be usable as input</mark>

To generate an app from requirements, you need at minimum:

- **stable scope** (slice defined)
- **actors/roles** (who uses it)
- **key workflows** (use cases or story list)
- **data entities** (what information exists)
- **constraints** (NFRs, variant rules)
- **acceptance criteria drafts** (what “works” means)

If any of these are missing, the model will guess — and guessing is where errors appear.

---

### <mark style="color:$danger;">Risks and limitations (what can go wrong)</mark>

#### <mark style="color:$primary;">1) Ambiguity becomes “feature drift”</mark>

If requirements are unclear, AI fills gaps with assumptions.

#### <mark style="color:$primary;">2) Hallucinated features</mark>

AI may invent:

- additional roles
- extra screens
- unexpected rules that were never requested.

#### <mark style="color:$primary;">3) Missing constraints leads to unsafe defaults</mark>

If you don’t specify constraints, AI may produce:

- weak validation
- insecure flows
- unrealistic storage/auth choices

#### <mark style="color:$primary;">4) Inconsistent outputs</mark>

Small changes in prompts can produce large changes in code. This makes traceability important.

---

### <mark style="color:blue;">Guardrails (rules for this course)</mark>

#### <mark style="color:$primary;">1) Requirements remain the source of truth</mark>

Generated code must be traceable to:

- requirements (REQ-###)
- use cases (UC-###) or stories (US-###) If a feature exists in code but not in requirements, it must be either:
- removed, or
- added formally (requirement updated with justification)

#### <mark style="color:$primary;">2) Keep scope minimal</mark>

Vibe Coding is most useful when you generate a **small, coherent slice** end-to-end.

#### <mark style="color:$primary;">3) Document the prompts and changes</mark>

You must keep a minimal “prompt log”:

- what you asked the AI to generate
- what constraints you included
- what you changed afterwards and why

#### <mark style="color:$primary;">4) Academic integrity</mark>

- You may use AI assistance, but you must understand and explain your output.
- You must not copy/paste proprietary code or confidential materials.
- You remain responsible for the final deliverable.

---

### <mark style="color:blue;">How this connects to testing later</mark>

Even if we are not writing tests now, Vibe Coding sets up the future:

- acceptance criteria → future test scenarios
- use cases → future BDD scenarios
- NFRs → future validation checks

Later labs will introduce test automation (unit/BDD/UI) to validate what was generated.

---

### <mark style="color:blue;">Summary</mark>

- Vibe Coding is an academic method to explore AI-assisted generation from requirements
- It reveals the quality (or weakness) of your requirements very quickly
- It must be used with scope control, traceability, and documented prompts
- Testing will come later — for now we focus on generation and learning the pitfalls

➡️ Next: **Lab 8** — Step-by-step Vibe Coding (generate an application slice from requirements).
