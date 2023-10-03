import { createNewForm } from "../../controllers/Form/create"
import { deleteFormById } from "../../controllers/Form/delete";
import { getUniqueForm } from "../../controllers/Form/read";
import { getAllForm } from "../../controllers/Form/read/getAllForm";
import { updateFormById } from "../../controllers/Form/update";

const routesForm = (fastify, options, done) => {

    fastify.post('/create-new-form', {

    }, createNewForm)
    fastify.get('/list-form/:id', {
        schema: {
            description: 'List form by id',
            tags: ['Form'],
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Form id'
                    }
                }
            }
        },
        response: {
            200: {
                description: 'Form list successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Form list successfully' },
                },
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Invalid request data' },
                },
            },
        }
    }, getUniqueForm)
    fastify.put('/update-form/:id', {
        schema: {
            description: 'Update form',
            tags: ['Form'],
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Form id'
                    }                   
                },
                required: ['id']
            },
            body: {
                properties: {
                    newEpiId: { type: 'integer' }
                },
               
            }
        },
        response: {
            200: {
                description: 'Form update successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Form update successfully' },
                },
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Invalid request data' },
                },
            },
        }
    }, updateFormById)
    fastify.get('/list-all-form', {
        schema: {
            description: 'List all forms',
            tags: ['Form'],
        },
        response: {
            200: {
                description: 'Form list successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Form list successfully' },
                },
            },
            400: {
                description: 'Bad request',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Invalid request data' },
                },
            },
        }
    }, getAllForm)
    fastify.delete('/deleteForm/:id', deleteFormById)

}

export default routesForm;
