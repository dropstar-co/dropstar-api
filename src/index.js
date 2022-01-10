import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import modules from './modules';
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

app.use('*', (req, res) => {
    res.status(404).send({
        message: "Url not found"
    });
});

app.listen(port, () => {
    console.log(`Server connected successfully on http://localhost:${port}/api/v1`)
});

export default app;
        