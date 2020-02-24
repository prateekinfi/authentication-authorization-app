const express= require("express")
const router =express.Router();
const bcrypt = require('bcrypt');
const {User} = require('../models/user');

app.post("\login",async (req,res)=>{
    let user = await User.findOne({ email: req.body.email });
    if(!user){
        user = await User.findOne({ email: req.body.username });
    }
    if (!user) return res.status(400).send("Invalid Credentials");

    const valid = await bcrypt.compare(user.password,req.body.password);
    if (!valid) return res.status(400).send("Invalid Credentials");

    res.status(200).header("x-auth-token",user.generateAuthToken()).send("Token created.");
});


module.exports = router;