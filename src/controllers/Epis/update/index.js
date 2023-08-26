import { updateEpi } from "../../../repositorys/Epis/update";

export const updateEpiId = async (request, reply) =>{

    try{
        const updateData = request.body;

        const epi = await updateEpi(Number(request.params.id), updateData)

        reply.code(200).send(epi);
    }catch(err){
        reply.code(400).send(err);
    }
}