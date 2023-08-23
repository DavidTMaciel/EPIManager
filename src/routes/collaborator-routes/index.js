import { createNewCollaborator } from "../../controllers/Collaborator/create"
import { deleteCollaboratorById } from "../../controllers/Collaborator/delete"
import { listAllCollaborators } from "../../controllers/Collaborator/read/getAll"
import { listUniqueCollaborators } from "../../controllers/Collaborator/read/getUnique"
import { updateCollaboratorById } from "../../controllers/Collaborator/update"


export const routesCollaborator = app =>{
    app.post('/create-new-collaborator', createNewCollaborator)
    app.get('/list-all-collaborators', listAllCollaborators)
    app.get('/list-collaborator', listUniqueCollaborators)
    app.put('/update-collaborator', updateCollaboratorById)
    app.delete('/delete-collaborator', deleteCollaboratorById)
}