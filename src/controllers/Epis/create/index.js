import { createEpis } from "../../../repositorys/Epis/create";
import { epiValidation } from "../../../validations/epi/epi.validations";

export const createNewEpi = async (request, reply)=>{

    try{
        await epiValidation.validate(request.body)
        
        if(!epiValidation.validate(request.body)){
            send('message: Failed to validate')
        }
        const data = request.body;
        const epi = await createEpis(data);

        reply.code(200).send(epi);

    }catch(err){
        reply.code(400).send({message: 'Name is required Int'});
    }
}