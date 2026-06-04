# -*- coding: utf-8 -*-
from datetime import datetime, timezone

from behave import given, then, when

from src.intake_rules import (
    approve_intake,
    persist_audit_event,
    validate_dr_evidence_date,
)


@given('que o utilizador tem role "{role}"')
def step_user_role(context, role):
    context.role = role


@given('que o utilizador tem id "{user_id}"')
def step_user_id(context, user_id):
    context.user_id = user_id


@given('que o Intake está no estado "{status}"')
def step_intake_status(context, status):
    context.current_status = status


@given("que o Intake é válido")
def step_intake_valid(context):
    context.is_intake_valid = True


@when("o utilizador solicita a aprovação do Intake")
@when("o utilizador tenta aprovar o Intake")
def step_approve_intake(context):
    context.result = approve_intake(
        role=context.role,
        user_id=context.user_id,
        current_status=context.current_status,
        is_intake_valid=context.is_intake_valid,
        now=context.now,
    )


@then("o sistema aprova o Intake")
def step_system_approves(context):
    assert context.result["allowed"] is True


@then("o sistema bloqueia a ação")
def step_system_blocks(context):
    assert context.result["allowed"] is False


@then('apresenta "{message}"')
def step_message_contains(context, message):
    assert message in context.result["message"]


@then('o estado do Intake passa para "{status}"')
def step_status_changes(context, status):
    assert context.result["status"] == status


@then('o estado do Intake permanece "{status}"')
def step_status_remains(context, status):
    assert context.result["status"] == status


@then("não é criado audit event")
def step_no_audit_event(context):
    assert context.result["audit_events"] == []


@then("é criado um audit event com User ID, ação e timestamp UTC")
def step_audit_event_created(context):
    audit_events = context.result["audit_events"]
    assert len(audit_events) == 1
    event = audit_events[0]
    assert event["user_id"] == context.user_id
    assert event["action"] == "Aprovar Intake"
    assert event["timestamp_utc"].endswith("Z")


@then("o utilizador não recebe confirmação explícita de que o log foi criado")
def step_user_not_informed_log(context):
    message = context.result["message"].lower()
    assert "log" not in message
    assert "auditoria" not in message


@given('que a data atual é "{date_value}"')
def step_current_date(context, date_value):
    context.now = datetime.fromisoformat(date_value).replace(tzinfo=timezone.utc)


@given('que a evidência de Disaster Recovery tem a data "{date_value}"')
def step_dr_evidence_date(context, date_value):
    context.dr_date = date_value


@when("o sistema valida a evidência de Disaster Recovery")
def step_validate_dr_evidence(context):
    context.dr_validation = validate_dr_evidence_date(
        context.dr_date,
        now=context.now,
    )


@then("a evidência é considerada válida")
def step_evidence_valid(context):
    assert context.dr_validation["is_valid"] is True


@then("a evidência é rejeitada")
def step_evidence_rejected(context):
    assert context.dr_validation["is_valid"] is False


@then("a idade da evidência é {days:d} dias")
def step_evidence_age(context, days):
    assert context.dr_validation["age_days"] == days


@then("a mensagem indica que a evidência está fora do prazo aceite")
def step_message_out_of_date(context):
    assert "fora do prazo aceite" in context.dr_validation["message"]


@then("a mensagem indica que a data não pode ser futura")
def step_message_future_date(context):
    assert "futura" in context.dr_validation["message"]


@given("que existe um audit event de tentativa não autorizada")
def step_existing_audit_event(context):
    context.role = "Viewer"
    context.user_id = "viewer-009"
    context.current_status = "Draft"
    context.is_intake_valid = True
    context.result = approve_intake(
        role=context.role,
        user_id=context.user_id,
        current_status=context.current_status,
        is_intake_valid=context.is_intake_valid,
        now=datetime(2026, 5, 26, 12, 0, 0, tzinfo=timezone.utc),
    )
    assert len(context.result["audit_events"]) == 1


@when("o sistema persiste o audit event")
def step_persist_audit_event(context):
    audit_event = context.result["audit_events"][0]
    context.persistence_result = persist_audit_event(
        context.audit_store,
        audit_event,
    )


@then("o audit event fica guardado no audit store")
def step_audit_event_stored(context):
    assert len(context.audit_store) == 1
    assert context.audit_store[0] == context.result["audit_events"][0]


@then("a persistência demora menos de 1 segundo")
def step_persistence_under_one_second(context):
    assert context.persistence_result["persisted"] is True
    assert context.persistence_result["elapsed_seconds"] < 1
