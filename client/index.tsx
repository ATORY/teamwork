import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect, MapStateToProps } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Login } from './component/Login';
import {
  // HashRouter as Router,
  BrowserRouter as Router, Switch, Route, Link, RouteComponentProps
} from 'react-router-dom';

import { rootReducer } from './reducers';
import { ASide } from './component/ASide';
import { Article } from './component/Article';
import { Main } from './Main';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  // applyMiddleware(epicMiddleware, createLogger())
  applyMiddleware(middleware, createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/*<div className='main'>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
      </div>*/}
      <Route component={Main} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
