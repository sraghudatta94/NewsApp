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
width: '50%',
margin : '0 auto',

 }
 var imageCSS={
  height:'25%',
 }
console.log("inside display displayArticles");
    var singleCard=(this.props.data).map(function(n){
      //console.log(n.title);
return(<div style={cardCSS}><Card>
     <CardMedia
      overlay={<CardTitle title={n.title} subtitle={n.author} />}
    >
      <img src={n.urlToImage} style={imageCSS}/>
    </CardMedia>
    <CardText>
    <strong>{n.description}</strong>
    <br/><br/><br/><a href={n.url}>Click to see in homepage</a>
    </CardText>
    <CardActions>
 <SaveModal data={n} username="admin@admin.com" />
     </CardActions>
  </Card><br/></div>);
    });
    return singleCard;
  }
  render(){
    //console.log("..............");
    //console.log(this.props.data);
    return(<div>

      
      {this.displayArticles()}
    </div>);
    
  }


} 

  

