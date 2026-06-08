# Rastreabilidade — Requisitos ↔ Casos de Teste (Lab 9)

## Nota de correção

O `REQ-001 — Recolher detalhes de infraestrutura e contactos` foi removido desta matriz porque não fez parte do scope implementado no Lovable.

---

## Mapeamento — Requisitos para Casos de Teste

| Requisito | Casos de teste relacionados | Notas |
|---|---|---|
| REQ-002 | TC-001, TC-002 | Valida anexação de evidência de DR e bloqueio quando está em falta. |
| REQ-003 | TC-003, TC-004, TC-005, TC-019 | Valida aprovação por RBAC e bloqueio por role não autorizada. |
| REQ-004 | TC-002, TC-003, TC-004, TC-019, TC-022 | Valida bloqueio de aprovação por informação incompleta ou inválida. |
| REQ-005 | TC-003, TC-004, TC-006, TC-007, TC-008, TC-022 | Valida a validade temporal da evidência de DR. |
| REQ-006 | TC-009, TC-010 | Valida identidade e roles do diretório corporativo. |
| REQ-007 | TC-011, TC-012 | Valida reabertura autorizada e bloqueio de reabertura não autorizada. |
| REQ-008 | TC-013, TC-014, TC-015 | Valida override, reautenticação e justificação. |
| REQ-009 | TC-005, TC-012, TC-015, TC-016, TC-017 | Valida logs de auditoria. |
| NFR-001 | TC-018 | Valida timeout de sessão. |
| NFR-002 | TC-016, TC-017 | Valida integridade e persistência de logs. |
| NFR-003 | TC-020 | Valida performance do formulário. |
| NFR-005 | TC-002, TC-005, TC-006, TC-008, TC-012, TC-015, TC-019, TC-022 | Valida mensagens de erro. |
| NFR-006 | TC-021 | Valida compatibilidade nos browsers suportados. |

---

## Mapeamento — Casos de Teste para Requisitos

| Caso de teste | Requisitos relacionados | Categoria |
|---|---|---|
| TC-001 | REQ-002 | Happy path |
| TC-002 | REQ-002, REQ-004, NFR-005 | Negative / erro |
| TC-003 | REQ-003, REQ-004, REQ-005 | Happy path |
| TC-004 | REQ-003, REQ-004, REQ-005 | Fluxo alternativo |
| TC-005 | REQ-003, REQ-009, NFR-005 | Negative / erro |
| TC-006 | REQ-005, NFR-005 | Fronteira / Negative |
| TC-007 | REQ-005 | Fronteira |
| TC-008 | REQ-005, NFR-005 | Negative / erro |
| TC-009 | REQ-006 | Negativo / segurança |
| TC-010 | REQ-006 | Fluxo alternativo |
| TC-011 | REQ-007 | Happy path |
| TC-012 | REQ-007, REQ-009, NFR-005 | Negative / erro |
| TC-013 | REQ-008 | Happy path |
| TC-014 | REQ-008 | Fronteira / Negative |
| TC-015 | REQ-008, REQ-009, NFR-005 | Negative / erro |
| TC-016 | REQ-009, NFR-002 | NFR / auditoria |
| TC-017 | REQ-009, NFR-002 | NFR / Negative |
| TC-018 | NFR-001 | NFR / segurança |
| TC-019 | NFR-005, REQ-003, REQ-004 | NFR / usabilidade |
| TC-020 | NFR-003 | NFR / performance |
| TC-021 | NFR-006 | NFR / compatibilidade |
| TC-022 | REQ-004, REQ-005, NFR-005 | Negative / erro |
