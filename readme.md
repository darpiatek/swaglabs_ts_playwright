# Swag Labs – Playwright + TypeScript Automation

End-to-end test automation project for **https://www.saucedemo.com** built with:

- Playwright
- TypeScript
- Page Object Model (POM)
- Environment configuration
- Encrypted credentials
- Allure reporting
- Jenkins pipeline support

---

# 📦 Tech Stack

- Node.js
- Playwright
- TypeScript
- Allure Reporter
- Jenkins (CI-ready)

---

# 🚀 Getting Started (Local Setup)

## 1️⃣ Install Node.js

Make sure Node.js is installed:

```bash
node -v
npm -v
```

If not installed:

```bash
brew install node
```

---

## 2️⃣ Install dependencies

From project root:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## 3️⃣ Environment Configuration

Create `.env` file in project root:

```
ENV=dev
SECRET_KEY=your_secret_key_here
```

`ENV` determines which environment configuration is used.

Supported environments are defined in:

```
data/environments.ts
```

---

# ▶ Running Tests Locally

## Run all tests

```bash
npx playwright test
```

## Run specific project

```bash
npx playwright test --project=chromium
```

## Run specific test file

```bash
npx playwright test tests/purchase.spec.ts
```

---

# 📊 Reports

## 1️⃣ Playwright HTML Report

After running tests:

```bash
npx playwright show-report
```

Report is generated in:

```
playwright-report/
```

---

## 2️⃣ Allure Report (Recommended)

### Install Allure CLI

Requires Java installed:

```bash
brew install openjdk
```

Install Allure CLI:

```bash
brew install allure
```

---

### Generate Allure Report

After test execution:

```bash
npx allure serve allure-results
```

This will:
- Generate report
- Start local server
- Open browser automatically

Results directory:

```
allure-results/
```

Generated report directory:

```
allure-report/
```

---

# 🏗 Project Structure

```
page-objects/
  inventory-page/
  cart-page/
  checkout-page/
  components/

data/
  environments.ts
  products.ts

config/
  env.ts
  encryption.ts

tests/
  setup/
  purchase.spec.ts
```

---

# 🔐 Credentials Handling

- Passwords are encrypted in `environments.ts`
- Decrypted using `SECRET_KEY` from `.env`
- Sensitive data is not stored in plain text

---

# 🧪 Test Architecture

- Page Object Model
- Business steps grouped using `test.step()`
- Environment-based configuration
- Setup project for authentication
- Storage state reuse for logged-in sessions

---

# 🤖 Jenkins CI

Project includes `Jenkinsfile` that:

1. Installs dependencies
2. Installs Playwright browsers
3. Runs tests
4. Publishes Allure report

---

# 🧹 Ignored Files

The following folders are excluded from Git:

```
node_modules/
.auth/
playwright-report/
test-results/
allure-results/
allure-report/
.vscode/
```

---

# 🧠 Notes

- Tests use environment-based configuration
- All URLs are centrally managed
- No hardcoded strings in test scenarios
- All business steps visible in Allure

---

# 📌 Quick Commands Cheat Sheet

Run tests:

```bash
npx playwright test
```

Open Playwright report:

```bash
npx playwright show-report
```

Open Allure report:

```bash
npx allure serve allure-results
```

---

Project ready for:

- Local execution
- CI pipelines
- Reporting
- Scalable test development

---

Happy testing 🚀

