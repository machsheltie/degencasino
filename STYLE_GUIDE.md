# DEGEN LIFE CASINO - World Rules & Style Guide

## The Premise

**DEGEN LIFE CASINO** is a satirical web experience themed around hospital caregiving chaos. It uses the visual language of vintage racing forms and gambling to process the absurdity of extended hospital stays.

> *"Where the only thing higher than the stakes are your cortisol levels."*

---

## Voice Characteristics

### 1. Darkly Playful
Jokes come from pain, delivered with a smirk. The humor acknowledges real suffering without wallowing in it.

**Good:** "Sleep Debt Lv. 87 - Compounding interest. No bankruptcy protection."
**Bad:** "You're sad and tired." (Too blunt, no character)

### 2. Surreally Bureaucratic
Hospital and insurance jargon twisted into absurdity. The system is both incomprehensible AND somehow the enemy.

**Good:** "Requesting permission to request permission..."
**Good:** "Insurance system is thinking... (eternally)"
**Bad:** "Loading data..." (Too generic)

### 3. Emotionally Honest
Real feelings underneath the humor. The satire is a coping mechanism, not a denial of reality.

**Good:** "Because my boyfriend is in the hospital and the real world has become a bureaucratic RNG dungeon."
**Bad:** "Hospitals are annoying lol" (Too dismissive)

### 4. Specific, Not Generic
Details matter. "Nurse said they'll be right back" > "Loading..."

**Good:** "Consulting Nurse RNG..."
**Good:** "A nurse said they'll be right back." (We all know what this means)
**Bad:** "Please wait..." (Generic, boring)

---

## Where to Apply Tone

### GO WILD (Flavor Permitted)
- Loading messages - Always thematic and funny
- Error messages - Dark humor, but still informative
- Empty states - Surreal explanations
- Tooltips and lore text - Maximum absurdity
- Bet confirmations - Celebratory but unhinged
- Achievement descriptions - Character-building moments
- Leaderboard taglines - NPC personality shines here

### KEEP IT FUNCTIONAL
- Primary navigation labels - Clear: "SCENARIOS", "INVENTORY", "PROFILE"
- Form labels - Functional only
- Critical action buttons - "PLACE WAGER" not "YEET MONEY INTO VOID"
- Accessibility text - aria-labels are for screen readers, not jokes
- Close buttons - "CLOSE" or "CLOSE [X]" is fine

### RULE OF THUMB
- If user is trying to **DO** something -> Be clear
- If user is **WAITING** or **READING** -> Be funny

---

## Scenario Progression System

The hours-based scenarios follow a natural arc of caregiver deterioration:

| Hours | Zone | Mood |
|-------|------|------|
| 1-21 | The Warm-Up Zone | Hopeful denial |
| 22-42 | The Raccoon Zone | Sleep-deprived chaos |
| 43-63 | The Yeeting Threshold | Equipment hatred |
| 64-84 | Blood Type: C4 Energy | Caffeine dependency |
| 85-105 | Eldritch Guardian Phase | Hospital cryptid status |
| 106-126 | Crackhead Time Wizard | Accidental enlightenment |
| 127-147 | Overlord Mode | Peak form achieved |
| 148-168 | The Victorian Collapse | Dramatic shutdown |

Each scenario includes:
- **Symptoms** - Observable behaviors
- **The Crash Begins** - Warning signs
- **During the Crash** - Active deterioration
- **Post-Crash** - Aftermath description
- **Outcomes** - Possible end states

---

## Currency & Inventory System

### Asset Categories

**Mental Buffs** - Temporary advantages
- Named with game-like modifiers ("Brain Nitro", "+12 Stamina")
- Lore explains the real-world equivalent

**Active Debuffs** - Stacking disadvantages
- Use level systems where appropriate (Sleep Debt Lv. 87)
- Acknowledge real consequences humorously

**Equipment** - Survival gear
- Hospital-specific items
- RPG-style descriptions ("Hospital Hoodie of +12 Stamina")

**Allies** - Support characters
- NPCs with personality
- Rarity indicators (RARE, LOYAL, ALLY)

**Shitcoins** - Fake meme currencies
- Reference real meme coins/culture
- Names should be era-specific jokes ($HAMPSTRDANCE, $GOTMILK)

**Cursed NFTs** - Collectible absurdities
- Parody NFT culture
- Items have cursed backstories

---

## Progression System

### Levels (Based on Coping Points)
1. **Triage Goblin** (0-99 CP) - Fresh to the chaos
2. **Hallway Dweller** (100-249 CP) - Knows the floor plan
3. **RN Summoner** (250-499 CP) - Staff recognizes you
4. **Insurance Paladin** (500-999 CP) - Paperwork master
5. **Emotional Support Cryptid** (1000+ CP) - Hospital legend

### Achievements
Triggered by milestones with humorous descriptions:
- First bet, 3 bets, 5 bets, 10 bets (gambling commitment)
- Level unlocks (progression rewards)
- CP milestones (100, 500, 1000)

---

## Visual Language

### Color Palette
- **Deep Forest Green** (#0a2f15) - Main background, casino felt
- **Parchment/Cream** (#f0e6d2) - Cards, paper elements
- **Gold Accent** (#d4af37) - Highlights, value, success
- **Deep Red** (#8a1c1c) - Alerts, danger, debuffs

### Typography
- **Rye** - Western/vintage display headers (brand logo)
- **Playfair Display** - Elegant headers (section titles)
- **Roboto Slab** - Readable body text (descriptions, content)

### Visual Effects
- Paper texture overlays on cards
- Gold glow on success/confirmation
- Vignette on main view
- Subtle noise texture throughout

---

## Accessibility Guidelines

### Always Include
- Focus traps in modals/drawers
- Focus restoration on close
- aria-labels on interactive elements (functional, not funny)
- role="dialog" and aria-modal="true" on modals
- aria-live="assertive" for important alerts
- Keyboard navigation (Escape to close, Tab trapping)
- prefers-reduced-motion support

### Animation Policy
- All animations must respect `prefers-reduced-motion`
- Manual toggle available in footer
- No auto-playing audio (sound off by default)

---

## Microcopy Examples

### Loading States
```
"Consulting Nurse RNG..."
"Waiting on Doctor Response... (ETA: +/- 900 minutes)"
"A nurse said they'll be right back."
"Paging Dr. Maybe..."
"Insurance system is thinking..."
```

### Error States
```
"You must select a garbage asset to wager. Even despair costs something."
"The hospital's WiFi has rejected your bet. Classic."
"Something broke. Probably the same thing that broke in the ER."
"The tubes are clogged. This is either the internet or the hospital plumbing."
```

### Bet Confirmations
```
"Wager locked. The RNG gods have taken notice."
"Your sanity has been wagered. There are no refunds."
"Bet registered. Somewhere, a nurse is laughing."
```

### Win Messages
```
"IMPOSSIBLE. You actually won. The simulation is glitching."
"Winner winner, hospital dinner! (It's Jell-O. It's always Jell-O.)"
"CONGRATULATIONS! The universe owes you this one."
```

### Loss Messages
```
"As expected. The house always wins. Always."
"Defeat tastes like cold coffee and broken dreams."
"The void giveth, the void taketh. Today, mostly taketh."
```

### Achievement Descriptions
```
"First bet placed. Your parents would be... confused."
"Five bets. You're officially part of the problem. Welcome."
"You've achieved legendary status. Staff whisper about you."
```

### Tooltip Humor
```
"Your collection of questionable assets. Handle with existential dread."
"Enable to hear the sounds of your poor decisions."
"Click to surrender your sanity to the void."
```

---

## World Building Notes

### The Hospital
- Unnamed, generic hospital
- Functions as a dungeon in RPG terms
- Time works differently inside
- The WiFi is always bad
- The cafeteria serves "conceptual food"

### The Girlfriend (Stacey)
- Player character is the caregiver, not the patient
- Named "Stacey" - relatable everywoman
- "Unlicensed WebMD Warlock" - researches obsessively
- Sleep-deprived, caffeinated, determined

### The Ileus
- The boyfriend's condition (mentioned in Overlord Mode)
- It's the antagonist of the narrative
- "Fears the Phoenix form"

### NPCs (Leaderboard)
- Fake usernames with hospital themes
- Each has a distinct tagline personality
- Names: X_R4CC00N_KING_X, CaffeineEntity42, IV_PoleVaulter, etc.

---

## Content Warnings

This experience contains:
- Dark humor about medical situations
- References to sleep deprivation
- Satirical gambling mechanics (no real money)
- Emotional processing through comedy

It does NOT contain:
- Real gambling
- Actual medical advice
- Disrespect for healthcare workers (they're allies!)
- Mean-spirited content

---

## Final Note

The entire project is a coping mechanism. The humor comes from a real place of stress and exhaustion. When in doubt, ask: "Would this make a tired caregiver at 3 AM smile?"

If yes, ship it.

---

*"Not responsible for sleep debt, hallucinations, or accidental clairvoyance."*
