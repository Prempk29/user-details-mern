const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    age:{
        type: Number
    }
},{timestamps:true})


module.exports = mongoose.model("User",userSchema);