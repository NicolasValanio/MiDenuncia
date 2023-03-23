const ModeloRole = require("../../models").role;

exports.createRole = async (req, res, next) => {
  try {
    console.log("createRole called");
    const { name } = req.body;
    // Validate if role already exists
    const existingRole = await ModeloRole.findOne({
      where: { name: name.toLowerCase() },
    });
    
    if (existingRole) {
      // Show message wiht error exist
      return res.status(400).json({ error: "Role already exists" });
    }
    const newRole = await ModeloRole.create({ name });
    // Show message created successfully
    console.log("Role created successfully", newRole.toJSON());
    return res.status(201).json({ datos: newRole });
  } catch (error) {
    next(error);
  }
};
