export const CLASSES = new Map([
    ["arquebusier", new Map([
        ["name", "Arquebusier"],
        ["life_dice", "d8"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Pétoire (20m)"],
            ["type", "atk_range"], ["atk_mod", 0],
            ["DM_dice", "1d10"], ["DM_mod", 0]
            ]),
            new Map([["name", "Epée Longue"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d8"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
        ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["barbarian", new Map([
        ["name","Barbare"],
        ["life_dice", "d12"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Hache à deux mains"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "2d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Javelot (20m)"],
            ["type", "atk_range"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Javelot (20m)"],
            ["type", "atk_range"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
        ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["bard", new Map([
        ["name","Barde"],
        ["life_dice", "d6"],
        ["mana_points", 0],
        ["atk_magic_mod", "cha"],
        ["start_weapons", [
            new Map([["name", "Rapière (Crit 19-20)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            "instrument de musique"
        ]]
    ])],
    ["knight", new Map([
        ["name","Chevalier"],
        ["life_dice", "d10"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Epée longue"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d8"], ["DM_mod", 0]
            ]),
            new Map([["name", "Lance de cavalerie"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "2d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de demi-plaque"],
            ["def_mod", 6]
            ]),
            new Map([["name", "Grand bouclier"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["druid", new Map([
        ["name","Druide"],
        ["life_dice", "d8"],
        ["mana_points", 0],
        ["atk_magic_mod", "wis"],
        ["start_weapons", [
            new Map([["name", "Bâton"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ]),
            new Map([["name", "Arc court (30m)"],
            ["type", "atk_range"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["sorcerer", new Map([
        ["name","Ensorceleur"],
        ["life_dice", "d4"],
        ["mana_points", 0],
        ["atk_magic_mod", "cha"],
        ["start_weapons", [
            new Map([["name", "Bâton ferré"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            "potion de soins (+1d8 PV)"
        ]]
    ])],
    ["spellforger", new Map([
        ["name","Forgesort"],
        ["life_dice", "d6"],
        ["mana_points", 0],
        ["atk_magic_mod", "int"],
        ["start_weapons", [
            new Map([["name", "Marteau"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Bâton ferré"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["warrior", new Map([
        ["name","Guerrier"],
        ["life_dice", "d12"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Epée longue"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d8"], ["DM_mod", 0]
            ]),
            new Map([["name", "Epée à deux mains"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "2d6"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Cotte de mailles"],
            ["def_mod", 5]
            ]),
            new Map([["name", "Grand bouclier"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["mage", new Map([
        ["name","Magicien"],
        ["life_dice", "d4"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Bâton ferré"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", ""],
            ["def_mod", 0]
            ])
        ]],
        ["inventory", [
            "Grimoire",
            "Potion de soin (+1d8 PV)"
        ]]
    ])],
    ["monk", new Map([
        ["name","Moine"],
        ["life_dice", "d8"],
        ["mana_points", 0],
        ["atk_magic_mod", "wis"],
        ["start_weapons", [
            new Map([["name", "Bâton ferré"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", ""],
            ["def_mod", 0]
            ])
        ]],
        ["inventory", [
            
        ]]
    ])],
    ["necromancer", new Map([
        ["name","Nécromancien"],
        ["life_dice", "d4"],
        ["mana_points", 0],
        ["atk_magic_mod", "int"],
        ["start_weapons", [
            new Map([["name", "Bâton ferré"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", ""],
            ["def_mod", 0]
            ])
        ]],
        ["inventory", [
            "Potion de soin (+1d8 PV)"
        ]]
    ])],
    ["priest", new Map([
        ["name","Prêtre"],
        ["life_dice", "d8"],
        ["mana_points", 0],
        ["atk_magic_mod", "wis"],
        ["start_weapons", [
            new Map([["name", "Marteau de guerre"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Chemise de mailles"],
            ["def_mod", 4]
            ]),
            new Map([["name", "Petit bouclier"],
            ["def_mod", 1]
            ])
        ]],
        ["inventory", [

        ]]
    ])],
    ["ranger", new Map([
        ["name","Rôdeur"],
        ["life_dice", "d8"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Arc court (30m)"],
            ["type", "atk_range"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Epée longue"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d8"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir renforcée"],
            ["def_mod", 3]
            ])
        ]],
        ["inventory", [
            "Carquois"
        ]]
    ])],
    ["thief", new Map([
        ["name","Voleur"],
        ["life_dice", "d6"],
        ["mana_points", 0],
        ["atk_magic_mod", ""],
        ["start_weapons", [
            new Map([["name", "Rapière (Crit 19-20)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d6"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague (lancé 5m)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague (lancé 5m)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague (lancé 5m)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague (lancé 5m)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ]),
            new Map([["name", "Dague (lancé 5m)"],
            ["type", "atk_melee"], ["atk_mod", 0],
            ["DM_dice", "1d4"], ["DM_mod", 0]
            ])
            ]],
        ["start_armors", [
            new Map([["name", "Armure de cuir"],
            ["def_mod", 2]
            ])
        ]],
        ["inventory", [
            "Outils de crochetage"
        ]]
    ])]
])