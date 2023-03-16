'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class types_report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      types_report.hasMany(models.request,{
        foreignKey:'type_request_id'
      })
    }
  }
  types_report.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'types_report',
  });
  return types_report;
};