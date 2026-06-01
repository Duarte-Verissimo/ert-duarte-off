# Lesson 3 — Requirements Engineering Part II

## <mark style="color:blue;">Formal Representation & Structuring (Objectives → CSFs → Requirements + Macro/Mezzo/Micro)</mark>

In this lesson you will learn how to **structure requirements formally** and connect them to business intent using a classic chain:

**Objectives → Critical Success Factors (CSFs) → Requirements**

You will also learn how to represent requirements at different levels of detail (**Macro / Mezzo / Micro**) to avoid both “too vague” and “too detailed”.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what “formal structuring” means in Requirements Engineering
- Define **objectives** and **CSFs** and link them to requirements
- Use **Macro / Mezzo / Micro** levels to manage detail appropriately
- Write requirements in a consistent structure (ID, title, description, key fields)
- Avoid implementation leakage (“what” vs “how”)

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="107" align="right">Section</th><th>Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why formal structuring matters</td><td>Consistency + traceability</td></tr><tr><td align="right">2</td><td>Objectives</td><td>Outcome-driven statements</td></tr><tr><td align="right">3</td><td>CSFs (Critical Success Factors)</td><td>“What must go right”</td></tr><tr><td align="right">4</td><td>Linking chain</td><td>Objective → CSF → Requirement</td></tr><tr><td align="right">5</td><td>Macro / Mezzo / Micro</td><td>Right level of detail</td></tr><tr><td align="right">6</td><td>Writing format</td><td>Stable IDs + clear requirement text</td></tr><tr><td align="right">7</td><td>Common pitfalls</td><td>Avoid ambiguity and “how”</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Why formal structuring matters</mark>

After elicitation, teams often have:

- raw notes, lists, and opinions
- mixed statements (goals, solutions, constraints, requirements)

Formal structuring helps you:

- reduce ambiguity
- keep requirements consistent across the team
- justify requirements (why they exist)
- enable traceability to acceptance criteria and tests later

---

### <mark style="color:blue;">2) Objectives (what outcomes we want)</mark>

An objective is an **outcome** the product/project must achieve.

Good objectives are:

- outcome-focused (not feature-focused)
- measurable when possible
- linked to stakeholders

Examples:

- “Reduce onboarding risk by ensuring critical information is collected before go-live.”
- “Increase operational transparency with consistent, evidence-based data.”

**Bad objective (feature disguised as objective):**

- “Build a dashboard.”\
  This is a solution direction; the objective is the outcome behind it.

---

### <mark style="color:blue;">3) Critical Success Factors (CSFs) — what must go right</mark>

CSFs are conditions that must be true for objectives to be achieved.

A CSF should be:

- specific and checkable
- linked to one objective (usually)
- not an implementation detail

Examples:

- “Critical continuity information is complete and validated.”
- “Stakeholders can identify missing information and responsible owners.”
- “Operational decisions can be justified with traceable evidence.”

---

### <mark style="color:blue;">4) The chain: Objectives → CSFs → Requirements</mark>

A practical way to keep requirements meaningful is to explicitly connect them:

- Each **Objective** is supported by one or more **CSFs**
- Each **CSF** is supported by multiple **Requirements**
- Each **Requirement** should be traceable back to an Objective and a CSF

#### <mark style="color:$primary;">Mini-example</mark>

**Objective:** Improve decision-making with reliable data\
**CSF:** Data is consistent, complete, and current\
**Requirement:** “The system shall record evidence metadata (source/owner/freshness) for collected information.”

This gives you:

- a justification (“why do we need it?”)
- a validation focus (“how do we know CSF is supported?”)

---

### <mark style="color:blue;">5) Different levels of representation: Macro / Mezzo / Micro</mark>

These levels help you decide how detailed your requirements should be.

#### <mark style="color:$primary;">Macro (why / high-level scope)</mark>

Focus: outcomes and broad capabilities\
Examples:

- “Ensure governance visibility for the transition process.”
- “Support operational readiness before go-live.”

Macro is useful for aligning scope and avoiding random features.

---

#### <mark style="color:$primary;">Mezzo (what / feature-level)</mark>

Focus: system behaviors and workflows\
Examples:

- “Allow capturing intake answers with stakeholder ownership.”
- “Allow filtering and reviewing missing critical information.”

Mezzo is where most functional requirements live early on.

---

#### <mark style="color:$primary;">Micro (rule-level / verification detail)</mark>

Focus: validation rules, constraints, and measurable criteria\
Examples:

- “Freshness must be recorded as a date; flag items older than 90 days.”
- “Only users with role X can edit evidence fields.”

Micro level is essential when it improves **testability** or prevents ambiguity.

**Rule of thumb:** Start Macro + Mezzo first; add Micro only when it increases clarity and verifiability.

---

### <mark style="color:blue;">6) A consistent writing structure for requirements</mark>

A requirement should be written consistently so everyone reads it the same way.

Minimum fields you should include:

- **ID:** `REQ-001` (stable, unique)
- **Title:** short and descriptive
- **Type:** FR / NFR / Constraint / Business rule
- **Priority:** H / M / L
- **Stakeholder:** who needs it / who benefits
- **Description:** “The system shall …” (what, not how)
- **Objective + CSF link:** why it exists
- **Acceptance criteria (draft):** 2–4 bullets (verifiable)

#### <mark style="color:$primary;">Example</mark>

```
REQ-001 — Evidence metadata for answers
Type: FR
Priority: H
Stakeholder: Transition Lead
Objective: OBJ-1 Improve decision-making
CSF: CSF-1 Reliable and current information

Description:
The system shall allow recording evidence metadata (source, owner, freshness date) for each collected answer.

Draft acceptance criteria:
- An answer can store a source reference (link or identifier)
- An answer stores an owner role/person
- An answer stores a freshness date
```

### <mark style="color:blue;">7) Common pitfalls (and how to avoid them)</mark>

#### <mark style="color:green;">Pitfall A</mark> — Mixing goals and requirements

- “Improve visibility” (goal)
- “Show a dashboard” (feature)\
  Write both, but keep them in the right layer (Objective vs Requirement).

#### <mark style="color:green;">Pitfall B</mark> — Ambiguous wording

Words like “fast”, “secure”, “easy”, “robust” must become measurable or verifiable:

- “Response < 2 seconds for 95% of requests under normal load”
- “Audit logs retained for 12 months”

#### <mark style="color:green;">Pitfall C</mark> — Implementation leakage

Avoid prescribing UI or technology unless it is a real constraint:

- “Use a dropdown and AJAX” is not a requirement.
- “Must work with Microsoft accounts” _can be_ a constraint/NFR.

---

### <mark style="color:blue;">Summary</mark>

- Formal structuring increases clarity, consistency, and traceability
- Objectives define outcomes; CSFs define what must go right
- Requirements support CSFs and must be verifiable
- Macro/Mezzo/Micro helps manage detail without over-documenting
- A consistent requirement structure prevents confusion and improves testability

➡️ Next: **Lesson 4 — Requirements Engineering Part III (Agile Representation): Epics, Features, Backlog, Tasks, User Stories**
