require('@babel/register');
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

    it('should return 200 with valid input', async () => {
    const validData = {
      name: 'bota'
    };

    const response = await fastify.inject({
      method: 'POST',
      url:'/create-new-epi',
      payload: validData
    })

    expect(response.statusCode).toBe(200);
    
  })

  it('should return 400 with invalid input', async ()=>{
    const validData = {

    };
    const response = await fastify.inject({
      method: 'POST',
      url:'/create-new-epi',
      payload: validData
    })

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 with invalid', async ()=>{
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
  
});
