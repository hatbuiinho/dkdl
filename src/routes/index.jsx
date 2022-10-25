import React from 'react';
import FestivalLayout from '../container/Layouts/FestivalLayout';
import { HeaderLayout } from '../container/Layouts/HeaderLayout';
import { HomeLayout } from '../container/Layouts/HomeLayout';
import { Festival } from '../page/Festival';
import Home from '../page/Home';
import RegisterResult from '../page/RegisterResult';

const ROUTES = [
  {
    key: 'HOME',
    path: '/',
    needAuth: false,
    exact: true,
    component: Home,
    layout: HomeLayout,
  },
  {
    key: 'FESTIVAL',
    path: '/festival',
    needAuth: false,
    component: Festival,
    layout: FestivalLayout,
  },
  {
    key: 'REGISTER_INFO',
    path: '/register-info',
    // needAuth: true,
    component: RegisterResult,
    layout: HeaderLayout,
  },
];

export { ROUTES };
