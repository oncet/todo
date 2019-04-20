import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NoteCard from './NoteCard';

class NotesList extends Component {
  render() {
    const {notes} = this.props
    notes.sort(this.props.sort)
    return (
      <div>
        <Grid container spacing={8}>
          {notes.length > 0
            ? notes.map(note => {
                return (
                  <Grid item xs={12} key={note.id}>
                    <NoteCard note={note} handleDelete={this.props.handleDelete} />
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
