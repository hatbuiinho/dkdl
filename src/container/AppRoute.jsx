import { Redirect, Route } from 'react-router-dom';
import { BlankLayout } from './Layouts/BlankLayout';
// import { useAuth } from "../hooks/useAuth";

export const AppRoute = ({
  component: Component,
  path,
  exact,
  layout: Layout = BlankLayout,
  needAuth = false,
  strict,
  sensitive,
  ...rest
}) => {
  // const { user } = useAuth();
  const user = null;
  if (!needAuth || user) {
    // user is not authenticated
    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        sensitive={sensitive}
        {...rest}
        render={() => (
          <Layout>
            <Component />
          </Layout>
        )}
      />
    );
  }
  return <Redirect to="/login" />;
};

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // import AuthenticationService from '../services/authentication';
// import { BlankLayout } from './Layouts/BlankLayout';
// let auth = true;
// const AppRoute = ({
//   component: Component,
//   layout: Layout = BlankLayout,
//   auth: auth = true,
//   ...rest
// }) => {
//   // return <Route {...rest} render={(props) => (
//   //   (!auth || (auth && AuthenticationService.isAuthenticated() === true))
//   //     ? <Layout className='layout-wrapper'><Component {...props} /></Layout>
//   //     : <Redirect to='/login' />
//   // )} />

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !auth || auth === true ? (
//           <Layout className="layout-wrapper">
//             <Component {...props} />
//           </Layout>
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };
// export { AppRoute };
