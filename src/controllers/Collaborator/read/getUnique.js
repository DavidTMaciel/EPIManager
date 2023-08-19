import { getUniqueCollaborator } from "../../../repositorys/Collaborator/read/listCollaborator";


export const listUniqueCollaborators = async (req, res) => {
    try{

        const collaborator = await getUniqueCollaborator(Number(req.params.id));

        res.status(200).send(collaborator);

    }catch(err){
        res.status(400).send(err)
    }
};