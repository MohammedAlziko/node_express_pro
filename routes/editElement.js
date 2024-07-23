
const express = require("express");
const User = require("../models/myDataSchema");
const router = express.Router();

 // 1- Show one Element
 // 2- update  one Element



// 1- Show edit page Element
router.get('/:id',(req,res) => {
    User.findById(req.params.id).then((result) => {
        res.render("user/edit",{id:result})
    
    }).catch((err) => {
        console.log(err)
    })
        
    });
    
    
    
    // 2- update edit  one Element
    router.put("/:id",(req,res) => {
    User.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
    })})
    


    module.exports =router