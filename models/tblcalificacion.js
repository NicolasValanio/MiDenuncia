'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblCalificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblCalificacion.belongsTo(models.tblUsuario,{
        foreignKey:'usuId',
        target_key:'calUsuId'
      })
    }
  }
  tblCalificacion.init({
    calPun: DataTypes.INTEGER,
    calSug: DataTypes.STRING,
    calUsuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblCalificacion',
  });
  return tblCalificacion;
};