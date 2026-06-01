# Templates (REM / Test Cases / Gherkin)

Copy/paste these templates into your pages and keep IDs stable across the semester.

---

### 1) REM — Requirement Elicitation Matrix (Template)

> Tip: Start with “core fields” first and iterate.\
> Keep REQ IDs stable (do not renumber).

#### REM entry (one requirement)

<table><thead><tr><th width="263">Field</th><th>Value</th></tr></thead><tbody><tr><td>Requirement ID</td><td>REQ-###</td></tr><tr><td>Title</td><td>(short and specific)</td></tr><tr><td>Stakeholder / Requester</td><td>(role/persona)</td></tr><tr><td>Type</td><td>Functional / Non-functional / Business rule</td></tr><tr><td>Priority</td><td>High / Medium / Low</td></tr><tr><td>Source</td><td>Interview / Document / Observation / Other</td></tr><tr><td>Description</td><td>(what the system must do/guarantee)</td></tr><tr><td>Rationale (why)</td><td>(value / impact)</td></tr><tr><td>Assumptions</td><td>(what we assume to be true)</td></tr><tr><td>Preconditions</td><td>(state required before)</td></tr><tr><td>Main flow (summary)</td><td>(key steps — functional only)</td></tr><tr><td>Postconditions</td><td>(state/result after)</td></tr><tr><td>Acceptance criteria</td><td>(objective, verifiable bullets)</td></tr><tr><td>Related requirements</td><td>(REQ-### dependencies/links)</td></tr><tr><td>Linked user stories</td><td>(US-###)</td></tr><tr><td>Linked use cases</td><td>(UC-###)</td></tr><tr><td>Linked test cases</td><td>(TC-###)</td></tr><tr><td>Linked BDD</td><td>(feature file + scenario or FEAT-###)</td></tr><tr><td>Validation method</td><td>Review / Demo / Test / Measurement</td></tr><tr><td>Status</td><td>Draft / Validated / Baseline</td></tr><tr><td>Version / Date / Author</td><td>vX / YYYY-MM-DD / name</td></tr></tbody></table>

#### Acceptance criteria style (recommended)

- AC-1: ...
- AC-2: ...
- AC-3: ...

#### <mark style="color:$primary;">**Template file:**</mark>

{% file src="<https://1486880778-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fv5LYIIcAVU5UesyctEOH%2Fuploads%2Fz1Yxmm5ar0CL9RvibP2N%2FREM_v2.xlsx?alt=media&token=94623276-8f86-44bc-9e4a-b885b45b0e7d>" %}

---

### 2) Manual Test Case (Template)

> Use manual test cases to design and validate before automating.\
> Keep TC IDs stable.

<table><thead><tr><th width="239">Field</th><th>Value</th></tr></thead><tbody><tr><td>Test Case ID</td><td>TC-###</td></tr><tr><td>Title</td><td>(what this validates)</td></tr><tr><td>Linked items</td><td>REQ-###, US-###, UC-###</td></tr><tr><td>Type</td><td>Unit / Integration / Acceptance / E2E</td></tr><tr><td>Priority</td><td>High / Medium / Low</td></tr><tr><td>Preconditions</td><td>(required state, auth, data)</td></tr><tr><td>Test data</td><td>(inputs, datasets, example values)</td></tr><tr><td>Steps</td><td>1) … 2) … 3) …</td></tr><tr><td>Expected result</td><td>(objective expected outcome)</td></tr><tr><td>Notes</td><td>(risks, constraints, edge cases)</td></tr><tr><td>Automation</td><td>Manual / Automated</td></tr><tr><td>Tool</td><td>PyTest / JUnit / pytest-bdd / Cucumber</td></tr><tr><td>Status</td><td>Draft / Pass / Fail</td></tr></tbody></table>

#### Example (mini)

- Preconditions: user is authenticated
- Steps: submit intake form with missing required field
- Expected: validation error “field X is required”

---

### 3) Gherkin Feature File (Template)

> Keep scenarios business-focused (avoid UI details).\
> Write outcomes that are verifiable.

```gherkin
Feature: <capability name>
  As a <persona/stakeholder>
  I want <goal>
  So that <benefit>

  Background:
    Given <common state for scenarios>

  @happy
  Scenario: <happy path title>
    Given <precondition>
    When <action>
    Then <verifiable outcome>

  @validation
  Scenario: <validation error title>
    Given <precondition>
    When <invalid action/input>
    Then <error outcome>
    And <no data is persisted>   # example of extra verification

  @outline
  Scenario Outline: <parameterized title>
    Given <precondition>
    When I submit "<input>"
    Then I get "<expected>"

    Examples:
      | input | expected |
      | ...   | ...      |
      | ...   | ...      |
```

### 4) Step definitions (skeleton hints)

#### Python (pytest-bdd) — skeleton idea

- Put `.feature` files in `bdd/features/`
- Put step files in `bdd/steps/`
- Keep steps reusable and keep system state controlled (fixtures)

**Naming tip:** align step function names with the scenario intent, not UI details.

#### Java (Cucumber) — skeleton idea

- Put `.feature` files in `src/test/resources/features`
- Put step classes in `src/test/java/.../steps`
- Keep step methods small and map them to service/API calls where possible

---

### 5) Traceability matrix (Template)

<table><thead><tr><th width="117">Requirement</th><th width="120">User Story</th><th width="113">Use Case</th><th width="120">Test Case</th><th>Feature/Scenario</th><th>Automated Test</th></tr></thead><tbody><tr><td>REQ-###</td><td>US-###</td><td>UC-###</td><td>TC-###</td><td>file.feature#Scenario</td><td>tests/...::test_name</td></tr><tr><td>REQ-###</td><td>US-###</td><td>UC-###</td><td>TC-###</td><td>file.feature#Scenario</td><td>tests/...::test_name</td></tr></tbody></table>

---
