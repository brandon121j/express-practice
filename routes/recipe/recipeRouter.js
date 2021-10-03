var express = require('express');
var router = express.Router();

const { getAllRecipes, createRecipe } = require('./controller/recipeController');

router.get('/', getAllRecipes);
router.post('/create-recipe', createRecipe);