import { createCollaborator } from "../../../repositorys/Collaborator/create";
import { collaboratorValidation } from "../../../validations/Collaborator";

export const createNewCollaborator = async (request, reply) =>{

    try{

        const data = request.body;
        const collaborator = await createCollaborator(data);

        reply.code(200).send(collaborator);

    }catch(err){
        reply.code(400).send(err);
    };
}