# Swag Labs -- Playwright + TypeScript Automation

End-to-end test automation project for **https://www.saucedemo.com**
built with:

-   Playwright
-   TypeScript
-   Page Object Model (POM)
-   Environment-based configuration
-   Encrypted credentials
-   Custom logger with log levels
-   Parallel test execution
-   Allure reporting
-   Jenkins CI pipeline

------------------------------------------------------------------------

# 📦 Tech Stack

-   Node.js
-   Playwright
-   TypeScript
-   Allure Reporter
-   Jenkins
-   Custom Logger

------------------------------------------------------------------------

# 🚀 Getting Started (Local Setup)

## 1️⃣ Install Node.js

Make sure Node.js is installed:

    node -v
    npm -v

If not installed:

    brew install node

------------------------------------------------------------------------

## 2️⃣ Install dependencies

From project root:

    npm install

Install Playwright browsers:

    npx playwright install

------------------------------------------------------------------------

# ⚙ Environment Configuration

Create `.env` file in the project root:

    ENV=dev
    SECRET_KEY=your_secret_key_here
    LOG_LEVEL=info

### Environment variables

  Variable     Description
  ------------ -----------------------------
  ENV          Target environment
  SECRET_KEY   Used to decrypt credentials
  LOG_LEVEL    Logger verbosity

------------------------------------------------------------------------

# 🌍 Environment Separation

The project supports multiple environments.

Environment configuration is stored in:

    data/environments.ts

Example structure:

``` ts
export const environments = {
  dev: {
    baseUrl: 'https://www.saucedemo.com'
  },
  tst: {
    baseUrl: 'https://www.saucedemo.com'
  }
};
```

Each environment may contain:

-   base URLs
-   users
-   credentials
-   feature flags
-   test data

Environment resolution is handled in:

    config/env.ts

------------------------------------------------------------------------

# 📝 Logging

Project includes a custom logger supporting multiple log levels.

Supported levels:

    debug
    info
    warn
    error

Example:

``` ts
logger.info('Navigating to inventory page');
logger.debug('Returning locator: productPrices');
```

Example output:

    [2026-03-04T15:10:11.412Z] [INFO] Navigating to inventory page
    [2026-03-04T15:10:11.912Z] [DEBUG] Returning locator: productPrices

------------------------------------------------------------------------

# 🔐 Encryption

Sensitive data such as passwords are stored **in encrypted form**.

Encryption algorithm:

    AES-256-CBC

Encryption utilities:

    config/encryption.ts

Example encrypted value:

    8a51c9c4e7e52f0e3e0c3a2eae2c9c12:8f0b4c9c81f0f5f07c5c64c33b2e77aa

## Encryption Flow

1.  Password encrypted with `SECRET_KEY`
2.  Stored in `data/environments.ts`
3.  Decrypted at runtime using `process.env.SECRET_KEY`

------------------------------------------------------------------------

# ▶ Running Tests Locally

Run all tests:

    npx playwright test

Run specific browser:

    npx playwright test --project=chromium

Run specific test:

    npx playwright test tests/purchase.spec.ts

------------------------------------------------------------------------

# ⚡ Parallel Execution

Playwright runs tests in parallel.

Configuration:

    playwright.config.ts

Example:

``` ts
workers: 4
```

Benefits:

-   faster execution
-   scalable test suites
-   CI friendly

------------------------------------------------------------------------

# 📊 Reports

## Playwright HTML Report

    npx playwright show-report

Report location:

    playwright-report/

------------------------------------------------------------------------

## Allure Report

Install:

    brew install openjdk
    brew install allure

Generate report:

    npx allure serve allure-results

Directories:

    allure-results/
    allure-report/

------------------------------------------------------------------------

# 🏗 Project Structure

    page-objects/
      inventory-page/
      cart-page/
      checkout-pages/
      components/

    data/
      environments.ts
      products.ts

    config/
      env.ts
      encryption.ts
      logger.ts

    tests/
      setup/
      purchase.spec.ts

------------------------------------------------------------------------

# 🧪 Test Architecture

The project follows **Page Object Model (POM)**.

Key ideas:

-   page objects encapsulate actions
-   locators stored separately
-   environment-based configuration
-   reusable authentication
-   structured logging
-   parallel execution

------------------------------------------------------------------------

# 🔑 Authentication Setup

Authentication executed once in setup.

Storage state saved to:

    .auth/storageState.json

Benefits:

-   faster test execution
-   avoids repeated login

------------------------------------------------------------------------

# 🤖 Jenkins CI

Pipeline steps:

1.  Install dependencies
2.  Install Playwright browsers
3.  Run tests
4.  Publish Allure report

Pipeline parameters:

    ENV
    LOG_LEVEL

Example:

    ENV=tst
    LOG_LEVEL=info

------------------------------------------------------------------------

# 🧹 Ignored Files

    node_modules/
    .auth/
    playwright-report/
    test-results/
    allure-results/
    allure-report/
    .vscode/

------------------------------------------------------------------------

# 📌 Quick Commands

Run tests:

    npx playwright test

Show report:

    npx playwright show-report

Allure:

    npx allure serve allure-results

------------------------------------------------------------------------

Happy testing 🚀
