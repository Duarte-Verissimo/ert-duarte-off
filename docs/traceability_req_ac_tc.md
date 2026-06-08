# Rastreabilidade — REQ → AC → Casos de Teste / BDD (Lab 10)

## Nota de correção

O `REQ-001` foi removido porque não fez parte do scope implementado no Lovable.

---

| Requisito | Critérios de Aceitação relacionados | Casos de Teste | Cenários BDD |
|---|---|---|---|
| REQ-002 — Anexar evidência de Disaster Recovery | AC1: Evidência de DR pode ser anexada ao Intake. <br> AC2: Evidência fica associada ao Intake correto. <br> AC3: Sem evidência de DR, a aprovação é bloqueada. | TC-001, TC-002 | Bloquear aprovação quando falta evidência de Disaster Recovery; Apresentar erro de validação no mesmo ecrã em até um segundo |
| REQ-003 — Restringir aprovação por RBAC | AC1: Transition Manager pode aprovar Intake válido. <br> AC2: Security Officer pode aprovar Intake válido. <br> AC3: Viewer recebe `Acesso Negado` e o estado não muda. | TC-003, TC-004, TC-005, TC-019 | Aprovar Intake válido com Transition Manager; Aprovar Intake válido com Security Officer; Bloquear aprovação por utilizador não autorizado |
| REQ-004 — Bloquear aprovação por informação incompleta | AC1: Aprovação é bloqueada quando falta evidência obrigatória. <br> AC2: Estado permanece `Draft`. <br> AC3: Mensagem de erro identifica o problema. | TC-002, TC-003, TC-004, TC-019, TC-022 | Bloquear aprovação quando falta evidência de Disaster Recovery; Apresentar erro de validação no mesmo ecrã |
| REQ-005 — Verificar a validade temporal da evidência de Disaster Recovery | AC1: Evidência com mais de 365 dias é rejeitada. <br> AC2: Evidência com data futura é rejeitada. <br> AC3: Evidência exatamente com 365 dias é aceite. | TC-006, TC-007, TC-008, TC-022 | Aceitar evidência exatamente com 365 dias; Rejeitar evidência com mais de 365 dias; Rejeitar evidência com data futura |
| REQ-006 — Verificar identidade e roles | AC1: Conta inválida/desativada é rejeitada. <br> AC2: Role da aplicação corresponde à role do diretório. | TC-009, TC-010 | Sem cenário BDD dedicado neste Lab |
| REQ-007 — Reabrir Intake aprovado | AC1: Role autorizada pode reabrir. <br> AC2: Role não autorizada é bloqueada. <br> AC3: Tentativa bloqueada gera auditoria. | TC-011, TC-012 | Reabrir Intake aprovado; Bloquear reabertura por utilizador não autorizado |
| REQ-008 — Override com reautenticação | AC1: Password correta e justificação válida autorizam override. <br> AC2: Justificação com menos de 20 caracteres bloqueia confirmação. <br> AC3: Password incorreta cancela override e gera log. | TC-013, TC-014, TC-015 | Executar override válido; Manter confirmação desativada; Cancelar override com password incorreta |
| REQ-009 — Registar ações não autorizadas | AC1: Tentativa não autorizada gera log. <br> AC2: Log inclui User ID, data/hora UTC e ação tentada. <br> AC3: Log é persistido em menos de 1 segundo. | TC-005, TC-012, TC-015, TC-016, TC-017 | Bloquear aprovação por utilizador não autorizado; Bloquear reabertura; Cancelar override |
| NFR-001 — Timeout de sessão | AC1: Sessão inativa há 15 minutos é invalidada. <br> AC2: Nova interação exige novo login. | TC-018 | Invalidar sessão após 15 minutos |
| NFR-002 — Logs | AC1: Logs permanecem disponíveis. <br> AC2: Alterações não autorizadas aos logs são rejeitadas. | TC-016, TC-017 | Sem cenário BDD dedicado neste Lab |
| NFR-003 — Performance | AC1: Formulário carrega em <= 2 segundos sob carga normal. | TC-020 | Sem cenário BDD dedicado neste Lab |
| NFR-005 — Mensagens de erro | AC1: Mensagem aparece no mesmo ecrã. <br> AC2: Mensagem aparece junto da ação/campo bloqueado. <br> AC3: Mensagem aparece em até 1 segundo. | TC-002, TC-005, TC-006, TC-008, TC-012, TC-015, TC-019, TC-022 | Apresentar erro de validação no mesmo ecrã em até um segundo |
| NFR-006 — Compatibilidade | AC1: Fluxo crítico completa em Chrome e Edge suportados. | TC-021 | Sem cenário BDD dedicado neste Lab |
