'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('reports', [
          {
     
            date:'2023-01-01 23:59:59',
          	description:'Los conductores que transitan por la vía principal de acceso a Floridablanca, en el área metropolitana de Bucaramanga, hemos reportado congestión vehicular y molestias debido a los daños en la vía. En algunos tramos de la carretera se han presentado grietas y agujeros que dificultan el tránsito de vehículos y pueden generar riesgos de accidentes',
          	photo:'https://cloudfront-us-east-1.images.arcpublishing.com/semana/VI2SJB4KC5AXVCU6VJPZTXHQZI.jpg',
          	status:1,
          	type_report_id:1,
          	request_id:1,
          	user_id:1,
            likes_id:1,
            comment_id:1,

          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {

            date:'2023-01-02 23:59:59',
          	description:' en el barrio San Francisco en Bucaramanga hay una serie de fallas en el alumbrado público de las calles del sector, varias lámparas no están funcionando correctamente, lo que ha generado una disminución de la seguridad en las noches y ha aumentado los riesgos de robos y hurtos en la zona',
          	photo:'https://www.bucaramanga.gov.co/wp-content/uploads/2020/07/Mantenimiento-de-Alumbrado-1.jpg',
          	status:1,
          	type_report_id:2,
          	request_id:2,
          	user_id:2,
            likes_id:2,
            comment_id:2,

            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
            {
            
              date:'2023-01-03 23:59:59',
              description:'en vereda El Bosque, en la zona rural de Bucaramanga, la contaminación del río Suratá debido a un vertido de residuos industriales en la zona el agua del río ha adquirido un color oscuro y un olor fétido, lo que ha afectado la fauna y la flora del sector',
              photo:'https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/63O6NR6QJ5NVJDKU4RFAZGLXR4.jpg',
              status:1,
              type_report_id:3,
              request_id:2,
              user_id:3,
              likes_id:3,
              comment_id:3,
              createdAt:new Date() ,
              updatedAt:new Date()
                
        
            }  
      
      ], {});
    
  },

down:  async  (queryInterface, Sequelize)=> {
   

    await queryInterface.bulkDelete('reports', null, {});
  }

};