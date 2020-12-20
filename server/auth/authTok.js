const express = require('express');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const User=require('../models/model')
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());


function authToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1];
    if(token==null)
      return res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err)
      return res.sendStatus(403);
    req.user=user;
    // console.log(user)
    })
    next();
}

  function loginClient(req,res,next){
      user=req.body
      User.find({username:user.username,password:user.password}).then(function(item){
        if(item[0]!=undefined){
          const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
          req.accessToken=accessToken
          req.userDetails=item
          next();
        }
        else{
          // console.log("User Not in database!!");
          res.send("You are not a user, please register")
          next();  
        } 
      })    
  }

  module.exports={authToken,loginClient};