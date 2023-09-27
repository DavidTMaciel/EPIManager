import routesCollaborator from "./collaborator-routes/index";
import routesEpi from "./epi-routes";
import routesForm from "./form-routes";
import routeLogin from "./login";
import { routesUser } from "./user-routes";
import { authenticate } from "../authentication";


const fastifyRoutes = async (fastify) =>{
    await routeLogin(fastify);
    await routesUser(fastify);
    

    await routesEpi(fastify);
    await routesCollaborator(fastify);
    await routesForm(fastify);
    

}

export default fastifyRoutes;