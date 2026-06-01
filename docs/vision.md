# Vision

O AMS (Application Management Services) suporta o slice **Intake & Discovery**, permitindo registar e atualizar submissões e tomar decisões iniciais de forma **segura**, garantindo que apenas utilizadores autenticados e autorizados executam ações críticas (ex.: aprovar, reabrir, sobrescrever dados), conforme a **Variante 3 (Security & Role-Based Approval)**.

## Objectives

1. Garantir **autenticação obrigatória** para todas as ações de criação e atualização no Intake & Discovery.
2. Aplicar **autorização baseada em roles** para ações críticas (aprovar, reabrir, sobrescrever/override).
3. **Bloquear e registar** tentativas de ações não autorizadas no slice Intake & Discovery.

## Non-objectives

1. Implementar UI/UX detalhado (layouts, componentes visuais, design final).
2. Implementar integrações externas completas (APIs de terceiros, sistemas legados) para além do necessário no slice.
3. Implementar mecanismos avançados de segurança fora do âmbito do slice (ex.: deteção de intrusão, criptografia/PKI complexa).
