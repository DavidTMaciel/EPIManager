import jwt from "jsonwebtoken";
import { prisma } from "../services/prisma";
export const authenticate = async (request, reply) => {
    try {
        const token = request.headers.authorization;

        if (!token) {
            throw new Error("Authorization token missing");
        }

        const decoded = jwt.verify(token, "your-secret-key");
        request.user = decoded;

        const user = await prisma.user.findUnique({
            where: { id: request.user.userId },
            select: { admin: true }
        });

        if(user){
            request.user.isAdmin = user.admin;
        }        
    } catch (error) {
        reply.code(401).send({ error: "Unauthorized" });
    }
};
