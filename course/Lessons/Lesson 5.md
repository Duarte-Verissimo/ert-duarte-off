# Lesson 5 — Requirements Engineering Part IV:

## <mark style="color:blue;">Use Case Diagram + Syntax</mark>

In this lesson you will learn how to model functional scope using **Use Cases**.\
Use Cases help you describe **who** does **what** with the system, at a level that supports analysis, communication, and later testing.

---

### <mark style="color:blue;">Learning goals</mark>

By the end of this lesson you should be able to:

- Explain what a Use Case is (and what it is not)
- Identify actors and system boundaries correctly
- Create a Use Case Diagram for your selected slice
- Write Use Case descriptions using a consistent syntax
- Avoid common modeling mistakes (too technical, wrong actors, unclear scope)

---

### <mark style="color:blue;">Lesson map</mark>

<table><thead><tr><th width="105" align="right">Section</th><th width="225">Topic</th><th>Outcome</th></tr></thead><tbody><tr><td align="right">1</td><td>Why Use Cases</td><td>When to use them and what they give you</td></tr><tr><td align="right">2</td><td>Core concepts</td><td>Actors, system boundary, use case</td></tr><tr><td align="right">3</td><td>Use Case Diagram rules</td><td>How to draw and what to include</td></tr><tr><td align="right">4</td><td>Use Case syntax</td><td>A practical template for descriptions</td></tr><tr><td align="right">5</td><td>Quality checklist</td><td>Clear, testable, consistent use cases</td></tr></tbody></table>

---

### <mark style="color:blue;">1) Why Use Cases?</mark>

Use Cases are useful when you want to:

- clarify functional scope without diving into UI/implementation
- describe interactions from a user/actor perspective
- communicate workflows clearly to stakeholders
- support test design (happy path + alternatives + exceptions)

Use Cases work well together with:

- Requirements (REQ-###) and User Stories (US-###)
- Acceptance Criteria (AC)
- Test scenarios (later: BDD scenarios)

---

### <mark style="color:blue;">2) Core concepts</mark>

#### <mark style="color:$primary;">Actor</mark>

An **actor** is an external role that interacts with the system.

- Actors can be people (roles) or external systems.
- Actors are **not** internal components (e.g., “Database” is not an actor).

Examples (adapt to your project):

- Transition Lead
- AMS Manager / Service Owner
- Contributor / Analyst
- External System (e.g., Identity Provider, Ticketing system)

#### <mark style="color:$primary;">System boundary</mark>

The system boundary defines what is **inside** your solution and what is **outside**. Everything inside the box is your system’s responsibility.

#### <mark style="color:$primary;">Use Case</mark>

A use case describes a goal an actor achieves with the system. Use case names should be verb + object:

- “Start intake session”
- “Record answer evidence”
- “Review missing critical information”
- “Export intake results”

---

### <mark style="color:blue;">3) Use Case Diagram rules (practical)</mark>

#### <mark style="color:$primary;">What your diagram must include</mark>

- A **system boundary** box with the system name
- At least **2–4 actors**
- At least **6 use cases** (recommended for a meaningful diagram)
- Associations between actors and use cases

#### <mark style="color:$primary;">Naming and scope tips</mark>

- Keep use cases at a stable “workflow capability” level (not UI buttons)
- Don’t turn every validation into a use case (unless it is a major goal)

#### <mark style="color:$primary;">Relationships (optional, use carefully)</mark>

- `<<include>>` when one use case always uses another
  - Example: “Submit intake answers” `<<include>>` “Validate mandatory fields”
- `<<extend>>` when an optional/conditional path extends another
  - Example: “Request follow-up information” `<<extend>>` “Review intake completeness”

> Tip: If you’re unsure, start without include/extend. Add them only when the diagram is stable.

---

### <mark style="color:blue;">4) Use Case Syntax (description template)</mark>

A diagram is not enough. You must be able to describe use cases using a consistent syntax.

#### <mark style="color:$primary;">Use Case template</mark>

```markdown
## UC-01 — <Use Case Name>

- Primary actor: <role>
- Supporting actors: <optional>
- Goal: <what the actor achieves>
- Preconditions: <what must be true before>
- Trigger: <what starts the use case>
- Postconditions (success): <what is true after success>
- Postconditions (failure): <what is true after failure/cancel>
- Related requirements: REQ-..., REQ-...
- Related stories (optional): US-..., US-...

### Main flow (happy path)

1. ...
2. ...
3. ...

### Alternative flows

A1. <condition> → ...
A2. <condition> → ...

### Exceptions / errors

E1. <error> → expected system behavior
E2. <error> → expected system behavior

### Notes (optional)

- Assumptions:
- Open questions:
```
