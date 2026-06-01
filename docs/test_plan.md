# Test Plan — Lab 10

## 1) Scope

### Slice coberto

O plano cobre o slice **Intake & Discovery**, alinhado com o protótipo Lovable.

O foco principal é:

- anexação de evidência de Disaster Recovery;
- aprovação do Intake;
- controlo por RBAC;
- bloqueio por informação/evidência em falta;
- validação da validade temporal da evidência de DR;
- mensagens de erro no mesmo ecrã.

### Nota de correção

O `REQ-001 — Recolher detalhes de infraestrutura e contactos` não é incluído porque não fez parte do scope implementado no Lovable.

### Requisitos principais

- REQ-002
- REQ-003
- REQ-004
- REQ-005
- NFR-005

### Requisitos adicionais planeados

- REQ-006
- REQ-007
- REQ-008
- REQ-009
- NFR-001
- NFR-002
- NFR-003
- NFR-006

### Fora de scope

- REQ-001;
- integração real com Active Directory / SSO;
- automação completa de Cucumber;
- validação real de disponibilidade mensal;
- testes de carga avançados.

---

## 2) Test strategy — static + dynamic

### Static testing

Serão revistos:

- requisitos usados no scope;
- acceptance criteria;
- casos de teste;
- cenários BDD;
- rastreabilidade;
- coerência entre o que foi desenvolvido no Lovable e o que está a ser testado.

### Dynamic testing

| Nível | O que se testa | Exemplos | Evidência |
|---|---|---|---|
| Unitário | Regras isoladas | validade da data DR, justificação de override | resultados/nota de execução |
| Integração | Interação entre módulos | role mapping, logs | logs/notas |
| Sistema | Fluxo do slice | anexar DR → validar → aprovar | execução manual |
| Aceitação / BDD | Comportamento observável | aprovação, bloqueio, mensagens | `lab9.feature` |
| NFR | Usabilidade, sessão, performance | erro em 1 segundo, timeout, <= 2 segundos | medições/screenshot |

---

## 3) TDD plan

### Candidato 1 — Validade temporal da evidência de DR

- Requisito: REQ-005
- Testes: TC-006, TC-007, TC-008
- Adequado para TDD porque tem regras claras: 365 dias, 366 dias e data futura.

### Candidato 2 — Justificação mínima de override

- Requisito: REQ-008
- Teste: TC-014
- Adequado para TDD porque é uma regra simples de tamanho mínimo.

### Candidato 3 — Timeout de sessão

- Requisito: NFR-001
- Teste: TC-018
- Adequado para TDD com tempo simulado/mocked.

---

## 4) BDD plan

O ficheiro `bdd/features/lab9.feature` contém os cenários BDD.

Cada cenário tem agora:

```gherkin
# Requisitos testados: ...
```

Isto permite saber exatamente que requisito está a ser validado por cada cenário.

---

## 5) Coverage goals

| Cobertura | Casos |
|---|---|
| Percurso feliz | TC-001, TC-003, TC-011, TC-013 |
| Fluxo alternativo | TC-004, TC-010 |
| Negativo / erro | TC-002, TC-005, TC-008, TC-012, TC-015, TC-017, TC-022 |
| Fronteira | TC-006, TC-007, TC-014 |
| Segurança / RBAC | TC-004, TC-005, TC-009, TC-010, TC-012, TC-013, TC-015 |
| Auditoria / logging | TC-005, TC-012, TC-015, TC-016, TC-017 |
| NFR | TC-016, TC-017, TC-018, TC-019, TC-020, TC-021 |

---

## 6) NFR validation approach

| NFR | Como será verificado |
|---|---|
| NFR-001 | Simular ou esperar 15 minutos de inatividade e verificar novo login. |
| NFR-002 | Verificar criação e proteção de logs. |
| NFR-003 | Medir carregamento do formulário em carga normal. |
| NFR-005 | Verificar se erro aparece no mesmo ecrã, junto da ação, em até 1 segundo. |
| NFR-006 | Executar fluxo crítico em Chrome e Edge. |

---

## 7) Evidence recording

| Evidência | Caminho |
|---|---|
| Plano de testes | `docs/test_plan.md` |
| Casos de teste | `docs/test_cases.md` |
| BDD | `bdd/features/lab9.feature` |
| Rastreabilidade REQ → TC | `docs/traceability_req_tc.md` |
| Rastreabilidade REQ → AC → TC/BDD | `docs/traceability_req_ac_tc.md` |
| AC & DoD updates | `docs/ac_dod_updates.md` |
| Diagrama Visual Paradigm | `docs/diagrams/test_cases_lab9.png` |
