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
};
