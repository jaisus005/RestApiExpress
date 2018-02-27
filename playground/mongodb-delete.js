//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDb Server');
        return;
    }
    console.log('Connected To MongoDb Server');

    //delete Many
    // db.collection('Todos').deleteMany({text:'Sudhir'}).then((result)=>{
    //     console.log('Sucess of Deletion ',result);
    // },(err)=>{
    //      console.log('Seletion Failed ',err)
    // });

     //delete One
    // db.collection('Todos').deleteOne({punishment:false}).then((result)=>{
    //     console.log('Sucess of Deletion ',result);
    // },(err)=>{
    //     console.log('Seletion Failed ',err)
    // });

   //findOneAndDelete
    db.collection('Todos').findOneAndDelete({punishment:false}).then((result)=>{
        console.log('Sucess of Deletion ',result);
    },(err)=>{
        console.log('Seletion Failed ',err)
    });

    db.close();

})