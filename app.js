const express=require('express');
const app=express();
const port=process.env.PORT || 3990;
const bodyParser=require('body-parser');
const Employees=require('./routes/Employees');


//------------------------------------Adding MiddleWare---------------------------------------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/employee.json',Employees);
//-------------------------------------------------------------------------------------------//

app.listen(port,function(){
   console.log(`Express Server Started on Port  ${port}`);
});

module.exports={app}