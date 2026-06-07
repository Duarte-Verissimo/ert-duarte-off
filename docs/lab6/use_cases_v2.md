# Use Cases v2 — Lab 6

## UC-04 — Aprovar formulário de Intake

- Primary actor: Transition Manager
- Supporting actors: Security Officer
- Goal: Aprovar um Intake completo e válido para a fase seguinte do processo.
- Preconditions: O utilizador está autenticado, o Intake encontra-se em `Draft` e os dados foram previamente guardados.
- Trigger: O ator principal seleciona a ação `Aprovar`.
- Postconditions (success): O estado do Intake muda para `Aprovado` e fica bloqueado a edições normais.
- Postconditions (failure/cancel): O estado permanece `Draft` e o sistema apresenta a razão do bloqueio.
- Related requirements: REQ-003, REQ-004, REQ-005, REQ-009, NFR-005

Nota: o `Transition Manager` é o ator principal porque, no fluxo normal do slice, é quem conduz a decisão operacional de aprovação. O `Security Officer` mantém-se como ator de suporte porque pode executar a mesma ação em contexto de controlo e governação.

### Main flow (happy path)

1. O utilizador abre o Intake em estado `Draft`.
2. O sistema valida os campos obrigatórios do processo.
3. O sistema valida a existência da evidência de DR associada ao Intake.
4. O sistema valida que a evidência de DR está dentro do prazo aceite.
5. O sistema confirma que o utilizador possui role autorizada para aprovação.
6. O sistema altera o estado do processo para `Aprovado`.
7. O sistema apresenta mensagem de sucesso ao utilizador.

### Alternative flows (min. 2)

A1. Campo obrigatório em falta ->
1. No passo 2, o sistema deteta um ou mais campos obrigatórios vazios.
2. O sistema destaca os campos em falta com mensagem de validação.
3. O caso de uso termina sem alterar o estado do Intake.

A2. Evidência de DR fora do prazo ->
1. No passo 4, o sistema deteta que a data da evidência tem mais de 12 meses.
2. O sistema apresenta mensagem de erro indicando que a evidência está desatualizada.
3. O caso de uso termina sem aprovação.

### Exceptions / errors (min. 2)

E1. Utilizador sem permissões de aprovação ->
1. No passo 5, o sistema identifica que a role atual não é autorizada.
2. O sistema bloqueia a ação com a mensagem `Acesso Negado`.
3. O sistema regista a tentativa não autorizada em log.  
4. Esta exceção reflete diretamente a variante de segurança e controlo por roles.

E2. Sessão expirada durante a aprovação ->
1. Antes de concluir o passo 5, o sistema deteta que a sessão expirou por inatividade.
2. O sistema redireciona o utilizador para novo login.
3. O estado do Intake mantém-se em `Draft`.

---

## UC-06 — Sobrescrever dados aprovados

- Primary actor: Security Officer
- Supporting actors: N/A
- Goal: Permitir uma alteração excecional a dados aprovados, com confirmação reforçada de identidade.
- Preconditions: O utilizador está autenticado, o Intake encontra-se em `Aprovado` ou `Reaberto`, e o perfil possui acesso à ação de `Override`.
- Trigger: O ator principal seleciona a ação `Override`.
- Postconditions (success): O sistema autoriza a edição excecional, regista a justificação e mantém rasto de auditoria da ação.
- Postconditions (failure/cancel): O override é cancelado e os dados aprovados permanecem sem alterações.
- Related requirements: REQ-006, REQ-008, REQ-009, NFR-001, NFR-005

### Main flow (happy path)

1. O utilizador abre um Intake aprovado que necessita de correção excecional.
2. O sistema apresenta a ação `Override` apenas ao perfil autorizado.
3. O utilizador seleciona a ação `Override`.
4. O sistema abre um modal com os campos `Password` e `Justificação`.
5. O utilizador introduz a password atual e uma justificação com pelo menos 20 caracteres.
6. O sistema reautentica o utilizador através da identidade corporativa.
7. O sistema regista a justificação no histórico do processo.
8. O sistema autoriza a edição excecional dos dados aprovados.

### Alternative flows (min. 2)

A1. Justificação demasiado curta ->
1. No passo 5, o utilizador introduz menos de 20 caracteres.
2. O sistema mantém a ação de confirmação desativada.
3. O caso de uso só prossegue quando a justificação cumpre o mínimo exigido.

A2. Utilizador cancela voluntariamente o override ->
1. No passo 4, o utilizador decide não continuar.
2. O sistema fecha o modal sem alterar dados.
3. O Intake mantém-se no estado anterior.

### Exceptions / errors (min. 2)

E1. Password incorreta na reautenticação ->
1. No passo 6, o sistema deteta que a password não corresponde ao utilizador atual.
2. O sistema aborta o override imediatamente.
3. O sistema regista a tentativa não autorizada em log.  
4. Esta exceção reflete diretamente a variante de segurança e a exigência de reautenticação.

E2. Conta sem role válida no diretório corporativo ->
1. No passo 6, o sistema recebe uma resposta inválida ou role incompatível do diretório corporativo.
2. O sistema bloqueia o override.
3. O sistema apresenta `Acesso Negado` e preserva os dados aprovados sem alterações.

---

## UC-05 — Reabrir Intake aprovado

- Primary actor: Security Officer
- Supporting actors: Transition Manager
- Goal: Reabrir um Intake previamente aprovado para permitir correções controladas e rastreáveis.
- Preconditions: O utilizador está autenticado e o Intake encontra-se em `Aprovado`.
- Trigger: O ator principal seleciona a ação `Reabrir`.
- Postconditions (success): O estado do Intake muda para `Reaberto` e o processo volta a permitir edição autorizada.
- Postconditions (failure/cancel): O estado do Intake mantém-se em `Aprovado` e a tentativa inválida é bloqueada.
- Related requirements: REQ-007, REQ-009, NFR-005

### Main flow (happy path)

1. O utilizador autorizado consulta um Intake aprovado.
2. O sistema confirma que a role atual tem permissão para reabertura.
3. O utilizador solicita a reabertura do processo.
4. O sistema altera o estado para `Reaberto` e regista a ação no histórico.

### Alternative flows (min. 2)

A1. Reabertura cancelada pelo utilizador ->
1. Após o passo 3, o utilizador decide não confirmar a reabertura.
2. O sistema encerra a ação sem alterar o estado do Intake.
3. O processo mantém-se em `Aprovado`.

A2. Reabertura pedida com pendência identificada ->
1. No passo 1, o utilizador identifica dados incorretos ou desatualizados no Intake aprovado.
2. O sistema permite a reabertura e marca o processo como necessitando de revisão.
3. O Intake passa a `Reaberto` e fica disponível para edição autorizada.

### Exceptions / errors (min. 2)

E1. Utilizador sem permissão para reabrir ->
1. No passo 2, o sistema verifica que a role atual não tem autorização para reabertura.
2. O sistema bloqueia a ação e apresenta `Acesso Negado`.
3. O sistema regista a tentativa não autorizada em log.  
4. Esta exceção reflete diretamente a variante de segurança e controlo por roles.

E2. Sessão expirada antes da confirmação ->
1. Entre o passo 2 e o passo 3, o sistema deteta que a sessão expirou por inatividade.
2. O sistema redireciona o utilizador para novo login.
3. O Intake mantém-se em `Aprovado` sem qualquer alteração.

## Variant-driven notes (required)

- A variante influenciou diretamente:
  - o bloqueio de aprovação para perfis não autorizados em `UC-04`
  - a exigência de reautenticação em `UC-06`
  - o registo de tentativas bloqueadas nas exceções de ambos os casos de uso
