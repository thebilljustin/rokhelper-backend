const mongoose = require('mongoose');
const Schema = mongoose.Schema

const lyceumSchema = new Schema({
    question: {
        type: String,
        // required: true
    },
    answer: {
        type: String,
        // required: true
    }
})

const Lyceum = mongoose.model('Lyceum', lyceumSchema)

module.exports = Lyceum