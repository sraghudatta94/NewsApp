import React from 'react';

import {Sample1} from '../../components/sample/sample1';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return <Sample1 message='React Sample1'></Sample1>
	}
}