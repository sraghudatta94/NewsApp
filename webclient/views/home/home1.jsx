import React from 'react';

import {Sample1} from '../../components/sample/sample1';

//This is a view layout, hence avoid putting any business logic
export default class Home1 extends React.Component {
	render () {
		return <Sample1 message='React Sample'></Sample1>
	}
}