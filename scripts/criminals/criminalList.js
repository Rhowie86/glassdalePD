import { useCriminals, getCriminals } from "./criminalProvider.js"
import { criminals } from "./criminals.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = allCriminals.filter(
            criminalObj => 
                criminalObj.conviction === event.detail.crimeThatWasChosen
                    
            

        )

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
    }
})



eventHub.addEventListener("officerChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.officerThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = allCriminals.filter(
            criminalObj => 
                criminalObj.arrestingOfficer === event.detail.officerThatWasChosen
                    
            

        )

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
    }
})

const render = matchingCriminals => {
    
    contentTarget.innerHTML = 
    `${ 
        matchingCriminals.map(
        person => criminals(person)
    ).join("")}`
  
}

let allCriminals = []
// Render ALL criminals initally
export const criminalList = () => {
    getCriminals()
        .then(() => {
            allCriminals = useCriminals()
            render(allCriminals)
        })
}