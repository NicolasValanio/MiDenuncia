'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      score: {
        type: Sequelize.INTEGER(1)
      },
      suggestion: {
        type: Sequelize.STRING(200)
      },
      user_id: {
        type: Sequelize.INTEGER(5),
        references:{
          model:'users',
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
    await queryInterface.dropTable('ratings');
  }
};