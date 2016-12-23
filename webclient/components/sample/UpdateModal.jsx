import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class UpdateModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  updateNews=()=>{
    //console.log(this.props.username);
    //console.log(this.refs.update.getValue());
        Axios.put('/update?username='+this.props.username,{news:this.props.data,username:this.props.username,newsId:this.props.id,comments:this.refs.update.getValue()})
    .then(function(response){
      //this.setState({comments:this.props.comments});
      //console.log(response);
    })
    .catch(function (error) {
    //console.log(error);

  });
    this.handleClose();
    this.props.updateView();
  }

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.updateNews} />,
    ];

    return (
      <div>
        <RaisedButton label="Update Comment" fullWidth={true} primary={true} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.data.comments}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
<TextField
      ref="update"
      hintText="Update your comment here.." />
        </Dialog>
      </div>
    );
  }
}