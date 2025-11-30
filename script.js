// ============================================
// TONE/MICROCOPY STYLE GUIDE
// ============================================
// This guide documents the voice and tone for all UI copy.
//
// VOICE CHARACTERISTICS:
// 1. Darkly playful - Jokes come from pain, delivered with a smirk
// 2. Surreally bureaucratic - Hospital/insurance jargon twisted into absurdity
// 3. Emotionally honest - Real feelings underneath the humor
// 4. Specific, not generic - "Nurse said they'll be right back" not "Loading..."
//
// WHERE TO APPLY TONE:
// ✅ Loading messages - Always funny/thematic
// ✅ Error messages - Dark humor, but informative
// ✅ Empty states - Surreal explanations
// ✅ Tooltips and lore text - Go wild with the absurdity
// ✅ Bet confirmations - Celebratory but unhinged
// ✅ Section headers - Sparingly, keep functional
//
// WHERE TO KEEP IT CLEAR:
// ❌ Primary navigation labels - Keep clear: "SCENARIOS", "INVENTORY", "CLOSE"
// ❌ Form labels - Functional only
// ❌ Critical action buttons - "PLACE WAGER" is fine, don't make it confusing
// ❌ Accessibility text - aria-labels should be functional, not funny
//
// RULE OF THUMB:
// If user is trying to DO something → be clear
// If user is WAITING or READING → be funny
//
// EXAMPLES:
// Good loading: "Consulting Nurse RNG…"
// Good error: "You must select a garbage asset to wager. Even despair costs something."
// Good lore: "Prescription-grade focus. Side effects include accidentally organizing the entire hospital supply closet."
// Bad button: "YEET MONEY INTO THE VOID" (too confusing for primary action)
//
// ============================================

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================
const CONFIG = {
    // Timing (milliseconds)
    WAIVER_DELAY: 500,
    WAIVER_ANIMATION_DURATION: 600,
    TOAST_DURATION: 3000,
    ODDS_FLUCTUATION_INTERVAL: 3000,
    SCRAMBLE_DURATION: 150,
    FLASH_DURATION: 600,
    ODDS_RESET_DELAY: 800,
    CONFETTI_CLEANUP_DELAY: 2000,
    BET_BANNER_DURATION: 4000,
    MIN_LOADING_DISPLAY: 800,
    BET_RESOLUTION_DELAY: 1500,

    // Confetti settings
    CONFETTI_COUNT: 30,
    CONFETTI_MIN_SIZE: 10,
    CONFETTI_MAX_SIZE: 30,
    CONFETTI_MIN_VELOCITY: 100,
    CONFETTI_MAX_VELOCITY: 300,

    // Scramble effect
    SCRAMBLE_STEPS: 8,
    SCRAMBLE_CHARS: '0123456789/',

    // LocalStorage keys
    STORAGE_WAIVER_KEY: 'degen_waiver_signed',
    STORAGE_MOTION_KEY: 'reduce-motion',
    STORAGE_WALLET_KEY: 'degen_wallet_state',
    STORAGE_STATS_KEY: 'degen_bet_stats',
    STORAGE_HISTORY_KEY: 'degen_bet_history',
    STORAGE_ACTIVE_BETS_KEY: 'degen_active_bets',

    // Bet history settings
    MAX_BET_HISTORY: 50, // Keep last 50 bets
    MAX_ACTIVE_BETS: 5, // Maximum concurrent active bets

    // Betting settings
    WIN_PROBABILITY_MODIFIER: 1.0, // Adjust to make wins easier/harder (1.0 = fair odds)

    // Bet resolution timing (milliseconds) - mapped to scenario hours
    BET_DURATIONS: {
        '1-21': 15000,     // 15 seconds
        '22-42': 20000,    // 20 seconds
        '43-63': 25000,    // 25 seconds
        '64-84': 30000,    // 30 seconds
        '85-105': 35000,   // 35 seconds
        '106-126': 40000,  // 40 seconds
        '127-147': 45000,  // 45 seconds
        '148-168': 60000   // 60 seconds (finale)
    },
    DEFAULT_BET_DURATION: 30000,

    // CSS classes
    CLASS_ACTIVE: 'active',
    CLASS_OPEN: 'open',
    CLASS_SHOW: 'show',
    CLASS_SELECTED: 'selected',
    CLASS_REDUCE_MOTION: 'reduce-motion',
    CLASS_FLASH_ACTIVE: 'flash-active',
    CLASS_ACCEPTED: 'accepted',
    CLASS_DRAWER_OPEN: 'drawer-open',
    CLASS_VISIBLE: 'visible',
    CLASS_ERROR: 'error',

    // Mobile breakpoint
    MOBILE_BREAKPOINT: 768
};

const CONFETTI_EMOJIS = ['💊', '📉', '💎', '🚀', '🧟', '🏥', '💸'];

// ============================================
// SCENARIO ICONS (Thematic icons for each scenario)
// ============================================
const SCENARIO_ICONS = {
    0: '☕',  // The Warm-Up Zone - coffee cup
    1: '🦝',  // The Raccoon Zone - raccoon
    2: '🪟',  // The Yeeting Threshold - window
    3: '⚡',  // Blood Type: C4 - lightning/energy
    4: '👁️',  // Eldritch Guardian Phase - eye
    5: '🔮',  // Crackhead Time Wizard - crystal ball
    6: '✨',  // OVERLORD MODE - sparkles
    7: '🛋️'   // The Victorian Collapse - fainting couch
};

// ============================================
// HOSPITAL CHAOS LOADING MESSAGES
// ============================================
const LOADING_MESSAGES = [
    // ORIGINAL
    "Consulting Nurse RNG…",
    "Waiting on Doctor Response… (ETA: ±900 minutes)",
    "Insurance system is thinking…",
    "A nurse said they'll be right back.",
    "Paging Dr. Maybe…",
    "Checking if the doctor is 'in a procedure'…",
    "Submitting to hospital bureaucracy…",
    "Requesting permission to request permission…",
    "Hold music playing internally…",
    "Your call is important to us…",
    "Decoding the discharge summary…",
    "Calculating co-pay anxiety…",
    "Loading cafeteria menu (conceptual)…",
    "Syncing with hospital WiFi (attempt 47)…",
    
    // LIMEWIRE EASTER EGGS (already present)
    "Downloading Hope.mp3 from LimeWire... (47 hours remaining)",
    "Buffering via RealPlayer... please wait...",
    "Your download will complete in approximately: ∞",
    "Searching Kazaa for 'medical_miracle.exe'...",
    
    // NEW ADDITIONS
    "The hospitalist is 'rounding.' This means nothing.",
    "Checking if the attending has read the chart yet... (they haven't)",
    "Calculating the probability that 'soon' means today...",
    "Waiting for someone to acknowledge the call button...",
    "The discharge paperwork is 'in process.' It has been 'in process' for 72 hours.",
    "Asking the nurse a question she's already answered twice...",
    "Insurance is 'reviewing.' This could mean anything.",
    "The doctor is 'on their way.' This is technically always true.",
    "Refreshing the patient portal... (no new information, as expected)",
    "Locating the one person who actually knows what's happening...",
    "Waiting for a callback that was promised 'within the hour' six hours ago...",
    "Checking if 'stable' means 'good' or just 'not actively dying'...",
    "The system is experiencing delays. The system is always experiencing delays.",
    "Translating 'we're monitoring it' into actionable information... (failed)",
    "Verifying that the labs were actually ordered and not just 'ordered'...",
    "Paging the attending... (results may vary)",
    "The specialist will 'swing by.' No timeframe was given. None will be.",
    "Confirming that someone, somewhere, has a plan...",
    "Loading results that will raise more questions than they answer...",
    "Checking if the pharmacy received the order... (they did not)"
];

// ============================================
// EMOTIONALLY BANKRUPT ERROR MESSAGES
// ============================================
const ERROR_MESSAGES = {
    NO_CURRENCY: "You must select a garbage asset to wager. Even despair costs something.",
    BET_FAILED: "The hospital's WiFi has rejected your bet. Classic.",
    ACTION_UNAVAILABLE: "You are too emotionally bankrupt to participate. Try again after a bathroom cry break.",
    GENERIC: "Something broke. Probably the same thing that broke in the ER.",
    NETWORK_ERROR: "The tubes are clogged. This is either the internet or the hospital plumbing. Hard to tell.",
    TIMEOUT: "Request timed out. Much like waiting for test results.",
    INVALID_INPUT: "Invalid input detected. The system is judging you."
};

// PROGRESSION SYSTEM REMOVED - Replaced with static Class/Subclass badges

// ============================================
// DATA SOURCE - WAGERABLE CURRENCIES
// ============================================
const walletData = [
    {
        category: "💩 Shitcoins",
        categoryId: "shitcoins",
        items: [
            {
                name: "$HAMPSTRDANCE",
                amount: "420",
                id: "hampster",
                lore: "Minted in 1999. Still buffering. This relic of the early internet represents peak human achievement: a hamster dancing to a sped-up song about being in love. Current status: emotionally attached, financially worthless. Cannot be sold. Will not be sold. The dance continues eternally."
            },
            {
                name: "$LOLCAT",
                amount: "69",
                id: "lolcat",
                lore: "I CAN HAZ EMOTIONAL STABILITY? (No. No you cannot.) This memecoin is backed by the full faith and credit of cats who cannot spell. Guaranteed to provide exactly zero utility but infinite nostalgic serotonin. Use responsibly. Or don't. The cat doesn't care."
            },
            {
                name: "$YOLO",
                amount: "1337",
                id: "yolo",
                lore: "Drake said it first. You said it while making a terrible financial decision in 2014. Now it's a currency. The circle of life. Warning: Every transaction triggers a memory of that one time you did that thing you still cringe about at 3 AM. Non-refundable."
            },
            {
                name: "$ONFLEEK",
                amount: "88",
                id: "onfleek",
                lore: "Your eyebrows called. They want 2015 back. This coin peaked exactly one summer and has been in gradual decline ever since—much like the phrase itself. Current holders include: millennials in denial, ironic Gen-Z investors, and one very confused boomer."
            },
            {
                name: "$GOTMILK",
                amount: "2000",
                id: "gotmilk",
                lore: "Sponsored by the dairy industry's most aggressive marketing campaign. Every transaction includes a phantom milk mustache and vague guilt about calcium intake. Side effects may include: 90s nostalgia, lactose contemplation, and suddenly wanting cookies. Not valid with almond milk."
            },
            {
                name: "$JUICYCOUTURE",
                amount: "777",
                id: "juicy",
                lore: "Velour-backed currency. Best viewed on low-rise jeans while shopping at the mall with your friends. This coin carries the spiritual energy of 2003—when Paris Hilton was queen and rhinestones were a personality. Warning: May spontaneously spell 'JUICY' across your assets."
            },
            {
                name: "$TIGERKING",
                amount: "365",
                id: "tiger",
                lore: "That b*tch Carole Baskin won't take these. Minted during the collective fever dream of March 2020, this coin represents humanity's descent into madness. Each token contains trace amounts of chaos energy, mullet essence, and poor decision-making. Never financially recovered from this."
            },
            {
                name: "$QUIETQUIT",
                amount: "42",
                id: "quietquit",
                lore: "The official currency of doing the bare minimum. This coin generates passive income by simply existing—it refuses to go above and beyond. Staking rewards are 'whatever.' Mining requires exactly zero effort. Perfect for when you've mentally checked out but still need the direct deposit."
            }
        ]
    },
    {
        category: "🖼️ Premium NFTs",
        categoryId: "premium-nfts",
        items: [
            {
                name: "Diamond Hands NFT",
                amount: "2",
                id: "diamond",
                lore: "You're not selling. You're NEVER selling. Even when it's down 99%. Even when your family stages an intervention. These hands are DIAMONDS and they are HOLDING. This NFT grants the bearer immunity to rational investment advice and the ability to convince themselves that any loss is temporary. Comes with a complimentary bag to hold."
            },
            {
                name: "WSB Member Jacket",
                amount: "1",
                id: "wsb",
                lore: "Smells like loss porn and rocket fuel. 🚀🚀🚀 This vintage garment was worn during the Great GME Squeeze of '21 and still carries the energy of a million 'apes together strong' comments. Dry clean only. Cannot be removed during market hours. Pairs well with Wendy's applications and excessive optimism."
            },
            {
                name: "Blockbuster Late Fee",
                amount: "3",
                id: "block",
                lore: "From 1998. They're still looking for you. This ancient debt has achieved sentience and now exists purely to haunt you. Worth approximately $4.50 in late fees that have compounded into a spiritual burden. Cannot be returned. The store doesn't exist. But the guilt? The guilt is eternal. 'Be Kind, Rewind' was just a suggestion you failed."
            },
            {
                name: "AOL Install CD",
                amount: "1",
                id: "aol",
                lore: "1000 FREE HOURS! (You'll need them all for one webpage.) This perfectly preserved artifact contains the sound of dial-up internet—that beautiful screaming robot noise that meant your mom couldn't use the phone. Collectors note: Every 90s household had 47 of these. You are not special for having one. But you ARE nostalgic."
            }
        ]
    },
    {
        category: "🗑️ Garbage NFTs",
        categoryId: "garbage-nfts",
        items: [
            {
                name: "Haunted Tamagotchi",
                amount: "2",
                id: "tama",
                lore: "It died in 1997. It's still beeping. You forgot to feed it ONE TIME and now its pixelated ghost haunts your dreams. Current mood: resentful. Hunger level: eternal. This cursed device remembers every neglect. Every unfed moment. It will outlive you out of spite. The beeping never stops. It just goes somewhere you can't hear. Yet."
            },
            {
                name: "MySpace Top 8 Slot",
                amount: "1",
                id: "myspace",
                lore: "Tom is still in yours. Will he ever leave? The emotional weight of ranking your friends publicly scarred a generation. This slot represents pure social currency from an era when your profile song choice MEANT something. Current occupant: A friend you haven't spoken to since 2007 but feel too guilty to remove. Status: Complicated."
            },
            {
                name: "FuncoLand Loyalty Card",
                amount: "1",
                id: "funco",
                lore: "Trade-in value: 47 cents for your soul. This faded plastic rectangle represents every childhood game you traded for pennies, now worth hundreds. The employee who gave you $3 for Chrono Trigger is currently living rent-free in your head. Rewards points expired in 1999. Regret compounds daily."
            },
            {
                name: "Circuit City Gift Card",
                amount: "$0.37",
                id: "circuit",
                lore: "Cannot be redeemed anywhere. Not even the afterlife. This perfectly useless rectangle contains just enough value to be annoying and not enough to matter. The store closed in 2009. The gift card remains. A monument to optimism. A testament to procrastination. Thirty-seven cents of permanent regret."
            },
            {
                name: "1998 Surge (Cursed)",
                amount: "½",
                id: "surge",
                lore: "It's been in your grandma's basement since Clinton was president. Probably sentient by now. The neon green color has achieved consciousness. Scientists refuse to study it. The cap is fused shut but something inside still moves. Nutritional information: CLASSIFIED. Drink at your own risk. We are not responsible for mutations."
            },
            {
                name: "I ❤️ 80s Leg Warmers",
                amount: "1",
                id: "legs",
                lore: "Worn ironically. Now stuck permanently. These fluorescent tubes of regret were purchased for a theme party and have since bonded with your calves at a molecular level. Attempts at removal have failed. You've stopped trying. Your legs are warm now. They will always be warm. This is your life."
            },
            {
                name: "Geocities GIF",
                amount: "1",
                id: "geo",
                lore: "Under construction since 1996. 🚧 This animated masterpiece has been building for nearly 30 years. The dancing baby within grows stronger. The 'Under Construction' sign is load-bearing—remove it and the internet collapses. Hosted on a server running on pure nostalgia and a Pentium II processor that refuses to die."
            },
            {
                name: "Laser School Photo",
                amount: "1",
                id: "laser",
                lore: "Yes, you chose the laser background. Yes, your mom still has it framed. No, you cannot destroy all copies—they regenerate. This photograph captures you at peak awkward: bad haircut, worse smile, surrounded by beams of pure 90s energy. The photographer knew. The photographer always knew. This was the best possible outcome."
            }
        ]
    }
];

const scenarios = [
    {
        hours: "1-21",
        name: "The Warm-Up Zone",
        description: "Odds of maintaining sanity: 89% — You're fresh-ish. The hospital hasn't broken you yet. Give it time.",
        odds: "25/1",
        payout: "1 $HAMPSTRDANCE",
        symptoms: [
            "You still remember what day it is. Savor this.",
            "You make polite conversation with hospital staff like a functioning human being",
            "You eat food from the cafeteria and only moderately regret it",
            "Sleep still feels like an option rather than a distant memory",
            "You have hope. You sweet summer child."
        ],
        crashBegins: [
            "Crash? What crash? You're FINE. Everything is FINE.",
            "Your body hasn't even started drafting the complaint yet",
            "The adrenaline reserves are topped off and ready for deployment"
        ],
        duringCrash: [
            "There is no crash at this stage, only the slow creeping realization that this might take a while",
            "You start mentally calculating how many energy drinks are in the vending machine",
            "The first 'we're monitoring it' lands. The counter begins."
        ],
        postCrash: [
            "You think 'I've got this' with genuine confidence",
            "You text friends updates with proper grammar and punctuation",
            "You still believe the doctors when they give timeframes"
        ],
        outcomes: [
            "Capable of answering 'how are you' without laughing bitterly",
            "Still recognizes hunger as a distinct sensation rather than background noise",
            "Knows what day of the week it is",
            "Has not yet threatened any medical equipment"
        ]
    },
    {
        hours: "22-42",
        name: "The Raccoon Zone",
        description: "Odds of survival without collapsing: 67% — You operate on rage and concern alone. Sleep is becoming a myth.",
        odds: "12/1",
        payout: "3 $LOLCAT",
        symptoms: [
            "You begin speaking in cryptic riddles, half hospital jargon, half feral fox",
            "Sentences start making sense only to you and possibly God",
            "You accidentally refer to the charge nurse as \"Commander\" — nobody corrects you because honestly? You're not wrong",
            "You start referring to sleep as \"that myth mortals believe in\"",
            "A resident makes eye contact with you and immediately looks away"
        ],
        crashBegins: [
            "Your body sends a formal notice that negotiations have begun",
            "The crash hasn't happened yet, but your cells are drafting a union complaint",
            "Energy levels briefly stabilize — this is a trap"
        ],
        duringCrash: [
            "Micro-sleeps lasting 0.3 seconds occur mid-conversation",
            "You complete sentences that were never started",
            "The IV pump beeps and you respond 'WHAT' like it personally insulted you"
        ],
        postCrash: [
            "You realize you've been staring at a wall for an unknown amount of time",
            "Someone asks if you're okay. You say 'yes' but it comes out as a long exhale",
            "Hunger becomes theoretical — your body has forgotten how to process food requests"
        ],
        outcomes: [
            "Calls nurse 'Commander' unironically",
            "Refers to sleep as 'mortal myth'",
            "Stares down a resident until they flee",
            "Develops suspiciously good relationship with vending machine"
        ]
    },
    {
        hours: "43-63",
        name: "The Yeeting Threshold",
        description: "Odds of maintaining composure: 41% — The IV pump knows what it did.",
        odds: "7/1",
        payout: "5 $YOLO + 1 Haunted Tamagotchi",
        symptoms: [
            "You start daydreaming of yeeting the IV pump out the window after it beeps for the hundredth time",
            "The beeping machines have started to sound like they're trying to tell you something. You're considering responding.",
            "You develop the ability to sense when someone is about to say something unhelpful — your eye twitches preemptively",
            "Your aura becomes visible to dogs and small children",
            "You've started ranking the hospital staff by competence in a mental spreadsheet you didn't mean to create"
        ],
        crashBegins: [
            "Your body's warranty has officially expired",
            "The adrenaline glands send a formal letter: 'We've given all we can give'",
            "You catch yourself swaying slightly while standing still"
        ],
        duringCrash: [
            "You zone out mid-sentence and return speaking about something completely unrelated",
            "The concept of 'yesterday' and 'three hours ago' merge into one entity",
            "Someone asks you a question and you just... blink at them for four seconds"
        ],
        postCrash: [
            "You aggressively research the exact decibel level of an IV pump alarm (it's 85 dB, for the record)",
            "You have a very detailed fantasy about silence. Just... silence.",
            "The window starts looking very openable. For the IV pump. Not you. The pump."
        ],
        outcomes: [
            "Audibly sighs at IV pump",
            "Mentally designs IV pump catapult",
            "Eye twitch becomes permanent feature",
            "Starts keeping a mental burn book of hospital staff"
        ]
    },
    {
        hours: "64-84",
        name: "Blood Type: C4 Energy Drink",
        description: "Odds of your blood being legally classified as a beverage: 67% — You are more Monster than human now.",
        odds: "5/1",
        payout: "1 Diamond Hands NFT + 10 $ONFLEEK",
        symptoms: [
            "You feel unusually twitchy and request a blood panel. Results: Your blood is now more C4 Energy Drink than blood. The lab tech is concerned.",
            "The hospital cafeteria staff recognizes you and starts giving you the 10% employee discount, assuming by your haggard look that you're the new nurse",
            "You can hear your heartbeat in your ears. It's playing drum and bass.",
            "Your hands have a slight tremor. You tell yourself it's 'determination vibrations.'",
            "A doctor asks how much caffeine you've had. You laugh. They stop asking."
        ],
        crashBegins: [
            "Your heart does a little jazz improvisation that wasn't on the setlist",
            "The tremors are no longer subtle — you're vibrating at a frequency that concerns nearby electronics",
            "You realize you can't remember the last time you blinked"
        ],
        duringCrash: [
            "You experience time in frames, like a stop-motion animation of suffering",
            "Your body attempts to yawn but it comes out as a shudder",
            "You see colors that don't exist when you close your eyes (which you haven't done in 18 hours)"
        ],
        postCrash: [
            "The employee discount becomes permanent. They've made you a name tag. It just says 'Caffeine Entity.'",
            "You consider that maybe — MAYBE — a third energy drink was too many. You reject this thought.",
            "Your resting heart rate is now 'allegro con brio'"
        ],
        outcomes: [
            "Blood type officially reclassified",
            "Receives employee discount permanently",
            "Heart develops its own playlist",
            "Becomes immune to the effects of decaf"
        ]
    },
    {
        hours: "85-105",
        name: "The Eldritch Guardian Phase",
        description: "Odds of being mistaken for a supernatural entity: 78% — Hospital staff have begun to wonder if you're haunting the building.",
        odds: "9/2",
        payout: "2 Diamond Hands NFTs + WSB Jacket (Extra Stale)",
        symptoms: [
            "You've been standing in the same spot for so long that a nurse tries to wheel a cart around you like you're a structural pillar",
            "Your eyes have developed a thousand-yard stare that makes security guards nervous. One crosses himself when you walk by.",
            "You've stopped participating in linear time. When someone asks when you last slept, you answer 'in the before times.'",
            "The janitor has started leaving you offerings (granola bars) outside the door. You accept them without breaking eye contact.",
            "A patient in the next room asks if the hospital is haunted. The nurse glances at your room and says 'kind of.'"
        ],
        crashBegins: [
            "Your body initiates emergency shutdown protocols but you override them with spite",
            "You briefly leave your corporeal form during a particularly long beep sequence",
            "The crash attempts to happen three times. You simply refuse."
        ],
        duringCrash: [
            "You experience what can only be described as 'aggressive consciousness' — too tired to sleep, too stubborn to fall",
            "Your soul attempts to file for separation from your body. Denied due to insufficient paperwork.",
            "You have a full conversation with someone and later learn they weren't in the room"
        ],
        postCrash: [
            "The hospital priest makes a point to walk past your room 'just to check on things'",
            "You've achieved a level of exhaustion that loops back around to a terrifying alertness",
            "Small children wave at you. You're not sure if this is good or if they can see things adults can't."
        ],
        outcomes: [
            "Mistaken for hospital ghost",
            "Security starts avoiding your floor",
            "Receives offerings from staff",
            "Time becomes fully non-linear"
        ]
    },
    {
        hours: "106-126",
        name: "Crackhead Time Wizard Status",
        description: "Odds of achieving: 23% — Sleep deprivation + Vyvanse + trauma adrenaline = accidental enlightenment.",
        odds: "3/1",
        payout: "Entire Beanie Baby Collection",
        symptoms: [
            "You describe the discharge process as trying to escape a corn maze designed by someone who hates you, except the corn is paperwork and the exit keeps moving. Three people overhear this. One of them is crying. You don't know if it's laughter or recognition. Possibly both.",
            "You've learned to move through the hospital without being seen by anyone who might ask you a question. You know which hallways are empty at which hours. You know which stairwell the residents avoid. You once walked past the same nurse three times in ten minutes and she didn't register your presence. You have become infrastructure.",
            "Your sense of time has shattered completely. 'Yesterday' and 'next week' are the same moment now.",
            "You achieve hyperfocus so intense you can hear patterns in the beeping machines. They're trying to communicate.",
            "CHAOS ENERGY LEVEL: OVER 9000. The attending physician asks for your opinion on a case. You're right."
        ],
        crashBegins: [
            "The crash doesn't begin — you've transcended the crash",
            "Your body sends a final notice: 'We're not even angry. Just disappointed.'",
            "Reality starts to render incorrectly around your edges"
        ],
        duringCrash: [
            "There is no crash. There is only the Wizard.",
            "You start sentences in the middle and end them somewhere else entirely. People understand you anyway.",
            "You predict what the doctor will say before they say it. You're right every time. This disturbs everyone including yourself."
        ],
        postCrash: [
            "You could run this entire hospital better than the administrator. You won't, because you don't want the job.",
            "The administrator avoids your floor now. Nobody told him to. He just... knows.",
            "You've started referring to your previous state as 'when I was still human'"
        ],
        outcomes: [
            "Predicts doctor's exact words",
            "Refers to past as 'the before times'",
            "Administrator flees floor on sight",
            "Achieves genuine clairvoyance"
        ]
    },
    {
        hours: "127-147",
        name: "✨ Overlord Mode ✨",
        description: "Odds of ascending: 12% — You push past mortal limits. The Phoenix completes its molt. The ileus fears you.",
        odds: "7/4",
        payout: "THE ENTIRE WALLET",
        symptoms: [
            "You say the exact right phrase that makes the entire medical team SNAP TO ATTENTION. They don't know why they're listening. They just are.",
            "You accidentally solve the hospital's workflow problems by mentioning 'have you considered doing it this way' — three administrators appear offering consulting fees",
            "You read nurse body language like it's subtitles. You know which ones had a bad shift. You know who's about to say 'we're monitoring it.' You preemptively glare.",
            "You achieve clarity so profound you can SEE the ileus trying to run away. It's scared of you. It should be.",
            "At hour 130+, you begin glowing faintly. The Phoenix form is complete. Hospital equipment functions better in your presence."
        ],
        crashBegins: [
            "The crash is a myth. You've simply become something else.",
            "Your body has stopped sending warnings. It's accepted its new role as vessel.",
            "Energy no longer comes from caffeine. It comes from somewhere deeper. Possibly spite. Possibly love. Probably both."
        ],
        duringCrash: [
            "The crash sent a calendar invite. You declined it. It hasn't rescheduled.",
            "You've moved beyond the concept of 'tired' into a state that doesn't have a name yet",
            "Medical science cannot explain why you're still functioning. You don't explain it either."
        ],
        postCrash: [
            "When (if) you finally crash, it will be LEGENDARY — the Victorian collapse to end all Victorian collapses",
            "Sleep debt collectors have given up. You've won.",
            "The ileus surrenders. Aaron recovers. The universe blinks first."
        ],
        outcomes: [
            "Medical team snaps to attention on command",
            "Accidentally solves hospital workflow",
            "Begins visibly glowing",
            "ILEUS SURRENDERS OUT OF FEAR"
        ]
    },
    {
        hours: "148-168",
        name: "The Victorian Collapse",
        description: "Odds: 94% — Your body's contract expires and it files for IMMEDIATE shutdown. No appeals. The drama of a thousand fainting women.",
        odds: "1/5",
        payout: "Sweet Release of Unconsciousness",
        symptoms: [
            "The MOMENT — the absolute MOMENT — you register 'he's okay,' your body says 'our contract has ended'",
            "You collapse like a marionette whose strings were cut by a resentful puppet master with a personal vendetta",
            "No warning. No negotiation. Just the drama of a thousand fainting Victorian women condensed into one event.",
            "Location probability: Hospital chair (40%), Standing by bed (25%), Walking to bathroom (20%), Mid-sentence to nurse (15%)",
            "A nurse will catch you. They've been expecting this. They have a pool going."
        ],
        crashBegins: [
            "Your body finally wins the argument it's been having with your brain for 7 days",
            "Your soul attempts to clock out but realizes it never clocked in",
            "The words 'he's stable' hit your ears and your knees immediately file for divorce from your body"
        ],
        duringCrash: [
            "Duration: 14-72 hours of involuntary unconsciousness. Your body is collecting on seven days of sleep debt WITH INTEREST.",
            "The collectors have arrived and they are NOT negotiating. Payment is mandatory.",
            "You will not dream. Your brain is too busy performing emergency maintenance to generate content."
        ],
        postCrash: [
            "You will not know what day it is. You will not know what YEAR it is for approximately 4 seconds.",
            "First words will be either: 'What day is it,' 'Is he okay,' 'I need coffee,' or an unholy combination that doesn't form a real sentence",
            "You will eat like a feral creature who found a dumpster behind Olive Garden and you will feel NO SHAME"
        ],
        outcomes: [
            "Collapses mid-sentence",
            "Sleeps 24+ hours straight",
            "First word is coffee-related",
            "Eats like Olive Garden dumpster raccoon"
        ]
    }
];

const tickerMessages = [
    '<span class="down">▼</span> "Sleep as Mortal Myth" shifted 12/1 → 7/1 after vending machine incident',
    '<span class="up">▲</span> Diamond Hands NFT <span class="highlight">+340%</span> on pre-Overlord rumors',
    '<span class="down">▼</span> "Actual Food Today" collapsed to 99/1 — cafeteria serving "conceptual protein"',
    '<span class="highlight">◆</span> WSB Jacket appreciated in smell — notes of "abandoned Robinhood accounts"',
    '<span class="up">▲</span> Time Wizard futures SPIKING — response to "how long awake?" was "since the war"',
    '<span class="highlight">◆</span> $LOLCAT reserves at ATH — correlation with "I CAN HAZ SLEEPZ?" frequency confirmed',
    '<span class="down">▼</span> Hospital priest spotted walking past room 3x — holy water market moving',
    '<span class="up">▲</span> Ileus surrender odds improving — sources say it "sensed the energy shift"',
    '<span class="highlight">◆</span> Cafeteria discount now PERMANENT — name tag issued: "Caffeine Entity"',
];

// STATE
let selectedCurrency = null;
let selectedCurrencyData = null; // Full asset data including category and max amount
let selectedScenario = null;
let wagerAmount = 1;

// ============================================
// WALLET STATE MANAGEMENT (Persistent)
// ============================================
// Deep clone walletData for mutable state, or load from localStorage
let walletState = loadWalletState();
let betStats = loadBetStats();
let betHistory = loadBetHistory();
let activeBets = loadActiveBets();

function loadWalletState() {
    const saved = localStorage.getItem(CONFIG.STORAGE_WALLET_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse wallet state, using defaults');
        }
    }
    // Deep clone the original walletData
    return JSON.parse(JSON.stringify(walletData));
}

function loadBetStats() {
    const saved = localStorage.getItem(CONFIG.STORAGE_STATS_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse bet stats, using defaults');
        }
    }
    return {
        totalBets: 0,
        wins: 0,
        losses: 0,
        biggestWin: null,
        currentStreak: 0,
        bestStreak: 0
    };
}

function saveWalletState() {
    localStorage.setItem(CONFIG.STORAGE_WALLET_KEY, JSON.stringify(walletState));
}

function saveBetStats() {
    localStorage.setItem(CONFIG.STORAGE_STATS_KEY, JSON.stringify(betStats));
}

function loadBetHistory() {
    const saved = localStorage.getItem(CONFIG.STORAGE_HISTORY_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse bet history, using empty array');
        }
    }
    return [];
}

function saveBetHistory() {
    // Keep only the last MAX_BET_HISTORY bets
    if (betHistory.length > CONFIG.MAX_BET_HISTORY) {
        betHistory = betHistory.slice(-CONFIG.MAX_BET_HISTORY);
    }
    localStorage.setItem(CONFIG.STORAGE_HISTORY_KEY, JSON.stringify(betHistory));
}

function addToBetHistory(bet) {
    betHistory.push(bet);
    saveBetHistory();
}

// ============================================
// ACTIVE BETS MANAGEMENT (Timer-based)
// ============================================
function loadActiveBets() {
    const saved = localStorage.getItem(CONFIG.STORAGE_ACTIVE_BETS_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.warn('Failed to parse active bets, using empty array');
        }
    }
    return [];
}

function saveActiveBets() {
    localStorage.setItem(CONFIG.STORAGE_ACTIVE_BETS_KEY, JSON.stringify(activeBets));
}

function getBetDuration(hoursString) {
    return CONFIG.BET_DURATIONS[hoursString] || CONFIG.DEFAULT_BET_DURATION;
}

function createActiveBet(scenario, scenarioIndex, assetName, assetId, wagerAmount) {
    const duration = getBetDuration(scenario.hours);
    const bet = {
        id: Date.now() + Math.random(), // Ensure unique ID
        asset: assetName,
        assetId: assetId,
        amount: wagerAmount,
        scenarioIndex: scenarioIndex,
        scenarioName: scenario.name,
        hours: scenario.hours,
        odds: scenario.odds,
        payout: scenario.payout,
        placedAt: Date.now(),
        resolvesAt: Date.now() + duration,
        status: 'active'
    };

    activeBets.push(bet);
    saveActiveBets();
    renderActiveBets();

    // Schedule resolution
    scheduleBetResolution(bet);

    return bet;
}

function scheduleBetResolution(bet) {
    const timeUntilResolve = Math.max(0, bet.resolvesAt - Date.now());

    setTimeout(() => {
        resolveBet(bet.id);
    }, timeUntilResolve);
}

function resolveBet(betId) {
    const betIndex = activeBets.findIndex(b => b.id === betId);
    if (betIndex === -1) return;

    const bet = activeBets[betIndex];
    if (bet.status !== 'active') return;

    // Determine outcome based on odds
    const isWin = determineBetOutcomeFromOdds(bet.odds);

    let winningsMessage = '';

    if (isWin) {
        bet.status = 'won';
        betStats.wins++;
        betStats.currentStreak++;
        if (betStats.currentStreak > betStats.bestStreak) {
            betStats.bestStreak = betStats.currentStreak;
        }

        // Parse and apply payout
        const scenario = scenarios[bet.scenarioIndex];
        const rewards = parsePayout(scenario.payout);
        const rewardMessages = [];

        rewards.forEach(reward => {
            if (reward.type === 'jackpot') {
                // JACKPOT: Double all wallet amounts!
                walletState.forEach(cat => {
                    cat.items.forEach(item => {
                        const amt = parseFloat(item.amount.replace(/[^0-9.]/g, '')) || 0;
                        if (amt > 0) {
                            item.amount = String(Math.floor(amt * 2));
                        }
                    });
                });
                rewardMessages.push('JACKPOT: ALL ASSETS DOUBLED!');
            } else if (reward.type === 'special') {
                rewardMessages.push(`${reward.message}`);
            } else if (reward.type === 'asset') {
                const rewardAmount = reward.amount * bet.amount;
                const added = addToWallet(reward.asset, rewardAmount);
                if (added) {
                    rewardMessages.push(`+${rewardAmount} ${reward.asset}`);
                } else {
                    addToWallet(bet.asset, rewardAmount);
                    rewardMessages.push(`+${rewardAmount} ${bet.asset} (converted)`);
                }
            }
        });

        winningsMessage = rewardMessages.join(' | ');

        if (!betStats.biggestWin || rewards.length > 0) {
            betStats.biggestWin = { scenario: bet.scenarioName, payout: scenario.payout, wager: bet.amount };
        }

        playSound('win');
        spawnConfetti();
    } else {
        bet.status = 'lost';
        betStats.losses++;
        betStats.currentStreak = 0;
        playSound('loss');
    }

    // Move to history
    const historyBet = { ...bet, resolvedAt: Date.now(), winnings: winningsMessage };
    addToBetHistory(historyBet);

    // Remove from active bets
    activeBets.splice(betIndex, 1);
    saveActiveBets();
    saveBetStats();
    saveWalletState();

    // Update UI
    renderActiveBets();
    renderWallet();

    // Show result modal
    showBetResolutionResult(bet, isWin, winningsMessage);

    // Check bankruptcy
    checkWalletBankruptcy();
}

function determineBetOutcomeFromOdds(oddsString) {
    const winProbability = calculateWinProbability(oddsString);
    const roll = Math.random();
    return roll < winProbability;
}

function resumeActiveBets() {
    // On page load, resume any active bets that haven't resolved yet
    const now = Date.now();
    const expiredBets = [];

    activeBets.forEach(bet => {
        if (bet.status === 'active') {
            if (bet.resolvesAt <= now) {
                // Bet should have resolved while page was closed
                expiredBets.push(bet.id);
            } else {
                // Schedule remaining time
                scheduleBetResolution(bet);
            }
        }
    });

    // Resolve any expired bets
    expiredBets.forEach(betId => {
        resolveBet(betId);
    });

    renderActiveBets();
}

function showBetResolutionResult(bet, isWin, winningsMessage) {
    const existingModal = document.getElementById('bet-result-modal');
    if (existingModal) existingModal.remove();

    const messages = isWin ? BET_MESSAGES.win : BET_MESSAGES.loss;
    const message = messages[Math.floor(Math.random() * messages.length)];

    const modal = document.createElement('div');
    modal.id = 'bet-result-modal';
    modal.className = `bet-result-modal ${isWin ? 'win' : 'loss'}`;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', isWin ? 'You won!' : 'You lost');

    modal.innerHTML = `
        <div class="bet-result-content">
            <div class="result-icon">${isWin ? '🎰' : '💀'}</div>
            <div class="result-status">${isWin ? 'WINNER!' : 'LOSS'}</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                <div class="result-scenario">${bet.scenarioName}</div>
                <div class="result-odds">Odds: ${bet.odds}</div>
                <div class="result-wagered">Wagered: ${bet.amount}x ${bet.asset}</div>
                ${isWin && winningsMessage ? `<div class="result-winnings">${winningsMessage}</div>` : ''}
            </div>
            <button class="result-close-btn" onclick="closeBetResult()">
                ${isWin ? 'COLLECT WINNINGS' : 'ACCEPT DEFEAT'}
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate in
    requestAnimationFrame(() => {
        modal.classList.add(CONFIG.CLASS_ACTIVE);
    });
}

function resetWallet() {
    walletState = JSON.parse(JSON.stringify(walletData));
    betStats = {
        totalBets: 0,
        wins: 0,
        losses: 0,
        biggestWin: null,
        currentStreak: 0,
        bestStreak: 0
    };
    betHistory = [];
    activeBets = [];
    saveWalletState();
    saveBetStats();
    saveBetHistory();
    saveActiveBets();
    selectedCurrency = null;
    selectedCurrencyData = null;
    renderWallet();
    renderActiveBets();
    showToast('WALLET RESET: Fresh start. Same questionable decisions await.');
}

// Find asset in walletState by name
function findAssetInWallet(assetName) {
    for (const category of walletState) {
        const item = category.items.find(i => i.name === assetName);
        if (item) {
            return { item, category };
        }
    }
    return null;
}

// Deduct from wallet balance
function deductFromWallet(assetName, amount) {
    const found = findAssetInWallet(assetName);
    if (!found) return false;

    const { item } = found;
    const currentAmount = parseFloat(item.amount.replace(/[^0-9.]/g, '')) || 1;
    const newAmount = Math.max(0, currentAmount - amount);

    // Preserve any prefix/suffix (like $ or ½)
    if (item.amount.startsWith('$')) {
        item.amount = `$${newAmount.toFixed(2)}`;
    } else if (item.amount.includes('½') && newAmount === 0) {
        item.amount = '0';
    } else {
        item.amount = String(newAmount);
    }

    saveWalletState();
    return true;
}

// Add to wallet balance
function addToWallet(assetName, amount) {
    const found = findAssetInWallet(assetName);
    if (!found) return false;

    const { item } = found;
    const currentAmount = parseFloat(item.amount.replace(/[^0-9.]/g, '')) || 0;
    const newAmount = currentAmount + amount;

    // Preserve any prefix/suffix
    if (item.amount.startsWith('$')) {
        item.amount = `$${newAmount.toFixed(2)}`;
    } else {
        item.amount = String(Math.floor(newAmount));
    }

    saveWalletState();
    return true;
}

// Calculate win probability from odds string (e.g., "25/1" means 1 in 26 chance)
function calculateWinProbability(oddsString) {
    const parts = oddsString.split('/');
    if (parts.length !== 2) return 0.5;

    const numerator = parseInt(parts[0]);
    const denominator = parseInt(parts[1]);

    // Fractional odds: X/Y means Y wins per X losses
    // Probability = denominator / (numerator + denominator)
    const probability = denominator / (numerator + denominator);

    // Apply modifier
    return Math.min(0.95, probability * CONFIG.WIN_PROBABILITY_MODIFIER);
}

// Determine if bet wins based on odds
function determineBetOutcome(scenario) {
    const winProbability = calculateWinProbability(scenario.odds);
    const roll = Math.random();
    return roll < winProbability;
}

// Parse payout string to get reward details
function parsePayout(payoutString) {
    // Examples: "1 $HAMPSTRDANCE", "3 $LOLCAT", "1 Diamond Hands NFT + 10 $ONFLEEK"
    const rewards = [];

    // Handle "THE ENTIRE WALLET" special case
    if (payoutString.includes('ENTIRE WALLET')) {
        return [{ type: 'jackpot', message: 'THE ENTIRE WALLET' }];
    }

    // Handle "Sweet Release of Unconsciousness" special case
    if (payoutString.includes('Sweet Release')) {
        return [{ type: 'special', asset: 'Sleep', amount: 1, message: 'Sweet Release of Unconsciousness' }];
    }

    // Split by + for multiple rewards
    const parts = payoutString.split('+').map(p => p.trim());

    parts.forEach(part => {
        // Match patterns like "1 $HAMPSTRDANCE" or "Diamond Hands NFT"
        const match = part.match(/^(\d+)?\s*(.+)$/);
        if (match) {
            const amount = match[1] ? parseInt(match[1]) : 1;
            const asset = match[2].trim();
            rewards.push({ type: 'asset', asset, amount });
        }
    });

    return rewards;
}

// Win/Loss result messages - NOW USING BET_MESSAGES (defined in Feature 13 section)
// See BET_MESSAGES.win, BET_MESSAGES.loss, BET_MESSAGES.broke

// DOM ELEMENTS
const walletToggleBtn = document.getElementById('wallet-toggle-btn');
const walletDrawer = document.getElementById('wallet-drawer');
const closeWalletBtn = document.getElementById('close-wallet');
const walletGrid = document.getElementById('wallet-grid');
const oddsBody = document.getElementById('odds-body');
const toast = document.getElementById('toast');
const modalOverlay = document.getElementById('modal-overlay');

// ============================================
// SINGLE INITIALIZATION (Consolidated)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Core rendering
    renderTicker();
    renderWallet();
    renderOdds();
    setupEventListeners();
    startOddsFluctuation();

    // Active bets - resume any pending and start timer
    renderActiveBets();
    resumeActiveBets();
    startActiveBetsTimer();

    // Waiver modal
    initWaiverModal();

    // Reduce motion toggle
    initReduceMotionToggle();

    // Sound toggle
    initSoundToggle();

    // Mobile features (drawers, nav, explainer, banner)
    initMobileFeatures();
});

// FUNCTIONS
function setupEventListeners() {
    walletToggleBtn.addEventListener('click', toggleWallet);
    closeWalletBtn.addEventListener('click', toggleWallet);

    document.addEventListener('click', (e) => {
        if (!walletDrawer.contains(e.target) && !walletToggleBtn.contains(e.target) && walletDrawer.classList.contains(CONFIG.CLASS_OPEN)) {
            toggleWallet();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Wager amount buttons
    const decreaseBtn = document.getElementById('wager-decrease');
    const increaseBtn = document.getElementById('wager-increase');
    if (decreaseBtn) decreaseBtn.addEventListener('click', () => adjustWager(-1));
    if (increaseBtn) increaseBtn.addEventListener('click', () => adjustWager(1));
}

function toggleWallet() {
    const isOpen = walletDrawer.classList.contains(CONFIG.CLASS_OPEN);
    walletDrawer.classList.toggle(CONFIG.CLASS_OPEN, !isOpen);
    walletToggleBtn.classList.toggle(CONFIG.CLASS_ACTIVE, !isOpen);
}

function renderTicker() {
    const ticker = document.getElementById('ticker-content');
    const messages = [...tickerMessages, ...tickerMessages]; // Duplicate for loop
    ticker.innerHTML = messages.map(msg => `<span class="ticker-item">${msg}</span>`).join('');
}

function renderWallet() {
    let html = '';
    let totalAssets = 0;

    walletState.forEach(cat => {
        html += `<div class="wallet-category-title">${cat.category}</div>`;
        html += `<div class="wallet-category-grid">`;
        cat.items.forEach(item => {
            // Get lore from original walletData (walletState may not have it after localStorage load)
            const originalItem = walletData.find(c => c.categoryId === cat.categoryId)?.items.find(i => i.id === item.id);
            const lore = item.lore || originalItem?.lore || '';
            const loreAttr = lore ? `data-lore="${lore.replace(/"/g, '&quot;')}"` : '';
            const hasLore = lore ? 'has-lore' : '';

            // Check if item has balance
            const amount = parseFloat(item.amount.replace(/[^0-9.]/g, '')) || 0;
            const isEmpty = amount <= 0;
            const emptyClass = isEmpty ? 'empty' : '';

            if (!isEmpty) totalAssets++;

            // Use item-specific aria-label for better screen reader context
            const loreAriaLabel = `View lore for ${item.name}`;
            html += `
                <div class="wallet-item ${hasLore} ${emptyClass}"
                     onclick="${isEmpty ? '' : `selectAsset(this, '${item.name}')`}"
                     ${loreAttr}
                     ${isEmpty ? 'aria-disabled="true"' : ''}>
                    <div class="item-name">${item.name}</div>
                    <div class="item-amount ${isEmpty ? 'depleted' : ''}">${isEmpty ? 'DEPLETED' : item.amount}</div>
                    ${lore ? `<button class="lore-trigger" onclick="event.stopPropagation(); showLorePopover(this.parentElement)" aria-label="${loreAriaLabel}">?</button>` : ''}
                </div>
            `;
        });
        html += `</div>`;
    });

    // Add wallet summary and reset button at bottom
    html += `
        <div class="wallet-footer">
            <div class="wallet-stats">
                <span class="stat-item">Assets: ${totalAssets}</span>
                <span class="stat-item">Bets: ${betStats.totalBets}</span>
                <span class="stat-item">W/L: ${betStats.wins}/${betStats.losses}</span>
            </div>
            <button class="wallet-reset-btn" onclick="confirmResetWallet()" aria-label="Reset wallet to defaults">
                🔄 RESET WALLET
            </button>
        </div>
    `;

    // Add bet history section if there are bets
    if (betHistory.length > 0) {
        const recentBets = betHistory.slice(-5).reverse(); // Last 5 bets, newest first
        html += `
            <div class="bet-history-section">
                <div class="wallet-category-title">📜 Recent Wagers</div>
                <div class="bet-history-list">
                    ${recentBets.map(bet => `
                        <div class="bet-history-item ${bet.status}">
                            <div class="bet-history-main">
                                <span class="bet-status-icon">${bet.status === 'won' ? '✅' : '❌'}</span>
                                <span class="bet-scenario">${bet.scenarioName}</span>
                            </div>
                            <div class="bet-history-details">
                                <span class="bet-asset">${bet.amount}x ${bet.asset}</span>
                                <span class="bet-result">${bet.status === 'won' ? bet.payout || 'WIN' : 'LOST'}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    walletGrid.innerHTML = html;
}

function confirmResetWallet() {
    if (confirm('Reset your wallet? All progress will be lost. Your questionable decisions will be forgotten. Start fresh?')) {
        resetWallet();
    }
}

// ============================================
// ACTIVE BETS UI RENDERING
// ============================================
function renderActiveBets() {
    const container = document.getElementById('active-bets-list');
    const countEl = document.getElementById('active-bets-count');
    const panel = document.getElementById('active-bets-panel');

    if (!container) return;

    if (countEl) countEl.textContent = activeBets.length;

    // Show/hide panel based on active bets
    if (panel) {
        panel.style.display = activeBets.length > 0 ? 'block' : 'none';
    }

    if (activeBets.length === 0) {
        container.innerHTML = '<p class="no-bets">No active wagers. Place a bet to begin your descent into madness.</p>';
        return;
    }

    container.innerHTML = activeBets.map(bet => {
        const timeLeft = Math.max(0, bet.resolvesAt - Date.now());
        const seconds = Math.ceil(timeLeft / 1000);
        const totalDuration = getBetDuration(bet.hours);
        const progress = Math.max(0, Math.min(100, 100 - (timeLeft / totalDuration * 100)));

        return `
            <div class="active-bet-item" data-bet-id="${bet.id}">
                <div class="bet-info">
                    <span class="bet-scenario">${bet.scenarioName}</span>
                    <span class="bet-asset">${bet.amount}x ${bet.asset}</span>
                </div>
                <div class="bet-odds">Odds: ${bet.odds}</div>
                <div class="bet-timer-container">
                    <div class="bet-progress-bar">
                        <div class="bet-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="bet-timer" data-resolve="${bet.resolvesAt}">
                        ${seconds > 0 ? `${seconds}s` : 'Resolving...'}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Update active bet timers every second
let activeBetsTimerInterval = null;

function startActiveBetsTimer() {
    if (activeBetsTimerInterval) clearInterval(activeBetsTimerInterval);

    activeBetsTimerInterval = setInterval(() => {
        const timerElements = document.querySelectorAll('.bet-timer[data-resolve]');
        const progressElements = document.querySelectorAll('.active-bet-item');

        timerElements.forEach((el, index) => {
            const resolveAt = parseInt(el.dataset.resolve);
            const timeLeft = Math.max(0, resolveAt - Date.now());
            const seconds = Math.ceil(timeLeft / 1000);
            el.textContent = seconds > 0 ? `${seconds}s` : 'Resolving...';

            // Update progress bar
            if (progressElements[index]) {
                const betItem = progressElements[index];
                const betId = betItem.dataset.betId;
                const bet = activeBets.find(b => b.id == betId);
                if (bet) {
                    const totalDuration = getBetDuration(bet.hours);
                    const progress = Math.max(0, Math.min(100, 100 - (timeLeft / totalDuration * 100)));
                    const progressFill = betItem.querySelector('.bet-progress-fill');
                    if (progressFill) progressFill.style.width = `${progress}%`;
                }
            }
        });
    }, 1000);
}

// Lore Popover System
let activePopover = null;
let lorePopoverTrigger = null; // For focus restoration

function showLorePopover(itemElement) {
    const lore = itemElement.dataset.lore;
    if (!lore) return;

    // Store trigger element for focus restoration
    lorePopoverTrigger = itemElement.querySelector('.lore-trigger');

    // Close any existing popover
    closeLorePopover();

    // Create popover with accessibility attributes
    const popover = document.createElement('div');
    popover.className = 'lore-popover';
    popover.setAttribute('role', 'tooltip');
    popover.setAttribute('id', `lore-tooltip-${Date.now()}`);
    popover.innerHTML = `
        <button class="lore-popover-close" aria-label="Close lore tooltip">&times;</button>
        <p>${lore}</p>
    `;

    // Position popover
    const rect = itemElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    document.body.appendChild(popover);

    // Determine if popover should appear above or below
    const popoverRect = popover.getBoundingClientRect();
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow >= popoverRect.height + 10 || spaceBelow > spaceAbove) {
        // Position below
        popover.style.top = `${rect.bottom + window.scrollY + 8}px`;
    } else {
        // Position above
        popover.style.top = `${rect.top + window.scrollY - popoverRect.height - 8}px`;
    }

    // Center horizontally relative to item
    popover.style.left = `${Math.max(10, rect.left + (rect.width / 2) - 140)}px`;

    // Ensure popover doesn't go off right edge
    const popoverRectAfter = popover.getBoundingClientRect();
    if (popoverRectAfter.right > window.innerWidth - 10) {
        popover.style.left = `${window.innerWidth - 290}px`;
    }

    activePopover = popover;

    // Add close button click handler
    const closeBtn = popover.querySelector('.lore-popover-close');
    if (closeBtn) {
        closeBtn.onclick = closeLorePopover;
        // Focus close button for keyboard navigation
        setTimeout(() => closeBtn.focus(), 50);
    }

    // Add Escape key handler (accessibility)
    document.addEventListener('keydown', handleLorePopoverEscape);

    // Close on outside click
    setTimeout(() => {
        document.addEventListener('click', handlePopoverOutsideClick);
    }, 10);
}

function closeLorePopover() {
    if (activePopover) {
        activePopover.remove();
        activePopover = null;
        document.removeEventListener('click', handlePopoverOutsideClick);
        document.removeEventListener('keydown', handleLorePopoverEscape);

        // Restore focus to trigger button (accessibility)
        if (lorePopoverTrigger && lorePopoverTrigger.focus) {
            lorePopoverTrigger.focus();
        }
        lorePopoverTrigger = null;
    }
}

function handlePopoverOutsideClick(e) {
    if (activePopover && !activePopover.contains(e.target) && !e.target.classList.contains('lore-trigger')) {
        closeLorePopover();
    }
}

function handleLorePopoverEscape(e) {
    if (e.key === 'Escape' && activePopover) {
        closeLorePopover();
    }
}

function renderOdds() {
    oddsBody.innerHTML = scenarios.map((s, i) => `
        <div class="table-row" onclick="openScenario(${i})">
            <div class="col-hours">${s.hours}</div>
            <div class="col-scenario">
                <div class="scenario-name"><span class="scenario-icon" aria-hidden="true">${SCENARIO_ICONS[i] || '📊'}</span>${s.name}</div>
                <span class="scenario-desc">${s.description}</span>
            </div>
            <div class="col-odds" id="odds-${i}">${s.odds}</div>
            <div class="col-payout">${s.payout}</div>
        </div>
    `).join('');
}

function selectAsset(element, assetName) {
    document.querySelectorAll('.wallet-item').forEach(el => el.classList.remove(CONFIG.CLASS_SELECTED));
    element.classList.add(CONFIG.CLASS_SELECTED);
    selectedCurrency = assetName;

    // Find the full asset data from walletState (mutable, current amounts)
    selectedCurrencyData = null;
    for (const category of walletState) {
        const found = category.items.find(item => item.name === assetName);
        if (found) {
            // Check if actually has balance
            const amount = parseFloat(found.amount.replace(/[^0-9.]/g, '')) || 0;
            if (amount <= 0) {
                showErrorToast('ACTION_UNAVAILABLE');
                return;
            }
            selectedCurrencyData = {
                ...found,
                category: category.category,
                categoryId: category.categoryId
            };
            break;
        }
    }

    // Reset wager amount to 1
    wagerAmount = 1;

    // Update the wager display in modal if it's open
    updateWagerDisplay();

    showToast(`ASSET SELECTED: ${assetName}`);
}

function getMaxWagerAmount() {
    if (!selectedCurrencyData) return 0;
    const amountStr = selectedCurrencyData.amount;
    // Parse the amount - handle special cases like "$0.37", "½", "EQUIPPED", etc.
    const parsed = parseFloat(amountStr.replace(/[^0-9.]/g, ''));
    if (isNaN(parsed) || parsed <= 0) {
        // Non-numeric amounts like "RARE", "EQUIPPED" = 1
        return 1;
    }
    return Math.floor(parsed);
}

function updateWagerDisplay() {
    const assetDisplay = document.getElementById('wager-asset-display');
    const amountRow = document.getElementById('wager-amount-row');
    const wagerInput = document.getElementById('wager-amount');
    const maxAmountSpan = document.getElementById('wager-max-amount');

    if (!assetDisplay) return;

    if (selectedCurrencyData) {
        const maxAmount = getMaxWagerAmount();
        assetDisplay.innerHTML = `
            <div class="selected-asset">
                <div>
                    <span class="asset-name">${selectedCurrencyData.name}</span>
                    <span class="asset-category">${selectedCurrencyData.category}</span>
                </div>
                <span class="asset-balance">${selectedCurrencyData.amount}</span>
            </div>
        `;

        // Show amount row only if max > 1
        if (maxAmount > 1) {
            amountRow.style.display = 'flex';
            maxAmountSpan.textContent = maxAmount;
            wagerInput.value = wagerAmount;
        } else {
            amountRow.style.display = 'none';
            wagerAmount = 1;
        }
    } else {
        assetDisplay.innerHTML = '<span class="no-asset-selected">No asset selected. Open your ledger to choose.</span>';
        amountRow.style.display = 'none';
    }
}

function adjustWager(delta) {
    const maxAmount = getMaxWagerAmount();
    wagerAmount = Math.max(1, Math.min(maxAmount, wagerAmount + delta));
    const wagerInput = document.getElementById('wager-amount');
    if (wagerInput) wagerInput.value = wagerAmount;
}

function openScenario(index) {
    const s = scenarios[index];
    selectedScenario = index;

    document.getElementById('modal-hours').innerHTML = `${s.hours} <span>HOURS</span>`;
    document.getElementById('modal-title').textContent = s.name;
    document.getElementById('modal-odds').textContent = s.odds;
    document.getElementById('modal-desc').textContent = s.description;

    document.getElementById('modal-details').innerHTML = `
        <div class="detail-section">
            <h4>🦝 SYMPTOMS</h4>
            <ul>${s.symptoms.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
            <h4 class="text-danger">💥 THE CRASH BEGINS</h4>
            <ul>${s.crashBegins.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
            <h4 class="text-warning">⚡ DURING THE CRASH</h4>
            <ul>${s.duringCrash.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
            <h4 class="text-success">🌅 POST-CRASH</h4>
            <ul>${s.postCrash.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="detail-section">
            <h4 class="text-muted">📊 OUTCOMES</h4>
            <ul>${s.outcomes.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
    `;

    // Update wager display with current selection
    updateWagerDisplay();

    modalOverlay.classList.add(CONFIG.CLASS_ACTIVE);
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove(CONFIG.CLASS_ACTIVE);
    }
}

function placeBet() {
    if (!selectedCurrency) {
        showErrorToast('NO_CURRENCY');
        return;
    }

    // Verify we still have enough balance (could have changed)
    const currentAsset = findAssetInWallet(selectedCurrency);
    if (!currentAsset) {
        showErrorToast('ACTION_UNAVAILABLE');
        return;
    }

    const currentAmount = parseFloat(currentAsset.item.amount.replace(/[^0-9.]/g, '')) || 0;
    if (currentAmount < wagerAmount) {
        showErrorToast('ACTION_UNAVAILABLE');
        return;
    }

    // Check max active bets
    if (activeBets.length >= CONFIG.MAX_ACTIVE_BETS) {
        showToast(`MAX BETS REACHED: Wait for a bet to resolve. Patience, degenerate.`);
        return;
    }

    const s = scenarios[selectedScenario];

    // DEDUCT FROM WALLET IMMEDIATELY
    deductFromWallet(selectedCurrency, wagerAmount);

    // Update stats (totalBets tracked when bet placed, win/loss tracked on resolution)
    betStats.totalBets++;
    saveBetStats();

    // CREATE ACTIVE BET (timer-based resolution)
    const assetId = selectedCurrencyData?.id || 'unknown';
    createActiveBet(s, selectedScenario, selectedCurrency, assetId, wagerAmount);

    // VISUAL EFFECTS
    if (!document.body.classList.contains(CONFIG.CLASS_REDUCE_MOTION)) {
        document.body.classList.add(CONFIG.CLASS_FLASH_ACTIVE);
        setTimeout(() => {
            document.body.classList.remove(CONFIG.CLASS_FLASH_ACTIVE);
        }, CONFIG.FLASH_DURATION);
    }

    // Close scenario modal
    closeModal();

    // Show bet placed confirmation
    const betDuration = getBetDuration(s.hours) / 1000;
    const placedMessage = BET_MESSAGES.placed[Math.floor(Math.random() * BET_MESSAGES.placed.length)];
    showToast(`${placedMessage} (Resolves in ${betDuration}s)`);

    // Play bet sound
    playSound('bet');

    // Spawn confetti for the excitement
    spawnConfetti();

    // Update wallet display
    renderWallet();

    // Clear selection
    selectedCurrency = null;
    selectedCurrencyData = null;

    // EASTER EGG: Trigger RealPlayer popup on 3rd bet
    if (betStats.totalBets === 3 && !realPlayerShown) {
        setTimeout(() => {
            showRealPlayerPopup();
        }, 2500);
    }

    // EASTER EGG: Trigger Clippy on 7th bet
    if (betStats.totalBets === 7 && !clippyShown) {
        setTimeout(() => {
            triggerClippy();
        }, 3000);
    }

    // Check if wallet is completely empty (may happen immediately after bet)
    checkWalletBankruptcy();
}

function checkWalletBankruptcy() {
    let totalBalance = 0;
    walletState.forEach(cat => {
        cat.items.forEach(item => {
            totalBalance += parseFloat(item.amount.replace(/[^0-9.]/g, '')) || 0;
        });
    });

    if (totalBalance <= 0) {
        setTimeout(() => {
            showBankruptcyModal();
        }, 2000);
    }
}

function showBetResult(isWin, scenario, wagered, winningsMessage) {
    const existingModal = document.getElementById('bet-result-modal');
    if (existingModal) existingModal.remove();

    const messages = isWin ? BET_MESSAGES.win : BET_MESSAGES.loss;
    const message = messages[Math.floor(Math.random() * messages.length)];

    const modal = document.createElement('div');
    modal.id = 'bet-result-modal';
    modal.className = `bet-result-modal ${isWin ? 'win' : 'loss'}`;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', isWin ? 'You won!' : 'You lost');

    modal.innerHTML = `
        <div class="bet-result-content">
            <div class="result-icon">${isWin ? '🎰' : '💀'}</div>
            <div class="result-status">${isWin ? 'WINNER!' : 'LOSS'}</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                <div class="result-scenario">${scenario.name}</div>
                <div class="result-odds">Odds: ${scenario.odds}</div>
                <div class="result-wagered">Wagered: ${wagered}x ${selectedCurrency || 'asset'}</div>
                ${isWin ? `<div class="result-winnings">${winningsMessage}</div>` : ''}
            </div>
            <button class="result-close-btn" onclick="closeBetResult()">
                ${isWin ? 'COLLECT WINNINGS' : 'ACCEPT DEFEAT'}
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate in
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Confetti on win
    if (isWin) {
        spawnConfetti();
        setTimeout(spawnConfetti, 300);
    }

    // Auto-close after 8 seconds
    setTimeout(() => {
        if (document.getElementById('bet-result-modal')) {
            closeBetResult();
        }
    }, 8000);
}

function closeBetResult() {
    const modal = document.getElementById('bet-result-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function showBankruptcyModal() {
    const existingModal = document.getElementById('bankruptcy-modal');
    if (existingModal) existingModal.remove();

    const message = BET_MESSAGES.broke[Math.floor(Math.random() * BET_MESSAGES.broke.length)];

    const modal = document.createElement('div');
    modal.id = 'bankruptcy-modal';
    modal.className = 'bet-result-modal loss bankruptcy';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
        <div class="bet-result-content">
            <div class="result-icon">💸</div>
            <div class="result-status">BANKRUPT</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                <div class="result-scenario">Total Bets: ${betStats.totalBets}</div>
                <div class="result-odds">Win Rate: ${betStats.totalBets > 0 ? Math.round((betStats.wins / betStats.totalBets) * 100) : 0}%</div>
                <div class="result-wagered">Best Streak: ${betStats.bestStreak}</div>
            </div>
            <button class="result-close-btn" onclick="resetWallet(); closeBankruptcyModal();">
                🔄 START OVER
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    playSound('error');
}

function closeBankruptcyModal() {
    const modal = document.getElementById('bankruptcy-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

let toastTimeout;
function showToast(message) {
    if (!toast) return;

    const toastTitle = toast.querySelector('.toast-title');
    const toastMsg = toast.querySelector('.toast-message');

    if (toastTitle) toastTitle.textContent = "SYSTEM ALERT";
    if (toastMsg) toastMsg.textContent = message;

    toast.classList.add(CONFIG.CLASS_SHOW);

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove(CONFIG.CLASS_SHOW);
    }, CONFIG.TOAST_DURATION);
}

// TEXT SCRAMBLE EFFECT
function scrambleText(element, finalText, duration = CONFIG.SCRAMBLE_DURATION) {
    const chars = CONFIG.SCRAMBLE_CHARS;
    const steps = CONFIG.SCRAMBLE_STEPS;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
        if (currentStep >= steps) {
            element.innerText = finalText;
            clearInterval(interval);
            return;
        }

        let scrambled = '';
        for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === '/') {
                scrambled += '/';
            } else {
                scrambled += chars[Math.floor(Math.random() * (chars.length - 1))];
            }
        }
        element.innerText = scrambled;
        currentStep++;
    }, stepDuration);
}

function startOddsFluctuation() {
    setInterval(() => {
        // Skip if reduce motion is enabled
        if (document.body.classList.contains(CONFIG.CLASS_REDUCE_MOTION)) return;

        const i = Math.floor(Math.random() * scenarios.length);
        const el = document.getElementById(`odds-${i}`);
        if (!el) return;

        const original = el.innerText;
        const parts = original.split('/');
        if (parts.length !== 2) return;

        const num = parseInt(parts[0]);
        const den = parseInt(parts[1]);
        const flux = Math.random() > 0.5 ? 1 : -1;
        const newNum = Math.max(1, num + flux);
        const newText = `${newNum}/${den}`;

        el.style.color = '#ff4d00'; // Flash Orange
        scrambleText(el, newText, CONFIG.SCRAMBLE_DURATION);

        setTimeout(() => {
            el.style.color = '';
            el.innerText = original;
        }, CONFIG.ODDS_RESET_DELAY);
    }, CONFIG.ODDS_FLUCTUATION_INTERVAL);
}

function spawnConfetti() {
    for (let i = 0; i < CONFIG.CONFETTI_COUNT; i++) {
        const el = document.createElement('div');
        el.innerText = CONFETTI_EMOJIS[Math.floor(Math.random() * CONFETTI_EMOJIS.length)];
        el.className = 'particle';
        el.style.left = '50%';
        el.style.top = '50%';

        const sizeRange = CONFIG.CONFETTI_MAX_SIZE - CONFIG.CONFETTI_MIN_SIZE;
        el.style.fontSize = (Math.random() * sizeRange + CONFIG.CONFETTI_MIN_SIZE) + 'px';
        document.body.appendChild(el);

        const angle = Math.random() * Math.PI * 2;
        const velocityRange = CONFIG.CONFETTI_MAX_VELOCITY - CONFIG.CONFETTI_MIN_VELOCITY;
        const velocity = Math.random() * velocityRange + CONFIG.CONFETTI_MIN_VELOCITY;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        el.animate([
            { transform: 'translate(-50%, -50%)', opacity: 1 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });

        setTimeout(() => el.remove(), CONFIG.CONFETTI_CLEANUP_DELAY);
    }
}

// ============================================
// WAIVER MODAL INITIALIZATION
// ============================================
function initWaiverModal() {
    const waiverOverlay = document.getElementById('waiver-overlay');
    const acceptBtn = document.getElementById('accept-waiver-btn');

    if (!waiverOverlay || !acceptBtn) return;

    const hasSignedWaiver = localStorage.getItem(CONFIG.STORAGE_WAIVER_KEY);

    if (!hasSignedWaiver) {
        setTimeout(() => {
            waiverOverlay.classList.add(CONFIG.CLASS_ACTIVE);
        }, CONFIG.WAIVER_DELAY);
    }

    acceptBtn.addEventListener('click', () => {
        acceptBtn.classList.add(CONFIG.CLASS_ACCEPTED);

        setTimeout(() => {
            localStorage.setItem(CONFIG.STORAGE_WAIVER_KEY, 'true');
            waiverOverlay.classList.remove(CONFIG.CLASS_ACTIVE);
            showToast('WAIVER ACCEPTED');
        }, CONFIG.WAIVER_ANIMATION_DURATION);
    });
}

// ============================================
// REDUCE MOTION TOGGLE INITIALIZATION
// ============================================
function initReduceMotionToggle() {
    const toggle = document.getElementById('reduce-motion-toggle');
    if (!toggle) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const savedPreference = localStorage.getItem(CONFIG.STORAGE_MOTION_KEY);

    if (savedPreference !== null) {
        const shouldReduce = savedPreference === 'true';
        toggle.checked = shouldReduce;
        if (shouldReduce) {
            document.body.classList.add(CONFIG.CLASS_REDUCE_MOTION);
        }
    } else if (prefersReducedMotion) {
        toggle.checked = true;
        document.body.classList.add(CONFIG.CLASS_REDUCE_MOTION);
    }

    toggle.addEventListener('change', () => {
        const isChecked = toggle.checked;
        document.body.classList.toggle(CONFIG.CLASS_REDUCE_MOTION, isChecked);
        localStorage.setItem(CONFIG.STORAGE_MOTION_KEY, String(isChecked));
    });
}

// ============================================
// MOBILE DRAWERS
// ============================================
let activeDrawer = null;
let drawerStartY = 0;
let drawerCurrentY = 0;
let previousFocusElement = null; // For focus restoration
let focusTrapHandler = null; // For cleanup

// ============================================
// FOCUS TRAP UTILITY (Accessibility)
// ============================================
function createFocusTrap(element) {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    return function handleKeyDown(e) {
        if (e.key !== 'Tab') return;

        const focusableElements = element.querySelectorAll(focusableSelectors);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement) return;

        if (e.shiftKey) {
            // Shift + Tab: going backwards
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab: going forwards
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };
}

function initMobileDrawers() {
    const drawerOverlay = document.getElementById('drawer-overlay');
    const profileDrawer = document.getElementById('profile-drawer');
    const scenariosDrawer = document.getElementById('scenarios-drawer');
    const closeProfileBtn = document.getElementById('close-profile-drawer');
    const closeScenariosBtn = document.getElementById('close-scenarios-drawer');

    // Render mobile odds
    renderMobileOdds();

    // Close buttons
    if (closeProfileBtn) {
        closeProfileBtn.addEventListener('click', () => closeDrawer(profileDrawer));
    }
    if (closeScenariosBtn) {
        closeScenariosBtn.addEventListener('click', () => closeDrawer(scenariosDrawer));
    }

    // Overlay click to close
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeAllDrawers);
    }

    // Swipe down to close
    [profileDrawer, scenariosDrawer].forEach(drawer => {
        if (!drawer) return;

        const handle = drawer.querySelector('.drawer-handle');
        if (handle) {
            handle.addEventListener('touchstart', handleDrawerTouchStart, { passive: true });
            handle.addEventListener('touchmove', handleDrawerTouchMove, { passive: false });
            handle.addEventListener('touchend', handleDrawerTouchEnd);
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeDrawer) {
            closeDrawer(activeDrawer);
        }
    });
}

function openDrawer(drawer) {
    if (!drawer) return;

    const drawerOverlay = document.getElementById('drawer-overlay');

    // Store current focus for restoration
    previousFocusElement = document.activeElement;

    // Close any open drawer first
    closeAllDrawers();

    activeDrawer = drawer;
    drawer.classList.add(CONFIG.CLASS_OPEN);
    if (drawerOverlay) drawerOverlay.classList.add(CONFIG.CLASS_ACTIVE);
    document.body.classList.add(CONFIG.CLASS_DRAWER_OPEN);

    // Set up focus trap (accessibility)
    focusTrapHandler = createFocusTrap(drawer);
    drawer.addEventListener('keydown', focusTrapHandler);

    // Focus first focusable element
    const focusableElements = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
        // Small delay to ensure drawer is visible before focusing
        setTimeout(() => focusableElements[0].focus(), 50);
    }

    // Update nav button active state
    updateNavActiveState(drawer.id);
}

function closeDrawer(drawer) {
    if (!drawer) return;

    const drawerOverlay = document.getElementById('drawer-overlay');

    // Remove focus trap handler
    if (focusTrapHandler) {
        drawer.removeEventListener('keydown', focusTrapHandler);
        focusTrapHandler = null;
    }

    drawer.classList.remove(CONFIG.CLASS_OPEN);
    drawer.style.transform = '';
    if (drawerOverlay) drawerOverlay.classList.remove(CONFIG.CLASS_ACTIVE);
    document.body.classList.remove(CONFIG.CLASS_DRAWER_OPEN);
    activeDrawer = null;

    // Restore focus to trigger element (accessibility)
    if (previousFocusElement && previousFocusElement.focus) {
        previousFocusElement.focus();
        previousFocusElement = null;
    }

    // Clear nav button active states
    updateNavActiveState(null);
}

function closeAllDrawers() {
    const drawers = document.querySelectorAll('.mobile-drawer');
    drawers.forEach(drawer => closeDrawer(drawer));
}

function handleDrawerTouchStart(e) {
    drawerStartY = e.touches[0].clientY;
    drawerCurrentY = drawerStartY;
}

function handleDrawerTouchMove(e) {
    if (!activeDrawer) return;

    drawerCurrentY = e.touches[0].clientY;
    const deltaY = drawerCurrentY - drawerStartY;

    // Only allow downward swipe
    if (deltaY > 0) {
        e.preventDefault();
        activeDrawer.style.transform = `translateY(${deltaY}px)`;
    }
}

function handleDrawerTouchEnd() {
    if (!activeDrawer) return;

    const deltaY = drawerCurrentY - drawerStartY;

    // If swiped down more than 100px, close the drawer
    if (deltaY > 100) {
        closeDrawer(activeDrawer);
    } else {
        activeDrawer.style.transform = '';
    }

    drawerStartY = 0;
    drawerCurrentY = 0;
}

function renderMobileOdds() {
    const mobileOddsBody = document.getElementById('mobile-odds-body');
    if (!mobileOddsBody) return;

    mobileOddsBody.innerHTML = scenarios.map((s, i) => `
        <div class="table-row" onclick="openScenario(${i}); closeAllDrawers();">
            <div class="col-hours">${s.hours}</div>
            <div class="col-scenario">
                <div class="scenario-name"><span class="scenario-icon" aria-hidden="true">${SCENARIO_ICONS[i] || '📊'}</span>${s.name}</div>
                <span class="scenario-desc">${s.description}</span>
            </div>
            <div class="col-odds" id="mobile-odds-${i}">${s.odds}</div>
            <div class="col-payout">${s.payout}</div>
        </div>
    `).join('');
}

function updateNavActiveState(activeDrawerId) {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove(CONFIG.CLASS_ACTIVE);
        btn.removeAttribute('aria-current'); // Clear aria-current (accessibility)
    });

    if (activeDrawerId === 'profile-drawer') {
        const profileBtn = document.getElementById('nav-profile');
        if (profileBtn) {
            profileBtn.classList.add(CONFIG.CLASS_ACTIVE);
            profileBtn.setAttribute('aria-current', 'true'); // Announce active state to screen readers
        }
    } else if (activeDrawerId === 'scenarios-drawer') {
        const scenariosBtn = document.getElementById('nav-scenarios');
        if (scenariosBtn) {
            scenariosBtn.classList.add(CONFIG.CLASS_ACTIVE);
            scenariosBtn.setAttribute('aria-current', 'true');
        }
    }
}

// ============================================
// MOBILE BOTTOM NAV
// ============================================
function initMobileNav() {
    const navScenarios = document.getElementById('nav-scenarios');
    const navInventory = document.getElementById('nav-inventory');
    const navProfile = document.getElementById('nav-profile');
    const navInfo = document.getElementById('nav-info');

    const profileDrawer = document.getElementById('profile-drawer');
    const scenariosDrawer = document.getElementById('scenarios-drawer');

    if (navScenarios) {
        navScenarios.addEventListener('click', () => {
            openDrawer(scenariosDrawer);
        });
    }

    if (navInventory) {
        navInventory.addEventListener('click', () => {
            // Open wallet drawer (reuse existing functionality)
            toggleWallet();
            closeAllDrawers();
        });
    }

    if (navProfile) {
        navProfile.addEventListener('click', () => {
            openDrawer(profileDrawer);
        });
    }

    if (navInfo) {
        navInfo.addEventListener('click', () => {
            toggleExplainer();
        });
    }
}

// ============================================
// EXPLAINER TOOLTIP
// ============================================
let explainerVisible = false;

function initExplainer() {
    const headerTrigger = document.getElementById('header-info-trigger');
    const tooltip = document.getElementById('explainer-tooltip');

    if (headerTrigger) {
        headerTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExplainer();
        });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (explainerVisible && tooltip && !tooltip.contains(e.target)) {
            hideExplainer();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && explainerVisible) {
            hideExplainer();
        }
    });
}

function toggleExplainer() {
    if (explainerVisible) {
        hideExplainer();
    } else {
        showExplainer();
    }
}

function showExplainer() {
    const tooltip = document.getElementById('explainer-tooltip');
    const headerTrigger = document.getElementById('header-info-trigger');

    if (tooltip) {
        tooltip.classList.add(CONFIG.CLASS_VISIBLE);
        explainerVisible = true;

        if (headerTrigger) {
            headerTrigger.setAttribute('aria-expanded', 'true');
        }
    }
}

function hideExplainer() {
    const tooltip = document.getElementById('explainer-tooltip');
    const headerTrigger = document.getElementById('header-info-trigger');

    if (tooltip) {
        tooltip.classList.remove(CONFIG.CLASS_VISIBLE);
        explainerVisible = false;

        if (headerTrigger) {
            headerTrigger.setAttribute('aria-expanded', 'false');
        }
    }
}

// ============================================
// BET CONFIRMATION BANNER
// ============================================
let betBannerTimeout;

function showBetBanner(scenarioName, assetName = '', amount = 1) {
    const banner = document.getElementById('bet-banner');
    const scenarioEl = document.getElementById('bet-banner-scenario');
    const sanityEl = document.getElementById('bet-banner-sanity');

    if (!banner) return;

    // Random sanity loss between 1-10
    const sanityLoss = Math.floor(Math.random() * 10) + 1;

    // Build scenario text with wager info
    const wagerText = assetName ? ` [${amount}x ${assetName}]` : '';
    if (scenarioEl) scenarioEl.textContent = scenarioName + wagerText;
    if (sanityEl) sanityEl.textContent = `— SANITY -${sanityLoss}`;

    banner.classList.add(CONFIG.CLASS_SHOW);

    // Play sound
    playSound('toast');

    // Clear any existing timeout
    clearTimeout(betBannerTimeout);

    // Auto-dismiss after 4 seconds
    betBannerTimeout = setTimeout(() => {
        hideBetBanner();
    }, CONFIG.BET_BANNER_DURATION);
}

function hideBetBanner() {
    const banner = document.getElementById('bet-banner');
    if (banner) {
        banner.classList.remove(CONFIG.CLASS_SHOW);
    }
    clearTimeout(betBannerTimeout);
}

function initBetBanner() {
    const closeBtn = document.getElementById('bet-banner-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideBetBanner);
    }
}

// ============================================
// LOADING MESSAGES
// ============================================
function getLoadingMessage() {
    return LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
}

function showLoadingState(container) {
    if (!container) return;

    const message = getLoadingMessage();
    container.innerHTML = `<div class="loading-message">${message}<span class="loading-dots"></span></div>`;
}

// Utility to wrap async operations with minimum display time
async function withLoadingMessage(container, asyncFn) {
    const startTime = Date.now();
    showLoadingState(container);

    try {
        const result = await asyncFn();
        const elapsed = Date.now() - startTime;

        // Ensure minimum display time
        if (elapsed < CONFIG.MIN_LOADING_DISPLAY) {
            await new Promise(resolve => setTimeout(resolve, CONFIG.MIN_LOADING_DISPLAY - elapsed));
        }

        return result;
    } catch (error) {
        const elapsed = Date.now() - startTime;
        if (elapsed < CONFIG.MIN_LOADING_DISPLAY) {
            await new Promise(resolve => setTimeout(resolve, CONFIG.MIN_LOADING_DISPLAY - elapsed));
        }
        throw error;
    }
}

// Full-screen loading overlay for bet resolution
function showBetLoadingOverlay() {
    const existingOverlay = document.getElementById('bet-loading-overlay');
    if (existingOverlay) existingOverlay.remove();

    const message = getLoadingMessage();
    const overlay = document.createElement('div');
    overlay.id = 'bet-loading-overlay';
    overlay.className = 'bet-loading-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');
    overlay.setAttribute('aria-label', 'Processing your wager');

    overlay.innerHTML = `
        <div class="bet-loading-content">
            <div class="loading-spinner"></div>
            <div class="loading-message">${message}<span class="loading-dots"></span></div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Animate in
    requestAnimationFrame(() => {
        overlay.classList.add('show');
    });
}

function hideBetLoadingOverlay() {
    const overlay = document.getElementById('bet-loading-overlay');
    if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
    }
}

// ============================================
// ERROR MESSAGING
// ============================================
function getErrorMessage(errorType = 'GENERIC') {
    return ERROR_MESSAGES[errorType] || ERROR_MESSAGES.GENERIC;
}

function showErrorToast(errorType = 'GENERIC') {
    const message = getErrorMessage(errorType);

    if (!toast) return;

    const toastTitle = toast.querySelector('.toast-title');
    const toastMsg = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    if (toastTitle) toastTitle.textContent = "SYSTEM MALFUNCTION";
    if (toastMsg) toastMsg.textContent = message;
    if (toastIcon) toastIcon.textContent = "⚠️";

    toast.classList.add(CONFIG.CLASS_SHOW, CONFIG.CLASS_ERROR);

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove(CONFIG.CLASS_SHOW, CONFIG.CLASS_ERROR);
        if (toastIcon) toastIcon.textContent = "🎰";
    }, CONFIG.TOAST_DURATION);
}

function showInlineError(container, errorType = 'GENERIC') {
    if (!container) return;

    const message = getErrorMessage(errorType);
    container.innerHTML = `<div class="error-message">${message}</div>`;
}

// ============================================
// UPDATED INITIALIZATION
// ============================================
function initMobileFeatures() {
    initMobileDrawers();
    initMobileNav();
    initExplainer();
    initBetBanner();
}

// ============================================
// SOUND SYSTEM (OFF BY DEFAULT)
// ============================================
let soundEnabled = false;
let audioContext = null;

// Initialize sound toggle
function initSoundToggle() {
    const toggle = document.getElementById('sound-toggle');
    if (!toggle) return;

    // Load saved preference (default is OFF)
    const savedPreference = localStorage.getItem('degen_sound_enabled');
    soundEnabled = savedPreference === 'true';
    toggle.checked = soundEnabled;

    // Update visual state
    updateSoundToggleVisual(soundEnabled);

    // Handle toggle change
    toggle.addEventListener('change', () => {
        soundEnabled = toggle.checked;
        localStorage.setItem('degen_sound_enabled', String(soundEnabled));
        updateSoundToggleVisual(soundEnabled);

        // Initialize audio context on first enable (needs user interaction)
        if (soundEnabled && !audioContext) {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.warn('Web Audio API not supported');
            }
        }

        // Play test sound when enabled
        if (soundEnabled) {
            playSound('toast');
        }
    });
}

// Update the visual state of the sound toggle
function updateSoundToggleVisual(enabled) {
    const label = document.getElementById('sound-toggle-label');
    const icon = document.getElementById('sound-toggle-icon');

    if (label) {
        label.textContent = enabled ? 'SOUND: ON' : 'SOUND: OFF';
    }
    if (icon) {
        icon.textContent = enabled ? '💓' : '💔';
        icon.classList.toggle('active', enabled);
    }
}

// Play a sound effect (using Web Audio API for simple tones)
function playSound(type) {
    if (!soundEnabled) return;

    // Initialize audio context if needed (requires user interaction first)
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            return;
        }
    }

    // Resume context if suspended
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const now = audioContext.currentTime;

    switch (type) {
        case 'bet':
            // Casino chip sound - soft ding
            playTone(800, 0.1, 'sine', 0.3);
            setTimeout(() => playTone(1000, 0.1, 'sine', 0.2), 50);
            break;

        case 'win':
            // Triumphant ascending arpeggio
            playTone(523, 0.15, 'sine', 0.4); // C5
            setTimeout(() => playTone(659, 0.15, 'sine', 0.4), 100); // E5
            setTimeout(() => playTone(784, 0.15, 'sine', 0.4), 200); // G5
            setTimeout(() => playTone(1047, 0.3, 'sine', 0.5), 300); // C6
            break;

        case 'loss':
            // Descending sad tones
            playTone(440, 0.2, 'sine', 0.3); // A4
            setTimeout(() => playTone(349, 0.2, 'sine', 0.25), 150); // F4
            setTimeout(() => playTone(294, 0.4, 'triangle', 0.2), 300); // D4
            break;

        case 'toast':
            // Paper shuffle - quick noise burst
            playNoise(0.05, 0.15);
            break;

        case 'error':
            // Low buzz
            playTone(150, 0.2, 'sawtooth', 0.2);
            break;

        default:
            playTone(440, 0.1, 'sine', 0.2);
    }
}

// Helper: Play a tone
function playTone(frequency, duration, waveType = 'sine', volume = 0.3) {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = waveType;
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Helper: Play noise (for shuffle sounds)
function playNoise(duration, volume = 0.1) {
    if (!audioContext) return;

    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
    }

    const noise = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    noise.buffer = buffer;
    noise.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    noise.start(audioContext.currentTime);
}

// ============================================
// FEATURE 11: ONBOARDING WELCOME COPY
// ============================================
const WELCOME_MESSAGES = [
    {
        headline: "WELCOME, EXHAUSTED CHAMPION",
        body: "You've found the waiting room of the soul. Pull up a chair. The WiFi is terrible and the vending machine judges you."
    },
    {
        headline: "YOU MADE IT. BARELY.",
        body: "Admission granted to the chaos zone. Your sanity deposit is non-refundable. Side effects may include: dark humor, excessive caffeine dependency, and accidentally becoming competent at medical terminology."
    },
    {
        headline: "PATIENT INTAKE: YOU",
        body: "While you wait, consider: Is time real? Does the IV pump ever stop beeping? Why is the cafeteria Jell-O sentient? These questions and more will haunt you."
    }
];

function initWelcomeBanner() {
    const hasSeenWelcome = localStorage.getItem('degen_welcome_seen');
    if (hasSeenWelcome) return;

    const welcomeBanner = document.getElementById('welcome-banner');
    const dismissBtn = document.getElementById('welcome-dismiss');

    if (!welcomeBanner) return;

    // Pick a random welcome message
    const message = WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];

    const headlineEl = welcomeBanner.querySelector('.welcome-headline');
    const bodyEl = welcomeBanner.querySelector('.welcome-body');

    if (headlineEl) headlineEl.textContent = message.headline;
    if (bodyEl) bodyEl.textContent = message.body;

    // Show banner after waiver is accepted
    setTimeout(() => {
        if (!localStorage.getItem(CONFIG.STORAGE_WAIVER_KEY)) {
            // Wait for waiver to be accepted
            const checkWaiver = setInterval(() => {
                if (localStorage.getItem(CONFIG.STORAGE_WAIVER_KEY)) {
                    clearInterval(checkWaiver);
                    setTimeout(() => showWelcomeBanner(), 500);
                }
            }, 500);
        } else {
            showWelcomeBanner();
        }
    }, 1000);

    if (dismissBtn) {
        dismissBtn.addEventListener('click', hideWelcomeBanner);
    }
}

function showWelcomeBanner() {
    const welcomeBanner = document.getElementById('welcome-banner');
    if (welcomeBanner) {
        welcomeBanner.classList.add(CONFIG.CLASS_SHOW);
        playSound('toast');
    }
}

function hideWelcomeBanner() {
    const welcomeBanner = document.getElementById('welcome-banner');
    if (welcomeBanner) {
        welcomeBanner.classList.remove(CONFIG.CLASS_SHOW);
        localStorage.setItem('degen_welcome_seen', 'true');
    }
}

// ============================================
// FEATURE 12: FAKE ACHIEVEMENT POPUPS
// ============================================
// ACHIEVEMENTS SYSTEM REMOVED

// ============================================
// FEATURE 13: EXPANDED BET OUTCOME MESSAGES
// ============================================
const BET_MESSAGES = {
    placed: [
        "Wager locked. The RNG gods have taken notice.",
        "Bet submitted to the void. May the chaos be ever in your favor.",
        "Your sanity has been wagered. There are no refunds.",
        "The house acknowledges your hubris. Proceed with caution.",
        "Bet registered. Somewhere, a nurse is laughing.",
        "Your offering has been accepted by the gambling spirits.",
        "The cosmic slot machine spins. Brace yourself.",
        "Transaction complete. Your regrets are being processed."
    ],
    win: [
        "IMPOSSIBLE. You actually won. The simulation is glitching.",
        "Victory! The cafeteria is buying today. (They're not.)",
        "Winner winner, hospital dinner! (It's Jell-O. It's always Jell-O.)",
        "You've beaten the odds! Quick, buy a lottery ticket before the luck runs out.",
        "CONGRATULATIONS! The universe owes you this one.",
        "The chaos favors the bold today. Bask in this fleeting moment.",
        "You won! Celebrate by not looking at your real bank account.",
        "SUCCESS! Your ancestors are confused but proud."
    ],
    loss: [
        "As expected. The house always wins. Always.",
        "Defeat tastes like cold coffee and broken dreams.",
        "You lost. But did you ever really have a chance?",
        "The void giveth, the void taketh. Today, mostly taketh.",
        "Loss registered. Your coping points remain your only comfort.",
        "Failure is just success in disguise. A very good disguise.",
        "You've lost, but at least it wasn't real money. Small mercies.",
        "The gambling gods demand sacrifice. Today, it was your dignity."
    ],
    broke: [
        "BANKRUPT. You've achieved the ultimate hospital caregiver achievement: emotional AND financial ruin.",
        "EMPTY WALLET. Time to reset and start your bad decisions fresh.",
        "NOTHING LEFT. The house took everything. The house is undefeated.",
        "TAPPED OUT. Your assets are gone. Your dignity left hours ago."
    ]
};

function getRandomBetMessage(type) {
    const messages = BET_MESSAGES[type] || BET_MESSAGES.placed;
    return messages[Math.floor(Math.random() * messages.length)];
}

// ============================================
// FEATURE 14: CONTEXTUAL HOVER TOOLTIPS
// ============================================
const TOOLTIP_CONTENT = {
    'wallet-toggle-btn': "Your collection of questionable assets. Handle with existential dread.",
    'header-info-trigger': "The lore behind the chaos. You asked for this.",
    'reduce-motion-toggle': "For when reality is moving too fast. Or you're just sensible.",
    'sound-toggle': "Enable to hear the sounds of your poor decisions.",
    'accept-waiver-btn': "Click to surrender your sanity to the void.",
    'bet-btn': "Commit to your bad decisions with conviction.",
    'ticker-display': "Real-time updates from the chaos dimension.",
    'live-indicator': "Yes, this is actually happening. No, we can't stop it.",
    'nav-scenarios': "Browse your doom options.",
    'nav-inventory': "Inventory of regrets and dubious currencies.",
    'nav-profile': "Gaze upon your increasingly unhinged stats.",
    'nav-info': "Why? Because hospitals are absurd."
};

let activeContextTooltip = null;

function initContextualTooltips() {
    Object.keys(TOOLTIP_CONTENT).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (!element) return;

        // Add tooltip attributes
        element.setAttribute('data-tooltip', TOOLTIP_CONTENT[elementId]);

        // Desktop: show on hover
        element.addEventListener('mouseenter', showContextTooltip);
        element.addEventListener('mouseleave', hideContextTooltip);
        element.addEventListener('focus', showContextTooltip);
        element.addEventListener('blur', hideContextTooltip);
    });
}

function showContextTooltip(e) {
    const element = e.currentTarget;
    const text = element.getAttribute('data-tooltip');
    if (!text) return;

    hideContextTooltip(); // Close any existing

    const tooltip = document.createElement('div');
    tooltip.className = 'context-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.textContent = text;

    document.body.appendChild(tooltip);

    // Position tooltip
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = rect.bottom + 8;
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    // Keep within viewport
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top + tooltipRect.height > window.innerHeight - 10) {
        top = rect.top - tooltipRect.height - 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;

    activeContextTooltip = tooltip;

    // Animate in
    requestAnimationFrame(() => tooltip.classList.add('visible'));
}

function hideContextTooltip() {
    if (activeContextTooltip) {
        activeContextTooltip.remove();
        activeContextTooltip = null;
    }
}

// ============================================
// FEATURE 16: HALL OF FAME - THE BURNOUT PANTHEON
// ============================================
function initLeaderboard() {
    const toggleBtn = document.getElementById('leaderboard-toggle');
    const modal = document.getElementById('leaderboard-modal');
    const closeBtn = document.getElementById('close-leaderboard');

    if (toggleBtn && modal) {
        toggleBtn.addEventListener('click', () => {
            modal.classList.add(CONFIG.CLASS_ACTIVE);
            initPantheonAccordions();
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove(CONFIG.CLASS_ACTIVE);
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove(CONFIG.CLASS_ACTIVE);
            }
        });
    }
}

function initPantheonAccordions() {
    const legendHeaders = document.querySelectorAll('.legend-header');

    legendHeaders.forEach(header => {
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
    });

    document.querySelectorAll('.legend-header').forEach(header => {
        header.addEventListener('click', toggleLegendCard);
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleLegendCard.call(header, e);
            }
        });
    });
}

function toggleLegendCard(e) {
    const header = e.currentTarget;
    const content = header.nextElementSibling;
    const isExpanded = header.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.legend-header[aria-expanded="true"]').forEach(openHeader => {
        if (openHeader !== header) {
            openHeader.setAttribute('aria-expanded', 'false');
            openHeader.nextElementSibling.hidden = true;
        }
    });

    header.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
}

// ============================================
// UPDATE INITIALIZATION TO INCLUDE NEW FEATURES
// ============================================
const originalInitMobileFeatures = initMobileFeatures;
initMobileFeatures = function() {
    originalInitMobileFeatures();

    // Initialize new features (loadAchievements removed)
    initWelcomeBanner();
    initContextualTooltips();
    initLeaderboard();
};

// placeBet function logic consolidated above - Easter eggs below remain without CP dependency

// ============================================
// FEATURE 17: KONAMI CODE EASTER EGG
// ============================================
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;
let konamiTriggered = false;

function initKonamiCode() {
    // Check if already triggered this session
    konamiTriggered = localStorage.getItem('degen_konami_triggered') === 'true';

    document.addEventListener('keydown', handleKonamiInput);
}

function handleKonamiInput(e) {
    if (konamiTriggered) return;

    if (e.code === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
            triggerKonamiReward();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}

function triggerKonamiReward() {
    konamiTriggered = true;
    localStorage.setItem('degen_konami_triggered', 'true');

    // Show all three rewards for maximum effect

    // 1. Toast message
    showToast("🎮 CHEAT CODE ACTIVATED: +∞ Coping Points (Just Kidding. There Is No Escape.)");

    // 2. Add temporary buff to visual display
    addKonamiBuff();

    // 3. Show secret achievement toast (achievement system removed, just show message)
    const konamiShown = localStorage.getItem('degen_konami_achievement_shown');
    if (!konamiShown) {
        setTimeout(() => {
            showToast("🏆 SECRET UNLOCKED: UP UP DOWN DOWN — You remembered the code. You remember too much.");
            localStorage.setItem('degen_konami_achievement_shown', 'true');
        }, 1500);
    }

    // Visual flourish
    if (!document.body.classList.contains(CONFIG.CLASS_REDUCE_MOTION)) {
        document.body.classList.add('konami-active');
        setTimeout(() => document.body.classList.remove('konami-active'), 3000);
    }

    // Play special sound
    playSound('konami');
}

function addKonamiBuff() {
    // Create temporary buff element that appears in the modifiers section
    const buffDisplay = document.createElement('span');
    buffDisplay.className = 'mod-tag buff konami-buff';
    buffDisplay.innerHTML = '🎮 NOSTALGIA SHIELD';
    buffDisplay.title = 'Immune to rational thought for 10 minutes.';

    const buffLists = document.querySelectorAll('.mod-group:first-child .mod-list');
    buffLists.forEach(list => {
        const clone = buffDisplay.cloneNode(true);
        list.appendChild(clone);

        // Remove after 10 minutes (or page refresh)
        setTimeout(() => clone.remove(), 600000);
    });
}

// Add konami sound to playSound function
const playSoundWithKonami = playSound;
playSound = function(type) {
    if (type === 'konami') {
        if (!soundEnabled || !audioContext) return;
        if (audioContext.state === 'suspended') audioContext.resume();
        // Classic video game power-up sound
        playTone(261, 0.1, 'square', 0.2); // C4
        setTimeout(() => playTone(329, 0.1, 'square', 0.2), 80); // E4
        setTimeout(() => playTone(392, 0.1, 'square', 0.2), 160); // G4
        setTimeout(() => playTone(523, 0.2, 'square', 0.3), 240); // C5
        return;
    }
    playSoundWithKonami(type);
};

// ============================================
// FEATURE 18: FAKE REALPLAYER POPUP
// ============================================
let realPlayerShown = false;

function initRealPlayerPopup() {
    realPlayerShown = localStorage.getItem('degen_realplayer_shown') === 'true';
}

function showRealPlayerPopup() {
    if (realPlayerShown) return;

    const popup = document.getElementById('realplayer-popup');
    if (!popup) return;

    realPlayerShown = true;
    localStorage.setItem('degen_realplayer_shown', 'true');

    popup.classList.add(CONFIG.CLASS_ACTIVE);
    playSound('error');

    // Set up button handlers
    const installBtn = document.getElementById('realplayer-install');
    const laterBtn = document.getElementById('realplayer-later');

    if (installBtn) {
        installBtn.onclick = () => {
            closeRealPlayerPopup();
            showToast("Installation failed. Just like everything else here.");
        };
    }

    if (laterBtn) {
        laterBtn.onclick = () => {
            closeRealPlayerPopup();
            showToast("We'll be right back. (We won't.)");
        };
    }

    // Close on overlay click
    popup.onclick = (e) => {
        if (e.target === popup) {
            closeRealPlayerPopup();
        }
    };
}

function closeRealPlayerPopup() {
    const popup = document.getElementById('realplayer-popup');
    if (popup) {
        popup.classList.remove(CONFIG.CLASS_ACTIVE);
    }
}

// ============================================
// FEATURE 19: AIM-STYLE AWAY MESSAGES
// ============================================
const AIM_AWAY_MESSAGES = [
    "~*~bRb CrYiNg In ThE bAtHrOoM~*~",
    "« away: dealing with insurance. back never »",
    "♫ nO oNe'S hOmE ♫ ♫ LeAvE a MeSsAgE ♫",
    "~*~if ur reading this its too late~*~",
    "« status: emotionally unavailable (always) »",
    "~*~gOnE 2 gEt MoRe CaFfEiNe~*~",
    "« brb: screaming into the void »",
    "♫ wAiTiNg RoOm ViBeS ♫",
    "~*~404: hOpE nOt FoUnD~*~",
    "« auto-reply: I am not okay but thanks for asking »"
];

function getRandomAimMessage() {
    return AIM_AWAY_MESSAGES[Math.floor(Math.random() * AIM_AWAY_MESSAGES.length)];
}

function showAimAwayTooltip(element, customMessage = null) {
    const message = customMessage || getRandomAimMessage();

    const tooltip = document.createElement('div');
    tooltip.className = 'aim-away-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerHTML = message;

    document.body.appendChild(tooltip);

    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.bottom + window.scrollY + 8}px`;
    tooltip.style.left = `${rect.left + (rect.width / 2)}px`;
    tooltip.style.transform = 'translateX(-50%)';

    // Animate in
    requestAnimationFrame(() => tooltip.classList.add('visible'));

    // Store reference for cleanup
    element._aimTooltip = tooltip;

    return tooltip;
}

function hideAimAwayTooltip(element) {
    if (element._aimTooltip) {
        element._aimTooltip.remove();
        element._aimTooltip = null;
    }
}

// Apply AIM tooltips to empty/unavailable states
function initAimTooltips() {
    // These will be applied dynamically when elements are in "unavailable" state
    // For now, we'll add them to specific decorative elements

    // Add to the "LIVE" indicator as an easter egg
    const liveIndicator = document.querySelector('.live-indicator');
    if (liveIndicator) {
        liveIndicator.addEventListener('mouseenter', () => {
            showAimAwayTooltip(liveIndicator, "« status: barely alive (the site, not me... maybe me) »");
        });
        liveIndicator.addEventListener('mouseleave', () => {
            hideAimAwayTooltip(liveIndicator);
        });
    }

    // Add to brand subtitle for extra nostalgia
    const brandSub = document.querySelector('.brand-sub');
    if (brandSub) {
        brandSub.addEventListener('mouseenter', () => {
            showAimAwayTooltip(brandSub);
        });
        brandSub.addEventListener('mouseleave', () => {
            hideAimAwayTooltip(brandSub);
        });
    }
}

// ============================================
// FEATURE 20: LIMEWIRE LOADING MESSAGES
// ============================================
// Add LimeWire-themed loading messages to the pool (achievement system removed)
LOADING_MESSAGES.push(
    "Downloading Hope.mp3 from LimeWire... (47 hours remaining)",
    "Buffering via RealPlayer... please wait...",
    "Your download will complete in approximately: ∞",
    "Searching Kazaa for 'medical_miracle.exe'..."
);

// ============================================
// FEATURE 21: CLIPPY EASTER EGG
// ============================================
let clippyShown = false;

function initClippy() {
    clippyShown = localStorage.getItem('degen_clippy_shown') === 'true';

    // Also trigger Clippy after 5 minutes on site
    if (!clippyShown) {
        setTimeout(() => {
            triggerClippy();
        }, 300000); // 5 minutes
    }
}

function triggerClippy() {
    if (clippyShown) return;

    const clippy = document.getElementById('clippy-popup');
    if (!clippy) return;

    clippyShown = true;
    localStorage.setItem('degen_clippy_shown', 'true');

    clippy.classList.add('show');

    // Play a subtle sound
    playSound('toast');

    // Set up dismiss button
    const dismissBtn = document.getElementById('clippy-dismiss');
    if (dismissBtn) {
        dismissBtn.onclick = () => {
            clippy.classList.remove('show');
            showToast("Clippy has been banished to the shadow realm.");
        };
    }

    // Also close on clicking anywhere on the popup
    clippy.onclick = (e) => {
        if (e.target === clippy || e.target.closest('.clippy-content')) {
            clippy.classList.remove('show');
        }
    };
}

// ============================================
// INITIALIZE ALL EASTER EGGS
// ============================================
const originalInitMobileFeaturesEaster = initMobileFeatures;
initMobileFeatures = function() {
    originalInitMobileFeaturesEaster();

    // Initialize easter eggs
    initKonamiCode();
    initRealPlayerPopup();
    initAimTooltips();
    initClippy();
};
