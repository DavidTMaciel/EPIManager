import { getAllEpi } from "../../../repositorys/Epis/read/listEpis";

export const listEpis = async (request, reply) =>{
    
    try{
        const epis = await getAllEpi();

        reply.code(200).send(epis);
    }catch(err){
        reply.code(400).send(err);
    }
}