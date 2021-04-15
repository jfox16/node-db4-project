
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments(); // id
      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('steps', tbl => {
      tbl.increments(); // id
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE');
      tbl.integer('step_number')
        .notNullable();
      tbl.text('instructions')
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments(); // id
      tbl.string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('stepIngredients', tbl => {
      tbl.increments(); // id
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('steps.id')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('CASCADE');
      tbl.decimal('quantity')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('stepIngredients');
};
