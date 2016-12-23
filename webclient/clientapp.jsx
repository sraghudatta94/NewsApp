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
{/* Defined Theme for my News App */}
const muiTheme = getMuiTheme({
   palette: {
    primary1Color: "brown",
  },
});
ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>

			<Route path="/" component={Home}/>{/*My Home component*/}
			<Route path="/saveddata" component={SavedData} />{/* Saved headlines displaying component*/}

		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
