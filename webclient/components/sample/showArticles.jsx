import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Sample from './sample.jsx'; 
import SaveModal from './SaveModal.jsx'; 

export default class showArticles extends React.Component{

constructor (props) {
    super(props);
    this.displayArticles=this.displayArticles.bind(this);    
  }

  displayArticles(){
    var cardCSS={
      width: '50%',
      margin : '0 auto',
    }

    var imageCSS={
      height:'100%',
      width:'100%',
    }
console.log("inside display displayArticles");
    var singleCard=(this.props.data).map((n) => {
      //console.log(n.title);
return(<Card className="col-lg-6 col-md-6 col-sm-6">
    <CardHeader
      title={n.title}
      subtitle={n.author}
      avatar={n.urlToImage}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardActions>


    </CardActions>
    
    <CardText expandable={true}>
      <img src={n.urlToImage} style={imageCSS}/>
      <strong>{n.description}</strong>
      <br/>
      <br/><br/><br/>
      <a href={n.url}>Click to see in homepage</a>
      {this.props.userLoggedIn ? <SaveModal data={n} username="admin@admin.com" /> : null}         
    </CardText>
  </Card>);
    });
    return singleCard;
  }
  render(){
    //console.log("..............");
    //console.log(this.props.data);
    return(
      <div>      
        {this.displayArticles()}
      </div>);
    
  }


} 

  

