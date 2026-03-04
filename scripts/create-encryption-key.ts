import crypto from 'crypto';
import { logger } from '../config/logger';

/**
 * Example script for encrypting a password using AES-256-CBC.
 *
 * The script:
 * 1. Derives a 32-byte key from a secret using SHA-256.
 * 2. Generates a random initialization vector (IV).
 * 3. Encrypts the password using the AES-256-CBC algorithm.
 * 4. Outputs the encrypted value in the format `iv:encrypted`.
 *
 * This format allows the IV to be stored together with the ciphertext,
 * which is required later for decryption.
 */

const algorithm = 'aes-256-cbc';
const secret = 'your_super_secret_key_32_chars';
const password = 'secret_sauce';

logger.debug('Starting password encryption process');

/**
 * Generate a 32-byte encryption key derived from the secret.
 */
const key = crypto.createHash('sha256').update(secret).digest();
logger.debug('Encryption key generated using SHA-256');

/**
 * Generate a random initialization vector required for AES-CBC.
 */
const iv = crypto.randomBytes(16);
logger.debug('Initialization vector (IV) generated');

/**
 * Create cipher instance using the algorithm, key, and IV.
 */
const cipher = crypto.createCipheriv(algorithm, key, iv);
logger.debug('Cipher instance created');

/**
 * Encrypt the password.
 */
let encrypted = cipher.update(password);
encrypted = Buffer.concat([encrypted, cipher.final()]);
logger.debug('Password encrypted successfully');

/**
 * Output encrypted value in `iv:ciphertext` format.
 */
const result = iv.toString('hex') + ':' + encrypted.toString('hex');
logger.debug('Generated encrypted output');

console.log(result);