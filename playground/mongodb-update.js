//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDb Server');
        return;
    }
    console.log('Connected To MongoDb Server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5a952828b5cc560429ad8ba3")
    },{$inc: {
        age:+1
    }},{
        returnOriginal:false
    });

    db.close();

})