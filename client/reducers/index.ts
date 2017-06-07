import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { membersReducer } from './members';
import { worksEpic, worksReducer } from './works';

export const rootReducer = combineReducers({
  router: routerReducer,
  login: loginReducer,
  members: membersReducer,
  works: worksReducer,
  // users
});

export const rootEpic = combineEpics(
  worksEpic,
);
