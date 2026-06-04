# -*- coding: utf-8 -*-
from pathlib import Path
import sys


PROJECT_ROOT = Path(__file__).resolve().parents[1]

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))


def before_scenario(context, scenario):
    context.result = None
    context.audit_store = []
    context.role = None
    context.user_id = "demo-user"
    context.current_status = "Draft"
    context.is_intake_valid = True
    context.now = None
    context.dr_date = None
    context.dr_validation = None
    context.persistence_result = None
