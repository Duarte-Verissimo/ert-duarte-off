# Lab 14 — Análise de Gaps

## Objetivo

Identificar lacunas de cobertura, automação e rastreabilidade nos testes existentes, sem criar novos testes nesta sprint. O objetivo é documentar os gaps de forma honesta e propor ações pequenas ou futuras.

## Resumo dos gaps

| ID | Gap | Impacto | Ação recomendada |
| --- | --- | --- | --- |
| GAP-001 | `REQ-001` existe em `requirements_v1.md`, mas foi removido do scope implementado no Lovable e não tem TC dedicado. | Requisito funcional sem cobertura de testes no dossiê atual. | Manter marcado como fora de scope com justificação; se voltar ao scope, criar TC e cenários BDD próprios. |
| GAP-002 | `REQ-002` tem TC documental, mas não tem PyTest/Behave executável no Lab 13. | Evidência de anexação de DR não é automática. | Adicionar automação futura se o domínio passar a ter regra Python testável para anexos; manter cobertura documental em `TC-001` e `TC-002`. |
| GAP-003 | `REQ-004` tem TC documental, mas não tem UT/BDD dedicado. | Bloqueio por informação incompleta não é validado automaticamente. | Criar cenário futuro se a função de aprovação passar a modelar campos obrigatórios ou evidência em falta. |
| GAP-004 | `REQ-006` depende de Active Directory/SSO real e está apenas planeado por TC. | Automação local não cobre identidade corporativa. | Marcar como fora de scope da stack Python pura; para futuro, usar mocks/contratos de integração. |
| GAP-005 | `REQ-007` e `REQ-008` têm TCs e BDD documental anterior, mas não têm automação executável. | Reabertura e override não são cobertos por Behave/PyTest. | Adicionar funções testáveis futuras antes de automatizar; não duplicar lógica nos steps. |
| GAP-006 | `REQ-009` está automatizado para aprovação não autorizada, mas não cobre reabertura/override não autorizados. | Cobertura parcial do requisito, focada no slice aprovado dos Labs 11-13. | Acrescentar cenários futuros quando existirem funções de reabertura/override. |
| GAP-007 | `NFR-001` não tem automação de timeout. | Timeout de sessão não é validado automaticamente. | Criar teste com relógio controlado/mock apenas quando existir modelo de sessão testável. |
| GAP-008 | `NFR-002` só tem persistência simulada em memória; não cobre retenção de 5 anos nem proteção real dos logs. | Cobertura parcial de auditoria. | Documentar limitação; em sistema real, testar armazenamento, retenção e rejeição de alterações. |
| GAP-009 | `NFR-003`, `NFR-004` e `NFR-006` não têm automação. | Performance, disponibilidade e compatibilidade ficam sem evidência dinâmica. | Manter como planeado; seriam cobertos por performance monitoring, disponibilidade e testes browser em contexto próprio. |
| GAP-010 | `NFR-005` é coberto parcialmente por mensagens textuais, mas não por localização visual nem tempo real de UI. | Evidência incompleta de usabilidade. | Criar teste UI apenas se o professor pedir Selenium/Playwright; neste Lab está fora de scope. |
| GAP-011 | Existe duplicação intencional entre `lab13.feature` e os ficheiros `req_003`, `req_005`, `req_009`. | Pode gerar contagem duplicada se se correrem todos os features. | Documentar que a evidência principal usa comandos específicos do Lab 13, não necessariamente `python -m behave bdd/`. |
| GAP-012 | `python -m behave bdd/` pode executar `lab11.feature`, que não é o entregável principal do Lab 13. | Execução global pode falhar se ficheiros feature antigos não tiverem steps completos. | Usar comandos específicos documentados em `docs/bdd_report.md`. |

## Testes ou cenários sem ligação clara a REQ

Não foram identificados testes PyTest ou cenários BDD do Lab 13 sem ligação clara a requisito:

- todos os testes PyTest em `tests/unit/test_intake_rules.py` têm comentário com `REQ` e `AC`;
- todos os cenários em `lab13.feature` têm comentário `# Requisito testado`;
- os ficheiros separados por requisito já codificam o REQ no nome do ficheiro e nos comentários dos cenários.

## Itens de AC sem cobertura automática

- `REQ-003`: a regra de que perfis de leitura não devem ver a ação de aprovação não é automatizada porque não há UI neste scope.
- `REQ-004`: bloqueios por campos obrigatórios vazios/evidência em falta não têm automação Python dedicada.
- `REQ-006`: validação real de identidade/role em diretório corporativo está fora de scope.
- `REQ-007` e `REQ-008`: reabertura e override não têm funções Python testáveis no scope atual.
- `REQ-009`: reabertura/override não autorizados não são automatizados; apenas a tentativa de aprovação não autorizada foi automatizada.
- `NFR-002`: retenção de 5 anos e integridade real dos logs não são automatizadas.
- `NFR-005`: tempo/localização visual das mensagens não é automatizado.

## Duplicações e inconsistências

- A duplicação entre `lab13.feature` e os ficheiros por requisito é intencional e está documentada.
- Foi corrigido o wording antigo `frescura da evidência de DR` para `validade temporal da evidência de DR` na matriz `docs/traceability_req_tc.md`.
- Foi reforçada a nota em `docs/bdd_report.md` para distinguir a evidência principal do Lab 13 da execução global de `bdd/`.

## Conclusão

Os requisitos `REQ-003`, `REQ-005` e `REQ-009` têm a cobertura automática mais forte, com PyTest e Behave. Os restantes requisitos têm cobertura documental, planeada ou parcial. Os gaps identificados não exigem novas funcionalidades neste Lab; devem ser usados como backlog de melhoria de testes.
