import { updateCollaborator } from "../../../repositorys/Collaborator/update";

export const updateCollaboratorById = async (request, reply)=>{

    try{
        const dataUpdate = request.body
        const collaborator = await updateCollaborator(Number(request.params.id), dataUpdate);

        if(!collaborator){
            reply.send({err: 'Collaborator no found'});
        }
        

        reply.code(200).send(collaborator);
        
    }catch(err){
        console.log(err);
        reply.code(400).send(err);
    };
}