// --- DATA SOURCE (Restored from Original) ---
const walletData = [
    {
        category: "💩 Shitcoins", items: [
            { name: "$FOMO", amount: "47", id: "fomo" },
            { name: "$RUGGED", amount: "12", id: "rugged" },
            { name: "$MOONBOI", amount: "89", id: "moonboi" },
            { name: "$TRUSTME", amount: "23", id: "trustme" },
            { name: "$COPIUM", amount: "156", id: "copium" },
            { name: "$ELONSFART", amount: "3", id: "elon" },
            { name: "$HODL", amount: "31", id: "hodl" },
            { name: "$WAGMI", amount: "8", id: "wagmi" }
        ]
    },
    {
        category: "🖼️ Premium NFTs", items: [
            { name: "Diamond Hands NFT", amount: "2", id: "diamond" },
            { name: "WSB Member Jacket", amount: "1", id: "wsb" },
            { name: "Blockbuster Late Fee", amount: "3", id: "block" },
            { name: "AOL Install CD", amount: "1", id: "aol" }
        ]
    },
    {
        category: "🗑️ Garbage NFTs", items: [
            { name: "Haunted Tamagotchi", amount: "2", id: "tama" },
            { name: "MySpace Top 8 Slot", amount: "1", id: "myspace" },
            { name: "FuncoLand Loyalty Card", amount: "1", id: "funco" },
            { name: "Circuit City Gift Card", amount: "$0.37", id: "circuit" },
            { name: "1998 Surge (Cursed)", amount: "½", id: "surge" },
            { name: "I ❤️ 80s Leg Warmers", amount: "1", id: "legs" },
            { name: "Geocities GIF", amount: "1", id: "geo" },
            { name: "Laser School Photo", amount: "1", id: "laser" }
        ]
    }
];

const scenarios = [
    {
        hours: "1-21",
        name: "The Warm-Up Zone",
        description: "Odds of maintaining sanity: 89% — You're fresh-ish. The hospital hasn't broken you yet. Give it time.",
        odds: "25/1",
        payout: "1 $FOMO",
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
            "Still using complete sentences",
            "Maintains regular eating schedule",
            "Knows what day of the week it is",
            "Has not yet threatened any medical equipment"
        ]
    },
    {
        hours: "22-42",
        name: "The Raccoon Zone",
        description: "Odds of survival without collapsing: 67% — You operate on rage and concern alone. Sleep is becoming a myth.",
        odds: "12/1",
        payout: "3 $COPIUM",
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
        description: "Odds of maintaining composure: 41% — Equipment has begun to feel like it's taunting you personally.",
        odds: "7/1",
        payout: "5 $RUGGED + 1 Haunted Tamagotchi",
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
        payout: "1 Diamond Hands NFT + 10 $MOONBOI",
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
            "You develop the ability to talk in metaphors so deep the staff takes notes without knowing why",
            "You acquire the stealth powers of a raccoon in a Taco Bell dumpster — appearing and disappearing at will",
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
            "THERE IS NO CRASH IN OVERLORD MODE",
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
    '<span class="highlight">◆</span> $COPIUM reserves at ATH — correlation with "monitoring it" frequency confirmed',
    '<span class="down">▼</span> Hospital priest spotted walking past room 3x — holy water market moving',
    '<span class="up">▲</span> Ileus surrender odds improving — sources say it "sensed the energy shift"',
    '<span class="highlight">◆</span> Cafeteria discount now PERMANENT — name tag issued: "Caffeine Entity"',
];

// STATE
let selectedCurrency = null;
let selectedScenario = null;

// DOM ELEMENTS
const walletToggleBtn = document.getElementById('wallet-toggle-btn');
const walletDrawer = document.getElementById('wallet-drawer');
const closeWalletBtn = document.getElementById('close-wallet');
const walletGrid = document.getElementById('wallet-grid');
const oddsBody = document.getElementById('odds-body');
const toast = document.getElementById('toast');
const modalOverlay = document.getElementById('modal-overlay');

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderTicker();
    renderWallet();
    renderOdds();
    setupEventListeners();
    startOddsFluctuation();
});

// FUNCTIONS
function setupEventListeners() {
    walletToggleBtn.addEventListener('click', toggleWallet);
    closeWalletBtn.addEventListener('click', toggleWallet);

    document.addEventListener('click', (e) => {
        if (!walletDrawer.contains(e.target) && !walletToggleBtn.contains(e.target) && walletDrawer.classList.contains('open')) {
            toggleWallet();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function toggleWallet() {
    const isOpen = walletDrawer.classList.contains('open');
    if (isOpen) {
        walletDrawer.classList.remove('open');
        walletToggleBtn.classList.remove('active');
    } else {
        walletDrawer.classList.add('open');
        walletToggleBtn.classList.add('active');
    }
}

function renderTicker() {
    const ticker = document.getElementById('ticker-content');
    const messages = [...tickerMessages, ...tickerMessages]; // Duplicate for loop
    ticker.innerHTML = messages.map(msg => `<span class="ticker-item">${msg}</span>`).join('');
}

function renderWallet() {
    let html = '';
    walletData.forEach(cat => {
        html += `<div class="wallet-category-title">${cat.category}</div>`;
        html += `<div class="wallet-category-grid">`;
        cat.items.forEach(item => {
            html += `
                <div class="wallet-item" onclick="selectAsset(this, '${item.name}')">
                    <div class="item-name">${item.name}</div>
                    <div class="item-amount">${item.amount}</div>
                </div>
            `;
        });
        html += `</div>`;
    });
    walletGrid.innerHTML = html;
}

function renderOdds() {
    oddsBody.innerHTML = scenarios.map((s, i) => `
        <div class="table-row" onclick="openScenario(${i})">
            <div class="col-hours">${s.hours}</div>
            <div class="col-scenario">
                <div class="scenario-name">${s.name}</div>
                <span class="scenario-desc">${s.description}</span>
            </div>
            <div class="col-odds" id="odds-${i}">${s.odds}</div>
            <div class="col-payout">${s.payout}</div>
        </div>
    `).join('');
}

function selectAsset(element, assetName) {
    document.querySelectorAll('.wallet-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedCurrency = assetName;
    showToast(`ASSET SELECTED: ${assetName}`);
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

    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

function placeBet() {
    if (!selectedCurrency) {
        alert("⚠️ SELECT AN ASSET FROM YOUR WALLET FIRST!");
        return;
    }
    const s = scenarios[selectedScenario];
    showToast(`WAGER PLACED: ${selectedCurrency} on ${s.name}`);
    closeModal();
    spawnConfetti();
}

let toastTimeout;
function showToast(message) {
    const toastTitle = toast.querySelector('.toast-title');
    const toastMsg = toast.querySelector('.toast-message');

    toastTitle.textContent = "SYSTEM ALERT";
    toastMsg.textContent = message;

    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function startOddsFluctuation() {
    setInterval(() => {
        const i = Math.floor(Math.random() * scenarios.length);
        const el = document.getElementById(`odds-${i}`);
        if (el) {
            const original = el.innerText;
            const parts = original.split('/');
            if (parts.length === 2) {
                const num = parseInt(parts[0]);
                const den = parseInt(parts[1]);
                const flux = Math.random() > 0.5 ? 1 : -1;
                const newNum = Math.max(1, num + flux);

                el.style.color = '#ff4d00'; // Flash Orange
                el.innerText = `${newNum}/${den}`;

                setTimeout(() => {
                    el.style.color = '#00ff88'; // Return Green
                    el.innerText = original;
                }, 800);
            }
        }
    }, 3000);
}

function spawnConfetti() {
    const emojis = ['💊', '📉', '💎', '🚀', '🧟', '🏥', '💸'];
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.className = 'particle';
        el.style.left = '50%';
        el.style.top = '50%';
        el.style.fontSize = (Math.random() * 20 + 10) + 'px';
        document.body.appendChild(el);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
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

        setTimeout(() => el.remove(), 2000);
    }
}
