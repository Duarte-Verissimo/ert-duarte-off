# language: pt

Funcionalidade: REQ-009 - Auditoria de ações não autorizadas
  Esta funcionalidade valida que tentativas de ações não autorizadas são registadas para auditoria.

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
  Cenário: Comportamento de segurança - Audit event é persistido em menos de 1 segundo
    Dado que existe um audit event de tentativa não autorizada
    Quando o sistema persiste o audit event
    Então o audit event fica guardado no audit store
    E a persistência demora menos de 1 segundo
