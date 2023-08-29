require('@babel/register');
const Fastify = require('fastify');
import fastifyRoutes from '../../routes';
const {generateCollaborator} = require('../Mocking/collaboratorGenerate')

describe('Collaborator test CRUD', () =>{
    const fastify = Fastify();

    fastify.register(fastifyRoutes);

    beforeAll (async () =>{
        await fastify.ready();
    });

    afterAll (async () =>{
        await fastify.close();
    });

    test('Should create a new collaborator', async () =>{
        const collaborator = new generateCollaborator();

        const response = await fastify.inject({
            method:'POST',
            url:'/create-new-collaborator',
            payload: collaborator
        })

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.payload)).toMatchObject({
          name: collaborator.name,
          office: collaborator.office,
          admission_Date: collaborator.admission_Date,
          constructions: collaborator.constructions,
          company: collaborator.company,
    
        });
    })

    test('should create a new collaborator no all fields filled', async() =>{
        const collaborator = {

        };

        const response = await fastify.inject({
            method:'POST',
            url:'/create-new-collaborator',
            payload: collaborator
        })
        expect(response.statusCode).toBe(400)
        
    });

    test('should read a collaborators', async() =>{
        const collaborator = new generateCollaborator();

        const createCollaboratorResponse = await fastify.inject({
            method:'POST',
            url:'/create-new-collaborator',
            payload: collaborator
        })

         const createCollaborator = JSON.parse(createCollaboratorResponse.payload);

         await createCollaborator
        
        const response = await fastify.inject({
            method:'GET',
            url:'/list-all-collaborators',
        
        })

        expect(response.statusCode).toBe(200);
        
    });

    test('should read a collabortor', async () => {
        const collaborator = new generateCollaborator();

        const createCollaboratorResponse = await fastify.inject({
            method:'POST',
            url:'/create-new-collaborator',
            payload: collaborator
        })

        const createCollaborator = JSON.parse(createCollaboratorResponse.payload);

         const response = await fastify.inject({
            method:'GET',
            url:`/list-collaborator/${createCollaborator.id}`,        
        })
        expect(response.statusCode).toBe(200)
    });

    test('should update a collaborator', async () =>{
        const collaborator = new generateCollaborator();

        const createCollaboratorResponse = await fastify.inject({
            method:'POST',
            url:'/create-new-collaborator',
            payload: collaborator
        });
        const createCollaborator = JSON.parse(createCollaboratorResponse.payload);

        const updateData = generateCollaborator();


         const response = await fastify.inject({
            method:'PUT',
            url:`/update-collaborator/${createCollaborator.id}`, 
            payload:updateData    
        });

        expect(response.statusCode).toBe(200)
    })

})