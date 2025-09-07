import { Router } from 'express';
import { templateRouter } from './template/router';

export const appRouter = Router();

appRouter.use('/api/template', templateRouter);

appRouter.use(['/isAlive', '/isalive', '/health'], (_req, res) => {
    res.status(200).send('alive');
});

appRouter.use((_req, res) => {
    res.status(404).send('Invalid Route');
});
