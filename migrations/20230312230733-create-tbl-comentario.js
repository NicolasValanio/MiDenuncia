'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblComentarios', {
      comId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      comDes: {
        type: Sequelize.STRING(255)
      },
      comEst: {
        type: Sequelize.TINYINT(1)
      },
      comPetId: {
        type: Sequelize.INTEGER(5),
        references:{
          model:'tblPeticions',
          key:'petId'
        }
      },
      comUsuId: {
        type: Sequelize.INTEGER(5),
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
    await queryInterface.dropTable('tblComentarios');
  }
};