const express = require('express');
const router = express.Router();

const verifyUser = require("../middlewre/verifyuser");
const wishlistController = require("../controller/wishlistController");
const {createWishlistHandler, deleteWishlistHandler, findWishlistHandler} = wishlistController;

router.route("/")
    .post(verifyUser,createWishlistHandler)

    router.route("/:id")
       .delete(verifyUser, deleteWishlistHandler)


    router.route("/")
        .get(verifyUser, findWishlistHandler)

        
module.exports = router;

      