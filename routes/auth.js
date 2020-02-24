const express= require("express")
const router =express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../models/user');

router.post("/login",async (req,res)=>{
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
  //  console.log(user);
   if(!user){
        user = await User.findOne({ username: req.body.username });
   }
   // console.log(user);
    if (!user) return res.status(400).send("Invalid Credentials");

    const valid = await bcrypt.compare(req.body.password,user.password);
  //  console.log(valid);
    if (!valid) return res.status(400).send("Invalid Credentials");
    

    res.status(200).header("x-auth-token",user.generateAuthToken()).send("Token created.");
});


module.exports = router;