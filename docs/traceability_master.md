# Lab 14 — Traceability Master

## Objetivo

Consolidar a rastreabilidade do dossiê numa matriz única `REQ → AC → Test Case → Unit Test → BDD Scenario → Evidence`.

Esta matriz agrega a informação existente nos requisitos, acceptance criteria, test cases, planos de teste, relatórios PyTest e relatórios BDD. Para requisitos sem automação, a cobertura é registada como documental ou planeada, sem inventar novos testes.

## Fontes consultadas

- `docs/requirements_v1.md`
- `docs/acceptance_criteria.md`
- `docs/test_cases.md`
- `docs/test_plan.md`
- `docs/traceability_req_tc.md`
- `docs/traceability_req_ac_tc.md`
- `docs/traceability_req_bdd.md`
- `docs/unit_test_report.md`
- `docs/bdd_report.md`

## Matriz consolidada

| Requisito | Acceptance Criteria / comportamento rastreado | Test Case | Unit Test | BDD Scenario | Evidence | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 — Recolher detalhes de infraestrutura e contactos | Recolher infraestrutura, contactos operacionais e contactos de escalamento; impedir avanço sem dados mínimos. | Não incluído no scope de testes do Lovable. | Não automatizado | Não automatizado | `docs/requirements_v1.md`; nota de exclusão em `docs/test_cases.md` | Gap documentado / fora do scope implementado |
| REQ-002 — Anexar evidência de Disaster Recovery | Anexar evidência PDF; associar ao Intake; bloquear submissão sem evidência. | TC-001, TC-002 | Não automatizado | Não automatizado no Lab 13; BDD documental anterior em `lab9.feature` | `docs/test_cases.md`; `docs/traceability_req_tc.md` | Cobertura documental |
| REQ-003 — Restringir aprovação do Intake por RBAC | Roles autorizadas aprovam; `Viewer` recebe `Acesso Negado`; estado não muda quando bloqueado. | TC-003, TC-004, TC-005, TC-019 | `test_authorized_transition_manager_can_approve_valid_intake`; `test_authorized_security_officer_can_approve_valid_intake`; `test_viewer_cannot_approve_intake` | `Percurso feliz - Transition Manager aprova um Intake válido`; `Percurso alternativo - Security Officer aprova um Intake válido`; `Percurso negativo - Viewer tenta aprovar e é bloqueado` | `docs/unit_test_report.md`; `docs/bdd_report.md`; `docs/traceability_req_bdd.md` | Automatizado com PyTest e Behave |
| REQ-004 — Bloquear aprovação por informação incompleta | Bloquear aprovação quando falta informação/evidência; manter `Draft`; apresentar erro. | TC-002, TC-003, TC-004, TC-019, TC-022 | Não automatizado de forma dedicada | Não automatizado no Lab 13; BDD documental anterior em `lab9.feature` | `docs/test_cases.md`; `docs/traceability_req_ac_tc.md` | Cobertura documental / gap de automação |
| REQ-005 — Verificar validade temporal da evidência de Disaster Recovery | Aceitar 365 dias; rejeitar mais de 365 dias; rejeitar data futura; informar prazo inválido. | TC-003, TC-004, TC-006, TC-007, TC-008, TC-022 | `test_dr_evidence_exactly_365_days_old_is_valid`; `test_dr_evidence_older_than_365_days_is_rejected`; `test_dr_evidence_future_date_is_rejected` | `Comportamento de fronteira - Evidência de DR exatamente com 365 dias é aceite`; `Percurso negativo - Evidência de DR com mais de 365 dias é rejeitada`; `Percurso negativo - Evidência de DR com data futura é rejeitada` | `docs/unit_test_report.md`; `docs/bdd_report.md`; `docs/traceability_req_bdd.md` | Automatizado com PyTest e Behave |
| REQ-006 — Verificar identidade e roles no diretório corporativo | Rejeitar conta inválida/desativada; mapear role corporativa; impedir ações críticas se validação falhar. | TC-009, TC-010 | Não automatizado | Não automatizado | `docs/test_cases.md`; `docs/traceability_req_tc.md` | Planeado / fora do scope de automação atual |
| REQ-007 — Reabrir Intake aprovado com controlo de permissões | Reabrir com role autorizada; bloquear role não autorizada; gerar auditoria. | TC-011, TC-012 | Não automatizado | Não automatizado no Lab 13; BDD documental anterior em `lab9.feature` | `docs/test_cases.md`; `docs/traceability_req_ac_tc.md` | Cobertura documental / gap de automação |
| REQ-008 — Executar override com reautenticação e justificação | Exigir password e justificação; bloquear justificação curta; cancelar password incorreta e gerar log. | TC-013, TC-014, TC-015 | Não automatizado | Não automatizado no Lab 13; BDD documental anterior em `lab9.feature` | `docs/test_cases.md`; `docs/traceability_req_ac_tc.md` | Cobertura documental / gap de automação |
| REQ-009 — Registar tentativas de ações não autorizadas | Criar audit event; incluir User ID, data/hora UTC e ação; persistir em menos de 1 segundo; não revelar log ao utilizador. | TC-005, TC-012, TC-015, TC-016, TC-017 | `test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user`; `test_audit_log_is_persisted_in_less_than_one_second` | `Percurso negativo - Tentativa não autorizada cria audit event`; `Percurso feliz - Audit event é persistido em menos de 1 segundo` | `docs/unit_test_report.md`; `docs/bdd_report.md`; `docs/traceability_req_bdd.md` | Automatizado com PyTest e Behave |
| NFR-001 — Timeout de sessão inativa | Invalidar sessão após 15 minutos; exigir novo login. | TC-018 | Não automatizado | Não automatizado | `docs/test_cases.md`; `docs/test_plan.md` | Gap de automação |
| NFR-002 — Retenção, integridade e consulta dos logs | Logs disponíveis durante 5 anos; alterações não autorizadas rejeitadas e registadas. | TC-016, TC-017 | Parcial: `test_audit_log_is_persisted_in_less_than_one_second` cobre persistência simulada, não retenção. | Parcial: `Percurso feliz - Audit event é persistido em menos de 1 segundo` cobre persistência simulada. | `docs/unit_test_report.md`; `docs/bdd_report.md`; `docs/test_cases.md` | Cobertura parcial |
| NFR-003 — Performance do formulário de Intake | Formulário e dados carregam em <= 2 segundos para 95% dos pedidos. | TC-020 | Não automatizado | Não automatizado | `docs/test_cases.md`; `docs/test_plan.md` | Gap de automação |
| NFR-004 — Disponibilidade mensal do módulo | 99.9% de disponibilidade mensal excluindo manutenção planeada. | Não há TC dedicado identificado. | Não automatizado | Não automatizado | `docs/requirements_v1.md` | Gap documental e de automação |
| NFR-005 — Tempo e localização das mensagens de erro | Mensagens no mesmo ecrã, junto da ação/campo, em até 1 segundo. | TC-002, TC-005, TC-006, TC-008, TC-012, TC-015, TC-019, TC-022 | Parcial: assertions de texto em `Acesso Negado`, `fora do prazo aceite`, `futura`. | Parcial: cenários BDD validam mensagens de negócio, não localização/tempo UI. | `docs/unit_test_report.md`; `docs/bdd_report.md`; `docs/test_cases.md` | Cobertura parcial |
| NFR-006 — Compatibilidade nos browsers suportados | Fluxos críticos completam em Chrome e Edge suportados. | TC-021 | Não automatizado | Não automatizado | `docs/test_cases.md`; `docs/test_plan.md` | Gap de automação |

## Resumo

- Requisitos funcionais incluídos: 9 (`REQ-001` a `REQ-009`).
- NFRs incluídos: 6 (`NFR-001` a `NFR-006`).
- Requisitos com automação PyTest + Behave: `REQ-003`, `REQ-005`, `REQ-009`.
- Requisitos com cobertura documental ou planeada, mas sem automação dedicada: `REQ-001`, `REQ-002`, `REQ-004`, `REQ-006`, `REQ-007`, `REQ-008`, `NFR-001`, `NFR-003`, `NFR-004`, `NFR-006`.
- NFRs com cobertura parcial: `NFR-002`, `NFR-005`.
