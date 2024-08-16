const express = require('express');

const mongoose = require('mongoose');

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
  .post(async(req, res) => {
    try{
        // await Hotel.remove();
        const categoriesInDb = await Category.insertMany(categories.data);
        res.json(categoriesInDb)

    }catch(err){
        console.log(err);
        res.json({mesaage : "Could not add catregories to DB"})
    }
   
  })

  module.exports = router;