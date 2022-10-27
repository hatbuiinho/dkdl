import './assets/scss/bootstrap.scss';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { Route } from 'react-router-dom';
import { AppRoute } from './routes';
import { NotFound } from './page/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map((route) => (
          <AppRoute key={route.key} {...route} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
