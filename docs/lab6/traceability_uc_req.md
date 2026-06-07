# Traceability — Use Cases ↔ Requirements (Lab 6)

## Mapping (UC → REQ)

| Use Case | Linked Requirements | Notes |
| -------- | ------------------- | ----- |
| UC-01 | REQ-006, NFR-001 | Login e validação de identidade corporativa |
| UC-02 | REQ-001, NFR-003 | Preenchimento dos dados base do Intake |
| UC-03 | REQ-002, REQ-005 | Associação e validação documental da evidência de DR |
| UC-04 | REQ-003, REQ-004, REQ-005, REQ-009, NFR-005 | Aprovação condicionada por RBAC e completude |
| UC-05 | REQ-007, REQ-009, NFR-005 | Reabertura autorizada com registo de falhas |
| UC-06 | REQ-006, REQ-008, REQ-009, NFR-001 | Override condicionado por identidade e reautenticação |

## Gaps / Observations

- All use cases represented in the diagram are mapped to requirements and are consistent with the current backlog structure.
- Requirement without dedicated use case narrative:
  - `NFR-002` remains transversal to the security and audit behavior of `UC-04`, `UC-05` and `UC-06`, rather than being modeled as a standalone use case.
- Missing requirement candidates revealed by modeling:
  - If future labs require consultation of security logs by an actor, that behavior should be formalized as a new requirement before being added to the diagram.
