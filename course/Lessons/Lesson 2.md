# Lesson 2 — Requirements: Definition, Types, Approaches & Methods

This lesson deepens the core concept: **what a requirement is (and is not)**, how to classify requirements, and how different approaches (classic vs agile) influence the way we write and manage them.

> Key message: A requirement is valuable only if it is **clear, testable, and traceable**.

---

### Learning goals

By the end of this lesson you should be able to:

- Distinguish **requirement vs solution vs constraint**
- Write requirements that are **clear and testable** (avoid ambiguity)
- Classify requirements:
  - functional vs non-functional vs business rules/constraints
- Recognize and compare approaches:
  - **classic (document/spec-driven)** vs **agile (backlog/story-driven)**

---

### Observations / Tools (from the official plan)

#### Requirement representation tools (examples)

- Azure DevOps (work items / backlogs): <https://dev.azure.com/>
- Trello boards (lists/cards): <https://trello.com>

{% hint style="info" %} <mark style="color:yellow;">**Note:**</mark> Carnival is **2026-02-17** (Tuesday - for the affected Shifts, we will have to plan a replacement lesson).
{% endhint %}

> <mark style="color:blue;">**Important (AMS baseline):**</mark> you may use the AMS GitBook for domain understanding and workflows.\
> You must **not copy** existing user stories / requirements / acceptance criteria text from AMS pages.\
> Your work must reflect your assigned **variant** (persona/constraints/workflow). Any matching text may be rejected for that item.

---

### Lesson map

<table><thead><tr><th width="106">Section</th><th width="312">Topic</th><th>What you should take away</th></tr></thead><tbody><tr><td>1</td><td>Requirement vs solution vs constraint</td><td>Correct classification</td></tr><tr><td>2</td><td>Requirement types</td><td>FR vs NFR vs other</td></tr><tr><td>3</td><td>Quality &#x26; testability</td><td>“Good vs bad” + rewrite rules</td></tr><tr><td>4</td><td>Approaches &#x26; methods</td><td>Classic vs Agile mindset</td></tr><tr><td>5</td><td>Tooling overview</td><td>Represent requirements in practice</td></tr></tbody></table>

---

## 1) Requirement vs Solution vs Constraint

#### Requirement (WHAT)

A requirement describes **what must be true** for the system to deliver value:

- behavior the system must provide
- properties the system must satisfy

✅ Examples:

- “The system shall prevent submission when mandatory fields are missing.”
- “The system shall store an audit trail for intake updates.”

---

#### Solution / Design (HOW)

A solution describes **how** we implement requirements.

❌ Examples (not requirements):

- “Use React for the UI.”
- “Store data in MongoDB.”
- “Implement with microservices.”

> Sometimes design constraints are legitimate, but they must be justified as constraints (see below).

---

#### Constraint (LIMIT / CONDITION)

A constraint is a restriction on the solution space:

- legal/compliance constraints
- organizational/technology constraints
- operational constraints

✅ Examples:

- “Data must be stored in the EU region.”
- “Authentication must use the university SSO.”
- “The system must support Portuguese and English.”

---

### Quick decision rule

Ask yourself:

- Is it describing **what value/behavior** is needed? → **Requirement**
- Is it describing **how to build it**? → **Solution**
- Is it restricting options due to policy/limits? → **Constraint**

---

## 2) Requirement types (simple taxonomy)

### 2.1 Functional Requirements (FR)

What the system must **do** (capabilities).

Examples:

- Create / read / update / delete records
- Validate input and enforce rules
- Trigger workflows (notifications, state transitions)

---

### 2.2 Non-Functional Requirements (NFR)

How well the system must work (quality attributes).

Common categories:

- **Performance** (response time, throughput)
- **Security** (auth, permissions, encryption)
- **Reliability** (availability, recovery)
- **Usability** (learnability, accessibility)
- **Maintainability** (modularity, testability)
- **Portability** (platform compatibility)

#### Make NFRs measurable

Bad:

- “The system must be fast.”

Better:

- “The system shall respond in ≤ 2 seconds for 95% of requests under normal load.”

---

### 2.3 Business rules / Domain rules

Rules that must hold true due to domain logic.

Examples:

- “An intake submission requires evidence for all ‘high risk’ answers.”
- “Only managers can approve a final assessment.”

---

### 2.4 Data requirements (optional category)

Requirements about data structure/retention.

Examples:

- “The system shall retain audit logs for 12 months.”
- “Each intake submission shall include a unique identifier.”

---

## 3) Writing clear and testable requirements

### 3.1 Common ambiguity traps

Avoid words like:

- fast, easy, intuitive, user-friendly, secure, robust

If you use them, define:

- measurable thresholds
- conditions (under which load? for which user? for which flows?)

---

### 3.2 Recommended writing patterns

#### Functional requirement pattern

“The system shall **\<action> \<object> \<condition>**"

Example:

- “The system shall reject form submission when required fields are missing.”

---

#### Non-functional requirement pattern

“The system shall **\<quality attribute>** with **\<metric>** under **\<conditions>**."

Example:

- “The system shall respond within 2 seconds for 95% of intake submissions under normal load.”

---

### 3.3 Testability checklist (quick)

A requirement is testable if you can answer:

- What is the **input**?
- What is the expected **output/state**?
- Under what **conditions** does it apply?
- What is the **pass/fail** criterion?

---

## 4) Approaches & methods (classic vs agile)

### 4.1 Classic approach (spec-driven)

Typical characteristics:

- requirements captured in structured documents
- upfront analysis and validation
- emphasis on completeness and traceability early

Good when:

- compliance and formal validation are needed
- systems are safety-critical or heavily regulated
- stakeholders need stable specifications

Risks:

- heavy documentation if not controlled
- slower feedback cycles

---

### 4.2 Agile approach (backlog-driven)

Typical characteristics:

- requirements represented as epics/features/user stories
- iterative refinement (progressive elaboration)
- acceptance criteria + tests guide development

Good when:

- requirements are expected to change
- fast feedback and incremental delivery is important
- you want “working software” as the main validation

Risks:

- vague stories if acceptance criteria are weak
- missing NFRs if not tracked explicitly

---

### 4.3 How we use both in this course

You will combine both:

- **classic discipline** for requirement quality, traceability, and NFRs
- **agile structure** for stories, acceptance criteria, and test-driven validation

---

## 5) Tools to represent requirements (practical overview)

### Azure DevOps (example usage)

- Work items for: Epics, Features, User Stories, Tasks, Bugs
- Link work items to tests and documentation
- Useful for traceability and team workflow

### Trello (example usage)

- Simple columns (To do / Doing / Done)
- Cards for stories/tasks
- Useful for lightweight tracking

#### Requirement representation tools (links)

- Azure DevOps (work items / backlogs): <https://dev.azure.com/>
- Trello boards (lists/cards): <https://trello.com>
- Notion (pages/databases, optional): <https://www.notion.so/>

> In this course, tooling is optional. The important part is that requirements are **structured, traceable, and testable**, regardless of the tool.

---

## Mini exercise (5–10 minutes)

Rewrite the following statements into testable requirements:

1. “The system must be secure.”
2. “The system should be easy to use.”
3. “The system must be fast.”
4. “Use JWT for authentication.”
5. “Store everything in MongoDB.”

For each one:

- classify it (Requirement / Solution / Constraint)
- rewrite it as a clear, testable requirement (or a justified constraint)

---

## Summary (what to remember)

- Requirement = **WHAT**, Solution = **HOW**, Constraint = **LIMIT**
- Functional requirements describe behavior; NFRs describe quality attributes
- If you can’t test it, it’s not ready
- Classic and Agile approaches can complement each other
- Tools help, but clarity/testability/traceability matter more than the tool

---

### Next step

In the next lab, you will apply this:

- role play elicitation
- convert needs into structured requirements (REQ-###)
- classify them and remove ambiguity
