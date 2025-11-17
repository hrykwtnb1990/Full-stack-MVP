/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('kaizen', (table) => {
    table.increments('id').primary();
    table.integer('date');
    table.string('name');
    table.integer('number');
    table.string('department');
    table.string('theme');
    table.string('before');
    table.string('after');
    table.string('solution');
    table.integer('Effect_Amount');
    table.boolean('safe');
    table.boolean('quality');
    table.integer('man_Hour');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('kaizen');
};
