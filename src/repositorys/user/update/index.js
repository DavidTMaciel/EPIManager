import { prisma } from "../../../services/prisma";

export const updateUser = async (id, updateData) => {
    
    const user = await prisma.user.update({
        where:{id}, data:updateData
    });

    return user;

}