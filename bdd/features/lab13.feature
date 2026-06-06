# language: pt

Funcionalidade: Lab 13 - BDD executável para regras de aprovação segura do Intake
  Esta funcionalidade agrega os cenários BDD executáveis do Lab 13 para o slice Intake & Discovery.

  # Projeto: AMS
  # Slice: Intake & Discovery
  # Variante: Variante 3 - Security & Role-Based Approval
  # Requisitos cobertos: REQ-003, REQ-005, REQ-009

  # Requisito testado: REQ-003
  Cenário: Percurso feliz - Transition Manager aprova um Intake válido
    Dado que o utilizador tem role "Transition Manager"
    E que o utilizador tem id "tm-001"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema aprova o Intake
    E o estado do Intake passa para "Aprovado"
    E não é criado audit event

  # Requisito testado: REQ-003
  Cenário: Percurso alternativo - Security Officer aprova um Intake válido
    Dado que o utilizador tem role "Security Officer"
    E que o utilizador tem id "so-001"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema aprova o Intake
    E o estado do Intake passa para "Aprovado"

  # Requisito testado: REQ-003
  Cenário: Percurso negativo - Viewer tenta aprovar e é bloqueado
    Dado que o utilizador tem role "Viewer"
    E que o utilizador tem id "viewer-001"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador tenta aprovar o Intake
    Então o sistema bloqueia a ação
    E apresenta "Acesso Negado"
    E o estado do Intake permanece "Draft"

  # Requisito testado: REQ-005
  Cenário: Comportamento de fronteira - Evidência de DR exatamente com 365 dias é aceite
    Dado que a data atual é "2026-05-26"
    E que a evidência de Disaster Recovery tem a data "2025-05-26"
    Quando o sistema valida a evidência de Disaster Recovery
    Então a evidência é considerada válida
    E a idade da evidência é 365 dias

  # Requisito testado: REQ-005
  Cenário: Percurso negativo - Evidência de DR com mais de 365 dias é rejeitada
    Dado que a data atual é "2026-05-26"
    E que a evidência de Disaster Recovery tem a data "2025-05-25"
    Quando o sistema valida a evidência de Disaster Recovery
    Então a evidência é rejeitada
    E a idade da evidência é 366 dias
    E a mensagem indica que a evidência está fora do prazo aceite

  # Requisito testado: REQ-005
  Cenário: Percurso negativo - Evidência de DR com data futura é rejeitada
    Dado que a data atual é "2026-05-26"
    E que a evidência de Disaster Recovery tem a data "2026-05-27"
    Quando o sistema valida a evidência de Disaster Recovery
    Então a evidência é rejeitada
    E a mensagem indica que a data não pode ser futura

  # Requisito testado: REQ-009
  Cenário: Percurso negativo - Tentativa não autorizada cria audit event
    Dado que o utilizador tem role "Viewer"
    E que o utilizador tem id "viewer-009"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador tenta aprovar o Intake
    Então o sistema bloqueia a ação
    E é criado um audit event com User ID, ação e timestamp UTC
    E o utilizador não recebe confirmação explícita de que o log foi criado

  # Requisito testado: REQ-009
  Cenário: Percurso feliz - Audit event é persistido em menos de 1 segundo
    Dado que existe um audit event de tentativa não autorizada
    Quando o sistema persiste o audit event
    Então o audit event fica guardado no audit store
    E a persistência demora menos de 1 segundo
