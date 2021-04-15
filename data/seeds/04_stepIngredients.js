
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stepIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('stepIngredients').insert([
        // Cookies
        { id: 1, step_id: 1, ingredient_id: 1, quantity: 1.5 },
        { id: 2, step_id: 1, ingredient_id: 2, quantity: 0.5 },
        { id: 3, step_id: 1, ingredient_id: 4, quantity: 0.1 },
        { id: 4, step_id: 1, ingredient_id: 8, quantity: 0.5 },
        { id: 5, step_id: 1, ingredient_id: 9, quantity: 1.0 },
        // Pizza
        { id: 6, step_id: 3, ingredient_id: 1, quantity: 2.0 },
        { id: 7, step_id: 3, ingredient_id: 3, quantity: 1.5 },
        { id: 8, step_id: 3, ingredient_id: 4, quantity: 0.1 },
        { id: 9, step_id: 4, ingredient_id: 7, quantity: 0.5 },
        { id: 10, step_id: 4, ingredient_id: 10, quantity: 0.25},
        // Eggplant Parmesan
        { id: 11, step_id: 7, ingredient_id: 5, quantity: 5.0 },
        { id: 12, step_id: 8, ingredient_id: 7, quantity: 0.5 },
        { id: 13, step_id: 8, ingredient:id: 10, quantity: 0.25}
      ]);
    });
};
