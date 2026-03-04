import { SECRET_KEY, ENV } from '../config/env';
import { decrypt } from '../config/encryption';

const environments = {
  dev: {
    baseURL: 'https://www.saucedemo.com/',
    users: {
      standard: {
        username: 'standard_user',
        password: decrypt(
          'f9a51ef639fa6ba01ff3fe7b8c452bcb:1f550426bc4bade61ec174ace41313d6',
          SECRET_KEY
        ),
      },
    },
  },

  tst: {
    baseURL: 'https://www.saucedemo.com/',
    users: {
      standard: {
        username: 'standard_user',
        password: decrypt(
          'f9a51ef639fa6ba01ff3fe7b8c452bcb:1f550426bc4bade61ec174ace41313d6',
          SECRET_KEY
        ),
      },
    },
  },
};

function isEnvironmentKey(value: string): value is keyof typeof environments {
  return value in environments;
}

if (!isEnvironmentKey(ENV)) {
  throw new Error(
    `Environment "${ENV}" not defined. Available: ${Object.keys(environments).join(', ')}`
  );
}

export const config = environments[ENV];

console.log('ACTIVE ENV:', ENV);
console.log('BASE URL:', config.baseURL);