import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

function getEnvValue(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable "${name}" is not defined`);
  }

  return value;
}

export const ENV = (process.env.ENV ?? 'dev').toLowerCase();

export const SECRET_KEY = getEnvValue('SECRET_KEY');