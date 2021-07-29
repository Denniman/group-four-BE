
import supertest from "supertest";
import {server} from '../index.js';

// import supertest from 'supertest';
// import app from '../index.js';
// import * as dbHandler from '../utils/db-Handler.js';

let serverExports;

// console.log(dbHandler);
// beforeAll(async () => dbHandler.dbConnect);
// afterAll(async () => dbHandler.dbDisConnect);

describe("to test all endpoints", () => {
  beforeEach(() => {
    
    serverExports = server;
  });
  afterEach(async () => {
    await serverExports.close();
  });
  describe("POST /dishes/create", () => {
    jest.setTimeout(10000);
    it("should create a new dish", async () => {
   const result = await supertest(serverExports).post('/dishes/create').send({
      name: 'test',
      image: 'imageeeeeeeee',
      category: 'best dishes',
      price: 500,
      countInStock: 500,
      description: " testing...testing...testing..."
    })
      expect(result.status).toBe(200);
  })
  })
  
});



