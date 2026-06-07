# Lesson 4 (Theory) — Requirements Engineering Part III

## <mark style="color:blue;">Agile Representation (Epics, Features, Backlog, Tasks) + Writing User Stories + Splitting into Functionalities</mark>

In this lesson you will represent requirements using an **Agile approach**.\
You will learn how to translate structured requirements into:

- **Epics → Features → User Stories → Tasks**
- well-written **User Stories**
- **splitting** User Stories into clear, deliverable functionalities

This prepares you for backlog planning, acceptance criteria definition, and later test design.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain the differences between epics, features, user stories, and tasks
- Build a simple backlog from your requirements list
- Write clear user stories with appropriate acceptance criteria
- Split (decompose) user stories into smaller, testable functionalities
- Avoid common Agile writing mistakes (solutions disguised as stories, oversized stories, unclear actors)

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="99" align="right">Section</th><th width="279">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why Agile representation</td><td>Turning structured requirements into a backlog</td></tr><tr><td align="right">2</td><td>Epic / Feature / User Story / Task</td><td>Clear hierarchy and examples</td></tr><tr><td align="right">3</td><td>Writing User Stories</td><td>Template + quality checklist</td></tr><tr><td align="right">4</td><td>Acceptance Criteria in Agile</td><td>What “done” means for a story</td></tr><tr><td align="right">5</td><td>Splitting User Stories</td><td>Practical decomposition patterns</td></tr><tr><td align="right">6</td><td>Common pitfalls</td><td>How to fix weak stories</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Why Agile representation?</mark>

Agile representation helps you manage scope and delivery:

- it makes work visible and prioritizable
- it supports incremental delivery and feedback
- it connects requirements to sprint planning and testing

A structured requirements document (FR-###) is useful for consistency.\
A backlog (US-###) is useful for execution.

You can (and should) link them:

- **FR-### → US-###**
- **NFR-### → US-###**

---

### <mark style="color:blue;">2) Epics, Features, Backlog, and Tasks</mark>

#### Epic

A large goal or capability that spans multiple stories.\
It is often too big to deliver in one iteration.

Example:

- **EPIC-01: Intake & Discovery workflow**

#### Feature

A cohesive slice of capability within an epic.

Example:

- **FEAT-01: Capture stakeholder answers with evidence metadata**

#### <mark style="color:$primary;">User Story</mark>

A small piece of value that can be delivered and validated.\
Stories should be independently demonstrable and testable.

Example:

- **US-01: Capture answer evidence metadata**

#### <mark style="color:$primary;">Task</mark>

The implementation work items needed to build a story.

Example:

- Create data model fields for evidence metadata
- Implement validation rules
- Create UI form fields
- Add tests for validation logic

---

### <mark style="color:blue;">3) Writing User Stories (the correct way)</mark>

#### <mark style="color:$primary;">Standard User Story format</mark>

> **As a** \<role/persona>\
> **I want**\
> **So that** \<value/outcome>

Example:

> **As** a Transition Lead, **I want** to record evidence metadata for answers **so that** the intake results are traceable and reliable.

#### <mark style="color:$primary;">What makes a good User Story?</mark>

A good story is:

- **small enough** to deliver in a short iteration
- **written in user language**
- focused on **value**
- compatible with testable acceptance criteria

#### <mark style="color:$primary;">Quick checklist (INVEST)</mark>

- **I**ndependent
- **N**egotiable
- **V**aluable
- **E**stimable
- **S**mall
- **T**estable

---

### <mark style="color:blue;">4) Acceptance Criteria (AC) in Agile</mark>

Acceptance criteria define “done” for the story.\
They must be testable and unambiguous.

#### <mark style="color:$primary;">Common AC formats</mark>

<mark style="color:green;">**Bullet AC (simple)**</mark>

- Evidence source can be recorded as a link or identifier
- Evidence owner is mandatory
- Freshness date is stored and validated

<mark style="color:green;">**Given/When/Then (BDD-friendly)**</mark>

- **Given** a user is editing an answer
- **When** the user submits the form without evidence owner
- **Then** the system shows a validation error and prevents submission

> You will later reuse Given/When/Then for BDD scenarios.

---

### <mark style="color:blue;">5) Splitting User Stories into functionalities (practical methods)</mark>

If a story is too large or too vague, split it.\
Avoid splitting by “technical layers” (UI vs backend) unless necessary.\
Prefer splitting by **business behavior**.

#### <mark style="color:$primary;">Common splitting patterns</mark>

<mark style="color:green;">**A) Split by workflow steps**</mark>

Example: “Intake session”

- Start intake session
- Answer questions
- Review missing critical information
- Export results

<mark style="color:green;">**B) Split by business rules / validations**</mark>

Example: “Evidence metadata”

- Capture evidence fields
- Validate mandatory fields
- Flag stale information

<mark style="color:green;">**C) Split by data variations**</mark>

Example: “Support model”

- Service window defined
- Languages supported
- On-call policy recorded

<mark style="color:green;">**D) Split by roles and permissions**</mark>

Example: “RBAC”

- Viewer can read
- Editor can update
- Admin can manage question packs

<mark style="color:green;">**E) Split by happy path vs error handling**</mark>

Example:

- Happy path: submit answer successfully
- Error handling: missing mandatory fields
- Edge case: stale evidence

---

### <mark style="color:blue;">6) Common pitfalls (and fixes)</mark>

#### <mark style="color:$primary;">Pitfall A</mark> — Story is a solution, not a need

Bad:

- “As a user, I want a dashboard with filters.”

Better:

- “As an AMS manager, I want to filter the portfolio view by risk status so that I can prioritize follow-up actions.”

#### <mark style="color:$primary;">Pitfall B</mark> — Story is too big (epic disguised as story)

Bad:

- “As a user, I want an intake system.”

Fix:

- make it an epic and create multiple stories for each step.

#### <mark style="color:$primary;">Pitfall C</mark> — Missing actor or value

Bad:

- “Capture evidence metadata.”

Fix:

- specify role and outcome:
- “As a Transition Lead, I want to capture evidence metadata so that intake results are traceable.”

#### <mark style="color:$primary;">Pitfall D</mark> — AC is vague

Bad:

- “Works correctly.”

Fix:

- define verifiable outcomes and validations.

---

### <mark style="color:blue;">Summary</mark>

- Agile representation turns structured requirements into an executable backlog
- Epics → Features → User Stories → Tasks provides a clean hierarchy
- Good user stories focus on user value and are small and testable
- Acceptance criteria define “done” and can be written BDD-friendly
- Story splitting helps keep scope realistic and supports incremental delivery
