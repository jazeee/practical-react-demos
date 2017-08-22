import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
	return (
		<div>
			<h4>
				Hello World
			</h4>

			<Link to='/github'>Open Github</Link>
		</div>
	);
};
