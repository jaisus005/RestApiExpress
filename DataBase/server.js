const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WolfCorp');
const db = mongoose.connection;

db.on('connected', function () {
    console.log("Connected", "Mongoose  is now connected With MongoDB");
});

db.on('error', function () {
    console.log('Error', 'Error on connecting to MongoDB server');
});

db.on('open', function () {
    console.log('Open', ' Mongoose Sever Connection is Open');
});

db.on('disconnected', function () {
    console.log('Disconnected', "Mongoose is Now Disconnnected from MongoDB Server")
});

module.exports ={mongoose}