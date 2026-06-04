import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileCheck2, AlertCircle, CheckCircle2 } from "lucide-react";
import { validateDrEvidenceDate } from "@/lib/intakeRules";

type Role = "Transition Manager" | "Security Officer" | "Viewer";

// Roles autorizadas a APROVAR o Intake (REQ-003)
const APPROVAL_AUTHORIZED: Role[] = ["Transition Manager", "Security Officer"];
// Apenas o Transition Manager é o ator operacional do slice:
// preenche o formulário e anexa a evidência de DR (UC-03 / UC-04 main flow).
const OPERATIONAL_ROLE: Role = "Transition Manager";

type Status = "Draft" | "Aprovado";

type AuditEvent = {
  userId: string;
  role: Role;
  action: "Aprovar Intake";
  timestampUtc: string;
  reason: string;
};

type Feedback =
  | { kind: "error"; message: string }
  | { kind: "success"; message: string }
  | null;

const todayISO = () => new Date().toISOString().slice(0, 10);

const Index = () => {
  // RBAC
  const [role, setRole] = useState<Role>("Transition Manager");

  // Intake fields
  const [serviceName, setServiceName] = useState("Customer Billing Service");
  const [owner, setOwner] = useState("");
  const [drFileName, setDrFileName] = useState<string | null>(null);
  const [drDate, setDrDate] = useState<string>("");

  const [status, setStatus] = useState<Status>("Draft");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>([]);

  const isOperational = role === OPERATIONAL_ROLE;
  const isApprovalAuthorized = useMemo(() => APPROVAL_AUTHORIZED.includes(role), [role]);

  const recordUnauthorizedAttempt = (
    action: AuditEvent["action"],
    reason: string
  ) => {
    const event: AuditEvent = {
      userId: `demo-${role.toLowerCase().replace(/\s+/g, "-")}`,
      role,
      action,
      timestampUtc: new Date().toISOString(),
      reason,
    };

    setAuditEvents((events) => [event, ...events]);
  };

  const handleAttachDr = (file: File | null) => {
    if (!file) return;
    setDrFileName(file.name);
    setFeedback(null);
    setFieldErrors((e) => ({ ...e, drFile: "" }));
  };

  const handleApprove = () => {
    setFeedback(null);

    // RBAC enforcement first (REQ-003, variant): unauthorized roles never proceed,
    // and we don't expose field-level validation details to them.
    if (!isApprovalAuthorized) {
      setFieldErrors({});
      recordUnauthorizedAttempt(
        "Aprovar Intake",
        "Role sem permissão para aprovar Intake"
      );
      setFeedback({
        kind: "error",
        message:
          "Acesso Negado: a sua role não tem permissão para aprovar este Intake.",
      });
      return;
    }

    const errors: Record<string, string> = {};

    // Required fields (REQ-004)
    if (!serviceName.trim()) errors.serviceName = "Campo obrigatório.";
    if (!owner.trim()) errors.owner = "Campo obrigatório.";
    if (!drFileName) errors.drFile = "Anexe a evidência de DR.";

    // DR date validation (REQ-005)
    const drDateValidation = validateDrEvidenceDate(drDate, new Date());
    if (!drDateValidation.valid) {
      errors.drDate = drDateValidation.error ?? "Data inválida.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFeedback({
        kind: "error",
        message:
          "Aprovação bloqueada: corrija os campos assinalados. O Intake permanece em Draft.",
      });
      return;
    }

    setFieldErrors({});
    setStatus("Aprovado");
    setFeedback({
      kind: "success",
      message: "Intake aprovado com sucesso.",
    });
  };

  const resetToDraft = () => {
    setStatus("Draft");
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">
                AMS Intake & Discovery
              </h1>
              <p className="text-xs text-muted-foreground">
                Slice B — Aprovação com evidência de DR (protótipo académico)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Label htmlFor="role" className="text-xs text-muted-foreground">
              Role simulada
            </Label>
            <Select value={role} onValueChange={(v) => setRole(v as Role)}>
              <SelectTrigger id="role" className="w-[210px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Transition Manager">
                  Transition Manager
                </SelectItem>
                <SelectItem value="Security Officer">
                  Security Officer
                </SelectItem>
                <SelectItem value="Viewer">Viewer (não autorizado)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mx-auto grid max-w-3xl gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Intake do serviço</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Preencha os campos obrigatórios e anexe a evidência de DR.
                </p>
              </div>
              <Badge
                variant={status === "Aprovado" ? "default" : "secondary"}
                className={
                  status === "Aprovado"
                    ? "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]"
                    : ""
                }
              >
                Estado: {status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-5">
              {!isOperational && status !== "Aprovado" && (
                <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-700 dark:text-amber-400">
                  A role atual é de <strong>controlo / governação</strong>. Só o{" "}
                  <strong>Transition Manager</strong> pode preencher o formulário
                  e anexar a evidência de DR neste slice.
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="service">Nome do serviço *</Label>
                <Input
                  id="service"
                  value={serviceName}
                  disabled={status === "Aprovado" || !isOperational}
                  onChange={(e) => {
                    setServiceName(e.target.value);
                    setFieldErrors((x) => ({ ...x, serviceName: "" }));
                  }}
                  aria-invalid={!!fieldErrors.serviceName}
                />
                {fieldErrors.serviceName && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.serviceName}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="owner">Responsável operacional *</Label>
                <Input
                  id="owner"
                  placeholder="ex.: Maria Santos"
                  value={owner}
                  disabled={status === "Aprovado" || !isOperational}
                  onChange={(e) => {
                    setOwner(e.target.value);
                    setFieldErrors((x) => ({ ...x, owner: "" }));
                  }}
                  aria-invalid={!!fieldErrors.owner}
                />
                {fieldErrors.owner && (
                  <p className="text-sm text-destructive">{fieldErrors.owner}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="drFile">Evidência de Disaster Recovery *</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="drFile"
                    type="file"
                    disabled={status === "Aprovado" || !isOperational}
                    onChange={(e) =>
                      handleAttachDr(e.target.files?.[0] ?? null)
                    }
                    aria-invalid={!!fieldErrors.drFile}
                  />
                  {drFileName && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <FileCheck2 className="h-4 w-4" />
                      {drFileName}
                    </span>
                  )}
                </div>
                {!isOperational && (
                  <p className="text-xs text-muted-foreground">
                    Apenas o Transition Manager pode anexar a evidência de DR.
                  </p>
                )}
                {fieldErrors.drFile && (
                  <p className="text-sm text-destructive">{fieldErrors.drFile}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="drDate">
                  Data do Teste de DR * (≤ 365 dias)
                </Label>
                <Input
                  id="drDate"
                  type="date"
                  max={todayISO()}
                  value={drDate}
                  disabled={status === "Aprovado" || !isOperational}
                  onChange={(e) => {
                    setDrDate(e.target.value);
                    setFieldErrors((x) => ({ ...x, drDate: "" }));
                  }}
                  aria-invalid={!!fieldErrors.drDate}
                />
                {fieldErrors.drDate && (
                  <p className="text-sm text-destructive">{fieldErrors.drDate}</p>
                )}
              </div>

              {feedback && (
                <div
                  role="alert"
                  className={
                    "flex items-start gap-2 rounded-md border p-3 text-sm " +
                    (feedback.kind === "error"
                      ? "border-destructive/40 bg-destructive/10 text-destructive"
                      : "border-[hsl(var(--success))]/40 bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]")
                  }
                >
                  {feedback.kind === "error" ? (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{feedback.message}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  Aprovação restrita a <strong>Transition Manager</strong> ou{" "}
                  <strong>Security Officer</strong> (governação).
                </p>
                {status === "Aprovado" ? (
                  <Button variant="outline" onClick={resetToDraft}>
                    Repor para Draft (demo)
                  </Button>
                ) : (
                  <Button onClick={handleApprove}>Aprovar Intake</Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Audit trail académico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-xs text-muted-foreground">
                Registos simulados em memória para demonstração do REQ-009. Não
                existe backend ou persistência real neste protótipo.
              </p>
              {auditEvents.length === 0 ? (
                <p className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">
                  Sem audit events simulados nesta sessão.
                </p>
              ) : (
                <ul className="space-y-2">
                  {auditEvents.slice(0, 5).map((event, index) => (
                    <li
                      key={`${event.timestampUtc}-${index}`}
                      className="rounded-md border p-3"
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{event.role}</Badge>
                        <span className="font-medium text-foreground">
                          {event.action}
                        </span>
                      </div>
                      <dl className="grid gap-1 text-xs text-muted-foreground sm:grid-cols-2">
                        <div>
                          <dt className="font-medium text-foreground">
                            Timestamp UTC
                          </dt>
                          <dd>{event.timestampUtc}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-foreground">
                            Motivo
                          </dt>
                          <dd>{event.reason}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Como demonstrar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Happy path:</strong> role
                Transition Manager preenche todos os campos, anexa evidência de
                DR com data dos últimos 365 dias e aprova → estado passa a Aprovado.
              </p>
              <p>
                <strong className="text-foreground">Alternative flow:</strong>{" "}
                Transition Manager clica Aprovar com campos vazios, sem DR, ou
                com DR &gt; 365 dias / data futura → bloqueio com mensagens
                inline; Intake permanece em Draft.
              </p>
              <p>
                <strong className="text-foreground">Error/exception:</strong>{" "}
                role Viewer (não autorizada) tenta aprovar → "Acesso Negado".
                Internamente é criado um audit event simulado; o utilizador
                bloqueado não recebe confirmação explícita de que o log foi
                criado. O Security Officer aparece apenas como role de
                governação: não preenche o formulário nem anexa DR no fluxo
                normal.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
