'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('documents', [
          {
          type:'CC',
          number_document:'1097781555',
          place_dispatch:'Bucaramanga',
          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {
            type:'TI',
            number_document:'1525963254',
            place_dispatch:'Floridablanca',
            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
         {
          type:'CC',
          number_document:'1602336666',
          place_dispatch:'Giron',
          createdAt:new Date() ,
          updatedAt:new Date()
            
    
           }  
      
      ], {});
    
  },

down:  async  (queryInterface, Sequelize)=> {
   

    await queryInterface.bulkDelete('documents', null, {});
  }

};