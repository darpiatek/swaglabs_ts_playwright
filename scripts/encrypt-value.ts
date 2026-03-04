import { encrypt } from '../config/encryption';
import { logger } from '../config/logger';

/**
 * Utility script used to generate an encrypted value
 * for sensitive data such as passwords.
 *
 * The script:
 * 1. Reads the SECRET_KEY from environment variables.
 * 2. Uses the encryption utility to encrypt a plain text password.
 * 3. Prints the encrypted value so it can be stored in configuration.
 *
 * This is typically used during development to prepare encrypted
 * credentials that will later be used in automated tests.
 * 
 * Run command: npx tsx scripts/encrypt-value.ts
 */

logger.debug('Reading SECRET_KEY from environment variables');

/**
 * Output the current SECRET_KEY value from environment variables.
 * Useful for verifying that environment configuration is loaded.
 */
logger.debug(`SECRET_KEY = ${process.env.SECRET_KEY}`);

/**
 * Retrieve the secret key used for encryption.
 * The non-null assertion assumes the variable is defined.
 */
const secret = process.env.SECRET_KEY!;

logger.debug('Encrypting password using provided SECRET_KEY');

/**
 * Encrypt the plain text password.
 */
const encrypted = encrypt('standard_user', secret);

logger.debug('Encryption completed successfully');

/**
 * Output the encrypted password.
 */
logger.debug(`ENCRYPTED = ${encrypted}`);
console.log(`ENCRYPTED = ${encrypted}`);