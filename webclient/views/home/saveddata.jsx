import React from 'react';

import {ViewSavedArticles} from '../../components/sample/viewSavedArticles';

//This is a view layout, hence avoid putting any business logic
export default class SavedData extends React.Component {
	render () {
		return <ViewSavedArticles />
	}
}