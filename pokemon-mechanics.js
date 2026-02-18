// ═══════════════════════════════════════════════════════════════
// POKÉMON RPG - MECÂNICAS E SISTEMAS AVANÇADOS
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// SISTEMA DE NATUREZAS (Natures)
// ─────────────────────────────────────────────────────────────
const NATURES = {
  hardy: { name: "Hardy", modifiers: {} },
  lonely: { name: "Lonely", modifiers: { atk: 1.1, def: 0.9 } },
  brave: { name: "Brave", modifiers: { atk: 1.1, spd: 0.9 } },
  adamant: { name: "Adamant", modifiers: { atk: 1.1, spatk: 0.9 } },
  naughty: { name: "Naughty", modifiers: { atk: 1.1, spdef: 0.9 } },

  bold: { name: "Bold", modifiers: { def: 1.1, atk: 0.9 } },
  relaxed: { name: "Relaxed", modifiers: { def: 1.1, spd: 0.9 } },
  impish: { name: "Impish", modifiers: { def: 1.1, spatk: 0.9 } },
  lax: { name: "Lax", modifiers: { def: 1.1, spdef: 0.9 } },

  timid: { name: "Timid", modifiers: { spd: 1.1, atk: 0.9 } },
  hasty: { name: "Hasty", modifiers: { spd: 1.1, def: 0.9 } },
  jolly: { name: "Jolly", modifiers: { spd: 1.1, spatk: 0.9 } },
  naive: { name: "Naive", modifiers: { spd: 1.1, spdef: 0.9 } },

  modest: { name: "Modest", modifiers: { spatk: 1.1, atk: 0.9 } },
  mild: { name: "Mild", modifiers: { spatk: 1.1, def: 0.9 } },
  quiet: { name: "Quiet", modifiers: { spatk: 1.1, spd: 0.9 } },
  rash: { name: "Rash", modifiers: { spatk: 1.1, spdef: 0.9 } },

  calm: { name: "Calm", modifiers: { spdef: 1.1, atk: 0.9 } },
  gentle: { name: "Gentle", modifiers: { spdef: 1.1, def: 0.9 } },
  sassy: { name: "Sassy", modifiers: { spdef: 1.1, spd: 0.9 } },
  careful: { name: "Careful", modifiers: { spdef: 1.1, spatk: 0.9 } },

  quirky: { name: "Quirky", modifiers: {} },
  docile: { name: "Docile", modifiers: {} },
  bashful: { name: "Bashful", modifiers: {} },
  serious: { name: "Serious", modifiers: {} }
};

// ─────────────────────────────────────────────────────────────
// SISTEMA DE MOVIMENTOS POR NÍVEL
// ─────────────────────────────────────────────────────────────
const LEARNSETS = {
  // BULBASAUR LINE
  1: { // Bulbasaur
    1: ["Tackle", "Growl"],
    7: ["Vine Whip"],
    13: ["Poison Powder"],
    19: ["Razor Leaf"],
    25: ["Growth"],
    31: ["Sleep Powder"],
    37: ["Take Down"]
  },
  2: { // Ivysaur
    1: ["Tackle", "Growl", "Vine Whip", "Poison Powder"],
    22: ["Razor Leaf"],
    29: ["Growth"],
    38: ["Sleep Powder"],
    47: ["Solar Beam"]
  },
  3: { // Venusaur
    1: ["Tackle", "Growl", "Vine Whip", "Poison Powder"],
    32: ["Petal Dance"],
    39: ["Growth"],
    48: ["Sleep Powder"],
    65: ["Solar Beam"]
  },

  // CHARMANDER LINE
  4: { // Charmander
    1: ["Scratch", "Growl"],
    7: ["Ember"],
    13: ["Smokescreen"],
    19: ["Dragon Rage"],
    25: ["Scary Face"],
    31: ["Flamethrower"],
    37: ["Slash"],
    43: ["Fire Spin"]
  },
  5: { // Charmeleon
    1: ["Scratch", "Growl", "Ember", "Smokescreen"],
    20: ["Dragon Rage"],
    27: ["Scary Face"],
    34: ["Flamethrower"],
    41: ["Slash"],
    48: ["Fire Spin"]
  },
  6: { // Charizard
    1: ["Scratch", "Growl", "Ember", "Smokescreen"],
    36: ["Wing Attack"],
    44: ["Flamethrower"],
    54: ["Slash"],
    64: ["Fire Blast"]
  },

  // SQUIRTLE LINE
  7: { // Squirtle
    1: ["Tackle", "Tail Whip"],
    7: ["Bubble"],
    13: ["Water Gun"],
    19: ["Bite"],
    25: ["Withdraw"],
    31: ["Skull Bash"],
    37: ["Water Pulse"],
    43: ["Hydro Pump"]
  },
  8: { // Wartortle
    1: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
    20: ["Bite"],
    27: ["Withdraw"],
    34: ["Skull Bash"],
    41: ["Water Pulse"],
    48: ["Hydro Pump"]
  },
  9: { // Blastoise
    1: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
    36: ["Rain Dance"],
    44: ["Skull Bash"],
    55: ["Water Pulse"],
    66: ["Hydro Pump"]
  },

  // PIKACHU LINE
  25: { // Pikachu
    1: ["Thunder Shock", "Growl"],
    6: ["Tail Whip"],
    10: ["Thunder Wave"],
    14: ["Quick Attack"],
    18: ["Double Team"],
    23: ["Slam"],
    28: ["Thunderbolt"],
    34: ["Agility"],
    40: ["Thunder"],
    46: ["Light Screen"]
  },
  26: { // Raichu
    1: ["Thunder Shock", "Growl", "Thunder Wave", "Quick Attack"],
    1: ["Thunderbolt"], // Evolução
    35: ["Thunder"],
    50: ["Light Screen"]
  }
};

// ─────────────────────────────────────────────────────────────
// BANCO DE MOVIMENTOS COMPLETO
// ─────────────────────────────────────────────────────────────
const MOVES_DATABASE = {
  // Normal
  "Tackle": { type: "normal", power: 6, cat: "physical", description: "Ataque físico básico" },
  "Scratch": { type: "normal", power: 6, cat: "physical", description: "Arranha o inimigo" },
  "Pound": { type: "normal", power: 6, cat: "physical", description: "Golpeia com a pata" },
  "Growl": { type: "normal", power: 0, cat: "status", description: "Reduz ATK do inimigo" },
  "Tail Whip": { type: "normal", power: 0, cat: "status", description: "Reduz DEF do inimigo" },
  "Quick Attack": { type: "normal", power: 6, cat: "physical", description: "Sempre ataca primeiro" },
  "Hyper Fang": { type: "normal", power: 10, cat: "physical", description: "Mordida poderosa" },
  "Slash": { type: "normal", power: 10, cat: "physical", description: "Alta chance de crítico" },
  "Body Slam": { type: "normal", power: 11, cat: "physical", description: "Pode paralisar" },
  "Take Down": { type: "normal", power: 12, cat: "physical", description: "Causa recuo ao usuário" },
  "Hyper Voice": { type: "normal", power: 12, cat: "special", description: "Grito ensurdecedor" },

  // Fire
  "Ember": { type: "fire", power: 8, cat: "special", description: "Pequenas chamas" },
  "Fire Fang": { type: "fire", power: 9, cat: "physical", description: "Mordida flamejante" },
  "Flamethrower": { type: "fire", power: 12, cat: "special", description: "Jato de chamas intenso" },
  "Fire Blast": { type: "fire", power: 15, cat: "special", description: "Explosão de fogo massiva" },
  "Fire Spin": { type: "fire", power: 8, cat: "special", description: "Aprisiona em chamas" },
  "Flare Blitz": { type: "fire", power: 15, cat: "physical", description: "Investida flamejante" },

  // Water
  "Bubble": { type: "water", power: 6, cat: "special", description: "Dispara bolhas" },
  "Water Gun": { type: "water", power: 8, cat: "special", description: "Jato de água" },
  "Water Pulse": { type: "water", power: 9, cat: "special", description: "Onda sônica aquática" },
  "Surf": { type: "water", power: 12, cat: "special", description: "Onda gigante" },
  "Hydro Pump": { type: "water", power: 15, cat: "special", description: "Jato d'água devastador" },
  "Aqua Tail": { type: "water", power: 11, cat: "physical", description: "Cauda aquática" },

  // Grass
  "Vine Whip": { type: "grass", power: 8, cat: "physical", description: "Chicoteia com vinhas" },
  "Razor Leaf": { type: "grass", power: 10, cat: "special", description: "Folhas afiadas" },
  "Giga Drain": { type: "grass", power: 10, cat: "special", description: "Drena HP do inimigo" },
  "Solar Beam": { type: "grass", power: 15, cat: "special", description: "Feixe solar poderoso" },
  "Petal Dance": { type: "grass", power: 15, cat: "special", description: "Dança de pétalas" },

  // Electric
  "Thunder Shock": { type: "electric", power: 6, cat: "special", description: "Choque elétrico" },
  "Thunder Wave": { type: "electric", power: 0, cat: "status", description: "Paralisa o alvo" },
  "Spark": { type: "electric", power: 9, cat: "physical", description: "Investida elétrica" },
  "Thunderbolt": { type: "electric", power: 12, cat: "special", description: "Poderoso raio" },
  "Thunder": { type: "electric", power: 15, cat: "special", description: "Trovão devastador" },
  "Volt Tackle": { type: "electric", power: 15, cat: "physical", description: "Investida elétrica extrema" },

  // Poison
  "Poison Sting": { type: "poison", power: 6, cat: "physical", description: "Pode envenenar" },
  "Poison Powder": { type: "poison", power: 0, cat: "status", description: "Envenena o alvo" },
  "Acid": { type: "poison", power: 6, cat: "special", description: "Ataque ácido" },
  "Poison Jab": { type: "poison", power: 10, cat: "physical", description: "Soco venenoso" },
  "Sludge Bomb": { type: "poison", power: 12, cat: "special", description: "Lodo explosivo" },
  "Gunk Shot": { type: "poison", power: 15, cat: "physical", description: "Lixo tóxico" },

  // Outros moves de status
  "Growth": { type: "grass", power: 0, cat: "status", description: "Aumenta SPATK" },
  "Sleep Powder": { type: "grass", power: 0, cat: "status", description: "Faz o alvo dormir" },
  "Smokescreen": { type: "fire", power: 0, cat: "status", description: "Reduz precisão" },
  "Scary Face": { type: "normal", power: 0, cat: "status", description: "Reduz SPD drasticamente" },
  "Dragon Rage": { type: "dragon", power: 8, cat: "special", description: "Dano fixo" },
  "Withdraw": { type: "water", power: 0, cat: "status", description: "Aumenta DEF" },
  "Skull Bash": { type: "normal", power: 13, cat: "physical", description: "Cabeçada potente" },
  "Rain Dance": { type: "water", power: 0, cat: "status", description: "Aumenta ataques água" },
  "Agility": { type: "psychic", power: 0, cat: "status", description: "Aumenta SPD drasticamente" },
  "Light Screen": { type: "psychic", power: 0, cat: "status", description: "Reduz dano especial" },
  "Double Team": { type: "normal", power: 0, cat: "status", description: "Aumenta evasão" }
};

// ─────────────────────────────────────────────────────────────
// EVOLUÇÕES SIMPLIFICADAS
// ─────────────────────────────────────────────────────────────
const EVOLUTIONS = {
  1: { evolvesTo: 2, level: 16, method: "level" },
  2: { evolvesTo: 3, level: 32, method: "level" },
  4: { evolvesTo: 5, level: 16, method: "level" },
  5: { evolvesTo: 6, level: 36, method: "level" },
  7: { evolvesTo: 8, level: 16, method: "level" },
  8: { evolvesTo: 9, level: 36, method: "level" },

  10: { evolvesTo: 11, level: 7, method: "level" },
  11: { evolvesTo: 12, level: 10, method: "level" },
  13: { evolvesTo: 14, level: 7, method: "level" },
  14: { evolvesTo: 15, level: 10, method: "level" },
  16: { evolvesTo: 17, level: 18, method: "level" },
  17: { evolvesTo: 18, level: 36, method: "level" },
  19: { evolvesTo: 20, level: 20, method: "level" },
  21: { evolvesTo: 22, level: 20, method: "level" },
  23: { evolvesTo: 24, level: 22, method: "level" },
  25: { evolvesTo: 26, level: null, method: "stone", stone: "Thunder Stone" },

  27: { evolvesTo: 28, level: 22, method: "level" },
  29: { evolvesTo: 30, level: 16, method: "level" },
  30: { evolvesTo: 31, level: null, method: "stone", stone: "Moon Stone" },
  32: { evolvesTo: 33, level: 16, method: "level" },
  33: { evolvesTo: 34, level: null, method: "stone", stone: "Moon Stone" },
  35: { evolvesTo: 36, level: null, method: "stone", stone: "Moon Stone" },
  37: { evolvesTo: 38, level: null, method: "stone", stone: "Fire Stone" },
  39: { evolvesTo: 40, level: null, method: "stone", stone: "Moon Stone" },
  41: { evolvesTo: 42, level: 22, method: "level" },
  43: { evolvesTo: 44, level: 21, method: "level" },
  44: { evolvesTo: 45, level: null, method: "stone", stone: "Leaf Stone" },
  46: { evolvesTo: 47, level: 24, method: "level" },
  48: { evolvesTo: 49, level: 31, method: "level" },
  50: { evolvesTo: 51, level: 26, method: "level" },

  // Eevee evolutions
  133: { evolvesTo: [134, 135, 136], level: null, method: "stone",
         stone: ["Water Stone", "Thunder Stone", "Fire Stone"] }
};

// ─────────────────────────────────────────────────────────────
// LOCALIZAÇÕES (Simplificado - principais apenas)
// ─────────────────────────────────────────────────────────────
const LOCATIONS = {
  1: [{ area: "Starter Pokémon", method: "Gift" }],
  4: [{ area: "Starter Pokémon", method: "Gift" }],
  7: [{ area: "Starter Pokémon", method: "Gift" }],

  16: [{ area: "Route 1-3", method: "Wild Grass", level: "2-5" }],
  19: [{ area: "Route 1-4", method: "Wild Grass", level: "2-4" }],
  25: [{ area: "Viridian Forest", method: "Wild Grass", level: "3-5" }],

  129: [{ area: "Route 4-6", method: "Fishing", level: "5-15" }],

  144: [{ area: "Seafoam Islands", method: "Event", level: "50" }],
  145: [{ area: "Power Plant", method: "Event", level: "50" }],
  146: [{ area: "Victory Road", method: "Event", level: "50" }],
  150: [{ area: "Cerulean Cave", method: "Event", level: "70" }],
  151: [{ area: "Special Event", method: "Event", level: "5" }]
};

// ─────────────────────────────────────────────────────────────
// FUNÇÕES AUXILIARES
// ─────────────────────────────────────────────────────────────

// Aplicar natureza aos stats
function applyNature(pokemon, natureName) {
  const nature = NATURES[natureName] || NATURES.hardy;
  const mods = nature.modifiers;

  return {
    ...pokemon,
    nature: natureName,
    atk: Math.floor(pokemon.atk * (mods.atk || 1.0)),
    def: Math.floor(pokemon.def * (mods.def || 1.0)),
    spatk: Math.floor(pokemon.spatk * (mods.spatk || 1.0)),
    spdef: Math.floor(pokemon.spdef * (mods.spdef || 1.0)),
    spd: Math.floor(pokemon.spd * (mods.spd || 1.0))
  };
}

// Calcular stats com base no level
function calculateStats(basePokemon, level = 5, nature = 'hardy') {
  const rankMultipliers = {
    'common': 1.0,
    'uncommon': 1.3,
    'rare': 1.6,
    'legendary': 2.0
  };

  const rankMult = rankMultipliers[basePokemon.rank] || 1.0;
  const levelGrowth = 1 + ((level - 5) * 0.08); // +8% por level acima de 5

  const pokemon = {
    ...basePokemon,
    level: level,
    hp: Math.floor(basePokemon.hp * rankMult * levelGrowth),
    atk: Math.floor(basePokemon.atk * rankMult * levelGrowth),
    def: Math.floor(basePokemon.def * rankMult * levelGrowth),
    spatk: Math.floor(basePokemon.spatk * rankMult * levelGrowth),
    spdef: Math.floor(basePokemon.spdef * rankMult * levelGrowth),
    spd: Math.floor(basePokemon.spd * rankMult * levelGrowth)
  };

  return applyNature(pokemon, nature);
}

// Pegar movimentos disponíveis para um Pokémon no level atual
function getAvailableMoves(pokemonId, level) {
  const learnset = LEARNSETS[pokemonId];
  if (!learnset) return null; // Retorna null se não tiver learnset (não array vazio)

  const moves = [];
  for (const [learnLevel, moveNames] of Object.entries(learnset)) {
    if (parseInt(learnLevel) <= level) {
      moves.push(...moveNames);
    }
  }

  // Retorna últimos 4 moves aprendidos (mais recentes)
  return [...new Set(moves)].slice(-4);
}

// Criar Pokémon completo para batalha
function createBattlePokemon(pokemonId, level = 5, nature = 'hardy', customMoves = null) {
  const base = POKEMON_DB.find(p => p.id === pokemonId);
  if (!base) return null;

  const pokemon = calculateStats(base, level, nature);

  // Pegar moves
  let moves = customMoves;

  if (!moves) {
    const availableMoves = getAvailableMoves(pokemonId, level);

    if (availableMoves && availableMoves.length > 0) {
      // Pokémon tem learnset - usar moves por level
      moves = availableMoves.slice(0, 4);

      // Converter nomes de moves para objetos completos
      pokemon.moves = moves.map(moveName => {
        const moveData = MOVES_DATABASE[moveName];
        if (!moveData) return null;
        return {
          name: moveName,
          ...moveData
        };
      }).filter(m => m !== null);
    } else {
      // FALLBACK: Pokémon não tem learnset - usar moves do pokemon-db.js
      pokemon.moves = base.moves.map(move => ({
        name: move.name,
        type: move.type,
        power: move.power,
        cat: move.cat,
        description: `${move.cat === 'physical' ? 'Físico' : move.cat === 'special' ? 'Especial' : 'Status'}`
      }));
    }
  } else {
    // Moves customizados fornecidos
    pokemon.moves = moves.map(moveName => {
      const moveData = MOVES_DATABASE[moveName];
      if (!moveData) {
        // Se não estiver no MOVES_DATABASE, procurar nos moves originais do base
        const baseMove = base.moves.find(m => m.name === moveName);
        if (baseMove) return baseMove;
        return null;
      }
      return {
        name: moveName,
        ...moveData
      };
    }).filter(m => m !== null);
  }

  pokemon.currentHp = pokemon.hp;
  pokemon.maxHp = pokemon.hp;

  return pokemon;
}

// Verificar se pode evoluir
function canEvolve(pokemon) {
  const evo = EVOLUTIONS[pokemon.id];
  if (!evo) return false;

  if (evo.method === 'level' && pokemon.level >= evo.level) {
    return true;
  }

  return false;
}

// Evoluir Pokémon
function evolvePokemon(pokemon) {
  const evo = EVOLUTIONS[pokemon.id];
  if (!evo) return pokemon;

  const evolvedBase = POKEMON_DB.find(p => p.id === evo.evolvesTo);
  if (!evolvedBase) return pokemon;

  // Manter level e natureza, recalcular stats
  return createBattlePokemon(evo.evolvesTo, pokemon.level, pokemon.nature);
}

// Pegar natureza aleatória
function getRandomNature() {
  const keys = Object.keys(NATURES);
  return keys[Math.floor(Math.random() * keys.length)];
}

// ─────────────────────────────────────────────────────────────
// HABILIDADES DE TODOS OS 151 POKÉMON (Gen 1)
// [Habilidade Principal, Habilidade Oculta]
// ─────────────────────────────────────────────────────────────
const POKEMON_ABILITIES = {
  1: ["Overgrow", "Chlorophyll"],
  2: ["Overgrow", "Chlorophyll"],
  3: ["Overgrow", "Chlorophyll"],
  4: ["Blaze", "Solar Power"],
  5: ["Blaze", "Solar Power"],
  6: ["Blaze", "Solar Power"],
  7: ["Torrent", "Rain Dish"],
  8: ["Torrent", "Rain Dish"],
  9: ["Torrent", "Rain Dish"],
  10: ["Shield Dust", "Run Away"],
  11: ["Shed Skin"],
  12: ["Compound Eyes", "Tinted Lens"],
  13: ["Shield Dust", "Run Away"],
  14: ["Shed Skin"],
  15: ["Swarm", "Sniper"],
  16: ["Keen Eye", "Tangled Feet", "Big Pecks"],
  17: ["Keen Eye", "Tangled Feet", "Big Pecks"],
  18: ["Keen Eye", "Tangled Feet", "Big Pecks"],
  19: ["Run Away", "Guts", "Hustle"],
  20: ["Run Away", "Guts", "Hustle"],
  21: ["Keen Eye", "Sniper"],
  22: ["Keen Eye", "Sniper"],
  23: ["Intimidate", "Shed Skin", "Unnerve"],
  24: ["Intimidate", "Shed Skin", "Unnerve"],
  25: ["Static", "Lightning Rod"],
  26: ["Static", "Lightning Rod"],
  27: ["Sand Veil", "Sand Rush"],
  28: ["Sand Veil", "Sand Rush"],
  29: ["Poison Point", "Rivalry", "Hustle"],
  30: ["Poison Point", "Rivalry", "Hustle"],
  31: ["Poison Point", "Rivalry", "Sheer Force"],
  32: ["Poison Point", "Rivalry", "Hustle"],
  33: ["Poison Point", "Rivalry", "Hustle"],
  34: ["Poison Point", "Rivalry", "Sheer Force"],
  35: ["Cute Charm", "Magic Guard", "Friend Guard"],
  36: ["Cute Charm", "Magic Guard", "Unaware"],
  37: ["Flash Fire", "Drought"],
  38: ["Flash Fire", "Drought"],
  39: ["Cute Charm", "Competitive", "Friend Guard"],
  40: ["Cute Charm", "Competitive", "Frisk"],
  41: ["Inner Focus", "Infiltrator"],
  42: ["Inner Focus", "Infiltrator"],
  43: ["Chlorophyll", "Run Away"],
  44: ["Chlorophyll", "Stench"],
  45: ["Chlorophyll", "Effect Spore"],
  46: ["Effect Spore", "Dry Skin", "Damp"],
  47: ["Effect Spore", "Dry Skin", "Damp"],
  48: ["Compound Eyes", "Tinted Lens", "Run Away"],
  49: ["Shield Dust", "Tinted Lens", "Wonder Skin"],
  50: ["Sand Veil", "Arena Trap", "Sand Force"],
  51: ["Sand Veil", "Arena Trap", "Sand Force"],
  52: ["Pickup", "Technician", "Unnerve"],
  53: ["Limber", "Technician", "Unnerve"],
  54: ["Damp", "Cloud Nine", "Swift Swim"],
  55: ["Damp", "Cloud Nine", "Swift Swim"],
  56: ["Vital Spirit", "Anger Point", "Defiant"],
  57: ["Vital Spirit", "Anger Point", "Defiant"],
  58: ["Intimidate", "Flash Fire", "Justified"],
  59: ["Intimidate", "Flash Fire", "Justified"],
  60: ["Water Absorb", "Damp", "Swift Swim"],
  61: ["Water Absorb", "Damp", "Swift Swim"],
  62: ["Water Absorb", "Damp", "Swift Swim"],
  63: ["Synchronize", "Inner Focus", "Magic Guard"],
  64: ["Synchronize", "Inner Focus", "Magic Guard"],
  65: ["Synchronize", "Inner Focus", "Magic Guard"],
  66: ["Guts", "No Guard", "Steadfast"],
  67: ["Guts", "No Guard", "Steadfast"],
  68: ["Guts", "No Guard", "Steadfast"],
  69: ["Chlorophyll", "Gluttony"],
  70: ["Chlorophyll", "Gluttony"],
  71: ["Chlorophyll", "Gluttony"],
  72: ["Clear Body", "Liquid Ooze", "Rain Dish"],
  73: ["Clear Body", "Liquid Ooze", "Rain Dish"],
  74: ["Rock Head", "Sturdy", "Sand Veil"],
  75: ["Rock Head", "Sturdy", "Sand Veil"],
  76: ["Rock Head", "Sturdy", "Sand Veil"],
  77: ["Run Away", "Flash Fire", "Flame Body"],
  78: ["Run Away", "Flash Fire", "Flame Body"],
  79: ["Oblivious", "Own Tempo", "Regenerator"],
  80: ["Oblivious", "Own Tempo", "Regenerator"],
  81: ["Magnet Pull", "Sturdy", "Analytic"],
  82: ["Magnet Pull", "Sturdy", "Analytic"],
  83: ["Keen Eye", "Inner Focus", "Defiant"],
  84: ["Run Away", "Early Bird", "Tangled Feet"],
  85: ["Run Away", "Early Bird", "Tangled Feet"],
  86: ["Thick Fat", "Hydration", "Ice Body"],
  87: ["Thick Fat", "Hydration", "Ice Body"],
  88: ["Stench", "Sticky Hold", "Poison Touch"],
  89: ["Stench", "Sticky Hold", "Poison Touch"],
  90: ["Shell Armor", "Skill Link", "Overcoat"],
  91: ["Shell Armor", "Skill Link", "Overcoat"],
  92: ["Levitate"],
  93: ["Levitate"],
  94: ["Cursed Body"],
  95: ["Rock Head", "Sturdy", "Weak Armor"],
  96: ["Insomnia", "Forewarn", "Inner Focus"],
  97: ["Insomnia", "Forewarn", "Inner Focus"],
  98: ["Hyper Cutter", "Shell Armor", "Sheer Force"],
  99: ["Hyper Cutter", "Shell Armor", "Sheer Force"],
  100: ["Soundproof", "Static", "Aftermath"],
  101: ["Soundproof", "Static", "Aftermath"],
  102: ["Chlorophyll", "Harvest"],
  103: ["Chlorophyll", "Harvest"],
  104: ["Rock Head", "Lightning Rod", "Battle Armor"],
  105: ["Rock Head", "Lightning Rod", "Battle Armor"],
  106: ["Limber", "Reckless", "Unburden"],
  107: ["Keen Eye", "Iron Fist", "Inner Focus"],
  108: ["Own Tempo", "Oblivious", "Cloud Nine"],
  109: ["Levitate"],
  110: ["Levitate"],
  111: ["Lightning Rod", "Rock Head", "Reckless"],
  112: ["Lightning Rod", "Rock Head", "Reckless"],
  113: ["Natural Cure", "Serene Grace", "Healer"],
  114: ["Chlorophyll", "Leaf Guard", "Regenerator"],
  115: ["Early Bird", "Scrappy", "Inner Focus"],
  116: ["Swift Swim", "Sniper", "Damp"],
  117: ["Poison Point", "Sniper", "Damp"],
  118: ["Swift Swim", "Water Veil", "Lightning Rod"],
  119: ["Swift Swim", "Water Veil", "Lightning Rod"],
  120: ["Illuminate", "Natural Cure", "Analytic"],
  121: ["Illuminate", "Natural Cure", "Analytic"],
  122: ["Soundproof", "Filter", "Technician"],
  123: ["Swarm", "Technician", "Steadfast"],
  124: ["Oblivious", "Forewarn", "Dry Skin"],
  125: ["Static", "Vital Spirit"],
  126: ["Flame Body", "Vital Spirit"],
  127: ["Hyper Cutter", "Mold Breaker", "Moxie"],
  128: ["Intimidate", "Anger Point", "Sheer Force"],
  129: ["Swift Swim", "Rattled"],
  130: ["Intimidate", "Moxie"],
  131: ["Water Absorb", "Shell Armor", "Hydration"],
  132: ["Limber", "Imposter"],
  133: ["Run Away", "Adaptability", "Anticipation"],
  134: ["Water Absorb", "Hydration"],
  135: ["Volt Absorb", "Quick Feet"],
  136: ["Flash Fire", "Guts"],
  137: ["Trace", "Download", "Analytic"],
  138: ["Swift Swim", "Shell Armor", "Weak Armor"],
  139: ["Swift Swim", "Shell Armor", "Weak Armor"],
  140: ["Swift Swim", "Battle Armor", "Weak Armor"],
  141: ["Swift Swim", "Battle Armor", "Weak Armor"],
  142: ["Rock Head", "Pressure", "Unnerve"],
  143: ["Immunity", "Thick Fat", "Gluttony"],
  144: ["Pressure", "Snow Cloak"],
  145: ["Pressure", "Static"],
  146: ["Pressure", "Flame Body"],
  147: ["Shed Skin", "Marvel Scale"],
  148: ["Shed Skin", "Marvel Scale"],
  149: ["Inner Focus", "Multiscale"],
  150: ["Pressure", "Unnerve"],
  151: ["Synchronize"]
};

// ─────────────────────────────────────────────────────────────
// SISTEMA DE EFEITOS DE HABILIDADES (Abilities)
// Adaptado para sistema 2d6 de mesa
// ─────────────────────────────────────────────────────────────
const ABILITY_EFFECTS = {
  // ── PINCH POWERS (HP < 33%: +3 poder em moves do tipo) ──
  "Overgrow":    { trigger: "pinch", type: "grass",    bonus: 3, desc: "HP < 33%: +3 poder em moves Planta" },
  "Blaze":       { trigger: "pinch", type: "fire",     bonus: 3, desc: "HP < 33%: +3 poder em moves Fogo" },
  "Torrent":     { trigger: "pinch", type: "water",    bonus: 3, desc: "HP < 33%: +3 poder em moves Água" },
  "Swarm":       { trigger: "pinch", type: "bug",      bonus: 3, desc: "HP < 33%: +3 poder em moves Inseto" },

  // ── IMUNIDADES DE TIPO (absorve ou anula dano) ──
  "Levitate":     { trigger: "immunity", type: "ground",   heal: false, desc: "Imune a moves Terra" },
  "Flash Fire":   { trigger: "immunity", type: "fire",     heal: false, boostType: "fire", boostPower: 3, desc: "Imune a Fogo; +3 poder em moves Fogo ao ser atingido" },
  "Water Absorb": { trigger: "immunity", type: "water",    heal: true,  healPct: 25, desc: "Imune a Água; recupera 25% HP ao ser atingido por Água" },
  "Volt Absorb":  { trigger: "immunity", type: "electric", heal: true,  healPct: 25, desc: "Imune a Elétrico; recupera 25% HP ao ser atingido" },
  "Lightning Rod": { trigger: "immunity", type: "electric", heal: false, boostStat: "spatk", boostVal: 2, desc: "Imune a Elétrico; +2 SPATK ao ser atingido" },
  "Dry Skin":     { trigger: "immunity", type: "water",    heal: true,  healPct: 25, weakness: "fire", weakMult: 1.25, desc: "Imune a Água (+25% HP); Fogo causa +25% dano" },
  "Motor Drive":  { trigger: "immunity", type: "electric", heal: false, boostStat: "spd", boostVal: 3, desc: "Imune a Elétrico; +3 SPD ao ser atingido" },

  // ── MODIFICADORES DE STAT EM BATALHA ──
  "Intimidate":  { trigger: "on_entry", target: "enemy", stat: "atk",  mod: -2, desc: "Entrada: Reduz ATK inimigo em 2" },
  "Thick Fat":   { trigger: "defense", types: ["fire","ice"], mult: 0.5, desc: "Recebe metade do dano de Fogo e Gelo" },
  "Guts":        { trigger: "passive", stat: "atk",  mod: 2, desc: "+2 ATK permanente em batalha" },
  "Hustle":      { trigger: "passive", stat: "atk",  mod: 3, penalty: "accuracy", penaltyVal: -1, desc: "+3 ATK, mas -1 na rolagem de dados" },
  "Pure Power":  { trigger: "passive", stat: "atk",  mod: 3, desc: "+3 ATK permanente em batalha" },
  "Huge Power":  { trigger: "passive", stat: "atk",  mod: 3, desc: "+3 ATK permanente em batalha" },

  // ── PROTEÇÃO CONTRA CRÍTICOS ──
  "Shell Armor":  { trigger: "no_crit", desc: "Não pode receber acertos críticos" },
  "Battle Armor": { trigger: "no_crit", desc: "Não pode receber acertos críticos" },

  // ── SOBREVIVÊNCIA ──
  "Sturdy":  { trigger: "sturdy", desc: "Sobrevive com 1 HP se atingido com HP cheio (1x por batalha)" },
  "Multiscale": { trigger: "full_hp_defense", mult: 0.5, desc: "Recebe metade do dano se estiver com HP cheio" },

  // ── CONTATO (ao receber ataque físico: role 1d6, 1-2 = efeito) ──
  "Static":      { trigger: "contact", effect: "paralyze", chance: 2, desc: "Contato físico: 1d6 ≤ 2 → paralisa o atacante (-3 SPD)" },
  "Flame Body":  { trigger: "contact", effect: "burn",     chance: 2, desc: "Contato físico: 1d6 ≤ 2 → queima o atacante (-2 ATK)" },
  "Poison Point": { trigger: "contact", effect: "poison",  chance: 2, desc: "Contato físico: 1d6 ≤ 2 → envenena (perde 5% HP/turno)" },
  "Rough Skin":  { trigger: "contact", effect: "recoil",   recoilPct: 8, desc: "Contato físico: atacante perde 8% do HP" },
  "Iron Barbs":  { trigger: "contact", effect: "recoil",   recoilPct: 8, desc: "Contato físico: atacante perde 8% do HP" },
  "Effect Spore": { trigger: "contact", effect: "random_status", chance: 2, desc: "Contato: 1d6 ≤ 2 → efeito aleatório (paralyze/poison/sleep)" },
  "Cute Charm":  { trigger: "contact", effect: "infatuation", chance: 2, desc: "Contato: 1d6 ≤ 2 → infatuação (50% chance de não agir)" },

  // ── VELOCIDADE E PRIORIDADE ──
  "Swift Swim":    { trigger: "passive", stat: "spd", mod: 5, desc: "+5 SPD em batalha (natação rápida)" },
  "Chlorophyll":   { trigger: "passive", stat: "spd", mod: 5, desc: "+5 SPD em batalha (fotossíntese)" },
  "Sand Rush":     { trigger: "passive", stat: "spd", mod: 5, desc: "+5 SPD em batalha (areia)" },
  "Speed Boost":   { trigger: "per_turn", stat: "spd", mod: 2, desc: "+2 SPD a cada turno" },

  // ── PRECISÃO E EVASÃO ──
  "Compound Eyes": { trigger: "passive", stat: "accuracy", mod: 1, desc: "+1 na rolagem de dados" },
  "Keen Eye":      { trigger: "passive", effect: "no_acc_loss", desc: "Precisão não pode ser reduzida" },
  "Sand Veil":     { trigger: "passive", stat: "evasion",   mod: 1, desc: "+1 evasão (inimigo precisa tirar +1 nos dados)" },
  "Snow Cloak":    { trigger: "passive", stat: "evasion",   mod: 1, desc: "+1 evasão" },
  "Tangled Feet":  { trigger: "passive", stat: "evasion",   mod: 1, desc: "+1 evasão" },

  // ── OFENSIVAS ESPECIAIS ──
  "Technician":  { trigger: "weak_move_boost", threshold: 8, bonus: 3, desc: "Moves com poder ≤ 8 ganham +3 poder" },
  "Sniper":      { trigger: "crit_boost", mult: 2.0, desc: "Críticos causam ×2 ao invés de ×1.5" },
  "Adaptability": { trigger: "stab_boost", bonus: 1, desc: "STAB (mesmo tipo) dá +1 extra no dano" },
  "Tinted Lens": { trigger: "resist_boost", desc: "Moves 'não muito efetivos' causam dano normal (×1)" },
  "Mold Breaker": { trigger: "ignore_ability", desc: "Ignora habilidade defensiva do oponente" },
  "Sheer Force":  { trigger: "no_secondary", bonus: 2, desc: "+2 poder em todos os moves (sem efeitos extras)" },
  "Reckless":     { trigger: "recoil_boost", bonus: 2, desc: "+2 poder em moves de recuo (Take Down, etc.)" },
  "Iron Fist":    { trigger: "punch_boost", bonus: 2, desc: "+2 poder em moves de soco/punho" },

  // ── DEFENSIVAS ESPECIAIS ──
  "Marvel Scale": { trigger: "passive", stat: "def", mod: 3, desc: "+3 DEF em batalha" },
  "Natural Cure": { trigger: "on_switch", desc: "Cura status ao sair de batalha" },
  "Regenerator":  { trigger: "on_switch", healPct: 33, desc: "Recupera 33% HP ao sair de batalha" },
  "Immunity":     { trigger: "status_immune", status: "poison", desc: "Imune a envenenamento" },
  "Insomnia":     { trigger: "status_immune", status: "sleep", desc: "Imune a sono" },
  "Vital Spirit": { trigger: "status_immune", status: "sleep", desc: "Imune a sono" },
  "Limber":       { trigger: "status_immune", status: "paralyze", desc: "Imune a paralisia" },
  "Own Tempo":    { trigger: "status_immune", status: "confusion", desc: "Imune a confusão" },
  "Inner Focus":  { trigger: "status_immune", status: "flinch", desc: "Imune a flinch (não perde turno)" },
  "Oblivious":    { trigger: "status_immune", status: "infatuation", desc: "Imune a infatuação" },
  "Magnet Pull":  { trigger: "trap", types: ["steel"], desc: "Pokémon Aço não podem fugir" },
  "Arena Trap":   { trigger: "trap", types: ["all"], desc: "Oponente não pode fugir (exceto Voador/Levitate)" },
  "Shadow Tag":   { trigger: "trap", types: ["all"], desc: "Oponente não pode fugir" },

  // ── PRESSURE E OUTRAS ──
  "Pressure":    { trigger: "passive", desc: "Presença intimidadora (narrativo)" },
  "Unnerve":     { trigger: "passive", desc: "Oponente não pode usar berries" },
  "Synchronize": { trigger: "mirror_status", desc: "Se receber status, aplica o mesmo no oponente" },
  "Trace":       { trigger: "copy_ability", desc: "Copia a habilidade do oponente" },
  "Run Away":    { trigger: "flee", desc: "Sempre pode fugir de Pokémon selvagens" },
  "Pickup":      { trigger: "field", desc: "Encontra itens após batalhas (narrativo)" },
  "Shed Skin":   { trigger: "per_turn", effect: "cure_status", chance: 2, desc: "Cada turno: 1d6 ≤ 2 → cura status" },
  "Scrappy":     { trigger: "type_override", desc: "Moves Normal/Lutador acertam Fantasma" },

  // ── HABILIDADES SEM EFEITO MECÂNICO (narrativas) ──
  "Shield Dust":  { trigger: "passive", desc: "Protege contra efeitos secundários de moves" },
  "Illuminate":   { trigger: "field", desc: "Aumenta encontros selvagens (narrativo)" },
  "Stench":       { trigger: "field", desc: "Reduz encontros selvagens (narrativo)" },
  "Sticky Hold":  { trigger: "passive", desc: "Itens não podem ser roubados" },
  "Suction Cups": { trigger: "passive", desc: "Não pode ser forçado a trocar" },
  "Hyper Cutter":  { trigger: "passive", effect: "no_atk_loss", desc: "ATK não pode ser reduzido" },
  "Clear Body":    { trigger: "passive", effect: "no_stat_loss", desc: "Stats não podem ser reduzidos" },
  "White Smoke":   { trigger: "passive", effect: "no_stat_loss", desc: "Stats não podem ser reduzidos" },
  "Rock Head":     { trigger: "no_recoil", desc: "Não sofre dano de recuo" },
  "Damp":          { trigger: "passive", desc: "Previne Explosion/Self-Destruct" },
  "Cloud Nine":    { trigger: "passive", desc: "Anula efeitos de clima" },
  "Color Change":  { trigger: "type_change", desc: "Muda tipo para o do último move recebido" },
  "Imposter":      { trigger: "transform", desc: "Transforma no oponente ao entrar" },
  "Download":      { trigger: "on_entry", desc: "Analisa defesas: +2 ATK se DEF < SPDEF, +2 SPATK se não" },
  "Filter":        { trigger: "defense", types: ["super_effective"], mult: 0.75, desc: "Moves super efetivos causam 75% do dano" },
  "Solid Rock":    { trigger: "defense", types: ["super_effective"], mult: 0.75, desc: "Moves super efetivos causam 75% do dano" },
  "Wonder Skin":   { trigger: "passive", desc: "Moves de status têm 50% chance de falhar" },
  "Solar Power":   { trigger: "passive", stat: "spatk", mod: 3, desc: "+3 SPATK em batalha (poder solar)" },
  "Rain Dish":     { trigger: "per_turn", healPct: 6, desc: "Recupera 6% HP por turno (chuva)" },
  "Ice Body":      { trigger: "per_turn", healPct: 6, desc: "Recupera 6% HP por turno (gelo)" },
  "Poison Touch":  { trigger: "contact_attack", effect: "poison", chance: 2, desc: "Ataque físico: 1d6 ≤ 2 → envenena" },
  "Justified":     { trigger: "on_hit", type: "dark", boostStat: "atk", boostVal: 2, desc: "Ao ser atingido por Sombrio: +2 ATK" },
  "Rattled":       { trigger: "on_hit", types: ["dark","ghost","bug"], boostStat: "spd", boostVal: 2, desc: "Atingido por Sombrio/Fantasma/Inseto: +2 SPD" },
  "Moxie":         { trigger: "on_ko", stat: "atk", mod: 2, desc: "Ao derrotar oponente: +2 ATK" },
  "Weak Armor":    { trigger: "on_phys_hit", atkMod: -1, spdMod: 3, desc: "Ao receber físico: -1 DEF, +3 SPD" },
  "Defiant":       { trigger: "on_stat_drop", stat: "atk", mod: 3, desc: "Se stat for reduzido: +3 ATK" },
  "Competitive":   { trigger: "on_stat_drop", stat: "spatk", mod: 3, desc: "Se stat for reduzido: +3 SPATK" },
  "Unaware":       { trigger: "ignore_boosts", desc: "Ignora mudanças de stats do oponente" },
  "Analytic":      { trigger: "last_attack", bonus: 2, desc: "+2 poder se atacar por último no turno" },

  "Overcoat":     { trigger: "passive", desc: "Imune a clima e pó" },
  "Big Pecks":    { trigger: "passive", effect: "no_def_loss", desc: "DEF não pode ser reduzida" },
  "Magic Guard":  { trigger: "passive", desc: "Só recebe dano de ataques diretos" },
  "Frisk":        { trigger: "on_entry", desc: "Revela item do oponente" },
  "Gluttony":     { trigger: "passive", desc: "Usa berries mais cedo" },
  "Harvest":      { trigger: "per_turn", desc: "50% chance de recuperar berry usada" },
  "Drought":      { trigger: "passive", desc: "Clima ensolarado (narrativo)" },
  "Friend Guard": { trigger: "passive", desc: "Aliados recebem menos dano (duplas)" },
  "Steadfast":    { trigger: "on_flinch", stat: "spd", mod: 2, desc: "Se causar flinch: +2 SPD" },
  "Aftermath":    { trigger: "on_faint", recoilPct: 25, desc: "Ao ser derrotado: atacante perde 25% HP" },
  "No Guard":     { trigger: "passive", desc: "Todos os ataques acertam (ambos lados)" },
  "Cursed Body":  { trigger: "contact", effect: "disable", chance: 2, desc: "Contato: 1d6 ≤ 2 → desabilita o move por 2 turnos" },
  "Anger Point":  { trigger: "on_crit_received", stat: "atk", mod: 6, desc: "Ao receber crítico: ATK máximo (+6)" },
  "Skill Link":   { trigger: "passive", desc: "Moves multi-hit sempre acertam máximo" },
  "Leaf Guard":   { trigger: "status_immune", status: "all_in_sun", desc: "Imune a status sob sol" },
  "Hydration":    { trigger: "per_turn", effect: "cure_status_rain", desc: "Cura status sob chuva" },
  "Anticipation": { trigger: "on_entry", desc: "Avisa se oponente tem move super efetivo" },
  "Forewarn":     { trigger: "on_entry", desc: "Revela o move mais forte do oponente" },
  "Rivalry":      { trigger: "passive", desc: "+2 poder se mesmo gênero, -2 se diferente (narrativo)" },
  "Soundproof":   { trigger: "immunity", type: "sound", desc: "Imune a moves de som (Hyper Voice, etc.)" },
  "Infiltrator":  { trigger: "passive", desc: "Ignora Light Screen/Reflect do oponente" },
  "Quick Feet":   { trigger: "passive", stat: "spd", mod: 3, desc: "+3 SPD em batalha" },
  "Wonder Guard": { trigger: "wonder_guard", desc: "Só recebe dano de moves super efetivos" }
};

// Função auxiliar: pegar efeito de habilidade de um Pokémon
function getAbilityEffect(pokemonId) {
  const abilities = POKEMON_ABILITIES[pokemonId];
  if (!abilities || abilities.length === 0) return null;
  // Usa habilidade principal (index 0)
  const abilityName = abilities[0];
  return ABILITY_EFFECTS[abilityName] ? { name: abilityName, ...ABILITY_EFFECTS[abilityName] } : { name: abilityName, trigger: "none", desc: abilityName };
}

// Aplicar efeitos de habilidade na batalha
function applyAbilityOnAttack(attacker, defender, move, rawDamage, isCritical) {
  const atkAbility = getAbilityEffect(attacker.id);
  const defAbility = getAbilityEffect(defender.id);
  let damage = rawDamage;
  let bonusPower = 0;
  let accuracyMod = 0;
  let log = [];
  let blocked = false;
  let healDefender = 0;

  // ── Mold Breaker: ignora habilidade defensiva ──
  const ignoreDefAbility = atkAbility && atkAbility.trigger === "ignore_ability";

  // ── HABILIDADES DO ATACANTE ──
  if (atkAbility) {
    // Pinch powers (HP < 33%)
    if (atkAbility.trigger === "pinch" && move.type === atkAbility.type) {
      if (attacker.currentHp <= attacker.maxHp * 0.33) {
        bonusPower += atkAbility.bonus;
        log.push(`💪 ${atkAbility.name}: +${atkAbility.bonus} poder (HP baixo!)`);
      }
    }

    // Passive stat boosts
    if (atkAbility.trigger === "passive" && atkAbility.stat === "accuracy") {
      accuracyMod += atkAbility.mod;
    }

    // Technician: moves fracos ganham bônus
    if (atkAbility.trigger === "weak_move_boost" && move.power <= atkAbility.threshold) {
      bonusPower += atkAbility.bonus;
      log.push(`🔧 ${atkAbility.name}: +${atkAbility.bonus} poder (move fraco amplificado)`);
    }

    // Sniper: crítico ×2
    if (atkAbility.trigger === "crit_boost" && isCritical) {
      damage = Math.ceil(rawDamage * (atkAbility.mult / 1.5)); // Ajusta de ×1.5 para ×2.0
      log.push(`🎯 ${atkAbility.name}: Crítico amplificado! (×${atkAbility.mult})`);
    }

    // Adaptability (STAB boost)
    if (atkAbility.trigger === "stab_boost" && attacker.types && attacker.types.includes(move.type)) {
      bonusPower += atkAbility.bonus;
      log.push(`🔄 ${atkAbility.name}: +${atkAbility.bonus} (STAB aprimorado)`);
    }

    // Tinted Lens: resists become neutral
    if (atkAbility.trigger === "resist_boost") {
      // This is handled in the main calculation
    }

    // Sheer Force: +bonus in all moves
    if (atkAbility.trigger === "no_secondary") {
      bonusPower += atkAbility.bonus;
      log.push(`💥 ${atkAbility.name}: +${atkAbility.bonus} poder`);
    }

    // Hustle: +ATK but penalty
    if (atkAbility.trigger === "passive" && atkAbility.penalty === "accuracy") {
      accuracyMod += atkAbility.penaltyVal;
    }

    // Analytic: bonus if attacking last
    if (atkAbility.trigger === "last_attack" && attacker.spd < defender.spd) {
      bonusPower += atkAbility.bonus;
      log.push(`🧠 ${atkAbility.name}: +${atkAbility.bonus} poder (ataque por último)`);
    }

    // Flash Fire boost (if activated)
    if (atkAbility.name === "Flash Fire" && attacker._flashFireActive && move.type === "fire") {
      bonusPower += 3;
      log.push(`🔥 Flash Fire ativo: +3 poder em Fogo!`);
    }
  }

  // ── HABILIDADES DO DEFENSOR ──
  if (defAbility && !ignoreDefAbility) {
    // Imunidade de tipo
    if (defAbility.trigger === "immunity" && move.type === defAbility.type) {
      blocked = true;
      if (defAbility.heal) {
        healDefender = Math.floor(defender.maxHp * (defAbility.healPct / 100));
        log.push(`🛡️ ${defAbility.name}: Imune a ${move.type}! Recuperou ${healDefender} HP!`);
      } else if (defAbility.boostType) {
        defender._flashFireActive = true;
        log.push(`🛡️ ${defAbility.name}: Imune a ${move.type}! Poder de Fogo aumentado!`);
      } else if (defAbility.boostStat) {
        defender[defAbility.boostStat] = (defender[defAbility.boostStat] || 0) + defAbility.boostVal;
        log.push(`🛡️ ${defAbility.name}: Imune a ${move.type}! +${defAbility.boostVal} ${defAbility.boostStat.toUpperCase()}`);
      } else {
        log.push(`🛡️ ${defAbility.name}: Imune a ${move.type}!`);
      }
    }

    // Dry Skin weakness
    if (defAbility.name === "Dry Skin" && move.type === "fire" && !blocked) {
      damage = Math.ceil(damage * 1.25);
      log.push(`☀️ Dry Skin: Fogo causa +25% dano!`);
    }

    // Thick Fat
    if (defAbility.trigger === "defense" && defAbility.types && defAbility.types.includes(move.type)) {
      damage = Math.floor(damage * defAbility.mult);
      log.push(`🛡️ ${defAbility.name}: Dano de ${move.type} reduzido!`);
    }

    // Filter/Solid Rock (super effective reduction)
    if (defAbility.trigger === "defense" && defAbility.types && defAbility.types.includes("super_effective")) {
      // Handled in main calculation with typeEff check
    }

    // Shell Armor / Battle Armor: no crits
    if (defAbility.trigger === "no_crit" && isCritical) {
      damage = rawDamage; // Remove crit multiplier
      log.push(`🛡️ ${defAbility.name}: Crítico bloqueado!`);
    }

    // Sturdy: survive with 1 HP
    if (defAbility.trigger === "sturdy" && defender.currentHp === defender.maxHp && damage >= defender.currentHp) {
      damage = defender.currentHp - 1;
      log.push(`💎 ${defAbility.name}: Sobreviveu com 1 HP!`);
    }

    // Multiscale: half damage at full HP
    if (defAbility.trigger === "full_hp_defense" && defender.currentHp === defender.maxHp) {
      damage = Math.floor(damage * defAbility.mult);
      log.push(`🛡️ ${defAbility.name}: Dano reduzido pela metade (HP cheio)!`);
    }

    // Wonder Guard: only super effective hits
    if (defAbility.trigger === "wonder_guard") {
      const typeEff = getTypeEffectiveness(move.type, defender.types);
      if (typeEff <= 1) {
        blocked = true;
        log.push(`✨ Wonder Guard: Apenas moves super efetivos causam dano!`);
      }
    }

    // Scrappy override on attacker side
    if (atkAbility && atkAbility.trigger === "type_override") {
      // Handled externally
    }
  }

  // Recalculate damage with bonus power
  if (bonusPower > 0 && !blocked) {
    damage += bonusPower;
  }

  return {
    damage: blocked ? 0 : Math.max(0, damage),
    bonusPower,
    accuracyMod,
    log,
    blocked,
    healDefender
  };
}

// Efeitos de contato após ataque (Static, Flame Body, etc.)
function applyContactEffect(attacker, defender, move) {
  if (move.cat !== "physical") return null;

  const defAbility = getAbilityEffect(defender.id);
  if (!defAbility || defAbility.trigger !== "contact") return null;

  // Mold Breaker check
  const atkAbility = getAbilityEffect(attacker.id);
  if (atkAbility && atkAbility.trigger === "ignore_ability") return null;

  const roll = Math.floor(Math.random() * 6) + 1; // 1d6
  if (roll > (defAbility.chance || 2)) return null;

  switch (defAbility.effect) {
    case "paralyze":
      attacker._paralyzed = true;
      attacker.spd = Math.max(1, attacker.spd - 3);
      return `⚡ ${defAbility.name}! [1d6: ${roll}] ${attacker.name} foi paralisado! (-3 SPD)`;
    case "burn":
      attacker._burned = true;
      attacker.atk = Math.max(1, attacker.atk - 2);
      return `🔥 ${defAbility.name}! [1d6: ${roll}] ${attacker.name} foi queimado! (-2 ATK)`;
    case "poison":
      attacker._poisoned = true;
      return `☠️ ${defAbility.name}! [1d6: ${roll}] ${attacker.name} foi envenenado! (perde 5% HP/turno)`;
    case "recoil":
      const recoilDmg = Math.max(1, Math.floor(attacker.maxHp * (defAbility.recoilPct / 100)));
      attacker.currentHp -= recoilDmg;
      if (attacker.currentHp < 0) attacker.currentHp = 0;
      return `🦔 ${defAbility.name}! ${attacker.name} recebeu ${recoilDmg} de dano de recuo!`;
    case "random_status":
      const statuses = ["paralyze", "poison", "sleep"];
      const chosen = statuses[Math.floor(Math.random() * statuses.length)];
      if (chosen === "paralyze") { attacker._paralyzed = true; attacker.spd = Math.max(1, attacker.spd - 3); }
      else if (chosen === "poison") { attacker._poisoned = true; }
      else { attacker._asleep = true; }
      const statusNames = { paralyze: "paralisado ⚡", poison: "envenenado ☠️", sleep: "adormecido 💤" };
      return `🍄 ${defAbility.name}! [1d6: ${roll}] ${attacker.name} foi ${statusNames[chosen]}!`;
    case "infatuation":
      attacker._infatuated = true;
      return `💕 ${defAbility.name}! [1d6: ${roll}] ${attacker.name} ficou apaixonado!`;
    case "disable":
      return `🚫 ${defAbility.name}! [1d6: ${roll}] Move ${move.name} foi desabilitado!`;
    default:
      return null;
  }
}

// Efeitos por turno (poison damage, Speed Boost, etc.)
function applyPerTurnEffects(pokemon) {
  const effects = [];
  // Poison damage
  if (pokemon._poisoned) {
    const poisonDmg = Math.max(1, Math.floor(pokemon.maxHp * 0.05));
    pokemon.currentHp -= poisonDmg;
    if (pokemon.currentHp < 0) pokemon.currentHp = 0;
    effects.push(`☠️ ${pokemon.name} sofre ${poisonDmg} de veneno!`);
  }
  // Burn damage
  if (pokemon._burned) {
    const burnDmg = Math.max(1, Math.floor(pokemon.maxHp * 0.06));
    pokemon.currentHp -= burnDmg;
    if (pokemon.currentHp < 0) pokemon.currentHp = 0;
    effects.push(`🔥 ${pokemon.name} sofre ${burnDmg} de queimadura!`);
  }

  // Ability per-turn effects
  const ability = getAbilityEffect(pokemon.id);
  if (ability) {
    if (ability.trigger === "per_turn" && ability.stat === "spd") {
      pokemon.spd += ability.mod;
      effects.push(`⚡ ${ability.name}: ${pokemon.name} +${ability.mod} SPD!`);
    }
    if (ability.trigger === "per_turn" && ability.healPct) {
      const heal = Math.max(1, Math.floor(pokemon.maxHp * (ability.healPct / 100)));
      pokemon.currentHp = Math.min(pokemon.maxHp, pokemon.currentHp + heal);
      effects.push(`💚 ${ability.name}: ${pokemon.name} recuperou ${heal} HP!`);
    }
    if (ability.trigger === "per_turn" && ability.effect === "cure_status") {
      const roll = Math.floor(Math.random() * 6) + 1;
      if (roll <= (ability.chance || 2) && (pokemon._poisoned || pokemon._burned || pokemon._paralyzed || pokemon._asleep)) {
        pokemon._poisoned = false;
        pokemon._burned = false;
        pokemon._paralyzed = false;
        pokemon._asleep = false;
        effects.push(`✨ ${ability.name}: [1d6: ${roll}] ${pokemon.name} curou seu status!`);
      }
    }
  }

  return effects;
}
