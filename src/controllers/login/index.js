import { login } from "../../repositorys/Login";

export const newLogin = async (request, reply) =>{

    try{
        const email = request.body.email;
        const password = request.body.password;

        const verify = await login(email, password);

        reply.code(200).send(verify)
    }catch(err){
        reply.code(400).send({err: "Please verify your email or password"})
    }
}