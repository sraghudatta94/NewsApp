import React from 'react';
import ShowArticles from './showSavedArticles.jsx';

var axios = require('axios');
export  class ViewSavedArticles extends React.Component {
  constructor () {
    super();
    this.state = {
          savedArticlesArray:[]
    }

    
  }


componentDidMount(){



  axios.get('http://localhost:8080/view?username=admin@admin.com')
  .then((response) => {
 
     console.log("inside Axios");
 
  console.log(response.data);
    
    this.setState({savedArticlesArray: response.data});

  
   });
  

  }

  render () {
console.log("starts my saved array");
console.log(this.state.savedArticlesArray);
    return (<div>
<ShowArticles data={this.state.savedArticlesArray} />
      </div>);
  }
}//end of class