import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import ShowArticles from './showArticles.jsx';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';


export class AppBarNewsApp extends React.Component {

    constructor (props) {
    super(props);
    this.state = {
      open: false,
      dataSource: [],
      username: '',
      password: '',
      loggedIn: false,
      loginErrorMessage: false
    }
}
  
  componentDidMount() {
    this.props.isLoggedIn(this.state.loggedIn);
  }

  handleOpen = () => {
    if(this.state.loggedIn)
        this.setState({loggedIn : false},() => {this.props.isLoggedIn(false);});
      else {
        this.setState({open: true});
      }
  };

  handleClose = () => {
    this.setState({open: false});
  };
    handleSubmitLogin = () => {
    const data = {
      username:  this.state.username,
      password: this.state.password
    };
    axios.post('/login',data).then((response) => {
      console.log(response);
      if(response.data === 'succefully loggedIn'){
        this.setState({
          loggedIn : true,
          open: false,
          loginErrorMessage: false
        },() => {
          this.props.isLoggedIn(true);
        });
      }
    }).catch((error) => {
      if(error.response.data === 'Unauthorized'){
        this.setState({
          loggedIn: false,
          loginErrorMessage: true
        },() => {
          this.props.isLoggedIn(false);
        });
      }
    });
  }

  render () {
    const style = {
  margin: 12,
};
const autoCompleteStyle={
marginLeft :70,
centre:true,
};
const styles = {
    floatingLabelFocusStyle: {
        color: "brown"
    }
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
        onTouchTap={this.handleSubmitLogin} />,
    ];  
return (

<AppBar 

          title="News"
          iconClassNameRight="muidocs-icon-navigation-expand-more">
            <RaisedButton 
              label={this.state.loggedIn ? 'Log out' : 'LogIn'} 
              style={style} 
              onTouchTap={this.handleOpen}/>
              <a href="/"><RaisedButton 
              label="Home"
              style={style}/></a>
             <Dialog
          title="Login Here.."
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
<AutoComplete style={autoCompleteStyle}
        dataSource={this.state.dataSource}
        floatingLabelText="UserName" 
        onUpdateInput={(searchText) => {
          this.setState({username : searchText})
        }} />
        <AutoComplete style={autoCompleteStyle}
        dataSource={this.state.dataSource}
        floatingLabelText="Password" 
        type="password"
        onUpdateInput={(searchText)=> {
          this.setState({password: searchText})
        }} />
        {this.state.loginErrorMessage ? 'login failed!!! please login again' : ''}
        </Dialog>
        </AppBar>

  );



  }
}