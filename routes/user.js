const express= require("express")
const router =express.Router();
const _ = require("lodash");
const authenticated =require("../middlewares/authentication.js");
const admin =require("../middlewares/authorization-admin.js");
const {User} = require('../models/user');
const bcrypt = require('bcrypt');


//get current user info
router.get("/me", authenticated ,async (req,res,)=>{

    let user= await User.findById(req.user._id).select("-password");
    res.status(200).send(user);
    
});

//get all users
router.get("/", authenticated , admin ,async (req,res,)=>{

    let user= await User.find().select("-__v").sort("name");
    res.status(200).send(user);

});



module.exports = router;