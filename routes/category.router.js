const express = require('express');
const router = express.Router();

const categoryHandller = require("../controller/categoryController")

router.route("/")
   .get(categoryHandller)


   module.exports = router;