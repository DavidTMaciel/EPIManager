import { prisma } from "../../../services/prisma";

export const createEpis = async (data) =>{
    
    const epi = await prisma.listEpis.create({data});

    return epi;
}