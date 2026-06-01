type DrEvidenceDateResult = {
  valid: boolean;
  error: string | null;
};

type ApprovalAttemptInput = {
  role: string;
  userId: string;
  currentStatus: string;
  now: Date;
};

type AuditEvent = {
  userId: string;
  action: "APPROVE_INTAKE";
  timestampUtc: string;
};

type ApprovalAttemptResult = {
  approved: boolean;
  nextStatus: string;
  feedback: string;
  auditEvent: AuditEvent | null;
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const APPROVAL_AUTHORIZED_ROLES = ["Transition Manager", "Security Officer"];

const toUtcDateOnly = (date: Date) =>
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

export const validateDrEvidenceDate = (
  evidenceDate: string,
  now: Date,
): DrEvidenceDateResult => {
  if (!evidenceDate) {
    return { valid: false, error: "Data do Teste de DR é obrigatória." };
  }

  const parsedDate = new Date(evidenceDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return { valid: false, error: "Data inválida." };
  }

  const evidenceDay = toUtcDateOnly(parsedDate);
  const currentDay = toUtcDateOnly(now);

  if (evidenceDay > currentDay) {
    return { valid: false, error: "A data não pode ser futura." };
  }

  const ageInDays = (currentDay - evidenceDay) / DAY_IN_MS;

  if (ageInDays > 365) {
    return { valid: false, error: "Evidência fora do prazo (>365 dias)." };
  }

  return { valid: true, error: null };
};

export const isOverrideJustificationValid = (justification: string): boolean =>
  justification.length >= 20;

export const evaluateApprovalAttempt = ({
  role,
  userId,
  currentStatus,
  now,
}: ApprovalAttemptInput): ApprovalAttemptResult => {
  if (!APPROVAL_AUTHORIZED_ROLES.includes(role)) {
    return {
      approved: false,
      nextStatus: currentStatus,
      feedback:
        "Acesso Negado: a sua role não tem permissão para aprovar este Intake.",
      auditEvent: {
        userId,
        action: "APPROVE_INTAKE",
        timestampUtc: now.toISOString(),
      },
    };
  }

  return {
    approved: true,
    nextStatus: "Aprovado",
    feedback: "Intake aprovado com sucesso.",
    auditEvent: null,
  };
};
