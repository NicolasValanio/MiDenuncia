const ModeloDocument = require("../../models").document;

exports.queryDocumentAll = async (req, res, next) => {
    try {
        const document = await ModeloDocument.findAll();
        if (!document) {
        // Search the document by all
        return res.status(400).json({ error: "Document not found" });
        }
        // Search the document by all
        return res.status(200).json({ datos: document });
    } catch (error) {
        next(error);
    }
    }