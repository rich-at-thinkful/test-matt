import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Login from './login';
import Register from './register';

export default class Routes extends Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Router>
		);
	}
}