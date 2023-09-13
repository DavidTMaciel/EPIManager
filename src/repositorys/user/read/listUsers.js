import { prisma } from "../../../services/prisma";


export const listUser = async (id) =>{

    const user = await prisma.user.findUnique({
        where: {id}, 
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            admin: true
        }
    });

    return user;
}