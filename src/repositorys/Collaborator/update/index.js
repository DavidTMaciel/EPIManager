import { prisma } from "../../../services/prisma";

export const updateCollaborator = (id, dataUpdate) => {

    const collaborator = prisma.collaborator.update({
        where:{id}, data: dataUpdate
    });

    return collaborator;
};