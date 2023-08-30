import routesCollaborator from "./collaborator-routes/index";
import routesEpi from "./epi-routes";
import routesForm from "./form-routes";
import routeLogin from "./login";
import { routesUser } from "./user-routes";
import { authenticate } from "../authentication";


const fastifyRoutes = async (fastify) =>{
    await routeLogin(fastify);
    await routesUser(fastify);
    

    fastify.addHook("onRequest", async (request, reply) => {
        if (request.raw.url !== '/login' && request.raw.url !== '/users') {
            await authenticate(request, reply); 
        }
    });


    await routesEpi(fastify);
    await routesCollaborator(fastify);
    await routesForm(fastify);
    

}

export default fastifyRoutes;