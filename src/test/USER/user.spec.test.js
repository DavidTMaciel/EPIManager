require('@babel/register');
const { generateUser } = require('../Mocking/userGenerate'); // Substitua pelo caminho correto para o arquivo de mock
const Fastify = require('fastify');
import fastifyRoutes from '../../routes';

describe('User Creation', () => {
    const fastify = Fastify();

    fastify.register(fastifyRoutes);

    beforeAll(async () => {
        await fastify.ready();
      });
    
    afterAll(async () => {
        await fastify.close();
    });

  test('should create a new user', async () => {
    const user = generateUser(); 
    
    //
    const response = await fastify.inject({
        method: 'POST',
        url:'/create-new-user',
        payload: user
    })

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toMatchObject({
      name: user.name,
      email: user.email,

    });
  });

  test('should create a new user with name, email and password invalid', async () =>{
    const user = {
        name: '',
        email: '',
        password: '',
        admin: false
    };
    const response = await fastify.inject({
        method: 'POST',
        url:'/create-new-user',
        payload: user
    })
    expect(response.statusCode).toBe(400);

  });

  test('should update user', async () =>{

    const user = generateUser();

    const createdUserResponse = await fastify.inject({
      method: 'POST',
      url: '/create-new-user',
      payload: user,
    });

    const createdUser = JSON.parse(createdUserResponse.payload);

    const updateData = generateUser();

    const response = await fastify.inject({
      method: 'PUT',
      url: `/update-user/${createdUser.id}`,
      payload:updateData
    })
    expect(response.statusCode).toBe(200);
  })

  test('should delete user', async () =>{

    const user = generateUser();

    const createdUserResponse = await fastify.inject({
      method: 'POST',
      url: '/create-new-user',
      payload: user,
    });

    const createdUser = JSON.parse(createdUserResponse.payload);

    const response = await fastify.inject({
      method: 'DELETE',
      url: `/delete-user/${createdUser.id}`,
      payload:user
    })

    expect(response.statusCode).toBe(200);
  });

  test('should delete a user no id or no exist', async () => {

    const user = generateUser();

    const createdUser = {

    }

    const response = await fastify.inject({
      method: 'DELETE',
      url: `/delete-user/${createdUser.id}`,
      payload:user
    })

    expect(response.statusCode).toBe(400);

  })
  test('Should list a users', async () => {
    const user = generateUser();

    const createdUserResponse = await fastify.inject({
      method: 'POST',
      url: '/create-new-user',
      payload: user,
    });

    const createdUser = JSON.parse(createdUserResponse.payload);
    
    const response = await fastify.inject({
      method: 'GET',
      url: `/users`,
      payload:user
    })

    expect(response.statusCode).toBe(200);
  });
  test('Should list a user', async () => {
    const user = generateUser();

    const createdUserResponse = await fastify.inject({
      method: 'POST',
      url: '/create-new-user',
      payload: user,
    });

    const createdUser = JSON.parse(createdUserResponse.payload);
    
    const response = await fastify.inject({
      method: 'GET',
      url: `/user/${createdUser.id}`,
      payload:user
    })

    expect(response.statusCode).toBe(200);
  });
});
