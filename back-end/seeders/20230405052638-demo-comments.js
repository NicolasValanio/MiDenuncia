'use strict'

module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('comments',[
            {
                date: new Date(),
                description:'Totalmente de acuerdo con esta petición. La mala calidad de la malla vial afecta nuestros vehículos, la seguridad de los conductores y peatones, y el desarrollo económico y turístico. Espero que las autoridades tomen acción pronto para mejorar la calidad de vida en nuestra comunidad.',
                status:1,
              
                user_id:1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: new Date(),
                description:'Es importante que se tomen medidas para reparar el alumbrado público en nuestra comunidad. La falta de iluminación en las calles no solo puede causar inseguridad, sino que también puede afectar negativamente la calidad de vida de los residentes. Espero que las autoridades atiendan esta petición pronto para mejorar la seguridad y bienestar de todos.',
                status:1,
              
                user_id:2,
                createdAt: new Date(),
                updatedAt: new Date()
               
            },
            {
                date: new Date(),
                description:'La contaminación ambiental es un problema serio que afecta no solo nuestra salud, sino también la de nuestro planeta. Es importante que se tomen medidas para reducir la emisión de contaminantes y promover prácticas más sostenibles. Espero que las autoridades tomen acción pronto para mejorar la calidad del aire y proteger nuestro entorno natural.',
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