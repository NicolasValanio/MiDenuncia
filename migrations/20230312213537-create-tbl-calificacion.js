'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblCalificacions', {
      calId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      calPun: {
        type: Sequelize.INTEGER(5),
        allowNull: true,

      },
      calSug: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      calUsuId: {
        type: Sequelize.INTEGER(5),
        allowNull:false,
        references:{
          model:'tblUsuarios',
          key:'usuId'
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
    await queryInterface.dropTable('tblCalificacions');
  }
};