import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

class NoteCard extends Component {
  render() {
    const {note} = this.props
    return (
      <Card>
        <CardContent style={{fontFamily: 'Roboto'}}>
          {note.value}
          <br />
          {moment(note.created, 'x').format('L LTS')}
          <br />
          {moment(note.deleted, 'x').format('L LTS')}
        </CardContent>
        <CardActions>
          <IconButton style={{marginLeft: 'auto'}} onClick={() => this.props.handleDelete(note)} item={note.id}><DeleteIcon /></IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default NoteCard;