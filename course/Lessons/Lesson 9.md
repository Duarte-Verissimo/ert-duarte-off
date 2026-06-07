# Lesson 9 — Testing Part I:

## <mark style="color:blue;">Introduction to Testing + Test Cases + Test Design</mark>

This lesson introduces software testing as a structured activity that validates requirements and reduces risk.\
You will learn common **types of tests**, what a **test case** is, and how to design test cases from requirements, use cases, and acceptance criteria.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain why testing exists (risk reduction, confidence, quality)
- Distinguish key **types of tests** and when to use each
- Write a clear test case with consistent fields
- Design tests from requirements and acceptance criteria
- Identify test scenarios for happy path, alternatives, and exceptions

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="98" align="right">Section</th><th width="255">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why we test</td><td>Testing as risk control</td></tr><tr><td align="right">2</td><td>Types of tests</td><td>Unit, integration, system, acceptance</td></tr><tr><td align="right">3</td><td>Test case basics</td><td>What a test case contains</td></tr><tr><td align="right">4</td><td>Designing test cases</td><td>Deriving from REQ/UC/AC</td></tr><tr><td align="right">5</td><td>Coverage mindset</td><td>Happy path + negative + boundaries</td></tr><tr><td align="right">6</td><td>Common pitfalls</td><td>Avoid weak tests</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Why do we test?</mark>

Testing provides evidence that the system:

- meets requirements (verification)
- behaves correctly under expected conditions
- handles errors and edge cases
- is safe enough to use in its intended context

Testing is not only “finding bugs”. It is also:

- validating acceptance criteria
- detecting ambiguity in requirements
- building confidence in changes

---

### <mark style="color:blue;">2) Types of tests (overview)</mark>

#### <mark style="color:$primary;">Unit tests</mark>

- Test small units of logic (functions/classes)
- Fast, isolated, high volume
- Good for validation rules, computations, mapping logic

#### <mark style="color:$primary;">Integration tests</mark>

- Test interactions between components/services
- Example: “store answer → retrieve → export”
- Good for APIs, storage, external service integration (even mocked)

#### <mark style="color:$primary;">System tests</mark>

- Test the system end-to-end at a functional level
- Example: “start intake session → submit answers → review missing info”

#### <mark style="color:$primary;">Acceptance tests (Client/User acceptance)</mark>

- Test from the user’s point of view against acceptance criteria
- Often scenario-based (can be BDD-friendly)
- Example: “Transition lead can identify missing DR information”

#### <mark style="color:$primary;">(Optional to know)</mark> [<mark style="color:$primary;">UI</mark>](#user-content-fn-1)[^1] <mark style="color:$primary;">/</mark> [<mark style="color:$primary;">E2E</mark>](#user-content-fn-2)[^2] [<mark style="color:$primary;">tests</mark>](#user-content-fn-3)[^3]

- Automate user interactions through the UI
- Valuable but heavier and more brittle; used when justified

> Rule of thumb: prioritize unit + integration early. Add system/E2E where it gives real confidence.

---

### <mark style="color:blue;">3) What is a test case?</mark>

A **test case** is a structured description of:

- what to test
- how to test it
- what outcome is expected

A good test case is:

- repeatable
- unambiguous
- traceable to a requirement or acceptance criteria
- clear about inputs, steps, and expected results

#### <mark style="color:$primary;">Common test case fields</mark>

- Test Case ID (TC-###)
- Title
- Related requirement(s): REQ-### (and/or UC/US)
- Preconditions
- Test data
- Steps
- Expected results
- Postconditions (optional)
- Priority / severity (optional)

---

### <mark style="color:blue;">4) Test design: where tests come from</mark>

You design tests from:

- **Requirements (REQ-###)** → what must be true
- **Acceptance Criteria (AC)** → what “done” means
- **Use Cases (UC-###)** → flows (happy/alternative/exception)
- **NFRs** → performance/security/audit/retention targets

#### <mark style="color:$primary;">Traceability mindset</mark>

Every important requirement should be validated by one or more tests:

- REQ → Test case(s) This supports grading, change impact, and completeness checks.

---

### <mark style="color:blue;">5) Coverage mindset: what you must test</mark>

#### <mark style="color:$primary;">A) Happy path</mark>

The normal successful flow.

#### <mark style="color:$primary;">B) Alternative flows</mark>

Valid variations:

- different roles
- different input types
- optional evidence provided/not provided

#### <mark style="color:$primary;">C) Exceptions / negative tests</mark>

Failures and invalid inputs:

- missing mandatory fields
- invalid formats
- unauthorized actions

#### <mark style="color:$primary;">D) Boundary and equivalence testing</mark>

Instead of testing every possible input, test:

- representative valid cases (equivalence classes)
- boundary values (min/max, empty/large, old/new)

Example:

- Freshness date: today (valid), 90 days old (boundary), 200 days old (invalid/flagged)

---

### <mark style="color:blue;">6) Common pitfalls (and fixes)</mark>

#### <mark style="color:orange;">Pitfall A</mark> — unclear expected result

Bad:

- “System works.”

Better:

- “Submission is blocked and the error message ‘Evidence owner required’ is shown.”

#### <mark style="color:orange;">Pitfall B</mark> — tests that repeat the implementation

Tests must validate behavior, not reproduce internal logic.

#### <mark style="color:orange;">Pitfall C</mark> — missing traceability

If you can’t link a test to a requirement/AC, you may be testing the wrong thing.

#### <mark style="color:orange;">Pitfall D</mark> — only happy path

Real confidence comes from alternatives + negative + boundaries.

---

### <mark style="color:blue;">Example: test case (simple)</mark>

```
TC-001 — Evidence owner is mandatory
Related requirements: REQ-001
Preconditions: User is authenticated and editing an answer
Test data: Evidence owner = empty
Steps:
1) Open an intake session
2) Navigate to an answer form
3) Leave Evidence Owner empty
4) Click Submit
Expected result:
- Submission is blocked
- A validation error is displayed indicating Evidence Owner is required
```

### <mark style="color:blue;">Summary</mark>

- Testing provides evidence that requirements are met and risks are controlled
- Test types serve different purposes (unit, integration, system, acceptance)
- Test cases must be structured, repeatable, and traceable
- Good test design covers happy path, alternatives, exceptions, and boundaries

➡️ Next: **Lab 9** — Create test cases from your requirements and acceptance criteria (traceability required).

[^1]: User Interface

[^2]: **End-to-End**

[^3]: UI (User Interface) and E2E (End-to-End) tests are automated testing methods that validate software from the user's perspective. UI tests focus on visual elements and user inputs, while E2E tests simulate real user journeys across the entire system—including databases and APIs—to ensure all components work together


