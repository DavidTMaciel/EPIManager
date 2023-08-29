import { prisma } from "../../../services/prisma"

export const createCollaborator = async (data) =>{

    const collaborator = await prisma.collaborator.create({data, select:{
        name: true,
        office: true,
        admission_Date: true,
        constructions: true,
        company: true,
        createdAt: true
    }});

    return collaborator;
}