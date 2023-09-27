import { createForm } from "../../../repositorys/From/create";


export const createNewForm = async (request, reply) =>{

    try{
        const collaboratorId = request.body.collaboratorId;
        const epiId = request.body.epiId;
        
        if(collaboratorId == null || epiId == null){
            reply.code(400).send({err: "An error occurred while creating the form, verify all fields"});
        }
        const form = await createForm(Number(collaboratorId),Number(epiId));

        reply.code(200).send(form);
    }catch(err){
        console.log(err);
        reply.code(400).send({err: "Sorry but a problem occurred"});
    };

}