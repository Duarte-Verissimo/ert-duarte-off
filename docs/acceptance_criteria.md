# Acceptance Criteria — Lab 7

## REQ-002 — Anexar evidência de Disaster Recovery

- GIVEN que o utilizador está no Intake atual
  WHEN anexa ou seleciona uma evidência de `Disaster Recovery`
  DONE o sistema permite associar a evidência ao Intake atual.

- GIVEN que o utilizador anexou uma evidência com sucesso
  WHEN consulta o Intake atual
  DONE o sistema mantém a evidência visível e associada ao Intake correto.

- GIVEN que o Intake não tem evidência de `Disaster Recovery` anexada
  WHEN o utilizador tenta concluir a submissão final para revisão ou aprovação
  DONE o sistema bloqueia a submissão final.

## REQ-003 — Restrição da aprovação do Intake por RBAC

- GIVEN que o utilizador está autenticado com role `Security Officer` ou `Transition Manager`
  WHEN solicita a aprovação de um Intake válido
  DONE o sistema permite concluir a ação e altera o estado para `Aprovado`.

- GIVEN que o utilizador está autenticado com uma role não autorizada
  WHEN tenta aprovar o Intake
  DONE o sistema apresenta `Acesso Negado` e não altera o estado do processo.

- GIVEN que existe um pedido de aprovação de Intake
  WHEN o sistema processa o pedido
  DONE a autorização é verificada antes da conclusão da aprovação.

- GIVEN que um utilizador sem permissão tenta aprovar o Intake
  WHEN a tentativa é bloqueada
  DONE o sistema produz evidência verificável de bloqueio para auditoria. _(Variant-driven)_

## REQ-004 — Bloqueio da aprovação por informação incompleta

- GIVEN que existem campos obrigatórios vazios no Intake
  WHEN o utilizador tenta aprovar o Intake
  DONE o sistema bloqueia a aprovação.

- GIVEN que falta a evidência de DR obrigatória
  WHEN o utilizador tenta aprovar o Intake
  DONE o sistema apresenta uma mensagem explícita de erro ao utilizador.

- GIVEN que a validação do Intake falha
  WHEN o utilizador tenta aprovar o Intake
  DONE o estado do Intake permanece em `Draft`.

- GIVEN que a validação identifica informação em falta ou incorreta
  WHEN o sistema apresenta a mensagem de erro
  DONE a mensagem indica claramente o elemento em falta ou incorreto.

## REQ-005 — Verificar a validade temporal da evidência de Disaster Recovery

- GIVEN que a evidência de DR tem data superior a 365 dias em relação à data atual
  WHEN o utilizador submete ou valida a evidência
  DONE o sistema rejeita a evidência.

- GIVEN que a evidência de DR tem data futura
  WHEN o utilizador submete ou valida a evidência
  DONE o sistema rejeita a evidência.

- GIVEN que a evidência de DR está fora do prazo aceite
  WHEN o sistema rejeita a evidência
  DONE o sistema apresenta uma mensagem que indica que a evidência está fora do prazo aceite.

## REQ-006 — Verificar identidade e roles no diretório corporativo

- GIVEN que o utilizador inicia autenticação com uma conta válida no diretório corporativo
  WHEN a validação de identidade é concluída com sucesso
  DONE o sistema permite a criação da sessão.

- GIVEN que a conta está desativada ou inválida no diretório corporativo
  WHEN o utilizador tenta autenticar-se
  DONE o sistema rejeita o login e impede o acesso ao módulo.

- GIVEN que a autenticação é bem-sucedida
  WHEN a aplicação carrega a role do utilizador
  DONE a role disponibilizada na aplicação corresponde ao mapeamento vindo do diretório corporativo.

- GIVEN que a validação de identidade falha
  WHEN o utilizador tenta executar ações críticas no módulo
  DONE o sistema impede a execução dessas ações. _(Variant-driven)_

## REQ-007 — Reabertura de Intake aprovado com controlo de permissões

- GIVEN que o utilizador possui role autorizada e o Intake está em `Aprovado`
  WHEN solicita a reabertura
  DONE o sistema altera o estado para `Reaberto`.

- GIVEN que o utilizador não possui role autorizada
  WHEN tenta reabrir um Intake aprovado
  DONE o sistema bloqueia a ação, apresenta `Acesso Negado` e mantém o estado em `Aprovado`.

- GIVEN que existe uma ação de reabertura de Intake
  WHEN o sistema valida a permissão do utilizador
  DONE a reabertura é permitida apenas aos perfis definidos no requisito.

- GIVEN que uma tentativa de reabertura não autorizada é bloqueada
  WHEN o bloqueio é concluído
  DONE o sistema gera evidência de auditoria. _(Variant-driven)_

## REQ-009 — Registar tentativas de ações não autorizadas

- GIVEN que uma tentativa não autorizada de aprovação, reabertura ou override é bloqueada
  WHEN o bloqueio é concluído
  DONE o sistema cria um registo de auditoria.

- GIVEN que o sistema cria um registo de auditoria para uma tentativa não autorizada
  WHEN o registo é persistido
  DONE o registo inclui pelo menos `User ID`, `data/hora UTC` e `ação tentada`.

- GIVEN que uma tentativa não autorizada é bloqueada
  WHEN o sistema persiste o log
  DONE o log é persistido em menos de 1 segundo após o bloqueio da ação.

- GIVEN que o utilizador é bloqueado por falta de permissão
  WHEN o sistema gera o log de auditoria
  DONE o utilizador não recebe confirmação explícita de que o log foi gerado. _(Variant-driven)_

## NFR-001 — Timeout de sessão inativa

- GIVEN que a sessão do utilizador está inativa há 15 minutos completos
  WHEN o tempo limite de inatividade é atingido
  DONE o sistema invalida a sessão.

- GIVEN que a sessão expirou
  WHEN o utilizador realiza uma nova interação
  DONE o sistema obriga o utilizador a autenticar-se novamente.

- GIVEN que a sessão expirou
  WHEN o utilizador tenta restaurá-la através do histórico do browser
  DONE o sistema não restaura a sessão expirada.

## NFR-002 — Retenção, integridade e consulta dos logs

- GIVEN que existem registos de auditoria
  WHEN um utilizador autorizado consulta os logs dentro do período de retenção de 5 anos
  DONE os registos permanecem disponíveis para consulta.

- GIVEN que ocorre uma tentativa não autorizada de alteração ou eliminação dos logs
  WHEN o sistema valida a tentativa
  DONE 100% das tentativas não autorizadas são rejeitadas.

- GIVEN que uma tentativa não autorizada sobre os logs é rejeitada
  WHEN o bloqueio é concluído
  DONE a tentativa rejeitada fica também registada para auditoria.

## NFR-005 — Tempo e localização das mensagens de erro

- GIVEN que ocorre um erro de validação no slice implementado
  WHEN o utilizador realiza a tentativa que dispara a validação
  DONE em 95% dos casos o sistema apresenta a mensagem no mesmo ecrã em até 1 segundo.

- GIVEN que falta a evidência de DR ou a data introduzida é inválida
  WHEN o sistema apresenta a mensagem de erro
  DONE a mensagem aparece junto do campo ou da ação bloqueada.

- GIVEN que a role atual não tem permissão para concluir a submissão final
  WHEN o utilizador tenta concluir a submissão final
  DONE o sistema apresenta uma mensagem clara de bloqueio sem navegar para outro ecrã.
