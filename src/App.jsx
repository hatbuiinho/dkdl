import './assets/scss/bootstrap.scss';
import { Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import { Route } from 'react-router-dom';
import { AppRoute } from './routes/AppRoute';

function App() {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <AppRoute key={route.key} {...route} />
      ))}
      <Route>Page Not Found</Route>
    </Switch>
  );
}

export default App;
