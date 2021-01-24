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
