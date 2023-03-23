const express = require("express");
const router = express.Router();

// Route document controller
const queryDocumentAll= require('../../controllers/document/queryDocumentAllController')
const createDocumentController = require('../../controllers/document/createDocumentController')
const deleteDocumentController = require('../../controllers/document/deleteDocumentController')

// Route enpoint
router.post("/createDocument", createDocumentController.createDocument);
router.get("/queryDocumentAll", queryDocumentAll.queryDocumentAll);
router.delete(
  "/deleteDocument/:number_document",
  deleteDocumentController.deleteDocument
);

module.exports = router;
