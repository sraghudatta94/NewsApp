import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Sample from './sample.jsx'; 
import SaveModal from './SaveModal.jsx'; 

export default class showArticles extends React.Component{

constructor () {
    super();
    this.displayArticles=this.displayArticles.bind(this);
    
  }
  displayArticles(){
 var cardCSS={

  height:"50%",
  width:"50%"

 }
console.log("inside display displayArticles");
    var singleCard=(this.props.data).map(function(n){
      console.log(n.title);
return(<div style={cardCSS}><Card>
     <CardMedia
      overlay={<CardTitle title={n.title} subtitle={n.author} />}
    >
      <img src={n.urlToImage} />
    </CardMedia>
    <CardText>
    {n.description}
    <br/><a href={n.url}>Click to see in homepage</a>
    </CardText>
    <CardActions>
 <SaveModal data={n} />
     </CardActions>
  </Card><br/></div>);
    });
    return singleCard;
  }
  render(){
    console.log("..............");
    console.log(this.props.data);
    return(<div>

      
      {this.displayArticles()}
    </div>);
    
  }


} 

  

