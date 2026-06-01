# ETR 2026 — Group DNR - 2171

## Team

- Duarte Verissimo
- Nuno Tainha
- Ricardo Santos

## Project choice

**Option A — Use the course baseline case study (AMS).**

## Variant

- Variant number: 3
- Primary persona: Security Officer / Administrator
- Key constraint: Strict authorization and controlled actions
- Mandatory slice: Intake & Discovery

## Tech stack

- Testing track: PyTest
- BDD status: Planned for upcoming labs; no automated BDD suite has been implemented yet
- Prototype generation track: Lovable (Lab 8)

## How to run tests

- At this stage, the repository contains the requirements, validation, traceability, and prototyping artefacts up to Lab 8
- Automated BDD execution is still pending implementation in later labs
- Lab 8 prototype verification is documented in `docs/vibe_coding_log.md`
- To verify the Lab 8 prototype:
  - `cd LovableApp/scope-prototype-main`
  - `npm install`
  - `npm run build`
  - `npm test`

## Repository overview

- `docs/` contains vision, elicitation, requirements, REM, use cases, traceability, validation, and prototyping artefacts
- `docs/diagrams/` contains the PlantUML use case diagrams
- `docs/backlog_epic_features.md` defines the official backlog structure used in the dossier: `1 Epic + 10 Features`
- `docs/generated_scope.md` defines the selected implementation scope for the Lab 8 prototype
- `docs/vibe_coding_log.md` records prompt-driven prototype generation and manual verification in Lab 8
- `LovableApp/scope-prototype-main/` contains the executable Lab 8 prototype generated with Lovable
- `templates/` contains the course REM template used as the basis for `REM_v1`

## Deliverables completed up to Lab 8

- Lab 1: vision, glossary, repository setup
- Lab 2: variant assignment, elicitation notes, requirements v0
- Lab 3: requirements v1 and requirements map aligned to the `1 Epic + 10 Features` structure
- Lab 4: objectives, CSFs, and REM v1
- Lab 5: use case diagram and initial use case descriptions
- Lab 6: refined use case diagram, complete use cases, and UC-to-requirement traceability
- Lab 7: requirements validation, acceptance criteria consolidation, and Definition of Done
- Lab 8: generated scope selection, two AI-assisted prototype iterations, executable prototype, and manual verification record

## References

- AMS GitBook
- Trello board used to support requirement organization during Lab 3:
  - https://trello.com/invite/b/698b894b781d1aaa35763d1c/ATTIbed77a2bf36c9d102b90acc72a4c9daa9F40100A/ert
