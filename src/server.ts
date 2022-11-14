import Application from './App';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {

  const App = new Application().initApp();

  App.get('/health', (req, res) => {
    return res.json({ message: 'Smile, App is running =)' });
  });

  const port = process.env.APP_PORT || 3001;

  App.listen(port, () => {
    console.log(`App listenng on port ${ port }`);  
  });
});
