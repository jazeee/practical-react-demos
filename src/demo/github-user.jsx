import React from 'react';
import User from './user.jsx';

export default class GithubUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {name: '?'},
		};
	}
	componentDidMount = () => {
		this.getContent();
	}
	getContent = () => {
		fetch('https://api.github.com/users/jazeee')
			.then( (response) => {
				const jsonPromise = response.json();
				return jsonPromise;
			} )
			.then( (user) => {
				this.setState({user});
			})
			.catch(console.error);
	}
	render = () => {
		const {user} = this.state;
		return (
			<User {...user} />
		);
	}
}
