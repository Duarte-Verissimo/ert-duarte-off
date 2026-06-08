# Use Cases — Lab 5

## UC-04 — Aprovar formulário de Intake

- Primary actor: Transition Manager
- Supporting actors: Security Officer
- Goal: Validar a completude do Intake e aprovar o processo para a fase seguinte.
- Pré-condições: O utilizador tem sessão ativa e o Intake encontra-se em `Draft`.
- Trigger: O utilizador autorizado clica em `Aprovar`.
- Pós-condições (sucesso): O estado do Intake muda para `Aprovado`.
- Pós-condições (falha/cancelamento): O estado do Intake mantém-se em `Draft` e os erros aplicáveis são apresentados.
- Related requirements: REQ-003, REQ-004, REQ-005, REQ-009

Nota: o `Transition Manager` é o ator principal porque, no fluxo normal do slice, é o papel que conduz a decisão operacional de aprovação; o `Security Officer` surge como ator de suporte por partilhar a mesma permissão em situações de controlo e exceção.

### Fluxo principal (happy path)

1. O utilizador abre o Intake em estado `Draft`.
2. O sistema valida a completude dos dados obrigatórios.
3. O sistema valida a existência e a frescura da evidência de DR.
4. O sistema confirma que o utilizador tem permissão para aprovar.
5. O sistema altera o estado para `Aprovado`.
6. O sistema apresenta confirmação de sucesso.

### Fluxos alternativos

A1. Evidência de DR em falta ->
1. No passo 3, o sistema deteta que não existe anexo obrigatório.
2. O sistema apresenta `Evidência de DR em falta`.
3. O caso de uso termina sem aprovação.

### Exceções / erros

E1. Utilizador sem permissões ->
1. No passo 4, o sistema deteta role não autorizada.
2. O sistema bloqueia a ação com `Acesso Negado`.
3. O sistema cria registo de auditoria da tentativa.

---

## UC-06 — Sobrescrever dados aprovados

- Primary actor: Security Officer
- Supporting actors: N/A
- Goal: Executar uma alteração excecional a dados já aprovados com controlo reforçado.
- Pré-condições: O Intake está em `Aprovado` e o utilizador possui sessão válida.
- Trigger: O utilizador clica em `Override`.
- Pós-condições (sucesso): O sistema autoriza a edição excecional e regista a justificação.
- Pós-condições (falha/cancelamento): O override é abortado e os dados aprovados mantêm-se inalterados.
- Related requirements: REQ-006, REQ-008, REQ-009

### Fluxo principal (happy path)

1. O utilizador abre um Intake aprovado.
2. O sistema apresenta a ação `Override` ao perfil autorizado.
3. O utilizador seleciona a ação `Override`.
4. O sistema solicita password e justificação.
5. O utilizador introduz password válida e justificação com 20 ou mais caracteres.
6. O sistema valida a reautenticação e autoriza a edição excecional.

### Fluxos alternativos

A1. Justificação insuficiente ->
1. No passo 5, o utilizador escreve uma justificação demasiado curta.
2. O sistema mantém a confirmação desativada até cumprir o limite mínimo.

### Exceções / erros

E1. Password incorreta ->
1. No passo 6, a reautenticação falha.
2. O sistema aborta o override.
3. O sistema regista a tentativa de ação não autorizada.
