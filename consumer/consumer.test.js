const { Pact } = require('@pact-foundation/pact');
const path = require('path');
const { fetchData } = require('./consumer');

const provider = new Pact({
    consumer: 'ConsumerApp',
    provider: 'ProducerApp',
    port: 8081,
    log: path.resolve(process.cwd(), 'pact/logs'),
    dir: path.resolve(process.cwd(), 'pact/pacts'),
    logLevel: 'DEBUG',
});

describe('Pact Consumer Test', () => {
    beforeAll(async () => {
        await provider.setup();
        console.log('Mock server running at:', provider.mockService.baseUrl);
    });
    
    afterAll(() => provider.finalize());
    // afterEach(() => provider.verify());

    test('should receive the correct data', async () => {
        await provider.addInteraction({
            state: 'data exists for id 1',
            uponReceiving: 'a request for data with id 1',
            withRequest: {
                method: 'GET',
                path: '/data/1',
                headers: {  Accept: 'application/json' },
            },
            willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: { id: 1, name: 'Test Data' },
            },
        });

        const data = await fetchData(1, provider.mockService.baseUrl);
        console.log(data)
        expect(data).toEqual({ id: 1, name: 'Test Data' });

        await provider.verify();
    });
});
