const express = require('express');
const router = express.Router();

const getAllHotelHandller = require("../controller/hotelontroller");


router.route("/")
    .get(getAllHotelHandller)



module.exports = router;
