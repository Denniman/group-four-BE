import supertest from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server-core'
import app from '../server.js'

const request = supertest(app)



describe('POST /api', () => {
    let mongo 
    beforeAll (async () => {
        process.env.SECRET = 'secret';
        mongo = await MongoMemoryServer.create();
        const mongoURI = await getUri();

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    it('responds with json', async () => {
        const response = await request.post('/api/register')
        .send({email: 'testdev@dev.com', password: '1234567'})
        .set('Accept', 'application/json')
        expect(response.status).toBe(400)
        expect(response.body.message).toBe('All fields must be provided')
    })

    it('', async () => {
        const response = await request.post('/api/login')
        .send({email: '', password: 'Stella12.'})
        await request.set('Authorization', 'response.token')
        expect(response.status).toBe(400)
        expect(response.body.message).toBe('Email or password cannot be empty')
    })

    afterAll(async () => {
        await mongo.disconnect();
        await mongoose.connection.close();
    });
});