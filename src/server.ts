import Application from './App';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {

  const App = new Application().initApp();

  const port = process.env.APP_PORT || 3001;

  App.listen(port, () => {
    console.log(`App listenng on port ${ port }`);  
  });
});
