# Critérios de Aceitação — Lab 7

## REQ-002 — Anexar evidência de Disaster Recovery

- DADO que o utilizador está no Intake atual
  QUANDO anexa ou seleciona uma evidência de `Disaster Recovery`
  ENTÃO o sistema permite associar a evidência ao Intake atual.

- DADO que o utilizador anexou uma evidência com sucesso
  QUANDO consulta o Intake atual
  ENTÃO o sistema mantém a evidência visível e associada ao Intake correto.

- DADO que o Intake não tem evidência de `Disaster Recovery` anexada
  QUANDO o utilizador tenta concluir a submissão final para revisão ou aprovação
  ENTÃO o sistema bloqueia a submissão final.

## REQ-003 — Restrição da aprovação do Intake por RBAC

- DADO que o utilizador está autenticado com role `Security Officer` ou `Transition Manager`
  QUANDO solicita a aprovação de um Intake válido
  ENTÃO o sistema permite concluir a ação e altera o estado para `Aprovado`.

- DADO que o utilizador está autenticado com uma role não autorizada
  QUANDO tenta aprovar o Intake
  ENTÃO o sistema apresenta `Acesso Negado` e não altera o estado do processo.

- DADO que existe um pedido de aprovação de Intake
  QUANDO o sistema processa o pedido
  ENTÃO a autorização é verificada antes da conclusão da aprovação.

- DADO que um utilizador sem permissão tenta aprovar o Intake
  QUANDO a tentativa é bloqueada
  ENTÃO o sistema produz evidência verificável de bloqueio para auditoria. _(Orientado pela variante)_

## REQ-004 — Bloqueio da aprovação por informação incompleta

- DADO que existem campos obrigatórios vazios no Intake
  QUANDO o utilizador tenta aprovar o Intake
  ENTÃO o sistema bloqueia a aprovação.

- DADO que falta a evidência de DR obrigatória
  QUANDO o utilizador tenta aprovar o Intake
  ENTÃO o sistema apresenta uma mensagem explícita de erro ao utilizador.

- DADO que a validação do Intake falha
  QUANDO o utilizador tenta aprovar o Intake
  ENTÃO o estado do Intake permanece em `Draft`.

- DADO que a validação identifica informação em falta ou incorreta
  QUANDO o sistema apresenta a mensagem de erro
  ENTÃO a mensagem indica claramente o elemento em falta ou incorreto.

## REQ-005 — Verificar a validade temporal da evidência de Disaster Recovery

- DADO que a evidência de DR tem data superior a 365 dias em relação à data atual
  QUANDO o utilizador submete ou valida a evidência
  ENTÃO o sistema rejeita a evidência.

- DADO que a evidência de DR tem data futura
  QUANDO o utilizador submete ou valida a evidência
  ENTÃO o sistema rejeita a evidência.

- DADO que a evidência de DR está fora do prazo aceite
  QUANDO o sistema rejeita a evidência
  ENTÃO o sistema apresenta uma mensagem que indica que a evidência está fora do prazo aceite.

## REQ-006 — Verificar identidade e roles no diretório corporativo

- DADO que o utilizador inicia autenticação com uma conta válida no diretório corporativo
  QUANDO a validação de identidade é concluída com sucesso
  ENTÃO o sistema permite a criação da sessão.

- DADO que a conta está desativada ou inválida no diretório corporativo
  QUANDO o utilizador tenta autenticar-se
  ENTÃO o sistema rejeita o login e impede o acesso ao módulo.

- DADO que a autenticação é bem-sucedida
  QUANDO a aplicação carrega a role do utilizador
  ENTÃO a role disponibilizada na aplicação corresponde ao mapeamento vindo do diretório corporativo.

- DADO que a validação de identidade falha
  QUANDO o utilizador tenta executar ações críticas no módulo
  ENTÃO o sistema impede a execução dessas ações. _(Orientado pela variante)_

## REQ-007 — Reabertura de Intake aprovado com controlo de permissões

- DADO que o utilizador possui role autorizada e o Intake está em `Aprovado`
  QUANDO solicita a reabertura
  ENTÃO o sistema altera o estado para `Reaberto`.

- DADO que o utilizador não possui role autorizada
  QUANDO tenta reabrir um Intake aprovado
  ENTÃO o sistema bloqueia a ação, apresenta `Acesso Negado` e mantém o estado em `Aprovado`.

- DADO que existe uma ação de reabertura de Intake
  QUANDO o sistema valida a permissão do utilizador
  ENTÃO a reabertura é permitida apenas aos perfis definidos no requisito.

- DADO que uma tentativa de reabertura não autorizada é bloqueada
  QUANDO o bloqueio é concluído
  ENTÃO o sistema gera evidência de auditoria. _(Orientado pela variante)_

## REQ-009 — Registar tentativas de ações não autorizadas

- DADO que uma tentativa não autorizada de aprovação, reabertura ou override é bloqueada
  QUANDO o bloqueio é concluído
  ENTÃO o sistema cria um registo de auditoria.

- DADO que o sistema cria um registo de auditoria para uma tentativa não autorizada
  QUANDO o registo é persistido
  ENTÃO o registo inclui pelo menos `User ID`, `data/hora UTC` e `ação tentada`.

- DADO que uma tentativa não autorizada é bloqueada
  QUANDO o sistema persiste o log
  ENTÃO o log é persistido em menos de 1 segundo após o bloqueio da ação.

- DADO que o utilizador é bloqueado por falta de permissão
  QUANDO o sistema gera o log de auditoria
  ENTÃO o utilizador não recebe confirmação explícita de que o log foi gerado. _(Orientado pela variante)_

## NFR-001 — Timeout de sessão inativa

- DADO que a sessão do utilizador está inativa há 15 minutos completos
  QUANDO o tempo limite de inatividade é atingido
  ENTÃO o sistema invalida a sessão.

- DADO que a sessão expirou
  QUANDO o utilizador realiza uma nova interação
  ENTÃO o sistema obriga o utilizador a autenticar-se novamente.

- DADO que a sessão expirou
  QUANDO o utilizador tenta restaurá-la através do histórico do browser
  ENTÃO o sistema não restaura a sessão expirada.

## NFR-002 — Retenção, integridade e consulta dos logs

- DADO que existem registos de auditoria
  QUANDO um utilizador autorizado consulta os logs dentro do período de retenção de 5 anos
  ENTÃO os registos permanecem disponíveis para consulta.

- DADO que ocorre uma tentativa não autorizada de alteração ou eliminação dos logs
  QUANDO o sistema valida a tentativa
  ENTÃO 100% das tentativas não autorizadas são rejeitadas.

- DADO que uma tentativa não autorizada sobre os logs é rejeitada
  QUANDO o bloqueio é concluído
  ENTÃO a tentativa rejeitada fica também registada para auditoria.

## NFR-005 — Tempo e localização das mensagens de erro

- DADO que ocorre um erro de validação no slice implementado
  QUANDO o utilizador realiza a tentativa que dispara a validação
  ENTÃO em 95% dos casos o sistema apresenta a mensagem no mesmo ecrã em até 1 segundo.

- DADO que falta a evidência de DR ou a data introduzida é inválida
  QUANDO o sistema apresenta a mensagem de erro
  ENTÃO a mensagem aparece junto do campo ou da ação bloqueada.

- DADO que a role atual não tem permissão para concluir a submissão final
  QUANDO o utilizador tenta concluir a submissão final
  ENTÃO o sistema apresenta uma mensagem clara de bloqueio sem navegar para outro ecrã.
