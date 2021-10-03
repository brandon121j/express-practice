const Recipe = require('../model/Recipe');

async function getAllRecipes(req, res) {
    try {
        let payload = await Recipe.find(req.body);

        res.json({ message: "SUCCESS", payload})
    } catch(error) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
    }
}

const createRecipe = async (req, res) => {

    try {
        const createdRecipe = new Recipe({
            recipe: req.body.recipe,
            price: req.body.price
        })

        let payload = await createRecipe.save()

        res.json({ message: "SUCCESS", payload })
    } catch(error) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message})
    }
}

async function deleteRecipe(req, res) {

    try {
        payload = Recipe.findByIdAndDelete(req.params.id);

        res.json({ message: "SUCCESS", payload })
    } catch(error) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
    }
}

const deleteAll = async(req, res) => {
    try {
        payload = Recipe.deleteMany()

        res.json({ message: "SUCCESS", payload })
    } catch(error) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
    }

}

async function updateRecipe(req, res) {
    try {
        let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
        
        res.json({ message: "SUCCESS", updateRecipe })
    } catch(error) {
        res
            .status(500).json({ message: "FAILURE", error: error.message })
    }

}

const getSingleRecipe = async(req, res) => {
    try {
        let payload = Recipe.findById(req.params.id)

        res.json({ message: "SUCCESS", payload })
    } catch(err) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
    }
    
}