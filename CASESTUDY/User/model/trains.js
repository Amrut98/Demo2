const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    trainno: {
        type: String,
        require: true
    },
    reach_time: {
        type: String,
        require: true
    },
    start_time: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    }
});

const trains = mongoose.model('trains', userSchema);

module.exports = trains;