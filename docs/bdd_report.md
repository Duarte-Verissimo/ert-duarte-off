# BDD Automation Report — Lab 13

## Ferramenta usada

- Behave
- Python + Gherkin

## Organização dos cenários

- `bdd/features/lab13.feature`: ficheiro agregado com todos os cenários.
- `bdd/features/req_003_aprovacao_rbac.feature`: cenários do `REQ-003`.
- `bdd/features/req_005_validade_evidencia_dr.feature`: cenários do `REQ-005`.
- `bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature`: cenários do `REQ-009`.

O ficheiro agregado existe para cumprir o deliverable oficial do enunciado. Os ficheiros separados por requisito existem para seguir a organização usada no exemplo do professor.

## How to run

Para correr o ficheiro agregado:

```bash
python -m behave bdd/features/lab13.feature
```

Para correr os ficheiros separados por requisito:

```bash
python -m behave bdd/features/req_003_aprovacao_rbac.feature
python -m behave bdd/features/req_005_validade_evidencia_dr.feature
python -m behave bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature
```

Para correr todos os BDD do diretório:

```bash
python -m behave bdd/
```

Nota: correr `bdd/` pode executar também ficheiros antigos, como `lab11.feature`. Se isso causar conflito ou cenários antigos sem steps, usar os comandos específicos do Lab 13 acima.

## Execution results

- Date: 2026-06-04
- Command used: `python -m behave bdd/features/lab13.feature`
- Feature files executed: 1
- Scenarios executed: 8
- Passed: 8
- Failed: 0
- Result summary: `1 feature passed, 8 scenarios passed, 51 steps passed`

### Execução dos ficheiros separados por requisito

- Date: 2026-06-04
- Commands used:
  - `python -m behave bdd/features/req_003_aprovacao_rbac.feature`
  - `python -m behave bdd/features/req_005_validade_evidencia_dr.feature`
  - `python -m behave bdd/features/req_009_auditoria_acoes_nao_autorizadas.feature`
- Feature files executed: 3
- Scenarios executed: 8
- Passed: 8
- Failed: 0
- Result summary: `3 feature files passed, 8 scenarios passed`

### Nota sobre duplicação

Os cenários executados nos ficheiros separados são os mesmos cenários representados no ficheiro agregado `lab13.feature`, organizados por requisito. Esta duplicação é intencional e serve dois objetivos:

- cumprir o ficheiro agregado pedido no enunciado;
- seguir o exemplo do professor com ficheiros `.feature` separados por requisito.

## Notes

- Os steps chamam diretamente funções Python estáveis de `src/intake_rules.py`.
- Selenium não foi usado porque as regras escolhidas são de negócio e não exigem UI.
- Não foi criado backend, base de dados ou integração externa.
- A persistência do audit log é simulada em memória.
- Os ficheiros PyTest dos Labs 11 e 12 não foram alterados.
