const express = require("express");
const User = require("../models/myDataSchema");
const router = express.Router();
const moment =require("moment");

// 1-  Show Add Page
// 2- Add one Element
// 3- search page 
// 4- home page
// 5- view one 
// 6- DELETE user



// 3- search page 
router.post("/search",(req1,res) => {
const req =req1.body.search.trim()
User.find({  $or: [{fireName :req},{lastName:req},{gender:req}, ] })
.then((result) => {
    res.render("user/search",{searchData:result})
}).catch((err) => {
    console.log(err)
})})


// 4- home page
router.get('/',(req,res) => { 
User.find().then((result) => {
    res.render("index" ,{ arr:result, moment})
}).catch((err) => {
    console.log(err)  
})})



// 5- view one 
router.get('/view/:id',(req,res) => {
    User.findById(req.params.id).then((result) => {
    res.render('user/view',{user:result , moment})  
    }).catch((err) => {
        console.log(err) })
});





// 6- DELETE user
router.delete("/edit/:id", (req,res) => {
User.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/")
}).catch((err) => {
    console.log(err)
})})




module.exports = router;