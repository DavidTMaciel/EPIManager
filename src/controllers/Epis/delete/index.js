import { deleteEpi } from "../../../repositorys/Epis/delete";

export const deleteEpiId = async (request, reply)=>{

    try{
        const epi = await deleteEpi(Number(request.params.id));

        reply.code(200).send(epi);
    }catch(err){
        reply.code(400).send(err);
    };
}