import React from 'react'
import './style.module.css'

function Notes() {
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])
  

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    function handleChange(id, text) {
        const updatedNote = notes.map((note) =>{
            if(note.id===id){
                return {...note,body: text}
            }
            return note;
        })
        setNotes(updatedNote)
    }

    function createNote() {
        if (notes.length > 9) {
            return alert('Daha fazla not oluşturmak için notlardan birini silin ')
        }
        const newNote = {
            id: Math.floor(Math.random() * 100000000),
            body: 'Something..'
        }
        console.log(newNote.body)
        setNotes(prevNotes => [ ...prevNotes, newNote])

    }
    console.log(notes.length)

    function deleteNotes(id){
        const deletedNote = notes.filter(note => note.id !== id)
        setNotes(deletedNote)
    }
    const elements = notes.map((note) =>(
        <div key={note.id} className="note-container">
        <button className='delete-btn' onClick={()=>deleteNotes(note.id)}>X</button>
        <textarea
            className='note-card'
            value={note.body}
            name='notes'
            onChange={(event) => handleChange(note.id, event.target.value)}></textarea>
            
            </div>
    ))

    return (
        <section className='note-app'>
            {elements}
            <div className="add-card" onClick={createNote} 
            style={{display: notes.length > 9 ? 'none' : ''}}>+</div>
        </section>
    )
}

export default Notes