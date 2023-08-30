import { createNewUser } from "../../controllers/User/create"
import { deleteUserById } from "../../controllers/User/delete"
import { getAllUsers } from "../../controllers/User/read/getAllUser"
import { getUser } from "../../controllers/User/read/getUser"
import { updateUserById } from "../../controllers/User/update"

export const routesUser = (fastify) =>{

    
    fastify.post('/create-new-user', createNewUser)
    fastify.put('/update-user/:id', updateUserById)
    fastify.delete('/delete-user/:id', deleteUserById)
    fastify.get('/users', getAllUsers)
    fastify.get('/user/:id', getUser)

}