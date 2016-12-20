import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './views/home/home';
import SavedData from './views/home/saveddata';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="/saveddata" component={SavedData} />
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
