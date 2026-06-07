# Lesson 12 — Software Testing:

## <mark style="color:blue;">Unit Tests + Assertions + Running Tests</mark>

This lesson focuses on the practical foundations of automated testing:

- what unit tests are and what they are best for
- how assertions work (and how to write good ones)
- how to run tests consistently (locally and in CI-ready ways)

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what unit tests are and why they matter
- Write clear assertions that validate behavior (not implementation)
- Structure unit tests consistently (Arrange–Act–Assert)
- Run unit tests locally and interpret results (pass/fail, stack traces)
- Apply unit tests to validate acceptance criteria and business rules

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="109" align="right">Section</th><th>Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>What unit tests are</td><td>Scope and purpose</td></tr><tr><td align="right">2</td><td>Anatomy of a unit test</td><td>Arrange–Act–Assert</td></tr><tr><td align="right">3</td><td>Assertions</td><td>Types and good practices</td></tr><tr><td align="right">4</td><td>Running tests</td><td>Commands and common outputs</td></tr><tr><td align="right">5</td><td>Common pitfalls</td><td>Fixing weak/brittle tests</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Unit tests: what they are (and what they are not)</mark>

#### <mark style="color:$primary;">Unit tests are:</mark>

- tests for small units of logic (functions/classes/modules)
- fast to run and easy to automate
- good for business rules, validations, transformations

#### <mark style="color:$primary;">Unit tests are not:</mark>

- full end-to-end tests through the UI
- integration tests with real external dependencies (unless controlled/mocked)
- “click-through” system validation (that is system/E2E testing)

**Goal:** fast feedback and confidence during change.

---

### <mark style="color:blue;">2) Anatomy of a unit test (Arrange–Act–Assert)</mark>

A clear unit test follows **AAA**:

1. **Arrange** — set up inputs and context
2. **Act** — call the function/method under test
3. **Assert** — verify the expected outcome

Example (conceptual):

- Arrange: create input without “evidence owner”
- Act: call validate()
- Assert: validation error is returned

A good test name should describe:

- the condition
- the expected outcome

Example:

- `test_submit_fails_when_evidence_owner_missing`

---

### <mark style="color:blue;">3) Assertions: what they are and how to use them</mark>

An **assertion** is the statement that defines success or failure.

#### <mark style="color:$primary;">What assertions should validate</mark>

- observable outputs
- returned values
- raised errors/exceptions (when expected)
- state changes (where relevant)
- messages/codes (only if stable and meaningful)

#### <mark style="color:$primary;">Common assertion types</mark>

- Equality: expected == actual
- Containment: item in collection
- Boolean: condition is True/False
- Exception assertion: expected error is raised
- Approximate comparisons (for numbers/time thresholds)

#### <mark style="color:$primary;">Good assertion practices</mark>

- Assert one main idea per test (avoid “assert everything”)
- Prefer meaningful checks (not “something exists”)
- Use clear failure messages when helpful
- Avoid asserting unstable details (internal IDs, ordering, UI text that changes frequently)

---

### <mark style="color:blue;">4) Executing tests (running tests)</mark>

Running tests is not only “press run”. You need consistency:

- same command works for all team members
- results are readable and comparable
- easy to integrate into CI later

#### <mark style="color:$primary;">Typical workflow</mark>

1. Run all tests (quick check)
2. Run only one file or one test (fast iteration)
3. Read failures (traceback/stack trace)
4. Fix code or test, rerun

#### <mark style="color:$primary;">What a failure tells you</mark>

A failing test indicates one of:

- the requirement/AC interpretation is wrong
- the code is wrong or incomplete
- the test is wrong or too strict
- input assumptions are missing in the requirement

Testing often reveals requirement ambiguity—this is a learning outcome.

---

### <mark style="color:blue;">5) Common pitfalls (and fixes)</mark>

#### <mark style="color:orange;">Pitfall A</mark> — testing implementation instead of behavior

If tests fail when you refactor without changing behavior, tests are too coupled.

**Fix:** assert outputs and outcomes, not internal steps.

#### <mark style="color:orange;">Pitfall B</mark> — brittle tests

Tests that depend on unstable details (e.g., exact UI copy) break often.

**Fix:** assert stable behavior (error type/code, validation block, etc.)

#### <mark style="color:orange;">Pitfall C</mark> — too many assertions, unclear purpose

Hard to read, hard to maintain.

**Fix:** keep one core expectation per test, or split into multiple tests.

#### <mark style="color:orange;">Pitfall D</mark> — slow tests

Unit tests should be fast. If slow:

- too many external dependencies
- unmocked integrations
- heavy setup

**Fix:** isolate logic, use mocks/stubs when needed.

---

### <mark style="color:blue;">Summary</mark>

- Unit tests validate small logic quickly and reliably
- Assertions are the proof that behavior matches expectations
- A good unit test is clear, minimal, and behavior-focused
- Running tests consistently is essential for teamwork and future automation

➡️ Next: **Lab 12** — implement unit tests for selected validation/business rules and run them as part of your workflow.
