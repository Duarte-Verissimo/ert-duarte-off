# Use Case Diagram v2 — Lab 6

## System boundary

- System name: AMS Intake Platform
- Slice covered: Intake & Discovery — submissão, aprovação e correções controladas (Security & RBAC Variant)

## Actors (4)

- A1: Utilizador AMS
- A2: Security Officer
- A3: Transition Manager
- A4: Active Directory

## Use cases (min. 6)

- UC-01: Autenticar utilizador
- UC-02: Preencher formulário de Intake
- UC-03: Anexar evidência de DR
- UC-04: Aprovar formulário de Intake
- UC-05: Reabrir Intake aprovado
- UC-06: Sobrescrever dados aprovados

## Relationships used

- `UC-03 <<extend>> UC-02`
  A anexação de evidência de DR foi tratada como comportamento opcional/condicional durante o preenchimento do Intake.
- `UC-06 <<include>> UC-01`
  O override exige uma nova autenticação obrigatória, reutilizando o comportamento de autenticação já modelado no sistema.

## Actor interpretation

- `Transition Manager` está associado a `UC-02`, `UC-03` e `UC-04` como ator operacional principal do processo de Intake.
- `Security Officer` está associado a `UC-04`, `UC-05` e `UC-06` como ator de controlo, governação e exceção.
- Em `UC-05`, o `Transition Manager` pode surgir como ator de suporte, pelo que a sua associação no diagrama é consistente com a descrição textual do caso de uso.
- O `Security Officer` não foi ligado a `UC-02` nem a `UC-03` porque, no dossiê, o preenchimento do Intake e a anexação de evidência pertencem ao fluxo operacional do `Transition Manager`.

## Diagram file

- Path: `docs/diagrams/use_case_diagram_v2.puml`
