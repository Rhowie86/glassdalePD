export const witnessHTMLConverter = (witnessObject) => {
    return `
        
    <div class="note--author">Name: ${ witnessObject.name }</div>
    <div class="note--author">Statement: ${ witnessObject.statements }</div>

    `
            

}