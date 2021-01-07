const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessList")


    eventHub.addEventListener("showWitnessesClicked", clickEvent => {
        witnessList()
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
