const User = require('../model/User');

async function createUser(req, res) {
    try {
        let payload = await User.find(req.body);

        res.json({ message: "SUCCESS", payload })
    } catch(error) {
        res.status(500).json({ message: "FAILURE", error: error.message })
    }
}

module.exports = {
    createUser
}