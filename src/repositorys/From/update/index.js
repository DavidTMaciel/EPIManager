import { prisma } from "../../../services/prisma";

export const updateForm = async (id, updateData) => {

    const newEpi = await prisma.listEpis.findUnique({where:{id: updateData}})

    const form = await prisma.releaseForm.update({
        where: { id }, // ID do ReleaseForm que você quer atualizar
        data: {
            listaItens: {
                connect: [{ id: newEpi.id }],
            },
            itens: { push: newEpi.id }
        },
        select: {
            id: true,
            collaborator: {
                select: {
                    name: true,
                    function: true,
                    admission_Date: true,
                    company: true,
                },
            },
            itens: true,
            listaItens: {
                select: {
                    name: true,
                },
            }
        },
    });

    return form;
};
