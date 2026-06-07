# Course Context & Objectives

## Course Context & Objectives

This GitBook contains the working space for the **Lab (Practical)** component of **Requirements Engineering & Testing**.

Across the semester, your team will build an incremental GitHub dossier that connects:

**Requirements → Acceptance Criteria → Test Design → Automated Tests (PyTest/JUnit) → BDD/Gherkin scenarios**

The goal is not “documentation for the sake of documentation”. The goal is **traceability and execution**: you should be able to point to a requirement and show how it is validated by tests.

---

### What you will produce (high level)

By the end of the semester your team should have:

- **Project scope** (vision + slice)
- **Stakeholders, glossary, assumptions**
- **Structured requirements** (IDs, type, priority, acceptance criteria)
- **REM (Requirement Elicitation Matrix)**
- **User Stories & Backlog**
- **Use Cases** (diagram + key flows)
- **Testing strategy** + **manual test cases**
- **Automated tests**:
  - Unit tests (PyTest or JUnit)
  - (When applicable) integration tests
- **BDD/Gherkin features** and **executable scenarios**
- **Final traceability**: REQ ↔ US ↔ UC ↔ TC ↔ Feature/Scenario ↔ Automated test

---

### Project approach (Case Study vs your own project)

You can work with:

#### Option A — Course baseline (recommended)

Use the **course case study** as a shared product baseline (same “slice” for every team), so we can compare work consistently.

#### Option B — Your own project (requires approval)

You may reuse your 1st semester project only if it supports:

- clear functional flows,
- measurable acceptance criteria,
- feasible testing scope (unit + BDD + some integration).

If a project lacks clarity or testability, you will be asked to switch to the baseline.

---

### Tools & stacks

You will implement automated tests using one of these stacks:

#### Python track

- **PyTest** (unit + integration)
- **pytest-bdd** or **behave** (BDD)

#### Java track

- **JUnit 5** (unit + integration)
- **Cucumber** (BDD)

Your team chooses **one** track and stays consistent.

---

### How labs work

Each lab is structured as:

- **Micro-theory (15–25 min)**: just enough concepts to execute the exercise
- **Hands-on (60–80 min)**: build artifacts in your repo\@GitHub
- **Wrap-up (5–10 min)**: check deliverables and traceability

Teams have rotating roles:

- **Facilitator** (keeps the team on task)
- **Scribe** (captures decisions and updates GitBook)
- **Reviewer** (quality checks requirements/tests)
- **Tester** (ensures tests run and are reproducible)

---

### AI / “vibe coding” policy (allowed with rules)

You may use LLMs to:

- draft requirements, refine wording, generate test ideas
- generate skeleton test code or step definitions
- refactor for readability

You are still responsible for:

- correctness, traceability, and alignment with acceptance criteria
- ensuring tests are runnable and deterministic
- understanding and being able to explain your work

Include short notes in your repo/GitHub on what was generated and what was reviewed/changed.

---

### Academic integrity

{% hint style="warning" %}
All work must be original to your team for this semester. Do not share code, solutions, or private implementation details across teams.
{% endhint %}

---

### Where to go next

- Assessment & Deliverables
- Class-by-Class Schedule
- Project & Scope
- Templates
