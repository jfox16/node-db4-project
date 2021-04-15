exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").then(function () {
    // Inserts seed entries
    return knex("ingredients").insert([
      { id: 1, name: "Flour" },
      { id: 2, name: "Chocolate Chips" },
      { id: 3, name: "Water" },
      { id: 4, name: "Salt" },
      { id: 5, name: "Eggplant" },
      { id: 6, name: "Egg" },
      { id: 7, name: "Tomato Sauce" },
      { id: 8, name: "Butter" },
      { id: 9, name: "Sugar" },
      { id: 10, name: "Cheese" },
    ]);
  });
};
