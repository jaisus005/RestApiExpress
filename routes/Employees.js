const express=require('express');
const router=express.Router();
var {saveDataToServer,getAllEmployees,updateInData}=require('../DataBase/Connection');

//------------post routes---------------//
router.post('/',function(req,res,next){
    console.log(req.body);
    saveDataToServer(req.body,function (err,result) {
        if(err) return res.send({status:"failed"});

        else return res.send({status:"sucess",result});
    });
});


router.get('/',function (req,res,next) {
 getAllEmployees(function(err,data){
     if(err) res.send({"status":"failed"})
     else res.send(data);
 });
});


router.patch('/:id/',function (req,res,next) {
    var _id=req.params.id;
})
module.exports=router;