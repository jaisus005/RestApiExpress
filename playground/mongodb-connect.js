const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDb Server');
        return;
    }
    console.log('Connected To MongoDb Server');
    db.collection('Todos').insertOne({
        text: 'Nahh soniye',
        completed: true
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert', err);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
})