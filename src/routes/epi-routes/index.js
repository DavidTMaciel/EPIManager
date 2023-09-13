import { createNewEpi } from "../../controllers/Epis/create";
import { deleteEpiId } from "../../controllers/Epis/delete";
import { listEpis } from "../../controllers/Epis/read";
import { updateEpiId } from "../../controllers/Epis/update";

export const routesEpi = (fastify, options, done) => {
    fastify.post('/create-new-epi', {
        schema: {
            description: "Create a new epi",
            tags: ['Epi'],
            summary: "Create a new epi with name",
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' }
                },
                required: ['name']
            }
        },
        response: {
            200: {
                description: 'Epi created successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Epi created successfully' },
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
    }, createNewEpi);
    fastify.put('/update-epi/:id', {
        schema: {
            description: "Create a new epi",
            tags: ['Epi'],
            summary: "Update epi with name",
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Epi id'
                    }
                }
            },
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' }
                },
                required: ['name']
            }
        },
        response: {
            201: {
                description: 'Epi update successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Epi Update successfully' },
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
    }, updateEpiId);
    fastify.get('/list-epis', {
        schema: {
            description: 'List-epis',
            tags: ['Epi'],
            summary: 'List all epis',
        },
        response: {
            200: {
                description: 'Epi list successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Epi list all successfully' },
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
    }, listEpis);
    fastify.delete('/delete-epi/:id', {
        schema: {
            description: 'Delete epi by id',
            tags: ['Epi'],
            summary: 'Delete a epi by id',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Epi id'
                    }
                }
            }
        },
        response: {
            200: {
                description: 'Epi update successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Epi delete successfully' },
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
    }, deleteEpiId);
}

export default routesEpi;