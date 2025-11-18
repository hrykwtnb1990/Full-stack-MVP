module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      database: 'kaizen',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
