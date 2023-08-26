import { listAllUsers } from "../../../repositorys/user/read/listAllUser";

export const getAllUsers = async (request, repley) =>{

    try{

        const users = await listAllUsers();

        repley.code(200).send(users);

    }catch(err){
        repley.code(200).send(users);
    }
}