const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Online Courses API',
        description: 'This API allows users to access courses and course instructors, and save courses.',
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = [
    './routes/courseDetails.js',
    './routes/courseInstructors.js',
    './routes/courses.js',
    './routes/courseUsers.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);