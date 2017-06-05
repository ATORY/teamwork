import * as React from 'react';
import {
  // HashRouter as Router,
  BrowserRouter as Router, Switch, Route, Link, RouteComponentProps
} from 'react-router-dom';

import { Works } from './Works';
import { Member } from './Member';
import { Avator } from './Avator';
import { WorkAdd } from './WorkAdd';

interface ArticleProps {

}

interface ArticleState {

}

export class Article extends React.Component<ArticleProps, ArticleState> {
  render(): JSX.Element {
    return (
      <article>
        <Switch>
          <Route exact path='/' component={Avator} />
          <Route path='/work' component={WorkAdd} />
          <Route path='/work/:id' component={Works} />
          <Route path='/member' component={Member} />
          <Route path='/member/:id' component={Member} />
        </Switch>
      </article>
    );
  }
}