import { prisma } from "../../../services/prisma";


export const listAllUsers = async () =>{

    const users = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email: true,
            password: false,
            admin: false
        }
    });

    return users;

} 