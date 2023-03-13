'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblDocumentos', {
      docId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      docTipo: {
        type: Sequelize.CHAR(2),
        allowNull: true,
       
      },
      docNum: {
        type: Sequelize.STRING(12),
        allowNull: true,
        unique: true,
        unsigned:true
      },
      docLugExpe: {
        type: Sequelize.STRING(50),
        allowNull: true,

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
    await queryInterface.dropTable('tblDocumentos');
  }
};