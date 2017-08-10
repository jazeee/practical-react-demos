import React from 'react';
import {Link} from 'react-router-dom';
// import {GoLinks} from './go-links';

export const Home = () => {
	return (
		<div>
			<h4>
				Hello World
			</h4>

			<Link to='/github'>Open Github</Link>
			{/*<GoLinks />*/}
		</div>
	);
};
