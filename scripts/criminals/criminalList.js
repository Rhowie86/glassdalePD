import { useCriminals, getCriminals } from "./criminalProvider.js"
import { criminals } from "./criminals.js"
import { getFacilities, useFacilities } from "../facilities/facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/criminalFacilityProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        // console.log("event", event.detail.crimeThatWasChosen)
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

eventHub.addEventListener("alibiClicked", alibiClick => {
    let allCriminals = useCriminals()
    if (alibiClick.detail.alibiButtonClicked !== 0) {
        const personID = alibiClick.detail.alibiButtonClicked
        const selectedAlibi = allCriminals.find(
            (person) => person.id === personID
        )
        const criminal = selectedAlibi.known_associates
        // console.log("criminal", criminal)
        
        window.alert(criminal.map(person => `${person.name}, ${person.alibi}` ).join("/n"))}
        
            
        // console.log("alibi", associates)
    })


    export const criminalList = () => {
        // Kick off the fetching of both collections of data
        getFacilities()
            .then(getCriminals)
            .then(getCriminalFacilities)
            .then(
                () => {
                    // Pull in the data now that it has been fetched
                    const facilities = useFacilities()
                    const crimFac = useCriminalFacilities()
                    const criminals = useCriminals()
    
                    // Pass all three collections of data to render()
                    render(criminals, facilities, crimFac)
                }
            )
    }

// const render = matchingCriminals => {
    
//     contentTarget.innerHTML = 
//     `${ 
//         matchingCriminals.map(
//         person => criminals(person)
//     ).join("")}`
  
// }

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return criminals(criminalObject, facilities)
        }
    ).join("")
}

// let allCriminals = []
// Render ALL criminals initally
// export const criminalList = () => {
//     getCriminals()
//         .then(() => {
//             allCriminals = useCriminals()
//             render(allCriminals, )
//         })
// }