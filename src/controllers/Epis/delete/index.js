import { deleteEpi } from "../../../repositorys/Epis/delete";

export const deleteEpiId = async (req, res) =>{

    try{
        const epi = await deleteEpi(Number(req.params.id));

        res.status(200).send(epi);
    }catch(err){
        res.status(400).send(err);
    };
}