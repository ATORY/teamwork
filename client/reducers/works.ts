import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';

import { User } from './User';
import { worksAPI } from '../api/works';

// const GET_WORKS = 'GET_WORKS';
// const INIT_WORKS = 'INIT_WORKS';


const WORKS_GETTING = 'WORKS_GETTING';
const WORKS_GETTING_DONE = 'WORKS_GETTING_DONE';
const WORKS_GETTING_ERR = 'WORKS_GETTING_ERR';

export interface Work {
  _id: string;
  name: string;
}

export interface Member {
  _id: string;
  name: string;
}

export interface WorkTask {
  _id: string;
  work: string; // witch work belong to
  sort: string;
  name: string;
}

export interface WorkItem {
  _id: string;
  name: string;
  priority: number;
  status: string;
  belong: User[];
  creator: User;
}

// type actionType = WORKS_GETTING | 'WORKS_GETTING_DONE' | 'WORKS_GETTING_CANCEL' | 'WORKS_GETTING_ERR';

interface Action {
  type: string;
  works: Work[];
  error?: Error;
}

interface MemberAction {
  type: string;
  members: Member[];
}

export const worksGetting = () => ({ type: WORKS_GETTING });
const fetchWorksFullfilled = (works: Work[]) => ({ type: WORKS_GETTING_DONE, works });
const fetchWorksFullReject = (err: Error) => ({ type: WORKS_GETTING_ERR, err });

export const worksReducer = (state: Work[] = [], action: Action): Work[] | Error => {
  if (action.type === 'WORKS_GETTING_DONE') {
    return action.works;
  }
  if (action.type === 'WORKS_GETTING_ERR') {
    console.error(action.error);
    return action.error;
  }
  // if (action.type === 'WORKS_GETTING') {
  //   return action.type;
  // }
  return state;
};


export const worksEpic = (action$: ActionsObservable<Action>, store: Store<any>): Observable<Action> => {
  // const state = store.getState();
  // console.log(1, state);
  return action$.ofType(WORKS_GETTING).delay(10000)
    .mergeMap(action => {

      // const state = store.getState();
      // console.log(2, action, state);
      // return worksAPI().map(works => fetchWorksFullfilled(works))
      return worksAPI()
        // .subscribe(

        // )
        // .flatMap(aside => aside.works, aside => aside.members)
        // Note the different operator here
        .flatMap(payload =>
          // Concat 2 observables so they fire sequentially
          Observable.concat(
            Observable.of({ type: 'LOGIN_SUCCESS', works: payload.response }),
            Observable.of({ type: 'NOTIFY_SUCCESS', payload: payload.response })
          )
        )
        // .map(payload => {
        //   // Do double jobs, to some notification component which listens to a reducer
        //   // And the session reducer which holds auth
        //   // I would need to save the payload to some temp variable to pass it to a concat
        //   // If this is not possible
        //   return [
        //     { type: 'LOGIN_SUCCESS', payload: payload.response },
        //     { type: 'NOTIFY_SUCCESS', payload: payload.response }
        //   ];
        // })
        // .map(works => ({ type: WORKS_GETTING_DONE, works }))
        //         store.dispatch({type: PREPOP_DIALOG, value:'me@example.com'})
        // store.dispatch({type: OPEN_DIALOG, value:true})
        // .map()
        // .takeUntil(action$.ofType('FETCH_USER_ABORTED')) // cancel
        // If the ajax request errors, we'll catch it and instead emit a
        // "FETCH_USER_ERRORED" action with the error info, your
        // reducer would then be responsible for returning the correct state
        // .catch(error => Observable.of({ type: WORKS_GETTING_ERR, error }));
        .catch(error => Observable.of({ type: WORKS_GETTING_ERR, error }));
      // .catch(error => console.error(error));
    });
  //.startWith({ type: 'FETCH_USER_PENDING' });
};
