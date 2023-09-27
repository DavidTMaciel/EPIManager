import { prisma } from "../../../services/prisma";

export const deleteForm = async (id) =>{

    const form = await prisma.releaseForm.delete({
        where:{id}, select:{
            collaborator:{
                select:{
                    name: true,
                }
            }
        }
    });
    return form;
}
