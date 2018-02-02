import React from "react";
import {GoLinks} from "./go-links.jsx";
import {Route} from "react-router-dom";

export const GoLinkRoutes = () => {
	return (
		<div>
			<Route
				exact
				path="/go-links"
				component={GoLinks} />
		</div>
	);
};
