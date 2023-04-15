const { check } = require("express-validator");
const { validateResult } = require("../handlers/validate");

const validateComments = [
  check("date").isDate().withMessage("Date is required"),
  check("description")
    .isLength({ min: 15 })
    .withMessage("Description is required"),
  check("status").isLength({ min: 1 }).withMessage("Status is required"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


module.exports = { validateComments };
