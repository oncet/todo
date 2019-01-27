import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';

class NotesList extends Component {
  render() {
    const {notes} = this.props
    return (
      <div>
        <Grid container spacing={8}>
          {notes.length > 0
            ? notes.map(note => {
                return (
                  <Grid item xs={12} key={note.id}>
                    <Card>
                      <CardContent style={{fontFamily: 'Roboto'}}>
                        {note.value}
                      </CardContent>
                      <CardActions>
                        <IconButton style={{marginLeft: 'auto'}} onClick={() => this.props.handleDelete(note)} item={note.id}><DeleteIcon /></IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })
            : <p style={{fontFamily: 'Roboto', margin: 'auto', color: 'lightgrey'}}>Nothing to show.</p>}
        </Grid>
      </div>
    )
  }
}

export default NotesList;
