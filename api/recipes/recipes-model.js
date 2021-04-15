const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const recipe = await db("recipes").where({ id: recipe_id }).first();
  const steps = await db("steps").where({ recipe_id });

  const stepIngredients = await Promise.all(
    steps.map(async (step) =>
      db("stepIngredients as si")
        .where("si.step_id", step.id)
        .leftJoin("ingredients as in", "si.ingredient_id", "in.id")
        .select("quantity", "name")
    )
  );

  steps.forEach((step, i) => {
    step.ingredients = stepIngredients[i];
  });

  recipe.steps = steps;
  return Promise.resolve(recipe);
}

module.exports = {
  getRecipeById,
};
