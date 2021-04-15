exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").then(function () {
    // Inserts seed entries
    return knex("recipes").insert([
      { id: 1, name: "Cookies" },
      { id: 2, name: "Pizza" },
      { id: 3, name: "Eggplant Parmesan" },
    ]);
  });
};
