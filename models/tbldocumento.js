'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblDocumento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblDocumento.hasOne(models.tblUsuario,{
        foreignKey:'usuDocId'
      })
    }
  }
  tblDocumento.init({
    docTipo: DataTypes.STRING,
    docNum: DataTypes.STRING,
    docLugExpe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblDocumento',
  });
  return tblDocumento;
};