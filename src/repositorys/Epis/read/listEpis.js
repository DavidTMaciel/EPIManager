import { prisma } from "../../../services/prisma";

export const getAllEpi = async () =>{

    const epis = await prisma.listEpis.findMany({
        select:{
            id: true,
            name: true
        }
    });

    return epis;
}