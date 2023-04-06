'use strict'

module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('comments',[
            {
                date: new Date(),
                description:'Excelente servicio',
                status:1,
              
                user_id:1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: new Date(),
                description:'Excelente servicio',
                status:1,
              
                user_id:2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: new Date(),
                description:'Excelente servicio',
                status:1,
              
                user_id:3,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ],{});

    },  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('comments',null,{});
    }
}