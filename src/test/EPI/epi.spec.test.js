require('@babel/register');
const request = require('supertest');
const express = require('express');

const { createNewEpi } = require('../../controllers/Epis/create');
 

const app = express();
app.use(express.json());
app.post('/create-new-epi', createNewEpi);

describe('POST /create-new-epi', () => {
    it('should return 200 with valid input', async () => {
    const validData = {
      name: 'bota'
    };

    const response = await request(app)
      .post('/create-new-epi')
      .send(validData);

    expect(response.status).toBe(200);
    
  })

  it('should return 400 with invalid input', async ()=>{
    const validData = {

    };
    const response = await request(app)
    .post('/create-new-epi')
    .send(validData);

    expect(response.status).toBe(400);
  });

  it('should return 400 with invalid', async ()=>{
    const validData = {
      name: 1,
    };
    const response = await request(app)
    .post('/create-new-epi')
    .send(validData);

    expect(response.status).toBe(400);
  });
});
