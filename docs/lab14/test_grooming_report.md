# Lab 14 — Test Grooming Report

## Objetivo

Registar as ações de grooming realizadas para melhorar clareza, rastreabilidade e manutenção da suite de testes dos Labs 11, 12 e 13.

## Grooming actions executadas

| Ação | Ficheiros | Motivo | Resultado |
| --- | --- | --- | --- |
| 1. Confirmar nomenclatura do cenário de auditoria como percurso feliz | `bdd/features/lab13.feature`; `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature` | Evitar a categoria ambígua `Comportamento de segurança`. | O cenário está nomeado como `Percurso feliz - Audit event é persistido em menos de 1 segundo`. |
| 2. Confirmar rastreabilidade BDD do novo nome e tipo | `docs/traceability_req_bdd.md` | Garantir que a matriz reflete o cenário como percurso feliz da auditoria. | O tipo está registado como `Percurso feliz / auditoria` e há nota explicativa. |
| 3. Reforçar nota de execução no relatório BDD | `docs/bdd_report.md` | Evitar confusão entre evidência principal do Lab 13 e execução global de `bdd/`. | O relatório explica que a evidência principal é `lab13.feature` e os três ficheiros separados por requisito. |
| 4. Confirmar comentários REQ nos cenários BDD | `bdd/features/lab13.feature`; `bdd/features/req_003_aprovacao_rbac.feature`; `bdd/features/req_005_validade_evidencia_dr.feature`; `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature` | Garantir rastreabilidade cenário → requisito. | Todos os cenários do Lab 13 têm comentário `# Requisito testado`. |
| 5. Confirmar comentários REQ/AC nos testes PyTest | `tests/unit/test_intake_rules.py` | Garantir rastreabilidade unit test → requisito/AC. | Todos os 8 testes PyTest mantêm comentário REQ/AC. |
| 6. Corrigir wording antigo de `frescura` | `docs/traceability_req_tc.md` | Alinhar a documentação com o título claro de `REQ-005`. | A matriz passou a referir `validade temporal da evidência de DR`. |
| 7. Atualizar resumo dos labs | `labs_summary.md` | Registar o Lab 14 e os artefactos de manutenção criados. | O dossiê passa a incluir a secção `Lab 14 — Quality & Testing Maintenance`. |

## Ficheiros criados

- `docs/traceability_master.md`
- `docs/gap_analysis_lab14.md`
- `docs/test_retrocompatibility.md`
- `docs/test_grooming_report.md`

## Ficheiros alterados

- `docs/bdd_report.md`
- `docs/traceability_req_tc.md`
- `labs_summary.md`

## Evidência de execução

Comandos executados:

```bash
python -m pytest -q
python -m behave bdd/features/lab13.feature
python -m behave bdd/features/req_003_aprovacao_rbac.feature
python -m behave bdd/features/req_005_validade_evidencia_dr.feature
python -m behave bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature
```

Resultados esperados e registados:

- PyTest: `8 passed`
- Behave `lab13.feature`: `8 scenarios passed`
- Behave ficheiros separados: `8 scenarios passed` no total

## Conclusão

O grooming não alterou lógica de negócio. As ações focaram nomenclatura, rastreabilidade, clareza de execução e documentação dos gaps.
