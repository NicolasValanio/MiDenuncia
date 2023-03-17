'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      report.belongsTo(models.user,{
        foreignKey:"user_id"
      })

      report.belongsTo(models.types_report,{
        foreignKey:"type_report_id"
      })

      report.belongsTo(models.request,{
        foreignKey:"request_id"
      })
    }
  }
  report.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    status: DataTypes.TINYINT,
    type_report_id: DataTypes.INTEGER,
    request_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'report',
  });
  return report;
};