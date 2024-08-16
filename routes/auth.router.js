const express = require('express');

const signupHandler = require("../controller/signupController");
const loginHadler = require("../controller/loginController");

const router = express.Router();

router.route("/register")
     .post(signupHandler) 


router.route("/login")
    .post(loginHadler)


  
module.exports = router;