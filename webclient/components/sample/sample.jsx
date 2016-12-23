import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import ShowArticles from './showArticles.jsx';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

var axios = require('axios');

export  class Sample extends React.Component {
	constructor () {
		super();
		this.state = {
			something : [],
			articleId :[],
			myArticles :[],
		}
	}

	handleNameState (event) {
		this.setState({ name: event.target.value });
	}
	componentDidMount(){

axios.get('https://newsapi.org/v1/sources?language=en')
.then((response) => {
	if(response.data !== undefined){
				//console.log(response.data);

	var arr = (response.data.sources).map(function(n){
		return n.name;
	});
	var arr2=(response.data.sources).map(function(n){
		return n.id;
	});

	this.setState({something: arr,articleId: arr2});

	
}
 });
	}
	 getArticles=(render,index)=>{
		axios.get('https://newsapi.org/v1/articles?source='+this.state.articleId[index]+'&apiKey=998ff651e55e4c518d2948f9407db7c2')

.then((response) => {
	 var arr3 = (response.data.articles).map(function(n){
	 	return n;
	});
this.setState({myArticles: arr3});

 });

	}

	render () {

  const autoCompleteStyle={
marginLeft :70,
centre:true,

};


		return (
			
			<div>
				<AutoComplete style={autoCompleteStyle}
				floatingLabelText="Enter Broadcast Name" 
				filter={AutoComplete.caseInsensitiveFilter} 
				dataSource={this.state.something} 
				onNewRequest={this.getArticles}/>
				{this.props.userLoggedIn ? <a href="/#/saveddata"><FlatButton label="View Saved Data" /></a> : null }
				<ShowArticles data={this.state.myArticles} userLoggedIn={this.props.userLoggedIn}/>
    		</div>


		);
	}
}//end of className