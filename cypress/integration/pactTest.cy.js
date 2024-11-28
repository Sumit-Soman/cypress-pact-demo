const { Pact } = require('@pact-foundation/pact');

describe('Cypress Pact Test', () => {
    const provider = new Pact({
        consumer: 'ConsumerApp',
        provider: 'ProducerApp',
        port: 8081,
    });

    before(() => provider.setup());
    after(() => provider.finalize());

    it('should interact with the producer', () => {
        provider.addInteraction({
            state: 'data exists for id 1',
            uponReceiving: 'a GET request for data',
            withRequest: {
                method: 'GET',
                path: '/data/1',
            },
            willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: { id: 1, name: 'Test Data' },
            },
        });

        cy.request('http://localhost:8081/data/1').then((response) => {
            expect(response.body).to.deep.equal({ id: 1, name: 'Test Data' });
        });
    });
});
