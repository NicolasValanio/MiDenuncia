const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const signUpUserController = require("../../controllers/user/singnUpUserController");
const infoUserController = require("../../controllers/user/infoUserController");
const signInUserController = require("../../controllers/user/signInUserController");
const infoRequestUserController = require("../../controllers/user/infoRequestUserController");
const recoverPasswordUserLogController = require("../../controllers/user/recoverPasswordUserLogController");
const forgotPasswordController = require("../../controllers/user/forgotPasswordController");
const resetPasswordController = require("../../controllers/user/resetPasswordController");
const changePasswordUserController = require("../../controllers/user/changePasswordController");
const validateCreatedCreatedSignIn = require("../../handlers/validateCreatedSignIn");
const validateCreatedSingUp = require("../../handlers/validateCreatedSingUp");


router.post(
  "/signUp",
  validateCreatedSingUp.validateCreatedSingUp,
  signUpUserController.signUp
);

router.post("/signIn", signInUserController.signIn);

router.put(
  "/recoverPassword/:id",
  recoverPasswordUserLogController.recoverPasswordUserLog
);
router.get("/info", authMiddleware, infoUserController.infoUser);
router.get("/infoRequestUser", infoRequestUserController.infoRequestUser);
router.get("/reset-password", resetPasswordController.resetPassword);

router.post("/forgot-password", forgotPasswordController.forgotPassword);
router.post("/changePassword", changePasswordUserController.changePasswordUser);

module.exports = router;
