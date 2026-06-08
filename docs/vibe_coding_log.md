# Log de Vibe Coding — Lab 8

## App

- Projeto Lovable: `https://lovable.dev/projects/3067d8e5-543b-43dc-9435-5116c68b2080`
- Caminho local do protótipo: `LovableApp/scope-prototype-main`

## Objetivo

Este documento regista o processo iterativo de geração do protótipo com apoio de IA no `Lab 8`.

O objetivo foi gerar um protótipo executável para um único slice, mantendo rastreabilidade com requisitos, use cases e acceptance criteria, sem expandir o scope definido em `docs/generated_scope.md`.

---

## Ferramenta usada

- `Ferramenta / modelo usado: Lovable`
- `Contexto fornecido à IA: generated_scope + requirements + use cases + acceptance criteria`
- `Data: 2026-05-05`
- `Protótipo local: LovableApp/scope-prototype-main`

---

## Iteração 1 — Geração inicial

### Ficheiros usados

- `docs/generated_scope.md`
- `docs/acceptance_criteria.md`
- `docs/use_cases_v2.md`
- `docs/requirements_v0.md`

### Prompt

```text
Cria um protótipo executável apenas para o slice definido nos ficheiros anexos.

Fontes de verdade:

- `docs/generated_scope.md`

- `docs/acceptance_criteria.md`

- `docs/use_cases_v2.md`

- `docs/requirements_v0.md`

Instruções:

- Implementa apenas o scope explicitamente definido em `generated_scope.md`.

- Usa `acceptance_criteria.md` para o comportamento observável e validações.

- Usa `use_cases_v2.md` apenas para o fluxo do slice relevante.

- Não implementes nada fora do scope.

- Não adiciones funcionalidades extra, páginas extra, autenticação real, dashboards, logs completos, reabertura, override, ou integrações externas, a menos que estejam explicitamente no scope.

- Mantém a app pequena, clara e fácil de demonstrar.

- Garante pelo menos:

  - 1 happy path

  - 1 alternative flow

  - 1 error/exception path

- Reflete as restrições da variante indicadas nos ficheiros.

- Se houver ambiguidade, escolhe a opção mais restritiva e mais alinhada com os ficheiros, sem expandir scope.

Objetivo:

Gerar apenas um protótipo académico mínimo, coerente e rastreável aos ficheiros anexos.
```

### Resultado gerado

- Foi gerada uma app mínima de página única para demonstrar o slice `Evidência metadata capture -> validation`.
- A app incluiu formulário de Intake com campos de serviço, responsável operacional, data de evidência de DR e anexo PDF.
- Foi incluído um seletor de role para simular permissões: `Transition Manager`, `Security Officer` e role não autorizada.
- Foram implementadas validações para campos obrigatórios, evidência em falta, data futura e evidência com mais de 12 meses.
- A app apresentou mensagens inline no mesmo ecrã, alinhadas com `NFR-005`.

### Mantido

- Estrutura de protótipo pequeno e executável.
- Formulário de evidência de DR.
- Validação de PDF/evidência obrigatória.
- Validação temporal da evidência de DR.
- Simulação de roles para demonstrar a Variante 3.
- Bloqueio de role não autorizada.
- Mensagens de erro visíveis no mesmo ecrã.

### Rejeitado

- A primeira versão permitia que o `Security Officer` preenchesse e anexasse evidência da mesma forma que o `Transition Manager`.
- Esse comportamento foi rejeitado por não refletir corretamente o dossiê, onde o `Transition Manager` é o ator operacional principal e o `Security Officer` é uma role de controlo/governação.

### Verificação manual

- `Happy path verificado:` `Transition Manager` preenche os campos obrigatórios, anexa evidência de DR com data válida e consegue concluir a ação.
- `Alternative flow verificado:` submissão com dados em falta ou evidência inválida é bloqueada e o Intake permanece em `Draft`.
- `Exception / error path verificado:` role não autorizada tenta concluir a ação e recebe bloqueio por falta de permissão.

### Alterações feitas após a geração

- Foi preparada uma segunda iteração para corrigir as permissões entre `Transition Manager` e `Security Officer`.

---

## Iteração 2 — Correção de role

### Ficheiros usados

- `docs/generated_scope.md`
- `docs/use_cases_v2.md`
- `docs/acceptance_criteria.md`
- `docs/requirements_v1.md`

### Prompt

```text
Corrige o protótipo existente para ficar estritamente alinhado com os ficheiros anexos, que são a única fonte de verdade:

- `docs/generated_scope.md`

- `docs/use_cases_v2.md`

- `docs/acceptance_criteria.md`

- `docs/requirements_v1.md`

Segue estes ficheiros literalmente. Se houver dúvida, prevalece sempre a interpretação mais restritiva e mais próxima dos ficheiros. Não inventes comportamento, permissões, páginas, campos ou fluxos que não estejam suportados nesses documentos.

Correções obrigatórias de roles e permissões:

- O `Transition Manager` é o ator operacional principal do slice.

- Só o `Transition Manager` pode preencher o formulário de Intake.

- Só o `Transition Manager` pode anexar a evidência de DR.

- O `Security Officer` não pode preencher o formulário.

- O `Security Officer` não pode anexar evidência de DR no fluxo normal.

- O `Security Officer` deve aparecer apenas como role de controlo/governação dentro deste slice.

- O `Security Officer` pode existir como role autorizada de suporte, mas não como ator operacional de preparação do Intake.

- Mantém claramente a distinção entre role autorizada e role não autorizada.

Restrições de implementação:

- Não alterar o scope definido em `generated_scope.md`.

- Não adicionar novas funcionalidades.

- Não criar novas páginas.

- Não criar novos fluxos.

- Não adicionar autenticação real, dashboards, logs completos, reabertura, override ou integrações externas.

- Não expandir o protótipo além do slice já definido.

Objetivo da correção:

Ajustar apenas permissões, visibilidade e comportamento das roles para que o protótipo reflita estritamente o dossiê anexado, mantendo o mesmo slice e a mesma dimensão do protótipo.
```

### Resultado gerado

- O `Transition Manager` manteve a capacidade operacional de preencher o formulário e anexar evidência de DR.
- O `Security Officer` passou a visualizar o Intake sem poder editar campos nem anexar evidência.
- O `Security Officer` manteve capacidade de aprovar como role de controlo/governação, coerente com `UC-04`, onde aparece como supporting actor.
- A role não autorizada continua bloqueada ao tentar aprovar.
- O scope manteve-se limitado ao slice definido, sem novas páginas ou funcionalidades fora do lab.

### Mantido

- Slice único `B — Evidência metadata capture -> validation`.
- Formulário mínimo de evidência de DR.
- Validações obrigatórias de completude e validade temporal.
- Controlo por role.
- Mensagens de erro inline.
- Estado `Draft` / `Aprovado` para demonstrar o resultado do fluxo.

### Rejeitado

- Qualquer expansão para autenticação real, Active Directory, dashboard, reabertura, override ou logs completos.
- Qualquer comportamento que tornasse o `Security Officer` ator operacional de preparação do Intake.

### Verificação manual

- `Happy path verificado:` `Transition Manager` preenche o formulário, anexa evidência de DR válida, usa data dentro dos últimos 365 dias e aprova o Intake.
- `Alternative flow verificado:` `Security Officer` consegue consultar e aprovar um Draft válido como role de governação, mas não consegue editar campos nem anexar evidência.
- `Exception / error path verificado:` role `Viewer` tenta aprovar e recebe `Acesso Negado`; submissão com campos obrigatórios em falta, PDF em falta, data futura ou data com mais de 365 dias é bloqueada com mensagens inline.

### Alterações feitas após a geração

- A app final foi colocada no repositório em `LovableApp/scope-prototype-main`.
- O scope e o log foram atualizados para refletir a versão final do protótipo.

---

## Verificação local

- `npm install` executado em `LovableApp/scope-prototype-main`.
- `npm run build` concluído com sucesso.
- `npm test` concluído com sucesso: `1` ficheiro de teste passou, `1` teste passou.

Nota: após `npm install`, o `npm audit` reportou vulnerabilidades em dependências do projeto gerado. Não foram corrigidas neste lab porque o objetivo do `Lab 8` é prototipagem e validação de scope, não hardening de dependências.

---

## Notas (lições aprendidas)

- O prompt inicial gerou uma app funcional, mas precisou de uma segunda iteração para alinhar corretamente as responsabilidades das roles.
- Foi importante tornar explícito que `Transition Manager` é o ator operacional e que `Security Officer` é uma role de controlo/governação.
- A limitação do scope evitou que a app crescesse para funcionalidades fora do Lab 8, como autenticação real, reabertura, override ou auditoria completa.
