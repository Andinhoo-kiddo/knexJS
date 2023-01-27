/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('nome',150).notNullable();
    table.string('sobrenome',200);
    table.string('email',250).notNullable().unique();
    table.string('senha',50).notNullable().unique();
    table.decimal('salario',15, 2).notNullable();
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
