const express = require("express");
const router = express.Router();

// Route user
const createUserController = require("../../controllers/user/createUserController");
const infoUserController = require("../../controllers/user/infoUserController");
const validateEmailUserController = require("../../controllers/user/validateEmailUserController");
const registerUserController = require("../../controllers/user/registerUserController");
const {
  registerUserMiddleware,
} = require("../../controllers/user/registerUserController");
const UserRegistration = require("../../helpers/registerValidateUser");

// Route user
router.post("/createUser", createUserController.createUser);
router.get("/info", infoUserController.infoUser);
router.get("/validateEmail", validateEmailUserController.validateEmail);
router.post(
  "/registerUser",
  UserRegistration.validations,
  registerUserMiddleware,
  UserRegistration.validate,
  registerUserController.registerUser
);
console.log("====Connect to router successfully ====");

module.exports = router;