import { saveNote } from "./noteProvider.js"
// import { getNotes } from "./noteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const render = () => {
    contentTarget.innerHTML = `
    <div>
    <fieldset class="form">
        
        <label for="authorName">Author Name</label>
        <input type="text" name="AuthorName" class="author-field" id="authorName">
        <label for="suspectName">Suspect Name</label>
        <input type="text" name="suspectNext class="suspect" id="suspectName" rows=5>
        <label for="noteText"> Detective's Note</label>
        <textarea type="text" name="noteText class="note" id="noteText" rows=10></textarea>


        <button class="save-note" id="saveNote">Save Note</button>
        
    </fieldset>
    </div>
    `
}
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        let author = document.getElementById("authorName")
        let suspect = document.getElementById("suspectName")
        let noteContent = document.getElementById("noteText")
        
        
        // Make a new object representation of a note
       if (author.value && suspect.value && noteContent.value !== "") {
        const newNote = {
            date: Date.now(),
            author: author.value,
            suspect: suspect.value,
            noteText: noteContent.value

        }
    
        // Change API state and application state
        saveNote(newNote)
        author.value = ""
        suspect.value = ""
        noteText.value = ""
    }}

})




export const NoteForm = () => {
    
    render()
}