import routesCollaborator from "./collaborator-routes/index";
import routesEpi from "./epi-routes";
import { routesUser } from "./user-routes";


const fastifyRoutes = async (fastify) =>{
    
await routesEpi(fastify);
await routesCollaborator(fastify);
await routesUser(fastify);

}

export default fastifyRoutes;