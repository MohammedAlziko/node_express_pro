
const express = require("express");
const User = require("../models/myDataSchema");
const router = express.Router();
const moment =require("moment");






// 1-  Show Add Element Page
router.get('',(req,res) => {
    res.render("user/add")
});




// 2- Add one Element
router.post("",(req,res) => {
    const user =new User(req.body);
user.save().then(() => {
    res.redirect('/user/add.html')
}).catch((err) => {
    console.log(err)
    
})})








module.exports =router


