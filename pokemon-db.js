// POKÉMON DATABASE - GEN 1 (151 Pokémon Completos)
// Stats base retirados dos jogos oficiais
// Ranks definidos por estágio evolutivo

const POKEMON_DB = [
  // FAMÍLIA BULBASAUR (#001-003)
  {id:1,name:"Bulbasaur",types:["grass","poison"],rank:"common",hp:45,atk:49,def:49,spatk:65,spdef:65,spd:45,moves:[{name:"Vine Whip",type:"grass",power:8,cat:"physical"},{name:"Razor Leaf",type:"grass",power:10,cat:"special"},{name:"Poison Powder",type:"poison",power:5,cat:"special"},{name:"Tackle",type:"normal",power:6,cat:"physical"}]},
  {id:2,name:"Ivysaur",types:["grass","poison"],rank:"uncommon",hp:60,atk:62,def:63,spatk:80,spdef:80,spd:60,moves:[{name:"Razor Leaf",type:"grass",power:10,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Vine Whip",type:"grass",power:8,cat:"physical"},{name:"Take Down",type:"normal",power:10,cat:"physical"}]},
  {id:3,name:"Venusaur",types:["grass","poison"],rank:"rare",hp:80,atk:82,def:83,spatk:100,spdef:100,spd:80,moves:[{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Giga Drain",type:"grass",power:10,cat:"special"}]},

  // FAMÍLIA CHARMANDER (#004-006)
  {id:4,name:"Charmander",types:["fire"],rank:"common",hp:39,atk:52,def:43,spatk:60,spdef:50,spd:65,moves:[{name:"Ember",type:"fire",power:8,cat:"special"},{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},
  {id:5,name:"Charmeleon",types:["fire"],rank:"uncommon",hp:58,atk:64,def:58,spatk:80,spdef:65,spd:80,moves:[{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"Fire Fang",type:"fire",power:9,cat:"physical"},{name:"Dragon Claw",type:"dragon",power:10,cat:"physical"}]},
  {id:6,name:"Charizard",types:["fire","flying"],rank:"rare",hp:78,atk:84,def:78,spatk:109,spdef:85,spd:100,moves:[{name:"Fire Blast",type:"fire",power:15,cat:"special"},{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Dragon Claw",type:"dragon",power:10,cat:"physical"},{name:"Flare Blitz",type:"fire",power:15,cat:"physical"}]},

  // FAMÍLIA SQUIRTLE (#007-009)
  {id:7,name:"Squirtle",types:["water"],rank:"common",hp:44,atk:48,def:65,spatk:50,spdef:64,spd:43,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Bubble",type:"water",power:6,cat:"special"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"}]},
  {id:8,name:"Wartortle",types:["water"],rank:"uncommon",hp:59,atk:63,def:80,spatk:65,spdef:80,spd:58,moves:[{name:"Water Pulse",type:"water",power:9,cat:"special"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"}]},
  {id:9,name:"Blastoise",types:["water"],rank:"rare",hp:79,atk:83,def:100,spatk:85,spdef:105,spd:78,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Surf",type:"water",power:12,cat:"special"},{name:"Crunch",type:"dark",power:10,cat:"physical"}]},

  // LINHA CATERPIE (#010-012)
  {id:10,name:"Caterpie",types:["bug"],rank:"common",hp:45,atk:30,def:35,spatk:20,spdef:20,spd:45,moves:[{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"String Shot",type:"bug",power:0,cat:"special"},{name:"Bug Bite",type:"bug",power:8,cat:"physical"},{name:"Electroweb",type:"electric",power:7,cat:"special"}]},
  {id:11,name:"Metapod",types:["bug"],rank:"common",hp:50,atk:20,def:55,spatk:25,spdef:25,spd:30,moves:[{name:"Harden",type:"normal",power:0,cat:"special"},{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"Iron Defense",type:"steel",power:0,cat:"special"},{name:"Bug Bite",type:"bug",power:8,cat:"physical"}]},
  {id:12,name:"Butterfree",types:["bug","flying"],rank:"uncommon",hp:60,atk:45,def:50,spatk:90,spdef:80,spd:70,moves:[{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Bug Buzz",type:"bug",power:12,cat:"special"}]},

  // LINHA WEEDLE (#013-015)
  {id:13,name:"Weedle",types:["bug","poison"],rank:"common",hp:40,atk:35,def:30,spatk:20,spdef:20,spd:50,moves:[{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"String Shot",type:"bug",power:0,cat:"special"},{name:"Bug Bite",type:"bug",power:8,cat:"physical"},{name:"Electroweb",type:"electric",power:7,cat:"special"}]},
  {id:14,name:"Kakuna",types:["bug","poison"],rank:"common",hp:45,atk:25,def:50,spatk:25,spdef:25,spd:35,moves:[{name:"Harden",type:"normal",power:0,cat:"special"},{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Iron Defense",type:"steel",power:0,cat:"special"},{name:"Bug Bite",type:"bug",power:8,cat:"physical"}]},
  {id:15,name:"Beedrill",types:["bug","poison"],rank:"uncommon",hp:65,atk:90,def:40,spatk:45,spdef:80,spd:75,moves:[{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Drill Run",type:"ground",power:10,cat:"physical"},{name:"Aerial Ace",type:"flying",power:9,cat:"physical"}]},

  // LINHA PIDGEY (#016-018)
  {id:16,name:"Pidgey",types:["normal","flying"],rank:"common",hp:40,atk:45,def:40,spatk:35,spdef:35,spd:56,moves:[{name:"Gust",type:"flying",power:6,cat:"special"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Wing Attack",type:"flying",power:8,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"}]},
  {id:17,name:"Pidgeotto",types:["normal","flying"],rank:"uncommon",hp:63,atk:60,def:55,spatk:50,spdef:50,spd:71,moves:[{name:"Wing Attack",type:"flying",power:8,cat:"physical"},{name:"Aerial Ace",type:"flying",power:9,cat:"physical"},{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},
  {id:18,name:"Pidgeot",types:["normal","flying"],rank:"rare",hp:83,atk:80,def:75,spatk:70,spdef:70,spd:101,moves:[{name:"Hurricane",type:"flying",power:15,cat:"special"},{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Heat Wave",type:"fire",power:12,cat:"special"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},

  // LINHA RATTATA (#019-020)
  {id:19,name:"Rattata",types:["normal"],rank:"common",hp:30,atk:56,def:35,spatk:25,spdef:35,spd:72,moves:[{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"Hyper Fang",type:"normal",power:10,cat:"physical"}]},
  {id:20,name:"Raticate",types:["normal"],rank:"uncommon",hp:55,atk:81,def:60,spatk:50,spdef:70,spd:97,moves:[{name:"Hyper Fang",type:"normal",power:10,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Sucker Punch",type:"dark",power:9,cat:"physical"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},

  // LINHA SPEAROW (#021-022)
  {id:21,name:"Spearow",types:["normal","flying"],rank:"common",hp:40,atk:60,def:30,spatk:31,spdef:31,spd:70,moves:[{name:"Peck",type:"flying",power:6,cat:"physical"},{name:"Fury Attack",type:"normal",power:7,cat:"physical"},{name:"Aerial Ace",type:"flying",power:9,cat:"physical"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},
  {id:22,name:"Fearow",types:["normal","flying"],rank:"uncommon",hp:65,atk:90,def:65,spatk:61,spdef:61,spd:100,moves:[{name:"Drill Peck",type:"flying",power:10,cat:"physical"},{name:"Aerial Ace",type:"flying",power:9,cat:"physical"},{name:"Drill Run",type:"ground",power:10,cat:"physical"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},

  // LINHA EKANS (#023-024)
  {id:23,name:"Ekans",types:["poison"],rank:"common",hp:35,atk:60,def:44,spatk:40,spdef:54,spd:55,moves:[{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Acid",type:"poison",power:6,cat:"special"},{name:"Wrap",type:"normal",power:6,cat:"physical"}]},
  {id:24,name:"Arbok",types:["poison"],rank:"uncommon",hp:60,atk:95,def:69,spatk:65,spdef:79,spd:80,moves:[{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Gunk Shot",type:"poison",power:15,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"}]},

  // PIKACHU E RAICHU (#025-026)
  {id:25,name:"Pikachu",types:["electric"],rank:"uncommon",hp:35,atk:55,def:40,spatk:50,spdef:50,spd:90,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Thunder",type:"electric",power:15,cat:"special"},{name:"Iron Tail",type:"steel",power:10,cat:"physical"}]},
  {id:26,name:"Raichu",types:["electric"],rank:"rare",hp:60,atk:90,def:55,spatk:90,spdef:80,spd:110,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Thunder",type:"electric",power:15,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Volt Tackle",type:"electric",power:15,cat:"physical"}]},

  // LINHA SANDSHREW (#027-028)
  {id:27,name:"Sandshrew",types:["ground"],rank:"common",hp:50,atk:75,def:85,spatk:20,spdef:30,spd:40,moves:[{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Dig",type:"ground",power:10,cat:"physical"},{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},
  {id:28,name:"Sandslash",types:["ground"],rank:"uncommon",hp:75,atk:100,def:110,spatk:45,spdef:55,spd:65,moves:[{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"X-Scissor",type:"bug",power:10,cat:"physical"}]},

  // LINHA NIDORAN F (#029-031)
  {id:29,name:"Nidoran♀",types:["poison"],rank:"common",hp:55,atk:47,def:52,spatk:40,spdef:40,spd:41,moves:[{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Toxic Spikes",type:"poison",power:0,cat:"special"}]},
  {id:30,name:"Nidorina",types:["poison"],rank:"uncommon",hp:70,atk:62,def:67,spatk:55,spdef:55,spd:56,moves:[{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Body Slam",type:"normal",power:11,cat:"physical"},{name:"Earth Power",type:"ground",power:12,cat:"special"}]},
  {id:31,name:"Nidoqueen",types:["poison","ground"],rank:"rare",hp:90,atk:92,def:87,spatk:75,spdef:85,spd:76,moves:[{name:"Earth Power",type:"ground",power:12,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Superpower",type:"fighting",power:15,cat:"physical"}]},

  // LINHA NIDORAN M (#032-034)
  {id:32,name:"Nidoran♂",types:["poison"],rank:"common",hp:46,atk:57,def:40,spatk:40,spdef:40,spd:50,moves:[{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Peck",type:"flying",power:6,cat:"physical"},{name:"Horn Attack",type:"normal",power:8,cat:"physical"},{name:"Toxic Spikes",type:"poison",power:0,cat:"special"}]},
  {id:33,name:"Nidorino",types:["poison"],rank:"uncommon",hp:61,atk:72,def:57,spatk:55,spdef:55,spd:65,moves:[{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"Horn Attack",type:"normal",power:8,cat:"physical"},{name:"Megahorn",type:"bug",power:15,cat:"physical"},{name:"Earth Power",type:"ground",power:12,cat:"special"}]},
  {id:34,name:"Nidoking",types:["poison","ground"],rank:"rare",hp:81,atk:102,def:77,spatk:85,spdef:75,spd:85,moves:[{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Megahorn",type:"bug",power:15,cat:"physical"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Superpower",type:"fighting",power:15,cat:"physical"}]},

  // LINHA CLEFAIRY (#035-036)
  {id:35,name:"Clefairy",types:["fairy"],rank:"uncommon",hp:70,atk:45,def:48,spatk:60,spdef:65,spd:35,moves:[{name:"Disarming Voice",type:"fairy",power:6,cat:"special"},{name:"Moonblast",type:"fairy",power:12,cat:"special"},{name:"Meteor Mash",type:"steel",power:12,cat:"physical"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"}]},
  {id:36,name:"Clefable",types:["fairy"],rank:"rare",hp:95,atk:70,def:73,spatk:95,spdef:90,spd:60,moves:[{name:"Moonblast",type:"fairy",power:12,cat:"special"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},

  // LINHA VULPIX (#037-038)
  {id:37,name:"Vulpix",types:["fire"],rank:"common",hp:38,atk:41,def:40,spatk:50,spdef:65,spd:65,moves:[{name:"Ember",type:"fire",power:8,cat:"special"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Hex",type:"ghost",power:9,cat:"special"}]},
  {id:38,name:"Ninetales",types:["fire"],rank:"rare",hp:73,atk:76,def:75,spatk:81,spdef:100,spd:100,moves:[{name:"Fire Blast",type:"fire",power:15,cat:"special"},{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Dark Pulse",type:"dark",power:10,cat:"special"},{name:"Nasty Plot",type:"dark",power:0,cat:"special"}]},

  // LINHA JIGGLYPUFF (#039-040)
  {id:39,name:"Jigglypuff",types:["normal","fairy"],rank:"common",hp:115,atk:45,def:20,spatk:45,spdef:25,spd:20,moves:[{name:"Pound",type:"normal",power:6,cat:"physical"},{name:"Disarming Voice",type:"fairy",power:6,cat:"special"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"},{name:"Hyper Voice",type:"normal",power:12,cat:"special"}]},
  {id:40,name:"Wigglytuff",types:["normal","fairy"],rank:"uncommon",hp:140,atk:70,def:45,spatk:85,spdef:50,spd:45,moves:[{name:"Hyper Voice",type:"normal",power:12,cat:"special"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},

  // LINHA ZUBAT (#041-042)
  {id:41,name:"Zubat",types:["poison","flying"],rank:"common",hp:40,atk:45,def:35,spatk:30,spdef:40,spd:55,moves:[{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Wing Attack",type:"flying",power:8,cat:"physical"},{name:"Poison Fang",type:"poison",power:8,cat:"physical"},{name:"Gust",type:"flying",power:6,cat:"special"}]},
  {id:42,name:"Golbat",types:["poison","flying"],rank:"uncommon",hp:75,atk:80,def:70,spatk:65,spdef:75,spd:90,moves:[{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Poison Fang",type:"poison",power:8,cat:"physical"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"}]},

  // LINHA ODDISH (#043-045)
  {id:43,name:"Oddish",types:["grass","poison"],rank:"common",hp:45,atk:50,def:55,spatk:75,spdef:65,spd:30,moves:[{name:"Acid",type:"poison",power:6,cat:"special"},{name:"Razor Leaf",type:"grass",power:10,cat:"special"},{name:"Poison Powder",type:"poison",power:5,cat:"special"},{name:"Absorb",type:"grass",power:6,cat:"special"}]},
  {id:44,name:"Gloom",types:["grass","poison"],rank:"uncommon",hp:60,atk:65,def:70,spatk:85,spdef:75,spd:40,moves:[{name:"Giga Drain",type:"grass",power:10,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Petal Dance",type:"grass",power:15,cat:"special"},{name:"Moonblast",type:"fairy",power:12,cat:"special"}]},
  {id:45,name:"Vileplume",types:["grass","poison"],rank:"rare",hp:75,atk:80,def:85,spatk:110,spdef:90,spd:50,moves:[{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Moonblast",type:"fairy",power:12,cat:"special"},{name:"Giga Drain",type:"grass",power:10,cat:"special"}]},

  // LINHA PARAS (#046-047)
  {id:46,name:"Paras",types:["bug","grass"],rank:"common",hp:35,atk:70,def:55,spatk:45,spdef:55,spd:25,moves:[{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Absorb",type:"grass",power:6,cat:"special"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"X-Scissor",type:"bug",power:10,cat:"physical"}]},
  {id:47,name:"Parasect",types:["bug","grass"],rank:"uncommon",hp:60,atk:95,def:80,spatk:60,spdef:80,spd:30,moves:[{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Giga Drain",type:"grass",power:10,cat:"special"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"Spore",type:"grass",power:0,cat:"special"}]},

  // LINHA VENONAT (#048-049)
  {id:48,name:"Venonat",types:["bug","poison"],rank:"common",hp:60,atk:55,def:50,spatk:40,spdef:55,spd:45,moves:[{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Poison Powder",type:"poison",power:5,cat:"special"},{name:"Signal Beam",type:"bug",power:10,cat:"special"}]},
  {id:49,name:"Venomoth",types:["bug","poison"],rank:"uncommon",hp:70,atk:65,def:60,spatk:90,spdef:75,spd:90,moves:[{name:"Bug Buzz",type:"bug",power:12,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Sleep Powder",type:"grass",power:0,cat:"special"}]},

  // LINHA DIGLETT (#050-051)
  {id:50,name:"Diglett",types:["ground"],rank:"common",hp:10,atk:55,def:25,spatk:35,spdef:45,spd:95,moves:[{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Dig",type:"ground",power:10,cat:"physical"},{name:"Mud-Slap",type:"ground",power:6,cat:"special"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},
  {id:51,name:"Dugtrio",types:["ground"],rank:"uncommon",hp:35,atk:100,def:50,spatk:50,spdef:70,spd:120,moves:[{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Sucker Punch",type:"dark",power:9,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},

  // LINHA MEOWTH (#052-053)
  {id:52,name:"Meowth",types:["normal"],rank:"common",hp:40,atk:45,def:35,spatk:40,spdef:40,spd:90,moves:[{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Pay Day",type:"normal",power:6,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},
  {id:53,name:"Persian",types:["normal"],rank:"uncommon",hp:65,atk:70,def:60,spatk:65,spdef:65,spd:115,moves:[{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"Play Rough",type:"fairy",power:12,cat:"physical"},{name:"Power Gem",type:"rock",power:10,cat:"special"},{name:"Dark Pulse",type:"dark",power:10,cat:"special"}]},

  // LINHA PSYDUCK (#054-055)
  {id:54,name:"Psyduck",types:["water"],rank:"common",hp:50,atk:52,def:48,spatk:65,spdef:50,spd:55,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Zen Headbutt",type:"psychic",power:10,cat:"physical"}]},
  {id:55,name:"Golduck",types:["water"],rank:"uncommon",hp:80,atk:82,def:78,spatk:95,spdef:80,spd:85,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Cross Chop",type:"fighting",power:13,cat:"physical"}]},

  // LINHA MANKEY (#056-057)
  {id:56,name:"Mankey",types:["fighting"],rank:"common",hp:40,atk:80,def:35,spatk:35,spdef:45,spd:70,moves:[{name:"Karate Chop",type:"fighting",power:8,cat:"physical"},{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Cross Chop",type:"fighting",power:13,cat:"physical"},{name:"Brick Break",type:"fighting",power:10,cat:"physical"}]},
  {id:57,name:"Primeape",types:["fighting"],rank:"uncommon",hp:65,atk:105,def:60,spatk:60,spdef:70,spd:95,moves:[{name:"Close Combat",type:"fighting",power:15,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"U-turn",type:"bug",power:9,cat:"physical"}]},

  // LINHA GROWLITHE (#058-059)
  {id:58,name:"Growlithe",types:["fire"],rank:"common",hp:55,atk:70,def:45,spatk:70,spdef:50,spd:60,moves:[{name:"Ember",type:"fire",power:8,cat:"special"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Crunch",type:"dark",power:10,cat:"physical"}]},
  {id:59,name:"Arcanine",types:["fire"],rank:"rare",hp:90,atk:110,def:80,spatk:100,spdef:80,spd:95,moves:[{name:"Flare Blitz",type:"fire",power:15,cat:"physical"},{name:"Extreme Speed",type:"normal",power:10,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Wild Charge",type:"electric",power:12,cat:"physical"}]},

  // LINHA POLIWAG (#060-062)
  {id:60,name:"Poliwag",types:["water"],rank:"common",hp:40,atk:50,def:40,spatk:40,spdef:40,spd:90,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Bubble",type:"water",power:6,cat:"special"},{name:"Body Slam",type:"normal",power:11,cat:"physical"},{name:"Hypnosis",type:"psychic",power:0,cat:"special"}]},
  {id:61,name:"Poliwhirl",types:["water"],rank:"uncommon",hp:65,atk:65,def:65,spatk:50,spdef:50,spd:90,moves:[{name:"Bubble Beam",type:"water",power:9,cat:"special"},{name:"Body Slam",type:"normal",power:11,cat:"physical"},{name:"Ice Punch",type:"ice",power:10,cat:"physical"},{name:"Hypnosis",type:"psychic",power:0,cat:"special"}]},
  {id:62,name:"Poliwrath",types:["water","fighting"],rank:"rare",hp:90,atk:95,def:95,spatk:70,spdef:90,spd:70,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Dynamic Punch",type:"fighting",power:13,cat:"physical"},{name:"Ice Punch",type:"ice",power:10,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"}]},

  // LINHA ABRA (#063-065)
  {id:63,name:"Abra",types:["psychic"],rank:"uncommon",hp:25,atk:20,def:15,spatk:105,spdef:55,spd:90,moves:[{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Teleport",type:"psychic",power:0,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"}]},
  {id:64,name:"Kadabra",types:["psychic"],rank:"uncommon",hp:40,atk:35,def:30,spatk:120,spdef:70,spd:105,moves:[{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"}]},
  {id:65,name:"Alakazam",types:["psychic"],rank:"rare",hp:55,atk:50,def:45,spatk:135,spdef:95,spd:120,moves:[{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"}]},

  // LINHA MACHOP (#066-068)
  {id:66,name:"Machop",types:["fighting"],rank:"common",hp:70,atk:80,def:50,spatk:35,spdef:35,spd:35,moves:[{name:"Karate Chop",type:"fighting",power:8,cat:"physical"},{name:"Low Kick",type:"fighting",power:7,cat:"physical"},{name:"Cross Chop",type:"fighting",power:13,cat:"physical"},{name:"Rock Throw",type:"rock",power:8,cat:"physical"}]},
  {id:67,name:"Machoke",types:["fighting"],rank:"uncommon",hp:80,atk:100,def:70,spatk:50,spdef:60,spd:45,moves:[{name:"Cross Chop",type:"fighting",power:13,cat:"physical"},{name:"Rock Slide",type:"rock",power:10,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Knock Off",type:"dark",power:9,cat:"physical"}]},
  {id:68,name:"Machamp",types:["fighting"],rank:"rare",hp:90,atk:130,def:80,spatk:65,spdef:85,spd:55,moves:[{name:"Dynamic Punch",type:"fighting",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Knock Off",type:"dark",power:9,cat:"physical"}]},

  // LINHA BELLSPROUT (#069-071)
  {id:69,name:"Bellsprout",types:["grass","poison"],rank:"common",hp:50,atk:75,def:35,spatk:70,spdef:30,spd:40,moves:[{name:"Vine Whip",type:"grass",power:8,cat:"physical"},{name:"Acid",type:"poison",power:6,cat:"special"},{name:"Razor Leaf",type:"grass",power:10,cat:"special"},{name:"Wrap",type:"normal",power:6,cat:"physical"}]},
  {id:70,name:"Weepinbell",types:["grass","poison"],rank:"uncommon",hp:65,atk:90,def:50,spatk:85,spdef:45,spd:55,moves:[{name:"Razor Leaf",type:"grass",power:10,cat:"special"},{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Giga Drain",type:"grass",power:10,cat:"special"}]},
  {id:71,name:"Victreebel",types:["grass","poison"],rank:"rare",hp:80,atk:105,def:65,spatk:100,spdef:70,spd:70,moves:[{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Leaf Blade",type:"grass",power:12,cat:"physical"},{name:"Sucker Punch",type:"dark",power:9,cat:"physical"}]},

  // LINHA TENTACOOL (#072-073)
  {id:72,name:"Tentacool",types:["water","poison"],rank:"common",hp:40,atk:40,def:35,spatk:50,spdef:100,spd:70,moves:[{name:"Bubble Beam",type:"water",power:9,cat:"special"},{name:"Poison Sting",type:"poison",power:6,cat:"physical"},{name:"Acid",type:"poison",power:6,cat:"special"},{name:"Wrap",type:"normal",power:6,cat:"physical"}]},
  {id:73,name:"Tentacruel",types:["water","poison"],rank:"uncommon",hp:80,atk:70,def:65,spatk:80,spdef:120,spd:100,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Giga Drain",type:"grass",power:10,cat:"special"}]},

  // LINHA GEODUDE (#074-076)
  {id:74,name:"Geodude",types:["rock","ground"],rank:"common",hp:40,atk:80,def:100,spatk:30,spdef:30,spd:20,moves:[{name:"Rock Throw",type:"rock",power:8,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"Magnitude",type:"ground",power:9,cat:"physical"},{name:"Self-Destruct",type:"normal",power:15,cat:"physical"}]},
  {id:75,name:"Graveler",types:["rock","ground"],rank:"uncommon",hp:55,atk:95,def:115,spatk:45,spdef:45,spd:35,moves:[{name:"Rock Slide",type:"rock",power:10,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Explosion",type:"normal",power:20,cat:"physical"}]},
  {id:76,name:"Golem",types:["rock","ground"],rank:"rare",hp:80,atk:120,def:130,spatk:55,spdef:65,spd:45,moves:[{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Explosion",type:"normal",power:20,cat:"physical"},{name:"Thunder Punch",type:"electric",power:10,cat:"physical"}]},

  // LINHA PONYTA (#077-078)
  {id:77,name:"Ponyta",types:["fire"],rank:"common",hp:50,atk:85,def:55,spatk:65,spdef:65,spd:90,moves:[{name:"Ember",type:"fire",power:8,cat:"special"},{name:"Stomp",type:"normal",power:9,cat:"physical"},{name:"Flame Charge",type:"fire",power:8,cat:"physical"},{name:"Bounce",type:"flying",power:11,cat:"physical"}]},
  {id:78,name:"Rapidash",types:["fire"],rank:"uncommon",hp:65,atk:100,def:70,spatk:80,spdef:80,spd:105,moves:[{name:"Flare Blitz",type:"fire",power:15,cat:"physical"},{name:"Megahorn",type:"bug",power:15,cat:"physical"},{name:"Wild Charge",type:"electric",power:12,cat:"physical"},{name:"Poison Jab",type:"poison",power:10,cat:"physical"}]},

  // LINHA SLOWPOKE (#079-080)
  {id:79,name:"Slowpoke",types:["water","psychic"],rank:"common",hp:90,atk:65,def:65,spatk:40,spdef:40,spd:15,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Zen Headbutt",type:"psychic",power:10,cat:"physical"},{name:"Yawn",type:"normal",power:0,cat:"special"}]},
  {id:80,name:"Slowbro",types:["water","psychic"],rank:"uncommon",hp:95,atk:75,def:110,spatk:100,spdef:80,spd:30,moves:[{name:"Surf",type:"water",power:12,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Flamethrower",type:"fire",power:12,cat:"special"}]},

  // LINHA MAGNEMITE (#081-082)
  {id:81,name:"Magnemite",types:["electric","steel"],rank:"common",hp:25,atk:35,def:70,spatk:95,spdef:55,spd:45,moves:[{name:"Thunder Shock",type:"electric",power:6,cat:"special"},{name:"Spark",type:"electric",power:9,cat:"physical"},{name:"Mirror Shot",type:"steel",power:9,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},
  {id:82,name:"Magneton",types:["electric","steel"],rank:"uncommon",hp:50,atk:60,def:95,spatk:120,spdef:70,spd:70,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Flash Cannon",type:"steel",power:10,cat:"special"},{name:"Tri Attack",type:"normal",power:10,cat:"special"},{name:"Discharge",type:"electric",power:10,cat:"special"}]},

  // FARFETCH'D, DODUO, DODRIO (#083-085)
  {id:83,name:"Farfetch'd",types:["normal","flying"],rank:"uncommon",hp:52,atk:90,def:55,spatk:58,spdef:62,spd:60,moves:[{name:"Air Slash",type:"flying",power:10,cat:"special"},{name:"Leaf Blade",type:"grass",power:12,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"Brave Bird",type:"flying",power:15,cat:"physical"}]},
  {id:84,name:"Doduo",types:["normal","flying"],rank:"common",hp:35,atk:85,def:45,spatk:35,spdef:35,spd:75,moves:[{name:"Peck",type:"flying",power:6,cat:"physical"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Drill Peck",type:"flying",power:10,cat:"physical"},{name:"Jump Kick",type:"fighting",power:13,cat:"physical"}]},
  {id:85,name:"Dodrio",types:["normal","flying"],rank:"uncommon",hp:60,atk:110,def:70,spatk:60,spdef:60,spd:110,moves:[{name:"Drill Peck",type:"flying",power:10,cat:"physical"},{name:"Jump Kick",type:"fighting",power:13,cat:"physical"},{name:"Brave Bird",type:"flying",power:15,cat:"physical"},{name:"Quick Attack",type:"normal",power:6,cat:"physical"}]},

  // LINHA SEEL (#086-087)
  {id:86,name:"Seel",types:["water"],rank:"common",hp:65,atk:45,def:55,spatk:45,spdef:70,spd:45,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Ice Shard",type:"ice",power:6,cat:"physical"},{name:"Aqua Jet",type:"water",power:6,cat:"physical"},{name:"Aurora Beam",type:"ice",power:9,cat:"special"}]},
  {id:87,name:"Dewgong",types:["water","ice"],rank:"uncommon",hp:90,atk:70,def:80,spatk:70,spdef:95,spd:70,moves:[{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Surf",type:"water",power:12,cat:"special"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"},{name:"Signal Beam",type:"bug",power:10,cat:"special"}]},

  // LINHA GRIMER (#088-089)
  {id:88,name:"Grimer",types:["poison"],rank:"common",hp:80,atk:80,def:50,spatk:40,spdef:50,spd:25,moves:[{name:"Poison Gas",type:"poison",power:5,cat:"special"},{name:"Sludge",type:"poison",power:9,cat:"special"},{name:"Pound",type:"normal",power:6,cat:"physical"},{name:"Acid Armor",type:"poison",power:0,cat:"special"}]},
  {id:89,name:"Muk",types:["poison"],rank:"uncommon",hp:105,atk:105,def:75,spatk:65,spdef:100,spd:50,moves:[{name:"Gunk Shot",type:"poison",power:15,cat:"physical"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Fire Blast",type:"fire",power:15,cat:"special"}]},

  // LINHA SHELLDER (#090-091)
  {id:90,name:"Shellder",types:["water"],rank:"common",hp:30,atk:65,def:100,spatk:45,spdef:25,spd:40,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Ice Shard",type:"ice",power:6,cat:"physical"},{name:"Icicle Spear",type:"ice",power:10,cat:"physical"},{name:"Withdraw",type:"water",power:0,cat:"special"}]},
  {id:91,name:"Cloyster",types:["water","ice"],rank:"rare",hp:50,atk:95,def:180,spatk:85,spdef:45,spd:70,moves:[{name:"Icicle Spear",type:"ice",power:10,cat:"physical"},{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Explosion",type:"normal",power:20,cat:"physical"}]},

  // LINHA GASTLY (#092-094)
  {id:92,name:"Gastly",types:["ghost","poison"],rank:"uncommon",hp:30,atk:35,def:30,spatk:100,spdef:35,spd:80,moves:[{name:"Lick",type:"ghost",power:6,cat:"physical"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Hex",type:"ghost",power:9,cat:"special"}]},
  {id:93,name:"Haunter",types:["ghost","poison"],rank:"uncommon",hp:45,atk:50,def:45,spatk:115,spdef:55,spd:95,moves:[{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Dark Pulse",type:"dark",power:10,cat:"special"},{name:"Dream Eater",type:"psychic",power:13,cat:"special"}]},
  {id:94,name:"Gengar",types:["ghost","poison"],rank:"rare",hp:60,atk:65,def:60,spatk:130,spdef:75,spd:110,moves:[{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},

  // ONIX, DROWZEE, HYPNO (#095-097)
  {id:95,name:"Onix",types:["rock","ground"],rank:"uncommon",hp:35,atk:45,def:160,spatk:30,spdef:45,spd:70,moves:[{name:"Rock Throw",type:"rock",power:8,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Iron Tail",type:"steel",power:10,cat:"physical"}]},
  {id:96,name:"Drowzee",types:["psychic"],rank:"common",hp:60,atk:48,def:45,spatk:43,spdef:90,spd:42,moves:[{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Headbutt",type:"normal",power:9,cat:"physical"},{name:"Hypnosis",type:"psychic",power:0,cat:"special"}]},
  {id:97,name:"Hypno",types:["psychic"],rank:"uncommon",hp:85,atk:73,def:70,spatk:73,spdef:115,spd:67,moves:[{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Zen Headbutt",type:"psychic",power:10,cat:"physical"}]},

  // LINHA KRABBY (#098-099)
  {id:98,name:"Krabby",types:["water"],rank:"common",hp:30,atk:105,def:90,spatk:25,spdef:25,spd:50,moves:[{name:"Bubble",type:"water",power:6,cat:"special"},{name:"Vice Grip",type:"normal",power:8,cat:"physical"},{name:"Crabhammer",type:"water",power:12,cat:"physical"},{name:"Slam",type:"normal",power:10,cat:"physical"}]},
  {id:99,name:"Kingler",types:["water"],rank:"uncommon",hp:55,atk:130,def:115,spatk:50,spdef:50,spd:75,moves:[{name:"Crabhammer",type:"water",power:12,cat:"physical"},{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Rock Slide",type:"rock",power:10,cat:"physical"},{name:"Slam",type:"normal",power:10,cat:"physical"}]},

  // VOLTORB, ELECTRODE (#100-101)
  {id:100,name:"Voltorb",types:["electric"],rank:"common",hp:40,atk:30,def:50,spatk:55,spdef:55,spd:100,moves:[{name:"Spark",type:"electric",power:9,cat:"physical"},{name:"Charge Beam",type:"electric",power:8,cat:"special"},{name:"Self-Destruct",type:"normal",power:15,cat:"physical"},{name:"Rollout",type:"rock",power:7,cat:"physical"}]},
  {id:101,name:"Electrode",types:["electric"],rank:"uncommon",hp:60,atk:50,def:70,spatk:80,spdef:80,spd:150,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Explosion",type:"normal",power:20,cat:"physical"},{name:"Thunder",type:"electric",power:15,cat:"special"},{name:"Gyro Ball",type:"steel",power:9,cat:"physical"}]},

  // LINHA EXEGGCUTE (#102-103)
  {id:102,name:"Exeggcute",types:["grass","psychic"],rank:"common",hp:60,atk:40,def:80,spatk:60,spdef:45,spd:40,moves:[{name:"Confusion",type:"psychic",power:8,cat:"special"},{name:"Seed Bomb",type:"grass",power:10,cat:"physical"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Barrage",type:"normal",power:7,cat:"physical"}]},
  {id:103,name:"Exeggutor",types:["grass","psychic"],rank:"rare",hp:95,atk:95,def:85,spatk:125,spdef:75,spd:55,moves:[{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Giga Drain",type:"grass",power:10,cat:"special"},{name:"Sludge Bomb",type:"poison",power:12,cat:"special"}]},

  // LINHA CUBONE (#104-105)
  {id:104,name:"Cubone",types:["ground"],rank:"common",hp:50,atk:50,def:95,spatk:40,spdef:50,spd:35,moves:[{name:"Bone Club",type:"ground",power:9,cat:"physical"},{name:"Headbutt",type:"normal",power:9,cat:"physical"},{name:"Bonemerang",type:"ground",power:8,cat:"physical"},{name:"Dig",type:"ground",power:10,cat:"physical"}]},
  {id:105,name:"Marowak",types:["ground"],rank:"uncommon",hp:60,atk:80,def:110,spatk:50,spdef:80,spd:45,moves:[{name:"Bonemerang",type:"ground",power:8,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Outrage",type:"dragon",power:15,cat:"physical"}]},

  // HITMONS (#106-108)
  {id:106,name:"Hitmonlee",types:["fighting"],rank:"rare",hp:50,atk:120,def:53,spatk:35,spdef:110,spd:87,moves:[{name:"High Jump Kick",type:"fighting",power:15,cat:"physical"},{name:"Blaze Kick",type:"fire",power:11,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"}]},
  {id:107,name:"Hitmonchan",types:["fighting"],rank:"rare",hp:50,atk:105,def:79,spatk:35,spdef:110,spd:76,moves:[{name:"Sky Uppercut",type:"fighting",power:11,cat:"physical"},{name:"Thunder Punch",type:"electric",power:10,cat:"physical"},{name:"Fire Punch",type:"fire",power:10,cat:"physical"},{name:"Ice Punch",type:"ice",power:10,cat:"physical"}]},
  {id:108,name:"Lickitung",types:["normal"],rank:"uncommon",hp:90,atk:55,def:75,spatk:60,spdef:75,spd:30,moves:[{name:"Lick",type:"ghost",power:6,cat:"physical"},{name:"Slam",type:"normal",power:10,cat:"physical"},{name:"Power Whip",type:"grass",power:15,cat:"physical"},{name:"Body Slam",type:"normal",power:11,cat:"physical"}]},

  // LINHA KOFFING (#109-110)
  {id:109,name:"Koffing",types:["poison"],rank:"common",hp:40,atk:65,def:95,spatk:60,spdef:45,spd:35,moves:[{name:"Smog",type:"poison",power:7,cat:"special"},{name:"Sludge",type:"poison",power:9,cat:"special"},{name:"Self-Destruct",type:"normal",power:15,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"}]},
  {id:110,name:"Weezing",types:["poison"],rank:"uncommon",hp:65,atk:90,def:120,spatk:85,spdef:70,spd:60,moves:[{name:"Sludge Bomb",type:"poison",power:12,cat:"special"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Explosion",type:"normal",power:20,cat:"physical"}]},

  // LINHA RHYHORN (#111-112)
  {id:111,name:"Rhyhorn",types:["ground","rock"],rank:"common",hp:80,atk:85,def:95,spatk:30,spdef:30,spd:25,moves:[{name:"Horn Attack",type:"normal",power:8,cat:"physical"},{name:"Stomp",type:"normal",power:9,cat:"physical"},{name:"Rock Blast",type:"rock",power:10,cat:"physical"},{name:"Magnitude",type:"ground",power:9,cat:"physical"}]},
  {id:112,name:"Rhydon",types:["ground","rock"],rank:"rare",hp:105,atk:130,def:120,spatk:45,spdef:45,spd:40,moves:[{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Megahorn",type:"bug",power:15,cat:"physical"},{name:"Hammer Arm",type:"fighting",power:13,cat:"physical"}]},

  // CHANSEY, TANGELA, KANGASKHAN (#113-115)
  {id:113,name:"Chansey",types:["normal"],rank:"rare",hp:250,atk:5,def:5,spatk:35,spdef:105,spd:50,moves:[{name:"Pound",type:"normal",power:6,cat:"physical"},{name:"Soft-Boiled",type:"normal",power:0,cat:"special"},{name:"Seismic Toss",type:"fighting",power:10,cat:"physical"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},
  {id:114,name:"Tangela",types:["grass"],rank:"uncommon",hp:65,atk:55,def:115,spatk:100,spdef:40,spd:60,moves:[{name:"Vine Whip",type:"grass",power:8,cat:"physical"},{name:"Power Whip",type:"grass",power:15,cat:"physical"},{name:"Giga Drain",type:"grass",power:10,cat:"special"},{name:"Ancient Power",type:"rock",power:8,cat:"special"}]},
  {id:115,name:"Kangaskhan",types:["normal"],rank:"rare",hp:105,atk:95,def:80,spatk:40,spdef:80,spd:90,moves:[{name:"Dizzy Punch",type:"normal",power:9,cat:"physical"},{name:"Hammer Arm",type:"fighting",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Sucker Punch",type:"dark",power:9,cat:"physical"}]},

  // LINHA HORSEA (#116-117)
  {id:116,name:"Horsea",types:["water"],rank:"common",hp:30,atk:40,def:70,spatk:70,spdef:25,spd:60,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Bubble Beam",type:"water",power:9,cat:"special"},{name:"Dragon Breath",type:"dragon",power:8,cat:"special"},{name:"Twister",type:"dragon",power:6,cat:"special"}]},
  {id:117,name:"Seadra",types:["water"],rank:"uncommon",hp:55,atk:65,def:95,spatk:95,spdef:45,spd:85,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Dragon Pulse",type:"dragon",power:11,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Flash Cannon",type:"steel",power:10,cat:"special"}]},

  // LINHA GOLDEEN (#118-119)
  {id:118,name:"Goldeen",types:["water"],rank:"common",hp:45,atk:67,def:60,spatk:35,spdef:50,spd:63,moves:[{name:"Peck",type:"flying",power:6,cat:"physical"},{name:"Water Pulse",type:"water",power:9,cat:"special"},{name:"Horn Attack",type:"normal",power:8,cat:"physical"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"}]},
  {id:119,name:"Seaking",types:["water"],rank:"uncommon",hp:80,atk:92,def:65,spatk:65,spdef:80,spd:68,moves:[{name:"Waterfall",type:"water",power:10,cat:"physical"},{name:"Megahorn",type:"bug",power:15,cat:"physical"},{name:"Poison Jab",type:"poison",power:10,cat:"physical"},{name:"Ice Beam",type:"ice",power:12,cat:"special"}]},

  // LINHA STARYU (#120-121)
  {id:120,name:"Staryu",types:["water"],rank:"common",hp:30,atk:45,def:55,spatk:70,spdef:55,spd:85,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Psywave",type:"psychic",power:7,cat:"special"},{name:"Bubble Beam",type:"water",power:9,cat:"special"},{name:"Swift",type:"normal",power:9,cat:"special"}]},
  {id:121,name:"Starmie",types:["water","psychic"],rank:"rare",hp:60,atk:75,def:85,spatk:100,spdef:85,spd:115,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},

  // MR. MIME, SCYTHER, JYNX (#122-124)
  {id:122,name:"Mr. Mime",types:["psychic","fairy"],rank:"rare",hp:40,atk:45,def:65,spatk:100,spdef:120,spd:90,moves:[{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Dazzling Gleam",type:"fairy",power:10,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"}]},
  {id:123,name:"Scyther",types:["bug","flying"],rank:"rare",hp:70,atk:110,def:80,spatk:55,spdef:80,spd:105,moves:[{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Aerial Ace",type:"flying",power:9,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"},{name:"Bug Buzz",type:"bug",power:12,cat:"special"}]},
  {id:124,name:"Jynx",types:["ice","psychic"],rank:"rare",hp:65,atk:50,def:35,spatk:115,spdef:95,spd:95,moves:[{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Lovely Kiss",type:"normal",power:0,cat:"special"}]},

  // LINHA ELECTABUZZ, MAGMAR, PINSIR (#125-127)
  {id:125,name:"Electabuzz",types:["electric"],rank:"rare",hp:65,atk:83,def:57,spatk:95,spdef:85,spd:105,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Thunder Punch",type:"electric",power:10,cat:"physical"},{name:"Focus Blast",type:"fighting",power:15,cat:"special"},{name:"Ice Punch",type:"ice",power:10,cat:"physical"}]},
  {id:126,name:"Magmar",types:["fire"],rank:"rare",hp:65,atk:95,def:57,spatk:100,spdef:85,spd:93,moves:[{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Fire Blast",type:"fire",power:15,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Fire Punch",type:"fire",power:10,cat:"physical"}]},
  {id:127,name:"Pinsir",types:["bug"],rank:"rare",hp:65,atk:125,def:100,spatk:55,spdef:70,spd:85,moves:[{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Close Combat",type:"fighting",power:15,cat:"physical"},{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"}]},

  // LINHA TAUROS, MAGIKARP, GYARADOS (#128-130)
  {id:128,name:"Tauros",types:["normal"],rank:"rare",hp:75,atk:100,def:95,spatk:40,spdef:70,spd:110,moves:[{name:"Body Slam",type:"normal",power:11,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Rock Slide",type:"rock",power:10,cat:"physical"},{name:"Zen Headbutt",type:"psychic",power:10,cat:"physical"}]},
  {id:129,name:"Magikarp",types:["water"],rank:"common",hp:20,atk:10,def:55,spatk:15,spdef:20,spd:80,moves:[{name:"Splash",type:"normal",power:0,cat:"special"},{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"Flail",type:"normal",power:8,cat:"physical"},{name:"Bounce",type:"flying",power:11,cat:"physical"}]},
  {id:130,name:"Gyarados",types:["water","flying"],rank:"rare",hp:95,atk:125,def:79,spatk:60,spdef:100,spd:81,moves:[{name:"Waterfall",type:"water",power:10,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Ice Fang",type:"ice",power:9,cat:"physical"}]},

  // LAPRAS, DITTO, EEVEE (#131-133)
  {id:131,name:"Lapras",types:["water","ice"],rank:"rare",hp:130,atk:85,def:80,spatk:85,spdef:95,spd:60,moves:[{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Surf",type:"water",power:12,cat:"special"},{name:"Thunder",type:"electric",power:15,cat:"special"},{name:"Psychic",type:"psychic",power:12,cat:"special"}]},
  {id:132,name:"Ditto",types:["normal"],rank:"uncommon",hp:48,atk:48,def:48,spatk:48,spdef:48,spd:48,moves:[{name:"Transform",type:"normal",power:0,cat:"special"},{name:"Struggle",type:"normal",power:8,cat:"physical"},{name:"Tackle",type:"normal",power:6,cat:"physical"},{name:"Pound",type:"normal",power:6,cat:"physical"}]},
  {id:133,name:"Eevee",types:["normal"],rank:"uncommon",hp:55,atk:55,def:50,spatk:45,spdef:65,spd:55,moves:[{name:"Quick Attack",type:"normal",power:6,cat:"physical"},{name:"Bite",type:"dark",power:8,cat:"physical"},{name:"Swift",type:"normal",power:9,cat:"special"},{name:"Iron Tail",type:"steel",power:10,cat:"physical"}]},

  // EEVEELUTIONS (#134-136)
  {id:134,name:"Vaporeon",types:["water"],rank:"rare",hp:130,atk:65,def:60,spatk:110,spdef:95,spd:65,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"}]},
  {id:135,name:"Jolteon",types:["electric"],rank:"rare",hp:65,atk:65,def:60,spatk:110,spdef:95,spd:130,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Thunder",type:"electric",power:15,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Volt Switch",type:"electric",power:9,cat:"special"}]},
  {id:136,name:"Flareon",types:["fire"],rank:"rare",hp:65,atk:130,def:60,spatk:95,spdef:110,spd:65,moves:[{name:"Flare Blitz",type:"fire",power:15,cat:"physical"},{name:"Fire Blast",type:"fire",power:15,cat:"special"},{name:"Superpower",type:"fighting",power:15,cat:"physical"},{name:"Iron Tail",type:"steel",power:10,cat:"physical"}]},

  // PORYGON, FOSSEIS (#137-142)
  {id:137,name:"Porygon",types:["normal"],rank:"uncommon",hp:65,atk:60,def:70,spatk:85,spdef:75,spd:40,moves:[{name:"Tri Attack",type:"normal",power:10,cat:"special"},{name:"Psybeam",type:"psychic",power:9,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"}]},
  {id:138,name:"Omanyte",types:["rock","water"],rank:"rare",hp:35,atk:40,def:100,spatk:90,spdef:55,spd:35,moves:[{name:"Water Gun",type:"water",power:8,cat:"special"},{name:"Ancient Power",type:"rock",power:8,cat:"special"},{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Rock Blast",type:"rock",power:10,cat:"physical"}]},
  {id:139,name:"Omastar",types:["rock","water"],rank:"rare",hp:70,atk:60,def:125,spatk:115,spdef:70,spd:55,moves:[{name:"Hydro Pump",type:"water",power:15,cat:"special"},{name:"Ancient Power",type:"rock",power:8,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Shell Smash",type:"normal",power:0,cat:"special"}]},
  {id:140,name:"Kabuto",types:["rock","water"],rank:"rare",hp:30,atk:80,def:90,spatk:55,spdef:45,spd:55,moves:[{name:"Scratch",type:"normal",power:6,cat:"physical"},{name:"Ancient Power",type:"rock",power:8,cat:"special"},{name:"Aqua Jet",type:"water",power:6,cat:"physical"},{name:"Slash",type:"normal",power:10,cat:"physical"}]},
  {id:141,name:"Kabutops",types:["rock","water"],rank:"rare",hp:60,atk:115,def:105,spatk:65,spdef:70,spd:80,moves:[{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Waterfall",type:"water",power:10,cat:"physical"},{name:"X-Scissor",type:"bug",power:10,cat:"physical"},{name:"Aqua Jet",type:"water",power:6,cat:"physical"}]},
  {id:142,name:"Aerodactyl",types:["rock","flying"],rank:"rare",hp:80,atk:105,def:65,spatk:60,spdef:75,spd:130,moves:[{name:"Stone Edge",type:"rock",power:13,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Sky Attack",type:"flying",power:14,cat:"physical"}]},

  // SNORLAX (#143)
  {id:143,name:"Snorlax",types:["normal"],rank:"rare",hp:160,atk:110,def:65,spatk:65,spdef:110,spd:30,moves:[{name:"Body Slam",type:"normal",power:11,cat:"physical"},{name:"Crunch",type:"dark",power:10,cat:"physical"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Rest",type:"psychic",power:0,cat:"special"}]},

  // LENDÁRIOS AVES (#144-146)
  {id:144,name:"Articuno",types:["ice","flying"],rank:"legendary",hp:90,atk:85,def:100,spatk:95,spdef:125,spd:85,moves:[{name:"Ice Beam",type:"ice",power:12,cat:"special"},{name:"Hurricane",type:"flying",power:15,cat:"special"},{name:"Freeze-Dry",type:"ice",power:10,cat:"special"},{name:"Ancient Power",type:"rock",power:8,cat:"special"}]},
  {id:145,name:"Zapdos",types:["electric","flying"],rank:"legendary",hp:90,atk:90,def:85,spatk:125,spdef:90,spd:100,moves:[{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Hurricane",type:"flying",power:15,cat:"special"},{name:"Heat Wave",type:"fire",power:12,cat:"special"},{name:"Thunder",type:"electric",power:15,cat:"special"}]},
  {id:146,name:"Moltres",types:["fire","flying"],rank:"legendary",hp:90,atk:100,def:90,spatk:125,spdef:85,spd:90,moves:[{name:"Fire Blast",type:"fire",power:15,cat:"special"},{name:"Hurricane",type:"flying",power:15,cat:"special"},{name:"Solar Beam",type:"grass",power:15,cat:"special"},{name:"Ancient Power",type:"rock",power:8,cat:"special"}]},

  // LINHA DRATINI + MEWTWO + MEW (#147-151)
  {id:147,name:"Dratini",types:["dragon"],rank:"uncommon",hp:41,atk:64,def:45,spatk:50,spdef:50,spd:50,moves:[{name:"Dragon Breath",type:"dragon",power:8,cat:"special"},{name:"Twister",type:"dragon",power:6,cat:"special"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"},{name:"Dragon Pulse",type:"dragon",power:11,cat:"special"}]},
  {id:148,name:"Dragonair",types:["dragon"],rank:"rare",hp:61,atk:84,def:65,spatk:70,spdef:70,spd:70,moves:[{name:"Dragon Pulse",type:"dragon",power:11,cat:"special"},{name:"Aqua Tail",type:"water",power:11,cat:"physical"},{name:"Thunderbolt",type:"electric",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"}]},
  {id:149,name:"Dragonite",types:["dragon","flying"],rank:"rare",hp:91,atk:134,def:95,spatk:100,spdef:100,spd:80,moves:[{name:"Outrage",type:"dragon",power:15,cat:"physical"},{name:"Hurricane",type:"flying",power:15,cat:"special"},{name:"Earthquake",type:"ground",power:13,cat:"physical"},{name:"Dragon Claw",type:"dragon",power:10,cat:"physical"}]},
  {id:150,name:"Mewtwo",types:["psychic"],rank:"legendary",hp:106,atk:110,def:90,spatk:154,spdef:90,spd:130,moves:[{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Shadow Ball",type:"ghost",power:12,cat:"special"},{name:"Aura Sphere",type:"fighting",power:10,cat:"special"},{name:"Psystrike",type:"psychic",power:15,cat:"special"}]},
  {id:151,name:"Mew",types:["psychic"],rank:"legendary",hp:100,atk:100,def:100,spatk:100,spdef:100,spd:100,moves:[{name:"Psychic",type:"psychic",power:12,cat:"special"},{name:"Aura Sphere",type:"fighting",power:10,cat:"special"},{name:"Flamethrower",type:"fire",power:12,cat:"special"},{name:"Ice Beam",type:"ice",power:12,cat:"special"}]}
];
