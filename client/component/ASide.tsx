import * as React from 'react';
import { Link } from 'react-router-dom';

interface ASideProps {

}

interface ASideState {

}

export class ASide extends React.Component<ASideProps, ASideState> {
  render(): JSX.Element {
    return (
      <aside>
        <ul>
          <li><Link to='/'>Avator</Link></li>
        </ul>
        <ul>
          <li><Link to='/work/301'>work/301</Link></li>
        </ul>
        <ul>
          <li><Link to='/member/fdasfa'>members/fsad</Link></li>
        </ul>
      </aside>
    );
  }
}