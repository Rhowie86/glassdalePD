import { getCriminals } from "./criminals/criminalProvider.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/convictionSelect.js"
import { OfficerSelect } from "./officers/officerSelector.js"
// import { OfficerList } from "./officers/officerList.js"

ConvictionSelect()
OfficerSelect()
// OfficerList()
criminalList()
