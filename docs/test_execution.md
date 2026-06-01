# Lab 12 — Execução dos Testes PyTest

## Stack

- Python
- PyTest

## Requisitos de versão

- Python 3.10 ou superior.
- `pytest>=7.0`, definido em `requirements.txt`.
- `behave>=1.2.6`, mantido em `requirements.txt` para compatibilidade com a componente BDD do dossiê.

## Setup

A partir da raiz do repositório:

```bash
python -m pip install -r requirements.txt
```

## Correr todos os testes

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
8 passed
```

## Troubleshooting

- Se `pytest` não for reconhecido, usar sempre `python -m pytest -q`.
- Se surgir `ModuleNotFoundError`, confirmar que o comando está a ser executado na raiz do repositório.
- Se as dependências não existirem, repetir `python -m pip install -r requirements.txt`.
- Se o resultado não mostrar 8 testes, confirmar que o ficheiro `tests/unit/test_intake_rules.py` contém todos os testes do Lab 11 usados como base do Lab 12.
- Se forem criados ficheiros `__pycache__`, estes são apenas artefactos locais da execução Python e não fazem parte da evidência documental.
