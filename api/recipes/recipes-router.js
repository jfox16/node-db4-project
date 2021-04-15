
const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Recipes.getRecipeById(req.params.id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => next(err));
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
