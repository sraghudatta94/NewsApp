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
export default class SaveModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  saveNews=()=>{
    //
    Axios.post('/save',{news:this.props.data,username:this.props.username,comments:this.refs.comments.getValue()})
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);

  });
    this.handleClose();
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
        onTouchTap={this.saveNews} />,
    ];

    return (
      <div>
        <RaisedButton label="Save" onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.data.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
<TextField
      ref="comments"
      hintText="Give your comments here.." />
        </Dialog>
      </div>
    );
  }
}