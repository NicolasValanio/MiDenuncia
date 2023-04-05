'use strict'
module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('types_reports',[
            {
                name:'Reporte por Pavimento y huecos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name:'Reporte por Semaforo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name:'Reporte por falta de alumbrado publico',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name:'Reporte por parques, hay mucho bandidos',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],{});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('types_report',null,{});
    }
}