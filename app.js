var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airport');



var Airport = require('./model/airport');
var Terminal = require('./model/terminal');
var Flight = require('./model/flight');
var Passenger = require('./model/passenger');

//----------------------------------------------
// Airport
var airport1 = new Airport({
	name: 'JFK',
	country: 'USA',
	terminals: 'American Airlines',
	opened: 2011-19-05
});

airport1.save(function(err, newAirport){
	console.log('airport1 test')
	if(err){
		console.log("error", err);
		return;
	}
	console.log('airport logged');
});

// An airport called JFK in the USA opened on a random date in 1990. Assign this object to variable "airport1"



//----------------------------------------------
// Terminal
var terminal1 = new Terminal({
	name: 'Terminal 1',
	//flights: 'flight1 and flight2',
	flights: Flight.ObjectId,
	capacity: 234324
});

terminal1.save(function(err, newTerminal){
	if(err){
		console.log("error", err);
		return;
	}
	console.log(terminal1);
});

// A terminal called Terminal 1 that is pushed to airport1 with a capacity of 234324 and two flights: flight1 and flight2

//----------------------------------------------
// Flight

var flight1 = new Flight({
	from: 'CDG France',
	to: 'JFK New-York, USA',
	airline: 'American Airlines',
	passengers: null
});


flight1.save(function(err, newFlight){
	if(err){
		console.log("error", err);
		return;
	}
	console.log('flight1 logged');
});



var flight2 = new Flight({
	from: 'Heathrow UK',
	to: 'JFK New-York, USA',
	airline: 'British Airways',
	passengers: Passenger.ObjectId
});


flight2.save(function(err, newFlight){
	if(err){
		console.log("error", err);
		return;
	}
	console.log(flight2	);
});


// A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers. Assign this object to variable "flight2"


//----------------------------------------------
// Passenger
var lukeskywalker = new Passenger({
	firstName: 'Luke',
	lastName: 'Skywalker',
	dob: 1944-14-05
});

lukeskywalker.save(function(err, newPassenger){
	if(err){
		console.log("error", err);
		return;
	}
	console.log('lukeskywalker');
});