import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());

app.use('/', userRoutes);

app.listen(PORT, () => { console.log(`App is running on port: ${PORT}`) })