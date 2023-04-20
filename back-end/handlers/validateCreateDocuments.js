const { check } = require("express-validator");
const { validateResult } = require("../handlers/validate");

const validateDocuments = [
  check("id")
    .isInt({ min: 0 })
    .withMessage("The id must be a non-negative integer")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("The id must not be negative");
      }
      if (!Number.isInteger(value)) {
        throw new Error("The id must be an integer");
      }
      return true;
    }),
  check("type")
    .matches(/^(CC|TI|PA|DT|CE|PS)$/)
    .withMessage("Invalid type. Allowed values: CC, TI, PA, DT, CE, PS"),
  check("place_dispatch")
    .isAlpha()
    .withMessage("The place_dispatch must only contain letters")
    .withMessage(
      "Please enter the name of the dispatch location using only letters"
    ),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
