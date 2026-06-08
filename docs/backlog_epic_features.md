# Backlog

## Objetivo

Este documento define a estrutura oficial do backlog funcional do projeto com:

- 1 Epic
- 10 Features
- User Stories
- Requisitos associados
- Use Cases associados
- Critérios de Aceitação sintetizados

O objetivo é servir de referência única para a relação entre Epic, Features, User Stories, Requisitos, Use Cases e Critérios de Aceitação em todo o dossier.

---

## Epic

### EPIC-01 — Controlo de Segurança e Autorização (RBAC) no Intake & Discovery

**Objetivo do épico:** garantir que o processo de Intake só avança com dados válidos, evidência suficiente e ações críticas protegidas por autenticação, autorização e auditoria.

---

## Features

### FEAT-01 — Autenticar utilizador no módulo de Intake

- **User Story:** `US-001` — Como utilizador autenticado, quero iniciar sessão com a minha identidade corporativa para aceder ao módulo de Intake com permissões válidas.
- **Requisitos:** `REQ-006`
- **Use Cases:** `UC-01`
- **Critérios de Aceitação:**
  - O sistema autentica o utilizador através do diretório corporativo.
  - Contas desativadas ou inválidas não conseguem iniciar sessão.
  - O utilizador autenticado entra no módulo com a role correta atribuída.

### FEAT-02 — Atribuir permissões com base em roles corporativas

- **User Story:** `US-002` — Como Security Officer, quero que as permissões sejam atribuídas com base nas roles corporativas para que só perfis autorizados executem ações críticas.
- **Requisitos:** `REQ-003`, `REQ-006`
- **Use Cases:** `UC-01`, `UC-04`, `UC-05`, `UC-06`
- **Critérios de Aceitação:**
  - O sistema mapeia a role do utilizador a partir do diretório corporativo.
  - Apenas roles autorizadas podem aprovar, reabrir ou executar override.
  - Perfis sem autorização recebem bloqueio ao tentar aceder a ações críticas.

### FEAT-03 — Preencher dados obrigatórios do Intake

- **User Story:** `US-003` — Como Transition Manager, quero preencher os dados obrigatórios de infraestrutura e contactos para preparar o Intake para validação e aprovação.
- **Requisitos:** `REQ-001`
- **Use Cases:** `UC-02`
- **Critérios de Aceitação:**
  - O formulário inclui os campos necessários para infraestrutura, contactos operacionais e escalamento.
  - Os dados introduzidos ficam guardados no Intake correto.
  - O Intake pode ser retomado posteriormente sem perda da informação guardada.

### FEAT-04 — Anexar evidência de Disaster Recovery

- **User Story:** `US-004` — Como Transition Manager, quero anexar a evidência de Disaster Recovery para provar que o serviço tem suporte documental antes da aprovação.
- **Requisitos:** `REQ-002`
- **Use Cases:** `UC-03`
- **Critérios de Aceitação:**
  - O sistema permite anexar um ficheiro PDF como evidência de DR.
  - O ficheiro fica associado ao Intake correto.
  - O documento anexado fica disponível para validação posterior no processo de aprovação.

### FEAT-05 — Validar completude antes da aprovação

- **User Story:** `US-005` — Como Transition Manager, quero que o sistema valide a completude do Intake antes da aprovação para impedir decisões com informação em falta.
- **Requisitos:** `REQ-004`
- **Use Cases:** `UC-04`
- **Critérios de Aceitação:**
  - O sistema valida os campos obrigatórios quando é pedida a aprovação.
  - O sistema bloqueia a aprovação se existirem dados obrigatórios em falta.
  - O estado do Intake mantém-se em `Draft` quando a validação falha.
  - As mensagens de erro indicam claramente o que falta corrigir.

### FEAT-06 — Validar validade temporal da evidência de DR

- **User Story:** `US-006` — Como Transition Manager, quero que a evidência de DR seja validada temporalmente para evitar aprovações com documentação desatualizada.
- **Requisitos:** `REQ-005`
- **Use Cases:** `UC-03`, `UC-04`
- **Critérios de Aceitação:**
  - O sistema rejeita evidência de DR com mais de 12 meses.
  - O sistema rejeita evidência com data futura.
  - A rejeição informa que a evidência está fora do prazo aceite.

### FEAT-07 — Aprovar Intake com autorização explícita

- **User Story 1:** `US-007` — Como Transition Manager, quero aprovar um Intake válido para permitir a transição para a fase seguinte.
- **User Story 2:** `US-008` — Como Security Officer, quero poder aprovar um Intake quando necessário para assegurar controlo e governação do processo.
- **Requisitos:** `REQ-003`, `REQ-004`, `REQ-005`
- **Use Cases:** `UC-04`
- **Critérios de Aceitação:**
  - Só utilizadores autorizados conseguem concluir a aprovação.
  - A aprovação só é permitida quando os dados obrigatórios e a evidência de DR estão válidos.
  - Em caso de sucesso, o estado do Intake muda para `Aprovado`.
  - Em caso de tentativa sem permissão, o sistema apresenta `Acesso Negado`.

### FEAT-08 — Reabrir Intake aprovado com controlo de permissões

- **User Story:** `US-009` — Como Security Officer, quero reabrir um Intake aprovado para permitir correções controladas sem perder rastreabilidade.
- **Requisitos:** `REQ-007`
- **Use Cases:** `UC-05`
- **Critérios de Aceitação:**
  - Apenas perfis autorizados podem reabrir um Intake aprovado.
  - Ao reabrir, o estado muda para `Reaberto`.
  - Um Intake reaberto volta a permitir edição autorizada.
  - Uma tentativa sem permissão é bloqueada.

### FEAT-09 — Executar override com reautenticação e justificação

- **User Story:** `US-010` — Como Security Officer, quero executar um override com reautenticação e justificação para corrigir dados aprovados de forma excecional e controlada.
- **Requisitos:** `REQ-008`
- **Use Cases:** `UC-06`
- **Critérios de Aceitação:**
  - O override exige password e justificação obrigatória.
  - A confirmação só fica disponível quando a justificação tem pelo menos 20 caracteres.
  - Password incorreta impede o override.
  - Em caso de sucesso, a edição excecional fica autorizada com registo de justificação.

### FEAT-10 — Registar e reter eventos de segurança

- **User Story 1:** `US-011` — Como Security Officer, quero que tentativas não autorizadas sejam registadas para apoiar auditoria e investigação.
- **User Story 2:** `US-012` — Como System Administrator, quero que os logs sejam retidos com integridade e que sessões inativas expirem para reduzir risco operacional.
- **Requisitos:** `REQ-009`, `NFR-001`, `NFR-002`
- **Use Cases:** `UC-04`, `UC-05`, `UC-06`
- **Critérios de Aceitação:**
  - O sistema regista tentativas não autorizadas de aprovação, reabertura e override.
  - Cada log inclui identificador do utilizador, ação tentada e timestamp UTC.
  - As sessões expiram após 15 minutos de inatividade.
  - Os logs permanecem disponíveis para consulta durante pelo menos 5 anos, e tentativas não autorizadas de alteração ou eliminação são rejeitadas e registadas.

---

## Verificação de Cobertura

### Cobertura de requisitos funcionais

- `REQ-001` -> `FEAT-03`
- `REQ-002` -> `FEAT-04`
- `REQ-003` -> `FEAT-02`, `FEAT-07`
- `REQ-004` -> `FEAT-05`
- `REQ-005` -> `FEAT-06`, `FEAT-07`
- `REQ-006` -> `FEAT-01`, `FEAT-02`
- `REQ-007` -> `FEAT-08`
- `REQ-008` -> `FEAT-09`
- `REQ-009` -> `FEAT-10`

### Cobertura de requisitos não funcionais

- `NFR-001` -> `FEAT-10`
- `NFR-002` -> `FEAT-10`
- `NFR-005` -> transversal em `FEAT-05`, `FEAT-07`, `FEAT-08` e `FEAT-09`

---

## Observações de Estrutura

- Esta estrutura passa a ser a base de organização do backlog ao longo do dossier.
- `REQ-001` a `REQ-009` mantêm-se válidos, mas devem ser lidos dentro desta nova organização funcional.
- `NFR-003`, `NFR-004` e `NFR-006` mantêm-se como restrições transversais do módulo e não como features autónomas.
