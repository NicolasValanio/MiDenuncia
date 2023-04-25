'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('documents', [
          {
          type:'cc',
          number_document:'1097781555',
          place_dispatch:'elkennedy',
          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {
            type:'ti',
            number_document:'1525963254',
            place_dispatch:'lacumbre',
            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
         {
          type:'cc',
          number_document:'1602336666',
          place_dispatch:'elnorte',
          createdAt:new Date() ,
          updatedAt:new Date()
            
    
           }  
      
      ], {});
    
  },

down:  async  (queryInterface, Sequelize)=> {
   

    await queryInterface.bulkDelete('documents', null, {});
  }

};