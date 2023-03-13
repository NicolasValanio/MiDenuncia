'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblReportes', {
      repId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      repEst: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
      repDes: {
        type: Sequelize.STRING(250),
        allowNull:true
      },
      repUsuId: {
        type: Sequelize.INTEGER(5),
        references:{
          model:'tblUsuarios',
          key:'usuId'
        }
      },
      repTipRepId: {
        type: Sequelize.INTEGER(1),
        references:{
          model:'tblTipoReportes',
          key:'tipRepId'
        }
      },
      repPetId: {
        type: Sequelize.INTEGER(5),
        references:{
          model:'tblPeticions',
          key:'petId'
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
    await queryInterface.dropTable('tblReportes');
  }
};