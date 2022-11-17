import { Application } from 'express';
import especialidadeRouter from './especialidadeRoutes';
import medicoRoutes from './medicoRoutes';
import unidadeRoutes from './unidadeRoutes';
import planoSaudeRoutes from './planoSaudeRoutes';

const routes = (app: Application) => {
  app.use(
    especialidadeRouter,
    medicoRoutes,
    unidadeRoutes,
    planoSaudeRoutes,
  );
};

export default routes;
