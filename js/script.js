import { RACES } from "./races.js"
import { CLASSES } from "./classes.js"
import * as rpg from "./functions.js"

// LISTENING TO CHANGES IN LEVEL
var levelElmt = document.getElementById("level")
levelElmt.addEventListener("change", () => {
    rpg.calcAtk("atk_melee", "atk_range", "atk_magic")
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
    rpg.setRace(raceMap, ageElmt, heightElmt, weightElmt, capacityElmt, characElmt)
})

//LISTENING TO THE CHANGES IN CHARACTERISTICS
// STRENGTH
var strengthPts = document.querySelector("#STRENGTH input")
strengthPts.addEventListener("change", () => rpg.calcModCharac("STRENGTH"));
// DEXTERITY
var dexterityPts = document.querySelector("#DEXTERITY input")
dexterityPts.addEventListener("change", () => rpg.calcModCharac("DEXTERITY"));
// CONSTITUTION
var constitutionPts = document.querySelector("#CONSTITUTION input")
constitutionPts.addEventListener("change", () => rpg.calcModCharac("CONSTITUTION"));
// INTELLIGENCE
var intelligencePts = document.querySelector("#INTELLIGENCE input")
intelligencePts.addEventListener("change", () => rpg.calcModCharac("INTELLIGENCE"));
// WISDOM
var wisdomPts = document.querySelector("#WISDOM input")
wisdomPts.addEventListener("change", () => rpg.calcModCharac("WISDOM"));
// CHARISMA
var charismaPts = document.querySelector("#CHARISMA input")
charismaPts.addEventListener("change", () => rpg.calcModCharac("CHARISMA"));

// LISTENING TO THE EQUIPMENT TABLES
var weaponTable = document.querySelector("#weapons table")
var armorTable = document.querySelector("#armors table")
weaponTable.addEventListener("change", () => {
    rpg.calcDef()
    rpg.calcAtk("atk_melee", "atk_range", "atk_magic")
})
armorTable.addEventListener("change", () => rpg.calcDef())

// LISTENING TO THE EQUIPMENT BUTTONS
// Weapons
var addWeaponBtn = document.querySelector("#weapons .add")
var deleteWeaponBtn = document.querySelector("#weapons .delete")
addWeaponBtn.addEventListener("click", () => rpg.addTableLine(weaponTable));
deleteWeaponBtn.addEventListener("click", () => rpg.deleteTableLine(weaponTable));
// Armor
var addArmorBtn = document.querySelector("#armors .add")
var deleteArmorBtn = document.querySelector("#armors .delete")
addArmorBtn.addEventListener("click", () => rpg.addTableLine(armorTable));
deleteArmorBtn.addEventListener("click", () => rpg.deleteTableLine(armorTable));


// const DATA = getJsonData('../data/classes.json')
// console.log(DATA)