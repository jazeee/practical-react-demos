import React from "react";
import {User} from "./user.jsx";
import {actions} from "./state/user.js";
import {connect} from "react-redux";

class GithubUserContainer extends React.Component {
	componentDidMount = () => {
		this.getContent();
	}
	getContent = () => {
		this.props.resetState();
		fetch("https://api.github.com/users/jazeee")
			.then( (response) => {
				const jsonPromise = response.json();
				return jsonPromise;
			} )
			.then( (user) => {
				this.props.setUser(user);
				user.name = "blah";
			})
			.catch(console.error);
	}
	render = () => {
		const {user} = this.props;
		return (
			<User {...user} />
		);
	}
}

const mapStateToProps = (state) => {
	const {userState: {user}} = state;
	return {
		user,
	};
};

const {setUser, resetState} = actions;
const mapDispatchToProps = {setUser, resetState};

export const GithubUser = connect(mapStateToProps, mapDispatchToProps)(GithubUserContainer);
