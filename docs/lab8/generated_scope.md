# Generated Scope — Lab 8

## Objetivo

Este documento serve para registar o scope efetivamente escolhido para o protótipo gerado no `Lab 8`.

O protótipo final encontra-se em `LovableApp/scope-prototype-main`.

---

## Selected slice

- `Slice escolhido: B`
- `Justificação curta: slice pequeno, demonstrável em UI, com validação clara e impacto visível da Variante 3`

---

## Actors / roles

- `Ator principal: Transition Manager`
- `Atores secundários / roles relevantes: Security Officer, utilizador não autorizado (simulado)`
- `Interpretação final: o Transition Manager é o ator operacional que preenche e anexa evidência; o Security Officer é uma role de controlo/governação que pode aprovar sem editar; o utilizador não autorizado é bloqueado.`

---

## Use Cases implemented

- `UC-03 — Anexar evidência de DR`
- `UC-04 — parte relativa à validação antes da aprovação`

---

## Requirements implemented (max 10)

- `REQ-002`
- `REQ-004`
- `REQ-005`
- `REQ-003`
- `NFR-005`

---

## Variant constraints implemented (min. 2)

- `Constraint 1: apenas roles autorizadas podem concluir a ação final de submissão do Intake`
- `Constraint 2: erros de validação e tentativas sem permissão bloqueiam a ação e apresentam mensagem visível no mesmo ecrã`
- `Constraint 3: o Security Officer não pode editar o Intake nem anexar evidência no fluxo operacional normal`

Esta secção reflete as restrições visíveis da Variante 3 no comportamento do protótipo.

---

## Out of scope (explicit)

- `integração real com AD/SSO`
- `aprovação final completa do processo`
- `reabertura de Intake aprovado`
- `override com reautenticação`
- `retenção/auditoria completa de logs`
- `dashboard global`
- `múltiplos slices`
