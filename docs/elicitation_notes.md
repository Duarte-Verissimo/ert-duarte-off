# Elicitation Notes — Lab 2 (AMS)

## Interview setup
- Date: 2026-02-16
- Client team: AMS Transition Lead & Chief Information Security Officer (CISO)
- DevTeam: Team DNR
- Slice discussed: Intake & Discovery (AMS)
- Variant: 3 (Strict authorization and controlled actions)

## Context anchors (AMS)
- Sector: Financial Services (Banking/Insurance) - requires high security and compliance.
- Solution type: Custom Transition & Data Management Platform.
- Support model (L1/L2/L3 + hours + languages): L2/L3, 24/7, English & Portuguese.
- Key transition pain points (summary): Currently, any user can edit or overwrite transition data. There is no clear audit trail of who approved the Intake, and unauthorized users are trying to force processes forward without proper validation.

## Questions & Answers (min. 10)
1. Q: Quais são os dados essenciais que precisamos de recolher na fase de Intake & Discovery?
   A: Precisamos de detalhes da infraestrutura, matriz de contactos e os planos de Disaster Recovery (DR).

2. [Variant] Q: Quem tem permissão exata para aprovar o Intake e passá-lo para a fase seguinte?
   A: Apenas os utilizadores com a role explícita de "Security Officer" ou "Transition Manager" podem executar a aprovação.

3. [Evidence] Q: Como é que o sistema prova que um utilizador tem a role de "Security Officer" atribuída?
   A: O sistema tem de verificar o grupo de segurança no Active Directory da empresa ou exigir o upload de uma matriz de acessos assinada pelos RH.

4. Q: O que acontece se a informação obrigatória do Intake estiver incompleta e alguém tentar avançar?
   A: O sistema não pode permitir o avanço. O estado do processo deve manter-se em "Draft" (Rascunho).

5. [Variant] Q: O que deve o sistema fazer se um utilizador sem permissões tentar forçar uma aprovação ou reabrir um Intake que já foi fechado?
   A: O sistema deve bloquear a ação imediatamente e criar um registo (log) da tentativa de acesso não autorizado, guardando o ID do utilizador, data, hora e ação tentada.

6. [Evidence] Q: Que evidência documental é necessária para provar que a equipa tem o plano de Disaster Recovery (DR) preparado?
   A: É obrigatório anexar um ficheiro PDF com o último relatório de testes de DR, que tem de estar assinado pelo responsável de infraestrutura.

7. Q: É possível atualizar ou sobrescrever os dados do Intake depois de este ter sido formalmente aprovado?
   A: Apenas se o processo for reaberto. Não permitimos edições silenciosas (stealth edits) em processos fechados.

8. [Variant] Q: Como controlamos a ação crítica de sobrescrever dados (override)?
   A: Para fazer override, o utilizador autorizado tem de reintroduzir a sua password (reautenticação) e escrever obrigatoriamente um comentário a justificar a alteração.

9. [Evidence] Q: Quão recente tem de ser a evidência do plano de DR para ser aceite no processo de Intake?
   A: A data de emissão do documento PDF anexado não pode ser superior a 12 meses em relação à data atual.

10. Q: Para este slice de Intake, precisamos de nos integrar com sistemas externos complexos de deteção de intrusão?
    A: Não. Para já, basta garantir a autenticação baseada em roles e guardar os logs de segurança de forma segura na base de dados do próprio AMS.

## Assumptions (min. 3)
- A1: A autenticação base (login) será gerida por um Identity Provider existente (ex: Microsoft Entra ID), não sendo necessário desenvolver um sistema de login do zero.
- A2: No âmbito deste slice, as "ações críticas" são exclusivamente: Aprovar Intake, Reabrir Intake e Sobrescrever Dados (Override).
- A3: A tabela de logs de auditoria na base de dados é apenas de inserção e leitura (append-only), impedindo que os próprios administradores apaguem os rastos das suas ações.

## Open questions (min. 3)
- Q1: [Variant] Durante quanto tempo é que os registos (logs) das tentativas de acesso não autorizado têm de ser retidos no sistema por motivos de auditoria legal?
- Q2: [Variant] Qual deve ser o tempo limite de inatividade (session timeout) antes de o sistema forçar um "Security Officer" a fazer login novamente?
- Q3: O sistema deve enviar alertas automáticos por email ao Administrador de Segurança quando detetar múltiplas tentativas de acesso bloqueadas no mesmo dia?

## Variant notes (required)
- How did the variant change our elicitation focus?
  - A variante obrigou-nos a focar a entrevista em "quem" faz o quê, e não apenas no "quê". Em vez de falarmos só dos campos do formulário de Intake, explorámos profundamente o controlo de acessos (RBAC), a necessidade de reautenticação em ações críticas, a geração de rastos de auditoria (logs) para bloqueios, e as provas (evidências) de identidade dos utilizadores.
