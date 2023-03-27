'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      nickname: {
        type: Sequelize.STRING(60)
      },
      name: {
        type: Sequelize.STRING(20)
      },
      last_name: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull:false,
        unique:true
      },
      password: {
        type: Sequelize.STRING(250)
      },
      avatar: {
        type: Sequelize.STRING(250)
      },
      
      contact_phone: {
        type: Sequelize.STRING(15)
      },
      status: {
        type: Sequelize.TINYINT(1)
      },
      address: {
        type: Sequelize.STRING(15)
      },
      role_id: {
        type: Sequelize.INTEGER(1),
        references:{
          model:'roles',
          Key:'id'
        }
       
      },
      document_id: {
        type: Sequelize.INTEGER(11),
        references:{
          model:'documents',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};