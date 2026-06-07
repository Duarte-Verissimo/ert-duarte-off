# Lab 11 — Test First Log

## 1. Requisitos selecionados

Foram selecionados três requisitos do slice **Intake & Discovery**, alinhados com a Variante 3 — Security & Role-Based Approval:

- `REQ-003 — Restrição da aprovação do Intake por RBAC`
- `REQ-005 — Verificar a validade temporal da evidência de Disaster Recovery`
- `REQ-009 — Registar tentativas de ações não autorizadas`

## 2. Acceptance Criteria automatizados

Foram automatizados critérios de aceitação relacionados com aprovação controlada por role, validação temporal da evidência de Disaster Recovery e auditoria de tentativas bloqueadas.

No `REQ-003`, os testes cobrem aprovação por `Transition Manager`, aprovação por `Security Officer` e bloqueio de `Viewer` com `Acesso Negado`.

No `REQ-005`, os testes cobrem a fronteira de 365 dias, rejeição de 366 dias e rejeição de data futura.

No `REQ-009`, os testes cobrem a criação de registo de auditoria numa tentativa não autorizada, a persistência do log em menos de 1 segundo após o bloqueio e a ausência de confirmação explícita ao utilizador bloqueado.

## 3. Estratégia Test First / TDD

A abordagem seguida foi **Test First / TDD**:

1. Escrever primeiro os testes PyTest em `tests/unit/test_intake_rules.py`.
2. Executar os testes antes de existir a implementação completa.
3. Confirmar a fase Red.
4. Implementar apenas a lógica mínima em `src/intake_rules.py`.
5. Voltar a executar os testes e confirmar a fase Green.

O objetivo não foi criar funcionalidades novas, UI, base de dados, autenticação real ou integração com Active Directory. O objetivo foi transformar requisitos e acceptance criteria já existentes em testes automáticos rastreáveis.

## 4. Fase Red

A fase Red foi obtida após criar os testes PyTest e antes de criar `src/intake_rules.py`.

Comando usado:

```bash
python -m pytest -q
```

Resultado observado:

```txt
ModuleNotFoundError: No module named 'src.intake_rules'
```

Este resultado confirma que os testes foram escritos antes da implementação mínima.

## 5. Fase Green

A fase Green foi obtida depois de implementar apenas as funções necessárias:

- `validate_dr_evidence_date`
- `approve_intake`
- `persist_audit_event`

Comando usado:

```bash
python -m pytest -q
```

Resultado observado:

```txt
8 passed
```

## 6. Cenários BDD

Foi criado o ficheiro `bdd/features/lab11.feature` com uma feature e quatro cenários:

- percurso feliz: utilizador autorizado aprova um Intake válido;
- percurso negativo: utilizador `Viewer` tenta aprovar, é bloqueado e existe evidência de auditoria;
- percurso negativo: evidência de Disaster Recovery com data futura é rejeitada;
- percurso de fronteira: evidência de Disaster Recovery exatamente com 365 dias é aceite.

Os cenários BDD cobrem `REQ-003`, `REQ-005` e `REQ-009`.

## 7. Evidência

Evidência principal do Lab 11:

- testes PyTest em `tests/unit/test_intake_rules.py`;
- implementação mínima testável em `src/intake_rules.py`;
- execução da fase Red antes da implementação;
- execução da fase Green após a implementação;
- cenários BDD em `bdd/features/lab11.feature`.

Os testes Vitest existentes no protótipo React não foram usados como evidência principal deste Lab.

## 8. Rastreabilidade

| REQ | AC automatizado | Teste PyTest | Tipo | Resultado |
| --- | --------------- | ------------ | ---- | --------- |
| REQ-003 | `Transition Manager` pode aprovar um Intake válido | `test_authorized_transition_manager_can_approve_valid_intake` | Happy path | Passou |
| REQ-003 | `Security Officer` pode aprovar um Intake válido | `test_authorized_security_officer_can_approve_valid_intake` | Happy path | Passou |
| REQ-003 | `Viewer` não pode aprovar e recebe `Acesso Negado` | `test_viewer_cannot_approve_intake` | Negativo | Passou |
| REQ-005 | Evidência de DR exatamente com 365 dias é aceite | `test_dr_evidence_exactly_365_days_old_is_valid` | Fronteira | Passou |
| REQ-005 | Evidência de DR com mais de 365 dias é rejeitada | `test_dr_evidence_older_than_365_days_is_rejected` | Negativo | Passou |
| REQ-005 | Evidência de DR com data futura é rejeitada | `test_dr_evidence_future_date_is_rejected` | Negativo | Passou |
| REQ-009 | Tentativa não autorizada cria registo de auditoria sem o divulgar ao utilizador | `test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user` | Segurança / negativo | Passou |
| REQ-009 | Log é persistido em menos de 1 segundo após o bloqueio | `test_audit_log_is_persisted_in_less_than_one_second` | Segurança / performance | Passou |

## 9. Uso de IA

A IA foi usada para apoiar a criação da estrutura PyTest, a escrita dos testes, a implementação mínima e a documentação do ciclo Test First.

O uso de IA foi limitado ao scope do Lab 11: transformar requisitos existentes em testes automáticos e evidência rastreável. Não foram inventados novos requisitos.

## 10. Código rejeitado ou fora de scope

Foi considerado fora de scope e rejeitado:

- criar UI;
- criar base de dados;
- implementar autenticação real;
- integrar com Active Directory;
- alterar o protótipo React;
- usar Vitest como evidência principal;
- adicionar funcionalidades não rastreáveis aos requisitos selecionados.

## 11. Nota posterior sobre o protótipo React

O protótipo React passou a refletir o REQ-009 através de audit events simulados em memória. A persistência real continua fora de scope; a simulação existe apenas para demonstração académica e não substitui os testes PyTest dos Labs 11 e 12.
