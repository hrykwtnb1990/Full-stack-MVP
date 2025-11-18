const knex = require('./db');

module.exports = {
  findAll() {
    return knex('kaizen').select('*');
  },
  findById(id) {
    return knex('kaizen').where({ id }).first();
  },
  create(data) {
    return knex('kaizen').insert(data).returnning('*');
  },
};
