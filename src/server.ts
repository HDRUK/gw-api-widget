import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import responseTime from 'response-time';
import bodyParser from 'body-parser';
import apicache from 'apicache';

import router from './api/v1/routes/routes';

const app = express();

const PORT = process.env.PORT || 3004;
const HOST = process.env.HOST || '';

const cache = apicache.middleware;

app.use(express.json());
app.use(cors());
app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cache('5 minutes'));

app.use(router);

app.listen(PORT, () => {
    process.stdout.write(`listening on port ${HOST}\n`);
});