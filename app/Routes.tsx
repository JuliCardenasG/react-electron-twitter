/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import LayoutPage from './containers/LayoutPage';
import WelcomePage from './containers/WelcomePage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <LayoutPage>
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path={routes.WELCOME} component={WelcomePage} />
        </Switch>
      </LayoutPage>
    </App>
  );
}
