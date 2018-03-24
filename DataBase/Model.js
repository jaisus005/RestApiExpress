var {mongoose} = require('./server');

var employeesSchemas = mongoose.Schema({

    userName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
    },
    phoneNo: {
        type: Number,
        trim: true,
        required: true,
        minlength: 10
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date
    }

});

var Employees=mongoose.model('Employees',employeesSchemas);

module.exports = {mongoose,Employees}