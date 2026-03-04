import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page/login-page';
import { config } from '../../data/environments';
import fs from 'fs';
import { logger } from '../../config/logger';

/**
 * Authentication setup test.
 *
 * This setup script performs login once before tests and stores
 * the authenticated browser state. The stored state can then be
 * reused by other tests to avoid repeating the login process.
 *
 * The authentication state is saved in `.auth/storageState.json`.
 */
setup('authenticate', async ({ page }) => {
  logger.info('Starting authentication setup');

  /**
   * Ensure the `.auth` directory exists.
   * It is used to store Playwright authentication state.
   */
  if (!fs.existsSync('.auth')) {
    logger.info('Creating .auth directory');
    fs.mkdirSync('.auth');
  }

  /**
   * Navigate to the application root page.
   */
  logger.info('Navigating to application root');
  await page.goto('/');

  /**
   * Initialize LoginPage and perform login using
   * credentials from environment configuration.
   */
  const loginPage = new LoginPage(page);

  logger.info('Logging in with standard user');
  await loginPage.login(
    config.users.standard.username,
    config.users.standard.password
  );

  /**
   * Verify that login was successful by checking
   * if the user was redirected to the inventory page.
   */
  logger.info('Validating successful login');
  await expect(page).toHaveURL(/inventory/);

  /**
   * Save authenticated browser state so it can be reused
   * in other tests without performing login again.
   */
  logger.info('Saving authentication storage state');
  await page.context().storageState({
    path: '.auth/storageState.json',
  });
});