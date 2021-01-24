const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
 let errors = {};

 //Convert empty fields into and empty string so we can use validator functions
 data.email = !Validator.isEmpty(data.email) ? data.email : "";
 data.password = !Validator.isEmpty(data.password) ? data.password : "";

 //Email Checks
 if (Validator.isEmpty(data.email)) {
  errors.email = "Email field is required";
 } else if (!Validator.isEmail(data.email)) {
  errors.email = "Email is invalid";
 }

 //Password Checks
 if (Validator.isEmpty(data.password)) {
  error.password = "Password field is required";
 }

 return {
  errors,
  isValid: isEmpty(errors),
 };
};
