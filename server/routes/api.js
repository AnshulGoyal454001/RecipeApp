var express = require('express')
var router = express.Router()
const User=require('../models/model')
require('dotenv').config();
const {authToken,loginClient} = require('../auth/authTok')
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.post('/login',loginClient,(req,res)=>{                     //Login for all users
  accessToken=req.accessToken
  console.log(accessToken)
  res.send({accessToken:accessToken,userDetails:req.userDetails})
})

router.post('/SignUp', function (req, res) {                  //Sign Up User
  console.log("THIS FUNCTION CALLED")
  User.findOne({username:req.body.username}).then(function(user){
      if(user){
        console.log('Username Already Exists')
        res.send('Username Already Exists')
      }
      else{
        User.create(req.body).then(function (item){
        console.log('User Created')
          res.send("Signed Up, Please Login")
         })
      }
  }).catch(()=>{
    console.log('Error in SignUp')
  })
})



module.exports = router