import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

console.log(BrowserRouter);
console.log(Router);
ReactDOM.render(
	(
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	),
	document.getElementById('root'),
);
registerServiceWorker();
