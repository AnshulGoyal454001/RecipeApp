const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const food = new Schema({
//     emi:{
//         type:Number,
//         required:[true,'emi field is required']
//     }
// })

const LoginSchema=new Schema({
    username:{
        type:String,
        required:[true,'Username field is required']
    },
    password:{
        type:String,
        required:[true,'Password field is required']
    },
    Details:[String]
});

const User=mongoose.model('User',LoginSchema);
module.exports=User;