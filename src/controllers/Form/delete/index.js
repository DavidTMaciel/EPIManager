import { deleteForm } from "../../../repositorys/From/delete";

export const deleteFormById = async (request, repley) =>{

    try{
        const idForm = request.params.id;

        const form = await deleteForm(Number(idForm));

        repley.code(200).send(form);
    }catch(err){
        repley.code(400).send({message:'internal error when deleting form'});
    }
}