export interface Member {
  _id: string;
  name: string;
}

type MemberType = 'init' | 'add' | 'del';

interface Action {
  type: MemberType;
  member: Member;
  members: Member[];
}

export const membersReducer = (state: Member[] = [{ name: 'admin', _id: 'fas' }], action: Action) => {
  switch (action.type) {
    case 'init':
      return action.members;

    default:
      return state;
  }
};
