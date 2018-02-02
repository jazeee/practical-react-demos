import React from "react";
import {App} from "./app";
import {Home} from "./home";
import {Route} from "react-router-dom";

export const Router = () => {
	return (
		<div>
			<Route
				exact
				path="/"
				component={Home} />
			<Route
				exact
				path="/github"
				component={App} />
		</div>
	);
};
