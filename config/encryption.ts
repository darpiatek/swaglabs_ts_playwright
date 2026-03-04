import crypto from 'crypto';
import 'dotenv/config';
import { logger } from './logger';

/**
 * Encryption algorithm used by this module.
 * AES-256-CBC requires a 32-byte key and a 16-byte initialization vector (IV).
 */
const algorithm = 'aes-256-cbc';

/**
 * Derives a 32-byte encryption key from the provided secret.
 * The secret is hashed using SHA-256 to ensure the correct key length
 * required by the AES-256 algorithm.
 *
 * @param secret - Any secret value (e.g., password or environment variable)
 * @returns A Buffer containing a 32-byte cryptographic key
 */
function getKey(secret: string): Buffer {
  return crypto
    .createHash('sha256')
    .update(secret)
    .digest();
}

/**
 * Encrypts plain text using AES-256-CBC.
 *
 * Process:
 * 1. Generates a random 16-byte initialization vector (IV).
 * 2. Derives a cryptographic key from the provided secret.
 * 3. Encrypts the text using Node.js `crypto.createCipheriv`.
 * 4. Returns the result in the format `ivHex:encryptedHex`.
 *
 * The IV is included in the output because it is required for decryption.
 *
 * @param plainText - The plain text to encrypt
 * @param secret - Secret used to derive the encryption key
 * @returns Encrypted string in the format `ivHex:encryptedHex`
 */
export function encrypt(plainText: string, secret: string): string {
  const iv = crypto.randomBytes(16); // AES block size
  const key = getKey(secret);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(plainText, 'utf8');
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  logger.debug(`Encrypted: ${encrypted}`);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

/**
 * Decrypts text previously encrypted with the `encrypt` function.
 *
 * Process:
 * 1. Splits the input string into IV and encrypted data (`iv:encrypted`).
 * 2. Recreates the encryption key from the secret.
 * 3. Decrypts the data using Node.js `crypto.createDecipheriv`.
 * 4. Returns the original UTF-8 plain text.
 *
 * @param encryptedText - Encrypted string in the format `ivHex:encryptedHex`
 * @param secret - The same secret that was used during encryption
 * @returns Decrypted plain text
 */
export function decrypt(encryptedText: string, secret: string): string {
  const [ivHex, encryptedHex] = encryptedText.split(':');

  const iv = Buffer.from(ivHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');

  const key = getKey(secret);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  let decryptedValue = decrypted.toString('utf8')
  logger.debug(`Encrypted: ${decryptedValue}`);

  return decryptedValue
}