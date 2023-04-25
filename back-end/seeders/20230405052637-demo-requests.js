'use strict'

module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('requests',[
            {
                date: new Date(),
                location: 'Calle 1 carrera 1',
                neighborhood:'Centro',
                subject:'Solicitud de servicio',
                problem:'El servicio del semaforo no funciona',
                solution:'Se debe cambiar el semaforo',
                support:8,
                status:'Pendiente',
                tag:'Semaforo',
                type_request_id:1,
                user_id:1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: new Date(),
                location: 'Calle 1 carrera 1',
                neighborhood:'Centro',
                subject:'Solicitud de servicio',
                problem:'El servicio del semaforo no funciona',
                solution:'Se debe cambiar el semaforo',
                support:3,
                status:'Pendiente',
                tag:'Semaforo',
                type_request_id:3,
                user_id:3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: new Date(),
                location: 'Calle 1 carrera 1',
                neighborhood:'Centro',
                subject:'Solicitud de servicio',
                problem:'El servicio del semaforo no funciona',
                solution:'Se debe cambiar el semaforo',
                support:5,
                status:'Pendiente',
                tag:'Semaforo',
                type_request_id:2,
                user_id:2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
          

          
        ],{});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('request',null,{});
    }
}