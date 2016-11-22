//This component appears once a user logs in

import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return(
			<div>
				<button>Log out</button>
				<h2>Search for a user and start up a conversation!</h2>
				<input type="text" name="username" required />
			</div>
		);
	}
}