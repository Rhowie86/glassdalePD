import { useOfficers, getOfficers } from "./officerProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "officerSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select an arresting officer...</option>
    ${
        officerCollection.map(officerObj => {
            const officerName = officerObj.name
            return `<option>${officerName}</option> `
        })
    }
    </select>`
}


export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}
