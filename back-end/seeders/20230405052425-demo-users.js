'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
   
    await queryInterface.bulkInsert('users', [
          {
       
            nickname: 'andolfo',
            	name:'daniel',	
              last_name:'serrano',
              	email:'daniel123@gmail.com',
                	password:'123456789',
                  	
            	contact_phone:'+57 3256263668',
              	status:1,
                	address:'cll 36 n. 98-51',
                  	role_id:1,
                    	document_id:1,
       
          createdAt:new Date() ,
          updatedAt:new Date()
            

          },
          {
            nickname: 'lilo',
            name:'kelin',	
            last_name:'teresa',
              email:'lilo123@gmail.com',
                password:'123456789',
                  
            contact_phone:'+57 3459699856',
              status:1,
                address:'cll 88 n. 104-9',
                  role_id:2,
                    document_id:2,
     
          
            createdAt:new Date() ,
            updatedAt:new Date()
              
      
            },
         {
         
          nickname: 'chicholin',
          name:'adam',	
          last_name:'leon',
            email:'adam123@gmail.com',
              password:'123456789',
                
          contact_phone:'+57 3526366422',
            status:1,
              address:'cll 10 n. 45-78',
                role_id:3,
                  document_id:3,
   
         
          createdAt:new Date() ,
          updatedAt:new Date()
            
    
           }  
      
      ], {});
    
  },

down:  async  (queryInterface, Sequelize)=> {
   

    await queryInterface.bulkDelete('users', null, {});
  }

};