import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import actions from './actions/index';
import reducers from './reducers/index';
import App from './App';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router';
import Login from './components/login';
import Register from './components/register';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		</Route>
	</Router>
  </Provider>,
  document.getElementById('root')
);

export default store;