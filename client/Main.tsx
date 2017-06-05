import * as React from 'react';
import { connect } from 'react-redux';

import {
  // HashRouter as Router,
  BrowserRouter as Router, Switch, Route, Link, RouteComponentProps
} from 'react-router-dom';
import { rootReducer } from './reducers';
import { ASide } from './component/ASide';
import { Article } from './component/Article';
import { Login } from './component/Login';

import { Works } from './component/Works';
import { Member } from './component/Member';

interface MainProps {
}

interface MainState {
  authing: boolean;
}

interface MainConnectedProps {
  login: boolean;
}

export class MainComponent extends React.Component<MainProps & MainConnectedProps & RouteComponentProps<{}>, MainState> {
  constructor(props: MainProps & MainConnectedProps & RouteComponentProps<{}>) {
    super(props);
    this.state = {
      authing: true,
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    // setTimeout(() => {
    this.setState({ authing: false })
    // const login = this.props.login;
    // if (!login) this.props.history.push('/login');
    // }, 2 * 1000);
  }

  render(): JSX.Element {
    const login = this.props.login;
    const authing = this.state.authing;
    if (authing) {
      return <div>authing</div>
    }
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route>
          <div className='main'>
            <ASide />
            <Article />
          </div>
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state: any) => ({
  login: state.login,
  // router: state.router
});

export const Main = connect<MainConnectedProps, void, MainProps & RouteComponentProps<{}>>(
  mapStateToProps,
)(MainComponent);