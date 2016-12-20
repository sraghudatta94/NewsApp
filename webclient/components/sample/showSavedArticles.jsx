import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ViewSavedArticles from './viewSavedArticles.jsx';
import UpdateModal from './UpdateModal.jsx'; 
import DeleteModal from './DeleteModal.jsx'; 


export default class showSavedArticles extends React.Component{

constructor () {
    super();
    this.displayShowSavedArticles=this.displayShowSavedArticles.bind(this);
    
  }
  displayShowSavedArticles(){
 var cardCSS={
width: '50%',
margin : '0 auto',

 }
 var imageCSS={
  height:'25%',
 }
//console.log("inside ShowSavedArticles");
//console.log(this.props.data);
    var singleCard=(this.props.data).map(function(news,index){
      console.log("Comment is "+news.comments);
return(<div style={cardCSS}><Card>
     <CardMedia
      overlay={<CardTitle title={news.newsArticle.title} subtitle={news.newsArticle.author} />}
    >
      <img src={news.newsArticle.urlToImage} style={imageCSS}/>
    </CardMedia>
    <CardText>
    <strong>{news.newsArticle.description}</strong><br/>
    <i>{news.comments}</i>
    <br/><br/><br/><a href={news.newsArticle.url}>Click to see in homepage</a>
    </CardText>
    <CardActions>
<UpdateModal data={news} username="admin@admin.com" />
<DeleteModal data={news} username="admin@admin.com" />

     </CardActions>
  </Card><br/></div>);
    });
    return singleCard;
  }
  render(){
    //console.log("..............");
    //console.log(this.props.data);
    return(<div>
<a href="">Home</a>
      
      {this.displayShowSavedArticles()}
    </div>);
    
  }


} 

  

