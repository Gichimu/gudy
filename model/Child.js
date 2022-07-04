const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255
    },
    middleName: {
        type: String,
        require: true,
        max: 255
    },
    lastName: {
        type: String,
        require: false,
        max: 255
    },
    gender: {
        type: String,
        required: true,
        max: 10
    },
    nokFirstName: {
        type: String,
        require: true,
        max: 255
    },
    nokMiddleName: {
        type: String,
        require: true,
        max: 255
    },
    relation: {
        type: String,
        require: true,
        max: 50
    },
    nokNumber: {
        type: String,
        require: true,
        max: 20
    },
    dob: {
        type: Date,
        default: Date.now
    },
    photoUrl: {
        type: String,
        max: 255
    }
});


module.exports = mongoose.model('Child', childSchema);