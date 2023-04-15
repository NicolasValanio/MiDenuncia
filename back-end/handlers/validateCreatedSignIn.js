const { check } = require("express-validator");
const { validateResult } = require("../handlers/validate");

const validateCreatedRequest = [
  // nickname,password
  check("nickname").isLength({ min: 1 }).withMessage("Nickname is required"),
  check("password").isLength({ min: 6 }).withMessage("Password is required"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreatedRequest };
