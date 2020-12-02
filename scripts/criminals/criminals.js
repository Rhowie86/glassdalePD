export const criminals = (person) => {
    return `<div class = "criminal-container">
    <h1>${person.name}</h1>
    <div class = "criminal-age criminal"> Age: ${person.age} </div>
    <div class = "criminal-crime criminal">  Crime: ${person.conviction} </div>
    <div class = "criminal-term-start criminal">  Term Start: ${new Date(person.incarceration.start).toLocaleDateString('en-US')} </div>
    <div class = "criminal-term-end criminal">  Term End: ${new Date(person.incarceration.end).toLocaleDateString('en-US')} </div>

</div>
`

}