# Objectives & Critical Success Factors (CSFs) — Lab 4

## Variant

- Variant number: 3
- Persona: Security Officer / Administrator
- Key constraint focus: Strict authorization and controlled actions (Security & Role-Based Approval)

---

## Objectives (3)

### OBJ-1 — Garantir aprovações e reaberturas seguras no Intake
- Description (why/outcome): Assegurar que apenas perfis autorizados conseguem aprovar, reabrir ou executar ações críticas sobre um Intake.
- Stakeholders impacted: Security Officer, Transition Manager
- Success signal (how we know): 100% das ações críticas executadas com sucesso pertencem a utilizadores autorizados.
- Variant-driven: Yes

### OBJ-2 — Assegurar rastreabilidade auditável de incidentes de acesso
- Description: Manter um registo completo e imutável de tentativas bloqueadas e ações críticas relevantes para auditoria e compliance.
- Stakeholders impacted: Security Officer, System Administrator
- Success signal: 100% das tentativas bloqueadas geram log persistido e recuperável.
- Variant-driven: Yes

### OBJ-3 — Garantir qualidade e validade dos dados antes da aprovação
- Description: Impedir a aprovação de Intakes sem informação essencial ou sem evidência de DR válida e recente.
- Stakeholders impacted: Transition Lead, Transition Manager
- Success signal: 100% dos Intakes aprovados possuem dados obrigatórios e evidência de DR válida.
- Variant-driven: No

---

## Critical Success Factors (CSFs) & Requirement Mapping

### CSF-1 — Controlo rigoroso de identidade e permissões (Link: OBJ-1)
- Description: O sistema deve impor validação de identidade e roles antes de qualquer ação crítica.
- Variant-driven: Yes
- Mapped Requirements (5):
  - REQ-003 (Restringir aprovação por RBAC)
  - REQ-006 (Verificar identidade e roles)
  - REQ-007 (Reabrir Intake com controlo de permissões)
  - REQ-008 (Override com reautenticação)
  - NFR-001 (Timeout de sessão)

### CSF-2 — Logs imutáveis e auditáveis (Link: OBJ-2)
- Description: O sistema e a infraestrutura de dados devem registar e preservar eventos de segurança sem possibilidade de alteração indevida.
- Variant-driven: Yes
- Mapped Requirements (3):
  - REQ-009 (Registar tentativas não autorizadas)
  - NFR-002 (Retenção, integridade e consulta dos logs)
  - NFR-005 (Tempo e localização das mensagens de erro)

### CSF-3 — Validação completa antes da decisão (Link: OBJ-3)
- Description: O processo de aprovação só deve avançar quando todos os dados e anexos exigidos estiverem corretos.
- Variant-driven: No
- Mapped Requirements (4):
  - REQ-001 (Recolher detalhes de infraestrutura e contactos)
  - REQ-002 (Anexar evidência de DR)
  - REQ-004 (Bloquear aprovação por informação incompleta)
  - REQ-005 (Validar frescura da evidência de DR)
