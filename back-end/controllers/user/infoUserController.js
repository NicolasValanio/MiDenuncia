const modeloUser = require("../../models").user;
const { Op } = require('sequelize');
exports.infoUser = async (req, res, next) => {
  try {
   
    if (req.query.filtro) {
       // console.log(req.body)
       await modeloUser.findAll({where:{
         nickname: {
          [Op.like]: `${req.query.filtro}%`
        }
        // [Op.or]: [
            
        //     { name: req.query.filtro },
        //    // { staff_neighborhood: req.query.filtro },
            
        //     { role_id: req.query.filtro },
        //   ]
       }}).then(data=>{
      
        res.status(200).json(data)
       }).catch(msg=>res.status(400).json({message:msg}))
    } else {
        await  modeloUser.findAll().then((data)=>{
              res.status(200).json(data)
          }).catch((err) => next(err))
    }
  } catch (error) {
    res.send(error);
  }
};
