
const mongo =require("mongoose");


const Schema =mongo.Schema;


// DEFINE THE SCHIMA
const articleSchema =new Schema({
    fireName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: Number,
    country: String,
    gender: String,
},{timestamps:true});



// CREATE A MODEL


const User =mongo.model("User",articleSchema);


// EXPORT THE MODEL

module.exports =User






