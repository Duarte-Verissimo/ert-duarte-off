# language: pt

Funcionalidade: REQ-005 - Validade temporal da evidência de Disaster Recovery
  Esta funcionalidade valida se a data da evidência de Disaster Recovery está dentro do período aceite.

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
