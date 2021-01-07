const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilities") {
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

const toggleVisibility = (eId, bId) => {
    const e = document.getElementById(eId);
    const b = document.getElementById(bId);
    if(e.style.display == 'block'){
       e.style.display = 'none';
       b.innerHTML = 'Show Witnesses';}
    else {
       e.style.display = 'block';
       b.innerHTML = 'Hide Witnesses';}
 }

export const ShowFacilitiesButton = () => {
    toggleVisibility("hide", "showWitnesses")
    contentTarget.innerHTML = "<button id='showFacilities'>Show Facilities</button>"
}
