const ModeloDocument = require("../../models").document;

exports.queryDocumentAll = async (req, res, next) => {
    try {
        const document = await ModeloDocument.findAll();
        if (!document) {
        // 
        return res.status(400).json({ error: "Document not found" });
        }
        // 
        return res.status(200).json({ datos: document });
    } catch (error) {
        next(error);
    }
    }