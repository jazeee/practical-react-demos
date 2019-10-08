import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {Router} from "./router";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	),
	document.getElementById("root"),
);
registerServiceWorker();
