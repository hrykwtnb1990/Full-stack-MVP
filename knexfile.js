module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      database: 'kaizen',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      durectory: './seeds',
    },
  },
};
