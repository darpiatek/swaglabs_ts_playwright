import crypto from 'crypto';
import 'dotenv/config';

const algorithm = 'aes-256-cbc';

function getKey(secret: string): Buffer {
  return crypto
    .createHash('sha256')
    .update(secret)
    .digest();
}

export function encrypt(plainText: string, secret: string): string {
  const iv = crypto.randomBytes(16); // AES block size
  const key = getKey(secret);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(plainText, 'utf8');
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decrypt(encryptedText: string, secret: string): string {
  const [ivHex, encryptedHex] = encryptedText.split(':');

  const iv = Buffer.from(ivHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');

  const key = getKey(secret);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString('utf8');
}