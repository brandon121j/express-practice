var express = require('express');
var router = express.Router();

const { getAllRecipes, createRecipe, deleteRecipe } = require('./controller/recipeController');

router.get('/', getAllRecipes);
router.post('/create-recipe', createRecipe);
router.delete('/delete-recipe-by-id/:id', deleteRecipe);
