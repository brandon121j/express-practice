var express = require('express');
var router = express.Router();
var personController = require('./controller/personController');

router.get('/', function(req, res) {
    personController.getAllPeople({}, function(err, foundPerson) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message })
        } else {
            res.json({ message: "SUCCESS", foundPerson })
        }
    });
});

router.get('/get-by-id/:id', function(req, res) {
    personController.getSinglePerson(req.params.id, function(err, foundPerson) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message})
        } else {
            res.json({ message: "SUCCESS", foundPerson })
        }
    });
});

router.post('/create-person', function(req, res) {
    personController.createPerson(req.body, function(err, createdPerson) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message })
        } else {
            res.json({ message: "SUCCESS", createdPerson })
        }
    });
});

router.put('/update/:id', function(req, res) {
    personController.updatePerson(req.params.id, req.body, function(err, updatedPerson) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message })
        } else {
            res.json({ message: "SUCCESS", updatedPerson })
        }
    });
});

router.delete('/delete-by-id/:id', function(req, res) {
    personController.deletePerson(req.params.id, function(err, deletedPerson) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message })
        } else {
            res.json({ message: "SUCCESS", deletedPerson })
        }
    });
});

router.delete('/delete-all', function(req, res) {
    personController.deleteAllPeople({}, function(err, deletedAll) {
        if (err) {
            res
                .status(500)
                .json({ message: "FAILURE", error: err.message })
        } else {
            res.json({ message: "SUCCESS", deletedAll })
        }
    })
})

module.exports = router;