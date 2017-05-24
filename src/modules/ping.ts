import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';

const PING = 'PING';
const PONG = 'PONG';

interface Action {
  type: string;
  isPinging: boolean;
}

export const ping = () => ({ type: PING });

export const pingEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

export const pingReducer = (state = false, action: Action) => {
  switch (action.type) {
    case 'PING':
      return true;

    case 'PONG':
      return false;

    default:
      return state;
  }
};
