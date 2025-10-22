import { RACES } from "./races.js"

// ----------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------------------------------------------------

function calcModCharac(charac) {
// Calculate the 
    let points = document.querySelector(`#${charac} input`).value
    let valueElmt = document.querySelector(`#${charac} .val`)
    let modElmt = document.querySelector(`#${charac} .mod`)
    let raceMap = RACES.get(inputRace.value)
    let characID = charac.toLowerCase().slice(0, 3)
    let raceModifier = raceMap.get(characID)

    let valueRaw = 10 + Number(points) + raceModifier
    valueElmt.innerHTML = valueRaw
    let modValue = ((valueRaw - 10) / 2) - ((valueRaw - 10) % 2)/2
    if (modValue > 0) {
        modElmt.innerHTML = `+${modValue}`
    } else {
        modElmt.innerHTML = modValue
    }

    //if current characteristic is DEX, initiative, DISTANCE ATK and DEF are modified
    if (charac == "DEXTERITY") {
        // INIT
        let initElement = document.querySelector("#initiative span")
        initElement.innerHTML = valueElmt.textContent
        // DEF
        calcDef()
        // Distance ATK
        // To Do
    }
}

function calcDef() {
    let dexMod = document.querySelector("#DEXTERITY .mod").innerHTML
    // console.log(dexMod)
    dexMod = Number(dexMod)
    let armorMod = 0
    let armorTbody = document.querySelector("#armors tbody")
    for (let row of armorTbody.rows) {
        let isChecked = row.querySelector("tr td:first-child input").checked
        if (isChecked) {
            armorMod = armorMod + Number(row.querySelector(".mod").value)
        }
    }
    let def = document.querySelector("#defense span")
    // console.log(`dexMod: ${dexMod}, armorMod: ${armorMod}`)
    def.innerHTML = `+${dexMod + armorMod}`
}

function setRace(raceMap, ageElmt, heightElmt, weightElmt, capacityElmt, characElmt) {
// Updates various parameters whenever RACE changes
    // Age parameters
    ageElmt.setAttribute("value", raceMap.get("ageMin"))
    ageElmt.setAttribute("min", raceMap.get("ageMin"))
    ageElmt.setAttribute("max", raceMap.get("ageMax"))
    // Height parameters
    heightElmt.setAttribute("value", raceMap.get("heightMin"))
    heightElmt.setAttribute("min", raceMap.get("heightMin"))
    heightElmt.setAttribute("max", raceMap.get("heightMax"))
    // weight parameters
    weightElmt.setAttribute("value", raceMap.get("weightMin"))
    weightElmt.setAttribute("min", raceMap.get("weightMin"))
    weightElmt.setAttribute("max", raceMap.get("weightMax"))
    // Racial capacity
    capacityElmt.innerHTML = raceMap.get("skillDescription")
    // Characteristics
    for (let charac of ["STRENGTH", "DEXTERITY", "CONSTITUTION", "INTELLIGENCE", "WISDOM", "CHARISMA"]) {
        calcModCharac(charac)
    }
}

function addTableLine(tableElmt) {
// Adds a line at the end of a Table (duplicates last line)
    let lastLine = tableElmt.querySelector("tbody tr:last-child")
    let body = tableElmt.querySelector("tbody")
    let clonedLine = lastLine.cloneNode(true)
    clonedLine.querySelector("tr td:first-child input").checked = false
    body.appendChild(clonedLine)
}

function deleteTableLine(tableElmt) {
// Deletes the table lines where the first cell contains a checked checkbox
    let body = tableElmt.querySelector("tbody")
    for (let row of body.rows) {
        let isChecked = row.querySelector("tr td:first-child input").checked
        if ((!isChecked) && (body.rows.length > 1)) {
            row.remove()
        }
    }
}

// function test() {
//     console.log("Working")
// }
// ----------------------------------------------------------------------------------------------------------------------


// // GETTING THE LEVEL VALUE
// inputLevel = document.getElementById("level")
// inputLevel.addEventListener("click", )
// inputLevel.addEventListener("keyup", )

//LISTENING TO CHANGES IN RACE
var inputRace = document.getElementById("race")
var ageElmt = document.getElementById("age")
var heightElmt = document.getElementById("height")
var weightElmt = document.getElementById("weight")
var capacityElmt = document.getElementById("capacity")
var characElmt = document.getElementById("characteristics")
inputRace.addEventListener("change", () => {
    var raceMap = RACES.get(inputRace.value)
    setRace(raceMap, ageElmt, heightElmt, weightElmt, capacityElmt, characElmt)
})

//LISTENING TO THE CHANGES IN CHARACTERISTICS
// STRENGTH
var strengthPts = document.querySelector("#STRENGTH input")
strengthPts.addEventListener("change", () => calcModCharac("STRENGTH"));
// DEXTERITY
var dexterityPts = document.querySelector("#DEXTERITY input")
dexterityPts.addEventListener("change", () => calcModCharac("DEXTERITY"));
// CONSTITUTION
var constitutionPts = document.querySelector("#CONSTITUTION input")
constitutionPts.addEventListener("change", () => calcModCharac("CONSTITUTION"));
// INTELLIGENCE
var intelligencePts = document.querySelector("#INTELLIGENCE input")
intelligencePts.addEventListener("change", () => calcModCharac("INTELLIGENCE"));
// WISDOM
var wisdomPts = document.querySelector("#WISDOM input")
wisdomPts.addEventListener("change", () => calcModCharac("WISDOM"));
// CHARISMA
var charismaPts = document.querySelector("#CHARISMA input")
charismaPts.addEventListener("change", () => calcModCharac("CHARISMA"));

// LISTENING TO THE EQUIPMENT TABLES
var weaponTable = document.querySelector("#weapons table")
var armorTable = document.querySelector("#armors table")
weaponTable.addEventListener("change", () => calcDef())
armorTable.addEventListener("change", () => calcDef())

// LISTENING TO THE EQUIPMENT BUTTONS
// Weapons
var addWeaponBtn = document.querySelector("#weapons .add")
var deleteWeaponBtn = document.querySelector("#weapons .delete")
addWeaponBtn.addEventListener("click", () => addTableLine(weaponTable));
deleteWeaponBtn.addEventListener("click", () => deleteTableLine(weaponTable));
// Armor
var addArmorBtn = document.querySelector("#armors .add")
var deleteArmorBtn = document.querySelector("#armors .delete")
addArmorBtn.addEventListener("click", () => addTableLine(armorTable));
deleteArmorBtn.addEventListener("click", () => deleteTableLine(armorTable));
