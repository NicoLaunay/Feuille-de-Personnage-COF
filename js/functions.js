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

// export function jsonRead(filePath) {
//     var f = File.new()
//     f.open(filePath, File.READ)
//     var json = JSON.parse(f.get_as_text())
//     f.close()
//     var data = json.result
//     return data
// }

// export function jsonWrite(filePath, data) {
//     f = File.new()
//     f.open(filePath, File.WRITE)
//     f.store_string(JSON.print(data, "  ", true))
//     f.close()
// }

// var test = {"nom": "nico",
//             "age": 34
// }

// jsonWrite("test.json", test)


export function calcModCharac(charac) {
// Updates the specified CHARAC modifier
    let inputRace = document.getElementById("race")
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

            // var weaponMod = 0
            // let weaponTbody = document.querySelector("#weapons tbody")

            // for (let row of weaponTbody.rows) {
            //     let isChecked = row.querySelector("tr td:first-child input").checked
            //     let weaponType = document.getElementById("weaponType").value
            //     if (isChecked && weaponType==atkType) {
            //         weaponMod = weaponMod + Number(row.querySelector(".mod input").value)
            //         // console.log(weaponMod)
            //     }
            // }
            // let atkMod = Number(level) + Number(weaponMod) + Number(modCharac)
            let atkMod = Number(level) + Number(modCharac)
            document.querySelector(`#${atkType} .mod`).innerHTML = (atkMod > 0) ? `+${atkMod}` : atkMod //Adding a + sign if atkmod > 0
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

export function updateMaxHP(lifeDiceElmt, hpElmt, conModElmt, levelElmt, lifeBarElmt) {
    var lifeDice = lifeDiceElmt.querySelector("span").innerHTML
    var lifeDiceValue = Number(lifeDice.slice(1))
    var level = Number(levelElmt.value)
    var conMod = Number(conModElmt.innerHTML)
    var maxHP = lifeDiceValue + conMod + ((level - 1) * (lifeDiceValue/2 + conMod))

    var hpMaxElmt = hpElmt.querySelector("span")
    var hpCurrentElmt = hpElmt.querySelector("input")
    hpMaxElmt.innerHTML = `/${maxHP}`
    hpCurrentElmt.max = maxHP
    if (hpCurrentElmt.value > maxHP) {
        hpCurrentElmt.value = maxHP
    }
    updateLifeBar(lifeBarElmt, hpElmt)
}

export function updateLifeBar(lifeBarElmt, hpElmt) {
    var currentHP = Number(hpElmt.querySelector("input").value)
    var maxHP = Number(hpElmt.querySelector("input").max)
    if (maxHP == 0) {
        var percentHP = 0
    } else {
        var percentHP = currentHP/maxHP * 100
    }
    lifeBarElmt.style.width = `${percentHP}%`
}

export function setClass(classMap, lifeDiceElmt, weaponsTable, armorsTable, inventoryElmt) {
// Updates various parameters whenever Class changes
    // Life Dice
    var lifeDice = classMap.get("life_dice")
    lifeDiceElmt.querySelector("span").innerHTML = lifeDice

    // WEAPONS
    let tbody_w = weaponsTable.querySelector("tbody")
    let nb_weapons = classMap.get("start_weapons").length
    let nb_rows_w = tbody_w.rows.length
    let weapons_to_add = nb_weapons - nb_rows_w
    // Adding or deleting lines to get the number of weapons required by the class
    if (weapons_to_add > 0) {
        for (let step = 0; step < weapons_to_add; step++) {
            addTableLine(weaponsTable)
        }
    } else if (weapons_to_add < 0) {
        for (let step = nb_rows_w-1; step >= nb_weapons; step--) {
            tbody_w.rows.item(step).remove()
        }
    }
    // Filling the table with the starter weapons info
    for (let step = 0; step < nb_weapons; step++) {
        let rowElmt = tbody_w.querySelector(`tr:nth-child(${step+1})`)
        let weapon = classMap.get("start_weapons")[step]
        setWeaponRow(weapon, rowElmt)
    }

    // ARMOR
    let tbody_a = armorsTable.querySelector("tbody")
    let nb_armors = classMap.get("start_armors").length
    let nb_rows_a = tbody_a.rows.length
    let armors_to_add = nb_armors - nb_rows_a
    // Adding or deleting lines to get the number of armor pieces required by the class
    if (armors_to_add > 0) {
        for (let step = 0; step < armors_to_add; step++) {
            addTableLine(armorsTable)
        }
    } else if (armors_to_add < 0) {
        for (let step = nb_rows_a-1; step >= nb_armors; step--) {
            tbody_a.rows.item(step).remove()
        }
    }
    // Filling the table with the starter armor pieces info
    for (let step = 0; step < nb_armors; step++) {
        let rowElmt = tbody_a.querySelector(`tr:nth-child(${step+1})`)
        let armor = classMap.get("start_armors")[step]
        setArmorRow(armor, rowElmt)
    }

    // INVENTORY
    let contentList = classMap.get("inventory")
    setInventory(inventoryElmt, contentList)
}


export function setWeaponRow(weaponMap, tableRowElmt) {
    tableRowElmt.querySelector("#weaponType").value = weaponMap.get("type")
    tableRowElmt.querySelector("#weaponName").value = weaponMap.get("name")
    tableRowElmt.querySelector(".mod input").value = weaponMap.get("atk_mod")
    tableRowElmt.querySelector("#weaponDM").value = weaponMap.get("DM_dice")
    tableRowElmt.querySelector("#DMbonus").value = weaponMap.get("DM_mod")
}


export function setArmorRow(armorMap, tableRowElmt) {
    tableRowElmt.querySelector("#armorName").value = armorMap.get("name")
    tableRowElmt.querySelector(".mod").value = armorMap.get("def_mod")
    tableRowElmt.querySelector("#armorMalus").value = armorMap.get("def_mod")
}


export function setInventory(inventoryElmt, contentList) {
    inventoryElmt.innerHTML = ""
    let content = ""
    for (let item of contentList) {
        content = `${content}${item}\r`
    }
    inventoryElmt.innerHTML = content
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


export function setOptions(selectElmt, optionsMap) {
// Adds an option for each entry in the options Map.
    for (let [key, content] of optionsMap) {
        let option = document.createElement("option");
        option.value = key
        option.text = content.get("name")
        selectElmt.add(option)
    }
}