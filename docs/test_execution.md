# Lab 12 — Execução dos Testes Unitários

## Stack

- Python
- pyUnit/unittest
- PyTest

## Requisitos de versão

- Python 3.10 ou superior.
- `pytest>=7.0`, definido em `requirements.txt`.
- `behave>=1.2.6`, mantido em `requirements.txt` para compatibilidade com a componente BDD do dossiê.

## Configuração

A partir da raiz do repositório:

```bash
python -m pip install -r requirements.txt
```

## Correr testes unitários pyUnit/unittest

```bash
python -m unittest -v tests.unit.test_intake_rules_unittest
```

## Correr todos os testes PyTest

```bash
python -m pytest -q
```

## Correr apenas o ficheiro de testes unitários

```bash
python -m pytest -q tests/unit/test_intake_rules.py
```

## Correr um teste individual

Exemplo com o teste de bloqueio de `Viewer`:

```bash
python -m pytest -q tests/unit/test_intake_rules.py::test_viewer_cannot_approve_intake
```

## Resultado esperado

```txt
unittest: Ran 10 tests / OK
pytest: 18 passed
```

Nota: `python -m pytest -q` também descobre os testes `unittest` adicionados para a entrega final. Para executar apenas o ficheiro PyTest original, usar `python -m pytest -q tests/unit/test_intake_rules.py`, cujo resultado esperado é `8 passed`.

## Resolução de problemas

- Se `unittest` não encontrar `tests.unit.test_intake_rules_unittest`, confirmar que o comando está a ser executado na raiz do repositório.
- Se `pytest` não for reconhecido, usar sempre `python -m pytest -q`.
- Se surgir `ModuleNotFoundError`, confirmar que o comando está a ser executado na raiz do repositório.
- Se as dependências não existirem, repetir `python -m pip install -r requirements.txt`.
- Se o resultado não mostrar 8 testes, confirmar que o ficheiro `tests/unit/test_intake_rules.py` contém todos os testes do Lab 11 usados como base do Lab 12.
- Se forem criados ficheiros `__pycache__`, estes são apenas artefactos locais da execução Python e não fazem parte da evidência documental.
