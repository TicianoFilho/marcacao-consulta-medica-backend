import { Application } from 'express';
import especialidadeRouter from './especialidadeRoutes';

const routes = (app: Application) => {
  app.use(
    especialidadeRouter
  );
};

export default routes;
