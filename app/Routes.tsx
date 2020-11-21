/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import DashboardPage from './containers/DashboardPage';
import LayoutPage from './containers/LayoutPage';
import WelcomePage from './containers/WelcomePage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

// Tried to lazy load this component but it did not work
// const LazyDashboardPage = React.lazy(() =>
//   import(/* webpackChunkName: "DashboardPage" */ './containers/DashboardPage')
// );

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

// const DashboardPage = () => {
//   <React.Suspense fallback={<h1>Loading Dashboard...</h1>}>
//     <LazyDashboardPage />
//   </React.Suspense>
// }

export default function Routes() {
  return (
    <App>
      <LayoutPage>
        <Switch>
          <Route exact path={routes.COUNTER} component={CounterPage} />
          <Route exact path={routes.WELCOME} component={WelcomePage} />
          <Route exact path={routes.DASHBOARD} component={DashboardPage} />
        </Switch>
      </LayoutPage>
    </App>
  );
}
