import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Axios from 'axios';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DeleteModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  deleteNews=()=>{
    console.log(this.props.username);
        Axios.delete('/delete/'+this.props.id)
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);

  });
    this.handleClose();
    this.props.updateView();
  }
    handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };
  render(){

    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.deleteNews} />,
    ];

    return (
      <div>
        <RaisedButton label="Remove News" fullWidth={true} secondary={true} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.data.comments}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this comment?
        </Dialog>
      </div>
    );
  }
}