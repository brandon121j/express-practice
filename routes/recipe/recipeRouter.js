var express = require('express');
var router = express.Router();

const { getAllRecipes } = require('./controller/recipeController');

router.get('/', getAllRecipes);