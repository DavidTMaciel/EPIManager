import { createCollaborator } from "../../../repositorys/Collaborator/create";
import { collaboratorValidation } from "../../../validations/Collaborator";

export const createNewCollaborator = async (req, res) =>{

    try{

        const data = collaboratorValidation.validate(req.body)
        const collaborator = await createCollaborator(data);

        res.status(200).send(collaborator);

    }catch(err){
        res.status(400).send(err);
    };
}