import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());

app.use('/', userRoutes);

app.listen(process.env.PORT || 5000)