import { listForm } from "../../../repositorys/From/read/listForm";


export const getUniqueForm = async (request, reply) =>{

    try{

        const form = await listForm(Number(request.params.id))
        reply.code(200).send(form);
    }catch(err){
        reply.code(400).send(err);

    }
}