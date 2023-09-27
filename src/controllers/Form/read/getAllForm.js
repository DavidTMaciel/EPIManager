import { listAllForm } from "../../../repositorys/From/read/listAllForm";


export const getAllForm = async (request, reply) =>{

    try{

        const form = await listAllForm();

        reply.code(200).send(form);
    }catch(err){
        console.log(err);
        reply.code(404).send(err);
    }
}