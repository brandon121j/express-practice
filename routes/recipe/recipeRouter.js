var express = require('express');
var router = express.Router();

const { getAllRecipes, createRecipe, deleteRecipe, deleteAll, updateRecipe, getSingleRecipe } = require('./controller/recipeController');

router.get('/', getAllRecipes);
router.get('/recipe-by-id', getSingleRecipe);
router.post('/create-recipe', createRecipe);
router.delete('/delete-recipe-by-id/:id', deleteRecipe);
router.delete('/delete-all', deleteAll);
router.put('/update/:id', updateRecipe);

module.exports = router;