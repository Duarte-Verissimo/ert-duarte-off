# language: pt

Funcionalidade: Segurança e validação da aprovação do Intake
  O objetivo desta funcionalidade é validar o slice de segurança do Intake & Discovery,
  garantindo que a aprovação, a validação da evidência de Disaster Recovery,
  a reabertura e o override respeitam os requisitos de RBAC, validação e auditoria.

  # Projeto: Plataforma AMS
  # Variante: Variante 3 — Security Officer / Administrator
  # Restrição principal: autorização rigorosa e controlo de ações críticas
  # Nota: o REQ-001 não é incluído porque não fez parte do scope desenvolvido no Lovable.

  # Requisitos testados: REQ-003, REQ-004, REQ-005
  Cenário: Percurso feliz — Aprovar Intake válido com role autorizada de Transition Manager
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que todos os campos obrigatórios do slice selecionado estão preenchidos
    E que existe evidência válida de Disaster Recovery anexada
    E que a data da evidência de Disaster Recovery está dentro dos últimos 365 dias
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema aprova o Intake
    E o estado do Intake muda para "Aprovado"
    E o Intake fica bloqueado para edições normais

  # Requisitos testados: REQ-003, REQ-004, REQ-005
  Cenário: Fluxo alternativo — Aprovar Intake válido com role autorizada de Security Officer
    Dado que o utilizador está autenticado como "Security Officer"
    E que o Intake está no estado "Draft"
    E que todos os campos obrigatórios do slice selecionado estão preenchidos
    E que a evidência de Disaster Recovery é válida
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema aprova o Intake
    E a aprovação fica atribuída ao Security Officer

  # Requisitos testados: REQ-002, REQ-004, NFR-005
  Cenário: Percurso negativo — Bloquear aprovação quando falta evidência de Disaster Recovery
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que os campos obrigatórios do slice selecionado estão preenchidos
    E que não existe evidência de Disaster Recovery anexada
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema bloqueia a aprovação
    E o sistema apresenta "Evidência de DR em falta"
    E o estado do Intake permanece "Draft"

  # Requisitos testados: REQ-003, REQ-009, NFR-005
  Cenário: Percurso negativo — Bloquear aprovação por utilizador não autorizado
    Dado que o utilizador está autenticado como "Viewer"
    E que o Intake está no estado "Draft"
    E que o Intake está completo e válido
    Quando o utilizador tenta aprovar o Intake
    Então o sistema bloqueia a ação
    E o sistema apresenta "Acesso Negado"
    E o estado do Intake permanece "Draft"
    E é criado um registo de auditoria para a tentativa de aprovação não autorizada

  # Requisitos testados: REQ-005
  Cenário: Fronteira — Aceitar evidência de Disaster Recovery exatamente com 365 dias
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que todos os campos obrigatórios do slice selecionado estão preenchidos
    E que existe evidência de Disaster Recovery com data exatamente 365 dias antes da data atual
    Quando o utilizador valida o Intake para aprovação
    Então a evidência de Disaster Recovery é aceite
    E não é apresentada mensagem de evidência desatualizada

  # Requisitos testados: REQ-005, NFR-005
  Cenário: Percurso negativo — Rejeitar evidência de Disaster Recovery com mais de 365 dias
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que existe evidência de Disaster Recovery com data 366 dias antes da data atual
    Quando o utilizador valida o Intake para aprovação
    Então o sistema rejeita a evidência
    E o sistema apresenta erro a indicar que a evidência está fora do prazo aceite
    E o Intake não pode ser aprovado

  # Requisitos testados: REQ-005, NFR-005
  Cenário: Percurso negativo — Rejeitar evidência de Disaster Recovery com data futura
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que existe evidência de Disaster Recovery com data futura
    Quando o utilizador valida o Intake para aprovação
    Então o sistema rejeita a evidência
    E o sistema apresenta erro de data inválida da evidência
    E o estado do Intake permanece "Draft"

  # Requisitos testados: REQ-007
  Cenário: Percurso feliz — Reabrir Intake aprovado com role autorizada de Security Officer
    Dado que o utilizador está autenticado como "Security Officer"
    E que o Intake está no estado "Aprovado"
    Quando o utilizador solicita a reabertura do Intake
    Então o sistema muda o estado do Intake para "Reaberto"
    E o Intake fica disponível para correção autorizada

  # Requisitos testados: REQ-007, REQ-009, NFR-005
  Cenário: Percurso negativo — Bloquear reabertura por utilizador não autorizado
    Dado que o utilizador está autenticado como "Viewer"
    E que o Intake está no estado "Aprovado"
    Quando o utilizador tenta reabrir o Intake
    Então o sistema bloqueia a ação
    E o sistema apresenta "Acesso Negado"
    E o estado do Intake permanece "Aprovado"
    E é criado um registo de auditoria para a tentativa de reabertura não autorizada

  # Requisitos testados: REQ-008
  Cenário: Percurso feliz — Executar override com reautenticação e justificação válida
    Dado que o utilizador está autenticado como "Security Officer"
    E que o Intake está no estado "Aprovado"
    E que o utilizador abre a ação de override
    Quando o utilizador introduz a password correta
    E introduz uma justificação com pelo menos 20 caracteres
    E confirma o override
    Então o sistema autoriza a edição excecional
    E a justificação fica registada no histórico do processo

  # Requisitos testados: REQ-008
  Cenário: Fronteira — Manter confirmação de override desativada com justificação de 19 caracteres
    Dado que o utilizador está autenticado como "Security Officer"
    E que o modal de override está aberto
    Quando o utilizador introduz uma justificação com 19 caracteres
    Então a confirmação de override permanece desativada
    E o sistema não submete o override

  # Requisitos testados: REQ-008, REQ-009, NFR-005
  Cenário: Percurso negativo — Cancelar override quando a password está incorreta
    Dado que o utilizador está autenticado como "Security Officer"
    E que o modal de override está aberto
    E que a justificação tem pelo menos 20 caracteres
    Quando o utilizador introduz uma password incorreta
    E confirma o override
    Então o sistema cancela o override
    E os dados aprovados permanecem inalterados
    E é criado um registo de auditoria para a tentativa falhada de override

  # Requisitos testados: NFR-001
  Cenário: Segurança — Invalidar sessão após 15 minutos de inatividade
    Dado que o utilizador está autenticado
    E que o utilizador tem acesso ao módulo de Intake
    Quando o utilizador permanece inativo durante 15 minutos
    E tenta realizar uma nova interação
    Então o sistema invalida a sessão
    E exige novo login

  # Requisitos testados: NFR-005, REQ-002, REQ-004
  Cenário: Usabilidade — Apresentar erro de validação no mesmo ecrã em até um segundo
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que a evidência de Disaster Recovery está em falta
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema apresenta o erro de validação no mesmo ecrã
    E o erro aparece junto do campo ou ação bloqueada
    E o erro aparece em até um segundo
