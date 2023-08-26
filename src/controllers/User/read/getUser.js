import { listUser } from "../../../repositorys/user/read/listUsers";

export const getUser = async (request, repley) =>{

    try{

        const user = await listUser(Number(request.params.id));

        repley.code(200).send(user);

    }catch(err){
        repley.code(200).send(users);
    }
}