# Setup (PyTest / JUnit)

This page explains how to set up your environment and how to run the test suites with **one command**.

> Rule: Your project must be runnable by the teacher with minimal friction.\
> If it needs special steps, document them here.

---

### Choose your track (one per team)

Pick **one** track and stay consistent.

- **Python track**: PyTest (+ optional pytest-bdd / behave)
- **Java track**: JUnit 5 (+ optional Cucumber)

#### Software to install

**Common (all students)**

- Git + GitHub account
- IDE/editor (VS Code / IntelliJ / Eclipse)
- (Optional) Google Chrome (needed only for Lighthouse / Selenium)

**Python track**

- Python 3.11+ (3.10+ acceptable)
- pip (included with Python)
- Project dependencies: `pytest` + (`pytest-bdd` **or** `behave`)

**Java track**

- JDK 17
- Maven (or Gradle, if specified by the course)
- Project dependencies: JUnit 5 + Cucumber (`cucumber-java`, `cucumber-junit-platform-engine`)

---

## Python track — PyTest

### 1) Prerequisites

- Python **3.10+** (recommended)
- pip (comes with Python)
- Optional: a virtual environment (venv)

### 2) Recommended repo structure

/\
├─ bdd/\
│ ├─ features/\
│ │ └─ \*.feature\
│ └─ steps/\
│ └─ test_steps.py\
├─ src/\
│ └─ (your application code, if applicable)\
├─ tests/\
│ ├─ unit/\
│ ├─ integration/\
│ └─ conftest.py\
├─ requirements.txt\
└─ README.md

### 3) Create and activate a virtual environment (recommended)

#### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

#### macOS / Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 4) Install dependencies

Create `requirements.txt` (example):

```txt
pytest>=7.0
# Optional BDD:
pytest-bdd>=7.0
# Optional:
requests>=2.0
```

Install:

```bash
python -m pip install -r requirements.txt
```

### 5) Run tests (one command)

```bash
pytest -q
```

#### Useful flags (optional)

```bash
pytest -q --maxfail=1
pytest -q -k "keyword"
pytest -q tests/unit
```

### 6) PyTest conventions (quick rules)

- Test files: `test_*.py` or `*_test.py`
- Test functions: `test_*`
- Keep tests deterministic:
  - avoid random data unless seeded
  - avoid relying on real external services (use mocks/stubs)
- Prefer clear assertions:
  - check error types/messages for validation tests
  - check outputs, state changes, and side effects explicitly

### 7) Example unit test (copy/paste)

Create: `tests/unit/test_validation.py`

```python
def is_valid_age(age: int) -> bool:
    return age >= 18

def test_is_valid_age_true():
    assert is_valid_age(18) is True

def test_is_valid_age_false():
    assert is_valid_age(17) is False
```

Run:

```bash
pytest -q
```

---

## Java track — JUnit 5

### 1) Prerequisites

- Java **17+** (recommended)
- One build tool:
  - **Maven** (recommended) or **Gradle**
- IDE: IntelliJ / VS Code / Eclipse (any)

### 2) Recommended repo structure (Maven)

```
/
├─ src/
│  ├─ main/java/...
│  └─ test/java/...
├─ pom.xml
└─ README.md
```

### 3) Maven setup (pom.xml minimal)

Create a `pom.xml` with JUnit 5:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>req-testing-labs</artifactId>
  <version>1.0.0</version>

  <properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <junit.jupiter.version>5.10.0</junit.jupiter.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>${junit.jupiter.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.2.5</version>
        <configuration>
          <useModulePath>false</useModulePath>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

### 4) Run tests (one command)

```bash
mvn test
```

### 5) JUnit conventions (quick rules)

- Test classes typically end with `Test`
- Use clear, independent tests:
  - no shared mutable state between tests
  - reset fixtures per test (`@BeforeEach`)
- Prefer expressive assertions:
  - `assertEquals`, `assertTrue`, `assertThrows`, etc.

### 6) Example unit test (copy/paste)

Create: `src/test/java/com/example/ValidationTest.java`

```java
package com.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class ValidationTest {

  boolean isValidAge(int age) { return age >= 18; }

  @Test
  void validAge_true() {
    assertTrue(isValidAge(18));
  }

  @Test
  void validAge_false() {
    assertFalse(isValidAge(17));
  }
}
```

Run:

```bash
mvn test
```

---

## Optional: BDD setup (if your team uses it)

### Python — pytest-bdd

- Put `.feature` files in: `bdd/features/`
- Put steps in: `bdd/steps/`
- Run with:

```bash
pytest -q
```

### Java — Cucumber (high level)

- Put `.feature` files in: `src/test/resources/features/`
- Put steps in: `src/test/java/.../steps/`
- Run with:

```bash
mvn test
```

---

## Definition of Done for “Setup”

Your setup is considered complete when:

- ✅ Tests run with **one command** (PyTest or Maven)
- ✅ A new machine can run tests by following this page
- ✅ README includes the same commands (short version)
- ✅ Repo contains at least **one passing test**
- ✅ No hidden/manual steps (or they are documented here)

---

### Troubleshooting (common issues)

#### Python

- **`pytest: command not found`**
  - run: `python -m pip install -r requirements.txt`
  - or use: `python -m pytest -q`
- **Virtual environment not activated**
  - activate `.venv` and try again

#### Java

- **`mvn: command not found`**
  - install Maven or use IDE Maven runner
- **Tests not detected**
  - ensure test classes are under `src/test/java`
  - ensure class names end with `Test`
