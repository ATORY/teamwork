import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Member } from '../reducers/members';
import { Work, worksGetting } from '../reducers/works';

interface ASideProps { }

interface ASideState { }

interface ConnectedProps {
  members: Member[];
  works: Work[];
}

interface DispatchProps {
  worksGetting(): void;
}

export class ASideComponent extends React.Component<ASideProps & DispatchProps & ConnectedProps, ASideState> {

  componentDidMount() {
    // load works
    // load numbers
    // console.log('didMount');
    this.props.worksGetting();
  }

  render(): JSX.Element {
    const { members, works } = this.props;
    // const isWorksGetting = typeof (works) === 'string';
    // const worksErr = works instanceof Error;
    // console.log(works, isWorksGetting, worksErr)
    return (
      <aside>
        <div>
          <Link to='/'>Avator</Link>
        </div>
        <div>work</div>
        <ul>
          {
            (works instanceof Array) && works.map((item: Work) => {
              return <li key={`${item._id}`}><Link to={`/work/${item._id}`}>{item.name}</Link></li>;
            })
          }
        </ul>
        <div>member</div>
        <ul>
          {members.map((item: Member) => {
            return <li key={`${item._id}`}><Link to={`/member/${item._id}`}>{item.name}</Link></li>;
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

export const ASide = connect<ConnectedProps, DispatchProps, ASideProps>(
  mapStateToProps,
  { worksGetting }
)(ASideComponent);
