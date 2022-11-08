const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Online Courses API',
        description: 'This API allows users to access courses and course instructors, and save courses.',
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = [
    './routes/index.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc);