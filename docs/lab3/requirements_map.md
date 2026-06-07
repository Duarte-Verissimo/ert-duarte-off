# Requirements Map — Lab 3

## Epic, Features & Requirement Mapping

### EPIC-01 — Controlo de Segurança e Autorização (RBAC) no Intake & Discovery

*Foco: garantir que o Intake só avança com dados válidos, evidência suficiente e ações críticas protegidas por autenticação, autorização e auditoria.*

#### FEAT-01 — Autenticar utilizador no módulo de Intake
- **Requirements:** `REQ-006`
- **Related use cases:** `UC-01`

#### FEAT-02 — Atribuir permissões com base em roles corporativas
- **Requirements:** `REQ-003`, `REQ-006`
- **Related use cases:** `UC-01`, `UC-04`, `UC-05`, `UC-06`

#### FEAT-03 — Preencher dados obrigatórios do Intake
- **Requirements:** `REQ-001`
- **Related use cases:** `UC-02`

#### FEAT-04 — Anexar evidência de Disaster Recovery
- **Requirements:** `REQ-002`
- **Related use cases:** `UC-03`

#### FEAT-05 — Validar completude antes da aprovação
- **Requirements:** `REQ-004`, `NFR-005`
- **Related use cases:** `UC-04`

#### FEAT-06 — Validar validade temporal da evidência de DR
- **Requirements:** `REQ-005`
- **Related use cases:** `UC-03`, `UC-04`

#### FEAT-07 — Aprovar Intake com autorização explícita
- **Requirements:** `REQ-003`, `REQ-004`, `REQ-005`
- **Related use cases:** `UC-04`

#### FEAT-08 — Reabrir Intake aprovado com controlo de permissões
- **Requirements:** `REQ-007`, `NFR-005`
- **Related use cases:** `UC-05`

#### FEAT-09 — Executar override com reautenticação e justificação
- **Requirements:** `REQ-008`, `NFR-005`
- **Related use cases:** `UC-06`

#### FEAT-10 — Registar e reter eventos de segurança
- **Requirements:** `REQ-009`, `NFR-001`, `NFR-002`
- **Related use cases:** `UC-04`, `UC-05`, `UC-06`

## Coverage Notes

- `NFR-003`, `NFR-004` e `NFR-006` mantêm-se como restrições transversais do módulo e não foram tratados como features autónomas.
- Esta estrutura substitui a organização anterior por múltiplos épicos e passa a ser a referência do dossier para backlog e rastreabilidade funcional.
