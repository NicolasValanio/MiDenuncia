const { check, validationResult } = require("express-validator");

class userRegistration {
  static validations = [
    // Creation of decorations to validate the information
    check("name")
      .notEmpty()
      .withMessage("The name is required")
      .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/)
      .withMessage(
        "The name must begin with a capital letter and contain only letters"
      ),
      

    check("last_name")
      .notEmpty()
      .withMessage("Last name is required")
      .matches(/^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/)
      .withMessage(
        "Last name must begin with a capital letter and contain only letters"
      ),

    check("nickname").notEmpty().withMessage("The nickname is required"),

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

    check("password2")
      .notEmpty()
      .withMessage("El password2 es requerido")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password two is required");
        }
        return true;
      }),
  ];

  static validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
}

module.exports = userRegistration;
