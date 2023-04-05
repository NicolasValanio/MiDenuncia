const modelRating = require("../../models").rating;
exports.updateRating= async (req, res) => {
  try {
    const report = await modelRating.findByPk(req.params.id);
    await report
      .update({
       score : req.body.score,
       suggestion : req.body.suggestion
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