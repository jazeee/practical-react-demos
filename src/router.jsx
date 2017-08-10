import React from 'react';
import {Route} from 'react-router-dom';
import {App} from './App';
import {Home} from './home';

export const Router = () => {
	return (
		<div>
			<Route exact path='/' component={Home} />
			<Route exact path='/github' component={App} />
		</div>
	);
};
