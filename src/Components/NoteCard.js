import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

class NoteCard extends Component {
  render() {
    const {note} = this.props
    return (
      <Card>
        <CardContent style={{fontFamily: 'Roboto'}}>
          <Typography style={{overflow: 'hidden'}} color="textSecondary" title={note.created}>
            {moment(note.created, 'L LTS').format('L LT')} <span style={{float: 'right'}}>{moment(note.created, 'L LTS').from(moment())}</span>
          </Typography>
          {note.value}
        </CardContent>
        <CardActions>
          <IconButton style={{marginLeft: 'auto'}} onClick={() => this.props.handleDelete(note)} item={note.id}><DeleteIcon titleAccess="Delete" /></IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default NoteCard;