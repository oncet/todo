import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class AddNoteForm extends Component {
  handleKeyPress = ({key}) => {
    if(key === 'Enter') {
      this.props.handleAdd()
    }
  }
  componentDidMount() {
    document.getElementById('note').focus()
  }
  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <TextField
              id="note"
              placeholder="Enter a note..."
              fullWidth
              onKeyPress={event => this.handleKeyPress(event)}
            ></TextField>
          </Grid>
          <Grid item xs={2} style={{textAlign: 'center'}}>
            <IconButton color="primary" onClick={() => this.props.handleAdd()}><AddIcon /></IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AddNoteForm;
