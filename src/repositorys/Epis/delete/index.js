import { prisma } from "../../../services/prisma";

export const deleteEpi = async(id) =>{

    const epi = await prisma.listEpis.delete({
        where:{id}
    });

    return epi;
}