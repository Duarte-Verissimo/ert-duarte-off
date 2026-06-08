from datetime import datetime, timezone
import unittest

from src.intake_rules import (
    approve_intake,
    persist_audit_event,
    validate_dr_evidence_date,
)


FIXED_NOW = datetime(2026, 5, 26, 12, 0, 0, tzinfo=timezone.utc)


class IntakeRulesUnittest(unittest.TestCase):
    def test_transition_manager_can_approve_valid_intake(self):
        result = approve_intake(
            role="Transition Manager",
            user_id="tm-001",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertTrue(result["allowed"])
        self.assertEqual(result["status"], "Aprovado")
        self.assertEqual(result["audit_events"], [])

    def test_security_officer_can_approve_valid_intake(self):
        result = approve_intake(
            role="Security Officer",
            user_id="so-001",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertTrue(result["allowed"])
        self.assertEqual(result["status"], "Aprovado")
        self.assertEqual(result["audit_events"], [])

    def test_viewer_cannot_approve_intake(self):
        result = approve_intake(
            role="Viewer",
            user_id="viewer-001",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertFalse(result["allowed"])

    def test_viewer_approval_keeps_status_as_draft(self):
        result = approve_intake(
            role="Viewer",
            user_id="viewer-002",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertEqual(result["status"], "Draft")

    def test_viewer_approval_message_contains_access_denied(self):
        result = approve_intake(
            role="Viewer",
            user_id="viewer-003",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertIn("Acesso Negado", result["message"])

    def test_dr_evidence_exactly_365_days_old_is_valid(self):
        result = validate_dr_evidence_date("2025-05-26", now=FIXED_NOW)

        self.assertTrue(result["is_valid"])
        self.assertEqual(result["age_days"], 365)

    def test_dr_evidence_366_days_old_is_rejected(self):
        result = validate_dr_evidence_date("2025-05-25", now=FIXED_NOW)

        self.assertFalse(result["is_valid"])
        self.assertEqual(result["age_days"], 366)
        self.assertIn("fora do prazo aceite", result["message"])

    def test_dr_evidence_future_date_is_rejected(self):
        result = validate_dr_evidence_date("2026-05-27", now=FIXED_NOW)

        self.assertFalse(result["is_valid"])
        self.assertEqual(result["age_days"], -1)
        self.assertIn("futura", result["message"])

    def test_unauthorized_attempt_creates_audit_event(self):
        result = approve_intake(
            role="Viewer",
            user_id="viewer-009",
            current_status="Draft",
            is_intake_valid=True,
            now=FIXED_NOW,
        )

        self.assertEqual(len(result["audit_events"]), 1)
        audit_event = result["audit_events"][0]
        self.assertEqual(audit_event["user_id"], "viewer-009")
        self.assertEqual(audit_event["action"], "Aprovar Intake")
        self.assertEqual(audit_event["timestamp_utc"], "2026-05-26T12:00:00Z")

    def test_audit_event_is_persisted_in_less_than_one_second(self):
        audit_store = []
        audit_event = {
            "user_id": "viewer-010",
            "action": "Aprovar Intake",
            "timestamp_utc": "2026-05-26T12:00:00Z",
        }

        result = persist_audit_event(audit_store, audit_event)

        self.assertTrue(result["persisted"])
        self.assertLess(result["elapsed_seconds"], 1)
        self.assertEqual(audit_store, [audit_event])


if __name__ == "__main__":
    unittest.main()
