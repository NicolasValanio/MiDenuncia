'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      },
      type_report_id: {
        type: Sequelize.INTEGER,
        references:{

          model:'types_reports',
          key:'id'
          
        }
      },
      request_id: {
        type: Sequelize.INTEGER,
        references:{

          model:'requests',
          key:'id'
          
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('reports');
  }
};