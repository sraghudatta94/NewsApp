import React from 'react';

import {Sample} from '../../components/sample/sample';
import {AppBarNewsApp} from '../../components/sample/appbar';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn : false
		}
	}

	checkLogin = (value) => {
		this.setState({isLoggedIn: value});
	}	

	render () {
		return  (
			<div>
				<AppBarNewsApp isLoggedIn = {this.checkLogin}/>
				<Sample
					message='React Sample'
					userLoggedIn = {this.state.isLoggedIn}
				>
				</Sample>
			</div>
		)
			
	}
}