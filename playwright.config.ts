import { defineConfig, devices } from '@playwright/test';
import { config } from './data/environments';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
  ['list'],
  ['allure-playwright'],
  ],

  use: {
    baseURL: config.baseURL,
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/setup/auth-setup.ts',
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      testIgnore: '**/setup/auth-setup.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/storageState.json',
        launchOptions: {
          args: [
            '--disable-features=PasswordLeakDetection',
            '--disable-save-password-bubble',
            '--disable-notifications',
            '--disable-infobars',
            '--disable-component-update',
            '--disable-background-networking',
          ],
        },
        permissions: [],
      },
    },
  ],
});