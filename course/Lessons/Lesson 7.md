# Lesson 7 — Requirements Engineering Part VI:

## <mark style="color:blue;">Technical Requirements Management (Lifecycle) + Validation (AC & DoD) + Functional Architecture</mark>

This lesson focuses on how requirements are managed **as technical assets** throughout a project:

- how requirements evolve (lifecycle)
- how to validate that requirements are fulfilled (Acceptance Criteria and Definition of Done)
- how to represent the solution at a **functional architecture** level (without jumping into implementation)

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Describe a practical **Requirements Lifecycle** (from discovery to change control)
- Define acceptance criteria that make requirements verifiable
- Define and apply a **Definition of Done (DoD)** for requirements and backlog items
- Explain the difference between requirement validation and implementation
- Sketch a **functional architecture** (capabilities/modules + interactions) for your selected slice

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="118" align="right">Section</th><th width="237">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Requirements lifecycle</td><td>A usable lifecycle model</td></tr><tr><td align="right">2</td><td>Versioning and change</td><td>How requirements evolve safely</td></tr><tr><td align="right">3</td><td>Validating requirements</td><td>AC as “proof of success”</td></tr><tr><td align="right">4</td><td>Definition of Done</td><td>What “done” means for RE work</td></tr><tr><td align="right">5</td><td>Functional architecture</td><td>Capability map for your slice</td></tr><tr><td align="right">6</td><td>Common pitfalls</td><td>Avoid common lifecycle/validation errors</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Technical requirements management: Requirements Lifecycle</mark>

Requirements are not “written once”. They evolve.\
A practical lifecycle for REQ items is:

1. **Identified** — captured from elicitation (needs/problems)
2. **Drafted** — written as a requirement candidate (REQ-###)
3. **Reviewed** — checked for clarity, testability, duplication, scope
4. **Approved** — agreed baseline for implementation planning
5. **Implemented** — work done to realize the requirement
6. **Verified** — proof exists that it is met (tests, demo, measurement)
7. **Validated** — stakeholders confirm it solves the right problem
8. **Changed / Deprecated** — updated or retired with traceability

#### <mark style="color:$primary;">Suggested statuses (simple)</mark>

- Proposed → Draft → Reviewed → Approved → Implemented → Verified → Accepted
- - optional: Blocked, Deferred, Deprecated

> Tip: Keep status simple. Too many statuses create noise.

---

### <mark style="color:blue;">2) Versioning and change (technical discipline)</mark>

When requirements change, you need to keep control:

- **Stable IDs**: REQ-### never changes
- **Version history**: record what changed and why
- **Impact analysis**: what other requirements/tests/stories are affected?

#### <mark style="color:$primary;">Typical change triggers</mark>

- new stakeholder insight
- conflicting requirements
- feasibility constraints discovered
- test failures reveal ambiguity

#### <mark style="color:$primary;">Minimal change log format (recommended)</mark>

For each edited REQ:

- Change date
- What changed
- Why it changed
- Who approved

---

### <mark style="color:blue;">3) How do we validate that a requirement is fulfilled?</mark>

#### <mark style="color:$primary;">Verification vs validation</mark>

- **Verification:** “Did we build it right?” (proof via tests/demos/measurements)
- **Validation:** “Did we build the right thing?” (stakeholder acceptance)

You need **Acceptance Criteria** to make verification possible.

---

### <mark style="color:blue;">4) Acceptance Criteria (AC)</mark>

Acceptance Criteria define observable conditions that must be true for a requirement or story to be considered met.

#### <mark style="color:$primary;">Good AC are:</mark>

- clear and unambiguous
- testable/verifiable
- focused on behavior/outcomes
- measurable when relevant

#### <mark style="color:$primary;">Common formats</mark>

<mark style="color:yellow;">**Bullet AC (simple)**</mark>

- “Evidence owner is mandatory”
- “Freshness date must be provided”
- “System blocks submission when required fields are missing”

<mark style="color:yellow;">**Given / When / Then (BDD-friendly)**</mark>

- **Given** the user is editing an answer
- **When** the user submits without evidence owner
- **Then** the system shows a validation error and prevents submission

#### <mark style="color:$primary;">Quality warning</mark>

Avoid AC like:

- “Works correctly”
- “User friendly”
- “Secure” These must become verifiable statements.

---

### <mark style="color:blue;">5) Definition of Done (DoD)</mark>

DoD is a shared checklist that defines what “done” means.

You can define DoD at different levels:

- Requirement-level DoD (REQ item ready)
- Story-level DoD (US ready)
- Sprint/team DoD (work completed)

#### <mark style="color:$primary;">Example: DoD for a requirement (REQ-###)</mark>

A requirement is “Done” when:

- ID, title, description are complete and consistent
- stakeholder + source are recorded
- acceptance criteria exist (2–4 minimum)
- ambiguity is removed or explicitly documented
- linked to objective/CSF (if you use that chain)
- traceability exists to at least one use case or story

#### <mark style="color:$primary;">Example: DoD for a user story (US-###)</mark>

A story is “Done” when:

- acceptance criteria are agreed
- tests exist (unit / integration / BDD scenario where applicable)
- demo evidence exists
- documentation updated (if needed)
- no critical defects remain

> Tip: DoD is not a bureaucratic list. Keep it short but meaningful.

---

### <mark style="color:blue;">6) Functional Architecture (what it is)</mark>

Functional architecture describes the system in terms of **capabilities/modules** and how they interact — without specifying implementation details (technology, class design, UI screens).

It answers:

- What functional building blocks exist?
- How do they interact?
- What data flows between them?

#### <mark style="color:$primary;">Functional architecture vs technical architecture</mark>

- Functional: capabilities and responsibilities (what)
- Technical: components, deployment, technologies (how)

---

### <mark style="color:blue;">7) How to sketch functional architecture (simple method)</mark>

#### <mark style="color:$primary;">Step 1 — Identify capabilities (5–8 blocks)</mark>

Example (adapt to your slice):

- Intake Session Management
- Question Pack / Rules Engine
- Answer Capture + Evidence Metadata
- Missing Information Tracker
- Export / Reporting
- User & Role Management (RBAC)
- Audit Logging (if variant requires)
- Notifications (optional)

#### <mark style="color:$primary;">Step 2 — Draw interactions (arrows)</mark>

- Which capability calls/uses which?
- What data is exchanged?

#### <mark style="color:$primary;">Step 3 — Map requirements to capabilities</mark>

For each capability, list the key REQ IDs it supports.

This makes later testing and design planning easier.

---

### <mark style="color:blue;">Common pitfalls (and fixes)</mark>

- **Pitfall:** Requirements change without tracking\
  **Fix:** add a minimal change log + impact notes
- **Pitfall:** AC are vague and untestable\
  **Fix:** add measurable conditions, Given/When/Then, validation rules
- **Pitfall:** DoD is too big and ignored\
  **Fix:** keep DoD short and enforce it in labs
- **Pitfall:** Functional architecture becomes technical design\
  **Fix:** keep it at capabilities + responsibilities + data flows

---

### <mark style="color:blue;">Summary</mark>

- Requirements have a lifecycle and must be managed technically
- Acceptance Criteria provide verifiable proof of fulfillment
- Definition of Done standardizes “what done means”
- Functional architecture organizes capabilities and supports planning and traceability

➡️ Next: **Lab 7** — Define your lifecycle statuses, write AC + DoD, and sketch your functional architecture for the selected slice.
