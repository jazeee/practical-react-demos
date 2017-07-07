import React from "react";

export default ({name, avatar_url, bio, html_url}) => (
	<div>
		<h3>{name}</h3>
		<a href={html_url} target='_blank' rel="noopener noreferrer">
			<img style={{width: '100px'}} src={avatar_url} alt='Avatar' />
		</a>
		<p>{bio}</p>
	</div>
)
