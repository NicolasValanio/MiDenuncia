const express = require("express");
const router = express.Router();

// Route role controller
const createRoleController = require("../../controllers/role/createRoleController");
const deleteRoleController = require("../../controllers/role/deleteRoleController");
const queryRoleController = require("../../controllers/role/queryRoleController");
const queryRoleAllController = require("../../controllers/role/queryRoleAllController");


// Route role
router.post("/createRole", createRoleController);
router.put("/deleteRole/:id", deleteRoleController.deleteRole);
router.get("/queryRole/:id", queryRoleController.queryRoleId);
router.get("/queryRoleAll", queryRoleAllController.queryRoleAll);

module.exports = router;