# Mapa de Requisitos — Lab 3

## Mapeamento de Epic, Features e Requisitos

### EPIC-01 — Controlo de Segurança e Autorização (RBAC) no Intake & Discovery

*Foco: garantir que o Intake só avança com dados válidos, evidência suficiente e ações críticas protegidas por autenticação, autorização e auditoria.*

#### FEAT-01 — Autenticar utilizador no módulo de Intake
- **Requisitos:** `REQ-006`
- **Use Cases relacionados:** `UC-01`

#### FEAT-02 — Atribuir permissões com base em roles corporativas
- **Requisitos:** `REQ-003`, `REQ-006`
- **Use Cases relacionados:** `UC-01`, `UC-04`, `UC-05`, `UC-06`

#### FEAT-03 — Preencher dados obrigatórios do Intake
- **Requisitos:** `REQ-001`
- **Use Cases relacionados:** `UC-02`

#### FEAT-04 — Anexar evidência de Disaster Recovery
- **Requisitos:** `REQ-002`
- **Use Cases relacionados:** `UC-03`

#### FEAT-05 — Validar completude antes da aprovação
- **Requisitos:** `REQ-004`, `NFR-005`
- **Use Cases relacionados:** `UC-04`

#### FEAT-06 — Validar validade temporal da evidência de DR
- **Requisitos:** `REQ-005`
- **Use Cases relacionados:** `UC-03`, `UC-04`

#### FEAT-07 — Aprovar Intake com autorização explícita
- **Requisitos:** `REQ-003`, `REQ-004`, `REQ-005`
- **Use Cases relacionados:** `UC-04`

#### FEAT-08 — Reabrir Intake aprovado com controlo de permissões
- **Requisitos:** `REQ-007`, `NFR-005`
- **Use Cases relacionados:** `UC-05`

#### FEAT-09 — Executar override com reautenticação e justificação
- **Requisitos:** `REQ-008`, `NFR-005`
- **Use Cases relacionados:** `UC-06`

#### FEAT-10 — Registar e reter eventos de segurança
- **Requisitos:** `REQ-009`, `NFR-001`, `NFR-002`
- **Use Cases relacionados:** `UC-04`, `UC-05`, `UC-06`

## Notas de cobertura

- `NFR-003`, `NFR-004` e `NFR-006` mantêm-se como restrições transversais do módulo e não foram tratados como features autónomas.
- Esta estrutura substitui a organização anterior por múltiplos épicos e passa a ser a referência do dossier para backlog e rastreabilidade funcional.
