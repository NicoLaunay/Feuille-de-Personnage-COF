import { RACES } from "./races.js"

// ----------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------------------------------------------------

function calcModCharac(charac) {
// Updates the specified CHARAC modifier
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

function calcAtk(atkType1, atkType2=false, atkType3=false) {
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

function calcDef() {
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
// Deletes the table lines where the first cell contains a unchecked checkbox
    let tbody = tableElmt.querySelector("tbody")
    for (let row of tbody.rows) {
        let isChecked = row.querySelector("tr td:first-child input").checked
        if ((!isChecked) && (tbody.rows.length > 1)) {
            row.remove()
        }
    }
}

// function test() {
//     console.log("Working")
// }
// ----------------------------------------------------------------------------------------------------------------------


// LISTENING TO CHANGES IN LEVEL
var levelElmt = document.getElementById("level")
levelElmt.addEventListener("change", () => {
    calcAtk("atk_melee", "atk_range", "atk_magic")
})

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
weaponTable.addEventListener("change", () => {
    calcDef()
    calcAtk("atk_melee", "atk_range", "atk_magic")
})
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
