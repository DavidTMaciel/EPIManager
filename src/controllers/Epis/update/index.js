import { updateEpi } from "../../../repositorys/Epis/update";

export const updateEpiId = async (req,res) =>{

    try{
        const updateData = req.body;

        const epi = await updateEpi(Number(req.params.id), updateData)

        res.status(200).send(epi);
    }catch(err){
        res.status(400).send(err);
    }
}