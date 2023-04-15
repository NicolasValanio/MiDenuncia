const { check } = require("express-validator");
const { validateResult } = require("../handlers/validate");

const validateCreatedRequest = [
  // Create decoration and validation to location,neighborhood,subject,problem,solution
  check("location").isLength({ min: 1 }).withMessage("Location is required"),
  check("neighborhood")
    .isLength({ min: 1 })
    .withMessage("Neighborhood is required"),
  check("subject").isLength({ min: 1 }).withMessage("Subject is required"),
  check("problem").isLength({ min: 1 }).withMessage("Problem is required"),
  check("solution").isLength({ min: 1 }).withMessage("Solution is required"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreatedRequest };
