import { User } from './User';

export interface Work {
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

interface Action {
  type: string;
  works: Work[];
}

export const worksReducer = (state: Work[] = [{ name: 'adminT', _id: '1234' }], action: Action) => {
  if (action.type === 'init') {
    return action.works;
  }
  return state;
};
