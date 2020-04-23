const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const heroesModel = new Schema ({
    name : {
        type: String,
        required :true
    },
    born : {
        type : String,
        required: true
    },
    died : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    establishment : {
        type : String,
        required: true
    }
}) 

module.exports = mongoose.model('heroes', heroesModel)