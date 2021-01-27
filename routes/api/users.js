const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const router = express.router;

//Load our input validation
const validateRegistrationInput = require("../../validation/register");
const validateloginInput = require("../../validation/login");

//Load User Model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
 //Form validation

 const { errors, isValid } = validateRegistrationInput(req.body);

 //Check Validation
 if (!isValid) {
  return res.status(400).json(errors);
 }

 User.findOne({ email: req.body.email }).then((user) => {
  if (user) {
   return res.status(400).json({ email: "Email alreay exists" });
  } else {
   const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    passqord: req.body.password,
   });

   //Hash password before saving in database
   bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
     if (err) throw err;
     newUser.password = hash;
     newUser
      .save()
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
    });
   });
  }
 });
});
