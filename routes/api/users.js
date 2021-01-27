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

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
 //Form validation
 const { errors, isValid } = validateloginInput(req.body);

 //Check validation
 if (!isValid) {
  return res.status(400).json(errors);
 }

 const email = req.body.email;
 const password = req.body.password;

 //Find user by Email
 User.findOne({ email }).then((user) => {
  //Check if user exists
  if (!user) {
   return res.status(404).json({ emailNotFoun: "Email not found" });
  }
  //Check password
  bycrypt.compare(password, user.password).then((isMatch) => {
   if (isMatch) {
    //User Matched
    //Create JWT Payload
    const payload = {
     id: user.id,
     name: user.name,
    };

    //Sign Token
    jwt.sign(
     payload,
     keys.secretOrKey,
     {
      expiresIn: 60, // 1 minute in seconds
     },
     (err, token) => {
      res.json({
       success: true,
       token: "Bearer " + token,
      });
     },
    );
   } else {
    return res.status(400).json({ passwordincorrect: "Password is incorrect" });
   }
  });
 });
});

module.exports = router;
