# Class-by-Class Schedule (Labs) — 2026

This schedule matches the official lab plan for 2026.\
Each session includes the focus and the expected outcomes.

> Track: choose **one** (PyTest or JUnit)\
> BDD: pytest-bdd/behave (Python) or Cucumber (Java)

---

### February

#### **Week 1 — Introduction**

**Focus:** course goals + lab workflow + project baseline + repo/GitBook setup\
**Outputs:**

- Vision + scope slice (draft)
- repo/GitBook structure created
- initial glossary started

---

#### **Week 2 — Requirements Engineering Part I**

**Focus:** What is a requirement? types, methods, and elicitation basics\
**Tools (examples):** Azure DevOps / Trello / Notion (optional)\
**Outputs:**

- elicitation notes (role play Q/A)
- initial raw needs list
- requirements v0 draft (FR/NFR mix)

**Note:** **Note:** Carnival is **2026-02-17** (Tuesday - for the affected Shifts, we will have to plan a replacement lesson).

---

#### **Week 3 — Requirements Engineering Part II (Classic view + REM intro)**

**Focus:** Classic representation and formal structuring

- Objectives → CSFs → Requirements
- Levels of detail: **Macro / Mezzo / Micro**
- Start/introduce **REM** mindset (as main structure)

**Outputs:**

- 3 objectives + 3 CSFs (draft)
- mapping draft: Objective/CSF → requirements
- requirements grouped by epics/areas (requirements map draft)
- REM structure started (first entries draft)

---

### March

#### **Week 4 — Requirements Engineering Part III**&#x20;

**Focus:** Agile representation&#x20;

- Epics / Features / Backlog / Tasks
- User Stories + Acceptance Criteria basics

**Outputs:**

- backlog v1 (US-###) + acceptance criteria draft (for priority stories)
- mapping updated (REQ ↔ US links)
- repo baseline ready for testing (folders + “hello test” running)

---

#### **Week 5 — Requirements Engineering Part IV (Use Cases)**

**Focus:** Use Case diagram + syntax (starting)\
**Outputs:**

- use case diagram (≥ 6 use cases)
- at least 2 use cases described (basic flows)

---

#### **Week 6 — Requirements Engineering Part V (Use Cases continuation)**

**Focus:** Use Case refinement + quality\
**Outputs:**

- use cases refined (exceptions + validations + alternate paths)
- traceability updated (REQ ↔ US ↔ UC)

---

#### **2026-03-30 — Easter break (no class)**

---

### April

#### **2026-04-06 — Easter break (no class)**

---

#### **Week 7 — Requirements Engineering Part VI (Lifecycle + Validation + AC + DoD)**

**Focus:** Requirements lifecycle + validation techniques

- improve requirement quality
- finalize/strengthen **acceptance criteria**
- define **Definition of Done (DoD)**

**Outputs:**

- requirements v2 (validated/refined)
- acceptance criteria finalized for priority scope
- DoD page created/updated
- traceability refresh (REQ ↔ US ↔ UC)

---

#### **Week 8 — Vibe Coding (Prototype from Requirements)**

**Focus:** Generate an application/prototype from requirements (no test focus yet)

- translate requirements into a working prototype
- keep scope minimal and traceable
- document decisions and gaps

**Outputs:**

- small prototype/skeleton aligned to the chosen slice
- decision log: what was implemented vs not implemented and why
- list of missing/unclear requirements discovered during prototyping

> Note: This week is about connecting requirements to a buildable artifact.\
> Testing automation comes later.

---

#### **Week 9 — Testing Part I**

**Focus:** Testing intro + types + test design + manual test cases\
**Outputs:**

- test strategy draft (what/why)
- manual test cases (TC-###)
- risk-based priorities
- traceability updated (US/UC ↔ TC)

---

### May

#### **Week 10 — Testing Part II (Planning + Static/TDD/BDD/Dynamic)**

**Focus:** Test planning + approaches

- static vs dynamic testing
- TDD / BDD positioning
- validating requirements through tests

**Outputs:**

- refined test plan (v2)
- improved manual test cases (v2)
- automation plan (what to automate and why)

---

#### **Week 11 — Vibe Coding (TDD)**

**Focus:** TDD practice (PyTest/JUnit)\
**Tools (possible):** PyTest/JUnit (+ optional Cucumber/Behave/Selenium references)\
**Outputs:**

- first automated unit tests running (red/green/refactor evidence)
- README: how to run tests (one command)

---

#### **Week 12 — Software Testing (Unit + Integration foundation)**

**Focus:** Unit testing + fixtures/mocks + (when applicable) integration tests\
**Outputs:**

- expanded unit test suite (incl. negative + parameterized/data-driven)
- first integration tests where feasible
- test suite structure stabilized

---

#### **Week 13 — Software Testing (BDD)**

**Focus:** BDD/Gherkin: features, scenarios, step definitions; executing BDD tests\
**Outputs:**

- `.feature` files with scenarios (happy + negative)
- step definitions
- at least some executable scenarios passing
- traceability updated (US ↔ Feature/Scenario ↔ automated tests)

---

### June

#### **Week 14 — Testing Part III (Traceability + Retro-compatibility + Q\&A)**

**Focus:** Quality closure + traceability completion

- traceability end-to-end
- retro-compatibility discussion (what changes break what)
- final Q\&A / gaps closure

**Outputs:**

- final traceability matrix pass (REQ ↔ US ↔ UC ↔ TC ↔ BDD ↔ automated tests)
- validation report (peer execution / issues fixed)
- final checklist readiness

---

#### **Week 15 — Presentations & Defense**

**Focus:** Final presentations and project defense\
**Expected format (example 5–7 min demo):**

1. show one key REQ (REQ-###)
2. show its AC
3. show linked TC and/or BDD scenario
4. run the test(s)
5. show traceability entry connecting everything

**Outputs:**

- final delivery submitted
- demo performed (traceable chain shown)

---

### Notes

- Holiday 2026-05-01 exists but does not affect the 2026-05-04 class.
- Holiday 2026-06-10 does not affect the 2026-06-08 class.
