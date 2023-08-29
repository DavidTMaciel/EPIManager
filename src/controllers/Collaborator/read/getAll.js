import { getAll } from "../../../repositorys/Collaborator/read/listAllCollaborator";

export const listAllCollaborators = async (request, reply) => {
    try{

        const collaborator = await getAll();
        if(collaborator.length === 0){
            reply.send({ message: "no to registered collaborators"});
        }
        

        reply.code(200).send(collaborator);

    }catch(err){
        reply.code(400).send({err:'an internal error occurred'})
    }
};