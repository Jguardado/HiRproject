import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ComponentPage from './appStructure/componentPage';
import Layout from './appStructure/layout';

export default class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}/>
        <Route path="/component" component={ComponentPage}/>
      </Router>
    );
  }

};
