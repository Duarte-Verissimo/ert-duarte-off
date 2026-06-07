# Requirements Engineering Matrix (REM v1) — Lab 4

## Priority scale used

- **Indispensável:** inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Necessário:** inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Desejável:** facilitador de operação, mas não mandatório; a omissão pode implicar perdas de valor para a solução. `Could Do`
- **Opcional:** fator de ajuste; a omissão não acarreta perdas relevantes do valor global da solução. `Nice to Do`
- **Indesejado:** referência por negação; indica características que a solução não deve ter. `MUST NOT DO`

## Functional Requirements (FR)

### FR-001: Recolher detalhes de infraestrutura e contactos

- **Source requirement:** REQ-001
- **Stakeholder (Requisitante):** Transition Manager
- **Description:** O sistema deve permitir registar e guardar os detalhes de infraestrutura e a matriz de contactos do processo de Intake.
- **Objective (why/result):** Disponibilizar a informação base necessária para análise e decisão inicial.
- **Type & Priority:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Objective + CSF linkage:** OBJ-3 | CSF-3
- **Preconditions:** O utilizador autenticado iniciou um novo Intake ou abriu um Intake em edição autorizada.
- **Postconditions:** Os dados de infraestrutura e contactos ficam associados ao Intake e disponíveis para validação posterior.
- **Acceptance criteria:**
  - O formulário contém campos para infraestrutura e contactos.
  - Os dados guardados permanecem associados ao Intake correto.
  - A ausência desta informação impede a aprovação.
- **Validation method:** Teste funcional / revisão do formulário.
- **Variant impact:** No

### FR-002: Anexar evidência de Disaster Recovery

- **Source requirement:** REQ-002
- **Stakeholder (Requisitante):** Transition Lead
- **Description:** O sistema deve permitir anexar o ficheiro PDF de evidência de DR ao Intake.
- **Objective (why/result):** Garantir prova documental mínima para a decisão de aprovação.
- **Type & Priority:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-3 | CSF-3
- **Preconditions:** Existe um Intake ativo em estado `Draft` ou `Reaberto`.
- **Postconditions:** O ficheiro fica armazenado e associado ao Intake correto.
- **Acceptance criteria:**
  - O utilizador pode anexar um PDF de evidência de DR.
  - O sistema relaciona o ficheiro com o Intake correspondente.
  - Sem anexo válido, a aprovação não pode ser concluída.
- **Validation method:** Teste funcional de upload.
- **Variant impact:** No

### FR-003: Restringir a aprovação do Intake por RBAC

- **Source requirement:** REQ-003
- **Stakeholder (Requisitante):** Security Officer
- **Description:** O sistema deve restringir a ação de `Aprovar Intake` a utilizadores com role `Security Officer` ou `Transition Manager`.
- **Objective (why/result):** Evitar aprovações indevidas por perfis não autorizados.
- **Type & Priority:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-1 | CSF-1
- **Preconditions:** O utilizador tem sessão ativa e o Intake está em estado `Draft`.
- **Postconditions:** O estado passa para `Aprovado` em caso de sucesso; se falhar, o estado mantém-se e a tentativa pode ser registada.
- **Acceptance criteria:**
  - Utilizador sem role correta recebe `Acesso Negado`.
  - Utilizador autorizado consegue aprovar o Intake.
  - Perfis `Read-Only` não podem acionar a aprovação.
- **Validation method:** Teste de integração de autenticação e autorização.
- **Variant impact:** Yes

### FR-004: Bloquear aprovação por informação incompleta

- **Source requirement:** REQ-004
- **Stakeholder (Requisitante):** Transition Manager
- **Description:** O sistema deve impedir a aprovação quando existirem campos obrigatórios vazios ou evidências em falta.
- **Objective (why/result):** Garantir completude e qualidade dos dados antes da aprovação.
- **Type & Priority:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-3 | CSF-3
- **Preconditions:** O utilizador autenticado tenta executar a ação `Aprovar`.
- **Postconditions:** O Intake permanece em `Draft` e os erros são apresentados ao utilizador.
- **Acceptance criteria:**
  - A validação é executada no clique em `Aprovar`.
  - O erro `Evidência de DR em falta` é mostrado quando aplicável.
  - O estado não muda quando a validação falha.
- **Validation method:** Teste funcional de fronteira.
- **Variant impact:** No

### FR-005: Validar a frescura da evidência de DR

- **Source requirement:** REQ-005
- **Stakeholder (Requisitante):** Transition Lead
- **Description:** O sistema deve rejeitar evidência de DR com mais de 12 meses ou com data futura.
- **Objective (why/result):** Evitar aprovação com evidência desatualizada ou inválida.
- **Type & Priority:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Objective + CSF linkage:** OBJ-3 | CSF-3
- **Preconditions:** Existe um anexo de DR e respetiva data a validar.
- **Postconditions:** A evidência fica marcada como válida ou inválida para o processo de aprovação.
- **Acceptance criteria:**
  - Data com mais de 365 dias é rejeitada.
  - Data futura é rejeitada.
  - A mensagem de erro indica que a evidência está fora do prazo.
- **Validation method:** Teste unitário de lógica de datas.
- **Variant impact:** No

### FR-006: Verificar identidade e roles no diretório corporativo

- **Source requirement:** REQ-006
- **Stakeholder (Requisitante):** Security Officer
- **Description:** O sistema deve consultar o Active Directory ou SSO corporativo no login para determinar identidade e permissões.
- **Objective (why/result):** Centralizar segurança e evitar acessos indevidos por contas desatualizadas.
- **Type & Priority:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-1 | CSF-1
- **Preconditions:** O utilizador inicia o processo de autenticação no AMS.
- **Postconditions:** A sessão só é criada se a identidade for válida e a role ficar corretamente atribuída.
- **Acceptance criteria:**
  - Contas desativadas são rejeitadas.
  - A role apresentada na aplicação corresponde ao diretório corporativo.
  - Falhas de identidade impedem ações críticas.
- **Validation method:** Teste de integração SSO.
- **Variant impact:** Yes

### FR-007: Reabrir Intake aprovado com controlo de permissões

- **Source requirement:** REQ-007
- **Stakeholder (Requisitante):** Security Officer
- **Description:** O sistema deve permitir reabrir um Intake aprovado apenas a perfis autorizados.
- **Objective (why/result):** Controlar correções pós-aprovação sem permitir alterações informais.
- **Type & Priority:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Objective + CSF linkage:** OBJ-1 | CSF-1
- **Preconditions:** O Intake está em estado `Aprovado` e o utilizador tem sessão ativa.
- **Postconditions:** O estado muda para `Reaberto` ou a tentativa é bloqueada e registada.
- **Acceptance criteria:**
  - Apenas roles autorizadas conseguem reabrir.
  - O estado passa para `Reaberto` em caso de sucesso.
  - Uma tentativa não autorizada gera bloqueio e log.
- **Validation method:** Teste funcional com perfis de acesso.
- **Variant impact:** Yes

### FR-008: Executar override com reautenticação e justificação

- **Source requirement:** REQ-008
- **Stakeholder (Requisitante):** Security Officer
- **Description:** O sistema deve exigir password e justificação antes de permitir um `Override` em dados aprovados.
- **Objective (why/result):** Acrescentar uma barreira extra de segurança para alterações excecionais.
- **Type & Priority:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Objective + CSF linkage:** OBJ-1, OBJ-2 | CSF-1, CSF-2
- **Preconditions:** O Intake está em estado `Aprovado` ou `Reaberto` e o utilizador tenta executar `Override`.
- **Postconditions:** O override fica autorizado para edição ou a tentativa é abortada e registada.
- **Acceptance criteria:**
  - O `Override` abre modal com password e justificação.
  - A confirmação só é possível com justificação >= 20 caracteres.
  - Password incorreta aborta a ação e regista a tentativa.
- **Validation method:** Teste funcional de UI / segurança.
- **Variant impact:** Yes

### FR-009: Registar tentativas de ações não autorizadas

- **Source requirement:** REQ-009
- **Stakeholder (Requisitante):** System Administrator
- **Description:** O sistema deve criar automaticamente um log para cada tentativa não autorizada de aprovação, reabertura ou override.
- **Objective (why/result):** Disponibilizar evidência para investigação, auditoria e compliance.
- **Type & Priority:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-2 | CSF-2
- **Preconditions:** Ocorreu uma tentativa de ação crítica e a validação de permissões retornou `Acesso Negado`.
- **Postconditions:** Um novo registo é inserido na tabela de logs com os metadados da tentativa.
- **Acceptance criteria:**
  - O log inclui User ID, ação tentada e timestamp UTC.
  - O log é persistido em menos de 1 segundo.
  - O utilizador bloqueado não recebe feedback explícito sobre a geração do log.
- **Validation method:** Teste de base de dados / integração.
- **Variant impact:** Yes

---

## Non-Functional Requirements (NFR)

### NFR-001: Timeout de sessão inativa

- **Stakeholder (Requisitante):** Security Officer
- **Description:** O sistema deve invalidar a sessão após 15 minutos de inatividade estrita.
- **Objective (why/result):** Reduzir o risco de uso indevido de sessões abandonadas.
- **Type & Priority:** NFR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-1 | CSF-1
- **Acceptance criteria:**
  - Ao minuto 15:01 sem atividade, o utilizador é reenviado para login.
  - O botão `retroceder` não restaura a sessão válida.
- **Validation method:** Teste automatizado de UI / sessão.
- **Variant impact:** Yes

### NFR-002: Retenção, integridade e consulta dos logs

- **Stakeholder (Requisitante):** System Administrator
- **Description:** Os registos de auditoria de segurança devem permanecer disponíveis para consulta durante pelo menos 5 anos, e qualquer tentativa não autorizada de alteração ou eliminação deve ser rejeitada e registada.
- **Objective (why/result):** Cumprir retenção legal e proteger a integridade da auditoria.
- **Type & Priority:** NFR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Objective + CSF linkage:** OBJ-2 | CSF-2
- **Acceptance criteria:**
  - Registos com 4.9 anos continuam pesquisáveis.
  - 100% das tentativas não autorizadas de alteração ou eliminação dos logs são rejeitadas.
  - As tentativas rejeitadas ficam também registadas para auditoria.
- **Validation method:** Teste de infraestrutura / análise de privilégios de base de dados.
- **Variant impact:** Yes
