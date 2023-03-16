'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    nickname: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    status: DataTypes.TINYINT,
    address: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    document_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};