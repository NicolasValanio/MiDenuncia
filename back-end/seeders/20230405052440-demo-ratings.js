'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('ratings', [
          {
       
            score:3,
            suggestion:'deberias dar mas detalles del problema.',
            	user_id:1,
          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {
            score:1,
            suggestion:'la foto esta borrosa, mejora la calidad.',
            	user_id:2,

            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
         {
         
          score:5,
          suggestion:'gracias por tu aporte, me paso lo mismo.',
            user_id:3,
          createdAt:new Date() ,
          updatedAt:new Date()
            
    
           }  
      
      ], {});
    
  },

down:  async  (queryInterface, Sequelize)=> {
   

    await queryInterface.bulkDelete('ratings', null, {});
  }

};