# Lesson 10 — Testing Part II:

## <mark style="color:blue;">Test Planning (Static, Dynamic,</mark> [<mark style="color:blue;">TDD</mark>](#user-content-fn-1)[^1]<mark style="color:blue;">,</mark> [<mark style="color:blue;">BDD</mark>](#user-content-fn-2)[^2]<mark style="color:blue;">) + Validating Requirements with Tests (AC & DoD Revisited)</mark>

This lesson connects testing to planning and requirements validation.\
You will learn how to plan tests using different approaches (Static/Dynamic, TDD, BDD) and how tests provide evidence that requirements are fulfilled. We will revisit **Acceptance Criteria (AC)** and **Definition of Done (DoD)** to ensure your testing work is aligned and measurable.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what test planning is and why it matters
- Distinguish **static vs dynamic testing**
- Understand where **TDD** and **BDD** fit in a test strategy
- Build a simple test plan for your project slice
- Validate requirements using test cases and BDD scenarios
- Revisit and strengthen AC and DoD based on testing evidence

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="100" align="right">Section</th><th width="296">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why test planning</td><td>A structured approach to testing effort</td></tr><tr><td align="right">2</td><td>Static vs Dynamic</td><td>Know what can be validated without execution</td></tr><tr><td align="right">3</td><td>TDD</td><td>Write tests to drive design (when appropriate)</td></tr><tr><td align="right">4</td><td>BDD</td><td>Scenarios to validate behavior and AC</td></tr><tr><td align="right">5</td><td>Requirements validation with tests</td><td>REQ ↔ TC ↔ Scenario evidence</td></tr><tr><td align="right">6</td><td>AC &#x26; DoD revisited</td><td>Improve definitions based on testability</td></tr></tbody></table>

---

### <mark style="color:blue;">1) What is test planning?</mark>

Test planning is the process of deciding:

- **what** will be tested (scope, priorities)
- **how** it will be tested (types, tools, environments)
- **when** it will be tested (timeline, milestones)
- **who** will test (roles and responsibilities)
- **how evidence will be recorded** (traceability, reporting)

A good plan prevents:

- random, incomplete testing
- surprises near delivery
- mismatch between requirements and what is actually verified

---

### <mark style="color:blue;">2) Static vs Dynamic testing</mark>

#### <mark style="color:$primary;">Static testing (no code execution)</mark>

**Static testing** evaluates artifacts without running the system:

- reviews/inspections of requirements
- walkthroughs of use cases
- checking acceptance criteria quality
- reviewing test cases for completeness and ambiguity

**Static testing** is valuable because it catches issues early:

- unclear requirements
- missing acceptance criteria
- contradictions
- untestable statements

#### <mark style="color:$primary;">Dynamic testing (execution-based)</mark>

**Dynamic testing** runs the system or parts of it:

- unit tests
- integration tests
- system/end-to-end tests
- manual acceptance tests

**Dynamic testing** provides runtime evidence:

- validations actually work
- integration really happens
- behavior matches scenarios

---

### <mark style="color:blue;">3) TDD (Test-Driven Development) — where it fits</mark>

**TDD** is a development practice:

1. Write a failing test
2. Implement minimal code to pass
3. Refactor safely

TDD is strongest when:

- logic is deterministic (validation rules, calculations, mapping)
- you want fast feedback and confidence during refactoring
- you can write a clear expected outcome

TDD is not mandatory everywhere, but it is useful for:

- core validation rules from requirements
- boundary cases (min/max, invalid formats)
- business rules

---

### <mark style="color:blue;">4) BDD (Behavior-Driven Development) — where it fits</mark>

**BDD** represents behavior using scenarios that stakeholders can understand.\
It often uses **Gherkin**:

- Given (context)
- When (action)
- Then (expected outcome)

**BDD** is strongest when:

- you want shared understanding between stakeholder and dev/test
- you want traceability from requirements to scenarios
- you want to express acceptance criteria as behavior

**BDD** helps reduce ambiguity because:

- scenarios force clear conditions and observable outcomes

---

### <mark style="color:$primary;">5) Validating requirements with tests</mark>

A requirement is validated through evidence:

- a test case (TC-###)
- a scenario (Gherkin)
- a demonstration with measurable outcomes
- a review that confirms a static property (for some NFRs)

#### <mark style="color:$primary;">Practical traceability chain</mark>

- **REQ-### → AC → TC-### / Scenario → Evidence**

Where “evidence” can be:

- executed test result
- manual test record
- measurement log
- screenshots / demo notes (when appropriate)

If you cannot create test cases for a requirement:

- it is likely ambiguous, too broad, or missing acceptance criteria

---

### <mark style="color:blue;">6) Acceptance Criteria and DoD revisited</mark>

Testing often reveals:

- AC that are too vague to test
- missing edge cases
- unclear boundaries
- missing error handling expectations

#### <mark style="color:$primary;">Strengthen Acceptance Criteria (AC)</mark>

Replace vague statements with verifiable outcomes:

- “fast” → measurable response time threshold
- “secure” → explicit authorization and audit expectations
- “easy” → usability criteria or measurable steps/time

#### <mark style="color:$primary;">Update Definition of Done (DoD)</mark>

DoD should reflect test evidence. Example additions:

- “All AC are covered by test cases or scenarios”
- “Negative and boundary tests exist for key rules”
- “Traceability matrix updated (REQ ↔ TC/Scenario)”
- “No critical defects open”

> DoD is a contract. It must match what you actually verify.

---

### <mark style="color:blue;">Simple test planning structure (what you should be able to produce)</mark>

A minimal plan includes:

1. **Scope**
   - slice covered and what is out of scope
2. **Test levels**
   - Unit / Integration / System / Acceptance
3. **Approaches**
   - Static reviews (requirements + test case review)
   - Dynamic execution plan
   - TDD for selected rules
   - BDD scenarios for acceptance behavior
4. **Coverage goals**
   - happy path + negative + boundary
   - NFR verification approach (measurement/review)
5. **Evidence and reporting**
   - where test results are recorded
   - traceability maintained

---

### <mark style="color:blue;">Summary</mark>

- Test planning makes testing intentional and complete
- Static testing catches issues early; dynamic testing provides runtime evidence
- TDD drives design through tests; BDD validates behavior through scenarios
- Tests are the main evidence that requirements are fulfilled
- AC and DoD should be revisited and improved based on testability

➡️ Next: **Lab 10** — Build a test plan for your slice and align REQ ↔ AC ↔ TC/BDD scenarios (traceability required).

[^1]: TDD (Test-Driven Development)

[^2]: BDD (Behavior-Driven Development)
