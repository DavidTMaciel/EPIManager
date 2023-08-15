import { createNewEpi } from "../../controllers/Epis/create";

export const routesEpi = app =>{
    app.post('/create-new-epi', createNewEpi);
}