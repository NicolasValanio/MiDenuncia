'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.user,{
        foreignKey:"user_id"
      })
      comment.belongsTo(models.request,{
        foreignKey:"request_id"
      })
    }
  }
  comment.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    status: DataTypes.TINYINT,
    request_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};