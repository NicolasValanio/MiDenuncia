const modelRegister = require("../../models").user;
const { validationResult } = require("express-validator");
const UserRegistration = require("../../helpers/registerValidateUser");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
  try {
    console.log("RegisterUser called");
    const { name, last_name, nickname, email, password, password2 } = req.body;

    // Validate if the email is already registered in the database
    const existingUser = await modelRegister.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // encrypts the password with a cost factor of 10

    const newUser = await modelRegister.create({
      name,
      last_name,
      nickname,
      email,
      password: hashedPassword, // The encrypted password is saved in the database
    });
    console.log("newUser: ", newUser); // Check if the new user was created correctly
    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.registerUserMiddleware = [
  UserRegistration.validations,
  UserRegistration.validate,
  exports.registerUser,
];
