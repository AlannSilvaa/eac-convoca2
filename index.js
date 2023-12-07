import express from 'express';
import { router } from './src/router/routes.js';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => (console.log('Este servidor esta corriendo en el puerto 3000 como vos pediste :)')));

