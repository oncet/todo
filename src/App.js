import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {
  state = {
    notes: []
  }
  handleAdd = () => {
    const noteField = document.getElementById('note')
    const noteValue = noteField.value
    this.setState(({notes}) => {
      notes.push({
        id: Date.now(),
        value: noteValue.trim()
      })
      return {
        notes: notes.filter(note => (note.value !== ""))
      }
    })
    noteField.value = null
  }
  handleDelete = note => {
    this.setState(({notes}) => ({
      notes: notes.filter(n => (n.id !== note.id)),
    }))
  }
  render() {
    const {notes} = this.state
    return (
      <div style={{
        maxWidth: '640px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <TextField
              id="note"
              placeholder="Enter a note..."
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={2} style={{textAlign: 'center'}}>
            <IconButton color="primary" onClick={() => this.handleAdd()}><AddIcon /></IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          {notes.sort((a, b) => (b.id - a.id)).map(note => {
            return (
              <Grid item xs={12} key={note.id}>
                <Card>
                  <CardContent style={{fontFamily: 'Roboto'}}>
                    {note.value}
                  </CardContent>
                  <CardActions>
                    <IconButton style={{marginLeft: 'auto'}} onClick={() => this.handleDelete(note)} item={note.id}><DeleteIcon /></IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default App;
