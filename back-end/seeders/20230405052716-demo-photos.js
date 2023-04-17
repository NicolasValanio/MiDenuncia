'use strict'

module.exports={
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('photos',[
            {
                url:'https://www.elnuevodia.com.co/nuevodia/sites/default/files/styles/nota_800_x_400_/public/imagenes/2021/12/13/IBAGUE%20FOTO%201%20BUENA.jpg?itok=hxy-g9T8',
                request_id:1,
                createdAt: new Date(),
                updatedAt: new Date()

                
            },
            {
                url:'https://www.elheraldo.co/sites/default/files/styles/414x310/public/articulo/2017/09/22/luminaria-3.jpg?itok=UjipPDUj',
                request_id:2,
                createdAt: new Date(),
                updatedAt: new Date()
            
            },
            {
                url:'https://www.eltiempo.com/uploads/2019/06/01/5cf2bc2a4bca5.jpeg',
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