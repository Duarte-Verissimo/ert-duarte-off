# Requisitos v1 — Lab 3 (AMS)

## Requisitos Funcionais Detalhados

### REQ-001: Recolher detalhes de infraestrutura e contactos

- **Requisitante:** Transition Manager
- **Descrição:** O sistema deve permitir registar e guardar, no Intake, os detalhes de infraestrutura relevantes para a transição e a matriz de contactos operacionais e de escalamento.
- **Objetivo:** Garantir que o processo de Intake reúne a base mínima de informação necessária para análise inicial.
- **Critérios de Aceitação:**
  - O formulário inclui campos para infraestrutura, contactos operacionais e contactos de escalamento.
  - O sistema guarda os dados introduzidos sem os perder entre sessões autenticadas.
  - Um Intake sem esta informação não pode avançar para aprovação.
- **Impacto da variante:** Não

### REQ-002: Anexar evidência de Disaster Recovery

- **Requisitante:** Transition Lead
- **Descrição:** O sistema deve permitir anexar a evidência obrigatória de Disaster Recovery ao processo de Intake.
- **Objetivo:** Assegurar que a equipa dispõe de prova documental mínima antes de aprovar a transição.
- **Critérios de Aceitação:**
  - O utilizador pode anexar um ficheiro PDF como evidência de DR.
  - O ficheiro anexado fica associado ao Intake correto.
  - Sem evidência anexada, o sistema não permite concluir a aprovação.
- **Impacto da variante:** Não

### REQ-003: Restringir a aprovação do Intake por RBAC

- **Requisitante:** Security Officer
- **Descrição:** O sistema deve restringir a ação de `Aprovar Intake` exclusivamente a utilizadores autenticados com a role `Security Officer` ou `Transition Manager`.
- **Objetivo:** Garantir que a passagem para a fase seguinte só é feita por perfis autorizados.
- **Critérios de Aceitação:**
  - Um utilizador sem role autorizada recebe `Acesso Negado` ao tentar aprovar.
  - Um utilizador autorizado consegue mudar o estado do Intake para `Aprovado`.
  - Perfis de leitura não devem ver ou acionar a ação de aprovação.
- **Impacto da variante:** Sim

### REQ-004: Bloquear aprovação por informação incompleta

- **Requisitante:** Transition Manager
- **Descrição:** O sistema deve impedir a aprovação de um Intake quando existirem campos obrigatórios vazios ou evidências em falta, mantendo o estado em `Draft`.
- **Objetivo:** Garantir qualidade e completude mínimas antes da decisão de aprovação.
- **Critérios de Aceitação:**
  - O clique em `Aprovar` valida todos os campos obrigatórios.
  - Se faltar o anexo de DR, o sistema apresenta `Evidência de DR em falta`.
  - O estado do Intake permanece `Draft` quando a validação falha.
- **Impacto da variante:** Não

### REQ-005: Verificar a validade temporal da evidência de Disaster Recovery

- **Requisitante:** Transition Lead
- **Descrição:** O sistema deve verificar se a data associada ao documento de Disaster Recovery está dentro do período de validade aceite pelo sistema.
- **Objetivo:** Evitar aprovação baseada em evidências desatualizadas ou temporalmente inválidas.
- **Critérios de Aceitação:**
  - Uma evidência com data superior a 365 dias é rejeitada.
  - Uma evidência com data futura é rejeitada.
  - A mensagem de erro identifica que a evidência de Disaster Recovery está fora do prazo aceite.
- **Impacto da variante:** Não

### REQ-006: Verificar identidade e roles no diretório corporativo

- **Requisitante:** Security Officer
- **Descrição:** O sistema deve verificar a identidade do utilizador e a sua role no Active Directory ou SSO corporativo no momento do login.
- **Objetivo:** Centralizar a gestão de acessos e impedir contas órfãs ou desativadas de manterem permissões no AMS.
- **Critérios de Aceitação:**
  - Contas desativadas no diretório corporativo têm o login rejeitado.
  - A role disponibilizada na aplicação corresponde ao mapeamento vindo do diretório.
  - A falha de validação de identidade impede ações críticas no módulo.
- **Impacto da variante:** Sim

### REQ-007: Reabrir Intake aprovado com controlo de permissões

- **Requisitante:** Security Officer
- **Descrição:** O sistema deve permitir reabrir um Intake aprovado apenas a utilizadores explicitamente autorizados para essa ação.
- **Objetivo:** Garantir que correções pós-aprovação são controladas e rastreáveis.
- **Critérios de Aceitação:**
  - Apenas `Security Officer` ou `Transition Manager` podem reabrir um Intake aprovado.
  - Ao reabrir, o estado muda de `Aprovado` para `Reaberto`.
  - Uma tentativa sem permissão é bloqueada e registada em log.
- **Impacto da variante:** Sim

### REQ-008: Executar override com reautenticação e justificação

- **Requisitante:** Security Officer
- **Descrição:** O sistema deve exigir reautenticação e justificação textual antes de permitir um `Override` sobre dados aprovados.
- **Objetivo:** Adicionar uma barreira extra de segurança antes de alterações excecionais a dados já aprovados.
- **Critérios de Aceitação:**
  - O `Override` abre um modal com password e justificação obrigatória.
  - A confirmação só fica ativa quando a justificação tem pelo menos 20 caracteres.
  - Password incorreta cancela o override e regista a tentativa.
- **Impacto da variante:** Sim

### REQ-009: Registar tentativas de ações não autorizadas

- **Requisitante:** System Administrator
- **Descrição:** O sistema deve criar automaticamente um registo de auditoria sempre que for detetada uma tentativa de aprovação, reabertura ou override sem permissões válidas.
- **Objetivo:** Manter evidência rastreável para análise de segurança e auditoria.
- **Critérios de Aceitação:**
  - O log inclui User ID, data/hora UTC e ação tentada.
  - O log é persistido em menos de 1 segundo após o bloqueio.
  - O utilizador bloqueado não recebe confirmação explícita de que o log foi gerado.
- **Impacto da variante:** Sim

---

## Requisitos Não Funcionais (NFRs)

1. **NFR-001 (Segurança):** O sistema deve invalidar a sessão de qualquer utilizador autenticado após **15 minutos de inatividade** estrita, exigindo novo login para continuar no módulo de Intake.
   **Requisitante:** Security Officer
   _(Impacto da variante: Sim)_
2. **NFR-002 (Auditoria):** Os registos de auditoria de segurança devem permanecer disponíveis para consulta durante pelo menos **5 anos**, e **100%** das tentativas não autorizadas de alteração ou eliminação desses registos devem ser rejeitadas e registadas.
   **Requisitante:** System Administrator
   _(Impacto da variante: Sim)_
3. **NFR-003 (Desempenho):** O formulário de Intake e os respetivos dados guardados devem ser apresentados em **<= 2 segundos para 95% dos pedidos** sob carga normal.
   **Requisitante:** Transition Manager
   _(Impacto da variante: Não)_
4. **NFR-004 (Disponibilidade):** O módulo de Intake deve garantir **99.9%** de disponibilidade mensal, excluindo janelas de manutenção planeadas.
   **Requisitante:** System Administrator
   _(Impacto da variante: Não)_
5. **NFR-005 (Usabilidade):** Em **95%** dos erros de validação ou segurança, o sistema deve apresentar a mensagem de erro no mesmo ecrã e junto do campo ou ação bloqueada em até **1 segundo** após a tentativa do utilizador.
   **Requisitante:** Transition Manager
   _(Impacto da variante: Não)_
6. **NFR-006 (Compatibilidade):** Os cenários críticos de autenticação, preenchimento, aprovação e override devem completar com sucesso em **100%** dos testes executados nas duas últimas versões major do Google Chrome e do Microsoft Edge.
   **Requisitante:** System Administrator
   _(Impacto da variante: Não)_
