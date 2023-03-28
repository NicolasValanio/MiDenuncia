'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      document.hasOne(models.user,{
        foreignKey:"document_id"
      })
    }
  }
  document.init({
    type: DataTypes.CHAR,
    place_dispatch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'document',
  });
  return document;
};