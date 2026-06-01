# AMS Case Study — Variant Assignment

### <mark style="color:blue;">**Anti-Copy Mechanism**</mark>

This page is for teams that are working with the AMS case study domain. Each team must work on **the same domain**, but with a **different variant** so they cannot copy existing requirements/user stories/acceptance criteria from the AMS GitBook.

> <mark style="color:yellow;">**Rule:**</mark> deliverables must reflect the assigned variant.\
> Any text that matches the case study wording is not accepted for that item.

---

### Team variant list (1–10)

#### Variant 1 — Audit-First Intake (Compliance/Audit Persona)

**Primary persona:** Auditor / Compliance Officer\
**Key constraint:** Full traceability and evidence retention

**Core changes for requirements & tests**

- Every intake submission must have an audit trail of changes (who/when/what)
- Evidence must be attached to “high-risk” answers
- Add negative scenarios (tampering, unauthorized edits)

**Minimum unique deliverables**

- ≥ 3 audit-specific requirements
- ≥ 2 acceptance criteria about audit evidence
- ≥ 2 test cases (one negative) validating audit trail integrity

---

#### Variant 2 — Performance at Scale (Operations Persona)

**Primary persona:** Ops Engineer / Platform Owner\
**Key constraint:** Performance and stability

**Core changes**

- Measurable NFRs: response time targets, throughput expectations
- Rate limiting / backoff behavior (as requirement or constraint)
- “Peak usage” scenario for intake submission

**Minimum unique deliverables**

- ≥ 3 measurable performance NFRs
- ≥ 2 performance-focused acceptance criteria
- ≥ 2 tests (unit or integration) validating timeouts/retries/limits (mock acceptable)

---

#### Variant 3 — Security & Role-Based Approval (Security Persona)

**Primary persona:** Security Officer / Admin\
**Key constraint:** Strict authorization and controlled actions

**Core changes**

- Role-based access for approve/reopen/override actions
- Mandatory authentication for all intake updates
- Abuse/misuse cases (unauthorized access attempts)

**Minimum unique deliverables**

- ≥ 3 authorization requirements
- ≥ 2 misuse/negative scenarios
- ≥ 2 tests validating permissions (unit/integration; mock acceptable)

---

#### Variant 4 — Data Quality & Consistency (Data Steward Persona)

**Primary persona:** Data Steward / Quality Manager\
**Key constraint:** Data validation + cross-field consistency

**Core changes**

- Cross-field validations (if X then Y must be present)
- Consistency checks between answers and evidence
- Explicit “incomplete/invalid intake state” rules

**Minimum unique deliverables**

- ≥ 3 validation rules as requirements
- ≥ 2 acceptance criteria about invalid states
- ≥ 2 tests (include at least 1 parameterized/data-driven)

---

#### Variant 5 — Multilingual & Accessibility (UX Persona)

**Primary persona:** End User / UX Advocate\
**Key constraint:** PT/EN language + accessibility considerations

**Core changes**

- Multilingual requirement (PT/EN) for all user-facing messages (or key flows)
- Accessibility requirement (keyboard navigation / readable error messages)
- Usability acceptance criteria (measurable where possible)

**Minimum unique deliverables**

- ≥ 2 language requirements
- ≥ 1 accessibility NFR
- ≥ 2 acceptance criteria focused on user-facing behavior (avoid UI design details)

---

#### Variant 6 — Evidence-Driven Decisions (Service Owner Persona)

**Primary persona:** Service Owner / Decision Maker\
**Key constraint:** Decisions require evidence, and evidence has quality rules

**Core changes**

- Evidence must be present for certain decision categories
- Evidence quality rule (e.g., “must include source + date + confidence”)
- Decision cannot be finalized if evidence missing

**Minimum unique deliverables**

- ≥ 3 evidence-quality requirements
- ≥ 2 acceptance criteria tied to evidence completeness
- ≥ 2 BDD scenarios: one happy, one missing-evidence path

---

#### Variant 7 — Reopen & Change Management (Support Persona)

**Primary persona:** Support Agent / Operator\
**Key constraint:** Reopen flow and change tracking

**Core changes**

- Reopen intake with reason and approval (if needed)
- Reopen triggers notifications (as requirement)
- Change tracking must indicate what changed since last submission

**Minimum unique deliverables**

- ≥ 3 reopen/change requirements
- ≥ 2 acceptance criteria for reopen lifecycle
- ≥ 2 test cases covering reopen + invalid reopen attempt

---

#### Variant 8 — Offline/Low-Connectivity Mode (Field Persona)

**Primary persona:** Field Technician / Mobile user\
**Key constraint:** Low connectivity and delayed submission

**Core changes**

- Local draft saving (conceptually; no need to implement UI)
- Sync behavior requirements (what happens when connectivity returns)
- Conflict resolution rules (if two drafts differ)

**Minimum unique deliverables**

- ≥ 3 offline/sync requirements
- ≥ 2 acceptance criteria on draft states
- ≥ 2 test cases focusing on state transitions (mock acceptable)

---

#### Variant 9 — Privacy & Data Retention (GDPR Persona)

**Primary persona:** Privacy Officer / Legal\
**Key constraint:** GDPR-style retention and minimization

**Core changes**

- Data minimization (collect only necessary fields)
- Retention rules (delete/anonymize after X time)
- Access logging for sensitive data

**Minimum unique deliverables**

- ≥ 3 privacy/retention requirements
- ≥ 1 measurable retention requirement (time-based)
- ≥ 2 tests validating retention rule logic (unit tests acceptable)

---

#### Variant 10 — API-First Integration (Integration Persona)

**Primary persona:** Integration Engineer\
**Key constraint:** Intake must be available via API and be consistent

**Core changes**

- API contract requirements (status codes, validation errors)
- Idempotency requirement for submission (prevent duplicates)
- Clear error payloads (verifiable)

**Minimum unique deliverables**

- ≥ 3 API-focused requirements
- ≥ 2 acceptance criteria about error responses
- ≥ 2 integration tests (can be mocked) validating API contract behavior

---

### Variant assignment record (copy/paste per team)

```markdown
# Variant Assignment — Team <NAME>

- Variant number: <1–10>
- Primary persona: <...>
- Key constraint focus: <...>
- Mandatory slice: Intake & Discovery
- Notes / clarifications:
  - ...
```
