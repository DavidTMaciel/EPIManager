import { updateCollaborator } from "../../../repositorys/Collaborator/update";

export const updateCollaboratorById = async (req, res) =>{

    try{
        const dataUpdate = req.body
        const collaborator = await updateCollaborator(Number(req.params.id), dataUpdate);

        res.status(200).send(collaborator);

    }catch(err){
        res.status(400).send(err);
    };
}