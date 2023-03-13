'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblUsuario.belongsTo(models.tblDocumento,{
        foreingkey:'docId',
        target_Key:'usuDocId'
      })

      tblUsuario.belongsTo(models.tblRol,{
        foreingkey:'rolId',
        target_Key:'usuRolId'
      })


      tblUsuario.hasone(models.tblCalificacion,{
        foreingkey:'calUsuId'
      })


      tblUsuario.hasMany(models.tblPeticion,{
        foreingkey:'petUsuId'
      })

      tblUsuario.hasMany(models.tblReporte,{
        foreignKey:'repUsuId'
      })

      tblUsuario.hasMany(models.tblComentario,{
        foreignKey:'comUsuId'
      })

    }

    
  }
  tblUsuario.init({
    usuId: DataTypes.INTEGER,
    usuAli: DataTypes.STRING,
    usuApe: DataTypes.STRING,
    usuEma: DataTypes.STRING,
    usuPas: DataTypes.STRING,
    usuTel: DataTypes.STRING,
    usuEst: DataTypes.TINYINT,
    usuDir: DataTypes.STRING,
    usuRolId: DataTypes.INTEGER,
    usuDocID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblUsuario',
  });
  return tblUsuario;
};