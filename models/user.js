const mongoose = require('mongoose');
const config = require("config");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema(
    {
firstname : {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
},
lastname :{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
},
email : {    
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
},
phone : {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
},
username :{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
},
password:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
},
role: {
    type: String,
    required: true,
    default : "user"
}
    });



userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
      {
        _id: this._id,
        firstName: this.firstName,
        email: this.email,
        role: this.role
      },
      config.get("jwtPrivateKey")
    );
    return token;
  };
  const User= mongoose.model('User',userSchema);

  module.exports.User = User