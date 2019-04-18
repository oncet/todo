import React, { Component } from 'react';
import AddNote from './Components/AddNote';
import NotesList from './Components/NotesList';

class App extends Component {
  state = {
    notes: []
  }
  handleAdd = () => {
    const noteField = document.getElementById('note')
    const noteValue = noteField.value
    this.setState(({notes}) => {
      notes.unshift({
        id: Date.now(),
        value: noteValue.trim()
      })
      notes = notes.filter(note => note.value.length > 0)
      localStorage.setItem('notes', JSON.stringify(notes))
      return {
        notes: notes
      }
    })
    noteField.value = null
  }
  handleDelete = note => {
    this.setState(({notes}) => {
      const newNotes = notes.filter(n => (n.id !== note.id))
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
