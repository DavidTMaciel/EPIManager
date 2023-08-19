import { deleteCollaborator } from "../../../repositorys/Collaborator/delete";

export const deleteCollaboratorById = async (req, res) =>{
    try{
        const collaborator = await deleteCollaborator(Number(req.params.id));
        
        res.status(200).send(collaborator);
    }catch(err){
        res.status(400).send(err);
    };
}