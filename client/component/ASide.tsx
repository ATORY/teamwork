import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Member } from '../reducers/members';
import { Work } from '../reducers/works';

interface ASideProps { }

interface ASideState { }

interface ConnectedProps {
  members: Member[];
  works: Work[];
}

export class ASideComponent extends React.Component<ASideProps & ConnectedProps, ASideState> {
  render(): JSX.Element {
    const { members, works } = this.props;
    return (
      <aside>
        <div>
          <Link to='/'>Avator</Link>
        </div>
        <div>work</div>
        <ul>
          {works.map((item: Work) => {
            return <li key={`${item._id}`}><Link to={`/work/${item._id}`}>{item.name}</Link></li>
          })}
        </ul>
        <div>member</div>
        <ul>
          {members.map((item: Member) => {
            return <li key={`${item._id}`}><Link to={`/member/${item._id}`}>{item.name}</Link></li>
          })}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = (state: any) => ({
  works: state.works,
  members: state.members,
});

export const ASide = connect<ConnectedProps, void, ASideProps>(
  mapStateToProps,
)(ASideComponent);