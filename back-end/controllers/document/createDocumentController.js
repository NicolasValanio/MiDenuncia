const ModeloDocument = require("../../models").document;
exports.createDocument = async (req, res, next) => {
  try {
    let { type, number_document, place_dispatch } = req.body;

    // Convert type to uppercase
    type = type.toUpperCase();

    // Validate that the type of document is one of the allowed values
    const allowedTypes = ["TI", "CC", "PA", "RC"];
    if (!allowedTypes.includes(type)) {
      return res
        .status(400)
        .json({ error: "The document type must be one of: TI, CC, PA, RC" });
    }

    // Validate that the document number only contains numbers
    if (!/^\d+$/.test(number_document)) {
      return res
        .status(400)
        .json({ error: "The document number must contain only numbers" });
    }

    // Validate that the place of dispatch is not empty or null
    if (!place_dispatch) {
      return res
        .status(400)
        .json({ error: "The place of dispatch is required" });
    }

    // Validate if the document number already exists in the database
    const existingDocument = await ModeloDocument.findOne({
      where: { number_document },
    });
    if (existingDocument) {
      return res
        .status(400)
        .json({ error: "This document number is already in use" });
    }

    const newDocument = await ModeloDocument.create({
      type,
      number_document,
      place_dispatch,
    });

    console.log("Document created successfully", newDocument.toJSON());
    return res.status(201).json({ datos: newDocument });
  } catch (error) {
    next(error);
  }
};
