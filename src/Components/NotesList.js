import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NoteCard from './NoteCard';
import NoteCardDeleted from './NoteCardDeleted';
import Grow from '@material-ui/core/Grow';

class NotesList extends Component {
  render() {
    const {notes} = this.props
    notes.sort(this.props.sort)
    return (
      <div>
        <Grid container spacing={8}>
          {notes.length > 0
            ? notes.map(note => {
                if (note.deleted) {
                  return (
                    <Grow in={true} key={note.id}>
                      <Grid item xs={12}>
                        <NoteCardDeleted note={note} handleDelete={this.props.handleDelete} handleDeleteForever={this.props.handleDeleteForever} />
                      </Grid>
                    </Grow>
                  )
                }
                return (
                  <Grow in={true} key={note.id}>
                    <Grid item xs={12}>
                      <NoteCard note={note} handleDelete={this.props.handleDelete} />
                    </Grid>
                  </Grow>
                )
              })
            : <p style={{fontFamily: 'Roboto', margin: 'auto', color: 'lightgrey'}}>Nothing to show.</p>}
        </Grid>
      </div>
    )
  }
}

export default NotesList;
