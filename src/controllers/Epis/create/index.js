import { createEpis } from "../../../repositorys/Epis/create";

export const createNewEpi = async(req, res)=>{

    try{
        const data = req.body;
        const epi = await createEpis(data);

        res.status(200).send(epi);

    }catch(err){
        res.status(400).send(err);
    }
}