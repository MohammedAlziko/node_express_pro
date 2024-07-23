const express = require("express");


const app =express();
const port = process.env.PORT || 3001;
const mongo =require("mongoose")
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs');
app.use(express.static('public'))

const routers =require("./routes/AllRoutes")
const UpdateUser =require("./routes/editElement")
const AddUser =require("./routes/addElement")



var methodOverride = require('method-override')
app.use(methodOverride('_method'))



   



// connect to mongo
mongo.connect("mongodb+srv://mohammed:jwtE0jVhh0pyhBhr@express.pkfxjmp.mongodb.net/all-data?retryWrites=true&w=majority&appName=express")
.then(() => {
    app.listen(port,() => {
        console.log(" connectedDB &  Server Started Successfully");
        console.log(`http://localhost:${port}`);
    })  
}).catch((err) => {
    console.log(err)
})



app.use(routers);
app.use("/edit",UpdateUser)
app.use("/user/add.html",AddUser)
