import express, { Application } from 'express';
import routes from './routes';

export default class App {
  private app: Application;
  
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  public initApp(): Application {
    return this.app;
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    routes(this.app);
  }
}
