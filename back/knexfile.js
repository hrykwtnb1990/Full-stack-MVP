module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      user: process.env.NODE_ENV,
      database: process.env.DATABASE_URL,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
