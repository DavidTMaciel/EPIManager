import { prisma } from "../../../services/prisma";

export const createForm = async (collaboratorId, epiId) => {
    const collaborator = await prisma.collaborator.findUnique({ where: { id: collaboratorId } });
    const epi = await prisma.listEpis.findUnique({ where: { id: epiId } });

    if (!collaborator) {
        throw new Error("Collaborator not found");
    }    

    if (!epi) {
        throw new Error("EPI not found");
    }

    const form = await prisma.releaseForm.create({
        data: {
            collaborator: {
                connect: { id: collaborator.id },
            },
            listaItens: {
                connect: [{ id: epi.id }],
            },
            itens: [epi.id]
        },
        select: {
            id: true,
            collaborator: {
                select: {
                    name: true,
                    office: true,
                    admission_Date: true,
                    company: true,
                },
            },
            itens:true,
            listaItens: {
                select: {
                    name: true,
                },
            }
        },
    });

    return form;
};
