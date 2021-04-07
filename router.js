const e =require("express");
var express = require("express");
var router = express.Router();

const credential = {
  email:"admin@gmail.com",
  password:"admin123"
}

   //Login router
   router.post('/login',(req,res)=>{
     if(req.value.email == credential.email && req.value.email == credential.password){
       req.session.user = req.value.email;
       //res.redirect('/dashboard');
       res.end("Login Successful")
     }else{
       res.end("Invalid Username")
     }
   });

module.export= router;
