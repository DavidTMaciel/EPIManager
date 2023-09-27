import { deleteCollaborator } from "../../../repositorys/Collaborator/delete";
import { getUniqueCollaborator } from "../../../repositorys/Collaborator/read/listCollaborator";

export const deleteCollaboratorById = async (request, reply) =>{
    try{

        const collaboratorId = Number(request.params.id);

        if(isNaN(collaboratorId) || collaboratorId <= 0){
            reply.code(400).send({message: "Invalid collaborator"});
        }
        const searchCollaborator = await getUniqueCollaborator(collaboratorId)
        if(!searchCollaborator){
            reply.code(404).send({ message: "Collaborator not found" });
        }
        const collaborator = await deleteCollaborator(collaboratorId);
        
        reply.code(200).send(collaborator);
    }catch(err){
        console.log(err)
        reply.code(400).send(err);
    };
}