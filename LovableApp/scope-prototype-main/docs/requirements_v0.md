# Requirements v0 — Lab 2 (AMS)

## Raw needs list (min. 15)

1. The team needs to capture infrastructure details relevant to the service transition.
2. The team needs to capture the contact matrix for operational and escalation roles.
3. The team needs to attach Disaster Recovery evidence before approval.
4. The system needs to block approval when mandatory information is missing.
5. The system needs to keep the Intake in `Draft` when validation fails.
6. The system needs to ensure that only authorized roles can approve an Intake. `[Variant]`
7. The system needs to ensure that only authorized roles can reopen an approved Intake. `[Variant]`
8. The system needs to force reauthentication before a critical override is confirmed. `[Variant]`
9. The system needs to force the user to justify any override with a written comment. `[Variant]`
10. The system needs to record blocked approval, reopen, and override attempts in an audit log. `[Variant]`
11. The system needs to validate that the DR evidence is recent enough to be trusted.
12. The system needs to verify user identity and role assignment against the corporate directory. `[Variant]`
13. The team needs a clear distinction between normal edits, reopened edits, and override actions.
14. The system needs to prevent silent edits after an Intake has already been approved. `[Variant]`
15. The system needs to retain security logs for future audits and legal verification. `[Variant]`
16. The system needs the Intake form to remain usable and responsive under normal load.

## Structured requirements v0

| Item | Requirement | Type | Stakeholder | Priority | Variant? |
|---:|---|---|---|---|---|
| 1 | O sistema deve permitir a recolha e armazenamento de detalhes da infraestrutura e matriz de contactos na fase de Intake. | FR | Transition Manager | H | No |
| 2 | O sistema deve permitir anexar a evidência de Disaster Recovery exigida para o processo de Intake. | FR | Transition Lead | H | No |
| 3 | O sistema deve restringir a ação de "Aprovar Intake" exclusivamente a utilizadores com as roles de "Security Officer" ou "Transition Manager". | FR | Security Officer | H | Yes |
| 4 | O sistema deve impedir a transição de estado de um Intake se os campos obrigatórios e as evidências em falta não estiverem preenchidos, mantendo o estado em "Draft". | FR | Transition Manager | H | No |
| 5 | O sistema deve validar que a data de emissão da evidência do plano de DR anexada não é superior a 12 meses. | FR | Transition Manager | M | No |
| 6 | O sistema deve verificar a role do utilizador através de integração com o Active Directory (ou SSO corporativo) antes de habilitar ações críticas. | FR | Security Officer | H | Yes |
| 7 | O sistema deve restringir a ação de "Reabrir Intake" a utilizadores com permissão explícita para esse efeito. | FR | Security Officer | H | Yes |
| 8 | O sistema deve exigir a reintrodução da password e o preenchimento de uma justificação sempre que a ação de "Sobrescrever (Override)" for acionada. | FR | Security Officer | H | Yes |
| 9 | O sistema deve registar automaticamente um log de auditoria sempre que for detetada uma tentativa de ação não autorizada. | FR | System Administrator | H | Yes |
| 10 | A base de dados de logs de auditoria não deve permitir operações de eliminação ou alteração, garantindo retenção mínima de 5 anos. | NFR | System Administrator | H | Yes |

## Ambiguity rewrite (min. 5)

1. Original: "O sistema deve ser seguro contra utilizadores não autorizados."
   Rewritten: "O sistema deve bloquear as ações de `Aprovar`, `Reabrir` e `Override` para utilizadores que não possuam a role `Security Officer` ou `Transition Manager`, apresentar a mensagem `Acesso Negado` e gerar um log de auditoria em menos de 1 segundo." *(Variant-driven)*

2. Original: "Os overrides aos dados devem ser muito bem justificados."
   Rewritten: "A ação de `Override` só pode ser concluída se o utilizador preencher o campo obrigatório `Justificação` com um mínimo de 20 caracteres e inserir a sua password atual corretamente." *(Variant-driven)*

3. Original: "O plano de Disaster Recovery tem de ser recente."
   Rewritten: "O sistema deve rejeitar a aprovação do Intake se a data introduzida no campo `Data do Teste de DR` for superior a 365 dias em relação à data atual do sistema."

4. Original: "O utilizador tem de perceber logo se faltar informação ao submeter."
   Rewritten: "Se o utilizador clicar em `Aprovar` com campos obrigatórios vazios, o sistema deve apresentar uma mensagem de erro abaixo de cada campo em falta e não alterar o estado de `Draft`."

5. Original: "A plataforma tem de ser rápida a carregar o processo de Intake."
   Rewritten: "O formulário de `Intake & Discovery` e os respetivos dados guardados devem ser apresentados no ecrã em menos de 2 segundos para 95% dos pedidos sob carga normal."
