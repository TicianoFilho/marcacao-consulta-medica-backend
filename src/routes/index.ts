import { Application } from 'express';
import especialidadeRouter from './especialidadeRoutes';
import medicoRoutes from './medicoRoutes';
import unidadeRoutes from './unidadeRoutes';
import planoSaudeRoutes from './planoSaudeRoutes';
import pacienteRoutes from './pacienteRoutes';
import agendamentoRoutes from './agendamentoRoutes';
import usuarioRoutes from './usuarioRoutes';

const routes = (app: Application) => {
  app.use(
    especialidadeRouter,
    medicoRoutes,
    unidadeRoutes,
    planoSaudeRoutes,
    pacienteRoutes,
    agendamentoRoutes,
    usuarioRoutes,
  );
};

export default routes;
 