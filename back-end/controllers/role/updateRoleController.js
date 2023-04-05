const ModelRole= require('../../models').role;
exports.updateRole= async (req, res, next) => {
    try{
        const role = await ModelRole.findByPk(req.params.id);
        await role
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
}