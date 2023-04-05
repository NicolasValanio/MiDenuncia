'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('types_requests', [
            {
                name: 'Pavimento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Semaforo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Alumbrado publico',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Parques',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down : async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('types_requests', null, {});
    }
}