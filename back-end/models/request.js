'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      request.belongsTo(models.types_request,{
        foreignKey:"type_request_id"
      })

      request.belongsTo(models.user,{
        foreignKey:"user_id"
      })

      request.hasMany(models.photo,{
        foreignKey:"request_id"
      })
    }
  }
  request.init({
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    subject: DataTypes.STRING,
    problem: DataTypes.TEXT,
    solution: DataTypes.TEXT,
    support: DataTypes.INTEGER,
    status: DataTypes.TINYINT,
    tag: DataTypes.TINYINT,
    type_request_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};