import { createNewCollaborator } from "../../controllers/Collaborator/create"
import { deleteCollaboratorById } from "../../controllers/Collaborator/delete"
import { listAllCollaborators } from "../../controllers/Collaborator/read/getAll"
import { listUniqueCollaborators } from "../../controllers/Collaborator/read/getUnique"
import { updateCollaboratorById } from "../../controllers/Collaborator/update"


const routesCollaborator = (fastify, options, done)=>{
    fastify.post('/create-new-collaborator', {
        schema:{
            description: "Create a new collaborator",
            tags: ['Collaborator'],
            summary:'',
            body:{
                type: 'object',
                properties:{
                    name: { type: 'string'},
                    office: { type: 'string'},
                    admission_Date: { type: 'string'},
                    constructions: { type: 'string'},
                    company: { type: 'string'},
                },
                required: ['name','office','admission_Date','constructions','company']
            }
        },
        response: {
            200: {
                description: 'Collaborator created successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Collaborator created successfully' },
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
    },createNewCollaborator)
    fastify.get('/list-all-collaborators',{
        schema:{
            description: "Create a new collaborator",
            tags: ['Collaborator'],
            summary:''
        },
        response: {
            200: {
                description: 'Collaborator list successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Collaborator list successfully' },
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
    }, listAllCollaborators)
    fastify.get('/list-collaborator/:id',{
        schema:{
            description: "list collaborator by id",
            tags: ['Collaborator'],
            summary:'list collaborator',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Collaborator id'
                    }
                }
            },
        },
        response: {
            200: {
                description: 'Collaborator list successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Collaborator list successfully' },
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
    }, listUniqueCollaborators)
    fastify.put('/update-collaborator/:id',{        schema:{
        description: "Update collaborator by id",
        tags: ['Collaborator'],
        summary:'',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    description: 'Collaborator id'
                }
            }
        },
    },
    response: {
        200: {
            description: 'Collaborator update successfully',
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Collaborator update successfully' },
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
}, updateCollaboratorById)
    fastify.delete('/delete-collaborator/:id',{
        schema:{
            description: "Delete collaborator by id",
            tags: ['Collaborator'],
            summary:'',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'Collaborator id'
                    }
                }
            },
        },
        response: {
            200: {
                description: 'Collaborator delete successfully',
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Collaborator delete successfully' },
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
    }, deleteCollaboratorById)

}
export default routesCollaborator;