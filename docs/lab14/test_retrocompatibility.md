# Lab 14 — Test Retrocompatibility

## Objetivo

Analisar que alterações futuras podem partir os testes PyTest e Behave, e definir melhorias para tornar a suite mais estável sem alterar a lógica atual.

## Tipos de alterações que podem partir os testes

- Alteração de wording dos requisitos ou dos acceptance criteria.
- Alteração das mensagens esperadas, como `Acesso Negado`.
- Refactor interno das funções Python.
- Alteração de dependências, versões de Python, PyTest ou Behave.
- Mudança de datas usadas nos testes de Disaster Recovery.
- Duplicação de cenários entre ficheiros agregados e ficheiros por requisito.
- Mudança na estrutura dos feature files.

## Fragile points e melhorias

| Fragile point | Risco | Melhoria recomendada |
| --- | --- | --- |
| Assertions dependentes de texto: `Acesso Negado`, `fora do prazo aceite`, `futura`. | Pequenas alterações de wording podem partir testes mesmo que a regra continue correta. | Introduzir códigos internos de erro no futuro, mantendo as mensagens como detalhe secundário. |
| Datas fixas usadas para cenários de DR. | Mudanças manuais nas datas podem alterar o significado dos testes de 365/366 dias. | Manter `FIXED_NOW` nos PyTest e datas explícitas nos Gherkin; documentar que são datas determinísticas. |
| Duplicação intencional entre `lab13.feature` e os ficheiros `req_003`, `req_005`, `req_009`. | O mesmo cenário pode ser atualizado num ficheiro e ficar desatualizado noutro. | Quando um cenário mudar, atualizar primeiro o ficheiro por requisito e depois o agregado, ou vice-versa, e validar ambos. |
| Execução de `python -m behave bdd/` pode incluir `lab11.feature`. | Features antigos podem falhar por steps ausentes ou por não pertencerem ao scope do Lab 13. | Usar comandos específicos do Lab 13 como evidência principal: `lab13.feature` e os três ficheiros por requisito. |
| Persistência simulada em memória para audit log. | Pode dar uma falsa sensação de cobertura de persistência real. | Manter a limitação explícita; quando existir armazenamento real, criar testes de integração separados. |
| Refactor de `src/intake_rules.py`. | Alterar chaves dos dicionários retornados pode partir PyTest e Behave. | Preservar o contrato público das funções ou atualizar testes e documentação em conjunto. |
| Alteração de dependências. | Behave/PyTest podem mudar output, parsing ou descoberta de steps. | Manter `requirements.txt` e registar versões usadas em relatórios de execução. |

## Estratégia de retrocompatibilidade

- Manter os nomes dos cenários estáveis e ligados ao REQ.
- Manter comentários `REQ/AC` nos testes PyTest.
- Evitar duplicar lógica de negócio nos steps Behave.
- Usar datas fixas e explícitas.
- Registar sempre o comando usado como evidência.

## Conclusão

A suite atual é adequada para evidência académica de regras de negócio, mas é sensível a wording, datas fixas e duplicação intencional de cenários. As melhorias propostas devem ser tratadas como grooming futuro, não como necessidade de alterar a implementação atual.
