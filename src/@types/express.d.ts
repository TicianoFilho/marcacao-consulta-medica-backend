import { Usuario } from '../entities/Usuario';

declare global {
  namespace Express {
    export interface Request {
      loggedUser: Partial<Usuario>
    }
  }
}
