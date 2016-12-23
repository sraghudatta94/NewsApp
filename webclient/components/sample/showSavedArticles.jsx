  import React from 'react';
  import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
  import FlatButton from 'material-ui/FlatButton';
  import ViewSavedArticles from './viewSavedArticles.jsx';
  import UpdateModal from './UpdateModal.jsx'; 
  import DeleteModal from './DeleteModal.jsx'; 
  import AppBar from 'material-ui/AppBar';
  import RaisedButton from 'material-ui/RaisedButton';
  import Dialog from 'material-ui/Dialog';
  import AutoComplete from 'material-ui/AutoComplete';



  export default class showSavedArticles extends React.Component{

  constructor () {
      super();
      this.displayShowSavedArticles=this.displayShowSavedArticles.bind(this);
      this.state={
        open: false,
      }
    }

    displayShowSavedArticles(){
   var cardCSS={
  width: '50%',
  margin : '0 auto',

   }
   var imageCSS={
    height:'100%',
    width:'100%',
   }
  //console.log("inside ShowSavedArticles");
  //console.log(this.props.data);
      var singleCard=(this.props.data).map((news,index)=>{
        //console.log("Comment is "+news.comments);
  return(<Card className="col-lg-6 col-md-6 col-sm-6">
      <CardHeader
        title={news.newsArticle.title}
        subtitle={news.newsArticle.author}
        avatar={news.newsArticle.urlToImage}
        actAsExpander={true}
        showExpandableButton={true} />
      <CardActions>


      </CardActions>
      
      <CardText expandable={true}>
      <img src={news.newsArticle.urlToImage} style={imageCSS}/><br/><br/>
        <strong>{news.newsArticle.description}</strong><br/>
      <h2><i style={{color:"green"}}>{news.comments}</i></h2>
      <br/><br/><a href={news.newsArticle.url}>Click to see in homepage</a>
          <UpdateModal id={news._id} data={news} updateView={this.props.onDataChange} username="admin@admin.com" />
  <DeleteModal id={news._id} data={news} updateView={this.props.onDataChange} username="admin@admin.com" />
        </CardText>
    </Card>);
      });
      return singleCard;
    }
    render(){
      //console.log("..............");
      //console.log(this.props.data);
      const style = {
    margin: 12,
  };
  const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose} />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose} />,
      ];    
      const autoCompleteStyle={
  marginLeft :70,
  centre:true,
  };
      return(<div>
        

        
        {this.displayShowSavedArticles()}
      </div>);
      
    }


  } 

    

