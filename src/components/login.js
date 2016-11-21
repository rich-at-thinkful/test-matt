import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return(
			<div>
				<label>Username</label>
				<input type="text" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" placeholder="enter password" name="password" required />

				<button type="submit">Login</button>
			</div>
		);
	}
}