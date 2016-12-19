import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import ShowArticles from './showArticles.jsx';

var axios = require('axios');
export  class Sample extends React.Component {
	constructor () {
		super();
		this.state = {
			something : [],
			articleId :[],
			myArticles :[],
		}
			//this.Something=[];

		
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
//console.log(data.data.articles[5].author);
 });
	}
	 getArticles=(render,index)=>{
		axios.get('https://newsapi.org/v1/articles?source='+this.state.articleId[index]+'&apiKey=998ff651e55e4c518d2948f9407db7c2')

.then((response) => {
	//console.log(response.data);
	 var arr3 = (response.data.articles).map(function(n){
	 	//console.log(response.data.articles);
	 	return n;
	});
this.setState({myArticles: arr3});
	//console.log(myArticles);
		//this.setState({response: data});
			
	

//console.log(data.data.articles[5].author);
 });

	}

	render () {
		//var testing =axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=998ff651e55e4c518d2948f9407db7c2');
//console.log(testing);

	  	

  //console.log(me);
		return (
			<div>
<br/>
			<br/>
				<AutoComplete 
				floatingLabelText="Enter Broadcast Name" 
				filter={AutoComplete.caseInsensitiveFilter} 
				dataSource={this.state.something} 
				onNewRequest={this.getArticles}/>
				<ShowArticles data={this.state.myArticles} />
    		</div>


		);
	}
}//end of class