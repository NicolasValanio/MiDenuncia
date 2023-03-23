'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      date: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING(250)
      },
      neighborhood: {
        type: Sequelize.STRING(50)
      },
      subject: {
        type: Sequelize.STRING(100)
      },
      problem: {
        type: Sequelize.TEXT
      },
      solution: {
        type: Sequelize.TEXT
      },
      support: {
        type: Sequelize.INTEGER(5)
      },
      status: {
        type: Sequelize.TINYINT(1)
      },
      tag: {
        type: Sequelize.TINYINT(1)
      },
      type_request_id: {
        type: Sequelize.INTEGER(1),
        references:{

          model:'types_requests',
          key:'id'
          
        }
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
    await queryInterface.dropTable('requests');
  }
};