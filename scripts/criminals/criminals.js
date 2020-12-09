const eventHub = document.querySelector(".container")

export const criminals = (person) => {
    return `<div class = "criminal-container">
    <h1>${person.name}</h1>
    <div class = "criminal-age criminal"> Age: ${person.age} </div>
    <div class = "criminal-crime criminal">  Crime: ${person.conviction} </div>
    <div class = "criminal-term-start criminal">  Term Start: ${new Date(person.incarceration.start).toLocaleDateString('en-US')} </div>
    <div class = "criminal-term-end criminal">  Term End: ${new Date(person.incarceration.end).toLocaleDateString('en-US')} </div>
    <button id="associates--${person.id}">Associate Alibis</button>
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