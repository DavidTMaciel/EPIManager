import { createNewEpi } from "../../controllers/Epis/create";
import { deleteEpiId } from "../../controllers/Epis/delete";
import { listEpis } from "../../controllers/Epis/read";
import { updateEpiId } from "../../controllers/Epis/update";

export const routesEpi = app =>{
    app.post('/create-new-epi', createNewEpi);
    app.put('/update-epi/:id', updateEpiId);
    app.get('/list-epis', listEpis);
    app.delete('/delete-epi/:id', deleteEpiId);
}