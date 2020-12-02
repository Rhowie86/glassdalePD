import { useCriminals, getCriminals } from "./criminalProvider.js"
import { criminals } from "./criminals.js"


export const criminalList = () => {
        
    getCriminals().then( ()  => {
        
        const criminalArray = useCriminals()
        
        for (const person of criminalArray) {
        const contentElement = document.querySelector(".container")
        const criminalHTML = criminals(person)
        contentElement.innerHTML += criminalHTML
        }
    })


}