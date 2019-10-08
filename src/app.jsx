import React from "react";
import {GithubUser} from "./github/github-user.jsx";
import "./app.css";

export class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<GithubUser />
			</div>
		);
	}
}
