var {mongoose, Employees} = require('./Model');

var saveDataToServer = (data, result) => {
    var newEmployees = new Employees(data);

    newEmployees.save(function (err, doc) {
        result(err, doc);
    });
}

var getAllEmployees = (result) => {
    var query = Employees.find();
    query.collection(Employees.collection);
    query.exec(function (err, data) {
        result(err, data);
    });
};

var updateInData = function (_id, data, report) {
    Employees.findOne({_id}, function (err, employee) {
        if (err) report(err, undefined);
        else {
            employee = data;
        }
    });
}

module.exports = {saveDataToServer, getAllEmployees,updateInData}