# Traceability — Requirements ↔ BDD Scenarios (Lab 13)

## Organização dos ficheiros

O ficheiro `bdd/features/lab13.feature` agrega todos os cenários do Lab 13, cumprindo o output pedido no enunciado.

Além disso, foram criados ficheiros separados por requisito, seguindo o exemplo do professor:

- `bdd/features/req_003_aprovacao_rbac.feature`
- `bdd/features/req_005_validade_evidencia_dr.feature`
- `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature`

Esta organização cria duplicação intencional dos cenários: cada cenário existe no ficheiro agregado e também no ficheiro específico do respetivo requisito.

## Requisitos selecionados

- `REQ-003 — Restringir aprovação do Intake por RBAC`
- `REQ-005 — Verificar validade temporal da evidência de Disaster Recovery`
- `REQ-009 — Registar tentativas de ações não autorizadas`

## Mapping REQ → Scenario

| Requirement | Scenario                                                                      | Type                     | Feature file                                                                                 | Notes                                                            |
| ----------- | ----------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| REQ-003     | Percurso feliz - Transition Manager aprova um Intake válido                   | Percurso feliz           | `bdd/features/lab13.feature`; `bdd/features/req_003_aprovacao_rbac.feature`                  | Valida aprovação por role autorizada.                            |
| REQ-003     | Percurso alternativo - Security Officer aprova um Intake válido               | Fluxo alternativo        | `bdd/features/lab13.feature`; `bdd/features/req_003_aprovacao_rbac.feature`                  | Valida segunda role autorizada.                                  |
| REQ-003     | Percurso negativo - Viewer tenta aprovar e é bloqueado                        | Percurso negativo        | `bdd/features/lab13.feature`; `bdd/features/req_003_aprovacao_rbac.feature`                  | Valida bloqueio por RBAC e mensagem `Acesso Negado`.             |
| REQ-005     | Comportamento de fronteira - Evidência de DR exatamente com 365 dias é aceite | Fronteira                | `bdd/features/lab13.feature`; `bdd/features/req_005_validade_evidencia_dr.feature`           | Valida o limite máximo aceite.                                   |
| REQ-005     | Percurso negativo - Evidência de DR com mais de 365 dias é rejeitada          | Percurso negativo        | `bdd/features/lab13.feature`; `bdd/features/req_005_validade_evidencia_dr.feature`           | Valida rejeição de evidência fora do prazo.                      |
| REQ-005     | Percurso negativo - Evidência de DR com data futura é rejeitada               | Percurso negativo        | `bdd/features/lab13.feature`; `bdd/features/req_005_validade_evidencia_dr.feature`           | Valida rejeição de data futura.                                  |
| REQ-009     | Percurso negativo - Tentativa não autorizada cria audit event                 | Segurança / percurso negativo | `bdd/features/lab13.feature`; `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature` | Valida criação de audit event com User ID, ação e timestamp UTC. |
| REQ-009     | Percurso feliz - Audit event é persistido em menos de 1 segundo               | Percurso feliz / auditoria | `bdd/features/lab13.feature`; `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature` | Valida persistência simulada em memória abaixo de 1 segundo.     |

## Resumo de cobertura

| Requirement | Cenários BDD | Cobertura                                                |
| ----------- | -----------: | -------------------------------------------------------- |
| REQ-003     |            3 | Aprovação autorizada e bloqueio de role não autorizada.  |
| REQ-005     |            3 | Fronteira de 365 dias, evidência expirada e data futura. |
| REQ-009     |            2 | Criação e persistência simulada de audit event.          |

Total: 8 cenários no ficheiro agregado e 8 cenários distribuídos pelos ficheiros por requisito.

## Nota sobre o percurso feliz de auditoria

O cenário `Percurso feliz - Audit event é persistido em menos de 1 segundo` é classificado como percurso feliz no contexto do `REQ-009`, porque valida o comportamento esperado da funcionalidade de auditoria: dado um audit event de tentativa não autorizada, o sistema consegue persisti-lo com sucesso em menos de 1 segundo.

Este cenário não é o happy path principal da aprovação do Intake. É o happy path da persistência do audit event e continua ligado à auditoria de tentativas não autorizadas.
