import { Redirect, Route } from 'react-router-dom';
import { BlankLayout } from '../container/Layouts/BlankLayout';

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
  const user = null;
  if (!needAuth || user) {
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
  return <Redirect to="/login" />; // or Login popup
};