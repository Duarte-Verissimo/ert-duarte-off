# language: pt

Funcionalidade: REQ-003 - Aprovação do Intake por RBAC
  Esta funcionalidade valida que apenas roles autorizadas conseguem aprovar um Intake.

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
