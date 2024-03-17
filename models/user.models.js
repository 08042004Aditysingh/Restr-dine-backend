const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    category:String,
    item:String,
    eta:String

})

const User = mongoose.model("User", UserSchema)
module.exports = User;