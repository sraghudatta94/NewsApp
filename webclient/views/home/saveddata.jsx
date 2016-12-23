import React from 'react';

import {ViewSavedArticles} from '../../components/sample/viewSavedArticles';
import {AppBarNewsApp} from '../../components/sample/appbar';

//This is a view layout, hence avoid putting any business logic
export default class SavedData extends React.Component {
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
		return (
			<div>
				<AppBarNewsApp isLoggedIn={this.checkLogin}/>
				<ViewSavedArticles userLoggedIn={this.state.isLoggedIn}/>
			</div>
		)
	}
}