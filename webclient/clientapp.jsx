import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './views/home/home';
import SavedData from './views/home/saveddata';
import AppBarData from './views/home/AppBarNewsApp';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
   palette: {
    primary1Color: "brown",
  },
});
ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>

			<Route path="/" component={Home}/>
			<Route path="/saveddata" component={SavedData} />

		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
