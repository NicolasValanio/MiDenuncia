'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblImagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblImagen.belongsTo(models.tblPeticion,{
        foreignKey:'petId',
        target_key:'imgPetId'
      })
    }
  }
  tblImagen.init({
    imgUrl: DataTypes.STRING,
    imgPetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblImagen',
  });
  return tblImagen;
};