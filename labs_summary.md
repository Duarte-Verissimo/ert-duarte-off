# Resumo dos Labs e Aplicação no Dossiê

## Lab 1 — Kickoff, contexto e base do projeto

### Objetivo

- Escolher o projeto base e o slice funcional a trabalhar no semestre
- Definir a visão do trabalho
- Identificar objetivos e não-objetivos
- Criar glossário inicial
- Montar a estrutura do repositório e do dossiê

### O que foi feito

- Foi escolhida a opção `AMS` como base do projeto
- Foi definido o slice `Intake & Discovery`
- Foi assumida a `Variante 3`, com foco em segurança, autorização e controlo de ações críticas
- Foi criada a visão inicial do sistema e do âmbito do trabalho em `docs/vision.md`
- Foi criado o glossário inicial do domínio em `docs/glossary.md`
- Foi criada a estrutura base do repositório e do dossier, com `README`, pasta `docs`, `templates` e organização dos artefactos

### Resultado funcional

Neste lab ficou definida a base conceptual do projeto: o sistema iria centrar-se no controlo do processo de Intake, com especial atenção a autenticação, permissões e segurança.

---

## Lab 2 — Elicitação e requisitos v0

### Objetivo

- Fazer elicitação com base no caso AMS e na variante atribuída
- Registar perguntas, respostas, assumptions e open questions
- Produzir uma lista de necessidades
- Transformar essas necessidades em requisitos v0
- Reescrever requisitos ambíguos em formato mais verificável

### O que foi feito

- Foi registada a variante oficial da equipa em `docs/variant_assignment.md`
- Foi produzido o registo de elicitação em `docs/elicitation_notes.md`
- Foram identificadas necessidades ligadas a:
  - autenticação
  - controlo por roles
  - evidência de DR
  - reabertura e override
  - auditoria de tentativas bloqueadas
- Essas necessidades foram convertidas em `requirements_v0`, já com prioridade, stakeholder e impacto da variante, em `docs/requirements_v0.md`
- Foram também reescritos requisitos ambíguos para ficarem mais claros e testáveis, preparando o trabalho para futuros acceptance criteria mais verificáveis

### Resultado funcional

Neste lab ficou clara a direção do backlog: o foco do trabalho passou a ser garantir que só utilizadores autorizados conseguem executar ações críticas e que o processo de Intake não avança sem dados e evidência válidos.

---

## Lab 3 — Estruturação dos requisitos e organização funcional

### Objetivo

- Transformar os requisitos v0 em requisitos v1 com IDs estáveis
- Detalhar requisitos principais
- Criar NFRs
- Criar um requirements map
- Mostrar alinhamento da variante

### O que foi feito

- Foram definidos requisitos funcionais `REQ-001` a `REQ-009` em `docs/requirements_v1.md`
- Foram definidos requisitos não funcionais relevantes para segurança, logs, desempenho e usabilidade
- Foram introduzidos acceptance criteria nos requisitos principais, sobretudo para:
  - autenticação e permissões
  - preenchimento e validação do Intake
  - evidência de DR
  - aprovação, reabertura e override
- O dossiê passou a assumir uma organização funcional única:
  - `1 Epic`
  - `10 Features`
- Essa estrutura ficou formalizada em:
  - `docs/requirements_map.md`
  - `docs/backlog_epic_features.md`

### Resultado funcional

Neste lab o trabalho deixou de ser apenas uma lista de requisitos e passou a ter uma estrutura de backlog clara:

- `EPIC-01 — Controlo de Segurança e Autorização (RBAC) no Intake & Discovery`
- `FEAT-01` a `FEAT-10`

Foi também aqui que começaram a ficar claras as relações entre requisitos, features, e valor funcional do sistema.

---

## Lab 4 — Objetivos, CSFs e REM

### Objetivo

- Definir objetivos e fatores críticos de sucesso
- Relacionar esses objetivos com os requisitos
- Preencher o REM
- Acrescentar preconditions e postconditions para requisitos funcionais

### O que foi feito

- Foram definidos `3 objetivos` e `3 CSFs` em `docs/objectives_fcs.md`
- Esses objetivos e CSFs foram alinhados com o foco do backlog:
  - segurança e permissões
  - auditoria e rastreabilidade
  - qualidade e validade da informação antes da aprovação
- Foi construído o `REM v1` em `docs/rem_v1.md`
- No REM foram representados os requisitos mais importantes do sistema, com:
  - objetivo
  - stakeholder
  - prioridade
  - validation method
  - acceptance criteria
  - variant impact
- Os acceptance criteria passaram aqui a ficar mais explícitos e ligados à validação dos requisitos principais
- Foram adicionadas preconditions e postconditions a requisitos funcionais críticos

### Resultado funcional

Neste lab o dossiê passou a mostrar não apenas o que o sistema deve fazer, mas também porque cada requisito existe e como contribui para os objetivos do projeto.

---

## Lab 5 — Use Case Diagram e primeiros Use Cases

### Objetivo

- Criar o Use Case Diagram do slice
- Identificar atores e limite do sistema
- Produzir pelo menos 2 use cases descritos
- Ligar use cases aos requisitos

### O que foi feito

- Foi criado o diagrama inicial em:
  - `docs/use_case_diagram.md`
  - `docs/diagrams/use_case_diagram.puml`
- Foram definidos os principais atores:
  - `Security Officer`
  - `Transition Manager`
  - `Active Directory`
- Foram identificados os use cases principais do slice:
  - autenticar utilizador
  - preencher formulário de Intake
  - anexar evidência de DR
  - aprovar formulário de Intake
  - reabrir Intake aprovado
  - sobrescrever dados aprovados
- Foram descritos os primeiros use cases em `docs/use_cases.md`

### Resultado funcional

Neste lab a estrutura de requisitos começou a ser ligada ao comportamento do sistema. O backlog passou a ter correspondência visível com ações concretas dos atores.

---

## Lab 6 — Refinamento dos Use Cases e rastreabilidade

### Objetivo

- Refinar o diagrama de casos de uso
- Melhorar a qualidade das descrições
- Garantir alternativas, exceções e influência da variante
- Criar rastreabilidade entre use cases e requisitos

### O que foi feito

- Foi criado o diagrama refinado em:
  - `docs/use_case_diagram_v2.md`
  - `docs/diagrams/use_case_diagram_v2.puml`
- Foram produzidos use cases mais completos em `docs/use_cases_v2.md`
- Foram reforçados sobretudo os use cases críticos do backlog:
  - `UC-04 — Aprovar formulário de Intake`
  - `UC-05 — Reabrir Intake aprovado`
  - `UC-06 — Sobrescrever dados aprovados`
- Foram explicitadas:
  - alternative flows
  - exceptions
  - influência da variante de segurança
- Foi criada a rastreabilidade entre `UC` e `REQ` em `docs/traceability_uc_req.md`
- Os acceptance criteria já existentes passaram a ficar indiretamente ligados aos use cases através da rastreabilidade entre requisitos e comportamento esperado
- Ficou também fechado o `UC-05`, que passou a incluir fluxo principal, alternativas e exceções em linha com o restante Lab 6

### Resultado funcional

Neste lab ficou consolidada a ligação entre:

- requisitos
- features
- use cases
- critérios de aceitação

Ou seja, o sistema deixou de estar descrito apenas como backlog e passou também a estar modelado em comportamento observável dos atores.

---

## Lab 7 — Validação de requisitos, Acceptance Criteria e Definition of Done

### Objetivo

- Validar se os requisitos estão corretos, completos e testáveis
- Reforçar os acceptance criteria dos requisitos mais importantes
- Definir um Definition of Done para requisitos e user stories
- Detetar ambiguidades, conflitos, lacunas e possíveis necessidades de reescrita

### O que foi feito

- Foram selecionados `6 requisitos` para validação formal:
  - `REQ-003`
  - `REQ-004`
  - `REQ-005`
  - `REQ-007`
  - `NFR-001`
  - `NFR-002`
- Foi produzido o documento de validação em `docs/requirements_validation.md`
- Foram registadas perguntas de validação diretamente ligadas à `Variante 3`
- Para cada requisito validado foram definidos:
  - estado de validação
  - issues found
  - proposed fix
  - expected evidence
- Foi criado o documento `docs/acceptance_criteria.md`, consolidando e formalizando acceptance criteria para os 6 requisitos selecionados
- Foram usados critérios em formato `Given/When/Then` nos requisitos mais adequados ao comportamento e autorização
- Foi criado o documento `docs/definition_of_done.md` com:
  - `DoD — Requirement`
  - `DoD — User Story`

### Resultado funcional

Neste lab o dossiê passou a ter uma camada explícita de validação formal. Os requisitos deixaram de estar apenas definidos e rastreados, passando também a estar revistos segundo critérios de:

- clareza
- testabilidade
- completude
- evidência de validação

Além disso, os acceptance criteria ficaram mais fortes e o trabalho passou a ter uma definição objetiva do que significa um requisito ou uma user story estarem concluídos.

---

## Lab 8 — Prototipagem assistida por IA

### Objetivo

- Gerar um protótipo executável de um slice coerente do sistema
- Manter o scope sob controlo, evitando feature drift
- Garantir rastreabilidade entre protótipo, requisitos, use cases e acceptance criteria
- Registar prompts, iterações e decisões tomadas durante a geração
- Refletir no protótipo pelo menos 2 restrições da Variante 3

### O que foi feito

- Foi selecionado o `Slice B — Evidence metadata capture -> validation` como alvo de implementação, por ser o mais pequeno, demonstrável e coerente com os requisitos já consolidados do dossiê
- O scope implementável do lab foi registado em `docs/generated_scope.md`
- Nesse scope ficaram explicitamente definidos:
  - o ator principal `Transition Manager`
  - os atores/roles relevantes para a demo
  - os use cases incluídos:
    - `UC-03 — Anexar evidência de DR`
    - parte relevante de `UC-04 — Aprovar formulário de Intake`
  - os requisitos a refletir no protótipo:
    - `REQ-002`
    - `REQ-003`
    - `REQ-004`
    - `REQ-005`
    - `NFR-005`
  - as constraints visíveis da variante:
    - submissão final limitada a roles autorizadas
    - bloqueio com mensagens claras em caso de erro ou falta de permissão
- Foi criado o registo de iteração em `docs/vibe_coding_log.md`
- Foi registado o prompt inicial usado para gerar a app com `Lovable`
- Foi documentado o resultado da primeira geração do protótipo, incluindo:
  - formulário para evidência de `Disaster Recovery`
  - seletor de role para simular permissões
  - submissão final condicionada por validação e autorização
- Foi registada uma segunda iteração para corrigir o comportamento das roles:
  - o `Transition Manager` manteve o papel operacional de preenchimento e anexação de evidência
  - o `Security Officer` passou a atuar como role de controlo/governação, podendo aprovar mas sem editar nem anexar evidência
  - a role não autorizada continuou bloqueada
- Foram também acrescentados acceptance criteria específicos para:
  - `REQ-002`
  - `NFR-005`
    de forma a alinhar melhor o `Lab 8` com o comportamento esperado da app gerada
- O código do protótipo foi colocado no repositório em `LovableApp/scope-prototype-main`
- A verificação local foi registada:
  - `npm run build` concluído com sucesso
  - `npm test` concluído com sucesso

### Resultado funcional

Neste lab ficou concluída a prototipagem assistida por IA de um slice único e coerente do sistema.

O trabalho passou a ter:

- um scope de implementação explícito
- um prompt pack rastreável
- duas iterações registadas de geração e correção
- um protótipo executável no repositório
- uma verificação manual dos fluxos principais
- uma demonstração visível da Variante 3 através de:
  - controlo por role
  - bloqueio por erro de validação
  - separação entre ator operacional e role de governação

---

## Lab 9 — Testing Part I

### Objetivo

- Desenhar casos de teste a partir dos requisitos, acceptance criteria e use cases já definidos
- Criar pelo menos `8 test cases` estruturados e rastreáveis
- Criar pelo menos `1 feature file` em Gherkin com cenários BDD
- Garantir cobertura de:
  - happy path
  - fluxo alternativo
  - testes negativos ou de erro
  - testes de fronteira
- Criar uma matriz de rastreabilidade entre requisitos e casos de teste
- Usar Visual Paradigm como evidência opcional de modelação dos testes

### O que foi feito

- Foi criado o documento `docs/test_cases.md` com `24 test cases`, ultrapassando o mínimo pedido no enunciado
- Os test cases foram derivados dos requisitos, acceptance criteria e use cases do slice `Intake & Discovery`
- A cobertura incluiu testes para:
  - preenchimento de dados de infraestrutura e contactos
  - anexação de evidência de `Disaster Recovery`
  - aprovação de Intake por roles autorizadas
  - bloqueio de aprovação por informação incompleta
  - validação da validade temporal da evidência de DR
  - autenticação e mapeamento de roles
  - reabertura de Intake aprovado
  - override com reautenticação e justificação
  - registo de tentativas não autorizadas
  - timeout de sessão, mensagens de erro, performance e compatibilidade
- Foi criado o ficheiro `bdd/features/lab9.feature` com cenários BDD em formato Gherkin
- Os cenários BDD cobriram comportamentos como:
  - aprovação válida por `Transition Manager`
  - aprovação válida por `Security Officer`
  - bloqueio por falta de evidência de DR
  - bloqueio por utilizador sem permissão
  - validação de datas limite da evidência de DR
  - reabertura controlada
  - override com password e justificação
  - invalidação de sessão por inatividade
  - apresentação rápida e contextual de mensagens de erro
- Foi criada a matriz `REQ ↔ TC` em `docs/traceability_req_tc.md`
- A matriz relacionou requisitos funcionais e não funcionais com os test cases correspondentes
- Foi incluída a evidência Visual Paradigm em `docs/diagrams/test_cases_lab9.png`
- A Variante 3 ficou refletida sobretudo nos testes de:
  - RBAC
  - bloqueio de ações não autorizadas
  - reautenticação em override
  - auditoria e logs de segurança

### Resultado funcional

Neste lab o dossiê passou a ter uma camada formal de teste sobre os requisitos já definidos.

O trabalho deixou de ter apenas requisitos, use cases e acceptance criteria, passando também a ter:

- casos de teste estruturados
- cenários BDD compreensíveis por stakeholders
- cobertura de percursos positivos, alternativos, negativos e de fronteira
- rastreabilidade entre requisitos e testes
- evidência visual da modelação dos test cases

Assim, os requisitos passaram a poder ser validados por testes documentados e não apenas por revisão textual.

---

## Lab 10 — Testing Part II

### Objetivo

- Consolidar o trabalho de testes num plano de testes realista
- Distinguir static testing e dynamic testing
- Definir níveis de teste para o slice:
  - unitário
  - integração
  - sistema
  - aceitação
  - segurança
  - NFR
- Identificar regras adequadas a TDD
- Identificar comportamentos adequados a BDD
- Criar rastreabilidade entre requisitos, acceptance criteria, test cases e cenários BDD
- Rever e melhorar acceptance criteria e Definition of Done com base no que os testes revelaram

### O que foi feito

- Foi criado o plano de testes em `docs/test_plan.md`
- O plano definiu o scope do Lab 10 como o slice `Intake & Discovery`, com foco em:
  - evidência de DR
  - aprovação controlada
  - RBAC
  - reabertura
  - override
  - auditoria
  - NFRs de sessão, logs, performance, mensagens de erro e compatibilidade
- O plano também definiu o que ficava fora de scope, incluindo:
  - integração real com Active Directory / SSO
  - automação completa de Cucumber
  - validação real de disponibilidade mensal
  - testes avançados de carga e CI/CD
- Foi descrita a estratégia de `static testing`, baseada na revisão de:
  - requisitos
  - acceptance criteria
  - test cases
  - cenários Gherkin
  - Definition of Done
  - rastreabilidade
- Foi descrita a estratégia de `dynamic testing`, com níveis de teste unitário, integração, sistema, aceitação, segurança e NFR
- Foram identificados candidatos a TDD, incluindo:
  - validação da validade temporal da evidência de DR
  - tamanho mínimo da justificação de override
  - timeout de sessão por inatividade
  - logging de ações não autorizadas
- Foi definido o plano BDD com base no ficheiro `bdd/features/lab9.feature`
- Foi criada a matriz `REQ → AC → TC/BDD` em `docs/traceability_req_ac_tc.md`
- A matriz ligou requisitos, acceptance criteria, test cases e cenários BDD numa cadeia de validação clara
- Foi criado o documento `docs/ac_dod_updates.md`
- Nesse documento foram registadas `7 melhorias de Acceptance Criteria`, incluindo melhorias ligadas a:
  - RBAC na aprovação
  - bloqueio por falta de evidência de DR
  - validação de fronteira da evidência de DR
  - justificação mínima no override
  - auditoria de tentativas não autorizadas
  - tempo e localização de mensagens de erro
- Foram propostas `4 atualizações de Definition of Done`, reforçando:
  - rastreabilidade obrigatória `REQ → AC → TC/BDD`
  - cobertura de testes negativos e de fronteira
  - evidência específica para requisitos da Variante 3
  - critérios de evidência para NFRs

### Resultado funcional

Neste lab o trabalho de teste ficou consolidado numa estratégia completa.

O dossiê passou a mostrar explicitamente a cadeia:

```txt
Requirements → Acceptance Criteria → Test Cases / BDD Scenarios → Evidence
```

Além disso, os testes deixaram de estar apenas desenhados individualmente e passaram a estar integrados num plano de validação com scope, níveis, responsabilidades, evidência e melhorias ao próprio processo de requisitos.

---

## Lab 11 — Vibe Coding + Testing First com PyTest

### Objetivo

Aplicar TDD / Testing First a requisitos já existentes do slice `Intake & Discovery`, usando PyTest como evidência principal do Lab 11.

O foco foi transformar acceptance criteria críticos da Variante 3 em testes automáticos rastreáveis, sem alterar o protótipo React e sem usar Vitest como evidência principal.

### O que foi feito

- Foram selecionados 3 requisitos:
  - `REQ-003`
  - `REQ-005`
  - `REQ-009`
- Foi criada a estrutura PyTest com `requirements.txt`, `src/` e `tests/unit/`.
- Foram criados 8 testes automáticos em `tests/unit/test_intake_rules.py`.
- Foi criada a implementação mínima em `src/intake_rules.py`.
- Foi criado o ficheiro BDD `bdd/features/lab11.feature`.
- Os cenários BDD do Lab 11 cobrem RBAC, auditoria e validade temporal da evidência de Disaster Recovery.
- Foi criado o log `docs/test_first_log.md`.
- Foi usada uma abordagem `REQ → AC → Teste → Implementação → Evidência`.
- Foi registada a utilização de IA e a rejeição de scope extra.
- Os testes devem ser corridos com:

```bash
pytest -q
```

### Resultado funcional

O dossiê passou a ter evidência automática, em PyTest, para regras críticas de autorização, validade temporal da evidência de Disaster Recovery e auditoria de tentativas não autorizadas.

A implementação criada é apenas uma representação testável das regras dos requisitos. Não foram criadas funcionalidades novas, UI, base de dados, autenticação real ou integração com Active Directory.

### Testes criados

- `test_authorized_transition_manager_can_approve_valid_intake`
- `test_authorized_security_officer_can_approve_valid_intake`
- `test_viewer_cannot_approve_intake`
- `test_dr_evidence_exactly_365_days_old_is_valid`
- `test_dr_evidence_older_than_365_days_is_rejected`
- `test_dr_evidence_future_date_is_rejected`
- `test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user`
- `test_audit_log_is_persisted_in_less_than_one_second`

### Rastreabilidade

- `REQ-003` → testes de aprovação autorizada e bloqueio de `Viewer`
- `REQ-005` → testes de validade temporal da evidência de Disaster Recovery
- `REQ-009` → testes de criação de audit event em tentativa não autorizada e persistência do log em menos de 1 segundo

---

## Lab 12 — Unit Tests e Assertions com PyTest

### Objetivo

Consolidar a evidência de testes unitários do Lab 11, focando Unit Tests, Assertions, Running Tests e Evidence com a stack Python + PyTest.

O Lab 12 não adiciona novos requisitos nem novas funcionalidades. O objetivo é documentar e demonstrar a execução dos testes unitários já alinhados com `REQ-003`, `REQ-005` e `REQ-009`.

### O que foi feito

- Foram revistos os testes em `tests/unit/test_intake_rules.py`.
- Os nomes dos testes foram mantidos claros e rastreáveis.
- Cada teste mantém ligação a REQ/AC em comentário.
- Foram adicionados comentários `Arrange / Act / Assert` para melhorar a leitura da estrutura dos testes.
- Foi criado o relatório `docs/unit_test_report.md`.
- Foi criado o guia de execução `docs/test_execution.md`.
- Foi mantida a stack Python + PyTest como evidência principal.

### Ficheiros criados

- `docs/unit_test_report.md`
- `docs/test_execution.md`

### Testes usados

O Lab 12 usa os 8 testes PyTest existentes:

- `test_authorized_transition_manager_can_approve_valid_intake`
- `test_authorized_security_officer_can_approve_valid_intake`
- `test_viewer_cannot_approve_intake`
- `test_dr_evidence_exactly_365_days_old_is_valid`
- `test_dr_evidence_older_than_365_days_is_rejected`
- `test_dr_evidence_future_date_is_rejected`
- `test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user`
- `test_audit_log_is_persisted_in_less_than_one_second`

### Execução

Os testes devem ser executados com:

```bash
python -m pytest -q
```

Resultado esperado:

```txt
8 passed
```

### Resultado funcional

O dossiê passou a ter uma evidência formal de unit testing, com relatório de assertions, tipos de teste, critérios de cobertura e instruções de execução reproduzíveis.

Ficou documentado que os testes cobrem:

- RBAC na aprovação do Intake;
- validade temporal da evidência de Disaster Recovery;
- criação e persistência simulada em memória de audit log para tentativas não autorizadas.

---

## Síntese global

### Estrutura

- `1 Epic`
- `10 Features`
- `12 User Stories`
- `9 requisitos funcionais principais`
- `6 requisitos não funcionais`
- `6 use cases principais`
- `6 requisitos formalmente validados no Lab 7`
- `2 blocos de Definition of Done`
- `1 slice selecionado para prototipagem no Lab 8`
- `1 generated scope`
- `1 vibe coding log com 2 iterações`
- `1 protótipo executável no repositório`
- `24 casos de teste`
- `8 testes automáticos PyTest`
- `2 feature files Gherkin com cenários BDD`
- `1 matriz REQ ↔ TC`
- `1 plano de testes`
- `1 matriz REQ → AC → TC/BDD`
- `1 Test First Log`
- `1 relatório de unit tests`
- `1 guia de execução de testes PyTest`
- `7 melhorias de Acceptance Criteria`
- `4 updates à Definition of Done`
- `1 evidência Visual Paradigm para test cases`

### Epic

- `EPIC-01 — Controlo de Segurança e Autorização (RBAC) no Intake & Discovery`

### Features

- `FEAT-01 — Autenticar utilizador no módulo de Intake`
- `FEAT-02 — Atribuir permissões com base em roles corporativas`
- `FEAT-03 — Preencher dados obrigatórios do Intake`
- `FEAT-04 — Anexar evidência de Disaster Recovery`
- `FEAT-05 — Validar completude antes da aprovação`
- `FEAT-06 — Validar validade temporal da evidência de DR`
- `FEAT-07 — Aprovar Intake com autorização explícita`
- `FEAT-08 — Reabrir Intake aprovado com controlo de permissões`
- `FEAT-09 — Executar override com reautenticação e justificação`
- `FEAT-10 — Registar e reter eventos de segurança`

### User Stories

- `US-001 — Como utilizador autenticado, quero iniciar sessão com a minha identidade corporativa para aceder ao módulo de Intake com permissões válidas.`
- `US-002 — Como Security Officer, quero que as permissões sejam atribuídas com base nas roles corporativas para que só perfis autorizados executem ações críticas.`
- `US-003 — Como Transition Manager, quero preencher os dados obrigatórios de infraestrutura e contactos para preparar o Intake para validação e aprovação.`
- `US-004 — Como Transition Manager, quero anexar a evidência de Disaster Recovery para provar que o serviço tem suporte documental antes da aprovação.`
- `US-005 — Como Transition Manager, quero que o sistema valide a completude do Intake antes da aprovação para impedir decisões com informação em falta.`
- `US-006 — Como Transition Manager, quero que a evidência de DR seja validada temporalmente para evitar aprovações com documentação desatualizada.`
- `US-007 — Como Transition Manager, quero aprovar um Intake válido para permitir a transição para a fase seguinte.`
- `US-008 — Como Security Officer, quero poder aprovar um Intake quando necessário para assegurar controlo e governação do processo.`
- `US-009 — Como Security Officer, quero reabrir um Intake aprovado para permitir correções controladas sem perder rastreabilidade.`
- `US-010 — Como Security Officer, quero executar um override com reautenticação e justificação para corrigir dados aprovados de forma excecional e controlada.`
- `US-011 — Como Security Officer, quero que tentativas não autorizadas sejam registadas para apoiar auditoria e investigação.`
- `US-012 — Como System Administrator, quero que os logs sejam retidos com integridade e que sessões inativas expirem para reduzir risco operacional.`

### Requisitos funcionais

- `REQ-001 — Recolher detalhes de infraestrutura e contactos`
- `REQ-002 — Anexar evidência de Disaster Recovery`
- `REQ-003 — Restringir a aprovação do Intake por RBAC`
- `REQ-004 — Bloquear aprovação por informação incompleta`
- `REQ-005: Verificar a validade temporal da evidência de Disaster Recovery`
- `REQ-006 — Verificar identidade e roles no diretório corporativo`
- `REQ-007 — Reabrir Intake aprovado com controlo de permissões`
- `REQ-008 — Executar override com reautenticação e justificação`
- `REQ-009 — Registar tentativas de ações não autorizadas`

### Requisitos não funcionais

- `NFR-001 — Timeout de sessão inativa`
- `NFR-002 — Retenção, integridade e consulta dos logs`
- `NFR-003 — Performance do formulário de Intake`
- `NFR-004 — Disponibilidade mensal do módulo`
- `NFR-005 — Tempo e localização das mensagens de erro`
- `NFR-006 — Cobertura dos browsers suportados`

### Use Cases

- `UC-01 — Autenticar utilizador`
- `UC-02 — Preencher formulário de Intake`
- `UC-03 — Anexar evidência de DR`
- `UC-04 — Aprovar formulário de Intake`
- `UC-05 — Reabrir Intake aprovado`
- `UC-06 — Sobrescrever dados aprovados`

### Acceptance Criteria

- `FEAT-01`
  - autenticar utilizador com identidade corporativa
  - bloquear contas inválidas ou desativadas
  - atribuir a role correta no acesso ao módulo
- `FEAT-02`
  - mapear permissões a partir das roles corporativas
  - restringir ações críticas a perfis autorizados
  - bloquear perfis sem autorização
- `FEAT-03`
  - permitir preencher infraestrutura e contactos
  - guardar os dados no Intake correto
  - retomar o Intake sem perda de informação
- `FEAT-04`
  - permitir anexar evidência de DR em PDF
  - associar a evidência ao Intake correto
  - disponibilizar a evidência para validação posterior
- `FEAT-05`
  - validar os campos obrigatórios antes da aprovação
  - bloquear a aprovação quando faltam dados
  - manter o estado em `Draft` quando a validação falha
  - apresentar mensagens claras de erro
- `FEAT-06`
  - rejeitar evidência de DR com mais de 12 meses
  - rejeitar evidência com data futura
  - informar que a evidência está fora do prazo aceite
- `FEAT-07`
  - permitir aprovação apenas a utilizadores autorizados
  - exigir dados e evidência válidos para aprovar
  - mudar o estado para `Aprovado` em caso de sucesso
  - apresentar `Acesso Negado` em tentativas sem permissão
- `FEAT-08`
  - permitir reabertura apenas a perfis autorizados
  - mudar o estado para `Reaberto`
  - voltar a permitir edição autorizada
  - bloquear tentativas sem permissão
- `FEAT-09`
  - exigir password e justificação no override
  - só permitir confirmação com justificação suficiente
  - impedir override com password incorreta
  - registar a justificação quando o override é autorizado
- `FEAT-10`
  - registar tentativas não autorizadas de aprovação, reabertura e override
  - guardar identificador do utilizador, ação tentada e timestamp
  - expirar sessões após 15 minutos de inatividade
  - manter os logs consultáveis durante 5 anos e rejeitar tentativas não autorizadas de alteração

### Documentos de validação formal

- `docs/requirements_validation.md`
- `docs/acceptance_criteria.md`
- `docs/definition_of_done.md`
