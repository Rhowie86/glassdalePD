import { getCriminals } from "./criminals/criminalProvider.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/convictionSelect.js"
import { OfficerSelect } from "./officers/officerSelector.js"
// import { OfficerList } from "./officers/officerList.js"
import { NoteForm } from "./notes/noteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/noteList.js"
import "./alibis/alibiList.js"
import "./witnesses/witnessProvider.js"
import "./witnesses/witnessList.js"
import { ShowWitnessButton } from "./witnesses/showWitnessButton.js"
import { ShowFacilitiesButton } from "./facilities/showFacilitiesButton.js"
import { facilitiesList } from "./facilities/FacilityList.js"

ConvictionSelect()
OfficerSelect()
// OfficerList()
ShowNoteButton()
ShowWitnessButton()
ShowFacilitiesButton()
NoteForm()
criminalList()
facilitiesList()

