import { getUniqueCollaborator } from "../../../repositorys/Collaborator/read/listCollaborator";


export const listUniqueCollaborators = async (request, reply) => {
    try{

        const collaborator = await getUniqueCollaborator(Number(request.params.id));
        if(collaborator.length === 0){
            reply.send({ message: "no to registered collaborators"});
        }

        reply.code(200).send(collaborator);
    }catch(err){
        reply.code(400).send({err:'an internal error occurred'})
    }
};