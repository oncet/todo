import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import RestoreIcon from '@material-ui/icons/Restore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

class NoteCardDeleted extends Component {
  render() {
    const {note} = this.props
    return (
      <Card>
        <CardContent style={{fontFamily: 'Roboto', color: 'grey', textDecoration: 'line-through'}}>
          <Typography color="textSecondary">
            {moment(note.created, 'x').from(moment())} ({moment(note.created, 'x').format('L LT')})
          </Typography>
          {note.value}
        </CardContent>
        <CardActions>
          <IconButton onClick={() => this.props.handleDelete(note)} item={note.id}><RestoreIcon titleAccess="Restore" /></IconButton>
          <IconButton style={{marginLeft: 'auto'}} onClick={() => this.props.handleDeleteForever(note)} item={note.id}><DeleteForeverIcon titleAccess="Delete forever" /></IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default NoteCardDeleted;