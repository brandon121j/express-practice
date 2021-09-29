const Person = require('../model/Person');

module.exports = {

    getAllPeople: (body, callback) => {
        Person.find(body, function(err, foundPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundPerson)
            }
        })
    },

    getSinglePerson: (id, callback) => {
        Person.findById(id, function(err, foundPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundPerson)
            }
        })
    },

    createPerson: (body, callback) => {

        const newPerson = new Person({
            firstName: body.firstName,
            lastName: body.lastName,
            age: body.age
        })

        newPerson.save(function(err, createdPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, createdPerson)
            }
        });
    },

    deletePerson: (id, callback) => {
        Person.findByIdAndDelete(id, function(err, deletedPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, deletedPerson)
            }
        });
    },

    deleteAllPeople: (body, callback) => {
        Person.deleteMany(function(err, deleted) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, deleted)
            }
        });
    },

    updatePerson: (id, body, callback) => {
        Person.findByIdAndUpdate(id, body, { new: true }, function(err, updatedPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, updatedPerson)
            }
        });
    },

}