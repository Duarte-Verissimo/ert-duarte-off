# Lesson 1 (Theory) — Introduction to Requirements Engineering + Case Study

This lesson introduces the **core mindset** of Requirements Engineering (RE), the **case study / project context**, and the most important definition in the course: **what a requirement is (and what it is not)**.

> Key message: A requirement is only useful if it can be **understood, validated, and tested**.

---

### <mark style="color:$primary;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what Requirements Engineering is and why it matters
- Define what a requirement is (and distinguish it from a solution)
- Identify common requirement quality problems (ambiguity, non-testability, missing context)
- Understand the **case study** and the expected outcomes for the semester

---

### Lesson map

| Section                   | What we cover                            | Output                |
| ------------------------- | ---------------------------------------- | --------------------- |
| 1) RE overview            | Purpose, scope, lifecycle                | Shared vocabulary     |
| 2) Case study             | Domain + slice + constraints             | Project understanding |
| 3) What is a requirement? | Definition, types, examples/non-examples | Clear distinction     |
| 4) Quality + testability  | “Good vs bad” requirements               | Quality checklist     |
| 5) Mini activity          | Short exercise                           | 5 requirements draft  |

---

## <mark style="color:blue;">1) What is Requirements Engineering (RE)?</mark>

Requirements Engineering is the discipline that ensures we build the **right thing**, not just build the thing right.

RE includes activities such as:

- **Elicitation**: discover needs, constraints, and expectations
- **Analysis**: resolve conflicts, clarify scope, prioritize
- **Specification**: write requirements in a structured way
- **Validation**: check requirements are correct, complete, and testable
- **Management**: versioning, traceability, and impact analysis (not project management)

#### <mark style="color:$primary;">Why RE is critical</mark>

Without RE, teams often:

- implement the wrong features
- deliver something that “works” but doesn’t solve the real problem
- miss constraints (security, privacy, performance, legal)
- accumulate rework (late changes are expensive)

---

## <mark style="color:blue;">2) Case Study / Project context</mark>

In labs, you will work with a **project baseline** (recommended) or an approved team project.

### <mark style="color:$primary;">Project baseline (recommended)</mark>

We will use a shared case study so that:

- every group works within a comparable scope
- requirements quality and traceability can be evaluated consistently
- we spend time on RE/testing skills, not on inventing a domain

#### Requirements Gathering Document (input, not output)

The **Requirements Gathering Document** is a baseline input for elicitation and structuring.

➡️ Link: [**Requirements Gathering Document (AMS baseline)**](https://ulht-jcb.gitbook.io/requirements-engineering-and-testing/lesson-1/lesson-1-theory-introduction-to-requirements-engineering-+-case-study/requirements-gathering-document-ams-platform-baseline)

In Labs 2–4 you will transform that baseline into:

- elicitation notes (Q/A + assumptions)
- structured requirements (REQ-###)
- Objective/CSF mapping + REM entries

Your final requirements must be **traceable**, **testable**, and **variant-aligned** (not copied).

#### Suggested functional slice (common minimum)

**Intake & Discovery** (example slice)

- capture data and validate inputs
- handle missing information
- ensure consistency and evidence
- decide: “ready to proceed” vs “need more data”

> Teams can implement an optional extension (only if time/skills allow).

---

### <mark style="color:blue;">TFC GitHub project presentation (overview)</mark>

This course uses a GitHub-based project presentation to:

- centralize documentation (requirements, tests, traceability)
- make your work easy to review and validate
- support iterative updates and evidence tracking

#### <mark style="color:$primary;">Where GitHub fits</mark>

GitHub is not “extra work”. It is the **delivery format** for:

- requirements and REM
- user stories + acceptance criteria
- use cases
- test cases + BDD features
- validation reports + final traceability

#### <mark style="color:blue;">Using the AMS Case Study (important)</mark>

If you choose AMS as your baseline, you may use the AMS GitBook materiasl to understand the **domain and workflows**.

However:

- You must **not copy** user stories, requirements, or acceptance criteria text from the AMS case study pages.
- Your team will receive a **variant assignment** (persona/constraints/workflow). Your deliverables must reflect that variant.
- Any requirement/story/AC that matches the case study wording may be rejected for that item.

➡️ Next: see [**AMS Case Study — Variant Assignment (Anti-Copy Mechanism)**](https://ulht-jcb.gitbook.io/requirements-engineering-and-testing/lesson-1/lesson-1-theory-introduction-to-requirements-engineering-+-case-study/ams-case-study-variant-assignment-anti-copy-mechanism).

---

## <mark style="color:blue;">3) What is a requirement?</mark>

A **requirement** describes something the system must do or a property it must have, in order to deliver value to stakeholders.

### <mark style="color:$primary;">Requirement vs solution (most common confusion)</mark>

- ✅ **Requirement**: what is needed (what must be true)
- ❌ **Solution/Design**: how we will implement it

#### <mark style="color:$primary;">Examples</mark>

**Good requirement (functional)**

- “The system shall allow a user to submit an intake form with mandatory fields validated before submission.”

**Good requirement (non-functional)**

- “The system shall respond to intake submission requests in under 2 seconds for 95% of requests under normal load.”

**Not a requirement (solution)**

- “Use React and MongoDB to build the intake UI and store data.”

**Not a requirement (wish / vague statement)**

- “The system must be easy to use and fast.”

---

### <mark style="color:$primary;">Common requirement types (simple taxonomy)</mark>

#### Functional requirements (FR)

What the system must do (capabilities / behavior).

#### Non-functional requirements (NFR)

How well it must work (performance, usability, reliability, security).

#### Business rules / domain constraints

Rules that must hold (policy, compliance, calculation rules, validations).

---

## <mark style="color:blue;">4) What makes a requirement “good”?</mark>

A good requirement is:

- **Clear** (no ambiguity)
- **Specific** (defines boundaries)
- **Testable** (you can verify it)
- **Feasible** (possible within constraints)
- **Traceable** (linked to stories/tests)

### <mark style="color:$primary;">The “testability rule”</mark>

If you cannot imagine a test for it, it is not ready.

#### <mark style="color:$primary;">Anti-patterns to avoid</mark>

- ambiguous words: “fast”, “simple”, “intuitive”, “secure”
- missing conditions: “when?”, “who?”, “under what constraints?”
- mixing requirement + solution (“must use X technology”)
- hidden assumptions not written down

---

## <mark style="color:blue;">5) Mini activity (theory-to-practice bridge)</mark>

**Task (10–15 minutes):**\
Based on the case study slice, write:

1. **3 functional requirements** (FR)
2. **2 non-functional requirements** (NFR) — at least one must be measurable
3. For each requirement, add **one acceptance criterion** (how you will verify it)

#### <mark style="color:$primary;">Format</mark>

- FR as “The system shall…”
- NFR with measurable conditions (“under X load”, “in ≤ Y seconds”, “for Z% requests”)

#### <mark style="color:$primary;">Output</mark>

Create a page (or a section) called:

- `Draft requirements — Lesson 1`

---

## <mark style="color:blue;">Summary (what to remember)</mark>

- Requirements Engineering is about ensuring we build the **right system**
- A requirement describes **what is needed**, not **how it is implemented**
- Good requirements are **testable**
- GitBook is the **delivery hub** for requirements + tests + traceability

---

### <mark style="color:blue;">Next lesson</mark>

We will move from definitions to practice:

- elicitation (role play), stakeholders, and requirements structuring

> Course flow note: you will first structure requirements (classic view + REM mindset), then represent them in agile format (stories/backlog) and ensure the technical base for testing is working.
