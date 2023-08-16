import { prisma } from "../../../services/prisma";

export const updateEpi = async (id, updateData) =>{

    const epi = await prisma.listEpis.update({
        where:{id}, data:updateData
    })

    return epi;
}