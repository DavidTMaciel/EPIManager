import jwt from "jsonwebtoken";

export const authenticate = async (request, reply) => {
    try {
        const token = request.headers.authorization;

        if (!token) {
            throw new Error("Authorization token missing");
        }

        const decoded = jwt.verify(token, "your-secret-key");

        request.user = decoded;
    } catch (error) {
        reply.code(401).send({ error: "Unauthorized" });
    }
};
