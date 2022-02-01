import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import responseTime from 'response-time';
import bodyParser from 'body-parser';

import router from './api/v1/routes/routes';

const app = express();
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3004;
const HOST = process.env.HOST;

app.use(express.json());
app.use(cors());
app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
    process.stdout.write(`listening on port ${HOST}`);
});