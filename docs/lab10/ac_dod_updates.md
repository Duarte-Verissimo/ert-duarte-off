# Atualizações de AC e DoD — Lab 10

## Nota de correção

O `REQ-001` não é incluído porque não fez parte do scope implementado no Lovable.

---

## Acceptance Criteria improvements

### Item 1 — REQ-003: aprovação por RBAC

- Antes:
  - Utilizador não autorizado recebe `Acesso Negado` e o estado não muda.
- Depois:
  - Dado que o utilizador tem role diferente de `Security Officer` ou `Transition Manager`,
    quando tenta aprovar um Intake em `Draft`,
    então recebe `Acesso Negado`,
    o estado permanece `Draft`
    e é criado log de auditoria.
- Razão:
  - A Variante 3 exige evidência de bloqueio e auditoria.

### Item 2 — REQ-004: bloqueio por falta de DR

- Antes:
  - O sistema apresenta uma mensagem explícita.
- Depois:
  - Dado que a evidência de DR está em falta,
    quando o utilizador tenta aprovar,
    então o sistema apresenta `Evidência de DR em falta`
    e mantém o estado `Draft`.
- Razão:
  - A mensagem e o estado final ficam testáveis.

### Item 3 — REQ-005: evidência antiga

- Antes:
  - Evidência com mais de 365 dias é rejeitada.
- Depois:
  - Dado que a evidência tem 366 dias,
    quando é validada,
    então é rejeitada e é apresentada mensagem de evidência fora do prazo.
- Razão:
  - O valor de fronteira fica explícito.

### Item 4 — REQ-005: evidência exatamente com 365 dias

- Antes:
  - Não existia AC explícito.
- Depois:
  - Dado que a evidência tem exatamente 365 dias,
    quando é validada,
    então é aceite.
- Razão:
  - Corrige lacuna de boundary testing.

### Item 5 — REQ-008: justificação mínima

- Antes:
  - A confirmação só fica ativa com pelo menos 20 caracteres.
- Depois:
  - Dado que a justificação tem menos de 20 caracteres,
    quando o utilizador tenta confirmar,
    então a confirmação permanece desativada.
- Razão:
  - Torna o critério mais verificável.

### Item 6 — REQ-009: log de auditoria

- Antes:
  - O sistema cria um registo de auditoria.
- Depois:
  - O log deve incluir User ID, data/hora UTC e ação tentada, e ser persistido em menos de 1 segundo.
- Razão:
  - Define evidência mínima de auditoria.

### Item 7 — NFR-005: mensagem de erro

- Antes:
  - Mensagem aparece no mesmo ecrã em até 1 segundo.
- Depois:
  - Mensagem aparece no mesmo ecrã, junto do campo ou ação bloqueada, em até 1 segundo.
- Razão:
  - Acrescenta critério de localização e clareza.

---

## DoD updates

### Update 1 — Rastreabilidade obrigatória

- Antes:
  - AC devem ser testáveis.
- Depois:
  - Um requisito só está pronto quando tem AC testáveis e ligação explícita a TC ou cenário BDD.
- Razão:
  - Evita requisitos sem evidência de validação.

### Update 2 — Coerência com scope implementado

- Antes:
  - Não existia regra explícita.
- Depois:
  - Um requisito só deve aparecer nos testes principais se fizer parte do scope implementado ou estiver marcado como planeado/futuro.
- Razão:
  - Evita inconsistências como a inclusão indevida do REQ-001.

### Update 3 — Testes negativos e fronteira

- Antes:
  - Bastava indicar método de validação.
- Depois:
  - Requisitos críticos devem incluir pelo menos um teste negativo ou de fronteira quando aplicável.
- Razão:
  - Regras críticas não devem ser validadas só com percurso feliz.

### Update 4 — Evidência específica para variante

- Antes:
  - O impacto da variante era marcado como Yes/No.
- Depois:
  - Requisitos variant-driven devem ter evidência específica: RBAC, bloqueio, reautenticação ou auditoria.
- Razão:
  - A Variante 3 precisa de ser demonstrada por testes.
