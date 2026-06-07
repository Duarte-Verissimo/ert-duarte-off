# Lesson 11 — Vibe Coding + Testing First:

## <mark style="color:blue;">Writing Tests Before Code (TDD Mindset)</mark>

This lesson brings Vibe Coding into a **testing-first** workflow.\
Instead of generating code immediately, you will start by writing **tests first** and then use AI assistance to help you implement code that satisfies those tests.

This is an academic exercise to understand:

- how tests shape design
- how requirements translate into testable behavior
- how AI-assisted coding changes when the “source of truth” is the test suite

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain why writing tests first improves clarity and control
- Apply a basic **TDD cycle** (Red → Green → Refactor)
- Identify what parts of your project are best suited for test-first
- Write test-first specifications from requirements and acceptance criteria
- Use AI-assisted coding to implement code that satisfies tests (without feature drift)

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="122" align="right">Section</th><th width="262">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why test-first</td><td>Benefits and academic purpose</td></tr><tr><td align="right">2</td><td>TDD cycle</td><td>Red → Green → Refactor</td></tr><tr><td align="right">3</td><td>What to test first</td><td>Good candidates for TDD</td></tr><tr><td align="right">4</td><td>Writing tests from REQ/AC</td><td>Turning requirements into assertions</td></tr><tr><td align="right">5</td><td>Vibe Coding with tests</td><td>Prompting “implement to satisfy tests”</td></tr><tr><td align="right">6</td><td>Pitfalls and guardrails</td><td>Avoid brittle or meaningless tests</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Why write tests before code?</mark>

Writing tests first forces you to clarify:

- what the system should do (behavior)
- what “success” means (assertions)
- what the edge cases are (negative + boundaries)

Benefits:

- reduces ambiguity in requirements
- prevents feature drift (code must satisfy tests, not “vibes”)
- increases confidence during change/refactoring
- supports traceability (REQ → tests → evidence)

---

### <mark style="color:blue;">2) TDD in one page (Red → Green → Refactor)</mark>

#### <mark style="color:red;">Red</mark>

Write a test that describes the expected behavior.\
Run it: it fails (because behavior does not exist yet).

#### <mark style="color:green;">Green</mark>

Implement the **minimum** code needed to make the test pass.\
Avoid “extra features” not required by the test.

#### <mark style="color:purple;">Refactor</mark>

Clean up code while keeping tests passing:

- improve naming
- remove duplication
- simplify logic

> The goal is not maximum test count. The goal is clear behavior + confidence.

---

### <mark style="color:blue;">3) What are good TDD candidates?</mark>

Best suited for test-first:

- validation rules (mandatory fields, formats, constraints)
- business rules (if X then Y)
- transformations/mapping logic (export, scoring, computed fields)
- boundary conditions (min/max, empty/invalid, expired/stale)

Less suited (at this stage):

- heavy UI automation
- full end-to-end flows through the UI
- complex integration with external services (unless mocked)

---

### <mark style="color:blue;">4) Writing tests from Requirements (REQ) and Acceptance Criteria (AC)</mark>

Use this chain:

- **REQ-###** defines what must be true
- **AC** defines the observable proof
- **tests** implement that proof in executable form

#### <mark style="color:$primary;">Example (conceptual)</mark>

Requirement:

- “Evidence owner is mandatory.”

Acceptance criteria:

- “Submission is blocked when evidence owner is missing.”

Test:

- Arrange a record without evidence owner
- Act: attempt submit/save
- Assert: validation error occurs and save fails

The test becomes a **specification** that the implementation must satisfy.

---

### <mark style="color:blue;">5) Vibe Coding with tests (how the workflow changes)</mark>

In Lab 8, you generated code first and validated manually.\
Now you invert the order:

1. Select REQ + AC to implement
2. Write tests first (the spec)
3. Use AI-assisted coding to implement code **until tests pass**
4. Refactor safely with tests as your safety net

#### <mark style="color:$primary;">Prompting rule (important)</mark>

Your AI prompt must say:

- “Do not add features. Implement only what is necessary to satisfy these tests.”

<mark style="background-color:yellow;">This reduces hallucinated behavior and keeps scope controlled.</mark>

---

### <mark style="color:blue;">6) Pitfalls and guardrails</mark>

#### <mark style="color:orange;">Pitfall A</mark> — tests that don’t assert behavior

Bad test:

- runs code but asserts nothing meaningful

Fix:

- include explicit expected results

#### <mark style="color:orange;">Pitfall B</mark> — tests mirror implementation instead of behavior

If a test is too tied to internal details, it becomes brittle.

Fix:

- test outputs and outcomes, not internal steps

#### <mark style="color:orange;">Pitfall C</mark> — missing negative and boundary tests

Happy path alone gives false confidence.

Fix:

- include at least one negative and one boundary test per key rule

#### <mark style="color:orange;">Pitfall D</mark> — AI adds extra features

Fix:

- keep tests as the contract
- reject code that introduces out-of-scope behaviors
- record changes and reasons

---

### <mark style="color:blue;">Summary</mark>

- Test-first (TDD) turns requirements into executable specifications
- Red → Green → Refactor is a disciplined loop for building reliable behavior
- Vibe Coding becomes safer and more controlled when tests are the source of truth
- The goal is not speed alone: it is clarity, traceability, and confidence

➡️ Next: **Lab 11** — Write tests first from REQ/AC and use AI-assisted coding to implement until tests pass.
