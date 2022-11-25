var express = require("express"),

    router = express.Router(),
    verifyToken = require('../middleware/authJWT'),
     {
         signup,
         signin
    }   = require("../controllers/auth.controller.js");

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});
var User = require("../models/user");
var bcrypt = require("bcrypt");

router.get("/hiddencontent", verifyToken, function (req, res) {
    const user = new User({
       // fullName: req.body.fullName,
        
//email: req.body.email,
       // role: req.body.role,
      //  password: bcrypt.hashSync(req.body.password, 8)
    });
    console.log(req.user);
    if (!user) {
        res.status(403)
            .send({
                message: "Invalid JWT token"

            });
    }
    if (req.user.role == "admin") {
        res.status(200)
            .send({
                message: "Congratulations! but there is no hidden content"
            });
    } else {
        res.status(404)
            .send({
                message: "Unauthorised access"
            });
    }
});


module.exports = router;