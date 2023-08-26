import { getAll } from "../../../repositorys/Collaborator/read/listAllCollaborator";

export const listAllCollaborators = async (request, reply) => {
    try{
        const collaborator = await getAll();

        reply.code(200).send(collaborator);

    }catch(err){
        reply.code(400).send(err)
    }
};