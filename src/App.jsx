import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.css';
import './assets/scss/bootstrap.scss';
import { Festival } from './page/Festival';
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AppRoute } from './container/AppRoute';
import { Switch } from 'react-router-dom';
import { HeaderLayout } from './container/Layouts/HeaderLayout';
import CeremonyServingRegister from './page/LandingPage/CeremonyServingRegister';
import Home from './page/LandingPage';
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
