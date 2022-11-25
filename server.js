const express = require("express")
const app = express();
const mongoose = require("mongoose")
const userRoutes = require("./routes/user");
//var userApp = require('./routes/app')
require("dotenv").config();
try {
    mongoose.connect("mongodb://localhost:27017/auth", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("connected to db");
} catch (error) {
    handleError(error);
}
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}))

app.use(userRoutes);
//app.use(userApp);



app.listen(process.env.PORT || 8080, ()=>{
    console.log('server is live in 8080')
})
 
//connecting to database auth
