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

    //if current characteristic is DEX, initiative and DISTANCE ATK are modified
    if (charac == "DEXTERITY") {
        let initElement = document.querySelector("#initiative span")
        initElement.innerHTML = valueElmt.textContent
    }
}

function calcModAtk(atk_type) {
    let test = 0
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
    body.appendChild(clonedLine)
}

function deleteTableLine(tableElmt) {
// Deletes the table lines where the first cell contains a checked checkbox
    let body = tableElmt.querySelector("tbody")
    for (let row of body.rows) {
        let isChecked = row.querySelector("tr td:first-child input").checked
        if ((isChecked) && (body.rows.length > 1)) {
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

// LISTENING TO THE EQUIPMENT BUTTONS
// Weapons
var weaponTable = document.querySelector("#weapons table")
var addWeaponBtn = document.querySelector("#weapons .add")
var deleteWeaponBtn = document.querySelector("#weapons .delete")
addWeaponBtn.addEventListener("click", () => addTableLine(weaponTable));
deleteWeaponBtn.addEventListener("click", () => deleteTableLine(weaponTable));
// Armor
var armorTable = document.querySelector("#armors table")
var addArmorBtn = document.querySelector("#armors .add")
var deleteArmorBtn = document.querySelector("#armors .delete")
addArmorBtn.addEventListener("click", () => addTableLine(armorTable));
deleteArmorBtn.addEventListener("click", () => deleteTableLine(armorTable));
