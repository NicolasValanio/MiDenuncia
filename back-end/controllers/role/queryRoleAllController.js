const ModeloRole = require('../../models').role 

exports.queryRoleAll = async (req, res, next) => {
    try {
        const role = await ModeloRole.findAll()
        if (!role) {
            // 
            return res.status(400).json({ error: 'Role not found' })
        }
        // 
        return res.status(200).json({ datos: role })
    } catch (error) {
        next(error)
    }
}