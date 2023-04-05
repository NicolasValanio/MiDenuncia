'use strict';
module.exports={

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles',[
      {
        name:'Invitado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
         name:'SuperAdmin',
        createdAt: new Date(),
        updatedAt: new Date()
       }
      // {
      //   name:'invited',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles',null,{});
  }

};