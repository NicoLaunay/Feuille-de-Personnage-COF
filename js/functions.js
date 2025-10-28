import { RACES } from "./races.js"
import { CLASSES } from "./classes.js"


// export function getJsonData(jsonPath) {
//     fetch(jsonPath)
//         .then(response => {
//             if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // console.log(data); // Now you have the JSON data to work with
//             return data
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

export function calcModCharac(charac) {
// Updates the specified CHARAC modifier
    var inputRace = document.getElementById("race")
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

    //if current characteristic is STR, melee DM are modified
    if (charac == "STRENGTH") {
        // melee ATK
        calcAtk("atk_melee")
    }
    //if current characteristic is DEX, initiative, DISTANCE ATK and DEF are modified
    if (charac == "DEXTERITY") {
        // INIT
        let initElement = document.querySelector("#initiative span")
        initElement.innerHTML = valueElmt.textContent
        // DEF
        calcDef()
        // Distance ATK
        calcAtk("atk_range")
    }
    //if current characteristic is INT, magic DM are modified
    if (charac == "INTELLIGENCE") {
        // magic ATK
        calcAtk("atk_magic")
    }
}


export function calcAtk(atkType1, atkType2=false, atkType3=false) {
// Updates the selected ATK values
    let level = document.getElementById("level").value
    // console.log(atkType1, atkType2, atkType3)

    for (let atkType of [atkType1, atkType2, atkType3]) {
        // console.log(atkType)
        if (atkType) {
            if (atkType == "atk_melee") {
                var modCharac = Number(document.querySelector("#STRENGTH .mod").innerHTML)
            } else if (atkType == "atk_range") {
                var modCharac = Number(document.querySelector("#DEXTERITY .mod").innerHTML)
            } else if (atkType == "atk_magic") {
                var modCharac = Number(document.querySelector("#INTELLIGENCE .mod").innerHTML)
            }

            var weaponMod = 0
            let weaponTbody = document.querySelector("#weapons tbody")

            for (let row of weaponTbody.rows) {
                let isChecked = row.querySelector("tr td:first-child input").checked
                let weaponType = document.getElementById("weaponType").value
                if (isChecked && weaponType==atkType) {
                    weaponMod = weaponMod + Number(row.querySelector(".mod input").value)
                    // console.log(weaponMod)
                }
            }
            let atkMod = Number(level) + Number(weaponMod) + Number(modCharac)
            document.querySelector(`#${atkType} .mod`).innerHTML = (atkMod > 0) ? `+${atkMod}` : atkMod
        }
    }
    
}


export function calcDef() {
// Updates the DEF modifier
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


export function setRace(raceMap, ageElmt, heightElmt, weightElmt, capacityElmt, characElmt) {
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


export function addTableLine(tableElmt) {
// Adds a line at the end of a Table (duplicates last line)
    let lastLine = tableElmt.querySelector("tbody tr:last-child")
    let body = tableElmt.querySelector("tbody")
    let clonedLine = lastLine.cloneNode(true)
    clonedLine.querySelector("tr td:first-child input").checked = false
    body.appendChild(clonedLine)
}


export function deleteTableLine(tableElmt) {
// Deletes the table lines where the first cell contains a unchecked checkbox
    let tbody = tableElmt.querySelector("tbody")
    for (let row of tbody.rows) {
        let isChecked = row.querySelector("tr td:first-child input").checked
        if ((!isChecked) && (tbody.rows.length > 1)) {
            row.remove()
        }
    }
}

// export function test() {
//     console.log("Working")
// }