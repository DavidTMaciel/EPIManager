import { prisma } from "../../../services/prisma";  

export const deleteCollaborator = async (id) =>{

    const collaborator = await prisma.collaborator.delete({where:{id}});

    return collaborator;
}