import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const secret = 'your_super_secret_key_32_chars';
const password = 'secret_sauce';

const key = crypto.createHash('sha256').update(secret).digest();
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(password);
encrypted = Buffer.concat([encrypted, cipher.final()]);

console.log(iv.toString('hex') + ':' + encrypted.toString('hex'));