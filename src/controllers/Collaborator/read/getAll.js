import { getAll } from "../../../repositorys/Collaborator/read/listAllCollaborator";

export const listAllCollaborators = async (req, res) => {
    try{
        const collaborator = await getAll();

        res.status(200).send(collaborator);

    }catch(err){
        res.status(400).send(err)
    }
};