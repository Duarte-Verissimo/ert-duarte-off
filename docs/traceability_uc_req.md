# Rastreabilidade — Use Cases ↔ Requisitos (Lab 6)

## Mapeamento (UC → REQ)

| Use Case | Requisitos ligados | Notas |
| -------- | ------------------- | ----- |
| UC-01 | REQ-006, NFR-001 | Login e validação de identidade corporativa |
| UC-02 | REQ-001, NFR-003 | Preenchimento dos dados base do Intake |
| UC-03 | REQ-002, REQ-005 | Associação e validação documental da evidência de DR |
| UC-04 | REQ-003, REQ-004, REQ-005, REQ-009, NFR-005 | Aprovação condicionada por RBAC e completude |
| UC-05 | REQ-007, REQ-009, NFR-005 | Reabertura autorizada com registo de falhas |
| UC-06 | REQ-006, REQ-008, REQ-009, NFR-001 | Override condicionado por identidade e reautenticação |

## Gaps / Observações

- Todos os use cases representados no diagrama estão mapeados a requisitos e são consistentes com a estrutura atual do backlog.
- Requisito sem narrativa de use case dedicada:
  - `NFR-002` permanece transversal ao comportamento de segurança e auditoria de `UC-04`, `UC-05` e `UC-06`, em vez de ser modelado como use case autónomo.
- Candidatos a requisitos em falta revelados pela modelação:
  - Se labs futuros exigirem a consulta de logs de segurança por um ator, esse comportamento deve ser formalizado como novo requisito antes de ser adicionado ao diagrama.
