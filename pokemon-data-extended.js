// POKÉMON DATA EXTENDED - Dados Completos para Pokédex
// Inclui: Habilidades, Evolução, Locais, Descrição, Stats Físicos

const POKEMON_EXTENDED = {
  // FAMÍLIA BULBASAUR (#001-003)
  1: {
    abilities: ["Overgrow", "Chlorophyll (Hidden)"],
    evolution: { method: "level", condition: "Level 16", evolvesTo: 2, evolvesFrom: null },
    locations: [
      { area: "Pokémon Inicial", method: "starter", rarity: "único", level: "5" },
      { area: "Route 24 (Gift)", method: "event", rarity: "único", level: "10" }
    ],
    height: 0.7, weight: 6.9, captureRate: 45,
    description: "Pokémon Semente. Há uma semente de planta nas suas costas desde o nascimento. A semente cresce lentamente conforme ele evolui.",
    eggGroup: "Monster/Grass", baseExp: 64
  },
  2: {
    abilities: ["Overgrow", "Chlorophyll (Hidden)"],
    evolution: { method: "level", condition: "Level 32", evolvesTo: 3, evolvesFrom: 1 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "16+" }
    ],
    height: 1.0, weight: 13.0, captureRate: 45,
    description: "Quando o bulbo nas costas cresce, ele parece perder a habilidade de ficar em pé nas patas traseiras.",
    eggGroup: "Monster/Grass", baseExp: 142
  },
  3: {
    abilities: ["Overgrow", "Chlorophyll (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 2 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "32+" }
    ],
    height: 2.0, weight: 100.0, captureRate: 45,
    description: "A planta floresce quando está absorvendo energia solar. Permanece em movimento para buscar luz solar.",
    eggGroup: "Monster/Grass", baseExp: 236
  },

  // FAMÍLIA CHARMANDER (#004-006)
  4: {
    abilities: ["Blaze", "Solar Power (Hidden)"],
    evolution: { method: "level", condition: "Level 16", evolvesTo: 5, evolvesFrom: null },
    locations: [
      { area: "Pokémon Inicial", method: "starter", rarity: "único", level: "5" },
      { area: "Rock Tunnel", method: "grass", rarity: "raro", level: "12-15" }
    ],
    height: 0.6, weight: 8.5, captureRate: 45,
    description: "Obviamente prefere lugares quentes. Quando chove, vapor é dito sair da ponta de sua cauda.",
    eggGroup: "Monster/Dragon", baseExp: 62
  },
  5: {
    abilities: ["Blaze", "Solar Power (Hidden)"],
    evolution: { method: "level", condition: "Level 36", evolvesTo: 6, evolvesFrom: 4 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "16+" }
    ],
    height: 1.1, weight: 19.0, captureRate: 45,
    description: "Quando balança sua cauda flamejante, ela aumenta progressivamente a temperatura ao seu redor.",
    eggGroup: "Monster/Dragon", baseExp: 142
  },
  6: {
    abilities: ["Blaze", "Solar Power (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 5 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "36+" }
    ],
    height: 1.7, weight: 90.5, captureRate: 45,
    description: "Cospe fogo tão quente que pode derreter pedras. Conhecido por causar incêndios florestais não intencionais.",
    eggGroup: "Monster/Dragon", baseExp: 240
  },

  // FAMÍLIA SQUIRTLE (#007-009)
  7: {
    abilities: ["Torrent", "Rain Dish (Hidden)"],
    evolution: { method: "level", condition: "Level 16", evolvesTo: 8, evolvesFrom: null },
    locations: [
      { area: "Pokémon Inicial", method: "starter", rarity: "único", level: "5" },
      { area: "Route 24 (Gift)", method: "event", rarity: "único", level: "10" }
    ],
    height: 0.5, weight: 9.0, captureRate: 45,
    description: "Após o nascimento, suas costas incham e endurecem formando um casco. Jatos d'água em sua boca são muito precisos.",
    eggGroup: "Monster/Water 1", baseExp: 63
  },
  8: {
    abilities: ["Torrent", "Rain Dish (Hidden)"],
    evolution: { method: "level", condition: "Level 36", evolvesTo: 9, evolvesFrom: 7 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "16+" }
    ],
    height: 1.0, weight: 22.5, captureRate: 45,
    description: "Considerado uma forma de longevidade. É venerado como um símbolo de sorte e muitas vezes retratado em arte.",
    eggGroup: "Monster/Water 1", baseExp: 142
  },
  9: {
    abilities: ["Torrent", "Rain Dish (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 8 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "36+" }
    ],
    height: 1.6, weight: 85.5, captureRate: 45,
    description: "Um Pokémon brutal com pressão de jato d'água o suficiente para perfurar aço espesso. É usado para missões táticas.",
    eggGroup: "Monster/Water 1", baseExp: 239
  },

  // PIKACHU E RAICHU (#025-026)
  25: {
    abilities: ["Static", "Lightning Rod (Hidden)"],
    evolution: { method: "stone", condition: "Thunder Stone", evolvesTo: 26, evolvesFrom: null },
    locations: [
      { area: "Viridian Forest", method: "grass", rarity: "incomum", level: "3-5" },
      { area: "Power Plant", method: "grass", rarity: "comum", level: "21-23" },
      { area: "Safari Zone", method: "grass", rarity: "raro", level: "23-25" }
    ],
    height: 0.4, weight: 6.0, captureRate: 190,
    description: "Quando vários destes Pokémon se reúnem, sua eletricidade pode criar tempestades.",
    eggGroup: "Field/Fairy", baseExp: 112
  },
  26: {
    abilities: ["Static", "Lightning Rod (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 25 },
    locations: [
      { area: "Evolução (Thunder Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 0.8, weight: 30.0, captureRate: 75,
    description: "Sua longa cauda serve como um fio terra para proteger de sua própria alta voltagem.",
    eggGroup: "Field/Fairy", baseExp: 218
  },

  // NIDORAN E EVOLUÇÕES (#029-034)
  29: {
    abilities: ["Poison Point", "Rivalry", "Hustle (Hidden)"],
    evolution: { method: "level", condition: "Level 16", evolvesTo: 30, evolvesFrom: null },
    locations: [
      { area: "Route 22", method: "grass", rarity: "comum", level: "2-4" },
      { area: "Safari Zone", method: "grass", rarity: "comum", level: "23-25" }
    ],
    height: 0.4, weight: 7.0, captureRate: 235,
    description: "Embora pequeno, seus chifres venenosos são perigosos. A fêmea tem chifres menores.",
    eggGroup: "Monster/Field", baseExp: 55
  },
  30: {
    abilities: ["Poison Point", "Rivalry", "Hustle (Hidden)"],
    evolution: { method: "stone", condition: "Moon Stone", evolvesTo: 31, evolvesFrom: 29 },
    locations: [
      { area: "Route 9", method: "grass", rarity: "incomum", level: "13-15" },
      { area: "Safari Zone", method: "grass", rarity: "incomum", level: "24-26" }
    ],
    height: 0.8, weight: 20.0, captureRate: 120,
    description: "O chifre da fêmea se desenvolve lentamente. Prefere ataques físicos como arranhões e mordidas.",
    eggGroup: "Undiscovered", baseExp: 128
  },
  31: {
    abilities: ["Poison Point", "Rivalry", "Sheer Force (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 30 },
    locations: [
      { area: "Evolução (Moon Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 1.3, weight: 60.0, captureRate: 45,
    description: "Corpo coberto com agulhas extremamente duras. Pode tombar um caminhão pesado com um braço.",
    eggGroup: "Undiscovered", baseExp: 227
  },

  32: {
    abilities: ["Poison Point", "Rivalry", "Hustle (Hidden)"],
    evolution: { method: "level", condition: "Level 16", evolvesTo: 33, evolvesFrom: null },
    locations: [
      { area: "Route 22", method: "grass", rarity: "comum", level: "2-4" },
      { area: "Safari Zone", method: "grass", rarity: "comum", level: "23-25" }
    ],
    height: 0.5, weight: 9.0, captureRate: 235,
    description: "Endurece suas orelhas para sentir perigo. Quanto maiores os chifres, mais poderoso o veneno.",
    eggGroup: "Monster/Field", baseExp: 55
  },
  33: {
    abilities: ["Poison Point", "Rivalry", "Hustle (Hidden)"],
    evolution: { method: "stone", condition: "Moon Stone", evolvesTo: 34, evolvesFrom: 32 },
    locations: [
      { area: "Route 9", method: "grass", rarity: "incomum", level: "13-15" },
      { area: "Safari Zone", method: "grass", rarity: "incomum", level: "24-26" }
    ],
    height: 0.9, weight: 19.5, captureRate: 120,
    description: "Um chifre agressivo que é rápido para atacar. O chifre em sua testa contém um veneno poderoso.",
    eggGroup: "Monster/Field", baseExp: 128
  },
  34: {
    abilities: ["Poison Point", "Rivalry", "Sheer Force (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 33 },
    locations: [
      { area: "Evolução (Moon Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 1.4, weight: 62.0, captureRate: 45,
    description: "Reconhecido por seu poderoso chifre venenoso que cresce nas costas e sua cauda brutal.",
    eggGroup: "Monster/Field", baseExp: 227
  },

  // CLEFAIRY E CLEFABLE (#035-036)
  35: {
    abilities: ["Cute Charm", "Magic Guard", "Friend Guard (Hidden)"],
    evolution: { method: "stone", condition: "Moon Stone", evolvesTo: 36, evolvesFrom: null },
    locations: [
      { area: "Mt. Moon", method: "grass", rarity: "raro", level: "8-10" },
      { area: "Mt. Moon Square (Noite)", method: "event", rarity: "incomum", level: "8-12" }
    ],
    height: 0.6, weight: 7.5, captureRate: 150,
    description: "Suas asas mágicas permitem que ele flutue no ar. É dito que ele aparece em noites de lua cheia.",
    eggGroup: "Fairy", baseExp: 113
  },
  36: {
    abilities: ["Cute Charm", "Magic Guard", "Unaware (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 35 },
    locations: [
      { area: "Evolução (Moon Stone)", method: "evolution", rarity: "-", level: "stone" },
      { area: "Cerulean Cave", method: "grass", rarity: "muito raro", level: "51-54" }
    ],
    height: 1.3, weight: 40.0, captureRate: 25,
    description: "Um Pokémon tímido que é raramente visto. Ele corre e se esconde quando sente pessoas se aproximarem.",
    eggGroup: "Fairy", baseExp: 217
  },

  // GEODUDE, GRAVELER, GOLEM (#074-076)
  74: {
    abilities: ["Rock Head", "Sturdy", "Sand Veil (Hidden)"],
    evolution: { method: "level", condition: "Level 25", evolvesTo: 75, evolvesFrom: null },
    locations: [
      { area: "Mt. Moon", method: "grass", rarity: "comum", level: "8-10" },
      { area: "Rock Tunnel", method: "grass", rarity: "muito comum", level: "15-17" },
      { area: "Victory Road", method: "grass", rarity: "comum", level: "40-44" }
    ],
    height: 0.4, weight: 20.0, captureRate: 255,
    description: "Encontrado em campos e montanhas. Confundido com pedras, as pessoas tropeçam neles ou os pisam.",
    eggGroup: "Mineral", baseExp: 60
  },
  75: {
    abilities: ["Rock Head", "Sturdy", "Sand Veil (Hidden)"],
    evolution: { method: "trade", condition: "Trade", evolvesTo: 76, evolvesFrom: 74 },
    locations: [
      { area: "Rock Tunnel", method: "grass", rarity: "incomum", level: "17-19" },
      { area: "Victory Road", method: "grass", rarity: "incomum", level: "42-46" }
    ],
    height: 1.0, weight: 105.0, captureRate: 120,
    description: "Rola descendo ladeiras para se mover. Ele rola sobre obstáculos sem diminuir a velocidade ou mudar de direção.",
    eggGroup: "Mineral", baseExp: 137
  },
  76: {
    abilities: ["Rock Head", "Sturdy", "Sand Veil (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 75 },
    locations: [
      { area: "Evolução (Trade)", method: "evolution", rarity: "-", level: "trade" }
    ],
    height: 1.4, weight: 300.0, captureRate: 45,
    description: "Seu corpo duro como pedra pode suportar dinamite. Uma vez por ano, ele troca sua pele e cresce.",
    eggGroup: "Mineral", baseExp: 223
  },

  // GASTLY, HAUNTER, GENGAR (#092-094)
  92: {
    abilities: ["Levitate"],
    evolution: { method: "level", condition: "Level 25", evolvesTo: 93, evolvesFrom: null },
    locations: [
      { area: "Pokémon Tower", method: "grass", rarity: "muito comum", level: "13-15" },
      { area: "Pokémon Tower (Night)", method: "grass", rarity: "muito comum", level: "15-17" }
    ],
    height: 1.3, weight: 0.1, captureRate: 190,
    description: "Quase invisível, este Pokémon gasoso mata envolvendo seus oponentes em seu corpo de gás.",
    eggGroup: "Amorphous", baseExp: 62
  },
  93: {
    abilities: ["Levitate"],
    evolution: { method: "trade", condition: "Trade", evolvesTo: 94, evolvesFrom: 92 },
    locations: [
      { area: "Pokémon Tower", method: "grass", rarity: "incomum", level: "17-19" },
      { area: "Pokémon Tower (Night)", method: "grass", rarity: "comum", level: "18-20" }
    ],
    height: 1.6, weight: 0.1, captureRate: 90,
    description: "Por andar com sua língua para fora, se você subitamente sentir um calafrio, há um Haunter lambendo você.",
    eggGroup: "Amorphous", baseExp: 142
  },
  94: {
    abilities: ["Cursed Body"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 93 },
    locations: [
      { area: "Evolução (Trade)", method: "evolution", rarity: "-", level: "trade" },
      { area: "Cerulean Cave", method: "grass", rarity: "muito raro", level: "52-56" }
    ],
    height: 1.5, weight: 40.5, captureRate: 45,
    description: "Sob a luz de uma lua cheia, esta sombra se move livremente. Algumas pessoas acreditam que ele leva pessoas para a morte.",
    eggGroup: "Amorphous", baseExp: 225
  },

  // MAGIKARP E GYARADOS (#129-130)
  129: {
    abilities: ["Swift Swim", "Rattled (Hidden)"],
    evolution: { method: "level", condition: "Level 20", evolvesTo: 130, evolvesFrom: null },
    locations: [
      { area: "Qualquer água (Fishing)", method: "fishing", rarity: "muito comum", level: "5-15" },
      { area: "Route 4, 6, 10, 11, 12...", method: "fishing", rarity: "muito comum", level: "5-40" }
    ],
    height: 0.9, weight: 10.0, captureRate: 255,
    description: "Famoso por ser muito fraco. Alguns pesquisadores afirmam que pode saltar mais de 2 metros de altura.",
    eggGroup: "Water 2/Dragon", baseExp: 40
  },
  130: {
    abilities: ["Intimidate", "Moxie (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 129 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "20+" },
      { area: "Seafoam Islands (Fishing)", method: "fishing", rarity: "raro", level: "35-45" }
    ],
    height: 6.5, weight: 235.0, captureRate: 45,
    description: "Raramente visto na natureza. Grande e vicioso, é capaz de destruir cidades inteiras em um ataque de fúria.",
    eggGroup: "Water 2/Dragon", baseExp: 189
  },

  // EEVEE E EVOLUÇÕES (#133-136)
  133: {
    abilities: ["Run Away", "Adaptability", "Anticipation (Hidden)"],
    evolution: {
      method: "special",
      condition: "Water Stone → Vaporeon | Thunder Stone → Jolteon | Fire Stone → Flareon",
      evolvesTo: [134, 135, 136],
      evolvesFrom: null
    },
    locations: [
      { area: "Celadon Mansion (Gift)", method: "event", rarity: "único", level: "25" },
      { area: "Route 17 (Hidden)", method: "hidden", rarity: "muito raro", level: "25-27" }
    ],
    height: 0.3, weight: 6.5, captureRate: 45,
    description: "Sua composição genética irregular torna possível que ele evolua para várias formas diferentes.",
    eggGroup: "Field", baseExp: 65
  },
  134: {
    abilities: ["Water Absorb", "Hydration (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 133 },
    locations: [
      { area: "Evolução (Water Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 1.0, weight: 29.0, captureRate: 45,
    description: "Vive perto da água. Sua cauda longa em formato de barbatana é coberta com uma escama delicadamente azul.",
    eggGroup: "Field", baseExp: 184
  },
  135: {
    abilities: ["Volt Absorb", "Quick Feet (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 133 },
    locations: [
      { area: "Evolução (Thunder Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 0.8, weight: 24.5, captureRate: 45,
    description: "Capaz de armazenar eletricidade, cada fio de cabelo fica de pé se ele estiver carregado.",
    eggGroup: "Field", baseExp: 184
  },
  136: {
    abilities: ["Flash Fire", "Guts (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 133 },
    locations: [
      { area: "Evolução (Fire Stone)", method: "evolution", rarity: "-", level: "stone" }
    ],
    height: 0.9, weight: 25.0, captureRate: 45,
    description: "Quando armazena energia térmica em seu corpo, sua temperatura pode chegar a 1.700 graus.",
    eggGroup: "Field", baseExp: 184
  },

  // LENDÁRIOS (#144-146, 150-151)
  144: {
    abilities: ["Pressure", "Snow Cloak (Hidden)"],
    evolution: { method: "legendary", condition: "-", evolvesTo: null, evolvesFrom: null },
    locations: [
      { area: "Seafoam Islands (B4F)", method: "legendary", rarity: "único", level: "50" }
    ],
    height: 1.7, weight: 55.4, captureRate: 3,
    description: "Um Pokémon pássaro lendário que se diz aparecer apenas em climas frios onde há montanhas nevadas.",
    eggGroup: "Undiscovered", baseExp: 261
  },
  145: {
    abilities: ["Pressure", "Static (Hidden)"],
    evolution: { method: "legendary", condition: "-", evolvesTo: null, evolvesFrom: null },
    locations: [
      { area: "Power Plant", method: "legendary", rarity: "único", level: "50" }
    ],
    height: 1.6, weight: 52.6, captureRate: 3,
    description: "Um Pokémon pássaro lendário que se diz aparecer quando há tempestade de raios.",
    eggGroup: "Undiscovered", baseExp: 261
  },
  146: {
    abilities: ["Pressure", "Flame Body (Hidden)"],
    evolution: { method: "legendary", condition: "-", evolvesTo: null, evolvesFrom: null },
    locations: [
      { area: "Victory Road (2F)", method: "legendary", rarity: "único", level: "50" }
    ],
    height: 2.0, weight: 60.0, captureRate: 3,
    description: "Um dos pássaros lendários. Dizem que apareça somente onde há vulcões ativos.",
    eggGroup: "Undiscovered", baseExp: 261
  },
  150: {
    abilities: ["Pressure", "Unnerve (Hidden)"],
    evolution: { method: "legendary", condition: "-", evolvesTo: null, evolvesFrom: null },
    locations: [
      { area: "Cerulean Cave (B1F)", method: "legendary", rarity: "único", level: "70" }
    ],
    height: 2.0, weight: 122.0, captureRate: 3,
    description: "Criado por um cientista após anos de experimentos de engenharia genética horríveis.",
    eggGroup: "Undiscovered", baseExp: 306
  },
  151: {
    abilities: ["Synchronize"],
    evolution: { method: "legendary", condition: "-", evolvesTo: null, evolvesFrom: null },
    locations: [
      { area: "Evento Especial", method: "event", rarity: "único", level: "5" }
    ],
    height: 0.4, weight: 4.0, captureRate: 45,
    description: "Muitos cientistas o veem como o ancestral de todos os Pokémon, pois pode aprender qualquer movimento.",
    eggGroup: "Undiscovered", baseExp: 270
  },

  // DRAGONITE LINHA (#147-149)
  147: {
    abilities: ["Shed Skin", "Marvel Scale (Hidden)"],
    evolution: { method: "level", condition: "Level 30", evolvesTo: 148, evolvesFrom: null },
    locations: [
      { area: "Safari Zone (Fishing)", method: "fishing", rarity: "raro", level: "10-15" },
      { area: "Dragon's Den (Fishing)", method: "fishing", rarity: "incomum", level: "10-20" }
    ],
    height: 1.8, weight: 3.3, captureRate: 45,
    description: "Considerado um Pokémon mítico até recentemente quando um pequeno grupo foi encontrado vivendo no subsolo.",
    eggGroup: "Water 1/Dragon", baseExp: 60
  },
  148: {
    abilities: ["Shed Skin", "Marvel Scale (Hidden)"],
    evolution: { method: "level", condition: "Level 55", evolvesTo: 149, evolvesFrom: 147 },
    locations: [
      { area: "Safari Zone (Fishing)", method: "fishing", rarity: "muito raro", level: "30-35" },
      { area: "Dragon's Den (Fishing)", method: "fishing", rarity: "raro", level: "25-30" }
    ],
    height: 4.0, weight: 16.5, captureRate: 45,
    description: "Um Pokémon místico que exala uma aura suave. Pode controlar o clima mudando sua energia.",
    eggGroup: "Water 1/Dragon", baseExp: 147
  },
  149: {
    abilities: ["Inner Focus", "Multiscale (Hidden)"],
    evolution: { method: "final", condition: "-", evolvesTo: null, evolvesFrom: 148 },
    locations: [
      { area: "Evolução", method: "evolution", rarity: "-", level: "55+" },
      { area: "Dragon's Den (Gift)", method: "event", rarity: "único", level: "15" }
    ],
    height: 2.2, weight: 210.0, captureRate: 45,
    description: "Um Pokémon marinho extremamente raro. Sua inteligência é dita ser igual à dos humanos.",
    eggGroup: "Water 1/Dragon", baseExp: 270
  }
};

// LOCALIZAÇÕES COMPLETAS (Referência para Mestres)
const GAME_LOCATIONS = {
  routes: [
    "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
    "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
    "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
    "Route 19", "Route 20", "Route 21", "Route 22", "Route 23", "Route 24", "Route 25"
  ],
  dungeons: [
    "Viridian Forest", "Mt. Moon", "Rock Tunnel", "Pokémon Tower",
    "Silph Co.", "Pokémon Mansion", "Seafoam Islands", "Victory Road",
    "Cerulean Cave", "Power Plant", "Safari Zone"
  ],
  cities: [
    "Pallet Town", "Viridian City", "Pewter City", "Cerulean City",
    "Vermilion City", "Lavender Town", "Celadon City", "Fuchsia City",
    "Saffron City", "Cinnabar Island", "Indigo Plateau"
  ],
  water: [
    "S.S. Anne", "Cinnabar Gym (Fishing)", "Seafoam Islands (Surf)",
    "Route 12-19 (Fishing)", "Safari Zone (Fishing)"
  ]
};

// MÉTODOS DE ENCONTRO
const ENCOUNTER_METHODS = {
  grass: { icon: "🌿", name: "Grama Alta", description: "Ande pela grama alta" },
  fishing: { icon: "🎣", name: "Pescando", description: "Use Fishing Rod" },
  surfing: { icon: "🌊", name: "Surf", description: "Use HM Surf" },
  cave: { icon: "⛰️", name: "Caverna", description: "Dentro de cavernas" },
  starter: { icon: "⭐", name: "Inicial", description: "Pokémon inicial do Professor" },
  event: { icon: "🎁", name: "Evento/Gift", description: "Recebido por NPC ou evento" },
  legendary: { icon: "👑", name: "Lendário", description: "Encontro único especial" },
  evolution: { icon: "✨", name: "Evolução", description: "Evoluído de outro Pokémon" },
  trade: { icon: "🔄", name: "Troca", description: "Obtido através de troca" },
  hidden: { icon: "🔍", name: "Oculto", description: "Encontro muito raro/escondido" }
};

// RARIDADES
const RARITY_RATES = {
  "muito comum": { rate: "40-60%", color: "#AAA", difficulty: 6 },
  "comum": { rate: "25-40%", color: "#888", difficulty: 7 },
  "incomum": { rate: "10-25%", color: "#FFA500", difficulty: 8 },
  "raro": { rate: "5-10%", color: "#FF6347", difficulty: 9 },
  "muito raro": { rate: "1-5%", color: "#DC143C", difficulty: 10 },
  "único": { rate: "1x", color: "#FFD700", difficulty: 12 }
};
