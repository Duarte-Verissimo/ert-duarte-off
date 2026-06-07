# Casos de Teste — Lab 9

## Nota de correção de scope

Este ficheiro foi corrigido para ficar alinhado com o scope usado no protótipo Lovable.

O `REQ-001 — Recolher detalhes de infraestrutura e contactos` não é incluído, porque não fez parte do desenvolvimento no Lovable.

O foco principal está em:

- REQ-002 — Anexar evidência de Disaster Recovery
- REQ-003 — Restringir a aprovação do Intake por RBAC
- REQ-004 — Bloquear aprovação por informação incompleta
- REQ-005: Verificar a validade temporal da evidência de Disaster Recovery
- NFR-005 — Tempo e localização das mensagens de erro

Também são incluídos testes planeados para requisitos da Variante 3: REQ-006, REQ-007, REQ-008, REQ-009, NFR-001 e NFR-002.

---

## TC-001 — Anexar evidência válida de Disaster Recovery ao Intake correto

- Tipo: Sistema
- Prioridade: Alta
- Categoria de cobertura: Percurso feliz
- Requisitos relacionados: REQ-002
- Pré-condições:
  - O utilizador está autenticado.
  - Existe um Intake no estado `Draft`.
  - O utilizador tem permissão para anexar evidência.
- Dados de teste:
  - Ficheiro: `dr_test_report.pdf`
  - Tipo de evidência: Disaster Recovery
  - Data: dentro dos últimos 365 dias.
- Passos:
  1. Abrir o Intake atual.
  2. Anexar a evidência de Disaster Recovery.
  3. Guardar ou submeter a evidência.
  4. Consultar novamente o Intake.
- Resultados esperados:
  - A evidência é aceite.
  - A evidência fica associada ao Intake correto.
  - A evidência continua visível depois de consultar novamente o Intake.

---

## TC-002 — Bloquear aprovação quando falta evidência de Disaster Recovery

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-002, REQ-004, NFR-005
- Pré-condições:
  - O utilizador está autenticado como `Transition Manager`.
  - O Intake está no estado `Draft`.
  - Os campos obrigatórios do slice selecionado estão preenchidos.
  - Não existe evidência de DR anexada.
- Dados de teste:
  - Evidência de DR: em falta.
- Passos:
  1. Abrir o Intake.
  2. Confirmar que os campos obrigatórios do slice estão preenchidos.
  3. Tentar aprovar sem anexar evidência de DR.
- Resultados esperados:
  - O sistema bloqueia a aprovação.
  - O sistema apresenta `Evidência de DR em falta`.
  - O estado permanece `Draft`.
  - A mensagem aparece no mesmo ecrã junto da ação bloqueada.

---

## TC-003 — Aprovar Intake válido com role autorizada de Transition Manager

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Percurso feliz
- Requisitos relacionados: REQ-003, REQ-004, REQ-005
- Pré-condições:
  - O utilizador está autenticado como `Transition Manager`.
  - O Intake está em `Draft`.
  - Todos os campos obrigatórios do slice selecionado estão preenchidos.
  - Existe evidência de DR válida.
- Dados de teste:
  - Role: `Transition Manager`
  - Data da evidência: 30 dias antes da data atual.
- Passos:
  1. Abrir o Intake válido.
  2. Selecionar `Aprovar`.
  3. Confirmar a aprovação.
- Resultados esperados:
  - O sistema aprova o Intake.
  - O estado muda de `Draft` para `Aprovado`.
  - O Intake fica bloqueado para edições normais.

---

## TC-004 — Aprovar Intake válido com role autorizada de Security Officer

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Fluxo alternativo
- Requisitos relacionados: REQ-003, REQ-004, REQ-005
- Pré-condições:
  - O utilizador está autenticado como `Security Officer`.
  - O Intake está em `Draft`.
  - A evidência de DR é válida.
- Dados de teste:
  - Role: `Security Officer`
- Passos:
  1. Abrir o Intake válido.
  2. Selecionar `Aprovar`.
- Resultados esperados:
  - O sistema aprova o Intake.
  - A aprovação fica atribuída ao Security Officer.

---

## TC-005 — Bloquear aprovação por utilizador não autorizado

- Tipo: Segurança
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-003, REQ-009, NFR-005
- Pré-condições:
  - O utilizador está autenticado como `Viewer`.
  - O Intake está em `Draft`.
- Dados de teste:
  - Role: `Viewer`
- Passos:
  1. Abrir o Intake.
  2. Tentar aprovar.
- Resultados esperados:
  - O sistema bloqueia a ação.
  - O sistema apresenta `Acesso Negado`.
  - O estado permanece `Draft`.
  - É criado um log de auditoria.

---

## TC-006 — Rejeitar evidência de DR com mais de 365 dias

- Tipo: Unitário
- Prioridade: Alta
- Categoria de cobertura: Fronteira / negativo
- Requisitos relacionados: REQ-005, NFR-005
- Pré-condições:
  - O utilizador está autenticado.
  - Existe evidência de DR anexada.
- Dados de teste:
  - Data da evidência: 366 dias antes da data atual.
- Passos:
  1. Anexar evidência com data 366 dias anterior.
  2. Validar o Intake para aprovação.
- Resultados esperados:
  - O sistema rejeita a evidência.
  - O sistema apresenta mensagem de evidência fora do prazo.
  - O Intake não pode ser aprovado.

---

## TC-007 — Aceitar evidência de DR exatamente com 365 dias

- Tipo: Unitário
- Prioridade: Alta
- Categoria de cobertura: Fronteira
- Requisitos relacionados: REQ-005
- Pré-condições:
  - O utilizador está autenticado.
  - Existe evidência de DR anexada.
- Dados de teste:
  - Data da evidência: exatamente 365 dias antes da data atual.
- Passos:
  1. Anexar evidência com data exatamente 365 dias anterior.
  2. Validar a evidência.
- Resultados esperados:
  - O sistema aceita a evidência.
  - Não é apresentada mensagem de evidência desatualizada.

---

## TC-008 — Rejeitar evidência de DR com data futura

- Tipo: Unitário
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-005, NFR-005
- Pré-condições:
  - O utilizador está autenticado.
  - Existe evidência de DR anexada.
- Dados de teste:
  - Data da evidência: 1 dia após a data atual.
- Passos:
  1. Anexar evidência com data futura.
  2. Validar o Intake.
- Resultados esperados:
  - O sistema rejeita a evidência.
  - O sistema apresenta erro de data inválida.
  - O Intake permanece em `Draft`.

---

## TC-009 — Rejeitar login de conta desativada no diretório corporativo

- Tipo: Integração
- Prioridade: Alta
- Categoria de cobertura: Negativo / segurança
- Requisitos relacionados: REQ-006
- Pré-condições:
  - A validação via diretório corporativo ou SSO está disponível ou simulada.
- Dados de teste:
  - Conta desativada no diretório.
- Passos:
  1. Tentar iniciar sessão com a conta desativada.
- Resultados esperados:
  - O login é rejeitado.
  - Não é criada sessão.
  - O utilizador não acede ao Intake.

---

## TC-010 — Mapear role do diretório corporativo para role da aplicação

- Tipo: Integração
- Prioridade: Alta
- Categoria de cobertura: Fluxo alternativo
- Requisitos relacionados: REQ-006
- Pré-condições:
  - A conta do utilizador está ativa.
- Dados de teste:
  - Role no diretório: `Security Officer`
- Passos:
  1. Iniciar sessão.
  2. Carregar a role a partir do diretório.
- Resultados esperados:
  - A role da aplicação corresponde à role do diretório.
  - As permissões respeitam a role mapeada.

---

## TC-011 — Reabrir Intake aprovado com Security Officer

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Percurso feliz
- Requisitos relacionados: REQ-007
- Pré-condições:
  - O utilizador está autenticado como `Security Officer`.
  - O Intake está em `Aprovado`.
- Passos:
  1. Abrir o Intake aprovado.
  2. Selecionar `Reabrir`.
- Resultados esperados:
  - O estado muda para `Reaberto`.
  - O Intake fica disponível para correção autorizada.

---

## TC-012 — Bloquear reabertura por utilizador não autorizado

- Tipo: Segurança
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-007, REQ-009, NFR-005
- Pré-condições:
  - O utilizador está autenticado como `Viewer`.
  - O Intake está em `Aprovado`.
- Passos:
  1. Tentar reabrir o Intake.
- Resultados esperados:
  - O sistema bloqueia a ação.
  - O estado permanece `Aprovado`.
  - É criado log de auditoria.

---

## TC-013 — Executar override com reautenticação e justificação válida

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Percurso feliz
- Requisitos relacionados: REQ-008
- Pré-condições:
  - O utilizador está autenticado como `Security Officer`.
  - O Intake está em `Aprovado`.
- Dados de teste:
  - Password correta.
  - Justificação com pelo menos 20 caracteres.
- Passos:
  1. Abrir override.
  2. Inserir password correta.
  3. Inserir justificação válida.
  4. Confirmar.
- Resultados esperados:
  - O override é autorizado.
  - A justificação fica registada.

---

## TC-014 — Manter confirmação de override desativada com justificação de 19 caracteres

- Tipo: Unitário
- Prioridade: Alta
- Categoria de cobertura: Fronteira / negativo
- Requisitos relacionados: REQ-008
- Dados de teste:
  - Justificação: 19 caracteres.
- Passos:
  1. Abrir modal de override.
  2. Introduzir justificação com 19 caracteres.
- Resultados esperados:
  - A confirmação permanece desativada.
  - O override não pode ser submetido.

---

## TC-015 — Cancelar override quando a password está incorreta

- Tipo: Segurança
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-008, REQ-009, NFR-005
- Dados de teste:
  - Password incorreta.
  - Justificação válida.
- Passos:
  1. Abrir override.
  2. Introduzir password incorreta.
  3. Confirmar.
- Resultados esperados:
  - O override é cancelado.
  - Os dados aprovados permanecem inalterados.
  - A tentativa é registada em log.

---

## TC-016 — Persistir log de ação não autorizada em menos de 1 segundo

- Tipo: Integração
- Prioridade: Alta
- Categoria de cobertura: NFR / auditoria
- Requisitos relacionados: REQ-009, NFR-002
- Passos:
  1. Executar uma ação crítica sem autorização.
  2. Verificar a criação do log.
- Resultados esperados:
  - O log inclui User ID, data/hora UTC e ação tentada.
  - O log é persistido em menos de 1 segundo.

---

## TC-017 — Rejeitar tentativa não autorizada de alterar logs

- Tipo: Segurança
- Prioridade: Alta
- Categoria de cobertura: NFR / negativo
- Requisitos relacionados: NFR-002, REQ-009
- Passos:
  1. Tentar alterar ou apagar um log sem permissão.
- Resultados esperados:
  - A tentativa é rejeitada.
  - O log original permanece inalterado.
  - A tentativa rejeitada fica registada.

---

## TC-018 — Invalidar sessão após 15 minutos de inatividade

- Tipo: Sistema
- Prioridade: Alta
- Categoria de cobertura: NFR / segurança
- Requisitos relacionados: NFR-001
- Passos:
  1. Iniciar sessão.
  2. Permanecer inativo durante 15 minutos.
  3. Tentar nova interação.
- Resultados esperados:
  - A sessão é invalidada.
  - O sistema exige novo login.

---

## TC-019 — Apresentar erro no mesmo ecrã em até 1 segundo

- Tipo: Sistema
- Prioridade: Média
- Categoria de cobertura: NFR / usabilidade
- Requisitos relacionados: NFR-005, REQ-003, REQ-004
- Passos:
  1. Provocar erro de validação ou segurança.
  2. Medir o tempo até à mensagem.
- Resultados esperados:
  - A mensagem aparece no mesmo ecrã.
  - A mensagem aparece junto da ação bloqueada.
  - A mensagem aparece em até 1 segundo.

---

## TC-020 — Carregar formulário de Intake em até 2 segundos sob carga normal

- Tipo: Performance
- Prioridade: Média
- Categoria de cobertura: NFR / performance
- Requisitos relacionados: NFR-003
- Passos:
  1. Abrir o formulário de Intake sob carga normal.
  2. Medir o tempo de carregamento.
- Resultados esperados:
  - O formulário é apresentado em <= 2 segundos.

---

## TC-021 — Completar fluxo crítico nos browsers suportados

- Tipo: Compatibilidade
- Prioridade: Média
- Categoria de cobertura: NFR / compatibilidade
- Requisitos relacionados: NFR-006
- Passos:
  1. Executar o fluxo crítico em Chrome.
  2. Executar o fluxo crítico em Edge.
- Resultados esperados:
  - O fluxo termina com sucesso nos browsers suportados.

---

## TC-022 — Bloquear aprovação quando a evidência de DR é inválida e manter Draft

- Tipo: Aceitação
- Prioridade: Alta
- Categoria de cobertura: Negativo / erro
- Requisitos relacionados: REQ-004, REQ-005, NFR-005
- Passos:
  1. Anexar evidência de DR inválida.
  2. Tentar aprovar o Intake.
- Resultados esperados:
  - O sistema bloqueia a aprovação.
  - O estado permanece `Draft`.
  - O erro aparece no mesmo ecrã.
