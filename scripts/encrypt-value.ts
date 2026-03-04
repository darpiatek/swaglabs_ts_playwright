import { SECRET_KEY, ENV } from '../config/env';
import { encrypt } from '../config/encryption';

console.log('SECRET_KEY =', process.env.SECRET_KEY);
const secret = process.env.SECRET_KEY!;
const encrypted = encrypt('secret_sauce', secret);

console.log('ENCRYPTED =', encrypted);