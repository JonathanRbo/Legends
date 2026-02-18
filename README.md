# Pokémon Legends RPG — Sistema de Mesa Completo

Um sistema de RPG de mesa (tabletop) totalmente funcional no universo Pokémon, com site interativo para auxiliar nas sessões.

## 📁 Estrutura do Projeto

```
pokemon-rpg/
├── SISTEMA.md                  # Manual completo das regras (LEIA ISTO PRIMEIRO!)
├── README.md                   # Este arquivo
├── index.html                  # Site interativo principal ⭐ ATUALIZADO V2!
├── pokedex.html                # Pokédex completa dedicada
├── pokemon-db.js               # Banco de dados com todos os 151 Pokémon Gen 1
├── pokemon-mechanics.js        # Sistema de naturezas, levels, moves ⭐ NOVO!
├── pokemon-data-extended.js    # Dados estendidos (referência)
```

## 🎮 Como Jogar

### 1. Leia as Regras
Abra o arquivo **[SISTEMA.md](SISTEMA.md)** — ele contém:
- Como criar seu treinador (atributos, classes)
- Sistema de batalha EXPLICADO PASSO A PASSO com exemplos completos
- Como funciona a captura de Pokémon (com exemplo prático)
- Fichas de Pokémon e o que cada stat significa
- Tabela de efetividade de tipos
- Sistema de evolução e XP
- Insígnias de Ginásio e progressão

### 2. Use o Site Interativo
Abra o arquivo **[index.html](index.html)** no navegador para acessar:

#### 🎯 Funcionalidades do Site:

1. **Criador de Treinador** ⭐ MELHORADO!
   - Escolha seu nome e classe
   - Role 2d6 para cada atributo (INT, CAR, AGI, SOB)
   - Gere um cartão de treinador visual
   - **NOVO:** Escolha seu Pokémon inicial (Clássicos ou qualquer Common)
   - **NOVO:** Pokémon é adicionado automaticamente ao seu time

2. **Meu Time** ⭐ NOVO!
   - Gerencie até 6 Pokémon no seu time
   - Escolha Level (1-100), Natureza e Apelido
   - Stats calculados dinamicamente (Level × Rank × Nature)
   - Preview em tempo real dos stats
   - Salva automaticamente no navegador (localStorage)
   - Exporte seu time em JSON
   - Use seu time no simulador de batalha

3. **Pokédex Completa (151 Pokémon)** → [pokedex.html](pokedex.html)
   - **Todos os 151 Pokémon da Gen 1** com informações completas
   - **Métodos de Evolução** detalhados (nível, pedra, troca)
   - **Localizações** (onde encontrar cada Pokémon)
   - **Descrições** oficiais dos Pokémon
   - **Stats físicos** (altura, peso, taxa de captura)
   - Filtro por tipo e busca
   - Fichas detalhadas com stats, movimentos e ranks
   - Sprites oficiais

4. **Sistema de Naturezas** ⭐ NOVO!
   - 25 naturezas diferentes (Hardy, Brave, Modest, Jolly, etc.)
   - Modifica stats em +10% / -10%
   - Totalmente funcional no cálculo de batalha
   - Escolha ao adicionar Pokémon ao time

5. **Sistema de Levels e Progressão** ⭐ NOVO!
   - Pokémon podem ter Level 1-100
   - Stats crescem +8% por level acima de 5
   - Fórmula: Stats Base × Rank × Level Growth × Nature
   - Sistema de aprendizado de moves por level
   - Pokémon fracos em level alto > Pokémon fortes em level baixo

6. **Simulador de Batalha** ⭐ MELHORADO!
   - Escolha 2 Pokémon (ou use seu time)
   - Sistema turno a turno automático
   - Rolagem de dados com animação
   - Cálculo com Level + Nature + Rank
   - Log de batalha em tempo real
   - Detecta críticos e falhas

7. **Calculadora de Tipos**
   - Teste a efetividade: Tipo atacante vs defensor
   - Tabela completa 18x18 interativa
   - Mostra multiplicadores (x2, x0.5, x0)

8. **Rolador de Dados**
   - 1d6, 2d6, 2d6+Modificador
   - Detecta críticos (par duplo)
   - Detecta falhas (snake eyes)
   - Ideal para uso durante sessões

## 📊 Sistema de Jogo Resumido

### Mecânica Central: 2d6
Todas as rolagens usam **2 dados de 6 faces** somados + modificadores.

### Criação de Treinador
- **4 Atributos**: Intelecto, Carisma, Agilidade, Sobrevivência (role 2d6 cada, mínimo 3)
- **4 Classes**: Desafiante, Pesquisador, Criador, Ranger (cada uma com bônus único)

### Pokémon
- **4 Ranks**: Comum (x1.0), Incomum (x1.3), Raro (x1.6), Lendário (x2.0)
- **6 Stats**: HP, Ataque, Defesa, Sp.Ataque, Sp.Defesa, Velocidade
- **4 Movimentos** por Pokémon (físico ou especial)

### Batalha (Simplificado)
```
1. Iniciativa: Maior SPD age primeiro
2. Atacar: 2d6 + (ATK ou SPATK ÷ 10) + Poder do Movimento
3. Defesa: Resultado - (DEF ou SPDEF do alvo ÷ 10)
4. Efetividade: × Multiplicador de tipo
5. Aplicar dano ao HP do alvo
```

**Crítico**: Dados iguais (🎲3+🎲3) → Dano ×1.5
**Falha**: Soma 2 (🎲1+🎲1) → Erra completamente

### Captura
```
Rolagem: 2d6 + Bônus do Treinador + Bônus de HP + Bônus da Pokébola

Precisa atingir:
- Comum: 6+
- Incomum: 8+
- Raro: 10+
- Lendário: 12+ (muito difícil!)
```

**Bônus de HP**:
- HP > 50%: +0
- HP 25-50%: +2
- HP < 25%: +4

### Evolução
- **1ª Evolução**: 10 XP → +20% em todos os stats
- **2ª Evolução**: 25 XP → +20% novamente

**Ganho de XP**:
- Pokémon selvagem: +1 XP
- Treinador: +3 XP
- Líder de Ginásio: +5 XP

### Progressão
**8 Ginásios** → Cada insígnia dá bônus permanente ao time
**Liga Pokémon** → Desafio final (Elite 4 + Campeão)

## 🎲 Banco de Dados

### pokemon-db.js
Contém **todos os 151 Pokémon da Gen 1** com:
- ID oficial (#001-151)
- Nome
- Tipo(s)
- Rank (Common, Uncommon, Rare, Legendary)
- Stats base (HP, ATK, DEF, SPATK, SPDEF, SPD)
- 4 Movimentos com tipo, poder e categoria

**Ranks distribuídos por estágio evolutivo:**
- Formas básicas → Comum
- 1ª evolução → Incomum
- 2ª evolução/Finais → Raro
- Lendários (Zapdos, Articuno, Moltres, Mewtwo, Mew) → Legendary

### pokemon-data-extended.js ⭐ NOVO!
Dados **adicionais** para Pokémon selecionados (principais + icônicos):

- **Habilidades** (Abilities): "Overgrow", "Blaze", "Torrent", etc.
- **Evolução**: Método (level, stone, trade), condição, cadeia evolutiva
- **Localizações**: Onde encontrar, método (grama, pesca, surf, evento), raridade, nível
- **Stats Físicos**: Altura (m), peso (kg), taxa de captura base
- **Descrição**: Texto descritivo de cada Pokémon
- **Egg Group** e **Base EXP**

**Pokémon com dados completos:**
- Iniciais e evoluções (Bulbasaur, Charmander, Squirtle + evos)
- Pikachu e Raichu
- Nidoran ♀/♂ e evoluções
- Clefairy, Clefable
- Geodude, Graveler, Golem
- Gastly, Haunter, Gengar
- Magikarp e Gyarados
- Eevee e Eeveelutions (Vaporeon, Jolteon, Flareon)
- Dratini, Dragonair, Dragonite
- Lendários (Articuno, Zapdos, Moltres, Mewtwo, Mew)
- **E mais!** (~30-40 Pokémon com dados estendidos)

## 🎨 Tecnologias Usadas

- **HTML5** + **CSS3**
- **JavaScript Vanilla** (sem dependências pesadas)
- **Squeleton Framework** (grid responsivo, utilitários, animações)
- **PokeAPI Sprites** (imagens oficiais via CDN)
- **Google Fonts** (Inter + Press Start 2P)

## 🚀 Como Usar Localmente

1. Clone ou baixe a pasta `pokemon-rpg/`
2. Abra o arquivo `index.html` direto no navegador
   - OU use um servidor local: `python3 -m http.server 8080`
3. Leia `SISTEMA.md` para entender as regras
4. Use o site como ferramenta auxiliar durante o jogo

## 📖 Ordem de Leitura Recomendada

1. **README.md** (você está aqui!) → Visão geral
2. **SISTEMA.md** → Regras completas com exemplos
3. **index.html** → Ferramentas interativas

## 🎯 Casos de Uso

### Para o Mestre (DM)
- Gere encontros aleatórios de Pokémon
- Simule batalhas NPCs vs jogadores
- Consulte stats rapidamente na Pokédex
- Use a calculadora de tipos para balancear desafios

### Para Jogadores
- Crie sua ficha de treinador
- Acompanhe stats do seu time
- Simule capturas antes de tentar
- Teste matchups de tipos
- Role dados durante sessões

## 🔧 Customização

Quer adicionar **Gen 2, 3, 4...**?
1. Adicione novos Pokémon no array `POKEMON_DB` em `pokemon-db.js`
2. Siga o formato:
```javascript
{
  id: 152,
  name: "Chikorita",
  types: ["grass"],
  rank: "common",
  hp: 45, atk: 49, def: 65, spatk: 49, spdef: 65, spd: 45,
  moves: [
    {name:"Razor Leaf", type:"grass", power:10, cat:"special"},
    {name:"Tackle", type:"normal", power:6, cat:"physical"},
    {name:"Synthesis", type:"grass", power:0, cat:"special"},
    {name:"Body Slam", type:"normal", power:11, cat:"physical"}
  ]
}
```

## 🎭 Créditos

- **Sistema de RPG**: Projeto fan-made educacional
- **Pokémon**: © Nintendo / Game Freak / Creatures Inc.
- **Sprites**: PokeAPI (https://pokeapi.co/)
- **Framework CSS**: Squeleton (https://squeleton.dev/)

---

**Divirta-se treinando Pokémon!** 🎯⚔️

Se tiver dúvidas sobre as regras, consulte **SISTEMA.md** — tudo está explicado lá!
