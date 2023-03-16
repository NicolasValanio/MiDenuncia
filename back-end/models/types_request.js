'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class types_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      request.hasMany(models.types_request,{
        foreignKey:'type_request_id'
      })
    }
  }
  types_request.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'types_request',
  });
  return types_request;
};