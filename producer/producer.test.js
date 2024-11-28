const { Verifier } = require('@pact-foundation/pact');
const { app, server } = require('./producer');
const path = require('path');

describe('Pact Verification', () => {
    afterAll(() => server.close());

    test('should validate the consumer contract', async () => {
        const opts = {
            provider: 'ProducerApp',
            providerBaseUrl: 'http://localhost:8080',
            pactUrls: [path.resolve(process.cwd(), 'pact/pacts/consumerapp-producerapp.json')],
        };

        const result = await new Verifier(opts).verifyProvider();
        console.log('Pact Verification Result:', result);
        expect(result).toContain('0');
    });
});
