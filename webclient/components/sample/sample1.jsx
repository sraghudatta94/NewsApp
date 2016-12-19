import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
var axios = require('axios');
	const colors = ['Red','Orange','Yellow','Green','Blue','Purple','Black','White'];
export  class Sample1 extends React.Component {
	constructor () {
		super();
		this.state = {
			name:'Guest name',
			something : [],
		}
			//this.Something=[];

		
	}

	handleNameState (event) {
		this.setState({ name: event.target.value });
	}
	componentDidMount(){

axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=998ff651e55e4c518d2948f9407db7c2')
.then((response) => {
	if(response.data !== undefined){
	var arr = (response.data.articles).map(function(n){
		//console.log(n.);
		return n.author;
	});

	this.setState({something: arr});
	
}
//console.log(data.data.articles[5].author);
 });
	}
	render () {
		//var testing =axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=998ff651e55e4c518d2948f9407db7c2');
//console.log(testing);

	  	

  //console.log(me);
		return (
			<div>
THIS IS MY FIRST COMPONENT
<br/>
			<br/>
				<AutoComplete floatingLabelText="Enter Broadcast Name" filter={AutoComplete.caseInsensitiveFilter} dataSource={this.state.something} />
    
			</div>
		);
	}
}//end of class