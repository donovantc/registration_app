import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import RegisterStore from './stores/RegisterStore';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ProfileContainer from './components/UserProfile/ProfileContainer';

/**
 * Available routing:
 *    '/' - App
 *    '/register' - RegisterForm
 *    '/profile' - ProfileContainer
 */

ReactDOM.render(
  <Provider store={RegisterStore}>
  <Router history = {browserHistory}>
      <Route path = "/" component = {App} >
        <IndexRoute component={RegisterForm} />
        <Route path = "register" component = {RegisterForm} />
        <Route path = "profile" component = {ProfileContainer} />
      </Route>
   </Router>
   </Provider>, document.getElementById('root')
);
