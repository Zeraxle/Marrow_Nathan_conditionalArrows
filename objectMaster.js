const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// const divByThree = pokemon.filter( poke => poke.id % 3 === 0)
// console.log(divByThree)

// const fireType = pokemon.filter(poke => poke.types[0] === "fire"|| poke.types[1] === "fire")
// console.log(fireType)

// const moreThanTwo = pokemon.filter(poke=> poke.types.length > 1)
// console.log(moreThanTwo)

// const pokeNames = pokemon.map(poke => poke.name)
// console.log(pokeNames)

// const greaterThan99 = pokemon.filter(poke => poke.id > 99).map(poke => poke.name)
// console.log(greaterThan99)
//FINISH

// const onlyPoison = pokemon.filter(poke => poke.types[0] === "poison" && poke.types.length === 1)
// console.log(onlyPoison)

// const firstTypeOfFlying = pokemon.filter(poke => poke.types[1] === "flying").map(poke => poke.types[0])
// console.log(firstTypeOfFlying)

// let normalCount = 0
// const countNormal = pokemon.map(poke => poke.types[0] == "normal"? normalCount++: "not normal") 
// countNormal
// console.log(normalCount)

// const whoNeeds148 = pokemon.filter(poke => poke.id != 148)
// console.log(whoNeeds148)

// const [...pokemonCopy] = pokemon
// pokemonCopy.filter(poke => poke.id == 35).map(poke => poke.types[0] = "fairy")
// console.log(pokemonCopy)