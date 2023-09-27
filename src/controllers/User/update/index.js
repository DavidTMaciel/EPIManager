import { listUser } from "../../../repositorys/user/read/listUsers";
import { updateUser } from "../../../repositorys/user/update";


export const updateUserById = async (request, reply) =>{

    try{
        const updateData = request.body;
        const userId = listUser(Number(request.params.id));

        if (request.user.userId !== Number(request.params.id)) {
            return reply.code(400).send({ error: "Unauthorized" });
        }
        else if(request.user.isAdmin == true || userId.admin == true || request.user.userId == Number(request.params.id)){
            
            const user = await updateUser(Number(request.params.id), updateData);
            reply.code(200).send(user);
        }

    }catch(err){
        reply.code(400).send({err:"Error updating user"});
    }
    


}