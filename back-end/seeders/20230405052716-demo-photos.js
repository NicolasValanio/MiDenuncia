'use strict'

module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('photos',[
            {
                url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%',
                request_id:1,
                createdAt: new Date(),
                updatedAt: new Date()

                
            },
            {
                url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%',
                request_id:2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%',
                request_id:3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],{});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('photos',null,{});
    }
}