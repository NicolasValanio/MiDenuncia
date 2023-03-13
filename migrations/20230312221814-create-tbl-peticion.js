'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblPeticions', {
      petId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      petFec: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      petLoc: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      petBar: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      petEst: {
        type: Sequelize.TINYINT(1),
        allowNull: false
      },
      petAsu: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      petDes: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      petSol: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      petApo: {
        type: Sequelize.INTEGER(5),
        allowNull:true
      },
      petTipoPetId: {
        type: Sequelize.TINYINT(1),
        references:{
          model: 'tblTipoPeticions',
          key: 'tipPetId'
        }
      },
      petUsuId: {
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
    await queryInterface.dropTable('tblPeticions');
  }
};