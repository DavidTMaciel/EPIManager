import { newLogin } from "../../controllers/login";

const routeLogin = (fastify, options, done) => {

    fastify.post('/login',{
        schema:{
            description:'Login',
            tags: ['Login'],
            body:{
                type: 'object',
                properties:{
                    name: {type: 'string'},
                    password: {type: 'string'}
                }
            }
        },
        response:{
            200: {
                description: 'Login successful',
                type:'object',
                properties:{
                    message:{type: 'string', example: 'login success'}
                }
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Invalid request data' },
                },
            },
        }
    }, newLogin)
};

export default routeLogin;