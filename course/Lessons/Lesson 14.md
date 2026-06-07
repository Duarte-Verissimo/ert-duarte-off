# Lesson 13 — Software Testing:

## <mark style="color:blue;">Behavior-Driven Development (BDD) + Feature/Scenario/Behavior + Test Automation</mark>

This lesson introduces **Behavior-Driven Development (BDD)** as a way to express expected system behavior in a shared language and connect it to automated testing. You will learn how **Features** and **Scenarios** capture behavior and how they can be automated using tools such as **Cucumber** or **Behave**.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what BDD is and why teams use it
- Distinguish **Feature**, **Scenario**, and **Behavior**
- Write clear Gherkin scenarios (Given/When/Then) aligned with acceptance criteria
- Understand the difference between scenarios and step definitions
- Explain what it means to automate BDD tests and how it fits into a test strategy

---

### Lesson map

<table><thead><tr><th width="118" align="right">Section</th><th width="265">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>What is BDD?</td><td>Shared understanding + executable behavior</td></tr><tr><td align="right">2</td><td>Feature / Scenario / Behavior</td><td>Core concepts and structure</td></tr><tr><td align="right">3</td><td>Writing good scenarios</td><td>Clarity, scope, and testability</td></tr><tr><td align="right">4</td><td>From scenarios to automation</td><td>Steps, step definitions, glue code</td></tr><tr><td align="right">5</td><td>Where BDD fits</td><td>Complementing unit and integration tests</td></tr><tr><td align="right">6</td><td>Common pitfalls</td><td>Avoid brittle or meaningless BDD</td></tr></tbody></table>

---

### <mark style="color:blue;">1) What is BDD (Behavior-Driven Development)?</mark>

BDD is a collaboration and testing approach that:

- describes expected behavior in a readable format
- improves communication between stakeholders, developers, and testers
- turns acceptance criteria into **executable specifications**

BDD emphasizes:

- behavior and outcomes
- clear scenarios
- shared language (domain terms)

BDD often uses **Gherkin** syntax:

- Given (context)
- When (action)
- Then (expected outcome)

---

### <mark style="color:blue;">2) Feature, Scenario, and Behavior</mark>

#### <mark style="color:$primary;">Feature</mark>

A **Feature** is a high-level capability or behavior area of the system. It sets context and business value.

Example:

- “Evidence metadata validation”

#### <mark style="color:$primary;">Scenario</mark>

A **Scenario** is a concrete example of behavior:

- one situation
- one action
- one expected outcome

Example:

- “Submission fails when evidence owner is missing”

#### <mark style="color:$primary;">Behavior</mark>

“Behavior” is what the system does in response to inputs and context. BDD scenarios are a way to specify behavior precisely.

---

### <mark style="color:blue;">3) Writing good scenarios (quality rules)</mark>

A good scenario should be:

- short and focused (one behavior)
- written in domain language (not UI details)
- testable and observable
- consistent with acceptance criteria

#### <mark style="color:$primary;">Good Given/When/Then pattern</mark>

- **Given** establishes state and context
- **When** is the action/event
- **Then** is the observable outcome

#### <mark style="color:$primary;">Example (conceptual)</mark>

```gherkin
Scenario: Submission is blocked when evidence owner is missing
  Given a user is editing an intake answer
  When the user submits the answer without evidence owner
  Then the system prevents submission
  And the system shows a validation error for evidence owner
```

#### <mark style="color:$primary;">Scenario coverage mindset</mark>

You should include scenarios for:

- happy path
- alternative flow
- negative/error cases
- boundaries (when relevant)

---

### <mark style="color:blue;">4) From scenarios to automation</mark>

BDD automation typically includes:

#### <mark style="color:$primary;">Feature files</mark>

- `.feature` files written in Gherkin
- contain Features and Scenarios

#### <mark style="color:$primary;">Step definitions (glue code)</mark>

Step definitions connect Given/When/Then lines to executable code.

Example concept:

- `Given a user is editing an intake answer` → setup state
- `When the user submits...` → perform action
- `Then the system prevents submission` → assertions

#### <mark style="color:$primary;">What automation means</mark>

Automation means:

- scenarios can be executed repeatedly
- results are reported (pass/fail)
- behavior remains consistent across changes

---

### <mark style="color:blue;">5) Where BDD fits in a test strategy</mark>

BDD does not replace unit tests.

A healthy testing strategy usually looks like:

- **Unit tests**: fast, lots of coverage of logic
- **Integration tests**: verify component interactions
- **BDD scenarios**: verify key behaviors and acceptance criteria
- **UI/E2E tests** (optional): limited and carefully chosen

BDD is most valuable for:

- acceptance behaviors that stakeholders care about
- workflows that must remain stable
- clarifying ambiguity in requirements

---

### <mark style="color:blue;">6) Common pitfalls (and fixes)</mark>

#### <mark style="color:orange;">Pitfall A</mark> — scenarios are too UI-specific

Bad:

- “click button X”

Better:

- describe behavior and outcomes; UI actions should only appear if necessary.

#### <mark style="color:orange;">Pitfall B</mark> — scenarios are too broad

If a scenario tries to cover a whole epic, it becomes unreadable and fragile.

Fix:

- split into multiple scenarios focused on one behavior each.

#### <mark style="color:orange;">Pitfall C</mark> — no assertions in “Then”

If “Then” is vague, automation becomes meaningless.

Fix:

- ensure “Then” includes observable outcomes and validations.

#### <mark style="color:orange;">Pitfall D</mark> — duplicate scenarios

Avoid repeating the same behavior with minor wording changes.

Fix:

- use Scenario Outline with examples (when appropriate), or consolidate.

---

### <mark style="color:blue;">Summary</mark>

- BDD specifies behavior using readable scenarios
- Feature = behavior area; Scenario = concrete example; Behavior = response/outcome
- Scenarios should be short, domain-focused, and testable
- Automation connects feature files to step definitions and assertions
- BDD complements unit/integration tests and supports acceptance validation

➡️ Next: **Lab 13** — Write and automate BDD scenarios (feature files + step definitions) and connect them to requirements and acceptance criteria.
