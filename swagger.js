const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'Documentation for your APIs',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Change this URL based on your server configuration
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
