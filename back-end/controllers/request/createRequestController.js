const modelsRequest = require("../../models").request;

exports.createRequest = async (req, res, next) => {
  try {
    const { location } = req.body;
    await modelsRequest.create({ location });
    res.status(201).json({ message: "Request created successfully" });
  } catch (error) {
    next(error);
  }
};

exports.getRequestList = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;
  try {
    const requests = await modelsRequest.findAll({ limit, offset });
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};
