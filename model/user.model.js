const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {type : String, required : true},
    number : {type: Number, required : true, uniguie: true,},
    email : {type: String, requrired : true, uniguie: true,},
    password : {type: String, required : true}
},
{
    timestamps: true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;