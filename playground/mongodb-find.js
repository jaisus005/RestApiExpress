const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDb Server');
        return;
    }
    console.log('Connected To MongoDb Server');
    db.collection('Todos').find({text:"Sudhir"}).toArray().then((docs)=>{
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log('Unable to feth todos',err);
    });

    db.close()
})