import { updateUser } from "../../../repositorys/user/update";


export const updateUserById = async (request, repley) =>{

    try{
        const updateData = request.body;

        const user = await updateUser(Number(request.params.id), updateData);
        
        repley.code(200).send(user);
    }catch(err){
        repley.code(400).send(err);
    }
    


}