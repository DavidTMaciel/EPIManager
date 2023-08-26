import { createNewCollaborator } from "../../controllers/Collaborator/create"
import { deleteCollaboratorById } from "../../controllers/Collaborator/delete"
import { listAllCollaborators } from "../../controllers/Collaborator/read/getAll"
import { listUniqueCollaborators } from "../../controllers/Collaborator/read/getUnique"
import { updateCollaboratorById } from "../../controllers/Collaborator/update"


const routesCollaborator = (fastify, options, done)=>{
    fastify.post('/create-new-collaborator', createNewCollaborator)
    fastify.get('/list-all-collaborators', listAllCollaborators)
    fastify.get('/list-collaborator/:id', listUniqueCollaborators)
    fastify.put('/update-collaborator/:id', updateCollaboratorById)
    fastify.delete('/delete-collaborator/:id', deleteCollaboratorById)

}
export default routesCollaborator;