# Generated Scope — Lab 8

## Objetivo

Este documento serve para registar o scope efetivamente escolhido para o protótipo gerado no `Lab 8`.

Preencher apenas depois de a equipa decidir o slice final a implementar.

---

## Selected slice

- `Slice escolhido: B`
- `Justificação curta: slice pequeno, demonstrável em UI, com validação clara e impacto visível da Variante 3`

---

## Actors / roles

- `Ator principal: Transition Manager`
- `Atores secundários / roles relevantes: Security Officer, utilizador não autorizado (simulado)`

---

## Use Cases implemented

- `UC-03 — Anexar evidência de DR`
- `UC-04 — parte relativa à validação antes da aprovação`

> Se necessário, indicar aqui apenas a parte de um use case que ficou dentro do scope.

---

## Requirements implemented (max 10)

- `REQ-002`
- `REQ-004`
- `REQ-005`
- `REQ-003`
- `NFR-005`

> Manter no máximo 10 requisitos no total.

---

## Variant constraints implemented (min. 2)

- `Constraint 1: apenas roles autorizadas podem concluir a ação final de submissão do Intake`
- `Constraint 2: erros de validação e tentativas sem permissão bloqueiam a ação e apresentam mensagem visível no mesmo ecrã`

> Esta secção deve refletir pelo menos duas restrições visíveis da Variante 3 no comportamento do protótipo.

---

## Out of scope (explicit)

- `integração real com AD/SSO`
- `aprovação final completa do processo`
- `reabertura de Intake aprovado`
- `override com reautenticação`
- `retenção/auditoria completa de logs`

> Indicar explicitamente o que foi deixado de fora para evitar feature drift.
