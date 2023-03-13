'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblPeticion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblPeticion.belongsTo(models.tblTipoPeticion,{
        foreignKey:'tipPetId',
        target_key:'petTipoPetId'
      })

      tblPeticion.hasMany(models.tblPeticion,{
        foreignKey:'repPetId'
      })

      tblPeticion.hasMany(models.tblComentario,{
        foreignKey:'comPetId'
      })

      tblPeticion.hasMany(models.tblImagen,{
        foreignKey:'imgPetId'

      })
    }
  }
  tblPeticion.init({
    petFec: DataTypes.DATE,
    petLoc: DataTypes.STRING,
    petBar: DataTypes.STRING,
    petEst: DataTypes.TINYINT,
    petAsu: DataTypes.STRING,
    petDes: DataTypes.TEXT,
    petSol: DataTypes.TEXT,
    petApo: DataTypes.INTEGER,
    petTipoPetId: DataTypes.TINYINT,
    petUsuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblPeticion',
  });
  return tblPeticion;
};