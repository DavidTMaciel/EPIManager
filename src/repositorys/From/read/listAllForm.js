import { prisma } from "../../../services/prisma";  


export const listAllForm = async () =>{

    const forms = await prisma.releaseForm.findMany({});

    return forms;
}