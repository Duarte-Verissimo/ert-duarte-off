# Matriz de Engenharia de Requisitos (REM v1) — Lab 4

## Escala de prioridade usada

- **Indispensável:** inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Necessário:** inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Desejável:** facilitador de operação, mas não mandatório; a omissão pode implicar perdas de valor para a solução. `Could Do`
- **Opcional:** fator de ajuste; a omissão não acarreta perdas relevantes do valor global da solução. `Nice to Do`
- **Indesejado:** referência por negação; indica características que a solução não deve ter. `MUST NOT DO`

## Requisitos Funcionais (FR)

### FR-001: Recolher detalhes de infraestrutura e contactos

- **Requisito fonte:** REQ-001
- **Stakeholder (Requisitante):** Transition Manager
- **Descrição:** O sistema deve permitir registar e guardar os detalhes de infraestrutura e a matriz de contactos do processo de Intake.
- **Objetivo (porquê/resultado):** Disponibilizar a informação base necessária para análise e decisão inicial.
- **Tipo e prioridade:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Ligação Objetivo + CSF:** OBJ-3 | CSF-3
- **Pré-condições:** O utilizador autenticado iniciou um novo Intake ou abriu um Intake em edição autorizada.
- **Pós-condições:** Os dados de infraestrutura e contactos ficam associados ao Intake e disponíveis para validação posterior.
- **Critérios de aceitação:**
  - O formulário contém campos para infraestrutura e contactos.
  - Os dados guardados permanecem associados ao Intake correto.
  - A ausência desta informação impede a aprovação.
- **Método de validação:** Teste funcional / revisão do formulário.
- **Impacto da variante:** Não

### FR-002: Anexar evidência de Disaster Recovery

- **Requisito fonte:** REQ-002
- **Stakeholder (Requisitante):** Transition Lead
- **Descrição:** O sistema deve permitir anexar o ficheiro PDF de evidência de DR ao Intake.
- **Objetivo (porquê/resultado):** Garantir prova documental mínima para a decisão de aprovação.
- **Tipo e prioridade:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-3 | CSF-3
- **Pré-condições:** Existe um Intake ativo em estado `Draft` ou `Reaberto`.
- **Pós-condições:** O ficheiro fica armazenado e associado ao Intake correto.
- **Critérios de aceitação:**
  - O utilizador pode anexar um PDF de evidência de DR.
  - O sistema relaciona o ficheiro com o Intake correspondente.
  - Sem anexo válido, a aprovação não pode ser concluída.
- **Método de validação:** Teste funcional de upload.
- **Impacto da variante:** Não

### FR-003: Restringir a aprovação do Intake por RBAC

- **Requisito fonte:** REQ-003
- **Stakeholder (Requisitante):** Security Officer
- **Descrição:** O sistema deve restringir a ação de `Aprovar Intake` a utilizadores com role `Security Officer` ou `Transition Manager`.
- **Objetivo (porquê/resultado):** Evitar aprovações indevidas por perfis não autorizados.
- **Tipo e prioridade:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-1 | CSF-1
- **Pré-condições:** O utilizador tem sessão ativa e o Intake está em estado `Draft`.
- **Pós-condições:** O estado passa para `Aprovado` em caso de sucesso; se falhar, o estado mantém-se e a tentativa pode ser registada.
- **Critérios de aceitação:**
  - Utilizador sem role correta recebe `Acesso Negado`.
  - Utilizador autorizado consegue aprovar o Intake.
  - Perfis `Read-Only` não podem acionar a aprovação.
- **Método de validação:** Teste de integração de autenticação e autorização.
- **Impacto da variante:** Sim

### FR-004: Bloquear aprovação por informação incompleta

- **Requisito fonte:** REQ-004
- **Stakeholder (Requisitante):** Transition Manager
- **Descrição:** O sistema deve impedir a aprovação quando existirem campos obrigatórios vazios ou evidências em falta.
- **Objetivo (porquê/resultado):** Garantir completude e qualidade dos dados antes da aprovação.
- **Tipo e prioridade:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-3 | CSF-3
- **Pré-condições:** O utilizador autenticado tenta executar a ação `Aprovar`.
- **Pós-condições:** O Intake permanece em `Draft` e os erros são apresentados ao utilizador.
- **Critérios de aceitação:**
  - A validação é executada no clique em `Aprovar`.
  - O erro `Evidência de DR em falta` é mostrado quando aplicável.
  - O estado não muda quando a validação falha.
- **Método de validação:** Teste funcional de fronteira.
- **Impacto da variante:** Não

### FR-005: Validar a frescura da evidência de DR

- **Requisito fonte:** REQ-005
- **Stakeholder (Requisitante):** Transition Lead
- **Descrição:** O sistema deve rejeitar evidência de DR com mais de 12 meses ou com data futura.
- **Objetivo (porquê/resultado):** Evitar aprovação com evidência desatualizada ou inválida.
- **Tipo e prioridade:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Ligação Objetivo + CSF:** OBJ-3 | CSF-3
- **Pré-condições:** Existe um anexo de DR e respetiva data a validar.
- **Pós-condições:** A evidência fica marcada como válida ou inválida para o processo de aprovação.
- **Critérios de aceitação:**
  - Data com mais de 365 dias é rejeitada.
  - Data futura é rejeitada.
  - A mensagem de erro indica que a evidência está fora do prazo.
- **Método de validação:** Teste unitário de lógica de datas.
- **Impacto da variante:** Não

### FR-006: Verificar identidade e roles no diretório corporativo

- **Requisito fonte:** REQ-006
- **Stakeholder (Requisitante):** Security Officer
- **Descrição:** O sistema deve consultar o Active Directory ou SSO corporativo no login para determinar identidade e permissões.
- **Objetivo (porquê/resultado):** Centralizar segurança e evitar acessos indevidos por contas desatualizadas.
- **Tipo e prioridade:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-1 | CSF-1
- **Pré-condições:** O utilizador inicia o processo de autenticação no AMS.
- **Pós-condições:** A sessão só é criada se a identidade for válida e a role ficar corretamente atribuída.
- **Critérios de aceitação:**
  - Contas desativadas são rejeitadas.
  - A role apresentada na aplicação corresponde ao diretório corporativo.
  - Falhas de identidade impedem ações críticas.
- **Método de validação:** Teste de integração SSO.
- **Impacto da variante:** Sim

### FR-007: Reabrir Intake aprovado com controlo de permissões

- **Requisito fonte:** REQ-007
- **Stakeholder (Requisitante):** Security Officer
- **Descrição:** O sistema deve permitir reabrir um Intake aprovado apenas a perfis autorizados.
- **Objetivo (porquê/resultado):** Controlar correções pós-aprovação sem permitir alterações informais.
- **Tipo e prioridade:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Ligação Objetivo + CSF:** OBJ-1 | CSF-1
- **Pré-condições:** O Intake está em estado `Aprovado` e o utilizador tem sessão ativa.
- **Pós-condições:** O estado muda para `Reaberto` ou a tentativa é bloqueada e registada.
- **Critérios de aceitação:**
  - Apenas roles autorizadas conseguem reabrir.
  - O estado passa para `Reaberto` em caso de sucesso.
  - Uma tentativa não autorizada gera bloqueio e log.
- **Método de validação:** Teste funcional com perfis de acesso.
- **Impacto da variante:** Sim

### FR-008: Executar override com reautenticação e justificação

- **Requisito fonte:** REQ-008
- **Stakeholder (Requisitante):** Security Officer
- **Descrição:** O sistema deve exigir password e justificação antes de permitir um `Override` em dados aprovados.
- **Objetivo (porquê/resultado):** Acrescentar uma barreira extra de segurança para alterações excecionais.
- **Tipo e prioridade:** FR | **Necessário** — inclusão importante; a omissão representa perdas de valor para a solução, embora não críticas. `Should Do`
- **Ligação Objetivo + CSF:** OBJ-1, OBJ-2 | CSF-1, CSF-2
- **Pré-condições:** O Intake está em estado `Aprovado` ou `Reaberto` e o utilizador tenta executar `Override`.
- **Pós-condições:** O override fica autorizado para edição ou a tentativa é abortada e registada.
- **Critérios de aceitação:**
  - O `Override` abre modal com password e justificação.
  - A confirmação só é possível com justificação >= 20 caracteres.
  - Password incorreta aborta a ação e regista a tentativa.
- **Método de validação:** Teste funcional de UI / segurança.
- **Impacto da variante:** Sim

### FR-009: Registar tentativas de ações não autorizadas

- **Requisito fonte:** REQ-009
- **Stakeholder (Requisitante):** System Administrator
- **Descrição:** O sistema deve criar automaticamente um log para cada tentativa não autorizada de aprovação, reabertura ou override.
- **Objetivo (porquê/resultado):** Disponibilizar evidência para investigação, auditoria e compliance.
- **Tipo e prioridade:** FR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-2 | CSF-2
- **Pré-condições:** Ocorreu uma tentativa de ação crítica e a validação de permissões retornou `Acesso Negado`.
- **Pós-condições:** Um novo registo é inserido na tabela de logs com os metadados da tentativa.
- **Critérios de aceitação:**
  - O log inclui User ID, ação tentada e timestamp UTC.
  - O log é persistido em menos de 1 segundo.
  - O utilizador bloqueado não recebe feedback explícito sobre a geração do log.
- **Método de validação:** Teste de base de dados / integração.
- **Impacto da variante:** Sim

---

## Requisitos Não Funcionais (NFR)

### NFR-001: Timeout de sessão inativa

- **Stakeholder (Requisitante):** Security Officer
- **Descrição:** O sistema deve invalidar a sessão após 15 minutos de inatividade estrita.
- **Objetivo (porquê/resultado):** Reduzir o risco de uso indevido de sessões abandonadas.
- **Tipo e prioridade:** NFR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-1 | CSF-1
- **Critérios de aceitação:**
  - Ao minuto 15:01 sem atividade, o utilizador é reenviado para login.
  - O botão `retroceder` não restaura a sessão válida.
- **Método de validação:** Teste automatizado de UI / sessão.
- **Impacto da variante:** Sim

### NFR-002: Retenção, integridade e consulta dos logs

- **Stakeholder (Requisitante):** System Administrator
- **Descrição:** Os registos de auditoria de segurança devem permanecer disponíveis para consulta durante pelo menos 5 anos, e qualquer tentativa não autorizada de alteração ou eliminação deve ser rejeitada e registada.
- **Objetivo (porquê/resultado):** Cumprir retenção legal e proteger a integridade da auditoria.
- **Tipo e prioridade:** NFR | **Indispensável** — inclusão imprescindível; a omissão poderá representar perda de valor relevante para a solução e/ou incumprimento regulamentar ou normativo. `MUST DO`
- **Ligação Objetivo + CSF:** OBJ-2 | CSF-2
- **Critérios de aceitação:**
  - Registos com 4.9 anos continuam pesquisáveis.
  - 100% das tentativas não autorizadas de alteração ou eliminação dos logs são rejeitadas.
  - As tentativas rejeitadas ficam também registadas para auditoria.
- **Método de validação:** Teste de infraestrutura / análise de privilégios de base de dados.
- **Impacto da variante:** Sim
