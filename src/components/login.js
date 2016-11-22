import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Login extends Component {
	onLogin() {
		//if the user signed in correctly
		this.props.dispatch(actions.setSignIn(true));
		this.props.router.push('/message');
	}

	render() {
		return(
			<div>
				<label>Username</label>
				<input type="text" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" placeholder="enter password" name="password" required />

				<button type="submit" onClick={this.onLogin.bind(this)}>Login</button>
			</div>
		);
	}
}

export default connect()(Login);