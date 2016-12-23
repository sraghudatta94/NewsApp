import React from 'react';
import ShowArticles from './showSavedArticles.jsx';

var axios = require('axios');
export  class ViewSavedArticles extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
          savedArticlesArray:[]
    }

    
  }


componentDidMount(){


this.getSavedData();  

  }

  getSavedData(){

  axios.get('http://localhost:8080/view?username=admin@admin.com')
  .then((response) => {
 
     //console.log("inside Axios");
 
  //console.log(response.data);
    
    this.setState({savedArticlesArray: response.data});

  
   });
  }

  render () {
//console.log("starts my saved array");
//console.log(this.state.savedArticlesArray);
    return (<div><br/><br/>
<ShowArticles data={this.state.savedArticlesArray} onDataChange={this.getSavedData.bind(this)} userLoggedIn={this.props.userLoggedIn}/>
      </div>);
  }
}//end of class