import { saveNote } from "./noteProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
// import { getNotes } from "./noteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    const criminalsCollection = useCriminals()
    contentTarget.innerHTML = `
    <div>
    <fieldset class="form">
        
        <label for="authorName">Author Name</label>
        <input type="text" name="AuthorName" class="author-field" id="authorName">
        
        <select class="dropdown" id="suspect">
            <option value="0">Please select a suspect...</option>
            ${
                criminalsCollection.map(
                  (criminal) => `
                    <option value=${criminal.id}>
                      ${criminal.name}
                    </option>
                `)
            }
        </select>

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
        let criminalId = parseInt(document.getElementById("suspect").value)
        let noteContent = document.getElementById("noteText")
        
        
        // Make a new object representation of a note
       if (author.value && criminalId && noteContent.value !== "") {
        const newNote = {
            date: Date.now(),
            author: author.value,
            criminalId: criminalId,
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
    getCriminals()
    .then( () => render())
}