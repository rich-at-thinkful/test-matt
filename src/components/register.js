import React, { Component } from 'react';

export default class Register extends Component {
	render() {
		return(
			<div>
				<label>Username</label>
				<input type="text" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" placeholder="enter password" name="password" required />

				<label>Confirm Password</label>
				<input type="confirm-password" placeholder="confirm password" name="confirm-password" required />

				<button type="submit">Register</button>
			</div>
		);
	}
}