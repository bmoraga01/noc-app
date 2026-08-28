import { envs } from "./envs.plugin";


describe('envs.plugin.ts', () => {

    test('should return env options', () => {

        expect( envs ).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'aaa',
            MAILER_EMAIL: 'bastian.moraga01@gmail.com',
            MAILER_SECRET_KEY: 'aaaa',
            PROD: false,
            MONGO_URL: 'mongodb://bmoraga:123456@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'bmoraga',
            MONGO_PASS: '123456',
            POSTGRES_URL: 'postgresql://postgres:123456@localhost:5432/NOC-TEST',
            POSTGRES_USER: 'postgres',
            POSTGRES_DB: 'NOC-TEST',
            POSTGRES_PASSWORD: '123456'
        });

    });

    test('should return error if not found env', async () => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            await import('./envs.plugin');
            expect( true ).toBe(false);

        } catch (error) {
            expect( `${error}` ).toContain('"PORT" should be a valid integer');
            
        }

    });

});