const express = require("express");
const router = express.Router();

// Route user
const createUserController = require("../../controllers/user/createUserController");
const infoUserController = require("../../controllers/user/infoUserController");
const validateEmailUserController = require("../../controllers/user/validateEmailUserController");
const registerUserController = require("../../controllers/user/registerUserController");
const queryRoleAllController = require("../../controllers/role/queryRoleAllController");

const {
  registerUserMiddleware,
} = require("../../controllers/user/registerUserController");
const UserRegistration = require("../../helpers/registerValidateUser");
const signInUserController= require('../../controllers/user/signInUserController')

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
router.get("/queryRoleAll", queryRoleAllController.queryRoleAll);

router.post("/signIn", signInUserController.signIn);
console.log("====Connect to router successfully ====");

module.exports = router;