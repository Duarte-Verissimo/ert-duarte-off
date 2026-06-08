# Objetivos e Fatores Críticos de Sucesso (CSFs) — Lab 4

## Variante

- Número da variante: 3
- Persona: Security Officer / Administrator
- Foco principal das restrições: Autorização estrita e ações controladas (Security & Role-Based Approval)

---

## Objetivos (3)

### OBJ-1 — Garantir aprovações e reaberturas seguras no Intake
- Descrição (porquê/resultado): Assegurar que apenas perfis autorizados conseguem aprovar, reabrir ou executar ações críticas sobre um Intake.
- Stakeholders impactados: Security Officer, Transition Manager
- Sinal de sucesso (como sabemos): 100% das ações críticas executadas com sucesso pertencem a utilizadores autorizados.
- Orientado pela variante: Sim

### OBJ-2 — Assegurar rastreabilidade auditável de incidentes de acesso
- Descrição: Manter um registo completo e imutável de tentativas bloqueadas e ações críticas relevantes para auditoria e compliance.
- Stakeholders impactados: Security Officer, System Administrator
- Sinal de sucesso: 100% das tentativas bloqueadas geram log persistido e recuperável.
- Orientado pela variante: Sim

### OBJ-3 — Garantir qualidade e validade dos dados antes da aprovação
- Descrição: Impedir a aprovação de Intakes sem informação essencial ou sem evidência de DR válida e recente.
- Stakeholders impactados: Transition Lead, Transition Manager
- Sinal de sucesso: 100% dos Intakes aprovados possuem dados obrigatórios e evidência de DR válida.
- Orientado pela variante: Não

---

## Fatores Críticos de Sucesso (CSFs) e mapeamento de requisitos

### CSF-1 — Controlo rigoroso de identidade e permissões (Ligação: OBJ-1)
- Descrição: O sistema deve impor validação de identidade e roles antes de qualquer ação crítica.
- Orientado pela variante: Sim
- Requisitos mapeados (5):
  - REQ-003 (Restringir aprovação por RBAC)
  - REQ-006 (Verificar identidade e roles)
  - REQ-007 (Reabrir Intake com controlo de permissões)
  - REQ-008 (Override com reautenticação)
  - NFR-001 (Timeout de sessão)

### CSF-2 — Logs imutáveis e auditáveis (Ligação: OBJ-2)
- Descrição: O sistema e a infraestrutura de dados devem registar e preservar eventos de segurança sem possibilidade de alteração indevida.
- Orientado pela variante: Sim
- Requisitos mapeados (3):
  - REQ-009 (Registar tentativas não autorizadas)
  - NFR-002 (Retenção, integridade e consulta dos logs)
  - NFR-005 (Tempo e localização das mensagens de erro)

### CSF-3 — Validação completa antes da decisão (Ligação: OBJ-3)
- Descrição: O processo de aprovação só deve avançar quando todos os dados e anexos exigidos estiverem corretos.
- Orientado pela variante: Não
- Requisitos mapeados (4):
  - REQ-001 (Recolher detalhes de infraestrutura e contactos)
  - REQ-002 (Anexar evidência de DR)
  - REQ-004 (Bloquear aprovação por informação incompleta)
  - REQ-005 (Validar frescura da evidência de DR)
