'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('ratings', [
          {
       
            score:3,
            suggestion:'sugiero que se mejore la navegación para hacerla más clara y sencilla. Sería útil tener un diseño más intuitivo y fácil de seguir, y que el contenido sea más fácil de encontrar.',
            	user_id:1,
          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {
            score:1,
            suggestion:'se podrían agregar filtros y opciones de ordenamiento para ayudar al usuario a encontrar lo que busca de manera más eficiente e incluir enlaces para que podamos encontrar información relacionada.',
            	user_id:2,
            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
         {
         
          score:5,
          suggestion:'Debo decir que he tenido una excelente experiencia en esta página web. El diseño es moderno y atractivo. La información está bien organizada y es fácil de encontrar gracias a la estructura intuitiva de la página.',
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