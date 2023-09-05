import { updateForm } from "../../../repositorys/From/update";


export const updateFormById = async (request, reply) => {

    try{
        const updateData = Number(request.body.newEpiId);
        const form = await updateForm(Number(request.params.id),updateData);
           
        reply.code(200).send(form);
    }catch(err){
        reply.code(400).send(err);
        console.log(err);
    };
};