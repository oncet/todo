import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class AddNoteForm extends Component {
  constructor(props) {
    super(props)
    this.content_field = React.createRef()
  }
  handleKeyPress = ({key}) => {
    if(key === 'Enter') {
      this.props.handleAdd(this.content_field.current)
    }
  }
  componentDidMount() {
    this.content_field.current.focus()
  }
  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <TextField
              inputRef={this.content_field}
              placeholder="Enter a note..."
              fullWidth
              onKeyPress={event => this.handleKeyPress(event)}
            ></TextField>
          </Grid>
          <Grid item xs={2} style={{textAlign: 'center'}}>
            <IconButton color="primary" onClick={() => this.props.handleAdd(this.content_field.current)}><AddIcon /></IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AddNoteForm;
