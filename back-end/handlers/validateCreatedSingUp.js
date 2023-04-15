const { check } = require("express-validator");
const { validateResult } = require("../handlers/validate");

const validateCreatedSingUp = [
  // creation decoration to name,last_name,nickname,email,password
  check("name")
    .notEmpty()
    .withMessage("The name is required")
    .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/)
    .withMessage(
      "The name must begin with a capital letter and contain only letters" 
      // could be Jhon Jairo
    ),
    check("last_name")
    .notEmpty()
    .withMessage("Last name is required")
    .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/)
    .withMessage(
      "The lastname must begin with a capital letter and contain only letters"
      // could be Martinez Suarez
    ),
  check("nickname").isLength({ min: 1 }).withMessage("Nickname is required"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("The email is not valid"),
  check("password")
    .notEmpty()
    .withMessage("The password is required")
    .isLength({ min: 6 })
    .withMessage("The password must have at least 6 characters"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreatedSingUp };
