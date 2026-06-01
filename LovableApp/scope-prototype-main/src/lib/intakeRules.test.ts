import { describe, expect, it } from "vitest";
import {
  evaluateApprovalAttempt,
  isOverrideJustificationValid,
  validateDrEvidenceDate,
} from "./intakeRules";

const FIXED_NOW = new Date("2026-05-26T12:00:00.000Z");

describe("REQ-005 - DR evidence date validity", () => {
  it("accepts evidence exactly 365 days old", () => {
    const result = validateDrEvidenceDate("2025-05-26", FIXED_NOW);

    expect(result.valid).toBe(true);
    expect(result.error).toBeNull();
  });

  it("rejects evidence 366 days old", () => {
    const result = validateDrEvidenceDate("2025-05-25", FIXED_NOW);

    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/fora do prazo|365/i);
  });

  it("rejects future evidence dates", () => {
    const result = validateDrEvidenceDate("2026-05-27", FIXED_NOW);

    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/futura/i);
  });
});

describe("REQ-008 - override justification minimum length", () => {
  it("returns false for 19-character justification", () => {
    const justification = "1234567890123456789";

    const result = isOverrideJustificationValid(justification);

    expect(result).toBe(false);
  });

  it("returns true for 20-character justification", () => {
    const justification = "12345678901234567890";

    const result = isOverrideJustificationValid(justification);

    expect(result).toBe(true);
  });
});

describe("REQ-009 - unauthorized approval audit logging", () => {
  it("denies approval and records an audit event when Viewer tries to approve", () => {
    const result = evaluateApprovalAttempt({
      role: "Viewer",
      userId: "viewer-001",
      currentStatus: "Draft",
      now: FIXED_NOW,
    });

    expect(result.approved).toBe(false);
    expect(result.nextStatus).toBe("Draft");
    expect(result.feedback).toContain("Acesso Negado");
    expect(result.feedback).not.toMatch(/log|audit|auditoria/i);
    expect(result.auditEvent).toMatchObject({
      userId: "viewer-001",
      action: "APPROVE_INTAKE",
      timestampUtc: "2026-05-26T12:00:00.000Z",
    });
  });
});
