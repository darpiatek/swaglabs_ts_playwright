import { SECRET_KEY, ENV } from '../config/env';
import { decrypt } from '../config/encryption';

const environments = {
  dev: {
    baseURL: 'https://www.saucedemo.com/',
    users: {
      standard: {
        username: decrypt(
          '7a3da27db24ef78066519844ed177503:e4b5e3ab919cf6bfcdf4a21e38b30e44',
          SECRET_KEY
        ),
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
        username: decrypt(
          '7a3da27db24ef78066519844ed177503:e4b5e3ab919cf6bfcdf4a21e38b30e44',
          SECRET_KEY
        ),
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