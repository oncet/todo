import React, { Component } from 'react';
import AddNote from './Components/AddNote';
import NotesList from './Components/NotesList';
import moment from 'moment';

class App extends Component {
  state = {
    notes: []
  }
  handleAdd = () => {
    const noteField = document.getElementById('note')
    const noteValue = noteField.value
    this.setState(({notes}) => {
      const now = moment().format('x')
      notes.unshift({
        id: now,
        value: noteValue.trim(),
        created: now
      })
      notes = notes.filter(note => note.value.length > 0)
      localStorage.setItem('notes', JSON.stringify(notes))
      return {
        notes: notes
      }
    })
    noteField.value = null
  }
  handleDelete = currentNote => {
    this.setState(({notes}) => {
      const newNotes = notes.map(note => {
        if(note.id !== currentNote.id) {
          return note
        }
        else if(note.deleted) {
          delete note.deleted
        } else {
          note.deleted = moment().format('x')
        }
        return note
      })
      localStorage.setItem('notes', JSON.stringify(newNotes))
      return {
        notes: newNotes,
      }
    })
  }
  componentDidMount() {
    const notes = JSON.parse(localStorage.getItem('notes'))
    this.setState({
      notes: notes? notes : []
    })
  }
  render() {
    const {notes} = this.state
    return (
      <div style={{
        maxWidth: '640px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <AddNote handleAdd={this.handleAdd} />
        <NotesList notes={notes} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App;
