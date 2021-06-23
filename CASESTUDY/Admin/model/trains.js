const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    trainno: {
        type: String,
        required: true
    },
    reach_time: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }
});

const trains = mongoose.model('trains', userSchema);

module.exports = trains;