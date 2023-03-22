const modelTypeReport = require("../../models").types_report;
exports.updateTypesReport = async (req, res) => {
  try {
    const report = await modelTypeReport.findByPk(req.params.id);
    await report
      .update({
        name: req.body.name,
      })
      .then((report) => {
        res.status(200).json({ report });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
