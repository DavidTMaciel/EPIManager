import { createNewUser } from "../../controllers/User/create"
import { deleteUserById } from "../../controllers/User/delete"
import { getAllUsers } from "../../controllers/User/read/getAllUser"
import { getUser } from "../../controllers/User/read/getUser"
import { updateUserById } from "../../controllers/User/update"

export const routesUser = (fastify) => {


    fastify.post('/create-new-user', {
        schema: {
            description: 'Create a new user',
            tags: ['User'],
            summary: 'Create a user with name,password and email',
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    email: { type: 'string' },
                    password: { type: 'string' },
                    admin: { type: 'boolean' }
                },
                required: ['name', 'password', 'email'],
            }
        },
        response: {
            200: {
                description: 'User created successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'User created successfully' },
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
    }, createNewUser)
    fastify.put('/update-user/:id', {
        schema: {
            description: 'Update a user',
            tags: ['User'],
            summary: 'Update a user by id',
            params: {
                properties: {
                    id: {
                        type: 'integer',
                        description: 'User id'
                    }
                }
            },
            body: {
                properties: {
                    name: { type: 'string' },
                    email: { type: 'string' },
                    password: { type: 'string' },

                },  
                required: ['name', 'password', 'email'],
            }

        },
        response: {
            200: {
                description: 'User update successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'User created successfully' },
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
    }, updateUserById)
    fastify.delete('/delete-user/:id', {
        schema: {
            description: 'Delete a user',
            tags: ['User'],
            summary: 'delete a user',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'User id'
                    }
                }
            }
        },
        response: {
            200: {
                description: 'User delete successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'User delete successfully' },
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

    }, deleteUserById)
    fastify.get('/users', {
        schema: {
            description: 'List all users',
            tags: ['User'],
            summary: 'List all users'
        },
        response: {
            200: {
                description: 'User delete successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'User delete successfully' },
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

    }, getAllUsers)
    fastify.get('/user/:id', {
        schema: {
            description: 'List user by id',
            tags: ['User'],
            summary: 'List user',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'User id'
                    }
                }
            }
        },
        response: {
            200: {
                description: 'User delete successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'User delete successfully' },
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
    }, getUser)


}