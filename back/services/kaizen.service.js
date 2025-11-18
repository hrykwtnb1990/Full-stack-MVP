const repo = require('../repository/kaizen.repository');

module.exports = {
  async getAll() {
    return repo.findAll();
  },

  async getById(id) {
    const item = await repo.findById(id);
    if (!item) throw new Error('Not Found');
    return item;
  },

  async create(payload) {
    return repo.create(payload);
  },
};
