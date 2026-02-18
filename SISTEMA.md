# Pokémon Legends RPG — Sistema de Mesa (Detalhado)

## Visão Geral

**Pokémon Legends RPG** é um sistema de RPG de mesa (tabletop) completo inspirado no universo Pokémon.
Utiliza apenas **dados de 6 faces (d6)** para todas as rolagens, tornando o jogo acessível e rápido.

**O que você precisa para jogar:**
- 2 dados de 6 faces (d6)
- Fichas de personagem (treinador e Pokémon)
- Lápis e papel
- Este manual de regras

---

## 1. Criação do Treinador

### Passo 1: Escolha o Nome e Conceito
Dê um nome ao seu treinador e pense em sua história: De onde veio? Por que quer ser treinador?

### Passo 2: Role os Atributos

Cada treinador tem **4 atributos**. Role **2d6** para cada um (some os dois dados). **O resultado mínimo é sempre 3**.

| Atributo | Descrição | Usado Para |
|----------|-----------|------------|
| **Intelecto (INT)** | Conhecimento sobre Pokémon, estratégias, puzzles | Identificar Pokémon selvagens, lembrar fraquezas de tipos, resolver enigmas |
| **Carisma (CAR)** | Persuasão, liderança, vínculo com Pokémon | Negociar com NPCs, acalmar Pokémon assustados, fortalecer laços |
| **Agilidade (AGI)** | Reflexos, velocidade, esquiva pessoal | Fugir de encontros perigosos, reagir a perigos, atletismo |
| **Sobrevivência (SOB)** | Resistência, orientação, primeiros socorros | Acampar, encontrar recursos, curar Pokémon feridos em campo |

**Exemplo de rolagem:**
- INT: 🎲[3]+🎲[5] = **8**
- CAR: 🎲[2]+🎲[4] = **6**
- AGI: 🎲[6]+🎲[5] = **11**
- SOB: 🎲[1]+🎲[2] = **3** (mínimo)

### Passo 3: Escolha Sua Classe

Cada classe dá bônus específicos:

| Classe | Bônus de Atributo | Habilidade Especial |
|--------|-------------------|---------------------|
| **Desafiante** | +2 INT (estratégias) | **Re-rolagem Ofensiva**: 1x por batalha, pode re-rolar qualquer dado de ataque |
| **Pesquisador** | +2 INT (conhecimento) | **Análise**: Pode ver os stats completos de um Pokémon selvagem antes de batalhar |
| **Criador** | +2 CAR (empatia) | **Cura Aprimorada**: Pokémon recuperam +3 HP extra em cada descanso |
| **Ranger** | +2 SOB (campo) | **Captura Expert**: +2 em todas as rolagens de captura de Pokémon |

**Aplicando o bônus:**
Se você é um **Desafiante** com INT 8, seu INT final é **10** (8+2).

### Passo 4: Pokémon Inicial

Você começa com **1 Pokémon Rank Comum Level 5** à sua escolha:

**Opção 1 - Clássicos:**
- **Bulbasaur** (Planta/Veneno)
- **Charmander** (Fogo)
- **Squirtle** (Água)

**Opção 2 - Qualquer Pokémon Comum:**
- Escolha qualquer Pokémon com rank "Common" do banco de dados
- Exemplos: Pidgey, Rattata, Caterpie, Weedle, etc.

**NOVO: Use o Site!**
Na seção "Criar Treinador" do site, você pode:
- Escolher um dos 3 starters clássicos OU
- Ver todos os Pokémon comuns disponíveis
- Adicionar automaticamente ao seu time

Você também começa com:
- **5 Pokébolas**
- **3 Poções** (curam 5 HP cada)
- **R$ 500** (dinheiro inicial)

---

## 2. Entendendo Pokémon

### Ficha de Pokémon

Cada Pokémon tem uma ficha com estas informações:

```
┌─────────────────────────────────────┐
│ #004 CHARMANDER                     │
│ Tipo: Fogo                          │
│ Rank: Comum                         │
├─────────────────────────────────────┤
│ STATS BASE:                         │
│ • HP (Pontos de Vida): 39          │
│ • Ataque (ATK): 52                  │
│ • Defesa (DEF): 43                  │
│ • Sp.Ataque (SPATK): 60            │
│ • Sp.Defesa (SPDEF): 50            │
│ • Velocidade (SPD): 65              │
├─────────────────────────────────────┤
│ MOVIMENTOS (4):                     │
│ 1. Ember (Fogo, Especial, 8 poder) │
│ 2. Scratch (Normal, Físico, 6)      │
│ 3. Flamethrower (Fogo, Esp., 12)   │
│ 4. Slash (Normal, Físico, 10)       │
├─────────────────────────────────────┤
│ XP: 0/10 (próxima evolução)         │
│ Natureza: Bravo (+ATK)              │
└─────────────────────────────────────┘
```

### Ranks de Pokémon

Os Pokémon são divididos em 4 ranks que determinam **raridade de encontro** (não poder):

| Rank | Multiplicador Base | Onde Encontrar | Dificuldade Captura |
|------|-------------------|----------------|---------------------|
| **Comum** | Stats base × 1.0 | Rotas iniciais, grama baixa | 6+ (2d6) |
| **Incomum** | Stats base × 1.3 | Rotas intermediárias, cavernas | 8+ (2d6) |
| **Raro** | Stats base × 1.6 | Rotas finais, locais especiais | 10+ (2d6) |
| **Lendário** | Stats base × 2.0 | Eventos únicos (1 por jogo) | 12+ (2d6 SÓ!) |

**IMPORTANTE:** Rank NÃO define poder! Um Pidgey Comum Level 50 é mais forte que um Pidgeot Raro Level 5!

---

### Levels e Crescimento de Stats — NOVO!

Cada Pokémon tem um **Level** (nível) que vai de 1 a 100:

**Fórmula de Stats:**
```
Stat Final = (Stat Base × Rank Multiplier × Level Growth) × Nature Modifier

Level Growth = 1 + ((Level - 5) × 0.08)
Significa: +8% nos stats a cada level acima de 5
```

**Exemplo Completo:**
```
Charmander Comum, Level 5, Nature Hardy:
- HP Base: 39 → Rank x1.0 → Level x1.0 → Nature x1.0 = 39 HP

Charmander Comum, Level 15, Nature Hardy:
- Level Growth: 1 + ((15-5) × 0.08) = 1.8
- HP: 39 × 1.0 × 1.8 = 70 HP
- ATK: 52 × 1.0 × 1.8 = 93 ATK

Charmander Comum, Level 15, Nature Adamant (+ATK, -SPATK):
- ATK: 93 × 1.1 = 102 ATK (Natureza +10%)
- SPATK: 108 × 0.9 = 97 SPATK (Natureza -10%)
```

**Pokémon selvagens:**
- Rotas iniciais: Level 5-10
- Rotas intermediárias: Level 15-25
- Rotas finais: Level 30-40
- Lendários: Level 50-70

### Movimentos

Cada Pokémon conhece **4 movimentos**. Movimentos têm:
- **Nome** (ex: Thunderbolt)
- **Tipo** (ex: Elétrico) — afeta efetividade
- **Categoria**: **Físico** (usa ATK/DEF) ou **Especial** (usa SPATK/SPDEF)
- **Poder**: Valor base do dano (quanto maior, mais forte)

**Exemplo:**
- **Hydro Pump** — Água, Especial, Poder 15
- **Earthquake** — Terra, Físico, Poder 13

**Aprendendo Novos Movimentos:**
Pokémon aprendem novos movimentos conforme sobem de level. Quando aprender um novo movimento e já tiver 4:
- Escolha qual movimento **esquecer** para aprender o novo
- Movimentos antigos são perdidos permanentemente

---

## 2.1. Naturezas (Natures) — NOVO!

Cada Pokémon tem uma **Natureza** que modifica seus stats:

| Natureza | Efeito | Quando Usar |
|----------|--------|-------------|
| **Hardy** | Nenhum | Balanceado |
| **Brave** | +10% ATK, -10% SPD | Atacantes lentos |
| **Adamant** | +10% ATK, -10% SPATK | Físico puro |
| **Jolly** | +10% SPD, -10% SPATK | Velocidade + Físico |
| **Modest** | +10% SPATK, -10% ATK | Especial puro |
| **Timid** | +10% SPD, -10% ATK | Velocidade + Especial |
| **Bold** | +10% DEF, -10% ATK | Tanque defensivo |
| **Calm** | +10% SPDEF, -10% ATK | Tanque especial |

**Exemplo:**
- Charmander Level 5 (Hardy): ATK 52, SPATK 60, SPD 65
- Charmander Level 5 (Adamant): ATK **57** (+10%), SPATK **54** (-10%), SPD 65

**Como Funciona:**
- Naturezas são definidas ao capturar ou criar o Pokémon
- Pokémon selvagens têm natureza aleatória
- No site, você pode escolher a natureza ao adicionar ao time

---

## 3. Sistema de Batalha (EXPLICADO PASSO A PASSO)

### Iniciando uma Batalha

Quando você encontra um Pokémon selvagem ou outro treinador:

1. **Determine a Iniciativa**: Compare a **Velocidade (SPD)** dos dois Pokémon
   - Maior SPD age primeiro
   - **Em caso de empate**: Ambos treinadores rolam 1d6, maior vence

2. **Comece o primeiro turno**

### Anatomia de um Turno

Cada turno segue estas **5 etapas**:

#### ETAPA 1: Escolher Ação

O Pokémon que age pode escolher:
- **Atacar** — Usar um dos 4 movimentos
- **Trocar** — Trocar para outro Pokémon do seu time (perde o turno)
- **Usar Item** — Usar Poção, Pokébola, etc. (perde o turno)
- **Fugir** — Role 2d6+AGI vs 8+ (sucesso = fuga; falha = perde turno e leva dano)

#### ETAPA 2: Rolar Ataque

Se escolheu atacar, **role 2d6**:

```
Rolagem de Ataque = 2d6 + (ATK ou SPATK ÷ 10, arredonda para baixo) + Poder do Movimento
```

**Exemplo:**
Pikachu usa **Thunderbolt** (Elétrico, Especial, Poder 12)
- SPATK de Pikachu: 50
- Rolagem: 🎲[4]+🎲[5] = **9**
- Bônus de SPATK: 50 ÷ 10 = **+5**
- Poder: **+12**
- **Total: 9 + 5 + 12 = 26**

#### ETAPA 3: Calcular Dano Base

```
Dano Base = Rolagem de Ataque - (DEF ou SPDEF do alvo ÷ 10)
```

**Continuando o exemplo:**
- Total do ataque: 26
- Onix (alvo) tem SPDEF: 45 → 45 ÷ 10 = **4**
- Dano Base: 26 - 4 = **22**

#### ETAPA 4: Aplicar Efetividade de Tipo

Consulte a **Tabela de Tipos** (mais abaixo) e multiplique:

- **Super Efetivo**: ×2
- **Não Muito Efetivo**: ×0.5
- **Imune (Sem Efeito)**: ×0
- **Normal**: ×1

**Continuando o exemplo:**
- Thunderbolt (Elétrico) vs Onix (Pedra/Terra)
- Elétrico é **Imune** contra Terra (×0)
- **Dano Final: 22 × 0 = 0** (sem efeito!)

#### ETAPA 5: Aplicar Dano ao HP

Subtraia o dano do HP atual do Pokémon alvo.

**Regras importantes:**
- **Dano mínimo é sempre 1** (exceto se for imune/×0)
- **Crítico**: Se os dois dados mostrarem **o mesmo número** (par duplo) → Dano ×1.5
- **Falha Crítica**: Se a soma dos dados for **2** (snake eyes: 🎲1+🎲1) → Ataque erra completamente

### Exemplo Completo de Batalha

**Situação:** Seu Charmander (SPD 65) vs Bulbasaur selvagem (SPD 45)

**TURNO 1:**

1. **Iniciativa**: Charmander (65) > Bulbasaur (45) → Charmander age primeiro

2. **Ação de Charmander**: Usa **Ember** (Fogo, Especial, Poder 8)
   - SPATK: 60 → 60÷10 = +6
   - Rola: 🎲[5]+🎲[3] = **8**
   - Total: 8 + 6 + 8 = **22**

3. **Defesa de Bulbasaur**:
   - SPDEF: 65 → 65÷10 = 6
   - Dano Base: 22 - 6 = **16**

4. **Efetividade**:
   - Fogo vs (Planta/Veneno)
   - Fogo é **Super Efetivo** contra Planta → ×2
   - Dano Final: 16 × 2 = **32 de dano!**

5. **Aplicar**: Bulbasaur tinha 45 HP → agora tem **13 HP**

6. **Turno de Bulbasaur**: Usa **Vine Whip** (Planta, Físico, Poder 8)
   - ATK: 49 → 49÷10 = +4
   - Rola: 🎲[2]+🎲[4] = **6**
   - Total: 6 + 4 + 8 = **18**
   - DEF de Charmander: 43 → 43÷10 = 4
   - Dano Base: 18 - 4 = **14**
   - Efetividade: Planta vs Fogo = **Não Muito Efetivo** (×0.5)
   - Dano Final: 14 × 0.5 = **7 de dano**
   - Charmander: 39 HP → **32 HP**

**TURNO 2:** Repita o processo até um Pokémon chegar a 0 HP (derrotado)

---

## 4. Captura de Pokémon (SISTEMA DETALHADO)

### Quando Capturar

Você só pode capturar **Pokémon selvagens** (não de outros treinadores).

### Preparando a Captura

1. **Enfraqueça o Pokémon** — Quanto menor o HP, mais fácil capturar
2. **Escolha a Pokébola** — Melhores bolas dão bônus
3. **Role 2d6 + Modificadores**

### Fórmula de Captura

```
Rolagem de Captura = 2d6 + Bônus do Treinador + Bônus de HP + Bônus da Pokébola
```

**Precisa atingir ou superar a Dificuldade do Rank:**
- Comum: **6+**
- Incomum: **8+**
- Raro: **10+**
- Lendário: **12+** (MÁXIMO de 2d6, muito difícil!)

### Modificadores de Captura

#### Bônus de HP do Pokémon Selvagem:

| HP Atual | Bônus |
|----------|-------|
| HP > 50% do máximo | +0 |
| HP entre 25%-50% | +2 |
| HP < 25% | +4 |
| HP < 10% | +6 |

#### Bônus da Pokébola:

| Pokébola | Bônus | Preço |
|----------|-------|-------|
| Pokébola | +0 | R$ 200 |
| Great Ball | +1 | R$ 600 |
| Ultra Ball | +2 | R$ 1.200 |
| Master Ball | **Captura automática** | Única (evento) |

#### Bônus da Classe:
- **Ranger**: +2 permanente em capturas

### Exemplo Completo de Captura

**Situação:** Você encontrou um **Pikachu selvagem** (Rank: Incomum, Dificuldade 8+)

**Batalha:**
1. Pikachu tem 35 HP
2. Após combate, Pikachu está com **8 HP** (23% do máximo)
3. Você decide capturar!

**Rolagem:**
- Você é um **Ranger** (classe)
- Usa uma **Great Ball**
- HP do Pikachu: 8/35 = 23% → Bônus **+4** (HP < 25%)

```
Rolagem: 🎲[3]+🎲[5] = 8
+ Classe Ranger: +2
+ HP baixo: +4
+ Great Ball: +1
= TOTAL: 15
```

**Resultado:** 15 ≥ 8 (dificuldade) → **CAPTURADO!** 🎉

**Se tivesse falhado:**
- Pokébola é perdida (não recupera)
- Pokémon pode atacar ou fugir
- Você pode tentar de novo no próximo turno

### Dicas de Captura

1. **Use status** — Se seu Pokémon tem movimentos de status (Paralisar, Dormir), use-os! Status vale +2 na captura
2. **Preserve HP** — Ataques fracos ou Golpe Falso (deixa sempre 1 HP) são ótimos
3. **Invista em bolas melhores** — Uma Ultra Ball pode fazer a diferença
4. **Rangers são OP** — Classe Ranger tem +2 permanente, mais fácil capturar raros

---

## 5. Efetividade de Tipos

### Como Funciona

Cada Pokémon tem **1 ou 2 tipos**. O tipo do **movimento usado** é comparado com os tipos **do defensor**.

### Tabela Simplificada (Principais Interações)

| Atacante | Super Efetivo (×2) | Não Muito Efetivo (×0.5) | Imune (×0) |
|----------|-------------------|--------------------------|------------|
| **Fogo** | Planta, Gelo, Inseto, Aço | Fogo, Água, Pedra, Dragão | - |
| **Água** | Fogo, Terra, Pedra | Água, Planta, Dragão | - |
| **Planta** | Água, Terra, Pedra | Fogo, Planta, Veneno, Voador, Inseto, Dragão, Aço | - |
| **Elétrico** | Água, Voador | Elétrico, Planta, Dragão | **Terra** |
| **Terra** | Fogo, Elétrico, Veneno, Pedra, Aço | Planta, Inseto | **Voador** |
| **Lutador** | Normal, Gelo, Pedra, Sombrio, Aço | Veneno, Voador, Psíquico, Inseto, Fada | **Fantasma** |
| **Psíquico** | Lutador, Veneno | Psíquico, Aço | **Sombrio** |
| **Fantasma** | Fantasma, Psíquico | Sombrio | **Normal** |
| **Dragão** | Dragão | Aço | **Fada** |
| **Fada** | Lutador, Dragão, Sombrio | Fogo, Veneno, Aço | - |

**Pokémon com 2 tipos:** Multiplique ambos!
- Charizard (Fogo/Voador) recebe ataque de Pedra:
  - Pedra vs Fogo = ×2
  - Pedra vs Voador = ×2
  - **Total: ×4 de dano!** (super fraqueza)

---

## 6. Evolução e Experiência

### Ganhando XP

| Fonte | XP Ganho |
|-------|----------|
| Derrotar Pokémon selvagem | +1 XP |
| Derrotar treinador | +3 XP |
| Vencer Líder de Ginásio | +5 XP |
| Participar de batalha (sem vencer) | +0 XP |

**XP é individual** — apenas o Pokémon que participou ganha.

### Evoluindo

Quando um Pokémon acumula XP suficiente:

| Estágio | XP Necessário | Efeito |
|---------|---------------|--------|
| 1ª Evolução | 10 XP | **+20% em todos os stats** (arredonda pra cima) |
| 2ª Evolução | 25 XP (total) | **+20% em todos os stats novamente** |

**Exemplo:**
- Charmander (Comum): HP 39, ATK 52
- **Evolui em Charmeleon** (10 XP): HP 47, ATK 62
- **Evolui em Charizard** (25 XP): HP 56, ATK 74

**Importante:** Rank NÃO muda ao evoluir. Um Charmander comum vira um Charizard comum (não raro).

---

## 7. Insígnias de Ginásio

### Progressão

Existem **8 Ginásios** na região, cada um especializado em um tipo. Após derrotar o Líder, você ganha uma **Insígnia** com bônus permanente.

| # | Ginásio | Tipo | Bônus da Insígnia |
|---|---------|------|-------------------|
| 1 | Pewter | Pedra | +1 DEF para todo o time |
| 2 | Cerulean | Água | +1 SPATK para todo o time |
| 3 | Vermilion | Elétrico | +1 SPD para todo o time |
| 4 | Celadon | Planta | +1 HP para todo o time |
| 5 | Fuchsia | Veneno | +1 SPDEF para todo o time |
| 6 | Saffron | Psíquico | +1 ATK para todo o time |
| 7 | Cinnabar | Fogo | Re-rolar 1 dado por batalha |
| 8 | Viridian | Terra | +1 em TODOS os stats do time |

**Os bônus se acumulam!** Com 8 insígnias, cada Pokémon tem +8 em cada stat (exceto SPD/HP que variam).

---

## 8. Itens e Economia

### Itens de Cura

| Item | Efeito | Preço |
|------|--------|-------|
| Poção | Recupera 5 HP | R$ 300 |
| Super Poção | Recupera 10 HP | R$ 700 |
| Hiper Poção | Recupera 20 HP | R$ 1.200 |
| Poção Máxima | Recupera HP completo | R$ 2.500 |
| Revive | Pokémon derrotado volta com 50% HP | R$ 1.500 |

### Descanso

- **Descanso Curto** (acampamento): Cada Pokémon recupera 25% do HP máximo
- **Centro Pokémon**: Cura 100% de HP de todo o time (GRÁTIS!)
- **Criador** (classe): +3 HP extra por descanso curto

---

## 9. Dicas para o Mestre

### Balanceamento de Encontros

- **Rotas iniciais**: Pokémon Comum, níveis 5-10
- **Rotas intermediárias**: Comum/Incomum, níveis 10-20
- **Cavernas/Dungeons**: Incomum/Raro, níveis 20-35
- **Eventos lendários**: Rank Lendário, nível 50+

### Recompensas

- Vitória contra treinador: R$ 500-1.000
- Vitória de Ginásio: R$ 3.000 + Insígnia + TM (movimento especial)
- Missões secundárias: Itens raros, Pokémon especiais

### Narrativa

Use o mundo Pokémon como inspiração:
- **Team Rocket** como vilões
- **Lendários** como plot central
- **Ginásios** como milestones de progressão
- **Liga Pokémon** como objetivo final

---

## 9.1. Encontros Aleatórios de Pokémon (Guia do Mestre)

O Mestre (DM) é responsável por gerar os encontros com Pokémon selvagens. Aqui está o passo a passo:

### Quando Rolar Encontro

O Mestre pode chamar um encontro aleatório quando os jogadores:
- Caminham por grama alta, cavernas, rios ou florestas
- Usam Surf, pesca, ou exploram dungeons
- Entram em áreas novas

**Método rápido:** A cada 10 minutos de jogo em área selvagem, role 1d6. Se tirar **1 ou 2**, um Pokémon selvagem aparece.

### Como Gerar o Pokémon Selvagem

**Passo 1 — Escolha a área:**

| Área | Ranks Disponíveis | Levels |
|------|-------------------|--------|
| Rotas 1-3 (início) | 90% Comum, 10% Incomum | 3-8 |
| Rotas 4-8 (meio) | 60% Comum, 30% Incomum, 10% Raro | 10-20 |
| Cavernas/Florestas | 40% Comum, 40% Incomum, 20% Raro | 15-30 |
| Rotas 9+ (final) | 20% Comum, 50% Incomum, 30% Raro | 25-40 |
| Locais Especiais | Específico da área | 30-50 |
| Eventos Lendários | 100% Lendário (único) | 50-70 |

**Passo 2 — Role ou escolha o Pokémon:**
- Use o site (Pokédex) para consultar quais Pokémon estão disponíveis na área
- OU role na lista de Pokémon do rank correspondente
- OU simplesmente escolha um que faça sentido narrativamente

**Passo 3 — Defina Level e Natureza:**
- Level: Use a faixa da tabela acima (ex: role 2d6+8 para rotas intermediárias)
- Natureza: Role aleatoriamente entre as 25 naturezas, ou escolha uma que faça sentido

**Passo 4 — Calcule os Stats:**
- Use o site para calcular automaticamente
- Ou aplique a fórmula: `Stat Base × Rank × Level Growth × Nature`

### Tabela de Encontro Rápido por Rota

```
Rota 1-2 (Início):
  1d6: 1-3 = Pidgey, 4-5 = Rattata, 6 = Caterpie/Weedle

Rota 3-4 (Floresta):
  1d6: 1 = Pikachu(!), 2-3 = Oddish/Bellsprout, 4-5 = Pidgey, 6 = Abra

Cavernas:
  1d6: 1-2 = Zubat, 3-4 = Geodude, 5 = Machop, 6 = Onix(!)

Água/Pesca:
  1d6: 1-3 = Magikarp, 4-5 = Poliwag, 6 = Goldeen/Staryu
```

### Exemplo Completo de Encontro

> Os jogadores estão na **Rota 5** (meio do jogo).
>
> 1. Mestre rola 1d6 → **2** → Encontro!
> 2. Rank: Rola 1d6 → **4** → Incomum (30% chance)
> 3. Pokémon: Escolhe **Growlithe** (Fogo, Incomum)
> 4. Level: Rola 2d6+8 → **15**
> 5. Natureza: Rola → **Adamant** (+ATK, -SPATK)
> 6. Stats calculados automaticamente pelo site
> 7. Mestre narra: *"Um Growlithe selvagem surge da grama alta, rosnando!"*

---

## 9.2. Sistema de Habilidades (Abilities) — NOVO!

Cada Pokémon possui **1 habilidade principal** que ativa automaticamente em batalha. As habilidades adicionam uma camada estratégica sem complicar o sistema 2d6.

### Como Funcionam

- A habilidade principal do Pokémon é **sempre ativa** (não precisa escolher)
- Algumas ativam automaticamente, outras têm condições (HP baixo, contato físico, etc.)
- Para efeitos que envolvem chance, **role 1d6** — efeitos ativam com resultado ≤ 2 (33% chance)

### Categorias de Habilidades

#### 1. Poderes de Emergência (HP < 33%)

Quando o Pokémon está com HP abaixo de 33%, ganha **+3 de poder** em moves do tipo correspondente.

| Habilidade | Tipo Beneficiado | Pokémon Exemplo |
|-----------|------------------|-----------------|
| **Overgrow** | Planta +3 | Bulbasaur, Ivysaur, Venusaur |
| **Blaze** | Fogo +3 | Charmander, Charmeleon, Charizard |
| **Torrent** | Água +3 | Squirtle, Wartortle, Blastoise |
| **Swarm** | Inseto +3 | Beedrill, Scyther |

**Exemplo:**
> Charizard com 20/120 HP (16%) usa Flamethrower (poder 12).
> Blaze ativa: 12 + 3 = **15 de poder!**

#### 2. Imunidades de Tipo

O Pokémon é **completamente imune** a ataques de um tipo específico. Alguns até se curam!

| Habilidade | Imune a | Efeito Extra | Pokémon Exemplo |
|-----------|---------|--------------|-----------------|
| **Levitate** | Terra | — | Gastly, Haunter, Koffing, Weezing |
| **Flash Fire** | Fogo | +3 poder em Fogo próprio | Vulpix, Ninetales, Growlithe, Flareon |
| **Water Absorb** | Água | Recupera 25% HP | Poliwag, Lapras, Vaporeon |
| **Volt Absorb** | Elétrico | Recupera 25% HP | Jolteon |
| **Lightning Rod** | Elétrico | +2 SPATK | Pikachu, Raichu, Cubone |
| **Dry Skin** | Água (+25% HP) | Fogo causa +25% dano! | Paras, Parasect, Jynx |

**Exemplo:**
> Jolteon (Volt Absorb) é atingido por Thunderbolt.
> Em vez de tomar dano, **recupera 25% do HP máximo!**

#### 3. Modificadores de Entrada

Ativam automaticamente quando o Pokémon entra em batalha.

| Habilidade | Efeito | Pokémon Exemplo |
|-----------|--------|-----------------|
| **Intimidate** | ATK do inimigo -2 | Ekans, Arbok, Growlithe, Gyarados, Tauros |
| **Download** | +2 ATK ou +2 SPATK (analisa defesas) | Porygon |

**Exemplo:**
> Gyarados entra em batalha com **Intimidate**.
> O Pokémon adversário perde 2 pontos de ATK imediatamente!

#### 4. Efeitos de Contato Físico

Quando o Pokémon **recebe um ataque físico**, role 1d6. Se tirar ≤ 2, o efeito ativa:

| Habilidade | Efeito | Como Resolver | Pokémon Exemplo |
|-----------|--------|---------------|-----------------|
| **Static** | Paralisa atacante | -3 SPD ao atacante | Pikachu, Voltorb, Electabuzz |
| **Flame Body** | Queima atacante | -2 ATK ao atacante | Ponyta, Magmar, Moltres |
| **Poison Point** | Envenena atacante | 5% HP/turno de dano | Nidoran♀/♂, Nidorina, Seadra |
| **Rough Skin** | Dano de recuo | Atacante perde 8% HP | — |
| **Effect Spore** | Status aleatório | Paralisia, Veneno ou Sono | Vileplume, Parasect |
| **Cute Charm** | Infatuação | 50% chance de não agir | Clefairy, Jigglypuff |

**Exemplo:**
> Rattata (físico) ataca Pikachu (Static).
> Mestre rola 1d6 → **2** → Static ativa!
> Rattata é paralisado: SPD cai em 3 pontos.

#### 5. Habilidades Passivas Permanentes

Estão **sempre ativas** durante toda a batalha.

| Habilidade | Efeito | Pokémon Exemplo |
|-----------|--------|-----------------|
| **Thick Fat** | Metade do dano de Fogo e Gelo | Seel, Dewgong, Snorlax |
| **Guts** | +2 ATK permanente | Rattata, Machop, Machoke, Machamp |
| **Hustle** | +3 ATK, -1 nos dados | Nidoran♀/♂ (risco/recompensa!) |
| **Shell Armor** | Não recebe críticos | Shellder, Cloyster, Lapras |
| **Battle Armor** | Não recebe críticos | Kabuto, Kabutops |
| **Technician** | Moves com poder ≤ 8 ganham +3 | Meowth, Persian, Scyther, Mr. Mime |
| **Compound Eyes** | +1 na rolagem de dados | Butterfree, Venonat |
| **Sniper** | Críticos causam ×2 (ao invés de ×1.5) | Spearow, Fearow, Horsea, Seadra |
| **Adaptability** | +1 dano extra em STAB | Eevee |
| **Tinted Lens** | Moves resistidos causam dano normal | Butterfree, Venomoth |
| **Swift Swim** | +5 SPD em batalha | Goldeen, Seaking, Magikarp, Omanyte |
| **Chlorophyll** | +5 SPD em batalha | Oddish, Gloom, Bellsprout, Exeggcute |
| **Marvel Scale** | +3 DEF permanente | Dratini, Dragonair |
| **Solar Power** | +3 SPATK em batalha | Charmander (habilidade oculta) |

#### 6. Sobrevivência

| Habilidade | Efeito | Pokémon Exemplo |
|-----------|--------|-----------------|
| **Sturdy** | Sobrevive com 1 HP se receber golpe fatal estando com HP cheio (1× por batalha) | Geodude, Graveler, Golem, Onix |
| **Multiscale** | HP cheio: recebe metade do dano | Dragonite |

**Exemplo:**
> Geodude (Sturdy, HP cheio: 40/40) recebe Surf (dano: 80).
> Sturdy ativa: Geodude sobrevive com **1 HP** ao invés de ser derrotado!

#### 7. Habilidades por Turno

| Habilidade | Efeito a cada turno | Pokémon Exemplo |
|-----------|---------------------|-----------------|
| **Speed Boost** | +2 SPD por turno | — (Gen 3+) |
| **Rain Dish** | Recupera 6% HP/turno | Squirtle (oculta) |
| **Ice Body** | Recupera 6% HP/turno | Dewgong, Seel |
| **Shed Skin** | 1d6 ≤ 2: cura status | Caterpie, Metapod, Ekans, Dratini |
| **Poison Touch** | Ataques: 1d6 ≤ 2 → envenena | Grimer, Muk |

#### 8. Imunidades a Status

| Habilidade | Imune a | Pokémon Exemplo |
|-----------|---------|-----------------|
| **Immunity** | Veneno | Snorlax |
| **Insomnia** | Sono | Hypno |
| **Vital Spirit** | Sono | Primeape, Electabuzz |
| **Limber** | Paralisia | Persian, Hitmonlee, Ditto |
| **Own Tempo** | Confusão | Slowpoke, Slowbro, Lickitung |
| **Inner Focus** | Flinch | Zubat, Golbat, Abra, Dragonite |

#### 9. Efeitos Especiais

| Habilidade | Efeito | Pokémon Exemplo |
|-----------|--------|-----------------|
| **Mold Breaker** | Ignora habilidade defensiva do oponente | Pinsir |
| **Pressure** | Presença intimidadora (narrativo) | Articuno, Zapdos, Moltres, Mewtwo |
| **Synchronize** | Se receber status, aplica o mesmo no oponente | Mew, Abra, Kadabra |
| **Scrappy** | Normal/Lutador acerta Fantasma | Kangaskhan |
| **Filter/Solid Rock** | Super efetivos causam 75% do dano | Mr. Mime |
| **Moxie** | Ao derrotar: +2 ATK | Gyarados (oculta) |
| **Aftermath** | Ao ser derrotado: atacante perde 25% HP | Voltorb, Electrode |
| **Run Away** | Sempre pode fugir de selvagens | Rattata, Ponyta, Eevee, Doduo |

### Resumo Rápido de Habilidades na Batalha

```
ANTES DA BATALHA:
  → Intimidate: ATK inimigo -2
  → Habilidades passivas aplicam bônus/penalidades

DURANTE O ATAQUE:
  → Verificar imunidade (Levitate vs Terra, Flash Fire vs Fogo, etc.)
  → Pinch powers se HP < 33% (Overgrow/Blaze/Torrent: +3 poder)
  → Technician: +3 se poder ≤ 8
  → Hustle: +3 ATK mas -1 nos dados
  → Adaptability: +1 STAB

APÓS RECEBER DANO:
  → Sturdy: sobrevive com 1 HP (se HP estava cheio)
  → Multiscale: metade do dano se HP cheio
  → Thick Fat: metade do dano de Fogo/Gelo
  → Shell Armor: bloqueia críticos

APÓS ATAQUE FÍSICO (role 1d6, ≤ 2 ativa):
  → Static: paralisa (-3 SPD)
  → Flame Body: queima (-2 ATK)
  → Poison Point: envenena (5% HP/turno)

FIM DO TURNO:
  → Veneno: perde 5% HP
  → Queimadura: perde 6% HP
  → Speed Boost: +2 SPD
  → Shed Skin: 1d6 ≤ 2 → cura status
```

---

## 10. Sistema "Meu Time" (Site Interativo) — NOVO!

O site possui uma seção **"Meu Time"** para gerenciar seus Pokémon:

### Funcionalidades:

1. **Adicionar Pokémon ao Time (Máximo 6)**
   - Escolha qualquer Pokémon do banco de dados
   - Defina o Level (1-100)
   - Escolha a Natureza (Hardy, Brave, Modest, etc.)
   - Dê um Apelido opcional
   - Preview mostra os stats calculados

2. **Visualizar Seu Time**
   - Veja todos os Pokémon com stats completos
   - Informações incluem: Level, Natureza, Tipos, Movimentos
   - Stats são calculados automaticamente

3. **Gerenciar Pokémon**
   - Remover Pokémon do time
   - Limpar todo o time
   - Dados salvos no navegador (localStorage)

4. **Usar na Batalha**
   - Botão "Usar na Batalha" carrega seu time no simulador
   - Batalhe com seus Pokémon personalizados

5. **Exportar Time**
   - Baixe seu time em arquivo JSON
   - Compartilhe com outros jogadores
   - Backup dos seus Pokémon

### Como Usar:

1. Acesse a seção **"Meu Time"** no site
2. Selecione um Pokémon
3. Ajuste Level e Natureza
4. Clique em **"Preview"** para ver os stats
5. Clique em **"Adicionar"** para salvar no time
6. Use **"Usar na Batalha"** para batalhar!

**Dica:** Seus Pokémon ficam salvos no navegador. Mesmo se fechar o site, eles estarão lá quando voltar!

---

## Créditos

Sistema criado como projeto fan-made para fins educacionais.
Pokémon © Nintendo / Game Freak / Creatures Inc.

### O que há de novo? (Changelog)

**Versão 3.0 - Sistema de Habilidades:**
- ✅ Habilidades com efeitos mecânicos reais (100+ habilidades)
- ✅ Categorias: Pinch Powers, Imunidades, Contato, Passivas, Sobrevivência
- ✅ Integração no simulador de batalha (habilidades ativam automaticamente)
- ✅ Guia completo de Encontros Aleatórios para o Mestre
- ✅ Tabelas de encontro por rota e área
- ✅ Documentação detalhada com exemplos práticos

**Versão 2.0 - Melhorias Completas:**
- ✅ Sistema de Naturezas funcionais (25 naturezas)
- ✅ Sistema de Levels (1-100) com crescimento de stats
- ✅ Sistema de movimentos por nível (progressão real)
- ✅ Interface "Meu Time" com localStorage
- ✅ Escolha de Pokémon inicial expandida
- ✅ Stats calculados dinamicamente (Level + Rank + Nature)
- ✅ Banco de movimentos completo com 50+ moves

**Versão 1.0 - Base:**
- Sistema 2d6 completo
- 151 Pokémon Gen 1
- Simulador de batalha
- Pokédex interativa

**Boas aventuras, Treinador!** 🎯
