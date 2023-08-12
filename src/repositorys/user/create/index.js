import { prisma } from "../../../services";


export const createUser = async (data) =>{
    const user  = await prisma.user.create(data);

}
