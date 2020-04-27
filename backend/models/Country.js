const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countryList =  new Schema ({
    name: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Country', countryList)