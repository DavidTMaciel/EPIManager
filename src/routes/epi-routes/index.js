import { createNewEpi } from "../../controllers/Epis/create";
import { updateEpiId } from "../../controllers/Epis/update";

export const routesEpi = app =>{
    app.post('/create-new-epi', createNewEpi);
    app.put('/update-epi/:id', updateEpiId);
}