import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import modules from './modules';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc'
require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());




app.get('/', function (req, res) {
    res.send('Hello world, I am the DropStar API');
  });

modules(app);


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Dropstar application',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    // contact: {
    //   name: 'JSONPlaceholder',
    //   url: 'https://jsonplaceholder.typicode.com',
    // },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      basicAuth:{
        type: 'basic',

      }
    }
  },
  servers: [
    {
      url: 'http://dropstarstaging-env.eba-ezcsnqme.us-east-2.elasticbeanstalk.com/api/v1',
      description: 'Staging server',
    },
    // {
    //   url: 'http://localhost:8000/api/v1',
    //   description: 'Development server',
    // }
    
  ],
};
const options = {
    swaggerDefinition,
    apis: ["./**/**/index.js"],
  };

const specs =swaggerJsDoc(options);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));



app.use('*', (req, res) => {
    res.status(404).send({
        message: "Url not found"
    });
});

app.listen(port, () => {
    console.log(`Server connected successfully on http://localhost:${port}/api/v1`)
});

export default app;
        