# Visao Geral do Projeto

Este documento resume, de forma simples e progressiva, o trabalho desenvolvido ao longo dos labs do projeto de ERT.

O objetivo e mostrar o que foi feito em cada laboratorio, como os artefactos se relacionam entre si e como o projeto evoluiu desde a definicao inicial ate as fases de requisitos, casos de uso, testes, automacao e manutencao da qualidade.

## Contexto geral

O projeto usa como base o caso de estudo **AMS (Application Management Services)**, com foco no slice **Intake & Discovery**.

A variante atribuida foi a **Variante 3**, centrada em **seguranca, autorizacao por roles e controlo de acoes criticas**. Por isso, ao longo do trabalho, o projeto da especial atencao a:

- autenticacao de utilizadores;
- autorizacao baseada em roles;
- aprovacao controlada do Intake;
- reabertura controlada de processos aprovados;
- override com reautenticacao e justificacao;
- bloqueio de acoes nao autorizadas;
- registo de eventos em logs de auditoria;
- rastreabilidade entre requisitos, criterios de aceitacao e testes.

---

## Lab 1 - Kickoff, definicao do projeto e estrutura inicial

### O que foi feito

No Lab 1 foi criada a base do projeto. A equipa definiu que iria trabalhar sobre o caso AMS, escolheu o slice **Intake & Discovery** e registou a variante atribuida.

Foram tambem criados os primeiros documentos de suporte:

- `docs/vision.md` - define a visao do projeto, os objetivos e os non-objectives;
- `docs/glossary.md` - cria um glossario inicial com os principais termos do dominio;
- `docs/variant_assignment.md` - regista a Variante 3 e o seu foco;
- `README.md` - apresenta a equipa, o projeto, a stack e a organizacao geral do repositorio.

Tambem ficou definida a estrutura base do repositorio, com pastas para documentacao, testes, BDD e templates.

### Como este lab suporta os seguintes

O Lab 1 e a fundacao de todo o trabalho seguinte.

A visao define o problema e o objetivo geral. O glossario ajuda a manter uma linguagem comum entre os membros da equipa. A variante orienta todas as decisoes futuras, principalmente nas areas de seguranca, RBAC e auditoria.

Isto significa que os requisitos criados nos labs seguintes nao surgem isolados: eles desenvolvem a ideia inicial de que o Intake deve ser seguro, controlado e rastreavel.

### Ligacao com os restantes artefactos

A partir deste lab:

- a visao influencia os requisitos dos Labs 2 e 3;
- a variante influencia os requisitos de seguranca, reabertura, override e auditoria;
- o glossario apoia a escrita consistente dos requisitos, casos de uso e testes;
- a estrutura do repositorio permite guardar todos os entregaveis por laboratorio.

### Importancia do Lab 1

O Lab 1 e importante porque transforma uma ideia geral num projeto organizado. Ele define o contexto, o foco e as regras iniciais que depois vao ser detalhadas nos requisitos, modelos, prototipo e testes.

Sem este lab, os restantes documentos ficariam sem uma linha condutora clara.

### Conclusao

O Lab 1 estabelece a identidade do projeto: um modulo AMS de **Intake & Discovery** orientado para seguranca, controlo de permissoes e rastreabilidade. Esta base justifica a evolucao posterior do projeto e explica porque os labs seguintes se focam tanto em requisitos testaveis, controlo de roles e evidencias de validacao.

---

## Lab 2 - Elicitacao e requisitos v0

### O que foi feito

No Lab 2, a equipa passou da definicao geral do projeto para a recolha inicial de necessidades.

Foi feita uma simulacao de entrevista com stakeholders do contexto AMS, focada no slice **Intake & Discovery** e na **Variante 3**. A partir dessa entrevista, foram registadas perguntas, respostas, necessidades, pressupostos e questoes em aberto.

Os principais ficheiros trabalhados neste lab foram:

- `docs/variant_assignment.md` - manteve o registo da Variante 3;
- `docs/elicitation_notes.md` - registou a entrevista, as perguntas e respostas, os pressupostos e as questoes em aberto;
- `docs/requirements_v0.md` - transformou necessidades iniciais em requisitos v0.

Neste lab foram identificadas necessidades importantes, como:

- recolher dados de infraestrutura e contactos;
- anexar evidencia de Disaster Recovery;
- bloquear aprovacao quando faltar informacao;
- restringir a aprovacao a utilizadores autorizados;
- controlar reabertura e override;
- registar tentativas nao autorizadas em audit logs;
- validar se a evidencia de DR esta dentro do prazo aceitavel.

### Como este lab continua o Lab 1

O Lab 2 desenvolve diretamente a base criada no Lab 1.

No Lab 1 foi definido que o projeto teria foco em seguranca, roles e controlo de acoes criticas. No Lab 2, essa ideia comeca a transformar-se em necessidades concretas e requisitos iniciais.

Por exemplo:

- a ideia de autorizacao por roles passa a aparecer como necessidade de restringir aprovacoes;
- a preocupacao com acoes criticas passa a incluir aprovar, reabrir e executar override;
- a ideia de rastreabilidade passa a surgir como necessidade de criar logs de auditoria;
- o foco no slice Intake & Discovery passa a gerar requisitos sobre campos obrigatorios, evidencias e validacao.

Assim, o Lab 2 nao muda a direcao do projeto. Ele pega na visao inicial e torna-a mais concreta.

### Ligacao com os restantes artefactos

O Lab 2 cria a primeira base real de requisitos.

O ficheiro `requirements_v0.md` vai servir de entrada para o Lab 3, onde os requisitos passam a ter IDs formais, melhor estrutura e ligacao a epicos/features.

As notas de elicitacao tambem ajudam a justificar porque certos requisitos existem. Isto e importante porque mostra que os requisitos nao foram inventados sem contexto: eles nasceram de perguntas feitas ao cliente e das necessidades do dominio AMS.

### Problemas ou inconsistencias encontradas

O Lab 2 esta bem alinhado com o Lab 1 e com a Variante 3.

Ainda assim, ha alguns pontos a ter em atencao:

- alguns requisitos v0 ainda sao largos e precisam de melhor estrutura, o que e normal nesta fase;
- a integracao com Active Directory/SSO aparece como requisito, mas mais tarde o projeto trata isso de forma simulada ou documental, nao como integracao real;
- a retencao de logs por 5 anos aparece cedo, mas nem todos os labs posteriores conseguem demonstrar isto com implementacao real;
- algumas necessidades de seguranca sao ambiciosas para um projeto universitario, por isso precisam de ficar bem delimitadas no scope.

Estes pontos nao sao erros graves. Sao naturais numa versao inicial de requisitos e depois sao refinados nos labs seguintes.

### Requisitos cobertos

O Lab 2 cobre a criacao inicial dos requisitos funcionais e nao funcionais.

Ajuda a estabelecer requisitos relacionados com:

- dados obrigatorios do Intake;
- evidencia de Disaster Recovery;
- aprovacao por roles;
- bloqueio por informacao incompleta;
- validacao temporal da evidencia;
- verificacao de identidade e roles;
- reabertura controlada;
- override com reautenticacao;
- audit logs para tentativas nao autorizadas;
- retencao e integridade dos logs.

Mesmo que ainda estejam numa versao inicial, estes requisitos tornam-se a base do resto do projeto.

### Melhorias recomendadas

Para melhorar o Lab 2, seria util:

- garantir que todas as questoes em aberto ficam ligadas a requisitos especificos;
- indicar quais requisitos v0 sao prioridade maxima para o prototipo;
- deixar claro que integracoes externas, como Active Directory real, ficam fora do scope de implementacao completa;
- manter uma pequena justificacao para cada requisito mais importante, baseada nas respostas da entrevista.

Estas melhorias ajudariam a tornar a passagem do Lab 2 para o Lab 3 ainda mais clara.

### Conclusao

O Lab 2 e o momento em que a visao inicial passa a requisitos concretos. A equipa deixa de ter apenas uma ideia geral sobre seguranca no Intake e passa a ter uma lista de necessidades e requisitos v0 que explicam o que o sistema deve fazer.

Este lab e importante porque cria a primeira ponte entre o problema do cliente e a solucao que sera detalhada nos labs seguintes.

---

## Lab 3 - Requirements v1, IDs e mapa de requisitos

### O que foi feito

No Lab 3, os requisitos iniciais do Lab 2 foram organizados numa versao mais formal e estruturada.

O principal objetivo foi transformar os requisitos v0 em requisitos com identificadores claros, melhor descricao, criterios de aceitacao iniciais e ligacao a areas funcionais do projeto.

Os principais ficheiros trabalhados neste lab foram:

- `docs/requirements_v1.md` - apresenta os requisitos funcionais e nao funcionais ja com IDs formais;
- `docs/requirements_map.md` - organiza os requisitos por epic/features e mostra a relacao com use cases previstos;
- `docs/backlog_epic_features.md` - consolida uma visao de backlog com epic, features, user stories, requisitos, use cases e acceptance criteria sintetizados.

Neste lab, os requisitos passam a ter uma estrutura mais clara, por exemplo:

- `REQ-001` - recolher detalhes de infraestrutura e contactos;
- `REQ-002` - anexar evidencia de Disaster Recovery;
- `REQ-003` - restringir aprovacao do Intake por RBAC;
- `REQ-004` - bloquear aprovacao por informacao incompleta;
- `REQ-005` - verificar validade temporal da evidencia de DR;
- `REQ-006` - verificar identidade e roles no diretorio corporativo;
- `REQ-007` - reabrir Intake aprovado com controlo de permissoes;
- `REQ-008` - executar override com reautenticacao e justificacao;
- `REQ-009` - registar tentativas de acoes nao autorizadas.

Tambem foram definidos requisitos nao funcionais relacionados com seguranca, auditoria, performance, disponibilidade, usabilidade e compatibilidade.

### Como este lab continua o Lab 2

O Lab 3 pega nos requisitos v0 criados no Lab 2 e transforma-os numa base mais profissional e rastreavel.

No Lab 2, as necessidades ainda estavam numa fase inicial. No Lab 3, essas necessidades passam a ter:

- identificadores unicos;
- descricao mais completa;
- requester/stakeholder associado;
- objetivo do requisito;
- acceptance criteria iniciais;
- indicacao de impacto da variante;
- separacao entre requisitos funcionais e nao funcionais.

Isto torna o projeto mais facil de analisar, testar e manter, porque cada requisito passa a poder ser referenciado diretamente nos labs seguintes.

### Ligacao com os restantes artefactos

O Lab 3 e um dos pontos centrais da evolucao do projeto.

A partir deste lab, quase todos os documentos seguintes passam a usar os IDs `REQ-###` e `NFR-###`.

Por exemplo:

- os objetivos e CSFs do Lab 4 passam a mapear requisitos concretos;
- os use cases dos Labs 5 e 6 passam a referenciar requisitos;
- os acceptance criteria do Lab 7 derivam dos requisitos v1;
- os test cases do Lab 9 usam estes IDs para rastreabilidade;
- os testes unitarios e BDD dos Labs 11, 12 e 13 selecionam requisitos especificos;
- a rastreabilidade final do Lab 14 depende desta estrutura.

Sem o Lab 3, seria dificil provar que os testes e os cenarios cobrem os requisitos certos.

### Problemas ou inconsistencias encontradas

O Lab 3 esta bem alinhado com o Lab 2 e melhora bastante a organizacao dos requisitos.

Ainda assim, existem alguns pontos a ter em conta:

- `REQ-001` aparece na estrutura inicial, mas mais tarde e removido de algumas matrizes de teste porque nao faz parte do scope implementado no prototipo;
- `REQ-006` fala em Active Directory/SSO, mas a implementacao real dessa integracao fica fora do alcance do projeto;
- alguns NFRs, como disponibilidade mensal ou compatibilidade total em browsers, sao dificeis de validar completamente num projeto universitario;
- o ficheiro `requirements_map.md` menciona use cases que so sao definidos formalmente nos Labs 5 e 6, por isso nessa fase ainda ha uma certa antecipacao da modelacao seguinte.

Estas inconsistencias nao quebram a logica do projeto, mas devem ser explicadas como diferenca entre requisitos documentados, requisitos implementados e requisitos testados.

### Requisitos cobertos

O Lab 3 cobre a formalizacao dos principais requisitos do projeto.

Ficam cobertas as areas de:

- dados base do Intake;
- evidencias obrigatorias;
- validacao antes da aprovacao;
- RBAC;
- verificacao de identidade;
- reabertura controlada;
- override;
- logs de auditoria;
- seguranca;
- performance;
- disponibilidade;
- usabilidade;
- compatibilidade.

Este lab tambem cria a base para organizar o backlog em features, permitindo relacionar cada requisito com uma parte funcional do sistema.

### Melhorias recomendadas

Para melhorar o Lab 3, seria util:

- assinalar explicitamente quais requisitos pertencem ao scope implementado e quais ficam apenas documentados;
- separar melhor requisitos demonstraveis no prototipo de requisitos apenas planeados;
- indicar, junto de cada NFR, como ele poderia ser validado de forma simples;
- manter uma nota de que integracoes externas reais, como Active Directory, sao simuladas ou consideradas fora de scope.

Estas melhorias ajudam a evitar confusao nos labs de teste, especialmente quando um requisito existe no dossier mas nao foi implementado no prototipo.

### Conclusao

O Lab 3 e o momento em que o projeto ganha uma estrutura formal de requisitos.

A partir daqui, o trabalho deixa de depender apenas de descricoes gerais e passa a ter uma lista organizada de requisitos identificaveis, rastreaveis e reutilizaveis nos labs seguintes.

Este lab e essencial porque cria a base de rastreabilidade que vai ligar requisitos, use cases, acceptance criteria, test cases, testes unitarios, BDD e analise final de qualidade.

---

## Lab 4 - Objetivos, CSFs e REM v1

### O que foi feito

No Lab 4, os requisitos formais do Lab 3 foram ligados aos objetivos do projeto e aos fatores criticos de sucesso.

Os principais ficheiros trabalhados foram:

- `docs/objectives_fcs.md` - objetivos e Critical Success Factors;
- `docs/rem_v1.md` - Requirements Engineering Matrix em Markdown;
- `docs/REM_v1.xlsx` - matriz REM em Excel.

Este lab mostrou que os requisitos nao existem isolados. Eles apoiam objetivos como aprovacoes seguras, rastreabilidade auditavel e qualidade dos dados antes da aprovacao.

### Como este lab continua o Lab 3

O Lab 3 organizou os requisitos. O Lab 4 explicou porque esses requisitos sao importantes e como contribuem para o sucesso do projeto.

Por exemplo, `REQ-003` apoia aprovacoes seguras, `REQ-009` apoia auditoria e `REQ-004`/`REQ-005` apoiam a validacao dos dados antes da aprovacao.

### Ligacao com os restantes artefactos

A REM junta stakeholder, descricao, objetivo, prioridade, acceptance criteria iniciais, metodo de validacao, precondicoes, pos-condicoes e impacto da variante.

Isto prepara os Labs 5 e 6, porque os casos de uso passam a ter uma base mais forte, e tambem prepara o Lab 7 e os labs de testes.

### Problemas ou inconsistencias encontradas

- A REM inclui requisitos que nem todos sao implementados no prototipo.
- Alguns metodos de validacao ainda sao genericos.
- Alguns NFRs, como disponibilidade e retencao por 5 anos, sao dificeis de demonstrar num projeto universitario.

### Requisitos cobertos

O Lab 4 cobre a justificacao dos requisitos principais, sobretudo seguranca, controlo de permissoes, auditoria, qualidade dos dados, evidencia de DR, reabertura e override.

### Melhorias recomendadas

- Indicar na REM quais requisitos foram implementados e quais ficaram documentados.
- Tornar os metodos de validacao mais especificos.
- Explicar como validar NFRs dificeis de forma simplificada.

### Conclusao

O Lab 4 reforca a coerencia do projeto porque liga requisitos, objetivos, CSFs e validacao.

---

## Lab 5 - Use case diagram e primeiros casos de uso

### O que foi feito

No Lab 5, a equipa passou dos requisitos para a modelacao funcional por casos de uso.

Os principais ficheiros trabalhados foram:

- `docs/use_case_diagram.md` - limite do sistema, atores e use cases;
- `docs/use_cases.md` - primeiras descricoes de casos de uso;
- `docs/diagrams/use_case_diagram.puml` - diagrama em PlantUML.

Foram representados atores como utilizador autenticado, Transition Manager, Security Officer e System Administrator.

### Como este lab continua o Lab 4

O Lab 4 explicou objetivos e requisitos. O Lab 5 transforma esses requisitos em interacoes concretas entre utilizadores e sistema.

Assim, os requisitos sobre RBAC, evidencia de DR, aprovacao e auditoria passam a aparecer como funcionalidades visiveis no modelo.

### Ligacao com os restantes artefactos

O Lab 5 cria a primeira ponte visual entre requisitos e funcionalidades.

Ele prepara o Lab 6, onde os use cases sao refinados e ligados formalmente aos requisitos, e tambem ajuda os labs de testes, porque os fluxos dos use cases podem originar test cases e cenarios BDD.

### Problemas ou inconsistencias encontradas

- As descricoes ainda sao iniciais e ficam mais completas no Lab 6.
- Alguns use cases podem estar demasiado agregados.
- A rastreabilidade completa entre use cases e requisitos ainda nao esta formalizada neste lab.

### Requisitos cobertos

O Lab 5 ajuda a representar requisitos como `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-008` e `REQ-009`.

### Melhorias recomendadas

- Garantir que cada use case tem pelo menos um requisito associado.
- Separar melhor acoes como aprovar, reabrir e executar override.
- Manter nomes consistentes entre requisitos, use cases e testes.

### Conclusao

O Lab 5 transforma os requisitos numa representacao funcional mais facil de compreender e prepara o refinamento do Lab 6.

---

## Lab 6 - Refinamento dos use cases e rastreabilidade UC-REQ

### O que foi feito

No Lab 6, a equipa refinou o trabalho iniciado no Lab 5.

Os use cases passaram de uma primeira versao geral para uma versao mais completa, com melhor definicao de atores, fronteira do sistema, fluxos principais, fluxos alternativos, excecoes e ligacao aos requisitos.

Os principais ficheiros trabalhados neste lab foram:

- `docs/use_case_diagram_v2.md` - versao refinada do diagrama de casos de uso;
- `docs/use_cases_v2.md` - descricoes mais completas dos casos de uso;
- `docs/traceability_uc_req.md` - ligacao entre use cases e requisitos;
- `docs/diagrams/use_case_diagram_v2.puml` - diagrama PlantUML refinado.

Neste lab, os use cases passaram a cobrir melhor os fluxos principais do slice **Intake & Discovery**, incluindo login, preenchimento do Intake, evidencia de DR, aprovacao, reabertura e override.

### Como este lab continua o Lab 5

O Lab 5 respondeu a pergunta "que funcionalidades existem?". O Lab 6 melhora essa resposta, acrescentando detalhe sobre:

- quem executa cada acao;
- qual e o fluxo normal;
- que alternativas existem;
- que erros podem acontecer;
- que requisitos sao cobertos por cada use case.

Assim, os casos de uso tornam-se mais uteis para validacao e testes.

### Ligacao com os restantes artefactos

O ponto mais importante do Lab 6 e a rastreabilidade entre use cases e requisitos.

O ficheiro `traceability_uc_req.md` mostra que:

- `UC-01` esta ligado a identidade e autenticacao;
- `UC-02` esta ligado ao preenchimento dos dados base do Intake;
- `UC-03` esta ligado a evidencia de Disaster Recovery;
- `UC-04` esta ligado a aprovacao, RBAC, validacao e auditoria;
- `UC-05` esta ligado a reabertura controlada;
- `UC-06` esta ligado a override e reautenticacao.

Esta ligacao e importante porque mostra que os requisitos nao ficam soltos: cada requisito passa a ter representacao funcional no comportamento esperado do sistema.

O Lab 6 prepara diretamente o Lab 7, porque os use cases ajudam a validar requisitos e criar acceptance criteria. Tambem prepara o Lab 8, ao ajudar a escolher o scope do prototipo, e os Labs 9 a 13, porque os testes precisam de fluxos claros.

### Problemas ou inconsistencias encontradas

- Alguns use cases cobrem varios requisitos ao mesmo tempo, o que e util mas pode tornar a rastreabilidade mais complexa.
- `NFR-002`, relacionado com logs, aparece como transversal e nao como use case autonomo.
- Funcionalidades como login real com diretorio corporativo continuam a ser mais documentais ou simuladas do que implementadas.
- Alguns fluxos descritos podem ser mais completos do que aquilo que depois foi implementado no prototipo.

Estas situacoes sao aceitaveis, desde que fique clara a diferenca entre comportamento especificado, comportamento prototipado e comportamento testado.

### Requisitos cobertos

O Lab 6 reforca a cobertura dos requisitos atraves dos use cases:

- `REQ-001` - dados base do Intake;
- `REQ-002` - evidencia de DR;
- `REQ-003` - aprovacao por RBAC;
- `REQ-004` - bloqueio por informacao incompleta;
- `REQ-005` - validade da evidencia de DR;
- `REQ-006` - identidade e roles;
- `REQ-007` - reabertura controlada;
- `REQ-008` - override com reautenticacao;
- `REQ-009` - logs de tentativas nao autorizadas.

Tambem ficam associados alguns NFRs, especialmente seguranca, usabilidade e auditoria.

### Melhorias recomendadas

Para melhorar o Lab 6, seria util:

- indicar em cada use case quais fluxos foram implementados no prototipo e quais ficaram apenas especificados;
- separar melhor fluxos de erro de fluxos alternativos;
- explicar melhor porque alguns NFRs sao transversais e nao aparecem como use cases proprios;
- usar estes fluxos como base direta para test cases e cenarios BDD.

### Conclusao

O Lab 6 transforma os casos de uso numa ferramenta real de rastreabilidade.

Depois deste lab, o projeto deixa de ter apenas requisitos escritos e passa a ter tambem uma visao funcional mais completa dos comportamentos esperados.

---

## Lab 7 - Validacao de requisitos, acceptance criteria e Definition of Done

### O que foi feito

No Lab 7, a equipa validou os requisitos existentes e transformou parte deles em acceptance criteria mais claros e testaveis.

Os principais ficheiros trabalhados foram:

- `docs/requirements_validation.md` - registo da validacao dos requisitos;
- `docs/acceptance_criteria.md` - criterios de aceitacao por requisito;
- `docs/definition_of_done.md` - regras para considerar requisitos e user stories como concluidos.

Este lab ajudou a confirmar se os requisitos faziam sentido para o projeto e se estavam suficientemente claros para serem testados.

### Como este lab continua o Lab 6

O Lab 6 mostrou os comportamentos esperados atraves de use cases. O Lab 7 usa essa informacao para validar os requisitos e escrever criterios de aceitacao mais objetivos.

Por exemplo, os fluxos de aprovacao, bloqueio por falta de evidencia, reabertura e override passam a ter condicoes mais claras de sucesso ou falha.

### Ligacao com os restantes artefactos

O Lab 7 e uma ponte direta para os labs de testes.

Os acceptance criteria definidos aqui servem de base para:

- test cases do Lab 9;
- test plan do Lab 10;
- testes test-first do Lab 11;
- testes unitarios do Lab 12;
- cenarios BDD do Lab 13;
- rastreabilidade final do Lab 14.

### Problemas ou inconsistencias encontradas

- Nem todos os requisitos recebem o mesmo nivel de detalhe nos acceptance criteria.
- Alguns criterios continuam mais documentais do que diretamente automatizaveis.
- NFRs como disponibilidade, retencao e compatibilidade continuam mais dificeis de validar com testes simples.

### Requisitos cobertos

Este lab cobre principalmente `REQ-002`, `REQ-003`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`, `REQ-008` e `REQ-009`.

### Melhorias recomendadas

- Associar cada acceptance criterion a um ID simples, como `AC-REQ003-01`.
- Indicar logo se cada criterio sera validado por teste manual, unitario, BDD ou revisao.
- Separar melhor criterios funcionais de criterios nao funcionais.

### Conclusao

O Lab 7 transforma requisitos em condicoes verificaveis. E um lab essencial porque prepara a passagem da engenharia de requisitos para a area de testes.

---

## Lab 8 - Prototipo gerado e scope implementado

### O que foi feito

No Lab 8, a equipa escolheu um conjunto limitado de requisitos e gerou um prototipo executavel com apoio de IA.

Os principais ficheiros trabalhados foram:

- `docs/generated_scope.md` - define o scope escolhido para o prototipo;
- `docs/vibe_coding_log.md` - regista as iteracoes, prompts, resultados e observacoes;
- `LovableApp/scope-prototype-main/` - contem o prototipo executavel.

O foco foi criar uma demonstracao pequena mas coerente do slice **Intake & Discovery**, sem tentar implementar todo o sistema.

### Como este lab continua o Lab 7

O Lab 7 definiu criterios de aceitacao. O Lab 8 usa parte desses requisitos e criterios para escolher o que seria prototipado.

O prototipo representa principalmente comportamentos ligados a aprovacao, validacao de dados, evidencia de DR e controlo de permissoes.

### Ligacao com os restantes artefactos

O Lab 8 cria uma primeira implementacao visivel do trabalho anterior.

Ele liga:

- requisitos v1;
- use cases v2;
- acceptance criteria;
- scope implementado;
- observacoes de execucao.

Tambem serve de base para os labs de testes seguintes, embora nem todos os requisitos documentados tenham sido implementados.

### Problemas ou inconsistencias encontradas

- Nem todos os requisitos do dossier foram implementados no prototipo.
- Algumas funcionalidades, como autenticacao real, diretorio corporativo e retencao real de logs, ficam simuladas ou fora de scope.
- O prototipo e util para demonstracao, mas nao substitui testes formais.

### Requisitos cobertos

O Lab 8 cobre sobretudo o comportamento associado a validacao do Intake, aprovacao controlada, evidencia de DR e parte do controlo por roles.

### Melhorias recomendadas

- Deixar ainda mais visivel que requisitos ficaram fora do scope implementado.
- Ligar cada funcionalidade do prototipo ao requisito e acceptance criterion correspondente.
- Registar screenshots ou evidencias de execucao sempre que possivel.

### Conclusao

O Lab 8 transforma parte da documentacao em algo executavel. A sua importancia esta em mostrar que a linha de requisitos pode originar um prototipo funcional, mesmo que limitado.

---

## Lab 9 - Test cases e rastreabilidade REQ-TC

### O que foi feito

No Lab 9, a equipa iniciou formalmente a area de testes, criando test cases para validar os principais requisitos.

Os principais ficheiros trabalhados foram:

- `docs/test_cases.md` - lista de casos de teste;
- `docs/traceability_req_tc.md` - matriz entre requisitos e test cases;
- `docs/lab9.vpp` - ficheiro Visual Paradigm;
- `docs/diagrams/test_cases_lab9.png` - evidencia/exportacao visual.

Os testes incluem percursos felizes, fluxos alternativos, testes negativos e alguns casos de fronteira.

### Como este lab continua o Lab 8

O Lab 8 mostrou um prototipo. O Lab 9 pergunta: como podemos testar os comportamentos definidos e/ou prototipados?

Aqui, os requisitos e acceptance criteria passam a ser traduzidos em casos de teste concretos.

### Ligacao com os restantes artefactos

O Lab 9 liga diretamente requisitos a testes. Isto e essencial para provar cobertura.

A matriz `traceability_req_tc.md` ajuda a perceber que requisitos estao cobertos por test cases e quais precisam de mais atencao.

### Problemas ou inconsistencias encontradas

- `REQ-001` foi removido da matriz porque nao fazia parte do scope implementado.
- Alguns test cases cobrem mais do que um requisito, o que e util mas pode complicar a leitura.
- Alguns NFRs continuam sem validacao automatica completa.

### Requisitos cobertos

O Lab 9 cobre principalmente `REQ-002` a `REQ-009`, alem de alguns NFRs relacionados com usabilidade, logs e compatibilidade.

### Melhorias recomendadas

- Manter uma numeracao consistente dos test cases, evitando saltos sem explicacao.
- Indicar claramente quais testes sao manuais e quais poderao ser automatizados.
- Ligar cada test case a acceptance criteria especificos, nao apenas ao requisito geral.

### Conclusao

O Lab 9 e importante porque inicia a validacao sistematica do projeto. A partir daqui, os requisitos passam a ter testes associados.

---

## Lab 10 - Test plan, rastreabilidade REQ-AC-TC e revisao de AC/DoD

### O que foi feito

No Lab 10, a equipa consolidou a estrategia de testes e melhorou a rastreabilidade entre requisitos, acceptance criteria e test cases.

Os principais ficheiros trabalhados foram:

- `docs/test_plan.md` - plano de testes;
- `docs/traceability_req_ac_tc.md` - ligacao entre requisitos, AC, test cases e BDD;
- `docs/ac_dod_updates.md` - melhorias nos acceptance criteria e Definition of Done.

### Como este lab continua o Lab 9

O Lab 9 criou test cases. O Lab 10 organiza esses testes dentro de uma estrategia mais ampla, incluindo testes estaticos, unitarios, integracao, sistema, aceitacao e BDD.

Tambem revê acceptance criteria e DoD com base nas lacunas encontradas nos testes.

### Ligacao com os restantes artefactos

O Lab 10 reforca a rastreabilidade:

`Requirement -> Acceptance Criteria -> Test Case / BDD -> Evidence`

Isto prepara diretamente os Labs 11, 12 e 13, onde os testes passam a ser implementados e executados.

### Problemas ou inconsistencias encontradas

- Alguns requisitos continuam com cobertura apenas documental ou planeada.
- BDD ainda aparece em parte como plano, sendo automatizado so mais tarde.
- A diferenca entre testes manuais, planeados e automatizados precisa de estar sempre clara.

### Requisitos cobertos

O Lab 10 cobre os principais requisitos funcionais e alguns NFRs, ligando-os a criterios de aceitacao e casos de teste.

### Melhorias recomendadas

- Marcar explicitamente o estado de cada teste: planeado, manual, automatizado ou nao aplicavel.
- Garantir que cada acceptance criterion tem pelo menos uma forma de validacao.
- Separar melhor cobertura real de cobertura futura.

### Conclusao

O Lab 10 organiza a estrategia de testes e melhora a qualidade da rastreabilidade. E um ponto de consolidacao antes da automacao.

---

## Lab 11 - Test-first, primeiros testes automatizados e BDD inicial

### O que foi feito

No Lab 11, a equipa aplicou uma abordagem test-first: escolher requisitos, escrever testes antes ou em paralelo com a implementacao minima, e registar as decisoes.

O principal ficheiro documental foi:

- `docs/test_first_log.md` - registo do scope escolhido, testes, resultados, BDD e decisoes.

Tambem foram trabalhados ficheiros de testes e comportamento no codigo do projeto.

### Como este lab continua o Lab 10

O Lab 10 planeou os testes. O Lab 11 comeca a executar essa estrategia em pequena escala.

O foco passa a estar em requisitos adequados a automacao, especialmente `REQ-003`, `REQ-005` e `REQ-009`.

### Ligacao com os restantes artefactos

O Lab 11 liga requisitos e acceptance criteria a testes reais. Serve como base para o Lab 12, onde os testes unitarios sao consolidados, e para o Lab 13, onde BDD e automatizado.

### Problemas ou inconsistencias encontradas

- O scope e limitado a poucos requisitos, por isso nem todo o sistema fica automatizado.
- Algumas regras sao simuladas em vez de integradas com servicos reais.
- A automacao valida regras essenciais, mas nao substitui testes end-to-end completos.

### Requisitos cobertos

O Lab 11 foca principalmente:

- `REQ-003` - aprovacao por RBAC;
- `REQ-005` - validade temporal da evidencia de DR;
- `REQ-009` - criacao de audit logs.

### Melhorias recomendadas

- Manter no log a ligacao exata entre cada teste e cada acceptance criterion.
- Distinguir melhor testes unitarios de cenarios BDD.
- Indicar que partes da implementacao sao simuladas.

### Conclusao

O Lab 11 e o primeiro passo forte de automacao. Ele mostra que alguns requisitos centrais ja podem ser validados por testes executaveis.

---

## Lab 12 - Unit tests com PyTest e evidencia de execucao

### O que foi feito

No Lab 12, a equipa consolidou os testes unitarios com PyTest e registou evidencia de execucao.

Os principais ficheiros trabalhados foram:

- `docs/unit_test_report.md` - relatorio dos testes unitarios;
- `docs/test_execution.md` - instrucoes para executar os testes.

Foram documentados testes para regras de aprovacao por roles, validade da evidencia de DR e audit logs.

### Como este lab continua o Lab 11

O Lab 11 introduziu a abordagem test-first. O Lab 12 organiza essa automacao em relatorio, comandos e evidencia.

O objetivo deixa de ser apenas escrever testes e passa a ser demonstrar que eles existem, correm e validam requisitos especificos.

### Ligacao com os restantes artefactos

O Lab 12 reforca a ligacao entre:

- requisitos;
- acceptance criteria;
- funcoes testadas;
- assertions;
- resultado de execucao.

Tambem prepara o Lab 14, porque os testes unitarios passam a fazer parte da evidencia final de qualidade.

### Problemas ou inconsistencias encontradas

- Os testes unitarios cobrem apenas uma parte do sistema.
- Alguns requisitos continuam sem automacao.
- Nao ha teste UI/Selenium neste lab.
- A persistencia real de logs continua simulada.

### Requisitos cobertos

O Lab 12 cobre principalmente `REQ-003`, `REQ-005` e `REQ-009`.

### Melhorias recomendadas

- Adicionar testes unitarios para mais requisitos, se houver tempo.
- Separar testes de regras de negocio de testes de persistencia simulada.
- Manter os comandos de execucao sempre atualizados no README.

### Conclusao

O Lab 12 e importante porque transforma os testes em evidencia clara. Ele mostra que algumas regras criticas do projeto sao verificadas automaticamente.

---

## Lab 13 - BDD automatizado e rastreabilidade REQ-BDD

### O que foi feito

No Lab 13, a equipa automatizou cenarios BDD e documentou a sua execucao.

Os principais ficheiros trabalhados foram:

- `docs/bdd_report.md` - relatorio de automacao BDD;
- `docs/traceability_req_bdd.md` - ligacao entre requisitos e cenarios BDD;
- ficheiros em `bdd/features/` e step definitions.

Os cenarios BDD focam comportamentos como aprovacao autorizada, bloqueio por role nao autorizada, validade da evidencia de DR e criacao/persistencia simulada de audit logs.

### Como este lab continua o Lab 12

O Lab 12 validou regras atraves de testes unitarios. O Lab 13 valida comportamentos numa linguagem mais proxima do negocio, usando Given/When/Then.

Assim, os testes ficam mais faceis de relacionar com acceptance criteria e comportamento esperado.

### Ligacao com os restantes artefactos

O Lab 13 liga:

- requisitos;
- acceptance criteria;
- cenarios BDD;
- automacao;
- evidencia de execucao.

Esta ligacao entra depois na rastreabilidade consolidada do Lab 14.

### Problemas ou inconsistencias encontradas

- O BDD cobre apenas requisitos selecionados.
- Alguns comportamentos continuam simulados.
- Nem todos os cenarios planeados nos labs anteriores foram necessariamente automatizados.

### Requisitos cobertos

O Lab 13 cobre principalmente:

- `REQ-003` - aprovacao por RBAC;
- `REQ-005` - validade temporal da evidencia de DR;
- `REQ-009` - auditoria de tentativas nao autorizadas.

### Melhorias recomendadas

- Acrescentar cenarios BDD para `REQ-004`, `REQ-007` e `REQ-008`.
- Garantir que cada scenario tem ligacao explicita a um acceptance criterion.
- Manter os nomes dos cenarios consistentes com os nomes dos test cases.

### Conclusao

O Lab 13 aproxima os testes da linguagem do negocio. Ele mostra que os comportamentos principais podem ser descritos e executados de forma compreensivel.

---

## Lab 14 - Traceability, gap analysis e manutencao dos testes

### O que foi feito

No Lab 14, a equipa consolidou a qualidade do projeto e fez uma revisao final da rastreabilidade e dos testes.

Os principais ficheiros trabalhados foram:

- `docs/traceability_master.md` - matriz final de rastreabilidade;
- `docs/gap_analysis_lab14.md` - analise de lacunas;
- `docs/test_retrocompatibility.md` - verificacao de compatibilidade dos testes com alteracoes;
- `docs/test_grooming_report.md` - relatorio de limpeza e melhoria dos testes.

### Como este lab continua o Lab 13

O Lab 13 automatizou BDD. O Lab 14 olha para todo o percurso e verifica se requisitos, acceptance criteria, test cases, unit tests e BDD continuam alinhados.

E um lab de manutencao e consolidacao.

### Ligacao com os restantes artefactos

O Lab 14 liga praticamente todos os documentos anteriores:

- requisitos v1;
- acceptance criteria;
- use cases;
- test cases;
- unit tests;
- BDD scenarios;
- relatorios de execucao;
- lacunas e melhorias.

E a visao mais completa da qualidade do projeto.

### Problemas ou inconsistencias encontradas

- Nem todos os requisitos tem automacao completa.
- Alguns requisitos existem documentalmente mas nao foram implementados.
- Alguns NFRs continuam com cobertura limitada.
- A rastreabilidade e forte para `REQ-003`, `REQ-005` e `REQ-009`, mas mais fraca para requisitos fora do scope automatizado.

### Requisitos cobertos

O Lab 14 cobre a revisao global de todos os requisitos, distinguindo entre:

- requisitos com automacao;
- requisitos com test cases manuais/documentais;
- requisitos planeados ou parcialmente cobertos;
- lacunas ainda existentes.

### Melhorias recomendadas

- Priorizar automatizacao adicional para `REQ-004`, `REQ-007` e `REQ-008`.
- Clarificar no dossier final quais requisitos foram implementados, testados manualmente, automatizados ou apenas especificados.
- Rever NFRs para garantir que todos tem uma forma minima de validacao.
- Manter a matriz final como fonte principal para a entrega.

### Conclusao

O Lab 14 fecha o ciclo do projeto. Ele mostra a evolucao desde requisitos ate testes e evidencia, identificando tambem o que ainda pode ser melhorado antes da entrega final.

Este lab e essencial porque transforma o conjunto de documentos num dossier coerente, rastreavel e defensavel.

---

## Conclusao geral dos Labs 1 a 14

Ao longo dos labs, o projeto evoluiu de uma ideia inicial para um dossier completo de requisitos, modelacao, prototipo, testes e manutencao de qualidade.

A linha logica principal foi:

1. definir o projeto, a variante e o scope;
2. recolher necessidades e criar requisitos iniciais;
3. formalizar requisitos e organiza-los em backlog;
4. ligar requisitos a objetivos e CSFs;
5. modelar funcionalidades com use cases;
6. validar requisitos e criar acceptance criteria;
7. gerar um prototipo limitado;
8. criar test cases e plano de testes;
9. automatizar parte dos testes com PyTest e BDD;
10. consolidar rastreabilidade, lacunas e manutencao dos testes.

O projeto mantem uma linha coerente centrada no slice **Intake & Discovery** e na **Variante 3**, com foco em seguranca, RBAC, validacao de evidencia e auditoria.

As principais lacunas finais estao ligadas a requisitos que ficaram mais documentais do que implementados, NFRs dificeis de testar e cobertura automatizada limitada a alguns requisitos principais.
