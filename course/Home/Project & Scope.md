# Project & Scope

This page defines the **project baseline**, the **functional slice**, and the working rules for the lab component.

You will work in teams (3–4 students) and produce an incremental dossier connecting:

**REQ → Acceptance Criteria → Test Cases / BDD Scenarios → Automated Tests (PyTest/JUnit) → Traceability**

---

### Project options

#### Option A — Course baseline (recommended)

Use the course **Case Study** as a shared product baseline.\
This ensures:

- comparable deliverables across teams
- a stable scope for requirements and testing
- easier support during labs

<mark style="color:yellow;">Find it here</mark>👇:

{% embed url="<https://ulht-jcb.gitbook.io/application-management-services/jHoIdj9SjtQWUagIFYoq/>" %}

#### Option B — Your own project (requires approval)

You may reuse your 1st semester project **only if** it meets the minimum checklist below.

**Approval checklist (minimum)**

Your project must have:

- at least **2–3 clear user flows** (e.g., create/update/search)
- feasible acceptance criteria that can be **verified**
- enough scope for: **8+ functional requirements**, **6+ non-functional requirements**, and **10+ tests**
- reasonable automation scope (unit + BDD, plus optional integration)

If the project is unclear or not test-friendly, the team will be asked to switch to Option A.

---

### Scope definition (mandatory)

Every team must define:

- **Vision**: 1 short paragraph
- **In-scope slice**: what we will build/test in this course
- **Out-of-scope**: what we explicitly will not cover
- **Success criteria**: what “good” looks like for this semester

#### Recommended slice (baseline)

Pick one functional slice as the shared minimum (example):

- **Intake & Discovery**
  - data capture and validation
  - missing information handling
  - evidence/consistency checks
  - “ready to decide” vs “need more data” state

Optional extension for stronger teams:

- recommendations/scoring or reporting outputs

---

### Roles (rotating)

Each lab session, rotate roles:

- **Facilitator**: keeps the team aligned with the lab tasks and timebox
- **Scribe**: writes updates into GitHub pages
- **Reviewer**: checks quality of requirements and tests
- **Tester**: ensures tests run deterministically (one-command execution)

---

### Tooling decision (choose one track)

Your team must choose one consistent track:

#### Python track

- PyTest (unit + integration)
- pytest-bdd or behave (BDD)

#### Java track

- JUnit 5 (unit + integration)
- Cucumber (BDD)

> You can still write the same artifacts (REQ, REM, US, UC, TC, Gherkin) in both tracks.

---

### Naming conventions (IDs)

Use stable IDs across the semester:

- Requirements: **REQ-001, REQ-002, …**
- User Stories: **US-001, US-002, …**
- Use Cases: **UC-001, UC-002, …**
- Manual Test Cases: **TC-001, TC-002, …**
- BDD Features: **FEAT-001** (optional) or use filename + scenario title
- Issues / decisions (optional): **DEC-001**, **ISSUE-001**

Do not renumber IDs after publication—append new ones and mark deprecated items.

---

### Traceability (mandatory)

Traceability is required from early stages.\
At minimum, maintain links:

- REQ ↔ US
- REQ/US ↔ UC
- US/UC ↔ TC and/or Feature/Scenario
- TC/Scenario ↔ Automated test file/test name

#### Quick traceability table (minimum template)

<table><thead><tr><th width="134">Requirement</th><th width="118">User Story</th><th width="109">Use Case</th><th width="114">Test Case</th><th>Feature/Scenario</th><th>Automated Test</th></tr></thead><tbody><tr><td>REQ-###</td><td>US-###</td><td>UC-###</td><td>TC-###</td><td>file.feature#Scenario</td><td>tests/...::test_name</td></tr></tbody></table>

---

### Repo GitHub organization (recommended)

#### Repo structure (generic)

- `/docs` or GitHub pages for requirements/testing artifacts
- `/tests` for automated tests
- `/bdd` for `.feature` files and step definitions

#### GitBook / Github pages (recommended)

- Vision / Scope
- Stakeholders
- Glossary
- Elicitation Notes
- Requirements (v1/v2…)
- REM (v1/v2…)
- Use Cases
- Backlog (User Stories)
- Acceptance Criteria
- DoD
- Testing Strategy
- Manual Test Cases
- Automation Plan
- Unit/Integration Tests
- BDD (Features + Steps)
- Traceability
- Reports (execution + validation)
- Final Delivery & Demo

---

### Definition of Done (DoD) (mandatory)

Your team must define a DoD that includes:

- requirements updated and validated
- acceptance criteria written and verifiable
- traceability updated
- tests running with one command
- README includes setup + run instructions
- evidence of peer validation (requirements and tests)

---

### Next steps

1. Confirm **Option A or Option B**
2. Write **Vision + In-scope/Out-of-scope**
3. Create initial **Glossary + Stakeholders**
4. Start **Requirements v1 + REM v1**
