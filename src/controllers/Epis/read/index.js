import { getAllEpi } from "../../../repositorys/Epis/read/listEpis";

export const listEpis = async (req, res) =>{
    
    try{
        const epis = await getAllEpi();

        res.status(200).send(epis);
    }catch(err){
        res.status(400).send(err);
    }
}