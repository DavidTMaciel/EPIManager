require('@babel/register');
const {generateEpi} = require('../Mocking/generateEpi')
const Fastify = require('fastify');
import fastifyRoutes from '../../routes';

 
describe('POST /create-new-epi', () => {
  const fastify = Fastify()

  fastify.register(fastifyRoutes)

  beforeAll(async () => {
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('should return 200 with valid input', async () => {
    const epi = generateEpi();

    const response = await fastify.inject({
      method: 'POST',
      url:'/create-new-epi',
      payload: epi
    })

    expect(response.statusCode).toBe(200);
    
  })

  test('should return 400 with invalid input', async ()=>{
    const validData = {

    };
    const response = await fastify.inject({
      method: 'POST',
      url:'/create-new-epi',
      payload: validData
    })

    expect(response.statusCode).toBe(400);
  });

  test('should return 400 with invalid', async ()=>{
    const validData = {
      name: 1,
    };
    const response = await fastify.inject({
      method: 'POST',
      url:'/create-new-epi',
      payload: validData
    })

    expect(response.statusCode).toBe(400);
  });
  test('should read all epi', async ()=>{

    const response = await fastify.inject({
      method: 'GET',
      url:'/list-epis',     
    });

    expect(response.statusCode).toBe(200);

  });
  test('should update epi', async ()=>{

    const epi = generateEpi();

    const createEpiResponse = await fastify.inject({
      method:'POST',
      url:'/create-new-epi',
      payload: epi
    })

    const createEpi = await JSON.parse(createEpiResponse.payload);

    const updateData = generateEpi();

    const response = await fastify.inject({
      method: 'PUT',
      url:`/update-epi/${createEpi.id}`,
      payload: updateData  
    });

    expect(response.statusCode).toBe(200);

  });
  test('should error when updating app without name', async ()=>{

    const epi = generateEpi();

    const createEpiResponse = await fastify.inject({
      method:'POST',
      url:'/create-new-epi',
      payload: epi
    })

    const createEpi = await JSON.parse(createEpiResponse.payload);

    const updateData = {
      name:''
    }

    const response = await fastify.inject({
      method: 'PUT',
      url:`/update-epi/${createEpi.id}`,
      payload: updateData  
    });
    const responseBody = JSON.parse(response.payload);

    expect(response.statusCode).toBe(400);
    expect(responseBody.message).toBe('Invalid argument name');

  });
  test('should delete epi', async () => {

    const epi = generateEpi();

    const createEpiResponse = await fastify.inject({
      method:'POST',
      url:'/create-new-epi',
      payload: epi
    })

    const createEpi = await JSON.parse(createEpiResponse.payload);

    const response = await fastify.inject({
      method:'DELETE',
      url:`/delete-epi/${createEpi.id}`,
      payload: epi
    })

    expect(response.statusCode).toBe(200);
  })
  test('should', async () => {
    const epi = {

    };

    const response = await fastify.inject({
      method:'DELETE',
      url:`/delete-epi/${epi.id}`,
      payload: epi
    })
    const responseBody = JSON.parse(response.payload);
    expect(response.statusCode).toBe(400);
    expect(responseBody.message).toBe('id not exist')
  })
});
