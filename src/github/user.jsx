import React from "react";

export const User = (props) => {
	const {name, avatar_url, bio, html_url} = props;
	return (
		<div>
			<h3>{name}</h3>
			<a
				href={html_url}
				target="_blank"
				rel="noopener noreferrer">
				<img
					style={{width: "100px"}}
					src={avatar_url}
					alt="Avatar" />
			</a>
			<h4>Bio</h4>
			<p>{bio}</p>
		</div>
	);
};
