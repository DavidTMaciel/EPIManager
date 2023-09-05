import { createForm } from "../../../repositorys/From/create";


export const createNewForm = async (request, reply) =>{

    try{
        const collaboratorId = request.body.collaboratorId;
        const epi = request.body.epi;
        
        if(collaboratorId == null || epi == null){
            reply.code(400).send({err: "An error occurred while creating the form, verify all fields"});
        }
        const form = await createForm(collaboratorId, epi)

        reply.code(200).send(form);
    }catch(err){
        console.error(err);
        reply.code(400).send({err: "Sorry but a problem occurred"});
    };

}