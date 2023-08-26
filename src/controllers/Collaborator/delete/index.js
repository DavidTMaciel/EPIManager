import { deleteCollaborator } from "../../../repositorys/Collaborator/delete";

export const deleteCollaboratorById = async (request, reply) =>{
    try{
        const collaborator = await deleteCollaborator(Number(request.params.id));
        
        reply.code(200).send(collaborator);
    }catch(err){
        reply.code(400).send(err);
    };
}