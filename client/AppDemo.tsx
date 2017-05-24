import * as React from 'react';
import { Provider, connect, MapStateToProps } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';
import { ping, pingReducer } from './modules/ping';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, createLogger())
);


interface ConnectedProps {
  isPinging: boolean;
}

interface DispatchProps {
  ping(): void;
}

class AppC extends React.Component<ConnectedProps & DispatchProps, {}> {
  render() {
    const { isPinging, ping } = this.props;
    return (
      <div>
        <h1>{isPinging + ''}</h1>
        <button onClick={ping}>Start PING</button>
      </div >
    );
  }
}

const mapStateToProps: MapStateToProps<ConnectedProps, {}> = (state: any) => ({
  isPinging: state.isPinging
});

const App = connect(
  mapStateToProps,
  { ping }
)(AppC);


export default class AppDemo extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

/**
 * <!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/redux@^3.5.2/dist/redux.min.js"></script>
  <script src="https://unpkg.com/@reactivex/rxjs@5.0.0-beta.12/dist/global/Rx.js"></script>
  <script src="https://unpkg.com/redux-observable/dist/redux-observable.min.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
</body>
  <script>

const { createStore, applyMiddleware } = Redux;
const { createEpicMiddleware } = ReduxObservable;

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);

/**
 * This is using raw HTML + redux.
 * 
 * You will most likely use some sort of UI framework
 * like React, Angular, etc
 
const renderApp = () => {
  const { isPinging } = store.getState();

  document.body.innerHTML = `
    <div>
      <h1>is pinging: ${isPinging}</h1>
      <button
        onclick="(${() => {
      store.dispatch(ping());
    }})();"
      >
        Start PING
      </button>
    </div>
  `;
};

store.subscribe(renderApp);
renderApp();

  </script >
</html >
 */
/**
 * /**
 * IMPORTANT ***************************************************************
 * 
 * This example uses the global version of RxJS that includes ALL operators.
 * Inside your app, you will likely need to import the operators you use or
 * import all of them in your index.js entry file.
 * 
 * Learn more about this: http://goo.gl/4ZlYeC
 */

/*
console.clear();

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

// components/App.js
/*

const { connect } = ReactRedux;

let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);

// redux/configureStore.js

const { Provider } = ReactRedux;
const { createStore, applyMiddleware } = Redux;
const { createEpicMiddleware } = ReduxObservable;

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);

// index.js

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

 */
