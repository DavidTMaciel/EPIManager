import { prisma } from "../../../services/prisma";


export const deleteUser = async (id) =>{

    const user = await prisma.user.delete({
        where:{id}, select:{
            id: true,
            name: true
        }
    });

    return user;
}