export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            
            <div class="note--author">Author: ${ noteObject.author }</div>
            <div class="note--author">Suspect: ${ noteObject.criminalName }</div>
            <div class="note--text">Note: ${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `

}
