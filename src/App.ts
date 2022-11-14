import express, { Application } from 'express';

class App {

  private app: Application;
  
  constructor(){
    this.app = express();
    this.middlewares();
  }

  public initApp(): Application {
    return this.app;
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  // private routes(): void {
  //   this.app.use();
  // }
}

export default App;
