import { createNewEpi } from "../../controllers/Epis/create";
import { deleteEpiId } from "../../controllers/Epis/delete";
import { listEpis } from "../../controllers/Epis/read";
import { updateEpiId } from "../../controllers/Epis/update";

export const routesEpi = (fastify, options, done) =>{
    fastify.post('/create-new-epi', createNewEpi);
    fastify.put('/update-epi/:id', updateEpiId);
    fastify.get('/list-epis', listEpis);
    fastify.delete('/delete-epi/:id', deleteEpiId);
}

export default routesEpi;