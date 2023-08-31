import { prisma } from "../../services/prisma"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (email, password) =>{

    try {
        const user= await prisma.user.findUnique({
            where:{email}, select:{
                id: true,
                email: true,
                password:true
            }
        })

        if(!user){
            throw new Error("User not found");
        }
        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign({ userId: user.id }, "your-secret-key", { expiresIn: "1h" });
        return { token };
    }catch(err){

        throw new Error(err.message);
    } 


}