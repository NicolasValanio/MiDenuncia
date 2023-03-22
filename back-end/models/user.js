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
      user.belongsTo(models.role,
        {
          foreignKey:'role_id'
        })
        user.belongsTo(models.document,{
          foreignKey:"document_id"
        })
        user.hasOne(models.rating,{
          foreignKey:"user_id"
        })
        user.hasMany(models.report,{
          foreignKey:"user_id"
        })
        user.hasMany(models.comment,{
          foreignKey:"user_id"
        })
    }
  }
  user.init({
    nickname: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password1: DataTypes.STRING,
    password2: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    status: DataTypes.TINYINT,
    address: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    document_id: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'user',
    validate: {
      userValidation() {
        if (this.name.length < 2) {
          throw new Error("firstName length must be 7 or greater!");
        }
        if (this.email.includes("@mail.com")) {
          throw new Error("Email must not use mail.com address!");
        }
      },
    },
  });
  return user;
};

// set(value){
//   this.setDataValue('password',hash(this.nickname+value))
// },