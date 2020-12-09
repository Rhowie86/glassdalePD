export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            
            <div class="note--author">Author: ${ noteObject.author }</div>
            <div class="note--author">Suspect: ${ noteObject.suspect }</div>
            <div class="note--text">Note: ${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
        </section>
    `

}
