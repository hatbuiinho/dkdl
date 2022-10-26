import './assets/scss/bootstrap.scss';
import { Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import { Route } from 'react-router-dom';
import { AppRoute } from './routes';
import { Empty } from 'antd';
import NotFound from './page/Error/404';

function App() {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <AppRoute key={route.key} {...route} />
      ))}
      <Route component={NotFound} />
      
    </Switch>
  );
}

export default App;
