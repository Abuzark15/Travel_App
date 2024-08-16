
const Wishlist = require("../model/wishlist.model");

const createWishlistHandler = async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try{
       const saveWishlist =await newWishlist.save();
       res.status(201).json(saveWishlist);
    }catch(err){
        res.status(500).json({message : "failed to create wishlist"})
    }
}

const deleteWishlistHandler = async (req, res) => {
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message : "Hotel deleted from wishlist"})
    }catch(err){
        res.status(500).json({message : "could not delete hotel from wishlist"})
    }
   }

   
const findWishlistHandler =  async (req, res) => {
    try{
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({message : "no item found in wishlist"})

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}   

module.exports = {createWishlistHandler, deleteWishlistHandler, findWishlistHandler};