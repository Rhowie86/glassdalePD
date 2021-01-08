import { getFacilities, useFacilities} from "./facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./criminalFacilityProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
import { facility } from "./Facility.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")


    eventHub.addEventListener("facilitiesButtonClicked", clickEvent => {
        facilitiesList()
    })


    const toggleVisibility = (eId, bId, cId) => {
        const e = document.getElementById(eId);
        const b = document.getElementById(bId);
        const c = document.getElementById(cId);
        if(e.style.display == ''){
           e.style.display = 'none';
           b.innerHTML = 'Show Facilities';
           c.style.display = ''; 
        }
        else {
           e.style.display = '';
           b.innerHTML = 'Show Criminals';
           c.style.display = 'none';}
     }
    

     let facilities = []
     let crimFac = []
     let criminalState = []


    export const facilitiesList = () => {
        // Kick off the fetching of both collections of data
        getCriminals()
            .then(getFacilities)
            .then(getCriminalFacilities)
            .then(
                () => {
                    // Pull in the data now that it has been fetched

                    facilities = useFacilities()
                    crimFac = useCriminalFacilities()
                    
                    criminalState = useCriminals()
    
                    // Pass all three collections of data to render()
                    render(facilities)
                    toggleVisibility("prison", "showFacilities", "person")
                }
            )
    }


const render = (facilitiesToRender) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = facilitiesToRender.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const criminalRelationshipToFacility = crimFac.filter(cf => cf.criminalId === facilityObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const criminalList = criminalRelationshipToFacility.map(cf => {
                const matchingCriminalObject = criminalState.find(criminal => criminal.id === cf.facilityId)
                // console.log("testing", matchingCriminalObject)
                return matchingCriminalObject
            })

            // Must pass the matching facilities to the Criminal component
            return facility(facilityObject, criminalList)
        }
    ).join("")
}
