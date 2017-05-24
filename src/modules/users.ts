import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';


const { ajax } = Observable;

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';


interface Action {
  type: string;
  payload: any;
}

const fetchUser = (username: string) => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = (payload: any) => ({ type: FETCH_USER_FULFILLED, payload });

export const fetchUserEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
    );

export const users = (state = {}, action: Action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        [action.payload.login]: action.payload,
        ...state,
        // `login` is the username
      };

    default:
      return state;
  }
};