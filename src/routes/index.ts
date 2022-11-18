import { Application } from 'express';
import especialidadeRouter from './especialidadeRoutes';
import medicoRoutes from './medicoRoutes';
import unidadeRoutes from './unidadeRoutes';
import planoSaudeRoutes from './planoSaudeRoutes';
import pacienteRoutes from './pacienteRoutes';

const routes = (app: Application) => {
  app.use(
    especialidadeRouter,
    medicoRoutes,
    unidadeRoutes,
    planoSaudeRoutes,
    pacienteRoutes,
  );
};

export default routes;
