'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('likes', [
            {
       
              like:5,
              user_id:1,
              

              createdAt:new Date() ,
              updatedAt:new Date()
              
            },
            {
  
              
              like:4,
              user_id:2,
              createdAt:new Date() ,
              updatedAt:new Date()

        
            },
            {
              
              like:2,
              user_id:3,
              createdAt:new Date() ,
          updatedAt:new Date()
  

            },
            {
              
              like:1,
              user_id:3,
            
              createdAt:new Date() ,
              updatedAt:new Date()

       
            }
        ], {});
    },
    down : async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('likes', null, {});
    }
}