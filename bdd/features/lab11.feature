# language: pt

Funcionalidade: Lab 11 - Testing First para aprovação segura do Intake
  O objetivo desta funcionalidade é representar, em BDD, os comportamentos críticos
  automatizados em PyTest para RBAC e auditoria no slice Intake & Discovery.

  # Projeto: AMS
  # Slice: Intake & Discovery
  # Variante: Variante 3 - Security & Role-Based Approval

  # Requisitos testados: REQ-003, REQ-009
  Cenário: Percurso feliz - Utilizador autorizado aprova um Intake válido
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador solicita a aprovação do Intake
    Então o sistema aprova o Intake
    E o estado do Intake muda para "Aprovado"
    E não é criado registo de auditoria de tentativa não autorizada

  # Requisitos testados: REQ-003, REQ-009
  Cenário: Percurso negativo - Utilizador não autorizado tenta aprovar e é bloqueado
    Dado que o utilizador está autenticado como "Viewer"
    E que o Intake está no estado "Draft"
    E que o Intake é válido
    Quando o utilizador tenta aprovar o Intake
    Então o sistema bloqueia a ação
    E apresenta "Acesso Negado"
    E o estado do Intake permanece "Draft"
    E é criado um registo de auditoria com User ID, data/hora UTC e ação tentada
    E o registo de auditoria é persistido em menos de 1 segundo após o bloqueio
    E o utilizador não recebe confirmação explícita de que o log foi criado

  # Requisito testado: REQ-005
  Cenário: Percurso negativo - Evidência de Disaster Recovery com data futura é rejeitada
    Dado que o utilizador está autenticado como "Transition Manager"
    E que o Intake está no estado "Draft"
    E que a evidência de Disaster Recovery tem a data "2026-05-27"
    E que a data atual é "2026-05-26"
    Quando o utilizador valida a evidência de Disaster Recovery
    Então o sistema rejeita a evidência
    E apresenta uma mensagem a indicar que a data não pode ser futura
  
  # Requisito testado: REQ-005
  Cenário: Percurso de fronteira - Evidência de Disaster Recovery exatamente com 365 dias é aceite
    Dado que a data atual é "2026-05-26"
    E que a evidência de Disaster Recovery tem a data "2025-05-26"
    Quando o sistema valida a evidência de Disaster Recovery
    Então a evidência é considerada válida
