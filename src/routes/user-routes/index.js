import { createNewUser } from "../../controllers/User/create"
import { deleteUserById } from "../../controllers/User/delete"
import { getAllUsers } from "../../controllers/User/read/getAllUser"
import { getUser } from "../../controllers/User/read/getUser"
import { updateUserById } from "../../controllers/User/update"

export const routesUser = (fastify) =>{

    fastify.get('/users', getAllUsers)
    fastify.post('/create-new-user', createNewUser)
    fastify.put('/update-user/:id', updateUserById)
    fastify.delete('/delete-user/:id', deleteUserById)
    fastify.get('/user/:id', getUser)

}