import { createNewForm } from "../../controllers/Form/create"
import { getUniqueForm } from "../../controllers/Form/read";
import { getAllForm } from "../../controllers/Form/read/getAllForm";
import { updateFormById } from "../../controllers/Form/update";

const routesForm = (fastify, options, done) =>{

    fastify.post('/create-new-form', createNewForm)
    fastify.get('/list-form/:id', getUniqueForm)
    fastify.put('/update-form/:id', updateFormById)
    fastify.get('/list-all-form', getAllForm)

}

export default routesForm;