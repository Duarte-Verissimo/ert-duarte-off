# Assessment & Deliverables (Labs)

This page describes how the Lab (Practical) component is evaluated.

> **Note:** The overall course also includes a Theory component (not covered here).\
> This GitBook focuses only on the **Lab evaluation and deliverables**.

This component represents **50%** of the total evaluation (**50% Theory + 50% Practical**).

---

### Practical dossier (what is evaluated)

Your practical dossier is evaluated from your **team GitHub repository** only.

- **Team GitHub repository**\
  Code, tests, execution instructions, and all required deliverables under `/docs`, `/tests`, `/bdd`, and `/templates`.

> **Note:** This GitBook is a **course reference** (instructions + templates). Students do not edit GitBook pages; all outputs must be submitted via GitHub.

---

### Practical grade structure

#### 1) In-class follow-up — 20%

This component rewards consistent progress and engagement.

**Participation & contributions — 10%**

- constructive questions, peer review, decision-making
- evidence of iterative improvement
- active involvement in role-play / validation moments

**Lab mini-checks (individual) — 10%**

- short individual checkpoints done during labs (typically 5–10 minutes)
- **best 5 mini-checks are counted** (to handle absences or off-days)
- mini-checks are typically individual, even if the project is in groups

---

#### 2) Intermediate submissions — 40%

Your practical dossier is built in iterations. Intermediate submissions:

- are reviewed and can be improved later
- reward steady progress (not just “last minute work”)

**Typical checkpoints** (final dates may be confirmed in class):

**Checkpoint 1 — Requirements baseline**

- Vision + scope slice
- Requirements v1 + REM v1
- Stakeholders, glossary, assumptions

**Must include (minimum)**

- `docs/vision.md` (vision + goals + non-goals + slice)
- `docs/glossary.md`
- `docs/requirements_v1.md`
- REM v1 (linked/exported using the course template)
- `docs/requirements_map.md` (epic/area → REQ-###)

---

**Checkpoint 2 — Model + acceptance**

- Use Cases (diagram + flows)
- User Stories + acceptance criteria
- REM updated + traceability links

**Must include (minimum)**

- Use case diagram (PNG or PlantUML) under `docs/diagrams/`
- `docs/use_cases.md` (at least 2 complete use cases)
- `docs/user_stories.md` (US-### backlog slice)
- `docs/acceptance_criteria.md`
- Updated REM + partial traceability links (REQ ↔ UC/US)

---

**Checkpoint 3 — Test design**

- Testing strategy + risk-based priorities
- Manual test cases (TC-###)
- Automation plan (what will be automated and why)

**Must include (minimum)**

- `docs/test_plan.md` (levels + scope + priorities)
- `docs/test_cases.md` (TC-### manual test cases)
- `bdd/features/` with at least 1 feature file
- `docs/automation_plan.md` (what you will automate and why)

---

#### 3) Final submission — 40%

The final submission is evaluated as:

**Solution quality — 50% of the final submission**

- requirement quality (clear, measurable, testable)
- traceability completeness (REQ ↔ AC ↔ tests)
- automated tests running (**PyTest/JUnit**)
- BDD features + **at least 2 executable scenarios (minimum)**
- **UI automation (e.g., Selenium) is optional** and only if justified by a stable web UI and a clear value case

**Presentation — 25% of the final submission**

- short demo showing a full chain: **REQ → acceptance → BDD/test case → running test**
- clarity, time management, ability to justify decisions and trade-offs

**Report / dossier — 25% of the final submission**

- repository organization and completeness (`/docs`, `/tests`, `/bdd`, `/templates`)
- evidence of validation (peer review, issues fixed)
- readable templates and consistent IDs
- clear README with setup and run instructions

---

### Minimum expectations (to avoid losing points)

#### Requirements quality

- every requirement has an ID (**REQ-###**)
- acceptance criteria are objective and verifiable
- ambiguities are explicitly resolved (avoid “fast”, “easy”, “intuitive”)
- do not mix requirement with implementation detail (“how”)

#### Traceability

You should be able to trace:

- **REQ ↔ US ↔ UC ↔ (TC and/or Feature/Scenario)**\
  and at least the key flows should be backed by automated tests.

#### Test execution

- tests must run with **one command**
- tests should be deterministic (avoid flaky tests)
- README includes setup + run instructions (and versions if relevant)
- running tests should be **CI-friendly** (recommended)

#### Academic integrity (important)

- Use the AMS case study for **domain understanding and workflows**
- **Do not copy** wording of requirements, user stories, or acceptance criteria from the case study pages\
  (paraphrase, adapt, and ensure your own scope/slice choices are clear)
- Keep short, factual “AI usage notes” (what you used and for what)

---

### Evidence to include (recommended)

- GitHub repo link + commit/tag for each checkpoint
- Repository docs updated and dated (`/docs`)
- Test execution output (short screenshots/log snippet)
- Validation notes (peer review issues + fixes)
- “AI usage notes” (short, factual, no essays)

---

### Deliverables overview (what we expect to see)

By the end of the semester your GitHub repository should contain, at minimum:

- Vision, scope, slice definition (`docs/vision.md`)
- Stakeholders + glossary + assumptions (`/docs`)
- Requirements v2 (or later) + REM (iterated)
- Use cases (diagram + flows)
- Backlog (user stories) + acceptance criteria
- Testing strategy + risk priorities
- Manual test cases (TC-###)
- Automated tests (PyTest/JUnit)
- BDD features + step definitions + **executable scenarios**
- Final traceability matrix and validation report
