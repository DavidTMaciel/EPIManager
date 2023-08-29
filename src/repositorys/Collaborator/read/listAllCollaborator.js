import { prisma } from "../../../services/prisma";

export const getAll = async () =>{

    const collaborator = prisma.collaborator.findMany({});

    return collaborator;
}