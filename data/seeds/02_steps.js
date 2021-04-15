
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        // Cookies
        { id: 1, step_number: 1, instructions: "Make cookie batter." },
        { id: 2, step_number: 2, instructions: "Bake at 350 degrees." }
        // Pizza
        { id: 3, step_number: 1, instructions: "Prepare pizza dough." },
        { id: 4, step_number: 2, instructions: "Add cheese and sauce." },
        { id: 5, step_number: 3, instructions: "Bake at 500 degrees."},
        // Eggplant Parmesan
        { id: 6, step_number: 1, instructions: "Prepare eggplants by slicing into medallions."},
        { id: 7, step_number: 2, instructions: "Bake at 350 degrees." },
        { id: 8, step_number: 3, instructions: "Add sauce and cheese." },
        { id: 9, step_number: 4, instructions: "Back at 450 degrees."}
      ]);
    });
};
