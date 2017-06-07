// export function worksAPI(articleId: string): Promise<Response> {
//   const path: string = `/api/works`;
//   return fetch(path, {
//     method: 'GET',
//     credentials: 'same-origin',
//   });
// }
import { Observable } from 'rxjs/Rx';
import { ActionsObservable } from 'redux-observable';

export function worksAPI(): Observable<any> {
  const request = fetch(`/api/workes`).then(response => response.json());
  return Observable.from(request);
};