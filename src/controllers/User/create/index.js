import { createUser } from "../../../repositorys/user/create";
import { userValidation } from "../../../validations/validations";
const bcrypt = require('bcrypt');

export const createNewUser = async (request, reply) =>{

    try{

        await userValidation.validate(request.body)

        const hashPassword = await bcrypt.hash(request.body.password, 10)
        request.body.password = hashPassword;
    
        const data = request.body;
        

        const user = await createUser(data);

        reply.code(200).send(user);
    }catch(err){
        if(err.code == 'P2002'){
            reply.code(400).send({message: 'Email already registered'})
        }else{
            reply.code(400).send(err)
            
        }   
  
    }
   

}