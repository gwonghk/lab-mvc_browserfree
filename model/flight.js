var mongoose = require('mongoose');
var Passenger = require('./passenger');



var flightSchema = new mongoose.Schema({
	from: String,
	to: String,
	airline: String,
	passengers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passenger'
    },
});

var Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;
