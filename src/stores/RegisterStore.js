import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducers from '../reducers';

/**
 * Setup the redux store and middleware for the registration process including onboarding
 */

const middleware = applyMiddleware(promise(), logger());
export default createStore(reducers, middleware);