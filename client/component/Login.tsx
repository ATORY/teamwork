import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface LoginConnectedProps {
  login: boolean;
}

export class LoginComponent extends React.Component<LoginConnectedProps & RouteComponentProps<{}>, {}> {
  componentWillMount() {
    const login = this.props.login;
    if (login) this.props.history.push('/');
  }
  render(): JSX.Element {
    return (
      <div>
        Login
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  login: state.login,
});

export const Login = connect<void, void, LoginConnectedProps & RouteComponentProps<{}>>(
  mapStateToProps,
)(LoginComponent);
