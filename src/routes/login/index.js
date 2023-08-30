import { newLogin } from "../../controllers/login";

const routeLogin = (fastify, options, done) => {

    fastify.post('/login', newLogin)
};

export default routeLogin;