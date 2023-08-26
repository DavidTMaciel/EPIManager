import { deleteUser } from "../../../repositorys/user/delete";

export const deleteUserById = async (request, repley) =>{

    try{

        const user = await deleteUser(Number(request.params.id));

        repley.code(200).send(user);

    }catch(err){
        repley.code(400).send(err);
    }
}