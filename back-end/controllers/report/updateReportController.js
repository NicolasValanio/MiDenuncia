const modelReport = require("../../models").report;
exports.updateReport = async (req, res) => {
  try {
    const report = await modelReport.findByPk(req.params.id);
    await report
      .update({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
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