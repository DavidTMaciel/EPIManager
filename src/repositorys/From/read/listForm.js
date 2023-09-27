import { prisma } from "../../../services/prisma";



export const listForm = async (id) => {

    const form = await prisma.releaseForm.findUnique({
        where: { id },
        select: {
            id: true,
            collaborator: {
                select: {
                    name: true,
                    office: true,
                    admission_Date: true,
                    company: true,
                    constructions: true,
                }
            },
            itens: true,
            listaItens: {
                select: {
                    name: true,
                },
            }

        }
    });

    return form;
}