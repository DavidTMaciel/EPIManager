import { prisma } from "../../../services/prisma";

export const getUniqueCollaborator = async (id) =>{

    const collaborator = prisma.collaborator.findUnique({where:{id}});

    return collaborator;
}