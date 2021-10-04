var express = require('express');
var router = express.Router();

const { getAllRecipes, createRecipe, deleteRecipe, deleteAll, updateRecipe, getSingleRecipe } = require('./controller/recipeController');

router.get('/', function(req, res, next) {
    getAllRecipes({})
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message })
        })
});

module.exports = router;