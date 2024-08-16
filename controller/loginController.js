const cryptoJS = require('crypto-js');

const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const loginHadler = async (req, res) => {
    try{
       const user = await User.findOne({number: req.body.number});
       !user && res.status(401).json({ message : "invalid number"});

       const decodedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(cryptoJS.enc.Utf8);
       decodedPassword !== req.body.password && res.status(401).json({ message : "incorrect password"});
       
       const { password, ...rest} =user._doc;
       const accesToken =jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)


       res.json({...rest, accesToken});
    }catch(err){
        console.log(err)
    }
}
module.exports = loginHadler;