# Validação de Requisitos — Lab 7

## Participantes / roles

- Cliente/Stakeholders: AMS Transition Lead, Security Officer
- Equipa Dev: Team DNR
- Facilitador: Duarte Verissimo
- Relator: Ricardo Santos
- Revisor: Nuno Tainha
- Testador: Team DNR

## Requisitos selecionados (min. 6)

- REQ-003 — Restrição da aprovação do Intake por RBAC (Impacto da variante: Sim)
- REQ-004 — Bloqueio da aprovação por informação incompleta (Impacto da variante: Não)
- REQ-005 — Validação da frescura da evidência de DR (Impacto da variante: Não)
- REQ-007 — Reabertura de Intake aprovado com controlo de permissões (Impacto da variante: Sim)
- NFR-001 — Timeout de sessão inativa (Impacto da variante: Sim)
- NFR-002 — Retenção, integridade e consulta dos logs (Impacto da variante: Sim)

## Perguntas de validação orientadas pela variante (min. 3)

1. A variante 3 exige que a aprovação e a reabertura sejam sempre limitadas aos mesmos perfis, ou existem cenários excecionais em que o `Security Officer` deve sobrepor-se ao `Transition Manager`?
2. Que evidência o stakeholder considera suficiente para demonstrar que uma tentativa não autorizada foi realmente bloqueada e auditada?
3. Em ações críticas como reabertura e override, o bloqueio por sessão expirada deve acontecer antes da ação ser apresentada ou apenas no momento da confirmação?

## Resultados da validação

### REQ-003 — Restrição da aprovação do Intake por RBAC

- Estado: Válido
- Problemas encontrados:
  - A intenção do requisito está clara, mas a distinção entre ator principal e ator de suporte pode gerar dúvidas se não for confirmada em use case.
  - A regra de autorização precisa de ficar claramente associada a evidência observável de bloqueio.
- Correção proposta (reescrever/dividir/clarificar):
  - Manter o requisito, mas reforçar nos AC que a autorização é verificada antes da conclusão da aprovação.
  - Garantir que o bloqueio sem permissão é acompanhado de resposta visível e rastreável.
- Evidência esperada (como verificar):
  - Revisão / Demo / Teste
  - Notas: demonstração com perfis autorizados e não autorizados, incluindo resultado esperado em cada caso.

### REQ-004 — Bloqueio da aprovação por informação incompleta

- Estado: Válido
- Problemas encontrados:
  - O requisito é claro, mas os limites da “informação incompleta” devem ficar explícitos.
  - O sistema deve indicar de forma objetiva o que impede a aprovação.
- Correção proposta (reescrever/dividir/clarificar):
  - Manter o requisito e reforçar os AC com exemplos visíveis de bloqueio por campo obrigatório ou evidência em falta.
  - Associar o comportamento ao estado `Draft`.
- Evidência esperada (como verificar):
  - Revisão / Demo / Teste
  - Notas: demonstração de tentativa de aprovação sem dados obrigatórios e verificação de manutenção do estado.

### REQ-005 — Validação da frescura da evidência de DR

- Estado: Válido
- Problemas encontrados:
  - O requisito é testável, mas precisa de ficar explícito que a regra cobre tanto evidência antiga como evidência futura.
  - Deve haver uma mensagem de erro suficientemente objetiva para o utilizador perceber a rejeição.
- Correção proposta (reescrever/dividir/clarificar):
  - Manter o requisito com critérios de aceitação separados para antiguidade e data futura.
  - Tornar a validação mensurável com o limiar de 12 meses / 365 dias.
- Evidência esperada (como verificar):
  - Teste / Medição / Demo
  - Notas: testar datas válidas, inválidas e futuras com resultados observáveis.

### REQ-007 — Reabertura de Intake aprovado com controlo de permissões

- Estado: Válido
- Problemas encontrados:
  - O requisito é coerente com a variante, mas precisa de deixar inequívoco o comportamento quando o utilizador não tem permissão.
  - Convém confirmar que a reabertura também é rastreável quando é bem-sucedida.
- Correção proposta (reescrever/dividir/clarificar):
  - Reforçar os AC com um cenário de sucesso e um cenário de bloqueio.
  - Associar explicitamente a mudança de estado para `Reaberto`.
- Evidência esperada (como verificar):
  - Revisão / Demo / Teste
  - Notas: demonstrar reabertura com perfil autorizado e bloqueio com perfil não autorizado.

### NFR-001 — Timeout de sessão inativa

- Estado: Válido
- Problemas encontrados:
  - O requisito já é mensurável, mas deve ficar claro que a sessão não pode ser reutilizada depois do timeout.
  - O comportamento deve ser visível e verificável em contexto de ação crítica.
- Correção proposta (reescrever/dividir/clarificar):
  - Manter o requisito com limiar de 15 minutos e reforçar o comportamento após expiração.
  - Validar o redirecionamento para login e a impossibilidade de retomar a sessão anterior.
- Evidência esperada (como verificar):
  - Teste / Medição / Demo
  - Notas: teste cronometrado com tentativa de regressar ao módulo após expiração.

### NFR-002 — Retenção, integridade e consulta dos logs

- Estado: Válido
- Problemas encontrados:
  - O requisito já é forte, mas precisa de separar melhor a disponibilidade dos logs da integridade dos logs.
  - A prova de integridade não deve depender apenas de detalhe técnico de base de dados.
- Correção proposta (reescrever/dividir/clarificar):
  - Manter o requisito com dois eixos de verificação: consulta durante 5 anos e rejeição de tentativas não autorizadas de alteração/eliminação.
  - Usar critérios de aceitação mensuráveis com cobertura total das tentativas inválidas.
- Evidência esperada (como verificar):
  - Revisão / Teste / Medição
  - Notas: evidência de retenção, consulta e rejeição de operações proibidas sobre os registos.
