## FR-001 — REQ-001 — Recolher detalhes de infraestrutura e contactos

- **Requisito #:** `FR-001`
- **Source requirement:** `REQ-001`
- **Requisitante:** `Transition Manager`
- **Grupo/Classificador:** `EPIC-01 / FEAT-03`
- **Tipo e prioridade:** `FR | Necessário`
- **Objetivo + CSF linkage:** `OBJ-3 | CSF-3`
- **Variant impact:** `No`

### Descrição

Como `Transition Manager`, pretendo que o sistema permita registar e guardar, no processo de Intake, os detalhes de infraestrutura e a matriz de contactos operacionais e de escalamento, para garantir que a análise inicial e a futura decisão de aprovação assentam numa base mínima de informação completa e reutilizável.

### Objetivo

Disponibilizar a informação base necessária para análise inicial, coordenação operacional e progressão controlada do Intake, evitando que o processo avance sem dados essenciais de infraestrutura e contactos.

### Test case

Teste funcional do formulário de Intake, validando criação, gravação e recuperação dos dados de infraestrutura e contactos associados ao Intake correto.

### Pressupostos

- O utilizador está autenticado.
- Existe um Intake novo ou em edição autorizada.
- O utilizador possui permissão para criar ou editar os dados iniciais do Intake.

### Processo

| a   | Ação                                                   | Actores            | Regra                                                               | Domínio                | válido |
| --- | ------------------------------------------------------ | ------------------ | ------------------------------------------------------------------- | ---------------------- | ------ |
| 1   | Abrir um Intake novo ou existente em edição autorizada | Transition Manager | O utilizador tem sessão válida e acesso ao Intake                   | Intake & Discovery     | Sim    |
| 2   | Introduzir detalhes de infraestrutura                  | Transition Manager | Os campos mínimos do formulário têm de estar disponíveis            | Dados operacionais     | Sim    |
| 3   | Introduzir contactos operacionais e de escalamento     | Transition Manager | Cada contacto deve ficar associado ao Intake correto                | Dados operacionais     | Sim    |
| 4   | Guardar a informação introduzida                       | Sistema            | A gravação só é concluída se o Intake estiver acessível para edição | Persistência do Intake | Sim    |

### Pós-condições

Os dados de infraestrutura e contactos ficam associados ao Intake e disponíveis para validação posterior. A ausência desta informação impede a aprovação em fases seguintes.

### Critérios de aceitação

- O formulário contém campos para infraestrutura e contactos.
- Os dados guardados permanecem associados ao Intake correto.
- Um Intake sem esta informação não pode avançar para aprovação.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                                                   |
| --------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| `REQ-004` | `Sucessor`      | A validação de completude depende da existência prévia desta informação.                                      |
| `REQ-002` | `Paralelo`      | A recolha de dados e a anexação de evidência podem ser realizadas na mesma fase sem dependência direta forte. |

### Execução

- `descrito:` Sim
- `validado:` `[preencher]`
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-002 — REQ-002 — Anexar evidência de Disaster Recovery

- **Requisito #:** `FR-002`
- **Source requirement:** `REQ-002`
- **Requisitante:** `Transition Lead`
- **Grupo/Classificador:** `EPIC-01 / FEAT-04`
- **Tipo e prioridade:** `FR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-3 | CSF-3`
- **Variant impact:** `No`

### Descrição

Como `Transition Lead`, pretendo que o sistema permita anexar a evidência obrigatória de `Disaster Recovery` ao Intake, para garantir que existe prova documental mínima antes de qualquer decisão de aprovação da transição.

### Objetivo

Garantir que cada Intake reúne suporte documental mínimo verificável, reduzindo o risco de aprovação sem evidência de capacidade de recuperação.

### Test case

Teste funcional de upload ou anexação de PDF, verificando associação do ficheiro ao Intake correto e bloqueio da progressão sem evidência válida.

### Pressupostos

- Existe um Intake ativo em estado `Draft` ou `Reaberto`.
- O utilizador está autenticado e tem acesso ao Intake.
- O sistema permite anexar ou referenciar um documento de evidência.

### Processo

| a   | Ação                                  | Actores         | Regra                                                    | Domínio                 | válido |
| --- | ------------------------------------- | --------------- | -------------------------------------------------------- | ----------------------- | ------ |
| 1   | Abrir o Intake ativo                  | Transition Lead | O Intake está acessível em `Draft` ou `Reaberto`         | Intake & Discovery      | Sim    |
| 2   | Selecionar a ação de anexar evidência | Transition Lead | O módulo de evidência está disponível                    | Evidência documental    | Sim    |
| 3   | Escolher ou carregar o ficheiro PDF   | Transition Lead | O ficheiro tem de ser aceite pelo sistema como evidência | Disaster Recovery       | Sim    |
| 4   | Confirmar a associação ao Intake      | Sistema         | O ficheiro fica associado ao Intake correto              | Persistência documental | Sim    |

### Pós-condições

O ficheiro de evidência fica armazenado e associado ao Intake correto. Sem evidência válida, a aprovação não pode ser concluída.

### Critérios de aceitação

- O utilizador pode anexar um PDF de evidência de DR.
- O sistema relaciona o ficheiro com o Intake correspondente.
- Sem anexo válido, a aprovação não pode ser concluída.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                              |
| --------- | --------------- | ------------------------------------------------------------------------ |
| `REQ-005` | `Complementar`  | A evidência anexada precisa de validação temporal para ser aceite.       |
| `REQ-004` | `Sucessor`      | A falta de evidência afeta a validação de completude antes da aprovação. |

### Execução

- `descrito:` Sim
- `validado:` `[preencher]`
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-003 — REQ-003 — Restringir a aprovação do Intake por RBAC

- **Requisito #:** `FR-003`
- **Source requirement:** `REQ-003`
- **Requisitante:** `Security Officer`
- **Grupo/Classificador:** `EPIC-01 / FEAT-02 + FEAT-07`
- **Tipo e prioridade:** `FR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-1 | CSF-1`
- **Variant impact:** `Yes`

### Descrição

Como `Security Officer`, pretendo que a ação de `Aprovar Intake` seja restrita a utilizadores com role autorizada, nomeadamente `Security Officer` ou `Transition Manager`, para impedir aprovações indevidas por perfis sem competência formal para validar e fechar esta fase do processo.

### Objetivo

Evitar que a passagem do Intake para a fase seguinte seja executada por perfis não autorizados, reforçando o controlo de segurança e governação do processo.

### Test case

Teste de integração de autenticação e autorização, validando acesso autorizado, bloqueio com `Acesso Negado` e ausência de ação para perfis apenas de leitura.

### Pressupostos

O utilizador tem sessão ativa.
O Intake está em estado `Draft`.
O sistema conhece a role atual do utilizador.

### Processo

| a   | Ação                           | Actores                               | Regra                                                             | Domínio            | válido |
| --- | ------------------------------ | ------------------------------------- | ----------------------------------------------------------------- | ------------------ | ------ |
| 1   | Abrir um Intake em `Draft`     | Transition Manager / Security Officer | O utilizador tem sessão válida                                    | Intake & Discovery | Sim    |
| 2   | Selecionar a ação `Aprovar`    | Utilizador autenticado                | A ação só pode existir para perfis elegíveis                      | Controlo de acesso | Sim    |
| 3   | Verificar a role atual         | Sistema                               | Apenas `Security Officer` e `Transition Manager` podem prosseguir | RBAC               | Sim    |
| 4   | Permitir aprovação ou bloquear | Sistema                               | Se a role não for autorizada, apresentar `Acesso Negado`          | Segurança          | Sim    |

### Pós-condições

Se a role for autorizada e as restantes validações passarem, o Intake pode avançar para `Aprovado`. Se a role não for autorizada, a ação é bloqueada e o estado mantém-se.

### Critérios de aceitação

1)Utilizador sem role correta recebe `Acesso Negado`.
2)Utilizador autorizado consegue aprovar o Intake.
3)Perfis `Read-Only` não podem acionar a aprovação.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                      |
| --------- | --------------- | ---------------------------------------------------------------- |
| `REQ-006` | `Antecessor`    | A verificação de identidade e roles suporta o mecanismo de RBAC. |
| `REQ-004` | `Complementar`  | A aprovação também depende da completude da informação.          |
| `REQ-005` | `Complementar`  | A aprovação também depende da validade temporal da evidência.    |
| `REQ-009` | `Sucessor`      | Uma tentativa não autorizada deve ser registada em log.          |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-004 — REQ-004 — Bloquear aprovação por informação incompleta

- **Requisito #:** `FR-004`
- **Source requirement:** `REQ-004`
- **Requisitante:** `Transition Manager`
- **Grupo/Classificador:** `EPIC-01 / FEAT-05`
- **Tipo e prioridade:** `FR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-3 | CSF-3`
- **Variant impact:** `No`

### Descrição

Como `Transition Manager`, pretendo que o sistema bloqueie a aprovação do Intake sempre que existam campos obrigatórios vazios ou evidências em falta, para garantir que a decisão de aprovação não é tomada com informação incompleta.

### Objetivo

Garantir completude e qualidade mínimas do Intake antes da aprovação, evitando progressão do processo com dados essenciais em falta.

### Test case

Teste funcional de fronteira, validando bloqueio da aprovação quando faltam campos obrigatórios ou evidência de DR.

### Pressupostos

- O utilizador está autenticado.
- Existe um Intake em `Draft`.
- Foi iniciada a ação `Aprovar`.

### Processo

| a   | Ação                                       | Actores            | Regra                                                  | Domínio              | válido |
| --- | ------------------------------------------ | ------------------ | ------------------------------------------------------ | -------------------- | ------ |
| 1   | Selecionar `Aprovar` num Intake em `Draft` | Transition Manager | O Intake está acessível para aprovação                 | Intake & Discovery   | Sim    |
| 2   | Validar campos obrigatórios                | Sistema            | Todos os campos mínimos têm de estar preenchidos       | Validação funcional  | Sim    |
| 3   | Verificar existência da evidência de DR    | Sistema            | Sem evidência obrigatória não há progressão            | Evidência documental | Sim    |
| 4   | Bloquear ou permitir continuação           | Sistema            | Em caso de falha, manter estado `Draft` e mostrar erro | Validação funcional  | Sim    |

### Pós-condições

O Intake permanece em `Draft` quando a validação falha, e os erros são apresentados ao utilizador para correção.

### Critérios de aceitação

- A validação é executada no clique em `Aprovar`.
- O erro `Evidência de DR em falta` é mostrado quando aplicável.
- O estado não muda quando a validação falha.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                           |
| --------- | --------------- | ------------------------------------------------------------------------------------- |
| `REQ-001` | `Antecessor`    | A validação depende de dados de infraestrutura e contactos previamente recolhidos.    |
| `REQ-002` | `Antecessor`    | A validação depende da existência de evidência anexada.                               |
| `REQ-005` | `Complementar`  | A completude e a validade temporal da evidência atuam em conjunto antes da aprovação. |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-005 — REQ-005: Verificar a validade temporal da evidência de Disaster Recovery

- **Requisito #:** `FR-005`
- **Source requirement:** `REQ-005`
- **Requisitante:** `Transition Lead`
- **Grupo/Classificador:** `EPIC-01 / FEAT-06`
- **Tipo e prioridade:** `FR | Necessário`
- **Objetivo + CSF linkage:** `OBJ-3 | CSF-3`
- **Variant impact:** `No`

### Descrição

Como `Transition Lead`, pretendo que o sistema valide a data da evidência de `Disaster Recovery` e rejeite documentos demasiado antigos ou com data futura, para evitar aprovações baseadas em prova documental desatualizada ou inválida.

### Objetivo

Assegurar que a evidência de `Disaster Recovery` usada no Intake está temporalmente válida e reflete um estado recente e credível da capacidade de recuperação.

### Test case

Teste unitário ou funcional de lógica de datas, validando rejeição de evidência com mais de 365 dias ou com data futura.

### Pressupostos

- Existe uma evidência de DR anexada.
- A evidência possui uma data a validar.
- O Intake está em fluxo de validação ou pré-aprovação.

### Processo

| a   | Ação                                       | Actores | Regra                                          | Domínio            | válido |
| --- | ------------------------------------------ | ------- | ---------------------------------------------- | ------------------ | ------ |
| 1   | Ler a data associada à evidência de DR     | Sistema | A evidência já foi anexada ao Intake           | Disaster Recovery  | Sim    |
| 2   | Comparar a data com a data atual           | Sistema | Evidência com mais de 365 dias é inválida      | Validação temporal | Sim    |
| 3   | Verificar se a data é futura               | Sistema | Datas futuras são inválidas                    | Validação temporal | Sim    |
| 4   | Marcar a evidência como válida ou inválida | Sistema | Em caso de erro, apresentar mensagem explícita | Validação temporal | Sim    |

### Pós-condições

A evidência fica marcada como válida ou inválida para o processo de aprovação. Evidência inválida impede continuação normal do processo.

### Critérios de aceitação

- Data com mais de 365 dias é rejeitada.
- Data futura é rejeitada.
- A mensagem de erro indica que a evidência está fora do prazo.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                   |
| --------- | --------------- | ----------------------------------------------------------------------------- |
| `REQ-002` | `Antecessor`    | A validação temporal pressupõe que a evidência já foi anexada.                |
| `REQ-004` | `Complementar`  | A validade temporal complementa a validação de completude antes da aprovação. |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-006 — REQ-006 — Verificar identidade e roles no diretório corporativo

- **Requisito #:** `FR-006`
- **Source requirement:** `REQ-006`
- **Requisitante:** `Security Officer`
- **Grupo/Classificador:** `EPIC-01 / FEAT-01 + FEAT-02`
- **Tipo e prioridade:** `FR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-1 | CSF-1`
- **Variant impact:** `Yes`

### Descrição

Como `Security Officer`, pretendo que o sistema verifique a identidade do utilizador e a respetiva role no diretório corporativo no momento do login, para garantir que apenas contas válidas recebem permissões adequadas no módulo de Intake.

### Objetivo

Centralizar a gestão de acessos e impedir que contas desativadas, órfãs ou sem role válida executem ações críticas no sistema.

### Test case

Teste de integração SSO/AD, validando rejeição de contas desativadas e atribuição correta de role à sessão autenticada.

### Pressupostos

- O utilizador iniciou o processo de autenticação.
- O sistema consegue consultar o serviço de identidade corporativo.
- Existe mapeamento entre grupos/roles do diretório e roles da aplicação.

### Processo

| a   | Ação                                           | Actores                          | Regra                                              | Domínio                | válido |
| --- | ---------------------------------------------- | -------------------------------- | -------------------------------------------------- | ---------------------- | ------ |
| 1   | Iniciar autenticação no AMS                    | Utilizador autenticado / Sistema | O serviço de identidade está acessível             | Autenticação           | Sim    |
| 2   | Validar a identidade no diretório corporativo  | Sistema                          | Contas inválidas ou desativadas são rejeitadas     | SSO / Active Directory | Sim    |
| 3   | Obter a role aplicável                         | Sistema                          | A role deve corresponder ao mapeamento corporativo | RBAC                   | Sim    |
| 4   | Criar sessão apenas se a identidade for válida | Sistema                          | Sem identidade válida não há sessão nem permissões | Segurança              | Sim    |

### Pós-condições

A sessão só é criada se a identidade for válida e a role ficar corretamente atribuída. Falhas de identidade impedem ações críticas.

### Critérios de aceitação

- Contas desativadas são rejeitadas.
- A role apresentada na aplicação corresponde ao diretório corporativo.
- Falhas de identidade impedem ações críticas.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                             |
| --------- | --------------- | ----------------------------------------------------------------------- |
| `REQ-003` | `Sucessor`      | O controlo de aprovação por RBAC depende da role atribuída no login.    |
| `REQ-007` | `Sucessor`      | A reabertura com controlo de permissões depende da mesma base de roles. |
| `REQ-008` | `Sucessor`      | O override seguro depende da identidade e role válidas.                 |

### Execução

- `descrito:` Sim
- `validado:` `[preencher]`
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-007 — REQ-007 — Reabrir Intake aprovado com controlo de permissões

- **Requisito #:** `FR-007`
- **Source requirement:** `REQ-007`
- **Requisitante:** `Security Officer`
- **Grupo/Classificador:** `EPIC-01 / FEAT-08`
- **Tipo e prioridade:** `FR | Necessário`
- **Objetivo + CSF linkage:** `OBJ-1 | CSF-1`
- **Variant impact:** `Yes`

### Descrição

Como `Security Officer`, pretendo que o sistema permita reabrir um Intake previamente aprovado apenas a utilizadores autorizados, para assegurar que correções pós-aprovação são controladas, rastreáveis e não resultam de alterações informais.

### Objetivo

Controlar correções pós-aprovação, preservando a rastreabilidade do processo e evitando alterações não autorizadas a Intakes já aprovados.

### Test case

Teste funcional com perfis de acesso, validando reabertura por perfis autorizados e bloqueio com registo de tentativa para perfis não autorizados.

### Pressupostos

- O Intake está em estado `Aprovado`.
- O utilizador tem sessão ativa.
- O sistema conhece a role atual do utilizador.

### Processo

| a   | Ação                                         | Actores          | Regra                                                         | Domínio              | válido |
| --- | -------------------------------------------- | ---------------- | ------------------------------------------------------------- | -------------------- | ------ |
| 1   | Consultar um Intake em `Aprovado`            | Security Officer | O Intake está acessível                                       | Intake & Discovery   | Sim    |
| 2   | Solicitar a reabertura                       | Security Officer | A ação só pode ser concluída por perfis autorizados           | RBAC                 | Sim    |
| 3   | Verificar a role atual                       | Sistema          | Perfis não autorizados são bloqueados                         | Segurança            | Sim    |
| 4   | Alterar o estado para `Reaberto` ou bloquear | Sistema          | Se autorizado, o estado muda; se não, a tentativa é registada | Controlo de processo | Sim    |

### Pós-condições

O estado muda para `Reaberto` em caso de sucesso; se a role não for autorizada, o estado mantém-se e a tentativa é bloqueada e registada.

### Critérios de aceitação

- Apenas roles autorizadas conseguem reabrir.
- O estado passa para `Reaberto` em caso de sucesso.
- Uma tentativa não autorizada gera bloqueio e log.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                   |
| --------- | --------------- | ----------------------------------------------------------------------------- |
| `REQ-006` | `Antecessor`    | A verificação de roles sustenta o controlo de reabertura.                     |
| `REQ-009` | `Sucessor`      | A tentativa não autorizada deve gerar log.                                    |
| `REQ-008` | `Complementar`  | A reabertura e o override são mecanismos distintos de correção pós-aprovação. |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-008 — REQ-008 — Executar override com reautenticação e justificação

- **Requisito #:** `FR-008`
- **Source requirement:** `REQ-008`
- **Requisitante:** `Security Officer`
- **Grupo/Classificador:** `EPIC-01 / FEAT-09`
- **Tipo e prioridade:** `FR | Necessário`
- **Objetivo + CSF linkage:** `OBJ-1, OBJ-2 | CSF-1, CSF-2`
- **Variant impact:** `Yes`

### Descrição

Como `Security Officer`, pretendo que o sistema exija reautenticação e uma justificação explícita antes de permitir um `Override` sobre dados aprovados, para acrescentar uma barreira extra de segurança e auditoria em alterações excecionais.

### Objetivo

Reduzir o risco de alteração indevida de dados aprovados e garantir que cada intervenção excecional fica associada a identidade confirmada e motivação registada.

### Test case

Teste funcional de UI e segurança, validando modal de override, bloqueio por password incorreta e exigência de justificação mínima.

### Pressupostos

- O Intake está em estado `Aprovado` ou `Reaberto`.
- O utilizador está autenticado.
- O perfil possui acesso potencial à ação de `Override`.

### Processo

| a   | Ação                                                 | Actores          | Regra                                                | Domínio               | válido |
| --- | ---------------------------------------------------- | ---------------- | ---------------------------------------------------- | --------------------- | ------ |
| 1   | Abrir um Intake que necessita de correção excecional | Security Officer | O Intake está em estado elegível                     | Intake & Discovery    | Sim    |
| 2   | Selecionar a ação `Override`                         | Security Officer | A ação é exposta apenas ao perfil elegível           | Segurança             | Sim    |
| 3   | Introduzir password e justificação                   | Security Officer | A justificação tem de cumprir o mínimo definido      | Reautenticação        | Sim    |
| 4   | Reautenticar e autorizar ou bloquear                 | Sistema          | Password incorreta aborta a ação e regista tentativa | Segurança e auditoria | Sim    |

### Pós-condições

O override fica autorizado para edição ou a tentativa é abortada e registada, preservando os dados aprovados sem alterações indevidas.

### Critérios de aceitação

- O `Override` abre modal com password e justificação.
- A confirmação só é possível com justificação >= 20 caracteres.
- Password incorreta aborta a ação e regista a tentativa.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                   |
| --------- | --------------- | ----------------------------------------------------------------------------- |
| `REQ-006` | `Antecessor`    | A ação depende de identidade e role válidas.                                  |
| `REQ-009` | `Sucessor`      | As tentativas inválidas devem ser registadas.                                 |
| `REQ-007` | `Complementar`  | Ambas as ações tratam correções pós-aprovação, mas por mecanismos diferentes. |

### Execução

- `descrito:` Sim
- `validado:` `[preencher]`
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## FR-009 — REQ-009 — Registar tentativas de ações não autorizadas

- **Requisito #:** `FR-009`
- **Source requirement:** `REQ-009`
- **Requisitante:** `System Administrator`
- **Grupo/Classificador:** `EPIC-01 / FEAT-10`
- **Tipo e prioridade:** `FR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-2 | CSF-2`
- **Variant impact:** `Yes`

### Descrição

Como `System Administrator`, pretendo que o sistema crie automaticamente um registo de auditoria sempre que ocorrer uma tentativa não autorizada de aprovação, reabertura ou override, para manter evidência rastreável de segurança e suportar investigação e compliance.

### Objetivo

Disponibilizar um rasto de auditoria fiável sobre tentativas não autorizadas, permitindo investigação, monitorização e resposta a incidentes.

### Test case

Teste de base de dados ou integração, validando criação automática do log com identificador do utilizador, ação tentada e timestamp UTC.

### Pressupostos

- Ocorreu uma tentativa de ação crítica.
- A verificação de permissões resultou em `Acesso Negado`.
- O mecanismo de logging está ativo.

### Processo

| a   | Ação                                        | Actores                   | Regra                                                                | Domínio               | válido |
| --- | ------------------------------------------- | ------------------------- | -------------------------------------------------------------------- | --------------------- | ------ |
| 1   | Tentar executar ação crítica sem permissão  | Utilizador não autorizado | A ação alvo é aprovação, reabertura ou override                      | Segurança             | Sim    |
| 2   | Detetar falha de permissão                  | Sistema                   | A tentativa deve ser bloqueada                                       | RBAC                  | Sim    |
| 3   | Criar registo de auditoria                  | Sistema                   | O log deve incluir utilizador, ação e timestamp UTC                  | Auditoria             | Sim    |
| 4   | Concluir o bloqueio sem feedback de logging | Sistema                   | O utilizador não recebe confirmação explícita sobre a criação do log | Segurança e auditoria | Sim    |

### Pós-condições

Um novo registo é inserido na estrutura de logs com os metadados da tentativa não autorizada.

### Critérios de aceitação

- O log inclui User ID, ação tentada e timestamp UTC.
- O log é persistido em menos de 1 segundo.
- O utilizador bloqueado não recebe feedback explícito sobre a geração do log.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                              |
| --------- | --------------- | ------------------------------------------------------------------------ |
| `REQ-003` | `Antecessor`    | O bloqueio de aprovação indevida pode originar este log.                 |
| `REQ-007` | `Antecessor`    | O bloqueio de reabertura indevida pode originar este log.                |
| `REQ-008` | `Antecessor`    | O bloqueio de override indevido pode originar este log.                  |
| `NFR-002` | `Complementar`  | A retenção e integridade dos logs depende da existência destes registos. |

### Execução

- `descrito:` Sim
- `validado:` `[preencher]`
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## NFR-001 — Timeout de sessão inativa

- **Requisito #:** `NFR-001`
- **Requisitante:** `Security Officer`
- **Grupo/Classificador:** `EPIC-01 / FEAT-10`
- **Tipo e prioridade:** `NFR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-1 | CSF-1`
- **Variant impact:** `Yes`

### Descrição

Como `Security Officer`, pretendo que o sistema invalide automaticamente sessões inativas após 15 minutos, para reduzir o risco de uso indevido de sessões abandonadas em operações sensíveis do módulo de Intake.

### Objetivo

Reduzir a exposição a acessos indevidos por sessões abertas e inativas, forçando nova autenticação após o limiar máximo definido.

### Test case

Teste manual ou automatizado de sessão, validando expiração após 15 minutos completos de inatividade e necessidade de novo login.

### Pressupostos

- Existe uma sessão autenticada ativa.
- O utilizador permanece inativo.
- O mecanismo de gestão de sessão está operacional.

### Processo

`N/A — requisito não funcional`

### Pós-condições

A sessão é invalidada e qualquer nova interação exige novo login. A sessão expirada não deve ser restaurada por navegação retrospetiva.

### Critérios de aceitação

- Ao minuto 15:01 sem atividade, o utilizador é reenviado para login.
- O botão `retroceder` não restaura a sessão válida.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                   |
| --------- | --------------- | ------------------------------------------------------------- |
| `REQ-003` | `Complementar`  | A expiração de sessão reforça o controlo de aprovação segura. |
| `REQ-007` | `Complementar`  | A reabertura segura pressupõe sessão válida.                  |
| `REQ-008` | `Complementar`  | O override é particularmente sensível à validade da sessão.   |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`

---

## NFR-002 — Retenção, integridade e consulta dos logs

- **Requisito #:** `NFR-002`
- **Requisitante:** `System Administrator`
- **Grupo/Classificador:** `EPIC-01 / FEAT-10`
- **Tipo e prioridade:** `NFR | Indispensável`
- **Objetivo + CSF linkage:** `OBJ-2 | CSF-2`
- **Variant impact:** `Yes`

### Descrição

Como `System Administrator`, pretendo que os registos de auditoria permaneçam disponíveis para consulta durante pelo menos 5 anos e que tentativas não autorizadas de alteração ou eliminação sejam rejeitadas e registadas, para assegurar compliance e integridade do histórico de segurança.

### Objetivo

Cumprir retenção temporal mínima, preservar a integridade da auditoria e suportar investigação de incidentes e requisitos de conformidade.

### Test case

Teste de infraestrutura, privilégios e consulta, validando pesquisa de registos antigos, rejeição de alterações indevidas e criação de evidência sobre tentativas de manipulação.

### Pressupostos

- O sistema já produz registos de auditoria.
- Existe mecanismo de armazenamento consultável.
- Existem controlos de privilégio sobre os registos.

### Processo

`N/A — requisito não funcional`

### Pós-condições

Os registos mantêm-se consultáveis durante o período definido, e tentativas não autorizadas de alteração ou eliminação são rejeitadas e registadas.

### Critérios de aceitação

- Registos com 4.9 anos continuam pesquisáveis.
- 100% das tentativas não autorizadas de alteração ou eliminação dos logs são rejeitadas.
- As tentativas rejeitadas ficam também registadas para auditoria.

### Requisitos Associados

| Req.      | tipo associação | Observações                                                                               |
| --------- | --------------- | ----------------------------------------------------------------------------------------- |
| `REQ-009` | `Antecessor`    | A retenção e integridade incidem sobre os logs gerados por tentativas não autorizadas.    |
| `NFR-001` | `Paralelo`      | Ambos reforçam segurança operacional, mas sem dependência direta entre inputs/resultados. |

### Execução

- `descrito:` Sim
- `validado:` Sim
- `implementado:` `[preencher]`
- `testado:` `[preencher]`
- `aceite:` `[preencher]`
- `produção:` `[preencher]`
- `retirado:` `[preencher]`
