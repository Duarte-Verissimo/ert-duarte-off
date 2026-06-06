from datetime import datetime, timezone
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from src.intake_rules import (
    approve_intake,
    persist_audit_event,
    validate_dr_evidence_date,
)


FIXED_NOW = datetime(2026, 5, 26, 12, 0, 0, tzinfo=timezone.utc)


def test_authorized_transition_manager_can_approve_valid_intake():
    # REQ-003 / AC: Transition Manager pode aprovar um Intake valido.
    # Arrange / Act
    result = approve_intake(
        role="Transition Manager",
        user_id="tm-001",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )

    # Assert
    assert result["allowed"] is True
    assert result["status"] == "Aprovado"
    assert result["audit_events"] == []


def test_authorized_security_officer_can_approve_valid_intake():
    # REQ-003 / AC: Security Officer pode aprovar um Intake valido.
    # Arrange / Act
    result = approve_intake(
        role="Security Officer",
        user_id="so-001",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )

    # Assert
    assert result["allowed"] is True
    assert result["status"] == "Aprovado"
    assert result["audit_events"] == []


def test_viewer_cannot_approve_intake():
    # REQ-003 / AC: Viewer nao pode aprovar e recebe Acesso Negado.
    # Arrange / Act
    result = approve_intake(
        role="Viewer",
        user_id="viewer-001",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )

    # Assert
    assert result["allowed"] is False
    assert result["status"] == "Draft"
    assert "Acesso Negado" in result["message"]


def test_dr_evidence_exactly_365_days_old_is_valid():
    # REQ-005 / AC: evidencia exatamente com 365 dias e aceite.
    # Arrange / Act
    result = validate_dr_evidence_date("2025-05-26", now=FIXED_NOW)

    # Assert
    assert result["is_valid"] is True
    assert result["age_days"] == 365


def test_dr_evidence_older_than_365_days_is_rejected():
    # REQ-005 / AC: evidencia com mais de 365 dias e rejeitada.
    # Arrange / Act
    result = validate_dr_evidence_date("2025-05-25", now=FIXED_NOW)

    # Assert
    assert result["is_valid"] is False
    assert result["age_days"] == 366
    assert "fora do prazo aceite" in result["message"]


def test_dr_evidence_future_date_is_rejected():
    # REQ-005 / AC: evidencia com data futura e rejeitada.
    # Arrange / Act
    result = validate_dr_evidence_date("2026-05-27", now=FIXED_NOW)

    # Assert
    assert result["is_valid"] is False
    assert result["age_days"] == -1
    assert "futura" in result["message"]


def test_unauthorized_attempt_creates_audit_record_without_disclosing_log_to_user():
    # REQ-009 / AC: tentativa nao autorizada cria auditoria sem divulgar isso ao utilizador.
    # Arrange / Act
    result = approve_intake(
        role="Viewer",
        user_id="viewer-009",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )

    # Assert
    assert result["allowed"] is False
    assert len(result["audit_events"]) == 1

    audit_event = result["audit_events"][0]
    assert audit_event["user_id"] == "viewer-009"
    assert audit_event["action"] == "Aprovar Intake"
    assert audit_event["timestamp_utc"] == "2026-05-26T12:00:00Z"
    assert "log" not in result["message"].lower()
    assert "auditoria" not in result["message"].lower()


def test_audit_log_is_persisted_in_less_than_one_second():
    # REQ-009 / AC: log persistido em menos de 1 segundo apos o bloqueio.
    # Arrange
    audit_store = []

    # Act
    result = approve_intake(
        role="Viewer",
        user_id="viewer-010",
        current_status="Draft",
        is_intake_valid=True,
        now=FIXED_NOW,
    )

    audit_event = result["audit_events"][0]
    persistence_result = persist_audit_event(audit_store, audit_event)

    # Assert
    assert audit_store == [audit_event]
    assert persistence_result["persisted"] is True
    assert persistence_result["elapsed_seconds"] < 1
    assert audit_store[0]["user_id"] == "viewer-010"
    assert audit_store[0]["action"] == "Aprovar Intake"
    assert audit_store[0]["timestamp_utc"] == "2026-05-26T12:00:00Z"
