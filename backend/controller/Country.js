const country = require('../models/Country')

module.exports = {
    create : (req, res, next) => {
        country.create({
            name : req.body.name
        }) 
        .then((result) => res.json(result))
        .catch((err) => res.json(err))

    }, 
    getData: (req, res) => {
        country.find({})
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    },

    getDataById: (req, res) => {
        country.findById(req.params.countryId)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    },

    editById : (req, res) => {
        country.findByIdAndUpdate(req.params.countryId)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    },

    deletebyId : (req, res) => {
        country.findByIdAndRemove(req.params.countryId)
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
    }

}
