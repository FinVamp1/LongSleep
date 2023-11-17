const { app } = require('@azure/functions');

const startTime = Date.now();
const delayInMs = 5 * 60 * 1000; // 3 minutes
while (Date.now() < startTime + delayInMs) {
    // wait
}

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
