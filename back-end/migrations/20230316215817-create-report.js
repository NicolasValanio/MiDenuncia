'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.STRING(100)
      },
      status: {
        type: Sequelize.TINYINT(1)
      },
      likes_id:{
        type: Sequelize.INTEGER(5),
        references:{
          model:'likes',
          key:'id'
        }


      },
      type_report_id: {
        type: Sequelize.INTEGER(1),
        references:{

          model:'types_reports',
          key:'id'
          
        }
      },
      request_id: {
        type: Sequelize.INTEGER(5),
        references:{

          model:'requests',
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
      comment_id:{
        type: Sequelize.INTEGER(5),
        references:{

          model:'comments',
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