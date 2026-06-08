# Requisitos v0 — Lab 2 (AMS)

## Lista bruta de necessidades (min. 15)

1. A equipa precisa de recolher detalhes de infraestrutura relevantes para a transição do serviço.
2. A equipa precisa de recolher a matriz de contactos para roles operacionais e de escalamento.
3. A equipa precisa de anexar evidência de Disaster Recovery antes da aprovação.
4. O sistema precisa de bloquear a aprovação quando falta informação obrigatória.
5. O sistema precisa de manter o Intake em `Draft` quando a validação falha.
6. O sistema precisa de garantir que apenas roles autorizadas podem aprovar um Intake. `[Variant]`
7. O sistema precisa de garantir que apenas roles autorizadas podem reabrir um Intake aprovado. `[Variant]`
8. O sistema precisa de exigir reautenticação antes de confirmar um override crítico. `[Variant]`
9. O sistema precisa de obrigar o utilizador a justificar qualquer override com um comentário escrito. `[Variant]`
10. O sistema precisa de registar tentativas bloqueadas de aprovação, reabertura e override num audit log. `[Variant]`
11. O sistema precisa de validar que a evidência de DR é suficientemente recente para ser aceite.
12. O sistema precisa de verificar a identidade do utilizador e a atribuição da role no diretório corporativo. `[Variant]`
13. A equipa precisa de uma distinção clara entre edições normais, edições após reabertura e ações de override.
14. O sistema precisa de impedir edições silenciosas depois de um Intake já ter sido aprovado. `[Variant]`
15. O sistema precisa de reter logs de segurança para auditorias futuras e verificação legal. `[Variant]`
16. O sistema precisa de manter o formulário de Intake utilizável e responsivo sob carga normal.

## Requisitos estruturados v0

| Item | Requisito | Tipo | Stakeholder | Prioridade | Variante? |
|---:|---|---|---|---|---|
| 1 | O sistema deve permitir a recolha e armazenamento de detalhes da infraestrutura e matriz de contactos na fase de Intake. | FR | Transition Manager | H | Não |
| 2 | O sistema deve permitir anexar a evidência de Disaster Recovery exigida para o processo de Intake. | FR | Transition Lead | H | Não |
| 3 | O sistema deve restringir a ação de "Aprovar Intake" exclusivamente a utilizadores com as roles de "Security Officer" ou "Transition Manager". | FR | Security Officer | H | Sim |
| 4 | O sistema deve impedir a transição de estado de um Intake se os campos obrigatórios e as evidências em falta não estiverem preenchidos, mantendo o estado em "Draft". | FR | Transition Manager | H | Não |
| 5 | O sistema deve validar que a data de emissão da evidência do plano de DR anexada não é superior a 12 meses. | FR | Transition Manager | M | Não |
| 6 | O sistema deve verificar a role do utilizador através de integração com o Active Directory (ou SSO corporativo) antes de habilitar ações críticas. | FR | Security Officer | H | Sim |
| 7 | O sistema deve restringir a ação de "Reabrir Intake" a utilizadores com permissão explícita para esse efeito. | FR | Security Officer | H | Sim |
| 8 | O sistema deve exigir a reintrodução da password e o preenchimento de uma justificação sempre que a ação de "Sobrescrever (Override)" for acionada. | FR | Security Officer | H | Sim |
| 9 | O sistema deve registar automaticamente um log de auditoria sempre que for detetada uma tentativa de ação não autorizada. | FR | System Administrator | H | Sim |
| 10 | A base de dados de logs de auditoria não deve permitir operações de eliminação ou alteração, garantindo retenção mínima de 5 anos. | NFR | System Administrator | H | Sim |

## Reescrita de ambiguidades (min. 5)

1. Original: "O sistema deve ser seguro contra utilizadores não autorizados."
   Reescrito: "O sistema deve bloquear as ações de `Aprovar`, `Reabrir` e `Override` para utilizadores que não possuam a role `Security Officer` ou `Transition Manager`, apresentar a mensagem `Acesso Negado` e gerar um log de auditoria em menos de 1 segundo." *(Orientado pela variante)*

2. Original: "Os overrides aos dados devem ser muito bem justificados."
   Reescrito: "A ação de `Override` só pode ser concluída se o utilizador preencher o campo obrigatório `Justificação` com um mínimo de 20 caracteres e inserir a sua password atual corretamente." *(Orientado pela variante)*

3. Original: "O plano de Disaster Recovery tem de ser recente."
   Reescrito: "O sistema deve rejeitar a aprovação do Intake se a data introduzida no campo `Data do Teste de DR` for superior a 365 dias em relação à data atual do sistema."

4. Original: "O utilizador tem de perceber logo se faltar informação ao submeter."
   Reescrito: "Se o utilizador clicar em `Aprovar` com campos obrigatórios vazios, o sistema deve apresentar uma mensagem de erro abaixo de cada campo em falta e não alterar o estado de `Draft`."

5. Original: "A plataforma tem de ser rápida a carregar o processo de Intake."
   Reescrito: "O formulário de `Intake & Discovery` e os respetivos dados guardados devem ser apresentados no ecrã em menos de 2 segundos para 95% dos pedidos sob carga normal."
