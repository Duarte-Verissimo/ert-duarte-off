from datetime import datetime, timezone

from src.intake_rules import (
    approve_intake,
    persist_audit_event,
    validate_dr_evidence_date,
)


FIXED_NOW = datetime(2026, 5, 26, 12, 0, 0, tzinfo=timezone.utc)


def _print_section(title: str) -> None:
    print(f"\n== {title} ==")


def _print_result(label: str, result: dict) -> None:
    print(f"{label}: {result}")


def run_demo() -> None:
    audit_store = []

    _print_section("Aprovacao com role autorizada")
    authorized_result = approve_intake(
        role="Transition Manager",
        user_id="tm-001",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )
    _print_result("Transition Manager", authorized_result)

    _print_section("Bloqueio com role nao autorizada")
    blocked_result = approve_intake(
        role="Viewer",
        user_id="viewer-001",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )
    _print_result("Viewer", blocked_result)

    if blocked_result["audit_events"]:
        audit_event = blocked_result["audit_events"][0]
        persistence_result = persist_audit_event(audit_store, audit_event)
        _print_result("Audit event", audit_event)
        _print_result("Persistencia", persistence_result)
        _print_result("Audit store", audit_store)

    _print_section("Validacao de evidencia de Disaster Recovery")
    valid_evidence = validate_dr_evidence_date("2025-05-26", now=FIXED_NOW)
    old_evidence = validate_dr_evidence_date("2025-05-25", now=FIXED_NOW)
    future_evidence = validate_dr_evidence_date("2026-05-27", now=FIXED_NOW)

    _print_result("Evidencia valida com 365 dias", valid_evidence)
    _print_result("Evidencia com 366 dias", old_evidence)
    _print_result("Evidencia com data futura", future_evidence)


if __name__ == "__main__":
    run_demo()
