import React from 'react';

import {AppBarNewsApp} from '../../components/sample/appbar';

//This is a view layout, hence avoid putting any business logic
export default class AppBarData extends React.Component {
	render () {
		return <AppBarNewsApp />
	}
}