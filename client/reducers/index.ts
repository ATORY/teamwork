import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { loginReducer } from './login';
// import { ping, pingEpic, pingReducer } from './ping';
// import { users, fetchUserEpic } from './users';

// export const rootEpic = combineEpics(
//   pingEpic,
//   fetchUserEpic
// );

export const rootReducer = combineReducers({
  router: routerReducer,
  login: loginReducer,
  // users
});