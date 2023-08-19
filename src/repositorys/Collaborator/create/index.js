import { prisma } from "../../../services/prisma"

export const createCollaborator = async (data) =>{

    const collaborator = await prisma.collaborator.create({data})

    return collaborator;
}