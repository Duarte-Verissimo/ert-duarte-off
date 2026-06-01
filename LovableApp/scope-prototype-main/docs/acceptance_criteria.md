# Acceptance Criteria — Lab 7

## REQ-002 — Anexar evidência de Disaster Recovery

- AC-1: O sistema deve permitir ao utilizador anexar ou selecionar uma evidência de `Disaster Recovery` associada ao Intake atual.
- AC-2: Quando a evidência é anexada com sucesso, o sistema deve mantê-la visível e associada ao Intake correto.
- AC-3: Sem evidência anexada, o sistema não deve permitir concluir a submissão final do Intake para revisão ou aprovação.

## REQ-003 — Restrição da aprovação do Intake por RBAC (Given/When/Then)

- Given que o utilizador está autenticado com role `Security Officer` ou `Transition Manager`, when solicita a aprovação de um Intake válido, then o sistema permite concluir a ação e altera o estado para `Aprovado`.
- Given que o utilizador está autenticado com uma role não autorizada, when tenta aprovar o Intake, then o sistema apresenta `Acesso Negado` e não altera o estado do processo.
- O sistema deve verificar a autorização antes da conclusão da aprovação.
- Pelo menos uma tentativa sem permissão deve produzir evidência verificável de bloqueio para auditoria. _(Variant-driven)_

## REQ-004 — Bloqueio da aprovação por informação incompleta

- AC-1: Quando existirem campos obrigatórios vazios, o sistema deve bloquear a aprovação do Intake.
- AC-2: Quando faltar a evidência de DR obrigatória, o sistema deve apresentar uma mensagem explícita de erro ao utilizador.
- AC-3: Quando a validação falha, o estado do Intake deve permanecer em `Draft`.
- AC-4: As mensagens de erro devem indicar claramente o elemento em falta ou incorreto.

## REQ-005 — Validação da frescura da evidência de DR

- AC-1: O sistema deve rejeitar evidência de DR cuja data seja superior a 365 dias em relação à data atual.
- AC-2: O sistema deve rejeitar evidência de DR com data futura.
- AC-3: O sistema deve apresentar uma mensagem que indique que a evidência está fora do prazo aceite.

## REQ-006 — Verificar identidade e roles no diretório corporativo

- AC-1: Quando o utilizador inicia autenticação com uma conta válida no diretório corporativo, o sistema deve permitir a criação da sessão.
- AC-2: Quando a conta estiver desativada ou inválida no diretório corporativo, o sistema deve rejeitar o login e impedir o acesso ao módulo.
- AC-3: Após autenticação bem-sucedida, a role disponibilizada na aplicação deve corresponder ao mapeamento vindo do diretório corporativo.
- AC-4: Se a validação de identidade falhar, o utilizador não deve conseguir executar ações críticas no módulo. _(Variant-driven)_

## REQ-007 — Reabertura de Intake aprovado com controlo de permissões (Given/When/Then)

- Given que o utilizador possui role autorizada e o Intake está em `Aprovado`, when solicita a reabertura, then o sistema altera o estado para `Reaberto`.
- Given que o utilizador não possui role autorizada, when tenta reabrir um Intake aprovado, then o sistema bloqueia a ação, apresenta `Acesso Negado` e mantém o estado em `Aprovado`.
- A ação de reabertura deve ser permitida apenas aos perfis definidos no requisito.
- O bloqueio de uma tentativa não autorizada deve gerar evidência de auditoria. _(Variant-driven)_

## REQ-009 — Registar tentativas de ações não autorizadas

- AC-1: Quando uma tentativa não autorizada de aprovação, reabertura ou override é bloqueada, o sistema deve criar um registo de auditoria.
- AC-2: O registo deve incluir pelo menos `User ID`, `data/hora UTC` e `ação tentada`.
- AC-3: O log deve ser persistido em menos de 1 segundo após o bloqueio da ação.
- AC-4: O utilizador bloqueado não deve receber confirmação explícita de que o log foi gerado. _(Variant-driven)_

## NFR-001 — Timeout de sessão inativa

- AC-1: O sistema deve invalidar a sessão após 15 minutos completos de inatividade.
- AC-2: Após a expiração da sessão, qualquer nova interação deve obrigar o utilizador a autenticar-se novamente.
- AC-3: A sessão expirada não deve ser restaurada através do histórico do browser.

## NFR-002 — Retenção, integridade e consulta dos logs

- AC-1: Os registos de auditoria devem permanecer disponíveis para consulta durante pelo menos 5 anos.
- AC-2: 100% das tentativas não autorizadas de alteração ou eliminação dos logs devem ser rejeitadas.
- AC-3: As tentativas rejeitadas sobre os logs devem ficar também registadas para auditoria.

## NFR-005 — Tempo e localização das mensagens de erro

- AC-1: Em 95% dos erros de validação do slice implementado, o sistema deve apresentar a mensagem no mesmo ecrã em até 1 segundo após a tentativa do utilizador.
- AC-2: Quando faltar a evidência de DR ou a data introduzida for inválida, a mensagem de erro deve aparecer junto do campo ou da ação bloqueada.
- AC-3: Quando a role atual não tiver permissão para concluir a submissão final, o sistema deve apresentar uma mensagem clara de bloqueio sem navegar para outro ecrã.
