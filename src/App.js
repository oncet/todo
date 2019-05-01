import React, { Component } from 'react';
import AddNoteForm from './Components/AddNoteForm';
import NotesList from './Components/NotesList';
import moment from 'moment';

class App extends Component {
  state = {
    notes: []
  }
  handleAdd = (noteField) => {
    const noteValue = noteField.value
    this.setState(({notes}) => {
      const now = moment()
      notes.unshift({
        id: now.format('x'),
        value: noteValue.trim(),
        created: now.format('L LTS'),
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
          note.deleted = moment().format('L LTS')
        }
        return note
      })
      localStorage.setItem('notes', JSON.stringify(newNotes))
      return {
        notes: newNotes,
      }
    })
  }
  handleDeleteForever = currentNote => {
    this.setState(({notes}) => {
      const newNotes = notes.filter(note => {
        return note.id !== currentNote.id
      })
      localStorage.setItem('notes', JSON.stringify(newNotes))
      return {
        notes: newNotes,
      }
    })
  }
  sort = (a, b) => {
    if(!a.hasOwnProperty('deleted') && b.hasOwnProperty('deleted')) {
      return -1
    } else if(!a.hasOwnProperty('deleted') && !b.hasOwnProperty('deleted')) {
      return a.created > b.created? -1 : 1
    }
  }
  componentDidMount() {
    const notes = JSON.parse(localStorage.getItem('notes'))
    this.setState({
      notes: notes? notes : []
    })
    window.setInterval(() => {
      this.setState(this.state)
    }, 10000)
  }
  render() {
    let {notes} = this.state
    return (
      <div style={{
        maxWidth: '640px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <AddNoteForm handleAdd={this.handleAdd} />
        <NotesList notes={notes} sort={this.sort} handleDelete={this.handleDelete} handleDeleteForever={this.handleDeleteForever} />
      </div>
    )
  }
}

export default App;
