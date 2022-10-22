import './assets/scss/bootstrap.scss';
import { Festival } from './page/Festival';
import { AppRoute } from './container/AppRoute';
import { Switch } from 'react-router-dom';
import { HeaderLayout } from './container/Layouts/HeaderLayout';
import CeremonyServingRegister from './component/CeremonyServingRegister';
import Home from './page/Home';
import { HomeLayout } from './container/Layouts/HomeLayout';
import FestivalLayout from './container/Layouts/FestivalLayout';
function App() {
  return (
    <Switch>
      <AppRoute
        path="/"
        needAuth={false}
        component={Home}
        layout={HomeLayout}
        exact
      />
      <AppRoute
        path="/festival"
        needAuth={false}
        component={Festival}
        layout={FestivalLayout}
      />
      <AppRoute
        path="/register-result"
        needAuth={false}
        component={CeremonyServingRegister}
        layout={HeaderLayout}
      />
    </Switch>
  );
}

export default App;
