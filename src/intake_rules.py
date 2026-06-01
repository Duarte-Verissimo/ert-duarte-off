import time
from datetime import date, datetime, timezone


AUTHORIZED_APPROVERS = {"Transition Manager", "Security Officer"}
APPROVE_ACTION = "Aprovar Intake"


def _utc_now(now: datetime | None = None) -> datetime:
    if now is None:
        return datetime.now(timezone.utc)
    if now.tzinfo is None:
        return now.replace(tzinfo=timezone.utc)
    return now.astimezone(timezone.utc)


def _timestamp_utc(value: datetime) -> str:
    return value.isoformat().replace("+00:00", "Z")


def persist_audit_event(audit_store: list, audit_event: dict) -> dict:
    started_at = time.perf_counter()
    audit_store.append(audit_event)
    elapsed_seconds = time.perf_counter() - started_at

    return {
        "persisted": True,
        "elapsed_seconds": elapsed_seconds,
    }


def validate_dr_evidence_date(value: str, now: datetime | None = None) -> dict:
    reference_date = _utc_now(now).date()

    try:
        evidence_date = date.fromisoformat(value)
    except ValueError:
        return {
            "is_valid": False,
            "message": "Data da evidência de Disaster Recovery inválida.",
            "age_days": None,
        }

    age_days = (reference_date - evidence_date).days

    if age_days < 0:
        return {
            "is_valid": False,
            "message": "Data da evidência de Disaster Recovery não pode ser futura.",
            "age_days": age_days,
        }

    if age_days > 365:
        return {
            "is_valid": False,
            "message": "Evidência de Disaster Recovery fora do prazo aceite.",
            "age_days": age_days,
        }

    return {
        "is_valid": True,
        "message": "Evidência de Disaster Recovery válida.",
        "age_days": age_days,
    }


def approve_intake(
    role: str,
    user_id: str,
    current_status: str,
    is_intake_valid: bool,
    now: datetime | None = None,
) -> dict:
    timestamp = _utc_now(now)

    if role not in AUTHORIZED_APPROVERS:
        return {
            "allowed": False,
            "status": current_status,
            "message": "Acesso Negado",
            "audit_events": [
                {
                    "user_id": user_id,
                    "action": APPROVE_ACTION,
                    "timestamp_utc": _timestamp_utc(timestamp),
                }
            ],
        }

    if not is_intake_valid:
        return {
            "allowed": False,
            "status": current_status,
            "message": "Intake inválido.",
            "audit_events": [],
        }

    return {
        "allowed": True,
        "status": "Aprovado",
        "message": "Intake aprovado.",
        "audit_events": [],
    }
