# Requirements v1 — Lab 3 (AMS)

## Detailed Functional Requirements

### REQ-001: Recolher detalhes de infraestrutura e contactos

- **Requester (Requisitante):** Transition Manager
- **Description:** O sistema deve permitir registar e guardar, no Intake, os detalhes de infraestrutura relevantes para a transição e a matriz de contactos operacionais e de escalamento.
- **Objective:** Garantir que o processo de Intake reúne a base mínima de informação necessária para análise inicial.
- **Acceptance Criteria:**
  - O formulário inclui campos para infraestrutura, contactos operacionais e contactos de escalamento.
  - O sistema guarda os dados introduzidos sem os perder entre sessões autenticadas.
  - Um Intake sem esta informação não pode avançar para aprovação.
- **Variant impact:** No

### REQ-002: Anexar evidência de Disaster Recovery

- **Requester (Requisitante):** Transition Lead
- **Description:** O sistema deve permitir anexar a evidência obrigatória de Disaster Recovery ao processo de Intake.
- **Objective:** Assegurar que a equipa dispõe de prova documental mínima antes de aprovar a transição.
- **Acceptance Criteria:**
  - O utilizador pode anexar um ficheiro PDF como evidência de DR.
  - O ficheiro anexado fica associado ao Intake correto.
  - Sem evidência anexada, o sistema não permite concluir a aprovação.
- **Variant impact:** No

### REQ-003: Restringir a aprovação do Intake por RBAC

- **Requester (Requisitante):** Security Officer
- **Description:** O sistema deve restringir a ação de `Aprovar Intake` exclusivamente a utilizadores autenticados com a role `Security Officer` ou `Transition Manager`.
- **Objective:** Garantir que a passagem para a fase seguinte só é feita por perfis autorizados.
- **Acceptance Criteria:**
  - Um utilizador sem role autorizada recebe `Acesso Negado` ao tentar aprovar.
  - Um utilizador autorizado consegue mudar o estado do Intake para `Aprovado`.
  - Perfis de leitura não devem ver ou acionar a ação de aprovação.
- **Variant impact:** Yes

### REQ-004: Bloquear aprovação por informação incompleta

- **Requester (Requisitante):** Transition Manager
- **Description:** O sistema deve impedir a aprovação de um Intake quando existirem campos obrigatórios vazios ou evidências em falta, mantendo o estado em `Draft`.
- **Objective:** Garantir qualidade e completude mínimas antes da decisão de aprovação.
- **Acceptance Criteria:**
  - O clique em `Aprovar` valida todos os campos obrigatórios.
  - Se faltar o anexo de DR, o sistema apresenta `Evidência de DR em falta`.
  - O estado do Intake permanece `Draft` quando a validação falha.
- **Variant impact:** No

### REQ-005: Verificar a validade temporal da evidência de Disaster Recovery

- **Requester (Requisitante):** Transition Lead
- **Description:** O sistema deve verificar se a data associada ao documento de Disaster Recovery está dentro do período de validade aceite pelo sistema.
- **Objective:** Evitar aprovação baseada em evidências desatualizadas ou temporalmente inválidas.
- **Acceptance Criteria:**
  - Uma evidência com data superior a 365 dias é rejeitada.
  - Uma evidência com data futura é rejeitada.
  - A mensagem de erro identifica que a evidência de Disaster Recovery está fora do prazo aceite.
- **Variant impact:** No

### REQ-006: Verificar identidade e roles no diretório corporativo

- **Requester (Requisitante):** Security Officer
- **Description:** O sistema deve verificar a identidade do utilizador e a sua role no Active Directory ou SSO corporativo no momento do login.
- **Objective:** Centralizar a gestão de acessos e impedir contas órfãs ou desativadas de manterem permissões no AMS.
- **Acceptance Criteria:**
  - Contas desativadas no diretório corporativo têm o login rejeitado.
  - A role disponibilizada na aplicação corresponde ao mapeamento vindo do diretório.
  - A falha de validação de identidade impede ações críticas no módulo.
- **Variant impact:** Yes

### REQ-007: Reabrir Intake aprovado com controlo de permissões

- **Requester (Requisitante):** Security Officer
- **Description:** O sistema deve permitir reabrir um Intake aprovado apenas a utilizadores explicitamente autorizados para essa ação.
- **Objective:** Garantir que correções pós-aprovação são controladas e rastreáveis.
- **Acceptance Criteria:**
  - Apenas `Security Officer` ou `Transition Manager` podem reabrir um Intake aprovado.
  - Ao reabrir, o estado muda de `Aprovado` para `Reaberto`.
  - Uma tentativa sem permissão é bloqueada e registada em log.
- **Variant impact:** Yes

### REQ-008: Executar override com reautenticação e justificação

- **Requester (Requisitante):** Security Officer
- **Description:** O sistema deve exigir reautenticação e justificação textual antes de permitir um `Override` sobre dados aprovados.
- **Objective:** Adicionar uma barreira extra de segurança antes de alterações excecionais a dados já aprovados.
- **Acceptance Criteria:**
  - O `Override` abre um modal com password e justificação obrigatória.
  - A confirmação só fica ativa quando a justificação tem pelo menos 20 caracteres.
  - Password incorreta cancela o override e regista a tentativa.
- **Variant impact:** Yes

### REQ-009: Registar tentativas de ações não autorizadas

- **Requester (Requisitante):** System Administrator
- **Description:** O sistema deve criar automaticamente um registo de auditoria sempre que for detetada uma tentativa de aprovação, reabertura ou override sem permissões válidas.
- **Objective:** Manter evidência rastreável para análise de segurança e auditoria.
- **Acceptance Criteria:**
  - O log inclui User ID, data/hora UTC e ação tentada.
  - O log é persistido em menos de 1 segundo após o bloqueio.
  - O utilizador bloqueado não recebe confirmação explícita de que o log foi gerado.
- **Variant impact:** Yes

---

## Non-Functional Requirements (NFRs)

1. **NFR-001 (Security):** O sistema deve invalidar a sessão de qualquer utilizador autenticado após **15 minutos de inatividade** estrita, exigindo novo login para continuar no módulo de Intake.  
   **Requester (Requisitante):** Security Officer  
   _(Variant impact: Yes)_
2. **NFR-002 (Audit):** Os registos de auditoria de segurança devem permanecer disponíveis para consulta durante pelo menos **5 anos**, e **100%** das tentativas não autorizadas de alteração ou eliminação desses registos devem ser rejeitadas e registadas.  
   **Requester (Requisitante):** System Administrator  
   _(Variant impact: Yes)_
3. **NFR-003 (Performance):** O formulário de Intake e os respetivos dados guardados devem ser apresentados em **<= 2 segundos para 95% dos pedidos** sob carga normal.  
   **Requester (Requisitante):** Transition Manager  
   _(Variant impact: No)_
4. **NFR-004 (Availability):** O módulo de Intake deve garantir **99.9%** de disponibilidade mensal, excluindo janelas de manutenção planeadas.  
   **Requester (Requisitante):** System Administrator  
   _(Variant impact: No)_
5. **NFR-005 (Usability):** Em **95%** dos erros de validação ou segurança, o sistema deve apresentar a mensagem de erro no mesmo ecrã e junto do campo ou ação bloqueada em até **1 segundo** após a tentativa do utilizador.  
   **Requester (Requisitante):** Transition Manager  
   _(Variant impact: No)_
6. **NFR-006 (Compatibility):** Os cenários críticos de autenticação, preenchimento, aprovação e override devem completar com sucesso em **100%** dos testes executados nas duas últimas versões major do Google Chrome e do Microsoft Edge.  
   **Requester (Requisitante):** System Administrator  
   _(Variant impact: No)_
