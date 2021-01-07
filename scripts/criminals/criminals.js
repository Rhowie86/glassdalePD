const eventHub = document.querySelector(".container")

export const criminals = (criminalObject, facilities) => {
    return `
    <div class="criminal criminal-container">
        <h1>${criminalObject.name}</h1>
        <div class="criminal__details">
            <p class="criminal-crime criminal">Convicted for ${criminalObject.conviction}</p>
            <p class="criminal">Arrested by ${criminalObject.arrestingOfficer}</p>
            <p class="criminal">Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p class="criminal">Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul class="criminal">
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}



eventHub.addEventListener("click", event => {

 
    if (event.target.id.startsWith("associates--")) {
        const identity = event.target.id.split("--")
        const customEvent = new CustomEvent("alibiClicked", {
            detail: {
                alibiButtonClicked: parseInt(identity[1])
            }
        })

     
        eventHub.dispatchEvent(customEvent)
    }
})