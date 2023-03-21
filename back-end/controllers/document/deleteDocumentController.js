const ModeloDocument = require("../../models").document;

// delete
exports.deleteDocument = async (req, res, next) => {
  try {
    const { number_document } = req.params;
    const document = await ModeloDocument.findOne({
      where: { number_document },
    });
    if (!document) {
      return res.status(400).json({ error: "Document not found" });
    }
    await document.destroy();
    return res.status(200).json({ datos: document });
  } catch (error) {
    next(error);
  }
};
