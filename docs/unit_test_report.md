# Lab 12 — Relatório de Testes Unitários com PyTest

## Objetivo

O objetivo do Lab 12 é consolidar a evidência de testes unitários criada no Lab 11, mostrando como as regras críticas do slice **Intake & Discovery** são verificadas com Python + PyTest.

Este relatório documenta os testes, as assertions principais, os requisitos cobertos, os critérios de aceitação selecionados e a evidência de execução.

## Scope selecionado

O scope mantém-se limitado à Variante 3 — **Security & Role-Based Approval**.

Não foram criados novos requisitos, UI, Selenium, base de dados, autenticação real ou alterações ao protótipo React.

## Requisitos escolhidos

- `REQ-003 — Restringir aprovação do Intake por RBAC`
- `REQ-005 — Verificar validade temporal da evidência de Disaster Recovery`
- `REQ-009 — Registar tentativas de ações não autorizadas`

## Critérios de Aceitação selecionados

1. `REQ-003` — Utilizador autorizado pode aprovar um Intake válido.
2. `REQ-003` — `Viewer` não pode aprovar e recebe `Acesso Negado`.
3. `REQ-005` — Evidência de DR exatamente com 365 dias é aceite.
4. `REQ-005` — Evidência de DR com mais de 365 dias é rejeitada.
5. `REQ-005` — Evidência de DR com data futura é rejeitada.
6. `REQ-009` — Tentativa não autorizada cria/persiste audit log sem revelar isso ao utilizador.

> Nota: no `REQ-009`, os critérios relacionados com criação do audit log, persistência em menos de 1 segundo e não divulgação explícita ao utilizador foram agrupados num único AC automatizado. Esta decisão foi tomada para respeitar o limite de 6 acceptance criteria total definido para o Lab 12, mantendo a rastreabilidade aos comportamentos principais do requisito.

## Funções testadas

- `approve_intake`
- `validate_dr_evidence_date`
- `persist_audit_event`

## Testes unitários

| Teste PyTest                                                                    | REQ/AC                                                               | Tipo                   | Assertions principais                                                                                                            |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `test_authorized_transition_manager_can_approve_valid_intake`                   | REQ-003 / utilizador autorizado aprova Intake válido                 | Happy                  | `allowed is True`, estado `Aprovado`, sem audit events                                                                           |
| `test_authorized_security_officer_can_approve_valid_intake`                     | REQ-003 / utilizador autorizado aprova Intake válido                 | Happy                  | `allowed is True`, estado `Aprovado`, sem audit events                                                                           |
| `test_viewer_cannot_approve_intake`                                             | REQ-003 / `Viewer` não pode aprovar                                  | Negative               | `allowed is False`, estado permanece `Draft`, mensagem contém `Acesso Negado`                                                    |
| `test_dr_evidence_exactly_365_days_old_is_valid`                                | REQ-005 / evidência com 365 dias é aceite                            | Boundary               | `is_valid is True`, `age_days == 365`                                                                                            |
| `test_dr_evidence_older_than_365_days_is_rejected`                              | REQ-005 / evidência com mais de 365 dias é rejeitada                 | Negative               | `is_valid is False`, `age_days == 366`, mensagem indica prazo inválido                                                           |
| `test_dr_evidence_future_date_is_rejected`                                      | REQ-005 / data futura é rejeitada                                    | Negative               | `is_valid is False`, `age_days == -1`, mensagem indica data futura                                                               |
| `test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user` | REQ-009 / tentativa não autorizada cria audit event sem divulgar log | Security / Negative    | existe um audit event com `user_id`, `action`, `timestamp_utc`; mensagem não menciona log/auditoria                              |
| `test_audit_log_is_persisted_in_less_than_one_second`                           | REQ-009 / audit log é persistido em menos de 1 segundo               | Security / Performance | evento guardado no `audit_store`, `persisted is True`, `elapsed_seconds < 1`, evento mantém `user_id`, `action`, `timestamp_utc` |

## Checklist de cobertura

| Critério                  | Evidência                                                                              | Estado   |
| ------------------------- | -------------------------------------------------------------------------------------- | -------- |
| ≥ 8 unit tests            | 8 testes em `tests/unit/test_intake_rules.py`                                          | Cumprido |
| ≥ 4 happy-path assertions | Aprovação autorizada, estado `Aprovado`, ausência de audit events, evidência DR válida | Cumprido |
| ≥ 2 negative/error tests  | Bloqueio de `Viewer`, DR com 366 dias, DR futura, tentativa não autorizada             | Cumprido |
| ≥ 1 boundary test         | Evidência de DR exatamente com 365 dias                                                | Cumprido |

## Evidência de Execução

- Data: 2026-06-01
- Comando usado: `python -m pytest -q`
- Testes executados: 8
- Passaram: 8
- Falharam: 0
- Resumo do resultado: `8 passed`

## Limitações conhecidas

- A persistência do audit log é simulada em memória através de uma lista.
- Não existe teste UI/Selenium neste Lab.
- Não existe base de dados real.
- Não existe integração real com Active Directory, SSO ou autenticação corporativa.

## Nota posterior sobre o protótipo React

O protótipo React passou a refletir o REQ-009 através de audit events simulados em memória. A persistência real continua fora de scope; a simulação existe apenas para demonstração académica e não substitui os testes PyTest dos Labs 11 e 12.
