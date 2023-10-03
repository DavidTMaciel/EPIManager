import { createEpis } from "../../../repositorys/Epis/create";
import { epiValidation } from "../../../validations/validations";

export const createNewEpi = async (request, reply)=>{

    try{
        await epiValidation.validate(request.body)
        
        if(!epiValidation.validate(request.body)){
            reply.code(400).send('message: Failed to validate')
        }
      
            const data = request.body;

            if(data.name == null || undefined || typeof data.name === 'number' || !isNaN(data.name)){
                reply.code(400).send('message: Name required text')
            }

            const epi = await createEpis(data);
    
            reply.code(200).send(epi);


    }catch(err){
        reply.code(400).send({message: 'Name is required Int'});
    }
}


