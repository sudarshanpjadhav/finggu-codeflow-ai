import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FingguCodeEditor } from './components/FingguCodeEditor';
import { FingguTaskBoard } from './components/FingguTaskBoard';
import './styles/finggu-styles.css';

export class FingguApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={FingguCodeEditor} />
          <Route path='/tasks' component={FingguTaskBoard} />
        </Switch>
      </Router>
    );
  }
}