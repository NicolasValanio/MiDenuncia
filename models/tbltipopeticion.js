'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblTipoPeticion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblTipoPeticion.hasMany(models.tblPeticion,{
        foreignKey:'petTipoPetId'
      })


      tblPeticion.belongsTo(models.tblPeticion,{
        foreignKey:'petId',
        target_key:'petUsuId'
      })
    }
  }
  tblTipoPeticion.init({
    tipPetNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblTipoPeticion',
  });
  return tblTipoPeticion;
};