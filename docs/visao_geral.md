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
