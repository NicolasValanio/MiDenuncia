'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblRol.hasOne(models.tblUsuario,{
        foreignKey:'usuRolId'
      })
    }
  }
  tblRol.init({
    rolNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblRol',
  });
  return tblRol;
};