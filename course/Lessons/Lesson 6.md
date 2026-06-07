# Lesson 6 — Requirements Engineering Part V:

## Use Case Diagram (Continuation) + Use Case Syntax (Deepening)

This lesson continues the work from the previous Use Case lesson.\
You will refine your **Use Case Diagram** and improve the **syntax and quality** of your Use Case descriptions, focusing on alternative flows, exceptions, validations, and traceability to requirements.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Refine a Use Case Diagram to better reflect scope and actors
- Use `<<include>>` and `<<extend>>` relationships correctly (when needed)
- Write complete Use Case descriptions with:
  - main flow, alternative flows, exceptions
  - clear preconditions and postconditions
- Improve traceability from Use Cases to requirements (REQ-###)
- Prepare Use Cases to be reusable for later test scenarios (including BDD)

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="113" align="right">Section</th><th width="255">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Diagram refinement</td><td>Correct boundary, actors, scope</td></tr><tr><td align="right">2</td><td>Use Case syntax quality</td><td>Better flows and conditions</td></tr><tr><td align="right">3</td><td>include vs extend</td><td>Correct reuse and optional behavior</td></tr><tr><td align="right">4</td><td>Alternatives and exceptions</td><td>Realistic error handling</td></tr><tr><td align="right">5</td><td>Traceability</td><td>UC ↔ REQ links that make sense</td></tr><tr><td align="right">6</td><td>From Use Cases to tests</td><td>How this will support later labs</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Use Case Diagram — refinement checklist</mark>

A good diagram is:

- scoped to your selected slice (not “everything”)
- built around real actors (roles/external systems)
- free of internal components as actors (DB is not an actor)
- stable in naming (verb + object)

#### <mark style="color:$primary;">Typical fixes after first draft</mark>

- Merge duplicated use cases (“Submit form” vs “Save record”) into a meaningful goal
- Split a giant use case into 2–3 smaller goals
- Correct actor responsibility (who initiates the action)
- Move validations into `<<include>>` when they are mandatory for multiple use cases

---

### <mark style="color:blue;">2) Use Case Syntax — what “complete” looks like</mark>

A Use Case description is complete when it includes:

- **Primary actor** + goal
- **Preconditions** (what must be true before)
- **Trigger** (what starts it)
- **Postconditions** (success + failure/cancel)
- **Main flow** (happy path)
- **Alternative flows** (conditions that change the path)
- **Exceptions/errors** (what happens when something goes wrong)
- **Related requirements** (REQ-###)

---

### <mark style="color:blue;">3)</mark> <mark style="color:blue;"></mark><mark style="color:blue;">`<<include>>`</mark> <mark style="color:blue;"></mark><mark style="color:blue;">vs</mark> <mark style="color:blue;"></mark><mark style="color:blue;">`<<extend>>`</mark> <mark style="color:blue;"></mark><mark style="color:blue;">(use carefully)</mark>

#### <mark style="color:$primary;">`<<include>>`</mark> <mark style="color:$primary;"></mark><mark style="color:$primary;">— mandatory reused behavior</mark>

Use when:

- a sub-behavior is always executed
- multiple use cases share that behavior

Example:

- “Submit answers” `<<include>>` “Validate mandatory fields”

#### <mark style="color:$primary;">`<<extend>>`</mark> <mark style="color:$primary;"></mark><mark style="color:$primary;">— optional/conditional behavior</mark>

Use when:

- behavior is optional, occurs only under a condition, or is an extension

Example:

- “Request follow-up info” `<<extend>>` “Review intake completeness”

> Tip: If unsure, leave include/extend out until your base diagram is stable.

---

### <mark style="color:blue;">4) Alternative flows and exception handling (the missing realism)</mark>

#### <mark style="color:$primary;">Alternative flows (A1, A2…)</mark>

Use them for valid variations:

- different stakeholder roles
- different input types
- conditional branches (“if evidence missing…”)

#### <mark style="color:$primary;">Exceptions/errors (E1, E2…)</mark>

Use them for failures:

- missing required fields
- unauthorized access (RBAC)
- invalid data
- connection failures (only if in scope)

**Good practice:** describe expected system behavior:

- show error message
- block submission
- log attempt (if audit variant)
- request follow-up action

---

### <mark style="color:blue;">5) Traceability: Use Cases ↔ Requirements (REQ-###)</mark>

Traceability should be meaningful:

- each Use Case should link to the requirements it operationalizes
- avoid linking everything to everything

**Minimum:** each Use Case links to **2+ requirements** (when possible).\
If a Use Case doesn’t link to any requirement, one of them is likely wrong or missing.

---

### <mark style="color:blue;">6) From Use Cases to tests (preview)</mark>

Use Cases are a bridge to testing:

- Main flow → happy-path test scenario
- Alternative flows → additional scenarios
- Exceptions → negative tests
- Preconditions/postconditions → setup/teardown logic

Later, you will transform parts of your use cases into:

- acceptance criteria
- BDD scenarios (Given/When/Then)
- automated tests (PyTest/JUnit)

---

### <mark style="color:blue;">Summary</mark>

- Refine your diagram: boundary, actors, scope, naming
- Write complete Use Cases: main flow + alternatives + exceptions
- Use include/extend correctly when needed
- Ensure UC ↔ REQ traceability is meaningful
- Use Cases prepare the ground for test scenarios later

➡️ Next: **Lab 6** — Use Case refinement + full syntax (more complete descriptions and stronger traceability).

---

#### <mark style="color:$primary;">**Examples:**</mark>

{% embed url="<https://github.com/Luis-AFO-Gomes/ERT.2025>" %}
