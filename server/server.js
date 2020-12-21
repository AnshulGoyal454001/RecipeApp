const express = require('express');
const app=express();
const api=require("./routes/api")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))

app.use("/",api);
mongoose.connect("mongodb://localhost/RecipeAppDB");
mongoose.Promise=global.Promise;

app.post('/trial',(req,res)=>{
    res.send(req.body)
})
app.get('/hey',(req,res)=>{
    console.log("Called :_)")
    res.send('functioning')
})


app.listen(3000, function(){
    console.log("Working Properly")
})