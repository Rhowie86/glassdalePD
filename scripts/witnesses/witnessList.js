import { useWitnesses, getWitnesses } from "./witnessProvider.js"
import { witnessHTMLConverter } from "./witnessHTMLConverter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessList")


    eventHub.addEventListener("showWitnessesClicked", clickEvent => {
        witnessList()
    })


    const render = (witnessArray) => {
        const allWitnessesConvertedToStrings = witnessArray.map((witness) => witnessHTMLConverter(witness)).join("")
    
        contentTarget.innerHTML = allWitnessesConvertedToStrings
    }

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

let witnesses = []
export const witnessList = () => {
    getWitnesses()
    .then(() => {
        witnesses = useWitnesses()
        render(witnesses)
        toggleVisibility("hide", "showWitnesses")
        // console.log("witnesses", witnesses)
        })
}


